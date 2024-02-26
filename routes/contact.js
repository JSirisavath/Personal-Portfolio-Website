const express = require('express');
const router = express.Router();
const contactEmail = require('../email_integration/emailServices'); // Email service which would allow users to send me an email

// Make a post request for emailing me - Contact section
router.post('/contact', (req, res) => {
  // Combine users first name and last name
  const name = req.body.firstName + '.' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'Jsirisavath123@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Contact email will  use nodemailer to send the email to me. There is also error handling where an error message will be sent back if it fails, else send a success message
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ message: 'Error sending email', error: error });
    } else {
      console.log('Email sent: ', info.response);
      res
        .status(200)
        .json({ code: 200, status: 'Message Sent', response: info.response });
    }
  });
});

module.exports = router;
