$(document).ready(function() {

	$('.calc__input').change(function(){
		if ( $(this).val() < 0 ){
			$(this).val(0);
		}
	});

	$('.calc__input').each(function(){
		if ( $(this).val() == "" ) {
			$(this).val("0");
		}
		if ( $('.calc__input--long').val() == 0 ){
			$('.calc__input--long').val("");
		}
	});

	$('.calc__open').click(function(){
		if ( $(this).text() == "Развернуть" ) {
			$(this).text("Свернуть");
		} else {
			setTimeout(() => {
				$(this).text("Развернуть");
			}, 100);
		}
		$(this).next().slideToggle(100);
	});

	$('.calc__input, .calc__radio, .calc__comment, .form__input').change(function(){
		summary();
	});

	summary();

	function summary() {


		var calc_summary = '';

		$('.calc__line').each(function(){

			if( $(this).find(".calc__mark").length == 1 ) {
				calc_summary = 
				calc_summary + 
				"— - — - — - — - — - — - — - — - — - — - — - — - — - — - —" + "<br>" + "\n" + 
				$(this).find(".calc__mark").text() + "<br>" + "\n" + 
				"" + "<br>" + "\n";
			}

			if( $(this).find(".calc__input").length == 1 ) {
				calc_summary = 
				calc_summary + 
				$(this).find(".calc__name").text() + ": " + 
				$(this).find(".calc__input").val() + " " + $(this).find(".calc__unit").text() + ";" + 
				"<br>" + "\n";
			}

			if( $(this).find(".calc__input").length == 2 ) {
				calc_summary = 
				calc_summary + 
				$(this).find(".calc__name").text() + ": " + 
				$(this).find(".calc__input:eq(0)").val() + " " + $(this).find(".calc__unit:eq(0)").text() + " / " + 
				$(this).find(".calc__input:eq(1)").val() + " " + $(this).find(".calc__unit:eq(1)").text() + ";" + 
				"<br>" + "\n";
			}

			if( $(this).find(".calc__input").length == 3 ) {
				calc_summary = 
				calc_summary + 
				$(this).find(".calc__name").text() + ": " + 
				$(this).find(".calc__input:eq(0)").val() + " " + $(this).find(".calc__unit:eq(0)").text() + " / " + 
				$(this).find(".calc__input:eq(1)").val() + " " + $(this).find(".calc__unit:eq(1)").text() + " / " + 
				$(this).find(".calc__input:eq(2)").val() + " " + $(this).find(".calc__unit:eq(2)").text() + ";" + 
				"<br>" + "\n";
			}

			if( $(this).find(".calc__radio").length > 0 ) {
				calc_summary = 
				calc_summary + 
				$(this).find(".calc__name").text() + ": " + 
				$(this).find(".calc__radio:checked").next().text() + ";" + 
				"<br>" + "\n";
			}

			if( $(this).find("textarea").length > 0 ) {
				calc_summary = 
				calc_summary + 
				$(this).find(".calc__comment").val() + 
				"<br>" + "\n";
			}

		});

		$('#form_data').val( calc_summary );

		console.log(calc_summary);

	}

	var info_input_max = 0;
	$('.calc__input').each(function(){
		let info_input_num = $(this).attr("id").split("_")[2];
		
		if ( info_input_num >= info_input_max ){
			info_input_max = +info_input_num;
		}
		$('.info__input').text("input " + info_input_max);
	});

	var info_radio_max = 0;
	$('.calc__radio').each(function(){
		let info_radio_num = $(this).attr("id").split("_")[2];
		
		if ( info_radio_num >= info_radio_max ){
			info_radio_max = +info_radio_num;
		}
		$('.info__radio').text("radio " + info_radio_max);
	});

});