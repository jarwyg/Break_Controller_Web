function make_logs_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'logs_div')
			.addClass('d-none')
			//.append(make_bells_weekdays_checkboxes(data))
			.text("logs_div")
	)
	
}


//function make_bells_weekdays_checkboxes(data){
	
	
	
//}
