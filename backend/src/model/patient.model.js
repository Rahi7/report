import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const patientSchema = new Schema(
    {
        name : {
            type : "string",
            required : true,
            trim: true,
            index: true
        },

        email : {
            type : "string",
            required : true,
            unique : true,
            trim: true,
            index: true
        },

        dateOfBirth : {
            type : "Date",
            required : true,
            index : true
        },
        aadharNumber : {
            type : "Number",
            required : true,
            unique : true,
            trim: true,
            index: true
        },
        address : {

            type: "string",
            required : true
        },
        phoneNumber : {
            type : "Number",
            required : true,
            unique : true
        },

        password : {
            type : "string",
            required : [true, "Password is required"]
        },

        walletAddress : {
            type : "string",
            required : [true, "walletAddress is required"],
            unique : true
        },

        // confirmPassword : {
        //     type : "string",
        //     required : [true, "password did not match"]
        // },

        refreshToken : {
            type : "string",
        }
    },
    {
        timestamps: true
    }
)

patientSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})

patientSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

patientSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            name: this.name,
            aadharNumber: this.aadharNumber
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

patientSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this.id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const Patient = mongoose.model("Patient", patientSchema)