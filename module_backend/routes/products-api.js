import express from "express";
import { addProduct } from "../services/product-service.js";

const prodRouter = express.Router();

prodRouter.get("/", async (req, res) => {
  console.log("product GET request");
  res.status(200).send({ message: "in development" });
});

prodRouter.post("/add", async (req, res) => {
  console.log("product POST huselt", req.body);
  const body = req.body;
  const result = await addProduct(body);
  try {
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(400).send({ error: "something went left" });
  }
});

export default prodRouter;
