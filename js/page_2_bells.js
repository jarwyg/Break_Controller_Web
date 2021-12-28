function make_bells_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'bells_div')
			.addClass('d-none')
			.append(make_bells_status_radio_buttons(data))
			.append(make_bells_weekdays_checkboxes(data))
			.append(make_bells_length_type_selector(data))
			.append(make_bells_hours_edit(data, 'krotkie'))
			.append(make_bells_hours_edit(data, 'dlugie'))
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
//******************************************************


function make_bells_length_type_selector(data){

	var div_to_return = $('<div></div>')
		.addClass("btn-group col-12 mb-4")
		.attr('role', 'group')
		.append(
			$('<input>')
				.attr('type', 'radio')
				.addClass('btn-check')
				.attr('id', 'bells_length_type_short')
				.attr('autocomplete', 'off')
				.attr('name', 'bells_length_type_short_long')
				.attr('checked', (data.przerwy == "dlugie") ? true : false)
				.val(0)
				.attr('onclick', 'change_bells_length_type(this)')
		)
		.append(
			$('<label></label>')
				.addClass('btn btn-outline-primary')
				.attr('for', 'bells_length_type_short')
				.text("Krótkie")
		)
		.append(
			$('<input>')
				.attr('type', 'radio')
				.addClass('btn-check')
				.attr('id', 'bells_length_type_long')
				.attr('autocomplete', 'off')
				.attr('name', 'bells_length_type_short_long')
				.attr('checked', (data.przerwy == "krotkie") ? true : false)
				.val(1)
				.attr('onclick', 'change_bells_length_type(this)')
		)
		.append(
			$('<label></label>')
				.addClass('btn btn-outline-success')
				.attr('for', 'bells_length_type_long')
				.text("Długie")
		)
	
	
	
	
	
	return div_to_return;

}

function change_bells_length_type(element){

	$.post("", {
		change_bells_length_type: $(element).val(),		
    },function( data, status) {
		//console.log(data)
		//get_data_from_main_api()
	}, 'json');

}
//******************************************************

function make_bells_hours_edit(data, type){

	var bells_table_tbody = $('<tbody></tbody>');

	var active_bells;
	
	if(type == "krotkie"){
		active_bells = data.krotkie;
	}else if(type == "dlugie"){
		active_bells = data.dlugie;
	}



	active_bells.forEach(function(bells_hours){
		bells_table_tbody.append(
			$('<tr></tr>')
				.addClass('text-center')
				.append(
					$('<td></td>')
						.append(
							$('<input>')
								.attr('type', 'time')
								.val(bells_hours[0])
								.attr('name', 'bells_hours_'+type)
								
						)
				)
				.append(
					$('<td></td>')
						.append(
							$('<input>')
								.attr('type', 'time')
								.val(bells_hours[1])
								.attr('name', 'bells_hours_'+type)
								.addClass( (bells_hours[1] == undefined) ? 'd-none' : '' )
								
						)
				)
		)

		console.log(bells_hours[1])
		
	})
	
	bells_table_tbody.append(
		$('<tr></tr>')
			.append(
				$('<td></td>')
					.attr('colspan', '2')
					.addClass('text-center')
					.append(
						$('<button></button>')
							.text('+')
							.addClass('btn btn-info col-12')
							.attr('hours_type', type)
							.attr('onclick', 'create_new_hour(this)')
					)
			)
	)

	
	bells_table_tbody.append(
		$('<tr></tr>')
			.append(
				$('<td></td>')
					.attr('colspan', '2')
					.addClass('text-center')
					.append(
						$('<button></button>')
							.text('Save')
							.addClass('btn btn-success col-12')
							.attr('hours_type', type)
							.attr('onclick', 'save_bells_hours(this)')
					)
			)
	)
	
	var div_to_return = $('<div></div>')
			.addClass("table-responsive")
			.append(
				$('<table></table>')
					.addClass('table table-bordered table-hover table-stripped ')
					.append(
						$('<thead></thead>')
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<th></th>')
											.attr('colspan', '2')
											.text('Godziny dzwonków dla lekcje '+((type == "dlugie") ? "długie" : "krótkie"))
									)
									
							
							)

							
					)
					.append(bells_table_tbody)
			)
		
	
	
	
	return div_to_return;


}


function create_new_hour(element){
	$(element).replaceWith(
		$('<input>')
			.attr('type', 'time')
			.attr('name', 'bells_hours_'+$(element).attr("hours_type"))	
	);
}


function save_bells_hours(element){
	var hours_type = $(element).attr('hours_type')
	var hours_array = [];
	
	$("input[name='bells_hours_"+hours_type+"']").each( function(index){
		if( ($(this).val() != "") && $(this).val() != undefined ){
			hours_array.push( $(this).val() )
		}
	} )



	$.post("", {
		save_new_bells_hours: hours_array,
		type: hours_type,
		
    },function( data, status) {
		console.log(data)
		get_data_from_main_api()
	}, 'json');

}
