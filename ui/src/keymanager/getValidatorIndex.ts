import fs from "fs";
import { params } from "../params";

// Get the validator index to be used to generate the validator file.
// The index will be the last validator index + 1.

export function getValidatorIndex(): number {
  try {
    const validatorFiles = fs
      .readdirSync(params.WEB3SIGNER_KEYFILES_DIR)
      .filter((file) => file.startsWith("validator_"))
      .filter((file) => file.endsWith(".yaml"));

    if (!validatorFiles.length) return 1;

    let validatorFile = `validator_1.yaml`;
    let index = 1;
    while (validatorFiles.includes(validatorFile)) {
      index++;
      validatorFile = `validator_${index}.yaml`;
    }

    return index;
  } catch (e) {
    throw Error("Error getting validator index: " + e);
  }
}
