import User from "../models/user.model";

export const find_user_by_email = async (email) => {
  return await User.findOne({ email: email }).exec();
};
//exec() ensures you're working with a real Promise.

export const find_user_by_id = async (userId) => {
  return await User.findById(userId).exec();
  // findById is a Mongoose method that retrieves a document by its _id field.
};

export const create_user = async (name, email, password) => {
  const user = new User({ name, email, password });
  await user.save();
  return user;
  // save() is a Mongoose method that saves the document to the database.
};
