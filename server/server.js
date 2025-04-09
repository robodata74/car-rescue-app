// server.js
require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sendConfirmationEmail = require('./emailService'); // Your email service
const orderRoutes = require('./routes/order'); // Your routes (if any)

const app = express();
const port = 3001;  // You can change this if needed

// Mongoose warning fix: Set strictQuery to false (prepares for Mongoose 7 change)
mongoose.set('strictQuery', false);

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// Use your order routes for /api/order and /api/orders
app.use('/api', orderRoutes);

// MongoDB connection using environment variable
const uri = process.env.MONGO_URI;  // Access the URI from the .env file

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Start your server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
