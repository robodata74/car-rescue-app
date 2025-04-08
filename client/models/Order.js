// models/Order.js
const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  carType: {
    type: String,
    required: true,
  },
  carColor: {
    type: String,
    required: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  bodyType: {
    type: String,
    required: true,
  },
  VIN: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  noOfOccupants: {
    type: Number,
    required: true,
  },
  requesterName: {
    type: String,
    required: true,
  },
  requesterIdPassport: {
    type: String,
    required: true,
  },
  requesterPhone: {
    type: String,
    required: true,
  },
  requesterEmail: {
    type: String,
    required: true,
  },
  personsAtVehicle: [
    {
      name: String,
      mobileNumber: String,
      age: Number,
    },
  ],
  pickupLocation: {
    type: String,
    required: true,
  },
  destinationLocation: {
    type: String,
    required: true,
  },
  reasonForRequest: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
