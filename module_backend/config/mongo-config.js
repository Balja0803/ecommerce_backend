import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const db = mongoose
  .connect(process.env.MONGO_CONNECT)
  .then((res) => {
    console.log("ecommerce DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
