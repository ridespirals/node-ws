var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:4080');

ws.on('open', function open() {
	ws.send('something');
});

ws.on('message', function(data, flags) {
	console.log(data);
});

ws.on('close', function() {
	ws.send('bye');
});