// controllers/authController.js
import {
  register_user_service,
  login_user_service,
} from "../services/auth_service.js";
import { sign_token } from "../utils/jwt.util.js";
import { cookieConfig } from "../config/config.js";

export const register_user = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await register_user_service(username, email, password);
    const token = await sign_token({ id: user.id, email: user.email });

    res.cookie("access_token", token, cookieConfig);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login_user_service(email, password);
    const token = await sign_token({ id: user.id, email: user.email });

    res.cookie("access_token", token, cookieConfig);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
