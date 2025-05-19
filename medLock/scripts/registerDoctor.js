const { ethers } = require("hardhat");

async function main() {
  const medlockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [deployer] = await ethers.getSigners();
  const medlock = await ethers.getContractAt("Medlock", medlockAddress);

  const doctorWallet = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"; // replace with doctor's wallet address
  const licenseNumber = "LIC12345";
  const name = "Dr. Smith";
  const specialization = "Cardiology";
  const hospitalId = 1; // The hospitalId where the doctor belongs

  const tx = await medlock.registerDoctor(
    doctorWallet,
    licenseNumber,
    name,
    specialization,
    hospitalId
  );
  await tx.wait();

  console.log("Doctor registered successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
