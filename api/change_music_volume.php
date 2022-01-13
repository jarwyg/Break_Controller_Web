<?php
if( isset($_POST['change_music_volume']) ){

	$value = intval($_POST['change_music_volume'], 10);
	
	if($value >= 0 && $value <= 100){
		save_value_to_config_file($controller_config_file_path, "volume_music", $value);
		header("Content-Type: application/json");
		echo json_encode( array("status" => "OK") );
	}else{
		header("Content-Type: application/json");
		echo json_encode( array("status" => "Error") );
	}
	die();
}
?>
