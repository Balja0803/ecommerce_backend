import express from "express";
import multer from "multer";
import fs from "fs";
import { addProduct, getProduct } from "../services/product-service.js";
import { imageUpload } from "../services/image-service.js";
import product from "../model/product.js";

const prodRouter = express.Router();

const Storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage });

prodRouter.get("/", async (req, res) => {
  console.log("product GET request");
  const result = await getProduct();
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send({ error: "left" });
  }
});

prodRouter.post("/add", upload.single("image"), async (req, res) => {
  console.log("product POST huselt", req.body);
  console.log("images", req.file);
  // const body = req.body;

  imageUpload(req.file);

  // const result = await addProduct(body, images);
  // try {
  //   res.status(200).send({ data: result });
  // } catch (error) {
  //   res.status(400).send({ error: "something went left" });
  // }
});

export default prodRouter;
