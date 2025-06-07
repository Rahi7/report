import {Router } from "express";
import { registerDoctor, loginDoctor, logoutDocotor ,getDoctorProfile} from "../controllers/doctor.controller.js";
import multer from 'multer'
import { verifyJWT } from "../middlewares/auth.middleware.doctor.js";

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerDoctor);
router.route("/login").post(upload.none(),loginDoctor);
router.route("/logout").post(verifyJWT,logoutDocotor);
router.route("/profile").get(verifyJWT,getDoctorProfile);


export default router