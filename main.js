// We should get a Bing Maps key for Cesium to stop messing up the console (https://www.bingmapsportal.com/)
var viewer = new Cesium.Viewer( 'cesiumContainer' );

// Cesium constants
var heading = Cesium.Math.toRadians(45.0);
var pitch   = Cesium.Math.toRadians(15.0);
var roll    = Cesium.Math.toRadians(0.0);

if ( typeof( EventSource ) !== 'undefined' ) {
	var stream = new EventSource( 'stream.php' );

	stream.onopen = function( e ) {
		// Remove previous data points (if any)
	};

	stream.addEventListener( 'start', function( e ) {
		// Add all previous data points
		console.log("START");
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		viewer.entities.add({
			position    : position,
			orientation : Cesium.Transforms.headingPitchRollQuaternion( position, heading, pitch, roll ),
			model       : { uri : './assets/balloon.glb' }
		});
	});

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log("UPDATE");
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		var entity = viewer.entities.add({
			position    : position,
			orientation : Cesium.Transforms.headingPitchRollQuaternion( position, heading, pitch, roll ),
			model       : { uri : './assets/balloon.glb' }
		});
		viewer.trackedEntity = entity;
	});

	stream.onmessage = function( e ) { 
		// onmessage is a generic event, only to be used for testing purposes
		console.log("ONMESSAGE");
		var data = JSON.parse( e.data );
		console.log( data );
	};
} else {
	console.log( "I'm sorry. Your browser sucks." );
}
