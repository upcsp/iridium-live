<?php

require 'post.php';
require_once 'connect.php';
$reference = parse_ini_file( '../../private/iridium/reference.ini' )['name'];

$data = explode( ',', $data );
// print_r( $data );

// Latitude
if ( substr( $data[0], -1 ) == 'N' ) $data[0] = substr( $data[0], 0,  count( $data[0] ) - 2 );
else $data[0] = substr( $data[0], 0,  count( $data[0] ) - 2 ) * -1;

// Longitude
if ( substr( $data[1], -1 ) == 'E' ) $data[1] = substr( $data[1], 0,  count( $data[1] ) - 2 );
else $data[1] = substr( $data[1], 0,  count( $data[1] ) - 2 ) * -1;

// print_r( $data );

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
$statement->bindParam( ':transmit_time', $transmit_time );
$statement->bindParam( ':GPS_lat', $data[0] );
$statement->bindParam( ':GPS_long', $data[1] );
$statement->bindParam( ':GPS_h', $data[2] );

$statement->execute();
