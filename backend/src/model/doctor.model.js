import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const doctorSchema = new Schema(
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

        Specialization : {
            type : "string",
            required : true,
            index : true
        },
        licenseNumber : {
            type : "string",
            required : true,
            unique : true,
            trim: true,
            index: true
        },
        phoneNumber : {
            type : "Number",
            required : true,
            unique : true,
            trim : true,
            index : true
        },
        password : {
            type : "string",
            required : [true, "Password is required"]
        },
        refreshToken : {
            type : "string",
        }
    },
    {
        timestamps: true
    }
)

doctorSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})

doctorSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

doctorSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            name: this.name,
            licenseNumber: this.licenseNumber
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

doctorSchema.methods.generateRefreshToken = function() {
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


export const Doctor = mongoose.model("Doctor", doctorSchema)