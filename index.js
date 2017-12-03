
var UDPsender = require('./modules/UDPsend');
var TCPsender = require('./modules/TCPsend');
var spawn = require('child_process').spawn;
var pythonScript = spawn('python',['./pythonScripts/test.py']);
var data = [1,2,3,4,5,6,7,8,9];
var dataString = '';

pythonScript.stdout.on('data', function(data){
  dataString += data.toString();
});


pythonScript.stdout.on('end', function(){
  console.log(dataString);
});

pythonScript.stdin.write(JSON.stringify(data));

pythonScript.stdin.end();

var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
