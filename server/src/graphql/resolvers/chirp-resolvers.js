import Chirp from "../../models/Chirp";

export default {
  getChirp: (_, { _id }) => Chirp.findById(_id),
  getChirps: () => Chirp.find({}).sort({ createdAt: -1 }),
  createChirp: (_, args) => Chirp.create(args),
  updateChirp: (_, { _id, ...rest }) =>
    Chirp.findByIdAndUpdate(_id, rest, { new: true }),
  deleteChirp: async (_, { _id }) => {
    try {
      await Chirp.findByIdAndRemove(_id);
      return {
        message: "Delete was successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
