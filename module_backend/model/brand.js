import mongoose from "mongoose";
import { nanoid } from "nanoid";

const brandSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: nanoid(),
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "brands",
  }
);

const brand = mongoose.model("brand", brandSchema, "brands");

export default brand;
