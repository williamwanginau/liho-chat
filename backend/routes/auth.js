import express from "express";

const router = express.Router();

// Simple auth endpoints for future use
router.post("/login", async (req, res) => {
  // TODO: Implement real authentication
  res.json({
    success: true,
    message: "Login endpoint - not implemented yet",
    data: {
      user: {
        id: 1,
        name: "Demo User",
        avatar: "👤",
      },
    },
  });
});

router.post("/logout", async (req, res) => {
  // TODO: Implement real logout
  res.json({
    success: true,
    message: "Logout successful",
  });
});

export default router;
