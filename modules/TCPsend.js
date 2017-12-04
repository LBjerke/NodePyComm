var net = require('net')
var client = new net.Socket();
module.exports.TCPsend = function(socket,IP, msg){

client.connect(socket, IP, function() {
	console.log('Connected');
	client.write(msg);
});
var i = 0;
client.on('data', function(data) {
	console.log('Received: ' + data);
	//this is for testing purposes
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
