function make_tools_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'tools_div')
			.addClass('d-none')
			.append( make_title_card("Narzędzia") )
			//.append(make_bells_weekdays_checkboxes(data))
			.append("tools_div")
	)
	
}


//function make_bells_weekdays_checkboxes(data){
	
	
	
//}
