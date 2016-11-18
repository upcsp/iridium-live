from socketIO_client import SocketIO, LoggingNamespace

def emit_results(results):
    '''
    Emits the data we have in results over a websocket.
    This is an example of a single record / entity in CZML
    '''

    czml = {"id":"document","version":"1.0"},{'id': results['cttn'], 'position': {'cartographicDegrees': [results['longitude'], results['latitude'], results['altitude']]}, 'point': {'pixelSize': 3, "color": {"rgba": [0, 0, 255, 255]},'outlineWidth': 0}} 

    # emit the data on a websocket event called 'czml-test' in the namespace of 'test' 
    socket_io.emit('czml-test', {'data':json.dumps(czml)}, namespace='/test')



