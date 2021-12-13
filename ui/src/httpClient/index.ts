import { BeaconchaClient } from "./beaconchaClient";
import { Web3HttpClient } from "./web3signerClient";

export const web3Signer = new Web3HttpClient();
export const beaconcha = new BeaconchaClient();
