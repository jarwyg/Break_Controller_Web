function make_amp_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'amp_div')
			.addClass('d-none')
			.append( make_title_card("Wzmacniacz") )
			//.append(make_bells_weekdays_checkboxes(data))
			.append("amp_div")
	)
	
}


//function make_bells_weekdays_checkboxes(data){
	
	
	
//}
