// services/auth.service.js
import { find_user_by_email, create_user } from "../dao/user_dao.js";
import { sign_token } from "../utils/helper.js";

export const register_user_service = async (name, email, password) => {
  const existingUser = await find_user_by_email(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = await create_user(name, email, password); // Store plain password
  await newUser.save();

  const token = sign_token({ id: newUser._id, email: newUser.email });
  return {
    token,
    user: { id: newUser._id, name: newUser.name, email: newUser.email },
  };
};

export const login_user_service = async (email, password) => {
  const user = await find_user_by_email(email);
  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  return user;
};
