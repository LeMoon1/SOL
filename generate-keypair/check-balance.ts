import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


const publicKey = new PublicKey("CbtN4myV7TZzwN63ecU4n1EqdYDxdGW8eAVef433uiGs");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL

console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol}!`
  );