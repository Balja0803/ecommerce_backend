import express from "express";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  console.log("users GET request");
  res.status(200).send({ message: "in development" });
});

export default userRouter;
