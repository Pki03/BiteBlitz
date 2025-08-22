const mongoDB = require("./db");
mongoDB();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Use dynamic port provided by Render, fallback to 5001 locally
const port = process.env.PORT || 5001;

// Import Razorpay routes
const razorpayRoutes = require('./Routes/razorpay');

const app = express();

// CORS setup
const allowedOrigins = [
  "https://bite-blitz-coral.vercel.app", // Vercel frontend
  "http://localhost:3000"                // Local frontend
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.send('Hello World from Render backend!');
});

// Define API routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.use('/api/razorpay', razorpayRoutes);

// Start server
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
