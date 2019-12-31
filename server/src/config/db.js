/* eslint-disable no-console */

import mongoose from "mongoose";

import constants from "./constants";

const url = "mongodb://localhost:27017/chirp-development";

mongoose.Promise = global.Promise;

mongoose.set("debug", true); // debug mode on

try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL);
}

mongoose.connection
  .once("open", () => console.log("MongoDB Running"))
  .on("error", e => {
    throw e;
  });
