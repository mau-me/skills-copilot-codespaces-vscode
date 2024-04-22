// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route for comments
app.get('/', (req, res) => {
  res.send("Olá, mundo!");
});

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});