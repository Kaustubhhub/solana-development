import * as dotenv from 'dotenv';
dotenv.config();
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = getKeypairFromEnvironment("SECRET_KEY");
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log('keypair', keypair);

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
);