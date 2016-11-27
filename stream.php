<?php

header( 'Content-Type: text/event-stream' );
header( 'Cache-Control: no-cache' );

require_once 'connect.php';

// We'll be using PHP_EOL instead of \n for multi-arch compatibility

// When a new client connects, get all the previous data points
$query = "SELECT * FROM final_test";
$statement = $connection->query( $query );
$rows = $statement->fetchAll( PDO::FETCH_ASSOC );

foreach( $rows as $row ) {
	// Send all previous data points as the "start" event
	echo 'id: ' . $row['mysql_id'] . PHP_EOL;
	echo 'event: start' . PHP_EOL;
	echo 'data: { "id": "' . $row['mysql_id'] . '", "time": "' . $row['transmit_time'] . '", "latitude": "' . $row['GPS_lat'] . '", "longitude": "' . $row['GPS_long'] . '", "altitude": "' . $row['GPS_h'] . '" }' . PHP_EOL;
	echo PHP_EOL; // \n\n necessary for Server-Sent Events

	ob_flush();
	flush();
}

$id = count( $rows ); // last message sent

while ( true ) {
	// Check if we have a new data point
	$query = "SELECT MAX( mysql_id ) FROM final_test";
	$statement = $connection->query( $query );
	$row = $statement->fetch( PDO::FETCH_ASSOC );

	if ( $row['MAX( mysql_id )'] > $id ) {
		// Send "update" event when we have new data
		$query = "SELECT * FROM final_test WHERE mysql_id = :mysql_id";
		$statement = $connection->prepare( $query );

		$statement->bindParam( ':mysql_id', $row['MAX( mysql_id )'] );
		$statement->execute();

		$row = $statement->fetch( PDO::FETCH_ASSOC );

		echo 'id: ' . $row['mysql_id'] . PHP_EOL;
		echo 'event: update' . PHP_EOL;
		echo 'data: { "id": "' . $row['mysql_id'] . '", "time": "' . $row['transmit_time'] . '", "latitude": "' . $row['GPS_lat'] . '", "longitude": "' . $row['GPS_long'] . '", "altitude": "' . $row['GPS_h'] . '" }' . PHP_EOL;
		echo PHP_EOL; // \n\n necessary for Server-Sent Events

		ob_flush();
		flush();

		$id = $row['mysql_id'];
	}

	sleep( 1 ); // chill the server
}
