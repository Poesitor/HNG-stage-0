import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  user: {
    email: process.env.MY_EMAIL || "youremail@example.com",
    name: process.env.MY_NAME || "Your Full Name",
    stack: process.env.MY_STACK || "Node.js/Express",
  },
};
