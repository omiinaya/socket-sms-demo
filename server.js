//dependencies
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

//file serving
const app = express();

const clientPath = "${__dirname}/../client";
app.use(express.static(clientPath));

const server = http.createServer(app);
const io = socketio(server);

//providing feedback on connection
io.on('connection', (socket) => {
    console.log("Someone connected");
    socket.emit('message', 'Connection has been established.');
});

//error logging
server.on('error', (err) => {
    console.log('Server error: ', err);
});

//listener
server.listen(3000, () => {
    console.log('Server started on 3000');
});
