const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'robertmotoringconsult@gmail.com',
    pass: 'your-app-password' // Use App Password
  }
});

// Function to send confirmation email
const sendConfirmationEmail = (userEmail, formData) => {
  const mailOptions = {
    from: 'robertmotoringconsult@gmail.com',
    to: userEmail,
    subject: 'Booking Confirmation',
    text: `Dear ${formData.userName},\n\nThank you for booking our car rescue service.\n\nBooking Details:\n- Car Registration: ${formData.carRegistration}\n- Car Type: ${formData.carType}\n- Car Weight: ${formData.carWeight} KG\n- Pickup Location: ${formData.pickupLocation}\n- Delivery Location: ${formData.deliveryLocation}\n\nYour booking has been received. Please complete the payment via the link provided.\n\nBest regards,\nCar Rescue Service Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendConfirmationEmail;
