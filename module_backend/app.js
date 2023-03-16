import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/mongo-config.js";
import userRouter from "./routes/users-api.js";
import prodRouter from "./routes/products-api.js";

const app = express();
const port = 2323;

app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/products", prodRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
