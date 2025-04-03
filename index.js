require('dotenv').config(); // Load environment variables

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 3010; // Use PORT from .env, fallback to 3010

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
