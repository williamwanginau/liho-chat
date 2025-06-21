import express from "express";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get mock friends data for development
router.get("/mock-friends", async (req, res) => {
  try {
    const mockFriendsData = readFileSync(
      join(__dirname, "../data/mock-friends.json"),
      "utf8"
    );
    const mockFriends = JSON.parse(mockFriendsData);

    res.json({
      success: true,
      data: mockFriends,
      message: "Mock friends data loaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load mock friends data",
      error: error.message,
    });
  }
});

// Clear friends data (for development testing)
router.post("/clear-friends", async (req, res) => {
  try {
    // Write empty array to friends.json
    const emptyFriends = [];
    writeFileSync(
      join(__dirname, "../data/friends.json"),
      JSON.stringify(emptyFriends, null, 2),
      "utf8"
    );

    res.json({
      success: true,
      message: "Friends data cleared successfully",
      data: emptyFriends,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to clear friends data",
      error: error.message,
    });
  }
});

// Reset friends data to original
router.post("/reset-friends", async (req, res) => {
  try {
    // Read original friends data from backup file
    const backupFriendsData = readFileSync(
      join(__dirname, "../data/friends-backup.json"),
      "utf8"
    );
    const originalFriends = JSON.parse(backupFriendsData);

    // Write backup data to main friends.json
    writeFileSync(
      join(__dirname, "../data/friends.json"),
      JSON.stringify(originalFriends, null, 2),
      "utf8"
    );

    res.json({
      success: true,
      message: "Friends data reset to original successfully",
      data: originalFriends,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to reset friends data",
      error: error.message,
    });
  }
});

// Create backup of current friends data
router.post("/backup-friends", async (req, res) => {
  try {
    // Read current friends data
    const friendsData = readFileSync(
      join(__dirname, "../data/friends.json"),
      "utf8"
    );
    const friends = JSON.parse(friendsData);

    // Write to backup file
    writeFileSync(
      join(__dirname, "../data/friends-backup.json"),
      JSON.stringify(friends, null, 2),
      "utf8"
    );

    res.json({
      success: true,
      message: "Friends data backed up successfully",
      data: {
        backedUpCount: friends.length,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to backup friends data",
      error: error.message,
    });
  }
});

// Get development status
router.get("/status", async (req, res) => {
  try {
    const friendsData = readFileSync(
      join(__dirname, "../data/friends.json"),
      "utf8"
    );
    const friends = JSON.parse(friendsData);

    const mockFriendsData = readFileSync(
      join(__dirname, "../data/mock-friends.json"),
      "utf8"
    );
    const mockFriends = JSON.parse(mockFriendsData);

    // Check if backup exists
    let backupFriends = [];
    try {
      const backupFriendsData = readFileSync(
        join(__dirname, "../data/friends-backup.json"),
        "utf8"
      );
      backupFriends = JSON.parse(backupFriendsData);
    } catch (error) {
      // Backup file doesn't exist or is corrupted
      console.warn("Backup file not found or corrupted");
    }

    res.json({
      success: true,
      data: {
        currentFriendsCount: friends.length,
        mockFriendsCount: mockFriends.length,
        backupFriendsCount: backupFriends.length,
        hasBackup: backupFriends.length > 0,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get development status",
      error: error.message,
    });
  }
});

export default router;
