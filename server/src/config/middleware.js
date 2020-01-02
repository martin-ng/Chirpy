const { ApolloServer, gql } = require("apollo-server-express");
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import constants from "./config/constants";

export default app => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });
};
