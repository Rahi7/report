const { ethers } = require("hardhat");

async function main() {
  const medlockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [deployer] = await ethers.getSigners();
  const medlock = await ethers.getContractAt("Medlock", medlockAddress);

  const patientWallet = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const aadhaar = "1234-5678-9012";
  const name = "John Doe";
  const dob = "1990-01-01";
  const contactDetails = "john.doe@example.com";

  const tx = await medlock.registerPatient(
    patientWallet,
    aadhaar,
    name,
    dob,
    contactDetails
  );
  await tx.wait();

  console.log("Patient registered successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
