<?php

// Will get data from Iridium $_POST (should check origin)

require_once 'connect.php';
$reference = parse_ini_file( 'reference.ini' )['name'];

foreach ($_POST as $key => $value) {
	// $$key = $value;
	echo "$key is $value" . PHP_EOL;
}

// Will trust the user with no prepared statement
$query = "SHOW TABLES LIKE '" . $reference . "'";
$statement = $connection->query( $query );

// Check if table exists
if ( $statement->rowCount() == 0 ) {
	try {
		$query = "CREATE TABLE IF NOT EXISTS `" . $reference . "` ( `mysql_id` int( 11 ) unsigned NOT NULL AUTO_INCREMENT, `transmit_time` varchar( 17 ) DEFAULT NULL, `GPS_lat` decimal( 7,4 ) DEFAULT NULL, `GPS_long` decimal( 7,4 ) DEFAULT NULL, `GPS_h` int( 11 ) DEFAULT NULL, PRIMARY KEY ( `mysql_id` ) ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
		$connection->exec( $query );
	} catch ( PDOException $e ) {
		die( "DB table creation error: " . $e->getMessage() );
	}
}

$query = "INSERT INTO " . $reference . " ( transmit_time, GPS_lat, GPS_long, GPS_h ) VALUES ( :transmit_time, :GPS_lat, :GPS_long, :GPS_h )";
$statement = $connection->prepare( $query );

// $statement->bindParam( ':mysql_id', $_POST['mysql_id'] );
$statement->bindParam( ':transmit_time', $_POST['transmit_time'] );
$statement->bindParam( ':GPS_lat', $_POST['GPS_lat'] );
$statement->bindParam( ':GPS_long', $_POST['GPS_long'] );
$statement->bindParam( ':GPS_h', $_POST['GPS_h'] );

$statement->execute();
