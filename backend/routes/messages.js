import express from "express";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messagesData = readFileSync(
      join(__dirname, "../data/messages.json"),
      "utf8"
    );
    const messages = JSON.parse(messagesData);

    res.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load messages",
      error: error.message,
    });
  }
});

// Send a message
router.post("/", async (req, res) => {
  try {
    const { text, chatId } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message text is required",
      });
    }

    // Create new message
    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: "me",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      status: "sent",
    };

    // Simulate AI response
    const responses = [
      "Thanks for your message!",
      "Got it! 👍",
      "Interesting point!",
      "Let me think about that...",
      "I agree with you.",
      "That sounds great!",
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    const responseMessage = {
      id: Date.now() + 1,
      text: randomResponse,
      sender: "other",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      avatar: "🤖",
    };

    res.json({
      success: true,
      data: {
        sent: newMessage,
        response: responseMessage,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
});

export default router;
