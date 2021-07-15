// Import
import { ApiPromise, WsProvider } from "@polkadot/api";

// const ACCOUNT_ID = ""

const KSM_ENDPOINT = "wss://kusama-rpc.polkadot.io/";
const DOT_ENDPOINT = "wss://rpc.kusm.io";

// Construct
const wsProvider = new WsProvider(KSM_ENDPOINT);
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());

// The length of an epoch (session) in Babe
console.log(api.consts.babe.epochDuration.toNumber());

// The amount required to create a new account
console.log(api.consts.balances.existentialDeposit.toNumber());

// The amount required per byte on an extrinsic
console.log(api.consts.transactionPayment.transactionByteFee.toNumber());

// The actual address that we will use
//const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';

// Retrieve the last timestamp
const now = await api.query.timestamp.now();

// Retrieve the account balance & nonce via the system module
const { nonce, data: balance } = await api.query.system.account(ACCOUNT_ID);

console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);

// Retrieve the chain name
const chain = await api.rpc.system.chain();

// Retrieve the latest header
const lastHeader = await api.rpc.chain.getHeader();

// Log the information
console.log(
  `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`
);

let count = 0;

// Subscribe to the new headers
const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(
    `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`
  );

  if (++count === 10) {
    unsubHeads();
  }
});

// Terminate program
process.exit(1);
