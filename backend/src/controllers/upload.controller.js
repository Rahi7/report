import pinata from '../utils/pinata.js';
import { UploadModel } from '../model/upload.model.js';
import { Readable } from 'stream';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const uploadFileToIPFS = asyncHandler(async (req, res) => {
  const file = req.file;

  if (!file) {
    console.log("❌ No file uploaded");
    throw new ApiError(400, 'No file uploaded');
  }

  console.log("📁 Uploading file:", file.originalname);

  const readableStream = Readable.from(file.buffer);

  const options = {
    pinataMetadata: {
      name: file.originalname,
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  try {
    const result = await pinata.pinFileToIPFS(readableStream, options);
    const ipfsHash = result.IpfsHash;

    console.log("✅ File pinned to IPFS:", ipfsHash);

    const upload = await UploadModel.create({
      filename: file.originalname,
      ipfsHash,
      uploadedAt: new Date(),
    });

    console.log("💾 Upload record saved in DB:", upload);

    return res.status(201).json(
      new ApiResponse(201, {
        ipfsHash,
        upload,
      }, 'File uploaded and pinned to IPFS')
    );
  } catch (error) {
    console.error("🚨 Error uploading to IPFS:", error);
    throw new ApiError(500, 'Error uploading file to IPFS');
  }
});