// create web server
const express = require('express');
const app = express();
const port = 3000;

// import the comments module
const comments = require('./comments.js');

// create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Path: comments.js
// create an array of comments
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'soooo funny' },
  { username: 'QueenOfCats', comment: 'rofl' }
];

// export the comments array
module.exports = comments;
