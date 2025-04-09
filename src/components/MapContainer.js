import React from 'react';
import '../styles/MapContainer.css';  // Correct relative path
// MapContainer component to display the map
const MapContainer = () => {
  return (
    <div className="map-container">
      {/* Optional title */}
      <div className="map-title">
        Our Location
      </div>

      {/* Google Map embedded iframe */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991219844!2d-74.259865!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3a623bce91%3A0xfdd7d5e734487e66!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1618407476408!5m2!1sen!2sus" 
        title="Google Maps" 
        className="map-iframe" 
      ></iframe>

      {/* Optional caption or description */}
      <div className="map-caption">
        Find our service location and get directions directly from here.
      </div>
    </div>
  );
};

export default MapContainer;
