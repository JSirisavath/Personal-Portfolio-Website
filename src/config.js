// Configuration for development or production environments. For URLs, I define a base URL for the API based on the changes of either environment.

export const getAPIBaseURL = () => {
  console.log(process.env.NODE_ENV); // Should log 'development' if you're local

  let baseURL;
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    // dev
    baseURL = 'http://localhost:8080';
  } else {
    // Prod
    baseURL = 'https://personal-web-portfolio-js.uc.r.appspot.com';
  }
  // console.log(`Base URL is: ${baseURL}`); // This will log the base URL
  return baseURL;
};
