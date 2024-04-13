import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "All users 🧑‍🤝‍🧑" });
});

router.post("/login", async (req, res) => {
  // Login -> Already registered
  const { email, password } = req.body;
  console.log(email, password);
  //   jwt token bnana hai

  //check in db if they exist
  const user = await UserModel.findOne({ email });

  if (!user) {
    //if not exist then return
    res.status(404).json({ msg: "User not found" });
  }

  //if user exists , made them login
  var token = jwt.sign({ email }, process.env.SECRET_KEY);
  res.cookie("token", token);
  res.status(200).json({ msg: "User logged in" });
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Signup -> Registering for the first time
  //create user
  const user = UserModel({ email, password });
  await UserModel.save();

  console.log("user: ", user);

  //check in db if they exist
});

router.get("/inside", (req, res) => {
  res.json({ user: "inside users 🧑‍🤝‍🧑" });
});

export default router;
