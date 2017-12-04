
var UDPsender = require('./modules/UDPsend');
var TCPsender = require('./modules/TCPsend');
var spawn = require('child_process').spawn;
var pythonScript = spawn('python',['./pythonScripts/test.py']);
var data = [3,2,3,4,5,6,7,8,9];//this is just the data you want to send in to the python script
var dataString = ''; //the data String that is read back

pythonScript.stdout.on('data', function(data){
  dataString += data.toString();
});


pythonScript.stdout.on('end', function(){
  console.log(dataString);
  var spliter = dataString.split(',');
  //for UDP send
  UDPsender.UDPsend(spliter[0],spliter[1],dataString);
  //for TCP send
  TCPsender.TCPsend(spliter[0],spliter[1],dataString);
});
//this is for sending data in to python Script
pythonScript.stdin.write(JSON.stringify(data));

pythonScript.stdin.end();
