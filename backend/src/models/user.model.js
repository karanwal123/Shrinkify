import mongoose from "mongoose";
import crypto from "crypto"; // For MD5 hashing

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  avatar: {
    type: String, // Will store Gravatar URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save middleware to generate Gravatar URL based on email
userSchema.pre("save", function (next) {
  if (!this.isModified("email")) return next(); // Only update avatar if email is new or modified

  const emailHash = crypto
    .createHash("md5")
    .update(this.email.trim().toLowerCase())
    .digest("hex");

  this.avatar = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`; // default: identicon
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
