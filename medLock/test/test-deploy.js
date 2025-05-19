// // const{ethers} = require('hardhat');
// // const {assert, expect} = require("chai");


// // describe("Medlock", function() {
// //   let medlock, MedlockFactory;
// //   let address="0x1E0d6Cf7628a3e858245F94DDAF57019C82F56bd";
// //   beforeEach(async function (){
// //     MedlockFactory = await ethers.getContractFactory("Medlock");
// //     medlock = await MedlockFactory.deploy();
// //     await medlock.hospitalRegister(address);
// //   })

// //   it("Gets message if hospital is already registered", async function() {
    
// //     //const response = await medlock.hospitals(address);
// //     await expect(medlock.hospitalRegister(address)).to.be.revertedWith(
// //       "Hospital already registered !!!"
// //     );
// //   })

// //   it("updated the hospital data structure", async function() {

// //       await medlock.hospitalRegister("0x7870e97A03b012d3918e243DEC0838470BA5e858");
// //       const response = await medlock.hospitals("0x7870e97A03b012d3918e243DEC0838470BA5e858");
// //       assert.equal(response,true);
// //   })
  
// // });

// const { ethers } = require("hardhat");
// const { assert, expect } = require("chai");

// describe("Medlock Contract", function () {
//   let medlock;
//   let owner, hospital, doctor, patient;

//   beforeEach(async function () {
//     [owner, hospital, doctor, patient] = await ethers.getSigners();

//     const MedlockFactory = await ethers.getContractFactory("Medlock");
//     medlock = await MedlockFactory.deploy();
//     //await medlock.deployed();

//     // Register hospital once before tests that require it
//     await medlock.hospitalRegister(hospital.address, "City Hospital");
//   });

//   describe("Hospital Registration", function () {
//     it("Should revert if hospital already registered", async function () {
//       await expect(medlock.hospitalRegister(hospital.address, "City Hospital")).to.be.revertedWith(
//         "Hospital already registered !!!"
//       );
//     });

//     it("Should register a new hospital successfully", async function () {
//       const newHospital = (await ethers.getSigners())[5]; // another account
//       await medlock.hospitalRegister(newHospital.address, "New Hospital");
//       const hospitalData = await medlock.hospitals(newHospital.address);
//       assert.equal(hospitalData.isRegistered, true);
//       assert.equal(hospitalData.name, "New Hospital");
//     });
//   });

//   describe("Doctor Registration", function () {
//     it("Should register a doctor", async function () {
//       await medlock.registerDoctor(
//         doctor.address,
//         "LIC123",
//         "Dr. Smith",
//         "Cardiology",
//         1
//       );
//       const license = await medlock.doctorLicenses(doctor.address);
//       assert.equal(license, "LIC123");
//       const doctorData = await medlock.doctors("LIC123");
//       assert.equal(doctorData.name, "Dr. Smith");
//       assert.equal(doctorData.specialization, "Cardiology");
//     });

//     it("Should revert if doctor license already registered", async function () {
//       await medlock.registerDoctor(
//         doctor.address,
//         "LIC123",
//         "Dr. Smith",
//         "Cardiology",
//         1
//       );
//       await expect(
//         medlock.registerDoctor(
//           (await ethers.getSigners())[6].address,
//           "LIC123",
//           "Dr. Jane",
//           "Neurology",
//           1
//         )
//       ).to.be.revertedWith("License number already registered");
//     });
//   });

//   describe("Patient Registration", function () {
//     it("Should register a patient", async function () {
//       await medlock.registerPatient(
//         patient.address,
//         "AAD123",
//         "John Doe",
//         "1990-01-01",
//         "9999999999"
//       );
//       const aadhaar = await medlock.patientAadhaars(patient.address);
//       assert.equal(aadhaar, "AAD123");
//       const patientData = await medlock.patients("AAD123");
//       assert.equal(patientData.name, "John Doe");
//     });

//     it("Should revert if Aadhaar already registered", async function () {
//       await medlock.registerPatient(
//         patient.address,
//         "AAD123",
//         "John Doe",
//         "1990-01-01",
//         "9999999999"
//       );
//       await expect(
//         medlock.registerPatient(
//           (await ethers.getSigners())[7].address,
//           "AAD123",
//           "Jane Doe",
//           "1985-12-12",
//           "8888888888"
//         )
//       ).to.be.revertedWith("Aadhaar already registered");
//     });
//   });
// });
const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("Medlock Contract", function () {
  let medlock;
  let owner, hospital, doctor, patient;

  beforeEach(async function () {
    [owner, hospital, doctor, patient] = await ethers.getSigners();

    const MedlockFactory = await ethers.getContractFactory("Medlock");
    medlock = await MedlockFactory.deploy();
    //await medlock.deployed();

    // Register hospital once before tests that require it
    await medlock.registerHospital(hospital.address, "City Hospital");
  });

  describe("Hospital Registration", function () {
    it("Should revert if hospital already registered", async function () {
      await expect(
        medlock.registerHospital(hospital.address, "City Hospital")
      ).to.be.revertedWith("Already registered");
    });

    it("Should register a new hospital successfully", async function () {
      const newHospital = (await ethers.getSigners())[5]; // another account
      await medlock.registerHospital(newHospital.address, "New Hospital");
      const hospitalData = await medlock.hospitals(newHospital.address);
      assert.equal(hospitalData.isRegistered, true);
      assert.equal(hospitalData.name, "New Hospital");
    });
  });

  describe("Doctor Registration", function () {
    it("Should register a doctor", async function () {
      await medlock.registerDoctor(
        doctor.address,
        "LIC123",
        "Dr. Smith",
        "Cardiology",
        1
      );
      const license = await medlock.doctorLicenses(doctor.address);
      assert.equal(license, "LIC123");
      const doctorData = await medlock.doctors("LIC123");
      assert.equal(doctorData.name, "Dr. Smith");
      assert.equal(doctorData.specialization, "Cardiology");
    });

    it("Should revert if doctor license already registered", async function () {
      await medlock.registerDoctor(
        doctor.address,
        "LIC123",
        "Dr. Smith",
        "Cardiology",
        1
      );
      await expect(
        medlock.registerDoctor(
          (await ethers.getSigners())[6].address,
          "LIC123",
          "Dr. Jane",
          "Neurology",
          1
        )
      ).to.be.revertedWith("License number already registered");
    });
  });

  describe("Patient Registration", function () {
    it("Should register a patient", async function () {
      await medlock.registerPatient(
        patient.address,
        "AAD123",
        "John Doe",
        "1990-01-01",
        "9999999999"
      );
      const aadhaar = await medlock.patientAadhaars(patient.address);
      assert.equal(aadhaar, "AAD123");
      const patientData = await medlock.patients("AAD123");
      assert.equal(patientData.name, "John Doe");
    });

    it("Should revert if Aadhaar already registered", async function () {
      await medlock.registerPatient(
        patient.address,
        "AAD123",
        "John Doe",
        "1990-01-01",
        "9999999999"
      );
      await expect(
        medlock.registerPatient(
          (await ethers.getSigners())[7].address,
          "AAD123",
          "Jane Doe",
          "1985-12-12",
          "8888888888"
        )
      ).to.be.revertedWith("Aadhaar already registered");
    });
  });
});
