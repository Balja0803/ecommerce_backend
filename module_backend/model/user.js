import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  gender: String,
  password: String,
  contact: Number,
  address1: String,
  address2: String,
  image: String,
  email: { type: String, unique: true, required: true },
  createdOn: Date,
  modifiedOn: { type: Date, default: Date.now },
  lastLogin: Date,
});

const User = mongoose.model("user", userSchema, "users");

export default User;
