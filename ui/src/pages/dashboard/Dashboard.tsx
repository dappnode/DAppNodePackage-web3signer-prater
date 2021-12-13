import React from "react";
import SignerStatus from "./SignerStatus";
import PublicKeys from "./PublicKeys";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <SignerStatus />

      <PublicKeys />
    </div>
  );
}
