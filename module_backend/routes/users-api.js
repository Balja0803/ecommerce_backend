import express from "express";
import { addUser, getUser } from "../services/user-service.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  console.log("users GET request");
  const { query } = req;
  console.log({ query });
  const result = await getUser(query.limit || 5);
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send({ error: "left" });
  }
});

userRouter.post("/add", async (req, res) => {
  console.log("new  user PO ST requ est", req.body);
  const body = req.body;
  const result = await addUser(body);
  try {
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(400).send({ error: "something went left" });
  }
});

export default userRouter;
