<?php
session_start();

require_once("config.php");

if (isset($_GET['logout'])){
    unset($_SESSION['login']);
    session_destroy();
    header("Location: login.php");
}

if( isset($_POST["password"]) ){
error_log(hash("sha256", $_POST["password"]));
error_log($password_hash);
error_log($_POST["password"]);
	
	if(hash("sha256", $_POST["password"]."\n") == $password_hash){

		$_SESSION["login"] = true;
		header("Location: index.php");
	}
}

if( isset($_SESSION['login']) ){
	header("Location: index.php");
	die();
}

?>

<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Break controller</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/jquery-3.6.0.min.js"></script>
	</head>

	<body>
		<div>
			<form method="POST">
				<input class="form-control" type="password" name="password">
				<input type="submit" class="btn btn-success col-12" value="Zaloguj">
			</form>

		</div>

	</body>

</html>
