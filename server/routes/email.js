const express = require('express');
const router = express.Router();
const sendConfirmationEmail = require('../utils/emailService');

// POST route to trigger email sending
router.post('/send-confirmation', (req, res) => {
  const { userEmail, formData } = req.body;

  try {
    sendConfirmationEmail(userEmail, formData);
    res.status(200).json({ message: 'Confirmation email sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
