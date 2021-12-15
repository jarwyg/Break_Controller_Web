<?php
if( isset($_POST['change_weekday_state']) && !empty($_POST['change_weekday_state']) && isset($_POST['value']) && !empty($_POST['value']) ){

	$week_sday_number = intval($_POST['change_weekday_state'], 10);

	$config_file_array = config_file_to_array($controller_config_file_path);
	
	$week_days_array = explode(";", $config_file_array["weekdays"]);
	
	if($_POST['value'] == 'false'){
		$week_days_array[$week_sday_number-1] = 0;
	}else if($_POST['value'] == 'true'){
		$week_days_array[$week_sday_number-1] = 1;
	}
	
	$to_save = "";
	foreach($week_days_array as $week_days_array_val){
		$to_save .= $week_days_array_val.";";
		
	}
	
	$to_save = trim($to_save, ";");
	
	save_value_to_config_file($controller_config_file_path, "weekdays", $to_save);
	
	
	header("Content-Type: application/json");
	echo json_encode( array("status" => "OK") );
	
	die();
}
?>
