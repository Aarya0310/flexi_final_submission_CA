import Record from "../models/Record.js";

// ✅ Save quiz result
export const saveRecord = async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Error saving record", error });
  }
};

// ✅ Get all records
export const getRecords = async (req, res) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records", error });
  }
};
