import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import flatbedBanner from '../assets/flatbed_banner.png'; // updated image path

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <img src={flatbedBanner} alt="flatbed banner" className="flatbed-gif" />
      <h1 className="home-title">{t('welcome')}</h1>
      <p className="home-text">{t('home_description')}</p>
      <a href="/booking" className="home-button">{t('book_now')}</a>
    </div>
  );
};

export default Home;
