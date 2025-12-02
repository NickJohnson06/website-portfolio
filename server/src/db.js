import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config';

const URI = process.env.MONGODB_URI;
let client;

if (URI) {
  client = new MongoClient(URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}

let db = null;

export async function connectDB() {
  if (!URI) {
    console.warn("MONGODB_URI missing - running without database");
    return null;
  }

  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    db = client.db("portfolio");
    return db;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    console.warn("Running without database - some features will be limited");
    return null;
  }
}

export function getDB() {
  return db;
}

export default db;
