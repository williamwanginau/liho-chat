import express from "express";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all groups
router.get("/", async (req, res) => {
  try {
    const groupsData = readFileSync(
      join(__dirname, "../data/groups.json"),
      "utf8"
    );
    const groups = JSON.parse(groupsData);

    res.json({
      success: true,
      data: groups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load groups",
      error: error.message,
    });
  }
});

export default router;
