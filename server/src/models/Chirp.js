import mongoose, { Schema } from "mongoose";

const ChirpSchema = new Schema(
  {
    text: String
  },
  { timestamps: true }
);

export default mongoose.model("Chirp", ChirpSchema);
