import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { web3Signer } from "../../httpClient";

export default function SignerStatus() {
  const [loading, setLoading] = useState<boolean>(false);
  const [signerStatus, setSignerStatus] = useState<string>("");

  async function getSignerStatus(): Promise<void> {
    setLoading(true);
    const status = await web3Signer.getSignerStatus();
    setSignerStatus(status);
    setLoading(false);
  }

  useEffect(() => {
    getSignerStatus();
  }, []);

  return (
    <Card>
      <Card.Title>Web3signer status</Card.Title>
      <Card.Body>
        {loading ? (
          <Spinner animation={"border"} />
        ) : (
          <>
            <p>{signerStatus}</p>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
