<?php
	
	//localhost/IRIDIUM/3_irdm/irdmPOST-v1.php?imei=300234010753370&momsn=12345&data=34312e35363235304e2c322e3032313430452c3330392e392c30382c312c31382e34382c3336342e34342c3130352e3736&transmit_time=12-10-10+10:41:50&iridium_latitude=52.3867&iridium_longitude=0.2938&iridium_cep=8

$refName = "irdmPOST-v1";
	
	function hex2str($hex) {
	    $str = '';
	    for($i=0;$i<strlen($hex);$i+=2) $str .= chr(hexdec(substr($hex,$i,2)));
	    return $str;
	}
	
	# Open (or create) file to write data
		$filename = "./".$refName."-data.csv";
		$file = fopen( $filename, "a" );
		
		# Check if file has been correctly opened
		if( $file == false ) {
	    	echo ( "Error opening new file." );
			exit();
		}

	# HTTP time zone
		date_default_timezone_set("UTC");
	
	# Variables
		$httpUTC            = date("Y-m-d H:i:s", time());

		$imei 				= $_REQUEST['imei'];
		$momsn 				= $_REQUEST['momsn'];
		$transmit_time 		= $_REQUEST['transmit_time'];
		$iridium_latitude 	= $_REQUEST['iridium_latitude'];
		$iridium_longitude 	= $_REQUEST['iridium_longitude'];
		$iridium_cep 		= $_REQUEST['iridium_cep'];
		$data 				= $_REQUEST['data'];

		$data_ASCII         = hex2str($data);
	
	# Print on browser
		echo "HTTP UTC: "				. $httpUTC 						."<br />";
		echo "IMEI: "                   . $_REQUEST['imei'] 			."<br />";
		echo "Message Sequence Number: ". $_REQUEST['momsn']			."<br />";
		echo "Transmit Time: "          . $_REQUEST['transmit_time']	."<br />";
		echo "iridium_latitude: "       . $_REQUEST['iridium_latitude']	."<br />";
		echo "iridium_longitude: "      . $_REQUEST['iridium_longitude']."<br />";
		echo "iridium_cep: "          	. $_REQUEST['iridium_cep']		."<br />";
		echo "Message (hex-encoded): "  . $_REQUEST['data'] 			."<br />";
		echo "Message (ascii-encoded): ". $data_ASCII   				."<br />";

	# Write file
		fwrite( $file,
			$httpUTC.",".
			$imei.",".
			$momsn.",".
			$transmit_time.",".
			$iridium_latitude.",".
			$iridium_longitude.",".
			$iridium_cep.",".
			$data.",".
			$data_ASCII.
			"\n" );
	
	fclose( $file );

?>