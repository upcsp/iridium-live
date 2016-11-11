var fs = require('fs');
fs.watch('test.csv', function(eventType, filename) {
	if (eventType == 'change')	{
		console.log("File changed");
	}
});
