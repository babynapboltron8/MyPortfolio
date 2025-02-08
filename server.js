const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

// Ensure dotenv is installed
try {
  require('dotenv').config();
} catch (error) {
  console.error('Error loading dotenv:', error);
  process.exit(1);
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the Index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully!');
  });
});

app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(
        `Port ${port} is already in use. Please use a different port.`
      );
    } else {
      console.error('Server error:', err);
    }
  });
