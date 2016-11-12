var fs = require('fs');

var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3030');

fs.watch('test.csv', function(eventType, filename) {
	if (eventType == 'change') {
		console.log("File changed");

		ws.on('open', function() {
			ws.send('hello');
		});
	}
});
