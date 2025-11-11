import mongoose from "mongoose";
import { DB_NAME } from "../constans.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `✅ Database connected successfully: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};
