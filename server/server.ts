import * as express from "express";
import { Application } from "express";
import { createCheckoutSession } from "./checkout.rout";

export function initServer() {
  const bodyParser = require("body-parser");
  const app: Application = express();

  app.route("/").get((req, res) => {
    res.status(200).send("<h1>API is up and running!</h1>");
  });

  app.route("/api/chekcout").post(bodyParser.json(), createCheckoutSession);

  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log("HTTP TEST API Server is running at port " + PORT);
  });
}
