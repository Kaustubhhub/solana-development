
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('C8fyty8H6ZVDQyFaftmWAquFkH53xAchEM4PY9QKcWuD');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`The balance of the account at ${address} is ${balanceInSol} sol`);
console.log('LAMPORTS_PER_SOL', LAMPORTS_PER_SOL);
console.log(`✅ Finished!`)
