<?php



function save_value_to_config_file($file_name, $value_name, $value){
    $file_content = file($file_name);
    for ($i=0 ; $i < count($file_content) ; $i++){
        $file_line = explode('=', $file_content[$i]);
        if ($file_line[0]==$value_name){
            $file_content[$i]=$value_name.'='.$value."\n";
        }
    }
    
    $file_handle = fopen($file_name,'w');
    fwrite($file_handle,join('',$file_content));
    fclose($file_handle);
}


//take config file and convert into array
function config_file_to_array($file_name){

	$file_handle = fopen($file_name,'r');
	
	$data_from_file_array = array();
	
	while(!feof($file_handle)){
		$file_line = trim(fgets($file_handle));
		
		if( !empty($file_line) ){
			$file_line_array = explode('=',$file_line);
			$data_from_file_array[$file_line_array[0]] = $file_line_array[1];
		}
	}
	fclose($file_handle);
	
	return $data_from_file_array;
}

function radio_file_to_array($file_name){
	
	$file_handle = fopen($file_name,'r');
	
	$data_from_file_array = array();
	
	while(!feof($file_handle)){
		$file_line = trim(fgets($file_handle));
		
		
		if( !empty($file_line) ){
			$file_line_array = explode('=',$file_line);
			$radio_obj = new stdClass();
			$radio_obj->radio_name = $file_line_array[0];
			$radio_obj->radio_url = $file_line_array[1];
			
			array_push($data_from_file_array, $radio_obj);
			
		}
	}
	fclose($file_handle);
	
	return $data_from_file_array;
	
}

function music_file_to_array($file_name){
	
	$file_handle = fopen($file_name,'r');
	
	$data_from_file_array = array();
	
	while(!feof($file_handle)){
		$file_line = trim(fgets($file_handle));
		
		
		if( !empty($file_line) ){
			$file_line_array = explode('=',$file_line);
			$music_obj = new stdClass();
			
			$music_godz = explode(":", $file_line_array[0]);
				
			$music_obj->music_start = $music_godz[0].":".$music_godz[1];
			$music_obj->music_stop = $music_godz[2].":".$music_godz[3];
		
			$music_obj->music_name = $file_line_array[1];
			
			array_push($data_from_file_array, $music_obj);
			
		}
	}
	fclose($file_handle);
	
	return $data_from_file_array;
	
}



if(isset($_GET["get_data_from_files"])){

	$out_object = new stdClass();	
	
	$config_file_array = config_file_to_array($controller_config_file_path);

	$out_object->state = $config_file_array['state'];
	$out_object->przerwy = $config_file_array['przerwy'];
	
	$out_object->volume = $config_file_array['volume'];
	$out_object->volume_music = $config_file_array['volume_music'];
	$out_object->music = $config_file_array['music'];
	$out_object->radio = $config_file_array['radio'];
	$out_object->com_port = $config_file_array['com_port'];

	$realy = explode(";", $config_file_array["relay"]);
	$realy_mode = $realy[0];
	$realy_enable_time = $realy[1];
	$realy_disable_time = $realy[2];
	
	$out_object->realy_mode = $realy_mode;
	$out_object->realy_enable_time = $realy_enable_time;
	$out_object->realy_disable_time = $realy_disable_time;

	$dni_tygodnia = array("Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela");
	
	$week_days_array = explode(";", $config_file_array["weekdays"]);
	$week_days_array_2 = array();
	
	$wekday_number = 1;
	foreach(array_combine($dni_tygodnia,$week_days_array)  as $dni_tygodnia_val => $dni_tygodnia_status ){
		$weekday_object = new stdClass();
		$weekday_object->status = $dni_tygodnia_status;
		$weekday_object->name = $dni_tygodnia_val;
		$weekday_object->number = $wekday_number++;
		
		
		array_push($week_days_array_2, $weekday_object);
		
	}
	
	$out_object->week_days_array = $week_days_array_2;


	$krotkie_array = explode(";", $config_file_array["krotkie"]);
	//unset($krotkie_array[0]);//delete first element
	array_shift($krotkie_array);
	//$out_object->krotkie = (array)$krotkie_array;
	
	$out_object->krotkie = array();
	for($i = 0 ; $i < sizeof($krotkie_array) ; $i+=2 ){
		$one_element = array();
		$one_element[0] = $krotkie_array[0+$i];
		if(isset($krotkie_array[1+$i])){
			$one_element[1] = $krotkie_array[1+$i];
		}
		array_push($out_object->krotkie, $one_element);
	}
	
	
	$dlugie_array = explode(";", $config_file_array["dlugie"]);
	//unset($dlugie_array[0]);//delete first element
	array_shift($dlugie_array);
	//$out_object->dlugie = (array)$dlugie_array;
	$out_object->dlugie = array();
	for($i = 0 ; $i < sizeof($dlugie_array) ; $i+=2 ){
		$one_element = array();
		$one_element[0] = $dlugie_array[0+$i];
		if(isset($dlugie_array[1+$i])){
			$one_element[1] = $dlugie_array[1+$i];
		}
		array_push($out_object->dlugie, $one_element);
	}


	$out_object->bell_files = array();
	
	for($k = 1 ; $k <= 7 ; $k++){
		$one_object = new stdClass();
		$one_object->day_name = $dni_tygodnia[$k-1];
		$one_object->filename = false;
		
		if(file_exists($bells_folder_path."0".$k.".wav")){
			$one_object->filename = "0".$k.".wav";
		}
		array_push($out_object->bell_files, $one_object);
	}


	$music_file_array = music_file_to_array($music_config_file_path);
	$out_object->music_file = $music_file_array;
	
	
	$radio_file_array = radio_file_to_array($radio_config_file_path);
	$out_object->radio_file = $radio_file_array;



	header("Content-Type: application/json");
	//echo json_encode($config_file_array);
	echo json_encode($out_object);



	die();
}
?>
