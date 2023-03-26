import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { addUser, getUser } from "../services/user-service.js";
import User from "../model/user.js";
import verifyToken from "../util/auth.js";

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

userRouter.post("/register", async (req, res) => {
  console.log("user REGISTER huselt", req.body);

  const data = req.body;
  if (data) {
    const oldUser = await User.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        status: "User already exists , please login",
      });
    }
  }

  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  data.password = hashedPassword;

  const result = await addUser(data);
  try {
    res.status(201).json({
      message: "Account created successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  console.log("User LOGIN huselt", req.body);
  try {
    const { email, password } = req.body;

    if (!email && password) {
      res.status(400).json({
        success: false,
        status: "please fill required fields",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        "MySuperDuperPrivateKey",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        success: true,
        status: "successfully logged in",
        data: user,
        token: token,
      });
      return;
    } else {
      res.status(400).json({
        success: false,
        status: "username or password wrong",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
