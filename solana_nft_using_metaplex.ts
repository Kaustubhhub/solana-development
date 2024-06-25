import { Metaplex, keypairIdentity, irysStorage } from '@metaplex-foundation/js'
import { Connection, clusterApiUrl, Keypair } from '@solana/web3.js'

const wallet = Keypair.generate();
const connection = new Connection(clusterApiUrl('devnet'))

console.log('wallet', wallet);
console.log('connection', connection);

const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(wallet))
    .use(
        irysStorage({
            address: "https://devnet.bundlr.network",
            providerUrl: "https://api.devnet.solana.com",
            timeout: 6000,
        })
    )

console.log('metaplex', metaplex);