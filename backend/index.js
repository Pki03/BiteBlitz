const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

const mongoDB = require("./db");
mongoDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON and form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a specific CORS setup for the /createuser route
app.options('/createuser', cors());

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
