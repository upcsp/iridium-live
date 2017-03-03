<?php

$config = parse_ini_file( '../../private/iridium/config.ini' );
if ( ! $config ) die( "Config access error" );

try {
	$connection = new PDO( 'mysql:host=' . $config['server'] . ';dbname=' . $config['database'],  $config['user'], $config['password'], array( PDO::ATTR_PERSISTENT => true ) );
} catch ( PDOException $e ) {
	die( "DB connection error: " . $e->getMessage() );
}
