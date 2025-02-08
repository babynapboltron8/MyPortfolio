# Contact Form Setup Instructions

Follow these steps to set up and function the contact form using JavaScript, Nodemailer, and Node.js/Express.

## Step 1: Set Up Node.js and Express

1. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

2. Install the required packages:

   ```bash
   npm install express body-parser nodemailer
   ```

3. Create a new file `server.js` in the root directory and add the following code:

   ```javascript
   // filepath: /c:/Users/Nap/MyPortfolio/server.js
   const express = require('express');
   const bodyParser = require('body-parser');
   const nodemailer = require('nodemailer');
   const app = express();
   const port = 3000;

   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   app.post('/send', (req, res) => {
     const { name, email, message } = req.body;

     const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'your-email@gmail.com',
         pass: 'your-email-password',
       },
     });

     const mailOptions = {
       from: email,
       to: 'your-email@gmail.com',
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

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

## Step 2: Update the Contact Form

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

## Step 3: Run the Server

1. Start the server by running the following command in your terminal:

   ```bash
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000` to test the contact form.

## Notes

- Make sure to replace `'your-email@gmail.com'` and `'your-email-password'` with your actual email credentials.
- For security reasons, consider using environment variables to store sensitive information like email credentials.
