<?php

// Will get data from Iridium $_POST (should check origin)
// print_r( $_POST );

$imei = $_POST['imei'];
$momsn = $_POST['momsn'];
$transmit_time = $_POST['transmit_time'];
$iridium_latitude = $_POST['iridium_latitude'];
$iridium_longitude = $_POST['iridium_longitude'];
$iridium_cep = $_POST['iridium_cep'];

function hex2str( $hex ) {
	$str = '';
	for( $i=0; $i < strlen( $hex ); $i += 2 ) $str .= chr( hexdec( substr( $hex, $i, 2 ) ) );
	return $str;
}

$data = hex2str( $_POST['data'] );
