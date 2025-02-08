# Contact Form Setup Instructions

Follow these steps to set up and function the contact form using JavaScript, Nodemailer, and Node.js/Express.

## Step 1: Set Up Node.js and Express

1. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

2. Install the required packages:

   ```bash
   npm install express body-parser nodemailer dotenv
   ```

3. Create a new file `server.js` in the root directory and add the following code:

   ```javascript
   // filepath: /c:/Users/Nap/MyPortfolio/server.js
   const express = require('express');
   const bodyParser = require('body-parser');
   const nodemailer = require('nodemailer');
   const path = require('path');
   require('dotenv').config();
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
   ```

## Step 2: Create Environment Variables

1. Create a `.env` file in the root of your project and add your email and password:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ```

## Step 3: Update the Contact Form

1. Update the contact form in your `Index.html` file to include the `action` and `method` attributes:

   ```html
   <!-- filepath: /c:/Users/Nap/MyPortfolio/Index.html -->
   <!-- ...existing code... -->
   <form class="form-1" action="/send" method="POST">
     <div class="inputGroup">
       <input type="text" name="name" required="required" />
       <label>Your Name</label>
     </div>

     <div class="inputGroup">
       <input type="email" name="email" required="required" />
       <label>Email</label>
     </div>
   </form>

   <!-- ...existing code... -->

   <form class="form-2" action="/send" method="POST">
     <div class="inputGroup">
       <textarea name="message" required="required"></textarea>
       <label>Say Something</label>
     </div>
     <button class="form-button" type="submit">MESSAGE ME</button>
   </form>
   <!-- ...existing code... -->
   ```

## Step 4: Create the Public Directory

1. Create a `public` directory in the root of your project.
2. Move your CSS, JS, and image files to the `public` directory.

## Step 5: Run the Server

1. Start the server by running the following command in your terminal:

   ```bash
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000` to test the contact form.

## Notes

- Make sure to replace `'your-email@gmail.com'` and `'your-email-password'` with your actual email credentials.
- For security reasons, consider using environment variables to store sensitive information like email credentials.
