const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
  userName: String,
  carRegistration: String,
  carType: String,
  carWeight: Number,
  pickupLocation: String,
  deliveryLocation: String,
  email: String
});

// Order Model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
