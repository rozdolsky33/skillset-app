import * as express from "express";
import { Application } from "express";

export function initServer() {
  const app: Application = express();

  app.route("/").get((req, res) => {
    res.status(200).send("<h1>API is up and running!</h1>");
  });

  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log("HTTP TEST API Server is running at port " + PORT);
  });
}
