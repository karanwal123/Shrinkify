// src/services/shortURL.service.js

import ShortURL from "../models/shortURL.model.js";
import { ID_generator_fxn } from "../utils/ID_generator_fxn.js";

// 1) Core “make & save” helper
async function _makeAndSave(originalURL, userId = null) {
  if (!originalURL) {
    throw new Error("`url` is required");
  }

  const shortURL = ID_generator_fxn();
  const data = { originalURL, shortURL };
  if (userId) data.user = userId;

  const doc = new ShortURL(data);
  await doc.save();
  return doc;
}

// 2) For anonymous users
export async function createShortURL(originalURL) {
  // returns the saved document
  return _makeAndSave(originalURL);
}

// 3) For authenticated users
export async function createShortURLForUser(originalURL, userId) {
  if (!userId) {
    throw new Error("`userId` is required for this operation");
  }
  return _makeAndSave(originalURL, userId);
}
