import React from "react";
import SignerStatus from "./SignerStatus";
import PublicKeys from "./PublicKeys";

export default function Dashboard() {
  return (
    <>
      <SignerStatus />

      <PublicKeys />
    </>
  );
}
