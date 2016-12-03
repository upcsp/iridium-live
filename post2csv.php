<?php

require 'post.php';
$reference = parse_ini_file( '../../private/iridium/reference.ini' )['name'];

// Open (or create) file to write data
$filename = "./" . $reference . "-data.csv";

// Chek if file exists
if ( file_exists( $filename ) ) {
	$file = fopen( $filename, "a" );
} else {
	$file = fopen( $filename, "a" );
	fwrite( $file, "HTTP_UTC,momsn,transmit_time,iridium_latitude,iridium_longitude,iridium_cep,GPS_long,GPS_lat,GPS_h,T_int,T_ext,Alt_BMP,Sat_gps,State\n" );
}

// Check if file has been correctly opened
if ( ! $file ) {
	die( "Error opening new file" );
}

// HTTP time zone
date_default_timezone_set("UTC");
$httpUTC = date("Y-m-d H:i:s", time());

// Write file
fwrite( $file, $httpUTC . "," . $momsn . "," . $transmit_time . "," . $iridium_latitude . "," . $iridium_longitude . "," . $iridium_cep . "," . $data . "\n" );
fclose( $file );
