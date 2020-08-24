const http = require('http');
const express = require('express');
const clientPath = '${__dirname}/client';

const app = express();

app.use(express.static(clientPath));

const server = http.createServer(app);

server.on('error', (err) => {
    console.log('Server error: ', err);
});

server.listen(8080, () => {
    console.log('Server started on 8080');
});
