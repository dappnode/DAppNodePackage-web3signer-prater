import React, { useEffect, useState } from "react";
import { Card, Spinner, Table } from "react-bootstrap";
import { web3Signer } from "../../httpClient";
import ValidatorPerformance from "./ValidatorPerformance";

const tableKeys = ["address", "status", "slashed", "balance"];

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
          <Table>
            <thead>
              <tr>
                {tableKeys.map((key, index) => {
                  return <th key={index}>{key}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {signerPublicKeys.map((publicKey, index) => {
                return <ValidatorPerformance key={index} publicKey={publicKey} />;
              })}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
}
