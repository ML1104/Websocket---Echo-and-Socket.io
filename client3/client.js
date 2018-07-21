var socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('error', function(message) {
	console.log('Wow guy, there was an error.');
	console.log('Heres the message:', message);
});

function connect() {
	socket.addEventListener('open', function(message) {
		console.log('Open now!!');
		console.log('Heres the message:', message);
		
		setTimeout(function() {
			sendMessage();
		}, 3000);
	
	});
}

socket.addEventListener('close', function(message) {
	console.log('Socket is closed now.');
	console.log('Heres the message:', message);
});

socket.addEventListener('message', function(message) {
	console.log('A NEW MESSAGE!!');
	console.log('Heres the message:', message);
});

function sendMessage() {
	console.log('SENDING MESSAGE...');
	socket.send("Hello earthlings!");
}