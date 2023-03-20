import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import db from "./config/mongo-config.js";
import userRouter from "./routes/users-api.js";
import prodRouter from "./routes/products-api.js";

const app = express();
const port = 2323;

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/products", prodRouter);

export const Storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: Storage,
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
