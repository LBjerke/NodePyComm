
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
  var spliter = dataString.split(',');
  //for UDP send
  UDPsender.UDPsend(spliter[0],spliter[1],dataString);
  //for TCP send
  TCPsender.TCPrs(spliter[0],spliter[1],dataString);
});

pythonScript.stdin.write(JSON.stringify(data));

pythonScript.stdin.end();
//TCPsender.TCPrs(1337,'127.0.0.1',"hello world");
