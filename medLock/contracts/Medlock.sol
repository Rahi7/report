// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

error NotOwner();
error NotDoctor();
error NotPatient();

contract Medlock {
    address public owner;

    uint256 public nextHospitalId = 1;
    uint256 public nextPrescriptionId = 1;
    uint256 public nextPatientId = 1;
    uint256 public nextDoctorId = 1;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    modifier onlyDoctor() {
        string memory license = doctorLicenses[msg.sender];
        if (bytes(license).length == 0) revert NotDoctor();
        _;
    }

    modifier onlyPatient(string memory aadhaar) {
        if (aadhaarToAddress[aadhaar] != msg.sender) revert NotPatient();
        _;
    }

    struct Hospital {
        uint256 hospitalId;
        string name;
        bool isRegistered;
    }

    struct Doctor {
        string doctorId;
        string licenseNumber;
        string name;
        string specialization;
        uint256 hospitalId;
    }

    struct Patient {
        string patientId;
        string aadhaar;
        string name;
        string dob;
        string contactDetails;
    }

    struct Prescription {
        uint256 prescriptionId;
        string patientId;
        string doctorId;
        string issueDate;
        string diagnosis;
        string treatment;
        string remarks;
    }

    mapping(address => Hospital) public hospitals;
    mapping(uint256 => address) public hospitalById;

    mapping(address => string) public doctorLicenses;
    mapping(string => Doctor) public doctors; // license => Doctor
    mapping(string => string) public licenseToDoctorId;

    mapping(address => string) public patientAadhaars;
    mapping(string => address) public aadhaarToAddress;
    mapping(string => Patient) public patients; // aadhaar => Patient
    mapping(string => string) public aadhaarToPatientId;

    mapping(string => Prescription[]) public prescriptions; // patientId => list of prescriptions

    function registerHospital(address _hospitalAddress, string memory _name) public onlyOwner {
        require(!hospitals[_hospitalAddress].isRegistered, "Already registered");

        hospitals[_hospitalAddress] = Hospital(nextHospitalId, _name, true);
        hospitalById[nextHospitalId] = _hospitalAddress;
        nextHospitalId++;
    }

    function registerDoctor(
        address _wallet,
        string memory _licenseNumber,
        string memory _name,
        string memory _specialization,
        uint256 _hospitalId
    ) public {
        require(bytes(doctorLicenses[_wallet]).length == 0, "Doctor already registered");
        require(bytes(doctors[_licenseNumber].doctorId).length == 0, "License number already registered");

        doctorLicenses[_wallet] = _licenseNumber;

        string memory doctorId = generateDoctorId(nextDoctorId++);
        licenseToDoctorId[_licenseNumber] = doctorId;

        doctors[_licenseNumber] = Doctor(doctorId, _licenseNumber, _name, _specialization, _hospitalId);
    }

    function registerPatient(
        address _wallet,
        string memory _aadhaar,
        string memory _name,
        string memory _dob,
        string memory _contactDetails
    ) public  {
        require(aadhaarToAddress[_aadhaar] == address(0), "Aadhaar already registered");
        require(bytes(patientAadhaars[_wallet]).length == 0, "Wallet already used");

        patientAadhaars[_wallet] = _aadhaar;
        aadhaarToAddress[_aadhaar] = _wallet;

        string memory patientId = generatePatientId(nextPatientId++);
        aadhaarToPatientId[_aadhaar] = patientId;

        patients[_aadhaar] = Patient(patientId, _aadhaar, _name, _dob, _contactDetails);
    }

    function addPrescription(
        string memory _aadhaar,
        string memory _diagnosis,
        string memory _treatment,
        string memory _remarks
    ) public onlyDoctor {
        string memory license = doctorLicenses[msg.sender];
        string memory doctorId = licenseToDoctorId[license];
        require(aadhaarToAddress[_aadhaar] != address(0), "Patient not registered");

        string memory patientId = aadhaarToPatientId[_aadhaar];
        string memory issueDate = uintToString(block.timestamp);

        prescriptions[patientId].push(
            Prescription(
                nextPrescriptionId++,
                patientId,
                doctorId,
                issueDate,
                _diagnosis,
                _treatment,
                _remarks
            )
        );
    }

    function getMyProfile() public view returns (
        string memory patientId,
        string memory name,
        string memory dob,
        string memory contactDetails
    ) {
        string memory aadhaar = patientAadhaars[msg.sender];
        require(bytes(aadhaar).length > 0, "Not registered");

        Patient memory p = patients[aadhaar];
        return (p.patientId, p.name, p.dob, p.contactDetails);
    }

    function getMyPrescriptions() public view returns (Prescription[] memory) {
        string memory aadhaar = patientAadhaars[msg.sender];
        require(bytes(aadhaar).length > 0, "Not registered");

        string memory patientId = aadhaarToPatientId[aadhaar];
        return prescriptions[patientId];
    }

    function isHospitalRegistered(address _hospitalAddress) public view returns (bool) {
    return hospitals[_hospitalAddress].isRegistered;
    }

function isDoctorRegistered(address _wallet) public view returns (bool) {
    return bytes(doctorLicenses[_wallet]).length != 0;
}

function isPatientRegistered(string memory _aadhaar) public view returns (bool) {
    return aadhaarToAddress[_aadhaar] != address(0);
}


    function uintToString(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) return "0";
        uint256 temp = _i;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (_i != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(_i % 10)));
            _i /= 10;
        }
        return string(buffer);
    }

    function generatePatientId(uint256 _id) internal pure returns (string memory) {
        if (_id < 10) return string(abi.encodePacked("P00", uintToString(_id)));
        if (_id < 100) return string(abi.encodePacked("P0", uintToString(_id)));
        return string(abi.encodePacked("P", uintToString(_id)));
    }

    function generateDoctorId(uint256 _id) internal pure returns (string memory) {
        if (_id < 10) return string(abi.encodePacked("D00", uintToString(_id)));
        if (_id < 100) return string(abi.encodePacked("D0", uintToString(_id)));
        return string(abi.encodePacked("D", uintToString(_id)));
    }
}
