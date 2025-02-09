const express = require('express');
const app = express();
require('dotenv').config();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/send', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: 'napboltron@outlook.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${req.body.fname}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  };

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});
