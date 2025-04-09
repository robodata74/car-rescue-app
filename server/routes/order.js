const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create a new order
router.post('/order', async (req, res) => {
  try {
    const orderData = req.body; // Data from the frontend
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.status(201).json({ message: 'Order Created Successfully', newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

module.exports = router;
