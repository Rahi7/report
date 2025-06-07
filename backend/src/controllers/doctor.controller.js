import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Doctor } from "../model/doctor.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async(userId) => {
    try{

        const doctor = await Doctor.findById(userId);
        const accessToken = doctor.generateAccessToken();
        const refreshToken = doctor.generateRefreshToken();

        doctor.refreshToken = refreshToken;
        
        await doctor.save({validateBeforeSave: false});

        return {accessToken, refreshToken}

    }catch(error){
        console.log(error);
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
}

const registerDoctor = asyncHandler(async (req, res) => {
    //extracting patient details from the request body
    const { fullName, email, Specialization, licenseNumber,phoneNumber, walletAddress, password,confirmPassword } = req.body;

    console.log(req.body);

    if([fullName, email, Specialization, licenseNumber, phoneNumber,walletAddress, password, confirmPassword].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields are required");
    }

    const existedDoctor = await Doctor.findOne({licenseNumber})

    if(existedDoctor){
        throw new ApiError(409, "license Number  is already in use");
    }

    const existedWallet = await Doctor.findOne({walletAddress})
    
    if(existedWallet){
        throw new ApiError(409, "walletAddress  is already in use");
    }

    if(password !== confirmPassword) {
        throw new ApiError(408,"Password did not match");
    }

    try{
        console.log("Before creating user:", fullName);

        // const [day, month, year] = dateOfBirth.split('/');
        // const formattedDateOfBirth = new Date(`${year}-${month}-${day}`);


        const doctor = await Doctor.create({
            name: fullName,
            email,
            //dateOfBirth: formattedDateOfBirth,
            Specialization,
            licenseNumber,
            phoneNumber,
            walletAddress,
            password
        });

        const createdDoctor = await Doctor.findById(doctor._id).select("-password -refreshToken -confirmPassword");

        if(!createdDoctor) {
            throw new ApiError(500, "Something went wrong while registering the doctor");
        }

        const doctorPlainObject = createdDoctor.toObject();

        return res.status(201).json(
            new ApiResponse(200, doctorPlainObject, "doctor registered successfully")
        );
    }
    catch(error){
        console.error('Error creating doctor document ',error);
        throw new ApiError(500, 'Error creating doctor document');
    }
})

const loginDoctor = asyncHandler(async(req,res) => {
        const {email,password} = req.body;
        console.log(email)

        if([email, password].some(field => field?.trim() === "")){
            throw new ApiError(400, "All fields are required");
        }


        const existedDoctor = await Doctor.findOne({email})

        console.log(existedDoctor);

        if(!existedDoctor){
            throw new ApiError(405,"Email is not registered");
        }

        const isMatch = await existedDoctor.isPasswordCorrect(password);


        if(!isMatch)
            {
                throw new ApiError(406,"Passwords do not match");
            }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(existedDoctor._id)

        const loggedInDoctor = await Doctor.findById(existedDoctor._id).select("-password -refreshToken");

        const options ={
            httpOnly: true,
            secure: true
        }
        
        return res
        .status(201)
        .cookie("accessToken", accessToken,options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(202,{existedUser: loggedInDoctor, accessToken, refreshToken},"User logged in successfully")
        )
}) 
const logoutDocotor = asyncHandler(async(req,res) => {
    await Doctor.findByIdAndUpdate(
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
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(202,{},"User logged out successfully")
    )
})


export { registerDoctor, loginDoctor,logoutDocotor};