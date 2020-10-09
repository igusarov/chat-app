const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', data => {
    console.log('hey', data);
    io.emit('message', data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
