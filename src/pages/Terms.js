// src/pages/Terms.js
import React from 'react';
import '../styles/Terms.css'; // Correct path to the CSS file

const Terms = () => {
  return (
    <div className="terms-page">
      <h1>Terms and Conditions</h1>
      <p>
        By using our service, you agree to the following terms and conditions:
      </p>
      <ul>
        <li>Service charges are subject to negotiation on-site.</li>
        <li>Booking requires a non-refundable deposit.</li>
        <li>We are not liable for any damages during transport.</li>
        <li>Payment for services will be agreed upon before transport begins.</li>
      </ul>
    </div>
  );
};

export default Terms;
