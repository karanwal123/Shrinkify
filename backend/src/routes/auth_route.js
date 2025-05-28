// routes/authRoutes.js
import express from "express";
import { register_user, login_user } from "../controllers/authController.js";
import wrapAsync from "../utils/wrapAsync.js";

const router = express.Router();

router.post("/register", wrapAsync(register_user));
router.post("/login", wrapAsync(login_user));

export default router;
