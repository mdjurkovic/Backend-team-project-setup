import { port } from "./config/environment";
import express from "express";
import graphqlServer from "./graphql";
import connectDB from "./db";

const app = express();
const router = require("./api/routes");
app.use("/users", router);

try {
  graphqlServer.start().then((r) => {
    graphqlServer.applyMiddleware({
      app,
    });
    console.log("Connecting to db");
    connectDB().then((r) => {
      console.log("Connected to db");
      app.listen(port);
      console.log(`🚀  GraphQL server running at port: ${port}/graphql`);
    });
  });
} catch {
  console.log("Not able to run GraphQL server");
}
