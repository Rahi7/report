import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  ipfsHash: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  // add more fields if needed (userId, walletAddress etc.)
});

export const UploadModel = mongoose.model('Upload', uploadSchema);