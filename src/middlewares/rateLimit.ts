import type { Request, Response } from "express";
import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 20 * 60 * 1000, // 20 minutes time window
  max: 100, // Limit 100 requests per IP
  message: (req: Request, res: Response) => {
    res.status(429).json({
      status: "error",
      message: "Too many requests, please try again later",
    });
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable legacy headers
});
