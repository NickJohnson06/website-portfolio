import express from "express";
import { sendContactEmail, sendAutoReply, testEmailConfig } from "../utils/mailer.js";

const router = express.Router();

// Simple rate limiting store (in production, use Redis or a proper rate limiter)
const contactAttempts = new Map();

// Rate limiting middleware
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 3; // Max 3 attempts per 15 minutes

  if (!contactAttempts.has(ip)) {
    contactAttempts.set(ip, []);
  }

  const attempts = contactAttempts.get(ip);
  const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);

  if (recentAttempts.length >= maxAttempts) {
    return res.status(429).json({
      error: "Too many contact attempts. Please try again later.",
      retryAfter: Math.ceil((recentAttempts[0] + windowMs - now) / 1000)
    });
  }

  recentAttempts.push(now);
  contactAttempts.set(ip, recentAttempts);
  next();
};

// Validation middleware
const validateContactData = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  // Check required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "All fields (name, email, subject, message) are required"
    });
  }

  // Validate name
  if (name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({
      error: "Name must be between 2 and 100 characters"
    });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Please provide a valid email address"
    });
  }

  // Validate subject
  if (subject.trim().length < 5 || subject.trim().length > 200) {
    return res.status(400).json({
      error: "Subject must be between 5 and 200 characters"
    });
  }

  // Validate message
  if (message.trim().length < 10 || message.trim().length > 2000) {
    return res.status(400).json({
      error: "Message must be between 10 and 2000 characters"
    });
  }

  // Sanitize data
  req.body = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim()
  };

  next();
};

// POST contact form submission
router.post("/", rateLimit, validateContactData, async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      timestamp: new Date()
    };

    // Send email to you (the portfolio owner)
    const emailResult = await sendContactEmail(contactData);

    // Send auto-reply to the person who submitted the form
    const autoReplyResult = await sendAutoReply(contactData);

    res.status(200).json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      emailSent: emailResult.success,
      autoReplySent: autoReplyResult.success
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      error: "Failed to send message. Please try again later."
    });
  }
});

// GET test email configuration
router.get("/test-email", async (req, res) => {
  try {
    const result = await testEmailConfig();
    
    if (result.success) {
      res.json({ success: true, message: result.message });
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error("Error testing email config:", error);
    res.status(500).json({ error: "Failed to test email configuration" });
  }
});

// GET contact form validation rules (for frontend)
router.get("/validation-rules", (req, res) => {
  res.json({
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 100
      },
      email: {
        required: true,
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
      },
      subject: {
        required: true,
        minLength: 5,
        maxLength: 200
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 2000
      }
    },
    rateLimit: {
      maxAttempts: 3,
      windowMs: 15 * 60 * 1000 // 15 minutes
    }
  });
});

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    service: "contact-api"
  });
});

export default router;
