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
      ref: "brand",
    },
    category: {
      type: Schema.Types.String,
      ref: "category",
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

const Product = mongoose.model("product", productSchema, "products");

export default Product;
