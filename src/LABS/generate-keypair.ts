import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { generateKeyPair } from "crypto";
import { Keypair } from "@solana/web3.js";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

const newKeypair = Keypair.generate();
console.log(`The public key is: `, newKeypair.publicKey.toBase58());

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);