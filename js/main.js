function show_hide_main_page(element){
	
	$(".toolbar_button").removeClass("active");
	$(element).addClass("active");
	//var button_title = $(element).children('svg').attr('aria-label');
	
	get_data_from_main_api()
	//console.log(button_title);	
}


function get_data_from_main_api(){
	
	$.get( "", {
		get_data_from_files: '',
		
    },function( data, status) {
		
		$("#main_content_id").html('');
		make_status_div(data, "#main_content_id")
		make_bells_div(data, "#main_content_id")
		make_amp_div(data, "#main_content_id")
		make_music_div(data, "#main_content_id")
		make_radio_div(data, "#main_content_id")
		make_logs_div(data, "#main_content_id")
		make_tools_div(data, "#main_content_id")
		unhide_div_element();
		
	}, 'json');
	
	
	
}




function unhide_div_element(){
	$(".toolbar_button").each(function(index){
		if($( this ).hasClass('active') == true){
			var button_value = $( this ).children('svg').attr('aria-label');
			if(button_value == "Status"){
				$("#status_div").removeClass('d-none')
			}else if(button_value == "Dzwonki"){
				$("#bells_div").removeClass('d-none')
			}else if(button_value == "Wzmacniacz"){
				$("#amp_div").removeClass('d-none')
			}else if(button_value == "Harmonogram"){
				$("#music_div").removeClass('d-none')
			}else if(button_value == "Radio"){
				$("#radio_div").removeClass('d-none')
			}else if(button_value == "Log-i"){
				$("#logs_div").removeClass('d-none')
			}else if(button_value == "Narzędzia"){
				$("#tools_div").removeClass('d-none')
			}
			
			
			
		}	
	})
	
}




$( document ).ready(function() {
    
    get_data_from_main_api();
    
});



function show_alert(message){
	$("#alert1").alert().removeClass("d-none")
	const date_now = new Date();
	var date_now_string = date_now.getHours()+':'+date_now.getMinutes()+':'+date_now.getSeconds();
	$("#alert_message").text(date_now_string+' '+message)

	//$("#main_content_id").css('padding-top', '50px')
	setTimeout(hide_alert, 1000);
}

function hide_alert(){
	$("#alert1").addClass('d-none')
	$("#alert_message").text('')
	//$("#main_content_id").css('padding-top', '0px')
}
