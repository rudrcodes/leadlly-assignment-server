import express from "express";
import cors from "cors";
import UserRouter from "./Router/user.js";
import ProductRouter from "./Router/product.js";

import dotenv from "dotenv";
import { connectDB } from "./connect.js";
dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Working fine ✅" });
});

app.use(express.json());
app.use(cors());

//using router
app.use("/user", UserRouter);
app.use("/products", ProductRouter);

app.use("*", (req, res) => {
  res.json({ msg: "404 , route doesn't exist" });
});

app.listen(5000, () => {
  console.log("server started at 5000");
});
