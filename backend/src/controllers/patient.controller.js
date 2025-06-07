import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Patient } from "../model/patient.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { registerPatientOnChain } from "../blockchain.js";

const generateAccessAndRefreshToken = async(userId) => {
    try{

        const patient = await Patient.findById(userId);
        const accessToken = patient.generateAccessToken();
        const refreshToken = patient.generateRefreshToken();

        patient.refreshToken = refreshToken;
        
        await patient.save({validateBeforeSave: false});

        return {accessToken, refreshToken}

    }catch(error){
        console.log(error);
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
}

const registerPatient = asyncHandler(async (req, res) => {
    //extracting patient details from the request body
    const { fullName, email, dateOfBirth, aadharNumber, address, phoneNumber,walletAddress, password, confirmPassword } = req.body;

    console.log(req.body);

    if([fullName, email, dateOfBirth, aadharNumber,address, phoneNumber,walletAddress, password, confirmPassword].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields are required");
    }

    const existedPatient = await Patient.findOne({aadharNumber})

    if(existedPatient){
        throw new ApiError(409, "aadhar Number  is already in use");
    }


    const existedWallet = await Patient.findOne({walletAddress})

    if(existedWallet){
        throw new ApiError(409, "walletAddress  is already in use");
    }
    const existedPhone = await Patient.findOne({phoneNumber})

    if(existedPhone){
        throw new ApiError(409, "Phone Number  is already in use");
    }

    if(password !== confirmPassword) {
        throw new ApiError(408,"Password did not match");
    }

    

    try{
        console.log("Before creating user:", fullName);

        const [day, month, year] = dateOfBirth.split('/');
        const formattedDateOfBirth = new Date(`${year}-${month}-${day}`);


        const patient = await Patient.create({
            name: fullName,
            email,
            dateOfBirth: formattedDateOfBirth,
            aadharNumber,
            address,
            phoneNumber,
            walletAddress,
            password
        });

        const createdPatient = await Patient.findById(patient._id).select("-password -refreshToken -confirmPassword");

        if(!createdPatient) {
            throw new ApiError(500, "Something went wrong while registering the patient");
        }

        try {
      const txHash = await registerPatientOnChain(
        walletAddress,
        aadharNumber,
        fullName,
        formattedDateOfBirth.toISOString().split("T")[0],
        email
      );
      console.log("✅ Blockchain txHash:", txHash);
    } catch (blockchainError) {
      console.error("❌ Blockchain error:", blockchainError);
      // Optionally delete patient from DB here if you want full rollback
    }
        const patientPlainObject = createdPatient.toObject();

        return res.status(201).json(
            new ApiResponse(200, patientPlainObject, "Patient registered successfully")
        );
    }
    catch(error){
        console.error('Error creating patient document ',error);
        throw new ApiError(500, 'Error creating patient document');
    }
})

const loginPatient = asyncHandler(async(req,res) => {
        const {email,password} = req.body;
     

        if([email, password].some(field => field?.trim() === "")){
            throw new ApiError(400, "All fields are required");
        }


        const existedPatient = await Patient.findOne({email})

        console.log(existedPatient);

        if(!existedPatient){
            throw new ApiError(405,"Email is not registered");
        }

        const isMatch = await existedPatient.isPasswordCorrect(password);


        if(!isMatch)
            {
                throw new ApiError(406,"Passwords do not match");
            }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(existedPatient._id)

        const loggedInPatient = await Patient.findById(existedPatient._id).select("-password -refreshToken");

        const options ={
            httpOnly: true,
            secure: false
        }
        
        return res
        .status(201)
        .cookie("accessToken", accessToken,options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(202,{existedUser: loggedInPatient, accessToken, refreshToken},"User logged in successfully")
        )
}) 

const logoutPatient = asyncHandler(async(req,res) => {
    await Patient.findByIdAndUpdate(
        req.user._id,{
            $set: {
                refreshToken: undefined
            }
        },
        {
            new : true,
        }
    )

    const options ={
        httpOnly: true,
        secure: true
    }
    
    return res
    .status(200)
    .clearCookie("accesstoken",options)
    .clearCookie("refreshtoken",options)
    .json(
        new ApiResponse(202,{},"User logged out successfully")
    )
})

const getPatientProfile = asyncHandler(async (req, res) => {
  const patientId = req.user._id;  // assuming req.user is set by your auth middleware

  const patient = await Patient.findById(patientId).select("-password -refreshToken");
  if (!patient) {
    throw new ApiError(404, "Patient profile not found");
  }

  return res.status(200).json(new ApiResponse(200, patient, "Profile fetched successfully"));
});


export { registerPatient, loginPatient, logoutPatient, getPatientProfile};