import {Router } from "express";
import {registerPatient, loginPatient,logoutPatient} from "../controllers/patient.controller.js"
import multer from 'multer'

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerPatient);
router.route("/login").post(upload.none(),loginPatient)

export default router