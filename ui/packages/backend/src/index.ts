// Create an express api server that renders the frontend
// using the react-scripts build.

import { startUi } from "./startUi";
const server = startUi();

process.on("SIGINT", () => {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  server.close();
  process.exit(0);
});
