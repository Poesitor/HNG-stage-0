import { Router } from "express";
import { getUserProfile } from "../controllers/user.controller.js";
import { rateLimiter } from "../middlewares/rateLimit.js";

const userRouter = Router();

userRouter.get("/me", rateLimiter, getUserProfile);

export default userRouter;
