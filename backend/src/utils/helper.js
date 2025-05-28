import { json } from "express";
import jsonwebtoken from "jsonwebtoken";
import { nanoid } from "nanoid";
//helper fxn
export const ID_generator_fxn = (length) => {
  //length is optional, default to 7 if not provided
  //badmai dekhte hain
  return nanoid(7);
};

// utils/helper.js

export const sign_token = (payload) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verify_token = (token) => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET);
};
