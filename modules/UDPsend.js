const dgram = require('dgram');
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');

module.exports.UDPsend = function(socket,IPreceiver,msg){
client.send(msg, socket, IPreceiver, (err) => {
  console.log('sent the following message: ' + msg + ' on port: ' + socket + ' to the following IP: ' + IPreceiver);
  client.close();
});

};
