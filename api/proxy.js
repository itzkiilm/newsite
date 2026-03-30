import { createServer } from "@titaniumnetwork-dev/ultraviolet";

export default function handler(req, res) {
  const server = createServer();
  server.emit("request", req, res);
}
