import mongoose, { Schema } from "mongoose";

const ChirpSchema = new Schema({
  text: String
});

export default mongoose.model("Chirp", ChirpSchema);
