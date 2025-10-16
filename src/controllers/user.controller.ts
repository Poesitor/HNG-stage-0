import type { Request, Response } from "express";
import { config } from "../config/env.config.js";
import { getCatFact } from "../services/catFact.service.js";

export const getUserProfile = async (req: Request, res: Response) => {
  const fact = await getCatFact();

  const response = {
    status: "success",
    user: {
      email: config.user.email,
      name: config.user.name,
      stack: config.user.stack,
    },
    timemstamp: new Date().toISOString(),
    fact: fact,
  };

  res.status(200).json(response);
};
