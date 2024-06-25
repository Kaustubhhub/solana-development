import * as web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

async function buildMintToTransaction(
  authority: web3.PublicKey,
  mint: web3.PublicKey,
  amount: number,
  destination: web3.PublicKey
): Promise<web3.Transaction> {
  const transaction = new web3.Transaction().add(
    token.createMintToInstruction(
      mint,
      destination,
      authority,
      amount
    )
  )

  return transaction
}