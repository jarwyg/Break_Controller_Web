<?php
if( isset($_POST['save_new_bells_hours']) && !empty($_POST['save_new_bells_hours']) && is_array($_POST['save_new_bells_hours']) && isset($_POST['type']) && !empty($_POST['type']) ){

	$to_save = "0;";

	$new_bells_array = array();

	
	foreach($_POST['save_new_bells_hours'] as $bells_hours){
		array_push($new_bells_array, strtotime($bells_hours));
	}

	asort($new_bells_array);

	foreach($new_bells_array as $new_bells_array_values){
		$to_save .= date("H:i", $new_bells_array_values).";";
	}
	
	$to_save = trim($to_save, ";");

	if( $_POST['type'] == "krotkie" ){
		save_value_to_config_file($controller_config_file_path, "krotkie", $to_save);
	}else if($_POST['type'] == "dlugie" ){
		save_value_to_config_file($controller_config_file_path, "dlugie", $to_save);
	}
	header("Content-Type: application/json");
	echo json_encode( array("status" => "OK") );
	
	die();
}
?>
