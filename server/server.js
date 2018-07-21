const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });


server.on('connection', function(client) {
	console.log('a new client is here!');

	client.on('close', function(ws) {
		console.log('User has left. :(');
	});


	client.on('message', function(message) {
		console.log('heres a message from client:', message);
	
		client.send(message);

	});
});