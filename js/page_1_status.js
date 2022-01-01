function make_status_div(data, append_to_element){
	
	$(append_to_element).append(
		$('<div></div>')
			.attr('id', 'status_div')
			.addClass('d-none')
			.append( make_title_card("Status") )
			.append(make_status_service(data))
			.append(make_status_bell_hours(data))
			.append(make_status_bells_list(data))
	)
	
}





function make_status_service(data){
	
	var div_to_return = $('<div></div>')
			.addClass("table-responsive")
			.append(
				$('<table></table>')
					.addClass('table table-bordered table-hover table-stripped ')
					.append(
						$('<tbody></tbody>')
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<td></td>')
											.text('Dzwonki')
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
															.attr('id', 'dzwonki_toogle_btn')
															.attr('disabled', true)
															.attr('checked', (data.state == "on") ? true : false)
													)
											)
									)
									.append(
										$('<td></td>')
											.text('Głośność: '+data.volume+' %')
									)
							)
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<td></td>')
											.text('Radio')
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
															.attr('id', 'radio_toogle_btn')
															.attr('disabled', true)
															.attr('checked', (data.music == "0") ? false : true)
													)
											)
									)
									.append(
										$('<td></td>')
											.text('Głośność: '+data.volume_music+' %')
									)
							)
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<td></td>')
											.text('Harmonogram')
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
															.attr('id', 'radio_toogle_btn')
															.attr('disabled', true)
															.attr('checked', (data.radio == "0") ? false : true)
													)
											)
									)
									.append(
										$('<td></td>')
											.text('Głośność: '+data.volume_music+' %')
									)
							)
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<td></td>')
											.text('Wzmacniacz')
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
															.attr('id', 'wzmacniacz_toogle_btn')
															.attr('disabled', true)
															.attr('checked', (data.realy_mode == "0") ? false : true)
													)
											)
									)
									.append(
										$('<td></td>')
											.text( (data.realy_mode == "2") ? 'Harmonogram: '+data.realy_enable_time+' - '+data.realy_disable_time : "Manualnie")
									)
							)
							
					)
			)
		
	
	
	
	return div_to_return;
}

function make_status_bell_hours(data){
	
	var bells_table_tbody = $('<tbody></tbody>');
	
	var active_bells;
	
	if(data.przerwy == "krotkie"){
		active_bells = data.krotkie;
	}else if(data.przerwy == "dlugie"){
		active_bells = data.dlugie;
	}
	
	
	active_bells.forEach(function(bells_hours){
		bells_table_tbody.append(
			$('<tr></tr>')
				.addClass('text-center')
				.append(
					$('<td></td>')
						.text(bells_hours[0])
				)
				.append(
					$('<td></td>')
						.text(bells_hours[1])
				)
		)
		
	})
	
	
	
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
											.text('Godziny dzwonków dla lekcje '+((data.przerwy == "dlugie") ? "długie" : "krótkie"))
									)
									
							
							)

							
					)
					.append(bells_table_tbody)
			)
		
	
	
	
	return div_to_return;

}


function make_status_bells_list(data){

	var bells_list_table_tbody = $('<tbody></tbody>');

	data.bell_files.forEach(function(bell_files_){
		bells_list_table_tbody.append(
			$('<tr></tr>')
				.addClass('text-center')
				.addClass((bell_files_.filename == false) ? "table-danger" : 'table-success')
				.append(
					$('<td></td>')
						.text(bell_files_.day_name)
				)
				.append(
					$('<td></td>')
						.text((bell_files_.filename == false) ? "Brak pliku" : bell_files_.filename)
				)
				.append(
					$('<td></td>')
						.append(
							$('<audio></audio>')
								.attr('preload', 'none')
								.attr('src', 'bells/'+bell_files_.filename)
								.attr('controls', '')
								.addClass((bell_files_.filename == false) ? "d-none" : "")
						)
				)
		)
	});



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
											.attr('colspan', '3')
											.text('Status dzwonków na dany dzień tygodnia')
									)
									
							
							)
							.append(
								$('<tr></tr>')
									.addClass('text-center')
									.append(
										$('<th></th>')
											.text('Dzień')
									)
									.append(
										$('<th></th>')
											.text('Status')
									)
									.append(
										$('<th></th>')
											.text('Podgląd')
									)
									
							
							)

							
					)
					.append(bells_list_table_tbody)
			)
		
	
	
	
	return div_to_return;

}

