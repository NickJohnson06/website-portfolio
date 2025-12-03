//Express entry
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import projectsRouter from "./routes/projects.js";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
});