// backend/server.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import recordRoutes from "./routes/recordRoutes.js";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/records", recordRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
