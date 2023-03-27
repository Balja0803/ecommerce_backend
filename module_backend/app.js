import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import db from "./config/mongo-config.js";
import userRouter from "./routes/users-api.js";
import prodRouter from "./routes/products-api.js";
import categoryRouter from "./routes/category-api.js";
import brandRouter from "./routes/brand-api.js";
import restaurantRouter from "./routes/restaurant-api.js";

const app = express();
dotenv.config();
const port = 2323;

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", prodRouter);
app.use("/categories", categoryRouter);
app.use("/brands", brandRouter);
app.use("/restaurants", restaurantRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
