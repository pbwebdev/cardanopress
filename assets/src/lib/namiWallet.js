import { cardano, NETWORK } from '../api/config'
import * as CSL from '@emurgo/cardano-serialization-lib-browser'
import { Buffer } from 'buffer'

export const getNetwork = async () => {
    const id = await cardano.getNetworkId()

    return NETWORK[id]
}

export const hexToBytes = (string) => {
    return Buffer.from(string, 'hex')
}

export const hexToBech32 = (address) => {
    return CSL.Address.from_bytes(hexToBytes(address)).to_bech32()
}

export const getChangeAddress = async () => {
    const changeAddress = await cardano.getChangeAddress()

    return hexToBech32(changeAddress)
}

export const getRewardAddress = async () => {
    const rewardAddress = await cardano.getRewardAddress()

    return hexToBech32(rewardAddress)
}

export const getUtxos = async () => {
    const rawUtxos = await cardano.getUtxos()

    return rawUtxos.map((utxo) => CSL.TransactionUnspentOutput.from_bytes(hexToBytes(utxo)))
}

export const getStakeKeyHash = async () => {
    const rewardAddress = await getRewardAddress()

    return CSL.RewardAddress.from_address(
        CSL.Address.from_bech32(rewardAddress)
    ).payment_cred().to_keyhash().to_bytes()
}

export const signAndSubmit = async (transaction) => {
    try {
        const witnesses = await cardano.signTx(hexToBytes(transaction.to_bytes()).toString('hex'))
        const signedTx = CSL.Transaction.new(
            transaction.body(),
            CSL.TransactionWitnessSet.from_bytes(hexToBytes(witnesses))
        )

        return await cardano.submitTx(hexToBytes(signedTx.to_bytes()).toString('hex'))
    } catch (error) {
        throw error.info
    }
}