import { Router } from 'express';
import multer from 'multer';
import { uploadFileToIPFS } from '../controllers/upload.controller.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();
router.route("/upload-ipfs").post(upload.single('file'),uploadFileToIPFS);
// router.post('/upload-ipfs', upload.single('file'), uploadFileToIPFS);

export default router;