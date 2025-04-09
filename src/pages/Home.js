// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Correct import for Home.css

import logo from '../assets/logo.png'; // Path to your logo image
import banner from '../assets/flatbed_banner.png'; // Path to your homepage banner image

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src={logo} alt="Robert Motoring Consult Logo" className="logo" />
        <h1 className="home-title">Welcome to Robert Motoring Consult</h1>
        <p className="home-description">
          Fast and reliable flatbed car rescue services.
        </p>
      </header>
      <section className="banner-section">
        <img
          src={banner}
          alt="Flatbed Banner"
          className="flatbed-banner"
        />
      </section>
      <section className="cta-section">
        <Link to="/booking" className="cta-button">
          Book a Rescue Service
        </Link>
      </section>
    </div>
  );
};

export default Home;
