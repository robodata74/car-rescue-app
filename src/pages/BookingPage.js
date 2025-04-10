// src/pages/BookingPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../styles/BookingPage.css'; // your custom styles

const BookingPage = () => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log('Booking Data:', data);
    // axios.post(...) will go here later
  };

  return (
    <div className="booking-wrapper">
      <h2 className="form-title">{t('booking_title')}</h2>
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>{t('pickup_location')}</label>
          <input {...register('pickup')} placeholder={t('pickup_placeholder')} required />
        </section>

        <section>
          <label>{t('destination_location')}</label>
          <input {...register('destination')} placeholder={t('destination_placeholder')} required />
        </section>

        <section>
          <label>{t('vehicle_reg')}</label>
          <input {...register('vehicleReg')} placeholder={t('vehicle_reg_placeholder')} required />
        </section>

        <button className="submit-button" type="submit">
          {t('confirm_booking')}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
