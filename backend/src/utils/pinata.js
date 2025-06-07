import pinataSDK from '@pinata/sdk';
import dotenv from 'dotenv';

dotenv.config();

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY); // ✅ FIXED

export default pinata;