import Chirp from "../../models/Chirp";

export default {
  getChirps: () => Chirp.find({})
};
