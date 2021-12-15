function make_bells_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'bells_div')
			.addClass('d-none')
			.append(make_bells_status_radio_buttons(data))
			.append(make_bells_weekdays_checkboxes(data))
			//.text("bells_div")
	)
	
}





function make_bells_status_radio_buttons(data){
	var div_to_return = $('<div></div>')
		.addClass("btn-group col-12 mb-4")
		.attr('role', 'group')
		.append(
			$('<input>')
				.attr('type', 'radio')
				.addClass('btn-check')
				.attr('id', 'bells_status_off')
				.attr('autocomplete', 'off')
				.attr('name', 'bells_status_on_off')
				.attr('checked', (data.state == "off") ? true : false)
				.val(0)
				.attr('onclick', 'change_on_off_status(this)')
		)
		.append(
			$('<label></label>')
				.addClass('btn btn-outline-primary')
				.attr('for', 'bells_status_off')
				.text("OFF")
		)
		.append(
			$('<input>')
				.attr('type', 'radio')
				.addClass('btn-check')
				.attr('id', 'bells_status_on')
				.attr('autocomplete', 'off')
				.attr('name', 'bells_status_on_off')
				.attr('checked', (data.state == "on") ? true : false)
				.val(1)
				.attr('onclick', 'change_on_off_status(this)')
		)
		.append(
			$('<label></label>')
				.addClass('btn btn-outline-success')
				.attr('for', 'bells_status_on')
				.text("ON")
		)
	
	
	
	
	
	return div_to_return;
}


function change_on_off_status(element){
	$.post("", {
		change_on_off_status: $(element).val(),		
    },function( data, status) {
		//console.log(data)
		//get_data_from_main_api()
	}, 'json');

	
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








