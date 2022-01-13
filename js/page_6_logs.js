function make_logs_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'logs_div')
			.addClass('d-none')
			.append( make_title_card("Log-i") )
			.append( make_logs_select(data) )
			.append( make_logs_textarea(data) )
			
	)
	
}


function make_logs_select(data){

	var select_element = $('<select></select>')
		.addClass('form-control')
		.attr('onchange', 'get_log_by_filename(this)')

	select_element.append(
		new Option("-- Wybierz --", "0")
	)

	data.log_files.forEach(function(log_files_val){
		select_element.append(
			new Option(log_files_val)
		)
	})


	var div_to_return = $('<div></div>')
		.append(select_element)
		.addClass('mb-2')


	return div_to_return;
}


function get_log_by_filename(element){
	var filename = $(element).val();
	if(filename != "0"){

		$.post("", {
			get_data_from_log_file: filename,		
		},function( data, status) {
			if(data.status == "OK"){
				$("#logs_content")
					.text(data.content)
					.removeClass("d-none")
			}
		}, 'json');
	


	}else{
		$("#logs_content")
			.text("")
			.addClass("d-none")
	}

}


function make_logs_textarea(data){

	var div_to_return = $('<div></div>')
		.append(
			$('<textarea></textarea>')
				.addClass("form-control d-none")
				.attr('id', 'logs_content')
				.css('height', '600px')
		)


	return div_to_return;

}
