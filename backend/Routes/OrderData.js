// routes/order.js

const express = require('express');
const router = express.Router();

const Order = require("../models/Orders")

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    data.unshift({ Order_date: req.body.order_date });

    try {
        let eId = await Order.findOne({ 'email': req.body.email });

        if (eId === null) {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
        } else {
            await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } });
        }

        
        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post('/myOrderData', async (req, res) => {
    try {
        let eId = await Order.findOne({ 'email': req.body.email });
        res.json({ orderData: eId ? eId.order_data : [] });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
