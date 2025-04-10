// src/pages/Terms.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Terms.css';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="terms-container">
      <h1>{t('terms_title')}</h1>
      <p>{t('terms_text')}</p>
    </div>
  );
};

export default Terms;
