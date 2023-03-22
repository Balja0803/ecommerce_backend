import express from "express";
import { addProduct, getProduct } from "../services/product-service.js";
// import { imageUpload } from "../services/image-service.js";
import upload from "../util/multer-handler.js";
import cloudinary from "../config/cloudinary-config.js";
import fs from "fs";

const prodRouter = express.Router();

async function uploadToCloudinary(filePath) {
  let mainFolder = "products";
  let filePathOnCloudinary = mainFolder + "/" + filePath;

  return cloudinary.uploader
    .upload(filePath, { public_id: filePathOnCloudinary })
    .then((result) => {
      fs.unlinkSync(filePath);
      return { message: "success", url: result.url };
    })
    .catch((error) => {
      fs.unlinkSync(filePath);
      return { message: "fail" };
    });
}

prodRouter.get("/", async (req, res) => {
  console.log("product GET request");
  const result = await getProduct();
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send({ error: "left" });
  }
});

prodRouter.post("/add", upload.array("images", 3), async (req, res) => {
  console.log("product POST huselt", req.body.body);
  console.log("specs", req.body.specs);
  console.log("images", req.files);

  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploadToCloudinary(path);
    urls.push(newPath);
  }
  console.log(urls);
  // const body = req.body.body;
  // const specs = JSON.parse(req.body.specs);
  // const path = await imageUpload(req.file);

  // const product = {
  //   image: path,
  //   specs: [...specs],
  //   ...JSON.parse(body),
  // };

  // const result = await addProduct(product);
  // try {
  //   res.status(200).send({ data: result });
  // } catch (error) {
  //   res.status(400).send({ error: "something went left" });
  // }
});

export default prodRouter;
