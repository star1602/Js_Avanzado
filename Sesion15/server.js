const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const nombre = 'Estrella';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Estrella Pena Medina');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}`);
  console.log(
    `${nombre} está administrando este servidor`
  );
});