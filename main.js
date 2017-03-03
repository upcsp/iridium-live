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
				41.555,0.0712,100,
				41.5539,0.0784347,466,
				41.5525,0.08708,832,
				41.5506,0.09636,1198,
				41.5481,0.105465,1564,
				41.5455,0.113352,1930,
				41.5434,0.120503,2296,
				41.5414,0.127449,2662,
				41.5393,0.134372,3028,
				41.5375,0.14153,3394,
				41.5357,0.149325,3760,
				41.5339,0.158314,4126,
				41.5322,0.1691,4492,
				41.5305,0.18207,4858,
				41.5289,0.197222,5224,
				41.5275,0.214027,5590,
				41.5262,0.232002,5956,
				41.5247,0.250746,6322,
				41.523,0.2699,6688,
				41.5211,0.289258,7054,
				41.5189,0.308661,7420,
				41.5166,0.327922,7786,
				41.5143,0.346837,8152,
				41.5122,0.365182,8518,
				41.5105,0.382759,8884,
				41.5093,0.399508,9250,
				41.5087,0.415476,9616,
				41.5089,0.43113,9982,
				41.5097,0.446708,10348,
				41.5107,0.462497,10714,
				41.5116,0.478398,11080,
				41.5121,0.494138,11446,
				41.5121,0.509405,11812,
				41.5118,0.523409,12178,
				41.5114,0.536085,12544,
				41.5113,0.547462,12910,
				41.5119,0.557577,13276,
				41.5131,0.566677,13642,
				41.5147,0.575663,14008,
				41.5169,0.584649,14374,
				41.5195,0.593711,14740,
				41.522,0.603299,15106,
				41.5243,0.613504,15472,
				41.5264,0.624314,15838,
				41.5282,0.635521,16204,
				41.5297,0.646175,16570,
				41.5307,0.656146,16936,
				41.5314,0.665426,17302,
				41.5318,0.674004,17668,
				41.5317,0.681874,18034,
				41.5313,0.689066,18400,
				41.5309,0.695856,18766,
				41.5303,0.702309,19132,
				41.5296,0.708432,19498,
				41.5289,0.714233,19864,
				41.528,0.719719,20230,
				41.527,0.724957,20596,
				41.5259,0.730075,20962,
				41.5247,0.735076,21328,
				41.5233,0.739957,21694,
				41.5218,0.744713,22060,
				41.5203,0.749492,21340.5,
				41.5192,0.754621,20350.7,
				41.5184,0.760282,19432.4,
				41.5178,0.766636,18575.9,
				41.5176,0.773807,17773.3,
				41.518,0.782497,17018.4,
				41.519,0.792715,16305.8,
				41.5206,0.804024,15630.9,
				41.5228,0.814711,14990,
				41.5255,0.824634,14379.9,
				41.5279,0.833958,13797.6,
				41.5299,0.842823,13240.8,
				41.531,0.852562,12707.3,
				41.5312,0.863611,12195.3,
				41.5311,0.876778,11703.1,
				41.5311,0.891947,11229.2,
				41.5315,0.908374,10771.8,
				41.5324,0.925374,10327.6,
				41.5334,0.942355,9895.39,
				41.5341,0.959159,9474.39,
				41.5345,0.976004,9063.93,
				41.5345,0.993166,8663.38,
				41.5342,1.01082,8272.16,
				41.5338,1.02891,7889.75,
				41.5335,1.04729,7515.69,
				41.5335,1.06574,7149.54,
				41.534,1.08419,6790.89,
				41.5349,1.10253,6439.38,
				41.5359,1.12057,6094.66,
				41.5369,1.13801,5756.42,
				41.5375,1.15457,5424.37,
				41.5377,1.16991,5098.24,
				41.5377,1.18365,4777.76,
				41.5377,1.19558,4462.71,
				41.5378,1.20573,4152.87,
				41.538,1.21446,3848.02,
				41.5382,1.22223,3547.97,
				41.5384,1.22948,3252.54,
				41.5385,1.23656,2961.56,
				41.5382,1.24374,2674.86,
				41.5376,1.25117,2392.3,
				41.5363,1.25901,2113.73,
				41.5345,1.26746,1839,
				41.5325,1.27669,1568,
				41.5307,1.28648,1300.61,
				41.5291,1.29625,1036.7,
				41.5278,1.30537,776.159,
				41.5268,1.31304,518.892,
				41.5259,1.31961,264.797,
				41.525,1.32608,13.7781,
				41.525,1.32634,-1.18721
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
