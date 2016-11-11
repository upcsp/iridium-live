var viewer = new Cesium.Viewer('cesiumContainer');

var fs = require('fs');
fs.watch('test.csv', function() {
	console.log("File changed");
});
