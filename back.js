var fs = require('fs');

var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({ port: 3030 });

wss.on('connection', function(ws) {
	console.log("connected");
	fs.watchFile('test.csv', function(eventType, filename) {
		console.log("File changed");
		// ws.send('hello');
		var to_send = JSON.stringify(getCoordinates('test.csv'));
		console.log(to_send);
		ws.send(to_send);
	});
});

function getCoordinates(csv_file) {
	fs.readFile(csv_file, 'utf-8', function(err, data) {
	    if (err) throw err;

	    var lines = data.trim().split('\n');
	    var lastLine = lines.slice(-1)[0];

	    var fields = lastLine.split(',');
	    var latitude = fields[8];
	    console.log(latitude);
	    var longitude = fields[9];
	    console.log(longitude);
	    var altitude = fields[10];
	    console.log(altitude);

	    return [latitude,longitude,altitude];
	});
}
