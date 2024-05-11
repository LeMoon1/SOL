import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


// a small error check when you use 
// npx esrun check-other-balances.ts : CbtN4myV7TZzwN63ecU4n1EqdYDxdGW8eAVef433uiGs (my public dev net key)
// need to enter a valid public key
const suppliedPublicKey = process.argv[2];

function check_for_broke_boi() {
    if (!suppliedPublicKey) {
        throw new Error("Provide a public key to check the balance of!");
      } else if (suppliedPublicKey === '5m4BxuSpHvvEN3vutcUGFNGoESNLMPVueyWfa8uw852N') {
          console.log('This is the address of a broke boi!');
          return;
      }
}


const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);