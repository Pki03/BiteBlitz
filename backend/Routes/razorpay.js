const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// POST route to create a Razorpay order
router.post("/createOrder", async (req, res) => {
  const { amount } = req.body; // in rupees

  if (!amount) return res.status(400).json({ error: "Amount is required" });

  try {
    const options = {
      amount: amount , 
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Razorpay Error:", error);
    return res.status(500).json({ success: false, error: "Order creation failed" });
  }
});

module.exports = router;
