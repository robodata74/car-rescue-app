// src/pages/BookingPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css'; // Your custom CSS

// Validation schema using Yup
const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  phoneNumber: yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits").required("Phone Number is required"),
  pickupLocation: yup.string().required("Pickup location is required"),
  dropoffLocation: yup.string().required("Dropoff location is required"),
  vehicleRegistration: yup.string().required("Vehicle registration is required"),
  vehicleType: yup.string().required("Vehicle Type is required"),
  vehicleWeight: yup.number().required("Vehicle weight is required").positive("Weight must be positive").integer("Weight must be a whole number"),
}).required();

const BookingPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/terms"); // Navigate to the Terms page after successful form submission
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title">Booking Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
        
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            className={`form-input ${errors.fullName ? "error" : ""}`}
          />
          {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
            className={`form-input ${errors.phoneNumber ? "error" : ""}`}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            {...register("pickupLocation")}
            className={`form-input ${errors.pickupLocation ? "error" : ""}`}
          />
          {errors.pickupLocation && <p className="error-message">{errors.pickupLocation.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="dropoffLocation">Dropoff Location</label>
          <input
            type="text"
            id="dropoffLocation"
            {...register("dropoffLocation")}
            className={`form-input ${errors.dropoffLocation ? "error" : ""}`}
          />
          {errors.dropoffLocation && <p className="error-message">{errors.dropoffLocation.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="vehicleRegistration">Vehicle Registration</label>
          <input
            type="text"
            id="vehicleRegistration"
            {...register("vehicleRegistration")}
            className={`form-input ${errors.vehicleRegistration ? "error" : ""}`}
          />
          {errors.vehicleRegistration && <p className="error-message">{errors.vehicleRegistration.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <input
            type="text"
            id="vehicleType"
            {...register("vehicleType")}
            className={`form-input ${errors.vehicleType ? "error" : ""}`}
          />
          {errors.vehicleType && <p className="error-message">{errors.vehicleType.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="vehicleWeight">Vehicle Weight</label>
          <input
            type="number"
            id="vehicleWeight"
            {...register("vehicleWeight")}
            className={`form-input ${errors.vehicleWeight ? "error" : ""}`}
          />
          {errors.vehicleWeight && <p className="error-message">{errors.vehicleWeight.message}</p>}
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Next: Terms</button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
