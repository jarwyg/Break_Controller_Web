function make_logs_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'logs_div')
			.addClass('d-none')
			.append( make_title_card("Log-i") )
			.append(make_logs_select(data))
			
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


	return div_to_return;
}


function get_log_by_filename(element){
	var filename = $(element).val();
	if(filename != "0"){
		console.log( filename )
	}

}
