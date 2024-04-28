import { Express } from "express";
import corgiRoute from "./corgi.route";

function routes(app: Express) {
  app.use("/corgi", corgiRoute);
}

export default routes;
