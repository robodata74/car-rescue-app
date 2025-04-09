const nodemailer = require('nodemailer');

// Create a transporter using Gmail's SMTP server and your App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail as the email service
  auth: {
    user: 'robertmotoringconsult@gmail.com',  // Replace with your Gmail address
    pass: 'wzuk onlb gevg lgvt'  // Replace with your generated App Password
  }
});

// Function to send a confirmation email
const sendConfirmationEmail = (userEmail, formData) => {
  const mailOptions = {
    from: 'robertmotoringconsult@gmail.com',  // Sender email address
    to: userEmail,  // Recipient email address
    subject: 'Booking Confirmation',  // Email subject
    text: `Dear ${formData.userName},\n\nThank you for booking our car rescue service.\n\nBooking Details:\n- Car Registration: ${formData.carRegistration}\n- Car Type: ${formData.carType}\n- Car Weight: ${formData.carWeight} KG\n- Pickup Location: ${formData.pickupLocation}\n- Delivery Location: ${formData.deliveryLocation}\n\nYour booking has been received. Please complete the payment via the link provided.\n\nBest regards,\nCar Rescue Service Team`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);  // Log error if it occurs
    } else {
      console.log('Email sent:', info.response);  // Log the response from Gmail SMTP server
    }
  });
};

module.exports = sendConfirmationEmail;
