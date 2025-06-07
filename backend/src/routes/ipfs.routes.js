import { Router } from 'express';
import { fetchFromIPFS } from '../controllers/ipfs.controller.js';

const router = Router();

// Route: GET /api/ipfs/fetch/:hash
router.get('/fetch/:hash', fetchFromIPFS);

export default router;