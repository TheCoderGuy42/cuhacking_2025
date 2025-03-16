import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  try {
    // For now, return static data since we haven't set up MongoDB
    res.json([
      {
        id: 1,
        title: "Sample Todo 1",
        completed: false,
      },
      {
        id: 2,
        title: "Sample Todo 2",
        completed: true,
      },
    ]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
