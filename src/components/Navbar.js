// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importing i18next for translation

import './Navbar.css'; // Ensure this matches with your CSS file name

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Using i18next to access translation functions

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Change language dynamically
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>{t('navbar.logo')}</h1> {/* Translated logo text */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">{t('navbar.home')}</Link> {/* Translated link */}
        </li>
        <li>
          <Link to="/booking">{t('navbar.booking')}</Link> {/* Translated link */}
        </li>
        <li>
          <Link to="/terms">{t('navbar.terms')}</Link> {/* Translated link */}
        </li>
        <li>
          <button onClick={() => handleLanguageChange('en')}>English</button>
        </li>
        <li>
          <button onClick={() => handleLanguageChange('sw')}>Swahili</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
