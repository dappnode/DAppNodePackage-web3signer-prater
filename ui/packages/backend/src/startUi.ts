import http from "http";
import express, { RequestHandler } from "express";
import socketio from "socket.io";
import path from "path";
import { params } from "./params";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import compression from "compression";

export function startUi(): http.Server {
  const app = express();
  const server = new http.Server(app);
  const io = new socketio.Server({ serveClient: false });

  app.use(fileUpload({ limits: { fileSize: 500 * 1024 * 1024, files: 10 } }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.text());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.resolve(params.UI_FILES_PATH), { maxAge: "1d" }));

  app.get("*", (req, res) => res.sendFile(path.resolve(params.UI_FILES_PATH, "index.html")));
  server.listen(params.UI_API_PORT, () => console.info(`UI port: ${params.UI_API_PORT}`));
  return server;
}
