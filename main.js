var viewer = new Cesium.Viewer( 'cesiumContainer' );

if ( typeof( EventSource ) !== 'undefined' ) {
	var stream = new EventSource( 'stream.php' );

	stream.onopen = function( e ) {
		// Remove previous data points (if any) and add all the data
	};

	stream.addEventListener( 'update', function( e ) {
		// We'll update position only once we receive an "update" event
	});

	stream.onmessage = function( e ) { 
		// onmessage is a generic event, only to be used for testing purposes
		var data = JSON.parse( e.data );
		console.log( data );
	};
} else {
	console.log( "I'm sorry. Your browser sucks." );
}
