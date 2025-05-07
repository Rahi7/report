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
    const { fullName, email, Specialization, licenseNumber,phoneNumber, password,confirmPassword } = req.body;

    console.log(req.body);

    if([fullName, email, Specialization, licenseNumber, phoneNumber, password, confirmPassword].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields are required");
    }

    const existedDoctor = await Doctor.findOne({licenseNumber})

    if(existedDoctor){
        throw new ApiError(409, "license Number  is already in use");
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
            password
        });

        const createdDoctor = await Doctor.findById(doctor._id).select("-password -refreshToken -confirmPassword");

        if(!createdDoctor) {
            throw new ApiError(500, "Something went wrong while registering the patient");
        }

        const doctorPlainObject = createdDoctor.toObject();

        return res.status(201).json(
            new ApiResponse(200, doctorPlainObject, "Patient registered successfully")
        );
    }
    catch(error){
        console.error('Error creating patient document ',error);
        throw new ApiError(500, 'Error creating patient document');
    }
})

export { registerDoctor};