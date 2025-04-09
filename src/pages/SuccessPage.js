// src/pages/SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SuccessPage.css'; // Correct import for SuccessPage.css

import logo from '../assets/logo.png'; // Path to your logo

const SuccessPage = () => {
  return (
    <div className="success-page">
      <header className="success-header">
        <img src={logo} alt="Robert Motoring Consult Logo" className="logo" />
        <h1 className="success-title">Booking Successful!</h1>
      </header>
      <section className="success-content">
        <p>Your booking has been received successfully. Please note:</p>
        <p className="important-note">
          This is only a booking. The payment for the services will be negotiated directly on-site, and charges will be agreed upon before it is undertaken.
        </p>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </section>
    </div>
  );
};

export default SuccessPage;
