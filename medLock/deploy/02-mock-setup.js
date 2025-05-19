// const { ethers } = require("hardhat");

// module.exports = async ({ getNamedAccounts, deployments }) => {
//   const { log } = deployments;
//   const { deployer } = await getNamedAccounts();

//   const medlockDeployment = await deployments.get("Medlock");
//   const signer = await ethers.getSigner(deployer);  // <--- get signer object here

//   const medlock = await ethers.getContractAt("Medlock", medlockDeployment.address, signer);

//   log("Adding mock hospitals...");
//   await medlock.registerHospital(deployer, "City Hospital");

//   log("Adding mock doctors...");
//   await medlock.registerDoctor(
//     deployer,
//     "LIC123456",
//     "Dr. Alice",
//     "Cardiology",
//     1 // hospitalId
//   );
//   await medlock.registerDoctor(
//     deployer,
//     "LIC654321",
//     "Dr. Bob",
//     "Neurology",
//     1
//   );

//   log("Adding mock patients...");
//   await medlock.registerPatient(
//     deployer,
//     "AADHAAR1234",
//     "Patient One",
//     "1990-01-01",
//     "patient1@example.com"
//   );
//   await medlock.registerPatient(
//     deployer,
//     "AADHAAR5678",
//     "Patient Two",
//     "1985-12-12",
//     "patient2@example.com"
//   );

//   log("Mock data setup completed!");
// };

// module.exports.tags = ["all", "mock"];


// const { ethers } = require("hardhat");

// module.exports = async ({ getNamedAccounts, deployments }) => {
//   const { log } = deployments;
//   const { deployer } = await getNamedAccounts();

//   const medlockDeployment = await deployments.get("Medlock");
//   const medlock = await ethers.getContractAt("Medlock", medlockDeployment.address, deployer);

//   // Get multiple accounts/signers from Hardhat
//   const accounts = await ethers.getSigners();

//   // Assign addresses for doctors and patients
//   const doctor1Address = accounts[1].address;
//   const doctor2Address = accounts[2].address;
//   const patient1Address = accounts[3].address;
//   const patient2Address = accounts[4].address;

//   log("Adding mock hospitals...");
//   await medlock.registerHospital(deployer, "City Hospital");

//   log("Adding mock doctors...");
//   await medlock.registerDoctor(
//     doctor1Address,
//     "LIC123456",
//     "Dr. Alice",
//     "Cardiology",
//     1 // hospitalId
//   );
//   await medlock.registerDoctor(
//     doctor2Address,
//     "LIC654321",
//     "Dr. Bob",
//     "Neurology",
//     1
//   );

//   log("Adding mock patients...");
//   await medlock.registerPatient(
//     patient1Address,
//     "AADHAAR1234",
//     "Patient One",
//     "1990-01-01",
//     "patient1@example.com"
//   );
//   await medlock.registerPatient(
//     patient2Address,
//     "AADHAAR5678",
//     "Patient Two",
//     "1985-12-12",
//     "patient2@example.com"
//   );

//   log("Mock data setup completed!");
// };

// module.exports.tags = ["all", "mock"];


// 

// const { ethers } = require("hardhat");

// module.exports = async ({ getNamedAccounts, deployments }) => {
//   const { log } = deployments;
//   const { deployer } = await getNamedAccounts();

//   const medlockDeployment = await deployments.get("Medlock");
//   const accounts = await ethers.getSigners();
//   const signer = accounts[0]; // deployer signer

//   const medlock = await ethers.getContractAt("Medlock", medlockDeployment.address, signer);

//   const doctor1Address = accounts[1].address;
//   const doctor2Address = accounts[2].address;
//   const patient1Address = accounts[3].address;
//   const patient2Address = accounts[4].address;

//   log("Adding mock hospitals...");
//   const hospitalRegistered = await medlock.isHospitalRegistered(deployer);
//   if (!hospitalRegistered) {
//     await medlock.registerHospital(deployer, "City Hospital");
//     log("Hospital registered.");
//   } else {
//     log("Hospital already registered, skipping.");
//   }

//   log("Adding mock doctors...");
//   const doctor1Registered = await medlock.isDoctorRegistered(doctor1Address);
//   if (!doctor1Registered) {
//     await medlock.registerDoctor(
//       doctor1Address,
//       "LIC123456",
//       "Dr. Alice",
//       "Cardiology",
//       1
//     );
//     log("Doctor 1 registered.");
//   } else {
//     log("Doctor 1 already registered, skipping.");
//   }

//   const doctor2Registered = await medlock.isDoctorRegistered(doctor2Address);
//   if (!doctor2Registered) {
//     await medlock.registerDoctor(
//       doctor2Address,
//       "LIC654321",
//       "Dr. Bob",
//       "Neurology",
//       1
//     );
//     log("Doctor 2 registered.");
//   } else {
//     log("Doctor 2 already registered, skipping.");
//   }

//   log("Adding mock patients...");
//   const patient1Registered = await medlock.isPatientRegistered(patient1Address);
//   if (!patient1Registered) {
//     await medlock.registerPatient(
//       patient1Address,
//       "AADHAAR1234",
//       "Patient One",
//       "1990-01-01",
//       "patient1@example.com"
//     );
//     log("Patient 1 registered.");
//   } else {
//     log("Patient 1 already registered, skipping.");
//   }

//   const patient2Registered = await medlock.isPatientRegistered(patient2Address);
//   if (!patient2Registered) {
//     await medlock.registerPatient(
//       patient2Address,
//       "AADHAAR5678",
//       "Patient Two",
//       "1985-12-12",
//       "patient2@example.com"
//     );
//     log("Patient 2 registered.");
//   } else {
//     log("Patient 2 already registered, skipping.");
//   }

//   log("Mock data setup completed!");
// };

// module.exports.tags = ["all", "mock"];


const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
   if (network.name === "sepolia" || network.name === "mainnet") {
    console.log("Skipping mock setup on live networks");
    return;
  }
  const { log } = deployments;
  const { deployer } = await getNamedAccounts();

  const medlockDeployment = await deployments.get("Medlock");
  const accounts = await ethers.getSigners();
  const medlock = await ethers.getContractAt("Medlock", medlockDeployment.address, accounts[0]);

  const doctor1Address = accounts[1].address;
  const doctor2Address = accounts[2].address;
  const patient1Address = accounts[3].address;
  const patient2Address = accounts[4].address;

  log("Checking and adding mock hospitals...");
  const hospitalRegistered = await medlock.isHospitalRegistered(deployer);
  if (!hospitalRegistered) {
    await medlock.registerHospital(deployer, "City Hospital");
    log("Hospital registered.");
  } else {
    log("Hospital already registered, skipping.");
  }

  log("Checking and adding mock doctors...");
  const doctor1Registered = await medlock.isDoctorRegistered(doctor1Address);
  if (!doctor1Registered) {
    await medlock.registerDoctor(
      doctor1Address,
      "LIC123456",
      "Dr. Alice",
      "Cardiology",
      1
    );
    log("Doctor 1 registered.");
  } else {
    log("Doctor 1 already registered, skipping.");
  }

  const doctor2Registered = await medlock.isDoctorRegistered(doctor2Address);
  if (!doctor2Registered) {
    await medlock.registerDoctor(
      doctor2Address,
      "LIC654321",
      "Dr. Bob",
      "Neurology",
      1
    );
    log("Doctor 2 registered.");
  } else {
    log("Doctor 2 already registered, skipping.");
  }

  // log("Checking and adding mock patients...");
  // const patient1Registered = await medlock.isPatientRegistered(patient1Address);
  // if (!patient1Registered) {
  //   await medlock.registerPatient(
  //     patient1Address,
  //     "AADHAAR1234",
  //     "Patient One",
  //     "1990-01-01",
  //     "patient1@example.com"
  //   );
  //   log("Patient 1 registered.");
  // } else {
  //   log("Patient 1 already registered, skipping.");
  // }

  // const patient2Registered = await medlock.isPatientRegistered(patient2Address);
  // if (!patient2Registered) {
  //   await medlock.registerPatient(
  //     patient2Address,
  //     "AADHAAR5678",
  //     "Patient Two",
  //     "1985-12-12",
  //     "patient2@example.com"
  //   );
  //   log("Patient 2 registered.");
  // } else {
  //   log("Patient 2 already registered, skipping.");
  // }

  // log("Mock data setup completed!");
  log("Checking and adding mock patients...");
const patient1Registered = await medlock.isPatientRegistered("AADHAAR1234");
if (!patient1Registered) {
  await medlock.registerPatient(
    patient1Address,
    "AADHAAR1234",
    "Patient One",
    "1990-01-01",
    "patient1@example.com"
  );
  log("Patient 1 registered.");
} else {
  log("Patient 1 already registered, skipping.");
}

const patient2Registered = await medlock.isPatientRegistered("AADHAAR5678");
if (!patient2Registered) {
  await medlock.registerPatient(
    patient2Address,
    "AADHAAR5678",
    "Patient Two",
    "1985-12-12",
    "patient2@example.com"
  );
  log("Patient 2 registered.");
} else {
  log("Patient 2 already registered, skipping.");
}

};

module.exports.tags = ["all", "mock"];
