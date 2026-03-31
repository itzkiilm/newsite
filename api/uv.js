import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/api/");

export default async function handler(req, res) {

  if (bare.shouldRoute(req)) {
    return bare.routeRequest(req, res);
  }

  res.statusCode = 404;
  res.end("Not found");

}
