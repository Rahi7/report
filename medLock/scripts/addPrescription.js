// const { ethers, getNamedAccounts } = require("hardhat");

// async function main() {
//   const { deployer } = await getNamedAccounts();
//   const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//   const medlock = await ethers.getContractAt("Medlock", contractAddress, deployer);

//   // Parameters for the prescription
//   const patientAadhaar = "AADHAAR1234";
//   const diagnosis = "Hypertension";
//   const treatment = "Medication A";
//   const remarks = "Check BP weekly";

//   const tx = await medlock.addPrescription(patientAadhaar, diagnosis, treatment, remarks);
//   await tx.wait();

//   console.log("Prescription added successfully!");
// }

// main()
//   .then(() => process.exit(0))
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
const { ethers } = require("hardhat");

async function main() {
  // Get the first signer (deployer)
  const [deployer] = await ethers.getSigners();

  // Deployed contract address (local Hardhat network)
  const contractAddress = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65";

  // Get contract with signer
  const medlock = await ethers.getContractAt("Medlock", contractAddress, deployer);

  // Prescription data
  const patientAadhaar = "AADHAAR1234";
  const diagnosis = "Hypertension";
  const treatment = "Medication A";
  const remarks = "Check BP weekly";

  // Call the function
  const tx = await medlock.addPrescription(patientAadhaar, diagnosis, treatment, remarks);
  await tx.wait();

  console.log("✅ Prescription added successfully!");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
