const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('Server is Working...');

  // Get Requested File Path
  let filePath = req.url;
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Generate full path for requested file
  const requestedFile = path.join(__dirname, 'Server', filePath);

  // Read the requested file
  fs.readFile(requestedFile, (err, content) => {
    if (err) {
      // If file not found, serve notfound.html
      const notFoundFile = path.join(__dirname, 'Server', 'notfound.html');
      fs.readFile(notFoundFile, (err404, notFoundContent) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFoundContent);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 6007;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});