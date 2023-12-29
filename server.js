const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = process.env.PORT || 3001;

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Jsirisavath123@gmail.com',
    pass: process.env.APP_PASS,
  },
});

// Verify it is running
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
    console.log(process.env); // This will print all the loaded environment variables
  }
});

// Make a post request
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

  // Send back the error
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
