// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, Jenkins Pipeline!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server; // untuk testing
