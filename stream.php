<?php

header( 'Content-Type: text/event-stream' );
header( 'Cache-Control: no-cache' );

require_once 'connect.php';

// Send all previous data points for the "onopen" event

// We'll be using PHP_EOL instead of \n for multi-arch compatibility

$id = 0; // should be last sent when fullyimplemented

while ( true ) {
	// Send "update" event when we have new data

	$query = "SELECT * FROM test_flight WHERE id = ( SELECT MAX( ID ) FROM test_flight )";
	$statement = $connection->query( $query );
	$row = $statement->fetch( PDO::FETCH_ASSOC );

	if ( $row['id'] > $id ) {
		echo 'id: ' . $row['id'] . PHP_EOL;
		// echo 'event: update' . PHP_EOL;
		echo 'data: { "id": "' . $row['id'] . '", "latitude": "' . $row['latitude'] . '", "longitude": "' . $row['longitude'] . '", "altitude": "' . $row['altitude'] . '" }' . PHP_EOL;
		echo PHP_EOL; // \n\n necessary for Server-Sent Events

		ob_flush();
		flush();

		$id = $row['id'];
	}

	sleep( 1 ); // chill the server
}
