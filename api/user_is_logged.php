<?php
if( isset($_POST["user_is_logged"]) ){
	if( isset($_SESSION['login']) ){
		echo json_encode( array("logged" => true) );
		die();
	}else{
		echo json_encode( array("logged" => false) );
	}
	die();
}
?>
