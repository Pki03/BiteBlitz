const mongoose = require('mongoose');

const MONGOURL = "mongodb+srv://khurmiprateek3:prateek17dec@cluster0.decbbww.mongodb.net/food?retryWrites=true&w=majority";

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

        const foodOrders = await mongoose.connection.db.collection("orders").find({}).toArray();
        global.foodOrders=foodOrders;
        global.foodOrders.forEach(order => {
            console.log("Order:", JSON.stringify(order, null, 2));
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = mongoDB;
