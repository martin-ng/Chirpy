import ChirpResolvers from "./chirp-resolvers";
import UserResolvers from "./user-resolvers";
import GraphQLDate from "graphql-date";

export default {
  Date: GraphQLDate,
  Query: {
    getChirp: ChirpResolvers.getChirp,
    getChirps: ChirpResolvers.getChirps,
    me: UserResolvers.me
  },
  Mutation: {
    createChirp: ChirpResolvers.createChirp,
    updateChirp: ChirpResolvers.updateChirp,
    deleteChirp: ChirpResolvers.deleteChirp,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
