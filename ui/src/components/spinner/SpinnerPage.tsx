import React from "react";
import { Spinner } from "react-bootstrap";
import "./Spinner.scss";

export default function SpinnerPage() {
  return <Spinner className="spinner-page" variant="primary" role="status" animation="border" />;
}
