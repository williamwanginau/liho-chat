import express from "express";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all friends
router.get("/", async (req, res) => {
  try {
    const friendsData = readFileSync(
      join(__dirname, "../data/friends.json"),
      "utf8"
    );
    const friends = JSON.parse(friendsData);

    res.json({
      success: true,
      data: friends,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load friends",
      error: error.message,
    });
  }
});

// Get friend by ID
router.get("/:id", async (req, res) => {
  try {
    const friendsData = readFileSync(
      join(__dirname, "../data/friends.json"),
      "utf8"
    );
    const friends = JSON.parse(friendsData);
    const friend = friends.find((f) => f.id === parseInt(req.params.id));

    if (!friend) {
      return res.status(404).json({
        success: false,
        message: "Friend not found",
      });
    }

    res.json({
      success: true,
      data: friend,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load friend",
      error: error.message,
    });
  }
});

export default router;
