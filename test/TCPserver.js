var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
	//socket.write('close');
});

server.listen(1337, '127.0.0.1');
