// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import Terms from './pages/Terms';
import Navbar from './components/Navbar'; // Import should match the casing of the file name
import './styles/App.css'; // Optional: General app styles

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
