
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
TCPsender.TCPrs(1337,'127.0.0.1');
