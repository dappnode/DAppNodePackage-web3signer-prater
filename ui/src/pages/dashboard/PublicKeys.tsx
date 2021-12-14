import React, { useEffect, useState } from "react";
import { Button, Card, Spinner, Table } from "react-bootstrap";
import { web3Signer } from "../../httpClient";
import ValidatorPerformance from "./ValidatorPerformance";

const tableKeys = ["address", "scan", "status", "balance"];

export default function PublicKeys() {
  const [loading, setLoading] = useState<boolean>(false);
  const [signerPublicKeys, setSignerPublicKeys] = useState<string[]>([]);

  useEffect(() => {
    getSignerPublicKeys();
  }, []);

  async function getSignerPublicKeys(): Promise<void> {
    try {
      setLoading(true);
      const publicKeys = await web3Signer.getSignerPublicKeys();
      setSignerPublicKeys(publicKeys);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  return (
    <Card>
      <Card.Title>Web3signer public keys</Card.Title>
      <Card.Body>
        <p>API call to web3signer: http://web3signer:9003/api/v1/eth2/publicKeys</p>
        <Button onClick={getSignerPublicKeys}>Refresh public keys</Button>

        <hr />

        <p>API call to beaconcha prater: https://prater.beaconcha.in/api/v1/validator/:pubkeys</p>
        {loading ? (
          <Spinner animation={"border"} />
        ) : (
          <Table responsive striped bordered hover size="sm">
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
