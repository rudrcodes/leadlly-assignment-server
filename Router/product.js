import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "All Products 🧑‍🤝‍🧑" });
});
router.get("/inside", (req, res) => {
  res.json({ user: "inside Products 🧑‍🤝‍🧑" });
});

export default router;
