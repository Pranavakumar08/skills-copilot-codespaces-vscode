// Create web server
const express = require('express');
const app = express();

// Import the comments data
const comments = require('./comments.json');

// Use the express.static() method to serve static files
app.use(express.static('public'));

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Server listening on http://localhost:4001/');
});