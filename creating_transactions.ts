import * as dotenv from 'dotenv'
dotenv.config()

import { getKeypairFromEnvironment } from '@solana-developers/helpers'
import { Connection, SystemProgram, clusterApiUrl, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js'

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const receiverPublicKey = process.argv[2];

const connection = new Connection(clusterApiUrl('devnet'))
let balanceOfSender = await connection.getBalance(new PublicKey(senderKeypair.publicKey))
let balanceOfReceiver = await connection.getBalance(new PublicKey(receiverPublicKey))

console.log(`------------------------------------public addresses----------------------------------------------------------------`)
console.log(`sender's public address : ${senderKeypair.publicKey}`)
console.log(`receiver's public address : ${receiverPublicKey}`)
console.log(`------------------------------------available lamports----------------------------------------------------------------`)
console.log(`sender's balance : ${balanceOfSender}`)
console.log(`receiver's balance : ${balanceOfReceiver}`)

console.log(`------------------------------------Transaction of sol----------------------------------------------------------------`)
const transaction = new Transaction();

const lamportsToSend = 50000;

const sendSolInstruction = SystemProgram.transfer({
    toPubkey: receiverPublicKey,
    fromPubkey: senderKeypair.publicKey,
    lamports: lamportsToSend
})

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [senderKeypair]
)

console.log(`${lamportsToSend} lamports has been sent to the address  ${receiverPublicKey}`)
