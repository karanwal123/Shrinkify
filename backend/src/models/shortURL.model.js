import mongoose from "mongoose";

const shortURLSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    unique: true,
    index: true, // Index for faster lookups
  },
  clicks: {
    type: Number,
    required: true,
    // Default value for clicks is set to 0
    default: 0,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  }
});
const ShortURL = mongoose.model("ShortURL", shortURLSchema);
export default ShortURL;