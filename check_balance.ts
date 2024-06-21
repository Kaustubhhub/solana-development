import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"))
const publicKey = new PublicKey(process.argv[2]);

if (!publicKey) {
    console.log("Public key is required")
}

const balance: any = await connection.getBalance(publicKey);
const balanceInSol: any = balance / LAMPORTS_PER_SOL;

console.log(`The balance of account having public key : ${publicKey} is ${balance} in lamports`)
console.log(`The balance of account having public key : ${publicKey} is ${balanceInSol} in sol`)