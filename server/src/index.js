const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server is running');
});

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
