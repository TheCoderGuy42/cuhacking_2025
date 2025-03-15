import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Sample todo API endpoints
app.get("/api/todos", (req, res) => {
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
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
