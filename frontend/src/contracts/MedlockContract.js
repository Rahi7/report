
// import { Contract } from 'ethers'; // Ethers v6 import
// // import {ethers} from './ethers-5.6.esm.min.js'
// import MedlockABI from '../abi/Medlock.json';

// export const MEDLOCK_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// export function getMedlockContract(signerOrProvider) {
//   return new Contract(MEDLOCK_ADDRESS, MedlockABI.abi, signerOrProvider);
// }
import Web3 from 'web3';
import MedlockABI from '../abi/Medlock.json';

export const MEDLOCK_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// This assumes MetaMask is available (window.ethereum)
export function getMedlockContract() {
  const web3 = new Web3(window.ethereum); // Connects to MetaMask
  return new web3.eth.Contract(MedlockABI.abi, MEDLOCK_ADDRESS);
}
