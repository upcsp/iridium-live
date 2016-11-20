<?php

// Will get data from Iridium $_POST. This is just a test using $_GET.

require_once 'connect.php';

foreach ($_GET as $key => $value) {
	$$key = $value;
	// echo "$key is $value\n";
}

$query = "INSERT INTO test_flight ( id, latitude, longitude, altitude ) VALUES ( :id, :latitude, :longitude, :altitude )";
$statement = $connection->prepare( $query );

$statement->bindParam( ':id', $id );
$statement->bindParam( ':latitude', $latitude );
$statement->bindParam( ':longitude', $longitude );
$statement->bindParam( ':altitude', $altitude );

$statement->execute();
