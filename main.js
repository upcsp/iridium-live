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
				0.3589,41.4516,100,
				0.355792,41.4514,351,
				0.351075,41.4518,602,
				0.345957,41.4533,853,
				0.34166,41.4554,1104,
				0.338024,41.4576,1355,
				0.334587,41.4599,1606,
				0.331131,41.4623,1857,
				0.327669,41.4651,2108,
				0.324399,41.4683,2359,
				0.321646,41.4716,2610,
				0.319682,41.4748,2861,
				0.318617,41.4778,3112,
				0.318313,41.4803,3363,
				0.318459,41.4823,3614,
				0.318824,41.4837,3865,
				0.319342,41.4847,4116,
				0.320114,41.4854,4367,
				0.321268,41.4859,4618,
				0.322855,41.4861,4869,
				0.324893,41.486,5120,
				0.327379,41.4856,5371,
				0.330234,41.485,5622,
				0.333353,41.4842,5873,
				0.336626,41.4834,6124,
				0.34003,41.4826,6375,
				0.343603,41.4821,6626,
				0.347435,41.482,6877,
				0.351754,41.4823,7128,
				0.356665,41.483,7379,
				0.362028,41.484,7630,
				0.367789,41.4853,7881,
				0.373837,41.4869,8132,
				0.380157,41.4888,8383,
				0.386725,41.4909,8634,
				0.393561,41.4933,8885,
				0.400729,41.496,9136,
				0.408173,41.4989,9387,
				0.41561,41.5018,9638,
				0.422959,41.5045,9889,
				0.429772,41.5069,10140,
				0.435885,41.5088,10391,
				0.441122,41.5103,10642,
				0.445191,41.5118,10893,
				0.448107,41.5134,11144,
				0.450502,41.5149,11395,
				0.452647,41.5166,11646,
				0.454568,41.5183,11897,
				0.456586,41.5197,12148,
				0.458794,41.5208,12399,
				0.461188,41.5216,12650,
				0.46358,41.5221,12901,
				0.46584,41.5226,13152,
				0.46797,41.5229,13403,
				0.469977,41.5232,13654,
				0.471933,41.5233,13905,
				0.473867,41.5233,14156,
				0.475779,41.5232,14407,
				0.477671,41.523,14658,
				0.479566,41.5227,14909,
				0.481524,41.5223,15160,
				0.483547,41.5217,15411,
				0.485636,41.5211,15662,
				0.48779,41.5202,15913,
				0.490009,41.5193,16164,
				0.492233,41.5183,16415,
				0.494434,41.5172,16666,
				0.496611,41.5161,16917,
				0.498765,41.5149,17168,
				0.500894,41.5136,17419,
				0.502999,41.5123,17670,
				0.505078,41.5109,17921,
				0.507132,41.5094,18172,
				0.509175,41.5079,18423,
				0.51129,41.5064,18674,
				0.513491,41.5049,18925,
				0.515779,41.5035,19176,
				0.518153,41.502,19427,
				0.520614,41.5007,19678,
				0.523161,41.4993,19929,
				0.525796,41.4979,20180,
				0.528532,41.4966,20431,
				0.531545,41.4952,20682,
				0.534893,41.4938,20933,
				0.538574,41.4924,21184,
				0.542587,41.4909,21435,
				0.546932,41.4894,21686,
				0.551607,41.4878,21937,
				0.556611,41.4862,22188,
				0.561945,41.4845,22439,
				0.567606,41.4828,22690,
				0.573593,41.4811,22941,
				0.579907,41.4793,23192,
				0.586545,41.4775,23443,
				0.593617,41.4757,23694,
				0.60131,41.4738,23945,
				0.609626,41.472,24196,
				0.618567,41.4701,24447,
				0.628132,41.4683,24698,
				0.638322,41.4665,24949,
				0.647838,41.4647,23946.3,
				0.654554,41.4629,22742,
				0.659687,41.4613,21641.8,
				0.663462,41.4598,20629.3,
				0.666216,41.4584,19691.3,
				0.668623,41.457,18817.8,
				0.670765,41.4556,18000.4,
				0.67292,41.4543,17232.3,
				0.675155,41.4532,16507.9,
				0.67744,41.4523,15822.5,
				0.679587,41.4517,15172.2,
				0.681572,41.4514,14553.4,
				0.683546,41.4514,13963.3,
				0.685561,41.4518,13399.4,
				0.687663,41.4523,12859.4,
				0.689801,41.4531,12341.4,
				0.691715,41.4545,11843.6,
				0.69363,41.4563,11364.5,
				0.696001,41.4579,10902.7,
				0.700138,41.4593,10454.9,
				0.706093,41.4612,10019.3,
				0.713307,41.4638,9595.08,
				0.720345,41.4663,9181.64,
				0.726905,41.4685,8778.28,
				0.732963,41.4702,8384.42,
				0.738559,41.4713,7999.51,
				0.743643,41.4719,7623.09,
				0.748138,41.4721,7254.69,
				0.751944,41.4719,6893.9,
				0.755129,41.4714,6540.36,
				0.757922,41.4706,6193.71,
				0.76035,41.4698,5853.63,
				0.762422,41.469,5519.82,
				0.764107,41.4684,5192,
				0.765459,41.4683,4869.91,
				0.766499,41.4685,4553.32,
				0.767205,41.4692,4241.99,
				0.767598,41.4702,3935.72,
				0.767727,41.4717,3634.3,
				0.767444,41.4736,3337.55,
				0.766396,41.4761,3045.3,
				0.764452,41.4791,2757.38,
				0.761893,41.4823,2473.64,
				0.759004,41.4855,2193.92,
				0.755861,41.4884,1918.1,
				0.752473,41.4911,1646.03,
				0.748793,41.4934,1377.61,
				0.744747,41.4953,1112.7,
				0.740235,41.4968,851.196,
				0.735521,41.4977,592.994,
				0.731605,41.498,337.992,
				0.7287,41.498,86.0921,
				0.727793,41.498,-3.84994
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
