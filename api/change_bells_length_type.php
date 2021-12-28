<?php
if( isset($_POST['change_bells_length_type']) ){

	$value = intval($_POST['change_bells_length_type'], 10);
	
	if($value == 0){
		save_value_to_config_file($controller_config_file_path, "przerwy", "krotkie");
	}else if($value == 1){
		save_value_to_config_file($controller_config_file_path, "przerwy", "dlugie");
	}
	
	header("Content-Type: application/json");
	echo json_encode( array("status" => "OK", "msg" => $value) );
	
	die();
}
?>
