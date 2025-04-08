import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    setFormSubmitted(true);
    // Handle the form submission, e.g., send data to API
    console.log(data);
  };

  return (
    <div>
      <h2>Car Rescue Booking</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Car Registration Number</label>
          <input 
            type="text" 
            {...register("carRegistration", { required: "Car registration number is required" })}
          />
          {errors.carRegistration && <p>{errors.carRegistration.message}</p>}
        </div>

        <div>
          <label>Car Type</label>
          <input 
            type="text" 
            {...register("carType", { required: "Car type is required" })}
          />
          {errors.carType && <p>{errors.carType.message}</p>}
        </div>

        <div>
          <label>Car Weight</label>
          <input 
            type="number" 
            {...register("carWeight", { required: "Car weight is required", min: 1 })}
          />
          {errors.carWeight && <p>{errors.carWeight.message}</p>}
        </div>

        <div>
          <label>Pickup Location</label>
          <input 
            type="text" 
            {...register("pickupLocation", { required: "Pickup location is required" })}
          />
          {errors.pickupLocation && <p>{errors.pickupLocation.message}</p>}
        </div>

        <div>
          <label>Delivery Location</label>
          <input 
            type="text" 
            {...register("deliveryLocation", { required: "Delivery location is required" })}
          />
          {errors.deliveryLocation && <p>{errors.deliveryLocation.message}</p>}
        </div>

        <div>
          <label>Your Name</label>
          <input 
            type="text" 
            {...register("userName", { required: "Your name is required" })}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>

        <div>
          <label>Your Phone Number</label>
          <input 
            type="tel" 
            {...register("userPhone", { required: "Your phone number is required" })}
          />
          {errors.userPhone && <p>{errors.userPhone.message}</p>}
        </div>

        {/* Add your payment link confirmation */}
        <div>
          <p>Payment of KES 1,500 is required to complete the booking.</p>
          <a href="https://paystack.com/pay/hire-a-flatbed" target="_blank" rel="noopener noreferrer">
            Pay Now
          </a>
        </div>

        <button type="submit">Complete Booking</button>
      </form>

      {formSubmitted && <p>Booking submitted successfully!</p>}
    </div>
  );
};

export default BookingForm;
