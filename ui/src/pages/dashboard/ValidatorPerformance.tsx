import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { beaconcha } from "../../httpClient";
import { ValidatorResponse } from "../../httpClient/types";

export default function ValidatorPerformance({ publicKey }: { publicKey: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [validatorPerformance, setValidatorPerformance] = useState<ValidatorResponse | null>(null);

  async function getValidatorPerformance(): Promise<void> {
    setLoading(true);
    const performance = await beaconcha.getValidator(publicKey);
    setValidatorPerformance(performance);
    setLoading(false);
  }

  return (
    <tr>
      {loading ? (
        <Spinner animation={"border"} />
      ) : (
        <div>
          <p>{publicKey.substring(0, 6)}</p>
          <Button onClick={getValidatorPerformance}>Get Validator Performance</Button>
        </div>
      )}
      {validatorPerformance && (
        <>
          <td>{validatorPerformance.data.status}</td>
          <td>{validatorPerformance.data.slashed}</td>
          <td>{validatorPerformance.data.balance}</td>
        </>
      )}
    </tr>
  );
}
