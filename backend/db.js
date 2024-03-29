const mongoose = require('mongoose');

const MONGOURL = "mongodb_link";

const mongoDB = async () => {
    try {
        await mongoose.connect(MONGOURL, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const fetchedData = await mongoose.connection.db.collection("data").find({}).toArray();

        const foodCategory = await mongoose.connection.db.collection("category").find({}).toArray();

        global.food_items = fetchedData;
        global.foodCategory = foodCategory;

        // Additional logging for verification
        console.log("Fetched Data:", global.food_items);
        console.log("Food Category Data:", global.foodCategory);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = mongoDB;
