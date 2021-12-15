<?php
if( isset($_POST['change_on_off_status']) ){

	$value = intval($_POST['change_on_off_status'], 10);
	
	if($value == 0){
		save_value_to_config_file($controller_config_file_path, "state", "off");
	}else if($value == 1){
		save_value_to_config_file($controller_config_file_path, "state", "on");
	}
	
	header("Content-Type: application/json");
	echo json_encode( array("status" => "OK", "msg" => $value) );
	
	die();
}
?>
