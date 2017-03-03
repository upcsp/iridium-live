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
				0.0712,41.555,100,
				0.0784347,41.5539,466,
				0.08708,41.5525,832,
				0.09636,41.5506,1198,
				0.105465,41.5481,1564,
				0.113352,41.5455,1930,
				0.120503,41.5434,2296,
				0.127449,41.5414,2662,
				0.134372,41.5393,3028,
				0.14153,41.5375,3394,
				0.149325,41.5357,3760,
				0.158314,41.5339,4126,
				0.1691,41.5322,4492,
				0.18207,41.5305,4858,
				0.197222,41.5289,5224,
				0.214027,41.5275,5590,
				0.232002,41.5262,5956,
				0.250746,41.5247,6322,
				0.2699,41.523,6688,
				0.289258,41.5211,7054,
				0.308661,41.5189,7420,
				0.327922,41.5166,7786,
				0.346837,41.5143,8152,
				0.365182,41.5122,8518,
				0.382759,41.5105,8884,
				0.399508,41.5093,9250,
				0.415476,41.5087,9616,
				0.43113,41.5089,9982,
				0.446708,41.5097,10348,
				0.462497,41.5107,10714,
				0.478398,41.5116,11080,
				0.494138,41.5121,11446,
				0.509405,41.5121,11812,
				0.523409,41.5118,12178,
				0.536085,41.5114,12544,
				0.547462,41.5113,12910,
				0.557577,41.5119,13276,
				0.566677,41.5131,13642,
				0.575663,41.5147,14008,
				0.584649,41.5169,14374,
				0.593711,41.5195,14740,
				0.603299,41.522,15106,
				0.613504,41.5243,15472,
				0.624314,41.5264,15838,
				0.635521,41.5282,16204,
				0.646175,41.5297,16570,
				0.656146,41.5307,16936,
				0.665426,41.5314,17302,
				0.674004,41.5318,17668,
				0.681874,41.5317,18034,
				0.689066,41.5313,18400,
				0.695856,41.5309,18766,
				0.702309,41.5303,19132,
				0.708432,41.5296,19498,
				0.714233,41.5289,19864,
				0.719719,41.528,20230,
				0.724957,41.527,20596,
				0.730075,41.5259,20962,
				0.735076,41.5247,21328,
				0.739957,41.5233,21694,
				0.744713,41.5218,22060,
				0.749492,41.5203,21340.5,
				0.754621,41.5192,20350.7,
				0.760282,41.5184,19432.4,
				0.766636,41.5178,18575.9,
				0.773807,41.5176,17773.3,
				0.782497,41.518,17018.4,
				0.792715,41.519,16305.8,
				0.804024,41.5206,15630.9,
				0.814711,41.5228,14990,
				0.824634,41.5255,14379.9,
				0.833958,41.5279,13797.6,
				0.842823,41.5299,13240.8,
				0.852562,41.531,12707.3,
				0.863611,41.5312,12195.3,
				0.876778,41.5311,11703.1,
				0.891947,41.5311,11229.2,
				0.908374,41.5315,10771.8,
				0.925374,41.5324,10327.6,
				0.942355,41.5334,9895.39,
				0.959159,41.5341,9474.39,
				0.976004,41.5345,9063.93,
				0.993166,41.5345,8663.38,
				1.01082,41.5342,8272.16,
				1.02891,41.5338,7889.75,
				1.04729,41.5335,7515.69,
				1.06574,41.5335,7149.54,
				1.08419,41.534,6790.89,
				1.10253,41.5349,6439.38,
				1.12057,41.5359,6094.66,
				1.13801,41.5369,5756.42,
				1.15457,41.5375,5424.37,
				1.16991,41.5377,5098.24,
				1.18365,41.5377,4777.76,
				1.19558,41.5377,4462.71,
				1.20573,41.5378,4152.87,
				1.21446,41.538,3848.02,
				1.22223,41.5382,3547.97,
				1.22948,41.5384,3252.54,
				1.23656,41.5385,2961.56,
				1.24374,41.5382,2674.86,
				1.25117,41.5376,2392.3,
				1.25901,41.5363,2113.73,
				1.26746,41.5345,1839,
				1.27669,41.5325,1568,
				1.28648,41.5307,1300.61,
				1.29625,41.5291,1036.7,
				1.30537,41.5278,776.159,
				1.31304,41.5268,518.892,
				1.31961,41.5259,264.797,
				1.32608,41.525,13.7781,
				1.32634,-41.525,1.18721
			]
		},
        "material" : {
            "polylineOutline" : {
                "color" : {
                    "rgba" : [171, 171, 1, 171]
                },
                "outlineColor" : {
                    "rgba" : [0, 0, 0, 255]
                },
                "outlineWidth" : 2
            }
        },
        "width" : 7
	}
} ];

// Load prediction
var dataSource = Cesium.CzmlDataSource.load( czml );
viewer.dataSources.add( dataSource );
viewer.zoomTo( dataSource );
var box = document.getElementById('controlPanel');
var iridiumTLM;
var pointID = 0;
var points = [];
if ( typeof EventSource !== 'undefined' ) {
	// Connect to the stream. This will fail if no data has been pushed to the DB. Reload the page!
	var stream = new EventSource( 'stream.php' );
	console.log('stream',stream)
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
		points.push(position);
		pointID++;
		entities.add( {
			id       : data.id,
			position : position,
			label    : {
				text      : 'ID: ' + pointID,
				eyeOffset : offset,
				font      : '15px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.TRANSPARENT,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		} );
		// entities.add({
		//     name : 'Balloons path',
		//     polyline : {
  //       		positions : points,
		//         width : 3,
  //               material : new Cesium.PolylineOutlineMaterialProperty({
		//             color : Cesium.Color.BLUE,
		//             outlineWidth : 1,
		//             outlineColor : Cesium.Color.BLACK
		//         })
		//     }
		// });
		var node1 = document.createTextNode (' ID: '+pointID);
		var node2 = document.createTextNode (', TIME: '+data.time);
		var node3 = document.createTextNode (', LAT: '+data.latitude);
		var node4 = document.createTextNode (', LON: '+data.longitude);
		var node5 = document.createTextNode (', ALT: '+data.altitude);
		iridiumTLM = [node1, node2, node3, node4, node5];
		iridiumTLM.forEach(function(entry) {
    		box.appendChild(entry);
    		// box.insertAdjacentHTML('beforeend', '<br>');
		});
		box.insertAdjacentHTML('beforeend', '<br> <br>');
		box.scrollTop = box.scrollHeight;
	} );

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log( "UPDATE" );
		var data = JSON.parse( e.data );
		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		points.push(position);
		pointID++;
		var entity = entities.add( {
			position : position,
			model    : { uri : './assets/balloon.glb' },
			label    : {
				text      : 'ID: ' + pointID,
				eyeOffset : offset,
				font      : '15px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.RED,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		} );
                var node1 = document.createTextNode (' ID: '+pointID);
                var node2 = document.createTextNode (', TIME: '+data.time);
                var node3 = document.createTextNode (', LAT: '+data.latitude);
                var node4 = document.createTextNode (', LON: '+data.longitude);
                var node5 = document.createTextNode (', ALT: '+data.altitude);
                iridiumTLM = [node1, node2, node3, node4, node5];
                
		iridiumTLM.forEach(function(entry) {
    		box.appendChild(entry);
    		// box.insertAdjacentHTML('beforeend', '<br>');
		});
		box.insertAdjacentHTML('beforeend', '<br>');
		box.scrollTop = box.scrollHeight;
		//console.log(points)
		viewer.flyTo( entity );
		// adds a polyline between points
		// entities.add({
		//     name : 'Balloons path',
		//     polyline : {
  //       		positions : points,
		//         width : 3,
  //               material : new Cesium.PolylineOutlineMaterialProperty({
		//             color : Cesium.Color.BLUE,
		//             outlineWidth : 1,
		//             outlineColor : Cesium.Color.BLACK
		//         })
		//     }
		// });
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
