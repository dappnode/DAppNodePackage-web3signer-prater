import { params } from "../params";
import { getValidatorIndex } from "./getValidatorIndex";
import fs from "fs";
import dataUriToBuffer from "data-uri-to-buffer";
import { web3Signer } from "../httpClient";

export function uploadValidator({
  validatorKeystoreUri,
  password,
}: {
  validatorKeystoreUri: string;
  password: string;
}): void {
  let validatorIndex: number;

  // 0. Check requirements
  if (!validatorKeystoreUri) throw Error("Argument validatorKeystoreUri must be defined");

  // 1. Get validator index
  try {
    validatorIndex = getValidatorIndex();
  } catch (e) {
    throw Error("Could not get validator index. " + e);
  }

  // 2. Generate validator keystore file
  try {
    const validatorKeystoreFile = `${params.WEB3SIGNER_KEYFILES_DIR}/keystore_${validatorIndex}.json`;
    const decodedBuffer = dataUriToBuffer(validatorKeystoreUri);
    fs.writeFileSync(validatorKeystoreFile, decodedBuffer);
  } catch (e) {
    throw Error("Could not generate validator keystore file. " + e);
  }

  // 3. Generate validator password file
  try {
    const passwordFile = `${params.WEB3SIGNER_KEYFILES_DIR}/password_${validatorIndex}.txt`;
    fs.writeFileSync(passwordFile, password);
  } catch (e) {
    throw Error("Could not generate validator password file. " + e);
  }

  // 4. Generate validator file
  try {
    const validatorFile = `${params.WEB3SIGNER_KEYFILES_DIR}/validator_${validatorIndex}.yaml`;
    const validatorFileContent = `type: "file-keystore"
keystoreFile: "keystore_${validatorIndex}.json"
keystorePasswordFile: "password_${validatorIndex}.txt"`;
    fs.writeFileSync(validatorFile, validatorFileContent);
  } catch (e) {
    throw Error("Could not generate validator file. " + e);
  }

  // 5. Reload web3signer keys
  try {
    web3Signer.postReloadSignerKeys();
  } catch (e) {
    throw Error("Could not reload web3signer keys. " + e);
  }
}
