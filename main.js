Cesium.BingMapsApi.defaultKey = 'ApKfIOfep6WHK-SDGcIoh6dMje5KZUpEJD0QG63cc16_XsJXO6nhDx-FNZwqp8ab'; // Bing Maps

var extent = Cesium.Rectangle.fromDegrees( -0.1, 40.8, 4.5, 42.5 ); // Catalunya
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

var viewer = new Cesium.Viewer( 'cesiumContainer', { animation : false, infoBox : false, timeline : false } );

if ( typeof( EventSource ) !== 'undefined' ) {
	var stream = new EventSource( 'stream.php' );

	stream.onopen = function( e ) {
		// Remove previous data points (if any)
		viewer.entities.removeAll();
	};

	stream.addEventListener( 'start', function( e ) {
		// Add all previous data points
		console.log("START");
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		viewer.entities.add({
			position : position,
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.TRANSPARENT,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		});
	});

	window.setTimeout( function() {
		// viewer.trackedEntity = viewer.entities.values[ viewer.entities.values.length - 1 ];
		viewer.zoomTo( viewer.entities.values );
	}, 500 );

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log("UPDATE");
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		var entity = viewer.entities.add({
			position : position,
			model    : { uri : './assets/balloon.glb' },
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.TRANSPARENT,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		});
		viewer.flyTo( entity );

		var prevEntity = viewer.entities.values[ viewer.entities.values.length - 2 ];
		if ( prevEntity.model !== 'undefined' ) prevEntity.model.show = false;
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
