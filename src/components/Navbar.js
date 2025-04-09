import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // ✅ Correct casing

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
          Robert Motoring Consult
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Book Now</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </nav>
  );
};

export default Navbar;
