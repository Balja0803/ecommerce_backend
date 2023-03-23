import express from "express";
import { getCategories, addCategory } from "../services/category-service.js";
import upload from "../util/multer-handler.js";
import { imageUpload } from "../services/image-service.js";
import { nanoid } from "nanoid";

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  console.log("categories GET huselt");
  const result = await getCategories();
  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error: "not found" });
  }
});

categoryRouter.post("/add", upload.single("image"), async (req, res) => {
  console.log("category POST huselt", req.body.name);
  console.log("image", req.file);

  const category = { name: "categories" };
  const path = await imageUpload(req.file, category);

  const newCategory = {
    _id: nanoid(),
    image: path,
    ...JSON.parse(req.body.name),
  };

  const result = await addCategory(newCategory);

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error: "not found" });
  }
});

export default categoryRouter;
