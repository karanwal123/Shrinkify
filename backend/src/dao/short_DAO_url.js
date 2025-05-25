import ShortURL from "../models/shortURL.model.js";

export const saveShortURL = async (shortURL, originalURL,userId) => {
  try {
    const doc = new ShortURL({ originalURL, shortURL });
    if(userId) {
        doc.user= userId; // Associate with a user if userId is provided
    }
    await doc.save();
    return doc; // returns the saved document, including its Mongo _id, clicks, etc.
  } catch (error) {
    console.error("Error saving ShortURL:", error);
    throw error; // let the caller handle the HTTP response
  }
};
