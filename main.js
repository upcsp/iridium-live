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
				0.4116,41.4636,130,
				0.408008,41.4635,381,
				0.403072,41.4643,632,
				0.398158,41.4662,883,
				0.393902,41.4686,1134,
				0.390118,41.471,1385,
				0.386544,41.4736,1636,
				0.383217,41.4764,1887,
				0.380357,41.4795,2138,
				0.378196,41.4826,2389,
				0.376828,41.4855,2640,
				0.376122,41.488,2891,
				0.375974,41.4904,3142,
				0.376601,41.4923,3393,
				0.377789,41.4938,3644,
				0.379252,41.4947,3895,
				0.380822,41.4952,4146,
				0.382472,41.4955,4397,
				0.384296,41.4958,4648,
				0.386203,41.496,4899,
				0.388117,41.4963,5150,
				0.389978,41.4966,5401,
				0.391767,41.4968,5652,
				0.393681,41.497,5903,
				0.395894,41.4971,6154,
				0.398477,41.4971,6405,
				0.401453,41.4971,6656,
				0.404833,41.4971,6907,
				0.408529,41.4971,7158,
				0.412506,41.497,7409,
				0.416725,41.4968,7660,
				0.421139,41.4966,7911,
				0.425635,41.4963,8162,
				0.430156,41.496,8413,
				0.434608,41.4957,8664,
				0.438932,41.4954,8915,
				0.443025,41.495,9166,
				0.446908,41.4948,9417,
				0.450677,41.495,9668,
				0.454319,41.4958,9919,
				0.457542,41.4969,10170,
				0.460264,41.498,10421,
				0.462514,41.4992,10672,
				0.464333,41.5004,10923,
				0.465748,41.5017,11174,
				0.467163,41.503,11425,
				0.468722,41.5043,11676,
				0.470436,41.5058,11927,
				0.472389,41.5071,12178,
				0.4746,41.5084,12429,
				0.477061,41.5095,12680,
				0.479483,41.5104,12931,
				0.481711,41.5112,13182,
				0.483743,41.5118,13433,
				0.485586,41.5121,13684,
				0.487303,41.5124,13935,
				0.488911,41.5124,14186,
				0.490411,41.5124,14437,
				0.491803,41.5122,14688,
				0.493135,41.5118,14939,
				0.494488,41.5113,15190,
				0.495867,41.5107,15441,
				0.497271,41.5099,15692,
				0.498699,41.509,15943,
				0.500153,41.5079,16194,
				0.50162,41.5068,16445,
				0.503098,41.5056,16696,
				0.504584,41.5042,16947,
				0.506079,41.5028,17198,
				0.507583,41.5013,17449,
				0.509095,41.4997,17700,
				0.510615,41.4981,17951,
				0.512144,41.4963,18202,
				0.513692,41.4944,18453,
				0.5153,41.4926,18704,
				0.516973,41.4908,18955,
				0.518709,41.489,19206,
				0.52051,41.4873,19457,
				0.522375,41.4856,19708,
				0.524303,41.4839,19959,
				0.526295,41.4822,20210,
				0.528378,41.4805,20461,
				0.530777,41.4789,20712,
				0.533539,41.4772,20963,
				0.536663,41.4754,21214,
				0.540148,41.4737,21465,
				0.543993,41.4718,21716,
				0.548198,41.47,21967,
				0.552761,41.4681,22218,
				0.557681,41.4662,22469,
				0.562958,41.4643,22720,
				0.56859,41.4624,22971,
				0.574576,41.4604,23222,
				0.580915,41.4583,23473,
				0.587712,41.4563,23724,
				0.595082,41.4543,23975,
				0.603027,41.4523,24226,
				0.611547,41.4503,24477,
				0.620643,41.4483,24728,
				0.630316,41.4463,24979,
				0.638988,41.4443,23795.5,
				0.645089,41.4423,22604.7,
				0.649557,41.4405,21515.9,
				0.652559,41.4388,20512.9,
				0.654597,41.4372,19583.2,
				0.656409,41.4354,18716.8,
				0.658041,41.4337,17905.6,
				0.659611,41.4322,17143.1,
				0.661139,41.431,16423.6,
				0.662614,41.4301,15742.6,
				0.663977,41.4295,15096.2,
				0.665256,41.4292,14481.1,
				0.666713,41.4292,13894.3,
				0.668423,41.4296,13333.3,
				0.670546,41.4304,12796.1,
				0.672885,41.4315,12280.5,
				0.674857,41.4331,11785.1,
				0.676448,41.4348,11308.2,
				0.677817,41.4364,10848.3,
				0.67963,41.438,10401.9,
				0.682131,41.4393,9967.73,
				0.685241,41.4401,9544.88,
				0.688441,41.4401,9132.68,
				0.691875,41.4397,8730.49,
				0.695567,41.4393,8337.73,
				0.699443,41.4388,7953.87,
				0.703372,41.4385,7578.43,
				0.707195,41.4381,7210.97,
				0.710744,41.4378,6851.07,
				0.713808,41.4376,6498.38,
				0.716271,41.4374,6152.53,
				0.718266,41.4375,5813.22,
				0.719999,41.4377,5480.14,
				0.721764,41.438,5153.02,
				0.723478,41.4383,4831.61,
				0.724942,41.4385,4515.66,
				0.72601,41.4387,4204.95,
				0.726727,41.4392,3899.27,
				0.727135,41.4402,3598.42,
				0.727156,41.4418,3302.22,
				0.726618,41.444,3010.5,
				0.725487,41.4465,2723.09,
				0.723697,41.4493,2439.83,
				0.721227,41.4522,2160.59,
				0.718177,41.455,1885.23,
				0.714698,41.4576,1613.61,
				0.710902,41.4601,1345.61,
				0.706723,41.4624,1081.12,
				0.702092,41.4643,820.017,
				0.69733,41.4655,562.205,
				0.693258,41.4659,307.58,
				0.6902,41.466,56.0464,
				0.689576,41.466,-3.87174					
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
