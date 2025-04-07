import {Router } from "express";
import {registerPatient} from "../controllers/patient.controller.js"
import multer from 'multer'

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerPatient);

export default router