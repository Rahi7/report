import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';


dotenv.config({
    path: './env'
})

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"10mb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import patientRouter from './routes/patient.routes.js'
import doctorRouter from './routes/doctor.routes.js'

app.use("/api/v1/patients",patientRouter)
app.use("/api/v1/doctors",doctorRouter)
// http://localhost:8000/api/v1/patients/register

import errorMiddleware from './middlewares/error.middlewares.js';
app.use(errorMiddleware);// this is used mainly to send the responses fron backend to frontend

export {app}