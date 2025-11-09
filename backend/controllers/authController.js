const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.signup = async (req, res) => {
  const { name, prn, password } = req.body;
  if (!name || !prn || !password) return res.status(400).json({ message: 'Please provide all fields' });
  try {
    const existing = await User.findOne({ prn });
    if (existing) return res.status(400).json({ message: 'User already exists' });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await User.create({ name, prn, password: hashed });
    res.status(201).json({ token: generateToken(user._id), name: user.name });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { prn, password } = req.body;
  if (!prn || !password) return res.status(400).json({ message: 'Please provide prn and password' });
  try {
    const user = await User.findOne({ prn });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    res.json({ token: generateToken(user._id), name: user.name });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
