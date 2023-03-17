import express from "express";
import { addUser } from "../services/user-service.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  console.log("users GET request");
  res.status(200).send({ message: "in development" });
});

userRouter.post("/add", async (req, res) => {
  console.log("new user POST request", req.body);
  const body = req.body;
  const result = await addUser(body);
  try {
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(400).send({ error: "something went left" });
  }
});

export default userRouter;
