// app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectMongo from "./src/config/mongo.config.js";
import authRoutes from "./src/routes/auth.route.js";
import { authMiddleware } from "./src/middleware/authMiddleware.js";
import shortURLRoute from "./src/routes/shortURL.route.js";
import { redirect_from_short_URL } from "./src/controllers/shortURL.controller.js";

dotenv.config({ path: "./.env" });

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(cookieParser());                    // <-- for req.cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Public Auth Routes ───────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);

// ─── Protected Short-URL Creation ─────────────────────────────────────────────
app.use("/api/create", authMiddleware, shortURLRoute);

// ─── Public Redirect & Info ───────────────────────────────────────────────────
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/:id", redirect_from_short_URL);

app.get("/", (req, res) => {
  res.send("For NANO-ID usage, check out the POST /api/create endpoint");
});

// ─── Start Server ─────────────────────────────────────────────────────────────
const start = async () => {
  await connectMongo();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();
