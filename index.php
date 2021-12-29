<?php
session_start();

if( !isset($_SESSION['login']) ){
	header("Location: login.php");
	die();
}

require_once('config.php');
require_once('api/get_data_from_files.php');
require_once('api/change_weekday_state.php');
require_once('api/change_on_off_status.php');
require_once('api/save_new_bells_hours.php');
require_once('api/change_bells_length_type.php');
require_once('api/change_bells_volume.php');
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Break controller</title>


	<link href="css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      
      
    </style>

    
    <link href="sidebars.css" rel="stylesheet">
  </head>
  <body>
    

<main>



  <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-placement="right">
      <svg class="bi" width="40" height="32"><use xlink:href="bootstrap-icons.svg#alarm"/></svg>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
		
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button active" title="Status" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Status"><use xlink:href="bootstrap-icons.svg#info"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Dzwonki" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Dzwonki"><use xlink:href="bootstrap-icons.svg#bell"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Wzmacniacz" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Wzmacniacz"><use xlink:href="bootstrap-icons.svg#speaker"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Harmonogram" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Harmonogram"><use xlink:href="bootstrap-icons.svg#music-note-list"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Radio" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Radio"><use xlink:href="bootstrap-icons.svg#music-player"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Log-i" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Log-i"><use xlink:href="bootstrap-icons.svg#hdd"/></svg>
        </a>
      </li>
      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Narzędzia" data-bs-toggle="tooltip" data-bs-placement="right" onclick="show_hide_main_page(this)">
          <svg class="bi" width="24" height="24" role="img" aria-label="Narzędzia"><use xlink:href="bootstrap-icons.svg#tools"/></svg>
        </a>
      </li>

      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Github" data-bs-toggle="tooltip" data-bs-placement="right" target="_blank" href="https://github.com/jarwyg/Break_Controller_Web">
          <svg class="bi" width="24" height="24" role="img" aria-label="Github"><use xlink:href="bootstrap-icons.svg#github"/></svg>
        </a>
      </li>

      
      <li>
        <a class="nav-link py-3 border-bottom toolbar_button" title="Logout" data-bs-toggle="tooltip" data-bs-placement="right" href="login.php?logout">
          <svg class="bi" width="24" height="24" role="img" aria-label="Logout"><use xlink:href="bootstrap-icons.svg#door-open"/></svg>
        </a>
      </li>
     
    </ul>
    
  </div>


	<div id="main_content_id" class="m-3" style="width: 100%">
	
	</div>





	
</main>

	<div class="" style="position: absolute; padding-left: 72px; top: 0px; right: 0px; width: 100%; z-index: 100;">
		<div class="alert alert-success alert-dismissible fade show d-none" role="alert" id="alert1" style="padding: 0px;">
			<div class="d-flex justify-content-between">
				<div class="p-2" id="alert_message">Zapisano</div>
				<div class="p-2">
				  <button type="button" class="btn btn-sm btn-light" onclick="hide_alert()">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
			</div>
		</div>
	</div>
	
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.6.0.min.js"></script>

	<script src="sidebars.js"></script>
	<script src="js/main.js"></script>
	<script src="js/page_1_status.js"></script>
	<script src="js/page_2_bells.js"></script>
	<script src="js/page_3_amp.js"></script>
	<script src="js/page_4_music.js"></script>
	<script src="js/page_5_radio.js"></script>
	<script src="js/page_6_logs.js"></script>
	<script src="js/page_7_tools.js"></script>
  </body>
</html>
