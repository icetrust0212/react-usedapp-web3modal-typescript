const {ethers} = require('ethers');
require('dotenv-flow').config();

const privateKey = process.env.SIGNER_PRIVATE_KEY;

module.exports = async function signMessage(address) {
    const wallet = new ethers.Wallet(`0x${privateKey}`);
    console.log(wallet.address, wallet._isSigner);
   
    let message = ethers.utils.solidityPack(["address"], [address]);
    message = ethers.utils.solidityKeccak256(["bytes"], [message]);
    const signature = await wallet.signMessage(ethers.utils.arrayify(message));

    return signature;
}