// src/pages/SuccessPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
  const { t } = useTranslation();

  return (
    <div className="success-container">
      <h1>{t('success_heading')}</h1>
      <p>{t('success_message')}</p>
      <a href="/" className="home-button">{t('return_home')}</a>
    </div>
  );
};

export default SuccessPage;
