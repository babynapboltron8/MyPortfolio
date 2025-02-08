## Setting Up an Interactive Contact Form

To make your contact form interactive and able to receive messages, follow these steps:

### Step 1: Initialize Your Node.js Project

1. Open your terminal and navigate to your project directory.
2. Run the following command to initialize a new Node.js project:
   ```bash
   npm init -y
   ```

### Step 2: Install Required Packages

Install Express, Nodemon, and Nodemailer by running:

```bash
npm install express nodemon nodemailer
```

### Step 3: Create Server File

Create a new file named `server.js` in your project directory and add the following code:

```javascript
// filepath: /c:/Users/Nap/MyPortfolio/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
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
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Step 4: Update `package.json`

Update the `scripts` section in your `package.json` to use Nodemon for development:

```json
// filepath: /c:/Users/Nap/MyPortfolio/package.json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

### Step 5: Update Contact Form Action

Update your HTML file to include the action attribute in the contact form to send a POST request to your server:

```html
<!-- filepath: /c:/Users/Nap/MyPortfolio/index.html -->
<form class="form-1" action="/send" method="post">
  <!-- ...existing code... -->
</form>
<form class="form-2" action="/send" method="post">
  <!-- ...existing code... -->
</form>
```

### Step 6: Run Your Server

Start your server using Nodemon by running:

```bash
npm run dev
```

Your contact form should now be interactive and able to send messages to your email.
