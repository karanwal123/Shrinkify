import express from "express";
import { createShortURLHandler as createShortURL } from "../controllers/shortURL.controller.js";
const router = express.Router();

router.post("/", createShortURL);

export default router;
