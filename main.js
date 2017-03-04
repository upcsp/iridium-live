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
				0.0783879,41.554,437,
				0.0869351,41.5525,774,
				0.0960756,41.5504,1111,
				0.105089,41.5473,1448,
				0.113468,41.5433,1785,
				0.121531,41.5392,2122,
				0.12956,41.5356,2459,
				0.137596,41.5326,2796,
				0.145533,41.53,3133,
				0.153356,41.5278,3470,
				0.16134,41.5261,3807,
				0.169977,41.5246,4144,
				0.179619,41.5233,4481,
				0.19037,41.5222,4818,
				0.202041,41.5215,5155,
				0.214315,41.521,5492,
				0.227074,41.5208,5829,
				0.240317,41.5207,6166,
				0.25412,41.5206,6503,
				0.268622,41.5202,6840,
				0.283938,41.5196,7177,
				0.299962,41.5187,7514,
				0.316502,41.5176,7851,
				0.333326,41.5165,8188,
				0.35016,41.5154,8525,
				0.36664,41.5145,8862,
				0.38269,41.5138,9199,
				0.398303,41.5133,9536,
				0.41364,41.513,9873,
				0.428781,41.5129,10210,
				0.443764,41.513,10547,
				0.458587,41.5132,10884,
				0.47305,41.5134,11221,
				0.487079,41.5135,11558,
				0.500407,41.5135,11895,
				0.512794,41.5137,12232,
				0.524256,41.514,12569,
				0.534991,41.5148,12906,
				0.545057,41.516,13243,
				0.554576,41.5177,13580,
				0.564162,41.5197,13917,
				0.573931,41.522,14254,
				0.583895,41.5245,14591,
				0.594138,41.527,14928,
				0.604712,41.5293,15265,
				0.615602,41.5313,15602,
				0.626789,41.533,15939,
				0.63793,41.5344,16276,
				0.648415,41.5356,16613,
				0.658227,41.5364,16950,
				0.667362,41.5371,17287,
				0.675816,41.5374,17624,
				0.683584,41.5375,17961,
				0.690673,41.5374,18298,
				0.697399,41.5371,18635,
				0.703923,41.5368,18972,
				0.710253,41.5363,19309,
				0.716396,41.5357,19646,
				0.722361,41.535,19983,
				0.728153,41.5342,20320,
				0.733763,41.5333,20657,
				0.739179,41.5323,20994,
				0.744396,41.5311,21331,
				0.749411,41.5297,21668,
				0.754223,41.5282,22005,
				0.758828,41.5266,22342,
				0.763225,41.5248,22679,
				0.767411,41.5229,22925.6,
				0.771909,41.5212,21810.2,
				0.777082,41.5199,20784.7,
				0.782856,41.5191,19835.6,
				0.789031,41.5186,18952.5,
				0.795554,41.5184,18126.6,
				0.803242,41.5186,17351.1,
				0.812512,41.5192,16620.1,
				0.823273,41.5203,15928.8,
				0.834493,41.5218,15273.2,
				0.845571,41.524,14649.6,
				0.856331,41.5265,14055.2,
				0.866489,41.5289,13487.2,
				0.876446,41.5309,12943.6,
				0.886775,41.5323,12422.2,
				0.897978,41.5331,11921.3,
				0.91054,41.5336,11439.3,
				0.924283,41.5338,10975,
				0.939067,41.5341,10525.1,
				0.95454,41.5343,10087.6,
				0.970527,41.5347,9661.66,
				0.986884,41.5352,9246.56,
				1.00353,41.536,8841.64,
				1.02032,41.5369,8446.3,
				1.03707,41.538,8060.01,
				1.05353,41.5392,7682.27,
				1.06922,41.5407,7312.62,
				1.08419,41.5422,6950.66,
				1.09859,41.5436,6595.99,
				1.11262,41.5449,6248.27,
				1.12644,41.546,5907.17,
				1.14003,41.5468,5572.38,
				1.1533,41.5475,5243.63,
				1.16595,41.548,4920.65,
				1.17763,41.5483,4603.2,
				1.18806,41.5485,4291.05,
				1.19728,41.5485,3983.99,
				1.20557,41.5483,3681.81,
				1.21325,41.5478,3384.33,
				1.22062,41.5468,3091.38,
				1.22788,41.5454,2802.78,
				1.23517,41.5435,2518.39,
				1.24261,41.5413,2238.04,
				1.25041,41.5388,1961.61,
				1.25896,41.5362,1688.96,
				1.26828,41.5338,1419.96,
				1.27785,41.5319,1154.5,
				1.28707,41.5302,892.468,
				1.29518,41.5289,633.749,
				1.30178,41.5279,378.245,
				1.30797,41.5269,125.859,
				1.31105,41.5264,4.17975
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
