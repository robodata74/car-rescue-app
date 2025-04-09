// This function receives the metric data and logs it to the console
const reportWebVitals = (metric) => {
    console.log(metric); // You can also send this data to an analytics endpoint
  };
  
  // For logging to console in development (optional):
  if (process.env.NODE_ENV === 'development') {
    reportWebVitals(console.log);
  }
  
  export default reportWebVitals;
  