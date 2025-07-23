//Mongoose connection
import mongoose from "mongoose";

export default async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI missing");

  const opts = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  };

  await mongoose.connect(uri, opts);
  console.log("MongoDB connected");
}