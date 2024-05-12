import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
  } from "@solana/web3.js";
  import "dotenv/config"
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { send } from "process";
  
  const suppliedToPubkey = process.argv[2] || null;
  
  if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }
  
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  
  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
  
  const toPubkey = new PublicKey(suppliedToPubkey);
  
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

const transaction = new Transaction()

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });

transaction.add(sendSolInstruction);


const senderBalance = await connection.getBalance(senderKeypair.publicKey);
console.log(`Sender's address: ${senderKeypair.publicKey}`)
console.log(`Sender's current balance: ${senderBalance} lamports`);

if (senderBalance < LAMPORTS_TO_SEND) {
  console.log('Not enough SOL to perform this transaction.');
  process.exit(1);
}


// we created a connection, instructions and added them to the transaction, and then the signer (just the owner for this example)
const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair,])

console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
  );
  console.log(`Transaction signature is ${signature}!`);

