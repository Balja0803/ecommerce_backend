import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://balja0803:celo0803@cluster0.steqanz.mongodb.net/ecommerce"
  )
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
