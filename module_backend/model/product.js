import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  sale: Number,
  specs: Array,
  brand: String,
  category: String,
  description: String,
  image: String,
  created_date: Date,
});

const product = mongoose.model("product", productSchema, "products");

export default product;
