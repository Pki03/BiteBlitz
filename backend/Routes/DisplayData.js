const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // Assuming global.food_items and global.foodCategory are arrays
        console.log(global.food_items);
        console.log(global.foodCategory);
        res.json([global.food_items, global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
