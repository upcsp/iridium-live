<?php

// Will get data from Iridium $_POST (will need to check origin). This is just a test.

require_once 'connect.php';

foreach ($_POST as $key => $value) {
	$$key = $value;
	echo "$key is $value" . PHP_EOL;
}

$query = "INSERT INTO test_flight ( id, latitude, longitude, altitude ) VALUES ( :id, :latitude, :longitude, :altitude )";
$statement = $connection->prepare( $query );

$statement->bindParam( ':id', $id );
$statement->bindParam( ':latitude', $latitude );
$statement->bindParam( ':longitude', $longitude );
$statement->bindParam( ':altitude', $altitude );

$statement->execute();
