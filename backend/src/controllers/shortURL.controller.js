// src/controllers/shortURL.controller.js

import {
  createShortURL,
  createShortURLForUser,
} from "../services/shortURL.service.js";
import ShortURL from "../models/shortURL.model.js"; // ← fixed path

export const createShortURLHandler = async (req, res) => {
  try {
    const { originalURL } = req.body;
    const doc = req.user
      ? await createShortURLForUser(originalURL, req.user.id)
      : await createShortURL(originalURL);

    return res
      .status(201)
      .json({ shortURL: `${process.env.APP_URL}/${doc.shortURL}` });
  } catch (err) {
    const code = err.message.includes("required") ? 400 : 500;
    return res.status(code).json({ error: err.message });
  }
};

export const redirect_from_short_URL = async (req, res) => {
  const { id } = req.params;
  try {
    const shortURL = await ShortURL.findOne({ shortURL: id });
    if (!shortURL) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    shortURL.clicks += 1;
    await shortURL.save();
    return res.redirect(shortURL.originalURL);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
