const { ApolloServer, gql } = require("apollo-server-express");
import typeDefs from "../graphql/schema";
import resolvers from "../graphql/resolvers";
import { decodeToken } from "../services/auth";
// import constants from "../config/constants";

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
    return next();
  } catch (error) {
    throw Error;
  }
}

export default app => {
  app.use(auth);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      user: req.user;
      // const token = req.headers.authorization || "";
      // const user = getUser(token);
      // return { user };
    }
  });
  server.applyMiddleware({ app });
};
