<?php

// Will get data from Iridium $_POST (will need to check origin). This is just a test.

require_once 'connect.php';

foreach ($_POST as $key => $value) {
	// $$key = $value;
	echo "$key is $value" . PHP_EOL;
}

$query = "INSERT INTO final_test ( transmit_time, GPS_lat, GPS_long, GPS_h ) VALUES ( :transmit_time, :GPS_lat, :GPS_long, :GPS_h )";
$statement = $connection->prepare( $query );

// $statement->bindParam( ':mysql_id', $_POST['mysql_id'] );
$statement->bindParam( ':transmit_time', $_POST['transmit_time'] );
$statement->bindParam( ':GPS_lat', $_POST['GPS_lat'] );
$statement->bindParam( ':GPS_long', $_POST['GPS_long'] );
$statement->bindParam( ':GPS_h', $_POST['GPS_h'] );

$statement->execute();
