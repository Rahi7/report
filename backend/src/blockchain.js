import { ethers } from "ethers";
import dotenv from "dotenv";
import abiJson from './abi.json' assert { type: "json" };

// Load environment variables from .env
dotenv.config();

// Create a provider using Sepolia RPC URL
const provider = new ethers.JsonRpcProvider("http://localhost:8545");

// Optional: check provider is set correctly
console.log("✅ Connected to Ethereum RPC:", process.env.SEPOLIA_RPC_URL);

// Example function to register patient on chain (replace with actual contract interaction)
export const registerPatientOnChain = async (walletAddress, aadharNumber, fullName, dob, email) => {
  // Replace with your contract address and ABI
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const contractABI = abiJson.abi;

  // Create a signer (must use a private key or wallet with provider)
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Example contract call (update this based on your smart contract)
  const tx = await contract.registerPatient(walletAddress, aadharNumber, fullName, dob, email);

  console.log("📤 Sent transaction:", tx.hash);
  await tx.wait();
  console.log("✅ Transaction mined");

  return tx.hash;
};