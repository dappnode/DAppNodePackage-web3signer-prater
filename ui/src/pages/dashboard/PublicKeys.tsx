import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { web3Signer } from "../../httpClient";
import ValidatorPerformance from "./ValidatorPerformance";

export default function PublicKeys() {
  const [loading, setLoading] = useState<boolean>(false);
  const [signerPublicKeys, setSignerPublicKeys] = useState<string[]>([]);

  useEffect(() => {
    getSignerPublicKeys();
  }, []);

  async function getSignerPublicKeys(): Promise<void> {
    setLoading(true);
    const publicKeys = await web3Signer.getSignerPublicKeys();
    setSignerPublicKeys(publicKeys);
    setLoading(false);
  }

  return (
    <Card>
      <Card.Title>Web3signer public keys</Card.Title>
      <Card.Body>
        {loading ? (
          <Spinner animation={"border"} />
        ) : (
          <>
            {signerPublicKeys.map((publicKey, index) => {
              return <ValidatorPerformance key={`${index}`} publicKey={publicKey} />;
            })}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
