import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/service/");

export default async function handler(req, res) {

if (bare.shouldRoute(req)) {
  return bare.routeRequest(req, res);
}

res.status(404).send("Not found");

}
