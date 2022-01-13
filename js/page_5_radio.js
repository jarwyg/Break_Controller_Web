function make_radio_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'radio_div')
			.addClass('d-none')
			.append( make_title_card("Radio") )
			.append(make_radio_select(data))
			.append(make_range_for_music_volume(data))
	)
	
}


function make_radio_select(data){

	var select_element = $('<select></select>')
		.addClass('form-control')
		.attr('onchange', 'change_radio(this)')

	select_element.append(
		new Option("Wyłączone", "0")
	)

	data.radio_file.forEach(function(radio_file_val){
		select_element.append(
			new Option(radio_file_val.radio_name, radio_file_val.radio_number, false, radio_file_val.radio_selected)
		)
	})


	var div_to_return = $('<div></div>')
		.append(select_element)
		.addClass('mb-2')


	return div_to_return;
}


function change_radio(element){

	$.post("", {
		change_radio: $(element).val(),		
    },function( data, status) {
		if(data.status == "OK"){
			show_alert("Zapisano")
		}
		//get_data_from_main_api()
	}, 'json');

	
}


function make_range_for_music_volume(data){
	var div_to_return = $('<div></div>')
		.addClass('card mb-4')
		.append(
			$('<div></div>')
				.addClass('card-header')
				.text('Głośność radia/muzyki')
		)
		.append(
			$('<div></div>')
				.addClass('card-body')
				.append(
					$('<input>')
						.attr('type', 'range')
						.addClass('form-range')
						.attr('min', '0')
						.attr('max', '100')
						.attr('step', '5')
						.val(data.volume_music)
						.attr('onchange', 'change_music_volume(this)')
				)
		)
		
		

	return div_to_return;

}
function change_music_volume(element){
	$.post("", {
		change_music_volume: $(element).val(),		
    },function( data, status) {
		if(data.status == "OK"){
			show_alert("Zapisano")
		}
		//get_data_from_main_api()
	}, 'json');

}
