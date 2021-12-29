<?php
if( isset($_POST['change_radio']) ){

	$value = intval($_POST['change_radio'], 10);
	save_value_to_config_file($controller_config_file_path, "radio", $value);
	
	header("Content-Type: application/json");
	echo json_encode( array("status" => "OK", "msg" => $value) );
	
	die();
}
?>
