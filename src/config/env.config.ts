import dotenv from "dotenv";
// import { z } from "zod";

dotenv.config();

// // schema for the environment variables
// const envSchema = z.object({
//   PORT: z.string().default("3000"),
//   MY_EMAIL: z.email({ message: "MY_EMAIL must be a valid email" }),
//   MY_NAME: z.string().min(1, "MY_NAME is required"),
//   MY_STACK: z.string().default("Node.js/express"),
// });

// // Parse and validate process.env
// const parsedEnv = envSchema.safeParse(process.env);

// if (!parsedEnv.success) {
//   console.error("Invalid environment variables");
//   console.error(parsedEnv.error.format());
//   process.exit(1)
// }

export const config = {
  port: process.env.PORT || 3000,
  user: {
    email: process.env.MY_EMAIL || "youremail@example.com",
    name: process.env.MY_NAME || "Your Full Name",
    stack: process.env.MY_STACK || "Node.js/Express",
  },
};
