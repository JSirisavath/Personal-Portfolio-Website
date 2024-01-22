// Configuration for development or production environments. For URLs, I define a base URL for the API based on the changes of either environment.

export const getAPIBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    // Development server URL
    return 'http://localhost:8080';
  }
  // Production
  return '';
};
