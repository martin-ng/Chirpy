import Chirp from "../../models/Chirp";
import { reqAuth } from "../../services/auth";

export default {
  getChirp: async (_, { _id }, { user }) => {
    try {
      await reqAuth(user);
      return Chirp.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getChirps: async (_, args, { user }) => {
    try {
      await reqAuth(user);
      return Chirps.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createChirp: async (_, args, { user }) => {
    await reqAuth(user);
    return Chirp.create(args);
  },

  updateChirp: async (_, rest, { user }) => {
    try {
      await reqAuth(user);
      return Chirp.findByIdAndUpdate(_id, rest, { new: true });
    } catch (error) {
      throw error;
    }
  },

  deleteChirp: async (_, { _id }, { user }) => {
    try {
      await reqAuth(user);
      await Chirp.findByIdAndRemove(_id);
      return {
        message: "Delete was successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
