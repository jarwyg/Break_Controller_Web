function make_bells_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'bells_div')
			.addClass('d-none')
			.append(make_bells_weekdays_checkboxes(data))
			//.text("bells_div")
	)
	
}


function make_bells_weekdays_checkboxes(data){
	
	
	
	var weekdays_tr = $('<tbody></tbody>');

	data.week_days_array.forEach(function(week_days_array_val){
		
		
		weekdays_tr
			.append(
				$('<tr></tr>')
					.addClass('text-center')
					.append(
						$('<td></td>')
							.text(week_days_array_val.name)
					)
					.append(
						$('<td></td>')
							.append(
								$('<div></div>')
									.addClass('form-check form-switch')
									.css('width', '100%')
									.append(
										$('<input>')
											.addClass('form-check-input')
											.attr('type', 'checkbox')
											.attr('checked', (week_days_array_val.status == 1) ? true : false)
											.val(week_days_array_val.number)
											.attr('onclick', 'change_weekday_status(this)')
									)
							)
					)
			)
	})
	
	
	
	
	var div_to_return = $('<div></div>')
			.addClass("table-responsive")
			.append(
				$('<table></table>')
					.addClass('table table-bordered table-hover table-stripped ')
					.append( weekdays_tr )
			)
		
	
	
	
	return div_to_return;	
	
	
}



function change_weekday_status(element){
	$.post("", {
		change_weekday_state: $(element).val(),
		value: $(element).is(':checked'),
		
    },function( data, status) {
		//console.log(data)
		//get_data_from_main_api()
	}, 'json');

	
}
