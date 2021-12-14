import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { uploadValidator } from "../../keymanager";
import fileToDataUri from "../../utils/fileToDataUri";
import humanFileSize from "../../utils/humanFileSize";

export default function UploadValidator() {
  const [walletPassword, setwalletPassword] = useState<string>("");
  const [validatorKeysFile, setValidatorKeysFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);

  const { name, size } = validatorKeysFile || {};

  async function generateValidator() {
    if (validatorKeysFile && walletPassword) {
      try {
        setLoading(true);
        const dataUri = await fileToDataUri(validatorKeysFile);
        uploadValidator({ validatorKeystoreUri: dataUri, password: walletPassword });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(`Error generating validator `, e);
      }
    }
  }

  return (
    <Card>
      <Card.Title>Upload validator keys</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              Keystore file (json) {name ? `: ${name} (${humanFileSize(size || 0)})` : "Choose file"}
            </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                e.target && setValidatorKeysFile((e.target as any).files[0]);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Wallet password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                e.target && setwalletPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button onClick={generateValidator} disabled={!validatorKeysFile || !walletPassword}>
            Upload
          </Button>
        </Form>

        {loading && <Spinner animation={"border"} />}
      </Card.Body>
    </Card>
  );
}
