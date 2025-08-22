const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.JWT_SECRET || "thisisawebsitewhichismadebyPrateek";

// ---------------- SIGNUP ----------------
router.post("/createuser",
  body('email').isEmail(),
  body('name', 'Name must be at least 3 characters').isLength({ min: 3 }), // lowered min
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      const newUser = await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      });

      // Generate JWT token for frontend
      const data = { user: { id: newUser.id } };
      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

// ---------------- LOGIN ----------------
router.post("/loginuser",
  body('email').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const userData = await User.findOne({ email });
      console.log("User Data:", userData);

      if (!userData) {
        return res.status(400).json({ success: false, errors: "Try logging in with correct data or create an account" });
      }

      const isPasswordMatch = await bcrypt.compare(password, userData.password);
      console.log("Password Comparison Result:", isPasswordMatch);

      if (!isPasswordMatch) {
        return res.status(400).json({ success: false, errors: "Try logging in with correct data or create an account" });
      }

      const data = { user: { id: userData.id } };
      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

module.exports = router;
