import mongoose, { Schema } from "mongoose";

const prescriptionSchema = new Schema(
  {
    aadhaar: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
    treatment: {
      type: String,
      required: true,
      trim: true,
    },
    remarks: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Prescription = mongoose.model("Prescription", prescriptionSchema);