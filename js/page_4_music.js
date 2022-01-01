function make_music_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'music_div')
			.addClass('d-none')
			.append( make_title_card("Muzyka") )
			//.append(make_bells_weekdays_checkboxes(data))
			.append("music_div")
	)
	
}


//function make_bells_weekdays_checkboxes(data){
	
	
	
//}
