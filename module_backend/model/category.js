import mongoose from "mongoose";
import { nanoid } from "nanoid";

const categorySchema = new mongoose.Schema(
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
    collection: "categories",
  }
);

const category = mongoose.model("category", categorySchema, "categories");
export default category;
