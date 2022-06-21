import { Contract, BigNumber } from "ethers"
import contractAbi from "../abi/Token.json";

export const useContract = (address: string, abi: any, signer?: any) => {
    const contract = new Contract(address, abi, signer);
    return contract;
}