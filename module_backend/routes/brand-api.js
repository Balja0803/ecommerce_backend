import express from "express";
import { getBrands, addBrands } from "../services/brand-service.js";
import { imageUpload } from "../services/image-service.js";
import upload from "../util/multer-handler.js";
import { nanoid } from "nanoid";

const brandRouter = express.Router();

brandRouter.get("/", async (req, res) => {
  console.log("brands GET request");

  const result = await getBrands();

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error: "not found" });
  }
});

brandRouter.post("/add", upload.single("image"), async (req, res) => {
  console.log("brand POST huselt", req.body.name);
  console.log("image", req.file);
  const brand = { name: "brands" };
  const path = await imageUpload(req.file, brand);

  const newBrand = {
    _id: nanoid(),
    image: path,
    ...JSON.parse(req.body.name),
  };

  const result = await addBrands(newBrand);

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error: "not found" });
  }
});

export default brandRouter;
