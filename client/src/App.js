import React, { useRef } from 'react';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import './App.css';
import logo from './assets/logo.png';

const App = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: -1.2921,
    lng: 36.8219,
  };

  const pickupRef = useRef(null);
  const destinationRef = useRef(null);

  const onPlaceChanged = (type) => {
    const place = type === 'pickup' ? pickupRef.current.getPlace() : destinationRef.current.getPlace();
    if (place) {
      console.log(`${type} location:`, place.formatted_address);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <div className="header-section">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>

        {/* Booking Form */}
        <div className="form-container">
          <h2>Car Rescue Booking Form</h2>

          <h3>Location Details</h3>
          <label>Pickup Location:</label>
          <Autocomplete onLoad={(ref) => (pickupRef.current = ref)} onPlaceChanged={() => onPlaceChanged('pickup')}>
            <input type="text" className="location-input" placeholder="Enter pickup location" />
          </Autocomplete>

          <label>Destination Location:</label>
          <Autocomplete onLoad={(ref) => (destinationRef.current = ref)} onPlaceChanged={() => onPlaceChanged('destination')}>
            <input type="text" className="location-input" placeholder="Enter destination location" />
          </Autocomplete>

          <h3>Vehicle Details</h3>
          <label>Car Type:</label>
          <input type="text" />

          <label>Colour:</label>
          <input type="text" />

          <label>Engine Capacity (cc):</label>
          <input type="number" />

          <label>Body Type:</label>
          <input type="text" />

          <label>VIN:</label>
          <input type="text" />

          <label>Weight (kg):</label>
          <input type="number" />

          <label>Registration Number:</label>
          <input type="text" />

          <label>Number of Occupants:</label>
          <input type="number" max="10" />

          <h3>Reason for Requesting Service</h3>
          <textarea placeholder="Explain the issue or reason for rescue..." rows="4" />

          <h3>Requesting Person Details</h3>
          <label>Full Name:</label>
          <input type="text" />

          <label>ID/Passport Number:</label>
          <input type="text" />

          <label>Phone Number:</label>
          <input type="tel" />

          <label>Email Address:</label>
          <input type="email" />

          <h3>Person(s) in Rescue Vehicle Details</h3>
          {[1, 2, 3, 4].map((pax) => (
            <div key={pax} className="pax-group">
              <h4>Person {pax}</h4>
              <label>Name:</label>
              <input type="text" className="pax-input" />
              <label>Age:</label>
              <input type="number" className="pax-input" />
              <label>Mobile Number:</label>
              <input type="tel" className="pax-input" />
            </div>
          ))}

          <button type="submit">Book Service</button>
        </div>
      </LoadScript>
    </div>
  );
};

export default App;
