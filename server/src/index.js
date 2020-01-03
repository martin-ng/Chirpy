/* eslint-disable no-console */

import express from "express";
import "./config/db";
import mocks from "./mocks";
import middleware from "./config/middleware";

const app = express();

middleware(app);

const PORT = process.env.PORT || 3000;

mocks().then(() => {
  app.listen({ port: PORT }, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server ready at ${PORT}`);
    }
  });
});
