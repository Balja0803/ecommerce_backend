import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "moderator", "admin"],
      default: "user",
    },
    gender: String,
    password: { type: String, required: true },
    contact: Number,
    address1: String,
    address2: String,
    image: String,
    email: { type: String, unique: true, required: true },
    createdOn: {
      type: Date,
      default: Date.now,
    },
    modifiedOn: { type: Date, default: Date.now },
    lastLogin: Date,
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("user", userSchema, "users");

export default User;
