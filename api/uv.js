import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/api/");

export default function handler(req, res) {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
    return;
  }

  res.statusCode = 404;
  res.end("Not found");
}
