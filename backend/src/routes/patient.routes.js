import {Router } from "express";
import {registerPatient, loginPatient,logoutPatient,getPatientProfile} from "../controllers/patient.controller.js"
import { getPrescriptions } from "../controllers/prescription.controller.js"
import multer from 'multer'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerPatient);
router.route("/login").post(upload.none(),loginPatient);
router.route("/logout").post(verifyJWT,logoutPatient);
router.route("/profile").get(verifyJWT,getPatientProfile);
router.route("/getPrescriptions").post(upload.none(),getPrescriptions);

export default router