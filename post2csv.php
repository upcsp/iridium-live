<?php

require 'reference.php';

// Open (or create) file to write data
$filename = "./" . $reference . "-data.csv";

// Chek if file exists
if ( file_exists( $filename ) ) {
	$file = fopen( $filename, "a" );
} else {
	$file = fopen( $filename, "a" );
	fwrite( $file, "HTTP_UTC,momsn,lat,long,h_GPS,T_BMP,h_BMP\n" );
}

// Check if file has been correctly opened
if ( ! $file ) {
	die( "Error opening new file" );
}

// HTTP time zone
date_default_timezone_set("UTC");
$httpUTC = date("Y-m-d H:i:s", time());

// Iridium variables
$momsn = $_POST['momsn'];
$lat   = $_POST['lat'];
$long  = $_POST['long'];
$h_GPS = $_POST['h_GPS'];
$T_BMP = $_POST['T_BMP'];
$h_BMP = $_POST['h_BMP'];

// Write file
fwrite( $file, $httpUTC . "," . $momsn . "," . $lat . "," . $long . "," . $h_GPS . "," . $T_BMP . "," . $h_BMP . "\n" );
fclose( $file );
