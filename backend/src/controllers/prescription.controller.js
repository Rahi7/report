import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Prescription } from "../model/prescription.model.js";
import { addPrescriptionOnChain, getPrescriptionsFromChain as fetchFromBlockchain } from "../blockchain.js";
import { Patient } from "../model/patient.model.js";

// Helper function to convert BigInt values to strings recursively
function convertBigIntToString(obj) {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = convertBigIntToString(obj[key]);
    }
    return newObj;
  }
  return obj;
}

const addPrescription = asyncHandler(async (req, res) => {
  const { aadhaar, diagnosis, treatment, remarks } = req.body;
  console.log(req.body);
  if ([aadhaar, diagnosis, treatment, remarks].some(field => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  const patient = await Patient.findOne({ aadharNumber: aadhaar });
  if (!patient) {
    throw new ApiError(404, "Patient with given Aadhaar not found");
  }

  try {
    const prescription = await Prescription.create({
      aadhaar,
      diagnosis,
      treatment,
      remarks,
    });

    try {
      const txHash = await addPrescriptionOnChain(
        aadhaar,
        diagnosis,
        treatment,
        remarks,
      );
      console.log("✅ Prescription stored on chain. Tx:", txHash);
    } catch (err) {
      console.error("❌ Blockchain failed:", err);
    }

    return res.status(201).json(
      new ApiResponse(201, prescription, "Prescription created successfully")
    );
  } catch (err) {
    console.error("Error creating prescription:", err);
    throw new ApiError(500, "Error creating prescription");
  }
});

const getPrescriptions = asyncHandler(async (req, res) => {
  const walletAddress = req.body.walletAddress;
  console.log(req.body);

  if (!walletAddress) {
    throw new ApiError(401, "Unauthorized: Wallet address missing");
  }

  try {
    let prescriptions = await fetchFromBlockchain(walletAddress);

    // Convert BigInt to string for JSON serialization
    prescriptions = convertBigIntToString(prescriptions);

    return res.status(200).json(
      new ApiResponse(200, prescriptions, "Fetched prescriptions from blockchain")
    );
  } catch (error) {
    console.error("❌ Error fetching prescriptions:", error);
    throw new ApiError(500, "Failed to fetch prescriptions from blockchain");
  }
});

export { addPrescription, getPrescriptions }