const nodemailer = require('nodemailer');
require('dotenv').config();

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASS,
  },
});

// Verify it is running
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

module.exports = contactEmail;
