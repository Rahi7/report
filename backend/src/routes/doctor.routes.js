import {Router } from "express";
import { registerDoctor } from "../controllers/doctor.controller.js";
import multer from 'multer'

const upload = multer();

const router = Router()

router.route("/register").post(upload.none(),registerDoctor);

export default router