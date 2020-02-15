const http = require('http');
var express = require('express');

const hostname = '127.0.0.1';
const port = 3030;

var app = express();

var server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });