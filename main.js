// Bing Maps key
Cesium.BingMapsApi.defaultKey = 'ApKfIOfep6WHK-SDGcIoh6dMje5KZUpEJD0QG63cc16_XsJXO6nhDx-FNZwqp8ab';

// Home: Catalunya
var extent = Cesium.Rectangle.fromDegrees( -0.1, 40.8, 4.5, 42.5 );
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

// Label Offset
var offset = new Cesium.Cartesian3( 25, 25, 0 );

// Widget config
var viewer = new Cesium.Viewer( 'cesiumContainer', {
	animation                              : false,
	timeline                               : false,
	infoBox                                : false,
	navigationInstructionsInitiallyVisible : false,
	geocoder                               : false
} );

// Finally
var entities = viewer.entities;

// Prediction data
var czml = [ {
	"id"      : "document",
	"name"    : "CZML Prediction Polyline",
	"version" : "1.0"
}, {
	"id"       : "prediction",
	"polyline" : {
		"positions" : {
			"cartographicDegrees" : [
				0.410865,41.469,100,
				0.407644,41.4689,351,
				0.402599,41.4695,602,
				0.39717,41.471,853,
				0.392754,41.473,1104,
				0.389194,41.4749,1355,
				0.385956,41.4768,1606,
				0.382752,41.4789,1857,
				0.379539,41.4812,2108,
				0.376416,41.4839,2359,
				0.373598,41.487,2610,
				0.371378,41.4902,2861,
				0.370059,41.4932,3112,
				0.369654,41.4961,3363,
				0.369972,41.4986,3614,
				0.370794,41.5008,3865,
				0.371914,41.5024,4116,
				0.373178,41.5036,4367,
				0.374658,41.5046,4618,
				0.376379,41.5054,4869,
				0.378342,41.506,5120,
				0.380535,41.5064,5371,
				0.382904,41.5067,5622,
				0.385423,41.5068,5873,
				0.388072,41.5067,6124,
				0.390854,41.5067,6375,
				0.393786,41.5065,6626,
				0.396905,41.5064,6877,
				0.400424,41.5064,7128,
				0.404451,41.5066,7379,
				0.408963,41.5072,7630,
				0.41393,41.5081,7881,
				0.419244,41.5094,8132,
				0.424844,41.5111,8383,
				0.430582,41.513,8634,
				0.43644,41.5152,8885,
				0.442384,41.5176,9136,
				0.448332,41.5201,9387,
				0.453893,41.5223,9638,
				0.459007,41.5244,9889,
				0.463608,41.5262,10140,
				0.467672,41.5279,10391,
				0.471118,41.5296,10642,
				0.473813,41.5312,10893,
				0.475768,41.5328,11144,
				0.477451,41.5343,11395,
				0.47906,41.5359,11646,
				0.480614,41.5375,11897,
				0.482332,41.5389,12148,
				0.484276,41.5398,12399,
				0.486443,41.5405,12650,
				0.488597,41.541,12901,
				0.490577,41.5414,13152,
				0.492386,41.5417,13403,
				0.494032,41.542,13654,
				0.495619,41.5422,13905,
				0.497187,41.5422,14156,
				0.498735,41.5422,14407,
				0.500266,41.542,14658,
				0.501807,41.5418,14909,
				0.503426,41.5414,15160,
				0.505127,41.5408,15411,
				0.50691,41.5402,15662,
				0.508776,41.5394,15913,
				0.510722,41.5385,16164,
				0.512691,41.5375,16415,
				0.514658,41.5365,16666,
				0.516621,41.5353,16917,
				0.518581,41.5342,17168,
				0.520537,41.5329,17419,
				0.52249,41.5316,17670,
				0.524438,41.5302,17921,
				0.526383,41.5288,18172,
				0.528335,41.5273,18423,
				0.530365,41.5257,18674,
				0.532484,41.5242,18925,
				0.534692,41.5227,19176,
				0.536989,41.5212,19427,
				0.539375,41.5197,19678,
				0.54185,41.5182,19929,
				0.544413,41.5166,20180,
				0.547077,41.5151,20431,
				0.55001,41.5136,20682,
				0.553263,41.5119,20933,
				0.556836,41.5103,21184,
				0.560728,41.5086,21435,
				0.564938,41.5069,21686,
				0.569466,41.5051,21937,
				0.574311,41.5032,22188,
				0.579472,41.5014,22439,
				0.584948,41.4994,22690,
				0.590739,41.4975,22941,
				0.596843,41.4955,23192,
				0.60326,41.4934,23443,
				0.610105,41.4914,23694,
				0.617575,41.4893,23945,
				0.625674,41.4873,24196,
				0.634403,41.4853,24447,
				0.643762,41.4834,24698,
				0.653752,41.4814,24949,
				0.663061,41.4795,23946.3,
				0.669558,41.4775,22742,
				0.674516,41.4757,21641.8,
				0.678159,41.474,20629.3,
				0.680812,41.4725,19691.3,
				0.683123,41.471,18817.8,
				0.685168,41.4695,18000.4,
				0.687175,41.4682,17232.3,
				0.689198,41.4672,16507.9,
				0.691213,41.4663,15822.5,
				0.693037,41.4657,15172.2,
				0.69465,41.4655,14553.4,
				0.69623,41.4656,13963.3,
				0.697841,41.4659,13399.4,
				0.699572,41.4665,12859.4,
				0.70137,41.4672,12341.4,
				0.702915,41.4686,11843.6,
				0.704334,41.4703,11364.5,
				0.705936,41.472,10902.7,
				0.708695,41.4737,10454.9,
				0.712837,41.4755,10019.3,
				0.718223,41.4777,9595.08,
				0.724041,41.4799,9181.64,
				0.729747,41.482,8778.28,
				0.735097,41.4836,8384.42,
				0.740034,41.4848,7999.51,
				0.744438,41.4854,7623.09,
				0.74827,41.4854,7254.69,
				0.751535,41.4852,6893.9,
				0.754336,41.485,6540.36,
				0.756843,41.4849,6193.71,
				0.759094,41.4849,5853.63,
				0.761129,41.4851,5519.82,
				0.762966,41.4854,5192,
				0.764546,41.4859,4869.91,
				0.765838,41.4866,4553.32,
				0.766849,41.4876,4241.99,
				0.767607,41.4891,3935.72,
				0.768026,41.491,3634.3,
				0.767752,41.4933,3337.55,
				0.766478,41.496,3045.3,
				0.764313,41.499,2757.38,
				0.761663,41.502,2473.64,
				0.758785,41.505,2193.92,
				0.755664,41.5076,1918.1,
				0.752254,41.51,1646.03,
				0.748539,41.5121,1377.61,
				0.744432,41.5139,1112.7,
				0.739794,41.5154,851.196,
				0.734957,41.5163,592.994,
				0.730974,41.5167,337.992,
				0.728049,41.5168,86.0921,
				0.727137,41.5169,-3.84994					
			]
		}
	}
} ];

// Load prediction
var dataSource = Cesium.CzmlDataSource.load( czml );
viewer.dataSources.add( dataSource );
viewer.zoomTo( dataSource );

if ( typeof EventSource !== 'undefined' ) {
	// Connect to the stream. Thhis will fail if no data has been pushed to the DB. Reload the page!
	var stream = new EventSource( 'stream.php' );

	stream.onopen = function( e ) {
		// Remove previous data points (if any)
		entities.removeAll();

		console.log( "ONOPEN" );
		console.log( e );
	};

	stream.addEventListener( 'start', function( e ) {
		// Add all previous data points
		console.log( "START" );
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		entities.add( {
			id       : data.id,
			position : position,
			label    : {
				text      : data.time + ' ' + data.latitude + ' ' + data.longitude + ' ' + data.altitude,
				eyeOffset : offset,
				font      : '20px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.TRANSPARENT,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			},
		} );
	} );

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log( "UPDATE" );
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		var entity = entities.add( {
			position : position,
			model    : { uri : './assets/balloon.glb' },
			label    : {
				text      : data.time + ' ' + data.latitude + ' ' + data.longitude + ' ' + data.altitude,
				eyeOffset : offset,
				font      : '20px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.RED,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		} );
		viewer.flyTo( entity );

		if ( entities.values.length > 1 ) {
			var prevEntity = entities.values[ entities.values.length - 2 ];
			// console.log( prevEntity );
			if ( typeof prevEntity.model !== 'undefined' ) {
				prevEntity.model.show = false;
				prevEntity.point.color = Cesium.Color.TRANSPARENT;
			}			
		}
	} );

	stream.onmessage = function( e ) { 
		// "message" is a generic event, only to be used for testing purposes
		console.log( "ONMESSAGE" );
		var data = JSON.parse( e.data );
		console.log( data );
	};

	stream.onerror = function( e ) {
		console.log( "ONERROR" );
		console.log( e );
	};
} else {
	console.log( "I'm sorry. Your browser sucks." );
}

// User position
if ( 'geolocation' in navigator ) {
	navigator.geolocation.watchPosition( function( pos ) {
		console.log( "NEW USER GEOLOCATION" );
		console.log( pos );
		var position = Cesium.Cartesian3.fromDegrees( pos.coords.longitude, pos.coords.latitude, 0 );

		var user = entities.getById( 'user' );
		if ( typeof user !== 'undefined' ) {
			user.position = position;
		} else {
			entities.add( {
				id       : 'user',
				position : position,
				point    : {
					pixelSize    : 5,
					color        : Cesium.Color.BLUE,
					outlineColor : Cesium.Color.WHITE,
					outlineWidth : 2.5
				}
			});
		}
	} );
} else {
	console.log( "I'm sorry. No geolocation for you." );
}
