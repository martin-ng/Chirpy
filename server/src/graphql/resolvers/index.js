import ChirpResolvers from "./chirp-resolvers";

export default {
  Query: {
    getChirp: ChirpResolvers.getChirp,
    getChirps: ChirpResolvers.getChirps
  },
  Mutation: {
    createChirp: ChirpResolvers.createChirp,
    updateChirp: ChirpResolvers.updateChirp,
    deleteChirp: ChirpResolvers.deleteChirp
  }
};
