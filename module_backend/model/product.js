import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    sale: Number,
    specs: [Object],
    brand: {
      type: Schema.Types.String,
      ref: "brands",
    },
    category: {
      type: Schema.Types.String,
      ref: "categories",
    },
    description: String,
    image: [String],
    created_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "products",
  }
);

const product = mongoose.model("product", productSchema, "products");

export default product;
