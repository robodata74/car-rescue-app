// Importing dependencies
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware for Cross-Origin Requests
app.use(cors());

// Handle form data submission
app.post('/book-service', (req, res) => {
  const formData = req.body; // The data sent from the frontend

  console.log('Received form data:', formData);

  // Here, you can process the data (e.g., store it in a database, etc.)
  // For now, just respond with a success message
  res.status(200).json({ message: 'Booking data received successfully!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
