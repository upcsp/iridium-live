var viewer = new Cesium.Viewer('cesiumContainer');
<<<<<<< HEAD

var connection = new WebSocket('ws://localhost:3030');

connection.onmessage = function (evt) { 
  var received_msg = evt.data;
  alert("Message is received...");
  console.log(evt.data):
};
		

var position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, 0);
var heading = Cesium.Math.toRadians(45.0);
var pitch = Cesium.Math.toRadians(15.0);
var roll = Cesium.Math.toRadians(0.0);
var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, heading, pitch, roll);

var entity = viewer.entities.add({
    position : position,
	orientation : orientation,
    model : {
        uri : './assets/balloon_finalv4.glb'
    }
});
viewer.trackedEntity = entity;
=======
>>>>>>> e6e40a67ee8b626542a4f4be41270d8c1d80b4ae
