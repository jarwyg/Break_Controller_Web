<?php
if( isset($_POST["get_data_from_log_file"]) && !empty($_POST["get_data_from_log_file"]) ){

	$log_file_path = $log_folder_path.str_replace("/", "", $_POST["get_data_from_log_file"]);

	if( file_exists($log_file_path) ){
		echo json_encode( array("status" => "OK", "content" => file_get_contents($log_file_path) ) );
	}else{
		echo json_encode( array("status" => "Error") );
	}
	die();
}
?>
