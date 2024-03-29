const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.JWT_SECRET || "thisisawebsitewhichismadebyPrateek";

router.post("/createuser",
  body('email').isEmail(),
  body('name', 'incorrect name given').isLength({ min: 5 }),
  body('password', 'incorrect pwd').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      });

      // Redirect to home page after successful user creation
      res.json({ success: true, redirect: '/' });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: error.message });
    }
  });

router.post("/loginuser",
  body('email').isEmail(),
  body('password', 'incorrect pwd').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      console.log("User Data:", userData);

      if (!userData) {
        console.log("User not found");
        return res.status(400).json({ errors: "Try logging in with correct data or create an account" });
      }

      const isPasswordMatch = await bcrypt.compare(req.body.password, userData.password);
      console.log("Password Comparison Result:", isPasswordMatch);

      if (!isPasswordMatch) {
        console.log("Incorrect password");
        return res.status(400).json({ errors: "Try logging in with correct data or create an account" });
      }

      const data = {
        user: {
          id: userData.id
        }
      }
      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: error.message });
    }
  });

module.exports = router;
