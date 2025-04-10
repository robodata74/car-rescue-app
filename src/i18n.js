// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import swTranslation from './locales/sw.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: enTranslation,
      sw: swTranslation
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
