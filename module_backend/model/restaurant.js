import mongoose from "mongoose";
import { Schema } from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String,
    },
  },
  {
    collection: "restaurants",
  }
);
const Restaurant = mongoose.model(
  "Restaurant",
  restaurantSchema,
  "restaurants"
);

Restaurant.collection.createIndex({ coord: "2dsphere" });

export default Restaurant;
