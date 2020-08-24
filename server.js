//dependencies
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

//file serving
const app = express();
app.use(express.static('${__dirname}/client'));
const server = http.createServer(app);
const io = socketio(server);

//providing feedback on connection
io.on('connection', (socket) => {
    socket.emit('message', 'Connection has been established.');
});

//error logging
server.on('error', (err) => {
    console.log('Server error: ', err);
});

//listener
server.listen(8080, () => {
    console.log('Server started on 8080');
});
