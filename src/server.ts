import express from "express";
import cors from "cors";

import { config } from "./config/env.config.js";
import userRoutes from "./routes/user.routes.js";

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Endpoints
app.use("/", userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
