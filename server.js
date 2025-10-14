const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server is Working...')

  //res.end('Hello from AddisGebeya!')
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from AddisGebeya!</h1>')
  if(req.url === '/about') {
    res.write('<h2>About Us</h2>')
  }
  else if(req.url === '/contact') {
    res.write('<h2>Contact Us</h2>')
  }
  res.end();


}) 

server.listen(4000)