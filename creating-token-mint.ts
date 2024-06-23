import * as web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import * as helper from '@solana-developers/helpers'
import * as dotenv from 'dotenv';
dotenv.config();

async function buildCreateMintTransaction(connection: web3.Connection, payer: web3.PublicKey, decimals: number): Promise<web3.Transaction> {
    const lamports = await token.getMinimumBalanceForRentExemptAccount(connection);
    const accountPairKey = web3.Keypair.generate();
    const programId = token.TOKEN_PROGRAM_ID;

    const transaction = new web3.Transaction().add(
        web3.SystemProgram.createAccount({
            fromPubkey: payer,
            newAccountPubkey: accountPairKey.publicKey,
            space: token.MINT_SIZE,
            lamports,
            programId,
        }),
        token.createInitializeMintInstruction(accountPairKey.publicKey,
            decimals, payer, payer, programId
        )
    );

    return transaction
}

const createTokenMint = async () => {

    const connection = new web3.Connection(web3.clusterApiUrl("devnet"))
    const keyPair = helper.getKeypairFromEnvironment("SECRET_KEY");


    const tokenMint = await buildCreateMintTransaction(connection, keyPair.publicKey, 2);
    console.log('tokenMint', tokenMint);
}

createTokenMint()