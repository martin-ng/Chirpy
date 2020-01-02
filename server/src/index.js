/* eslint-disable no-console */

import express from "express";
// const express = require("express");
// import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
// const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
// import { makeExecutableSchema } from "graphql-tools";
// const { makeExecutableSchema } = require("graphql-tools");
// import bodyParser from "body-parser";
// const bodyParser = require("body-parser");
import { createServer } from "http";
const { ApolloServer, gql } = require("apollo-server-express");

import "./config/db";
import constants from "./config/constants";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import mocks from "./mocks";
import middleware from "./config/middleware";
// import { Mongoose } from "mongoose";

const app = express();

middleware(app);

// const schema = makeExecutableSchema({ typeDefs, resolvers });

const PORT = process.env.PORT || 3000;

mocks().then(() => {
  app.listen({ port: PORT }, () => console.log(`Server ready at ${PORT}`));
});

// app.listen({ port: PORT }, () =>
//   console.log(`Server ready at ${PORT} and ${server.graphqlPath}`)
// );
// app.use(bodyParser.json());

// app.use(
//   "/graphiql",
//   graphqlExpress({
//     endpointURL: constants.GRAPHQL_PATH
//   })
// );

// app.use(
//   constants.GRAPHQL_PATH,
//   graphqlExpress({
//     schema
//   })
// );

// const graphQLServer = createServer(app);

// graphQLServer.listen(constants.PORT, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`App listen to port: ${PORT}`);
//   }
// });
