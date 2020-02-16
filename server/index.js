const http = require('http');
var express = require('express');
var socketio = require('socket.io');
const { addUser, removeUser, getUser, getNicknameUsers,getUsers } = require('./user');
const cors = require('cors');


const port = 3030;

var app = express();
var server = http.createServer(app);
const io = socketio(server);

app.use(cors({ credentials: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function (socket) {
  socket.on('get nicknames', function () {
    socket.emit('get nicknames', getNicknameUsers());

  });

  socket.on('add nickname', function ({ nickname }) {
    
    addUser({ id: socket.id, nickname });
    socket.emit('get nicknames', getNicknameUsers());

  });
  socket.on('send message', function ({ message, time }) {
    const user = getUser(socket.id)
  
    socket.broadcast.emit('message', { nickname: user.nickname, message, time });

    

  });
});

server.listen(port, () => {
  console.log(`Server running...`);
});