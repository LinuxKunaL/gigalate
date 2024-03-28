import Web3 from "web3";
import { ethers } from "ethers";
import ABI from "./ABI.json";

// const web3 = new Web3(
//   "https://eth-sepolia.g.alchemy.com/v2/K4vv1RJUY4555MY8wZkSgGZ4EEgRoq2H"
// );
// const contractAddress = "0xf90E8444178B1774954b791eEE1785c3F15dD560";

// const a = ethers.JsonRpcProvider("http://127.0.0.1:8545")

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const contractInstance = new web3.eth.Contract(ABI, contractAddress);

export { web3, contractInstance, contractAddress };
