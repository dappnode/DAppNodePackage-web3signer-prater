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
        <>
          <td>{publicKey.substring(0, 6)}</td>
          <td>
            <Button onClick={getValidatorPerformance}>Scan</Button>
          </td>
          <td>{validatorPerformance && validatorPerformance.data.status}</td>
          <td>{validatorPerformance && validatorPerformance.data.balance}</td>
        </>
      )}
    </tr>
  );
}
