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

// Enable CORS only for your frontend deployed on Vercel
app.use(cors({
    origin: "https://bite-blitz-coral.vercel.app", // <-- Replace with your Vercel frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Optional: specific CORS for /createuser route if needed
app.options('/createuser', cors({
    origin: "https://bite-blitz-coral.vercel.app"
}));

// Test route
app.get('/', (req, res) => {
    res.send('Hello World from Render backend!');
});

// Define your API routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.use('/api/razorpay', razorpayRoutes);

// Start server
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
