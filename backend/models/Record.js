import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    name: String,
    prn: String,
    score: Number,
    total: Number,
    answers: Array,
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);
