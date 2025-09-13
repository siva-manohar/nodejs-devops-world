const express = require('express');
const app = express();
const port = 3000;

// Serve a simple styled message
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #282c34;
            color: white;
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            font-size: 3rem;
            color: #61dafb;
          }
          p {
            font-size: 1.5rem;
            color: #f1f1f1;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the DevOps World</h1>
        <p>This is a simple Node.js app with Docker deployment!</p>
      </body>
    </html>
  `);
});

// Listen on all IP addresses (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://localhost:${port}`);
});
