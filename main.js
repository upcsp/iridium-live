var viewer = new Cesium.Viewer( 'cesiumContainer' );

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
	});

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log("UPDATE");
		var data = JSON.parse( e.data );
		console.log( data );
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
