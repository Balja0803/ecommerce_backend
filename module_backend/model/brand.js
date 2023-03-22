import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
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
