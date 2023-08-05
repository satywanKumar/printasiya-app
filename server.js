const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'www')));

// Serve JavaScript files with the correct MIME type
app.get('*.js', (req, res, next) => {
  res.type('text/javascript');
  next();
});

// Route for handling all other requests and serving 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
