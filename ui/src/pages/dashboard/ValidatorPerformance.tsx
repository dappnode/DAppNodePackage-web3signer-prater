import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { beaconcha } from "../../httpClient";
import { ValidatorResponse } from "../../httpClient/types";

export default function ValidatorPerformance({ publicKey }: { publicKey: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [validatorPerformance, setValidatorPerformance] = useState<ValidatorResponse | null>(null);

  async function getValidatorPerformance(): Promise<void> {
    setLoading(true);
    const validatorPerformance = await beaconcha.getValidator(publicKey);
    console.log(validatorPerformance);
    setLoading(false);
  }

  /*   useEffect(() => {
    getValidatorPerformance();
  }, []); */

  return (
    <div>
      <p>{publicKey}</p>
      <Button onClick={getValidatorPerformance}>Get Validator Performance</Button>
    </div>
  );
}
