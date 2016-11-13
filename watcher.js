var fs = require('fs');
fs.watchFile('test.csv', function(eventType, filename) {
	// if (eventType == 'change') {
		console.log("File changed");
	// }
});
