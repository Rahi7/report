import {Router } from "express";
import { registerDoctor, loginDoctor, logoutDocotor } from "../controllers/doctor.controller.js";
import multer from 'multer'

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerDoctor);
router.route("/login").post(upload.none(),loginDoctor);
router.route("/logout").post(logoutDocotor);

export default router