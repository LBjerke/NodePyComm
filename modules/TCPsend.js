var net = require('net')
var client = new net.Socket();
module.exports.TCPrs = function(socket,IP){

client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});
var i = 0;
client.on('data', function(data) {
	console.log('Received: ' + data);
	i++;
	if(i==1){
		client.destroy();
	}
	// kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
};
