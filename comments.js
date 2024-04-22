// Create web server that listens on port 3000
// When a request is made to the root of the server, send a file called index.html
// When a request is made to the /comments path, send the contents of the comments.json file

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  console.log('Request received:', req.url);
  if (req.url === '/comments') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        res.statusCode = 500;
        res.end();
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    }
    );
  }
  else {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        res.statusCode = 500;
        res.end();
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
    );
  }
}
).listen(3000, () => {
  console.log('Server listening on port 3000');
}
);

// Create web server that listens on port 3000