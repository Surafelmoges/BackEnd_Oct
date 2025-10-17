// const http = require('http');
// //const randomNumberResult = require('./randomNumber');
// const fs = require('fs');
// const path = require('path');




// const server = http.createServer((req, res) => {


// const aboutResultPage = fs.readFileSync(
//   path.join(__dirname, 'static/apple-html-css-replica/about.html'),
//   'utf-8'
// );
        

// fs.readFile(aboutResultPage, (err, content) => {
//     if (err) {
//       // If file not found, serve notfound.html
//       const notFoundFile = path.join(__dirname, 'NodeServerProject', 'notfound.html');
//       fs.readFile(notFoundFile, (err404, notFoundContent) => {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end(notFoundContent);
//       });
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     }
//   });
// });
// console.log('Hello')

// if(req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(aboutResultPage);
// }
// else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>404 Page Not Found</h1>');
// }
// server.listen(1244, () => {
//   console.log('Server running on port 1244...')
// })



const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const basePath = path.join(__dirname, 'static/apple-html-css-replica');

const server = http.createServer((req, res) => {
  let requestedFile = req.url;
  if (requestedFile === '/' || requestedFile === '/index') {
    requestedFile = 'index.html';
  } else {
    requestedFile = requestedFile.slice(1); // remove leading slash
  }

  const filePath = path.join(basePath, requestedFile);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      const notFoundPath = path.join(__dirname, 'NodeServerProject', 'notfound.html');
      fs.readFile(notFoundPath, (err404, notFoundContent) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFoundContent || '<h1>404 Page Not Found</h1>');
      });
    } else {
      const contentType = mime.lookup(filePath) || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(1244, () => {
  console.log('Server running on port 1244...');
});
