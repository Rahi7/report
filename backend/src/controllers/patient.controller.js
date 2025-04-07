import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Patient } from "../model/patient.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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
    const { name, email, dateOfBirth, aadharNumber, password,confirmPassword } = req.body;

    console.log(req.body);

    if([name, email, dateOfBirth, aadharNumber, password, confirmPassword].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields are required");
    }

    const existedPatient = await Patient.findOne({aadharNumber})

    if(existedPatient){
        throw new ApiError(409, "Email or username is already in use");
    }

    if(password !== confirmPassword) {
        throw new ApiError(408,"Password did not match");
    }

    try{
        console.log("Before creating user:", name);

        const [day, month, year] = dateOfBirth.split('/');
        const formattedDateOfBirth = new Date(`${year}-${month}-${day}`);


        const patient = await Patient.create({
            name,
            email,
            dateOfBirth: formattedDateOfBirth,
            aadharNumber,
            password
        });

        const createdPatient = await Patient.findById(patient._id).select("-password -refreshToken -confirmPassword");

        if(!createdPatient) {
            throw new ApiError(500, "Something went wrong while registering the patient");
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

export { registerPatient};