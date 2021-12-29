<?php
session_start();

require_once("config.php");

if (isset($_GET['logout'])){
    unset($_SESSION['login']);
    session_destroy();
    header("Location: login.php");
}

if( isset($_POST["password"]) ){
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

		<style>
			.main_div{
				width: 300px;
				height: 200px;
				top: 50%;
				left: 50%;
				position: absolute;
				margin: -100px 0 0 -150px;
			}
			
			.form-signin {
			  width: 100%;
			  padding: 15px;
			  margin: 0 auto;
			  
			}
		</style>
		
	</head>

	<body>
		<div class="main_div">
			<form method="POST" class="form-signin">
				<div class="text-center h5">Log in</div>
				<input class="form-control mb-2" type="password" name="password">
				<input type="submit" class="btn btn-success col-12" value="Zaloguj">
			</form>

		</div>

	</body>

</html>
