// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Global styles for the app
import App from './App';
import './i18n'; // <-- Import i18n setup

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
