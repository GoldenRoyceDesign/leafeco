const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  
  // Check if user exists
  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: "User already exists" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  user = new User({ email, password: hashedPassword });
  await user.save();

  res.json({ message: "Signup successful" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });

  res.json({ token, user: { id: user._id, email: user.email } });
});

module.exports = router;
