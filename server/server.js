import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import productsRouter from "./routes/products.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();

/* Middleware */
app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));

app.use("/uploads",
  express.static(path.join(__dirname, "uploads"))
);

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

/* Routes */
app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send("🚀 API Running");
});

/* PORT Fix (Very Important) */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});