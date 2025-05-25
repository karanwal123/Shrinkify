import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    // No more deprecated flags!
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongo;
