import express from "express";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all chats (friends + groups)
router.get("/", async (req, res) => {
  try {
    const [friendsData, groupsData] = await Promise.all([
      readFileSync(join(__dirname, "../data/friends.json"), "utf8"),
      readFileSync(join(__dirname, "../data/groups.json"), "utf8"),
    ]);

    const friends = JSON.parse(friendsData);
    const groups = JSON.parse(groupsData);

    res.json({
      success: true,
      data: {
        friends,
        groups,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load chats",
      error: error.message,
    });
  }
});

export default router;
