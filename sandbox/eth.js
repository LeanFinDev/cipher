// //const Web3 = require('web3');
// import Web3 from 'web3'


// // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// const testnet = 'https://ropsten.infura.io/';
// const walletAddress = '0x8690F1feff62008A396B31c2C3f380bD0Ca6d8b8';

// const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// var balance = web3.eth.getBalance(walletAddress); //Will give value in.
// // balance = web3.toDecimal(balance);

import { ethers } from "ethers";

// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider();

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()