$(document).ready(function() {

	$(".calc__input--phone").mask("+7 (999) 999-99-99", {placeholder: "__________" });





	$('.calc__radio, .calc__check').change(calculation);


	calculation();

	function calculation() {

		var calc_remont = $('input[name=calc_remont]:checked').val();
		var calc_remont_name = $('input[name=calc_remont]:checked').next().text();

		if ( $('#calc_option_1:checked').val() != undefined ) { var calc_option_1 = $('#calc_option_1:checked').val(); var calc_option_1_name = "Прихожая | "; } else { var calc_option_1 = 0; var calc_option_1_name = "" ;}
		if ( $('#calc_option_2:checked').val() != undefined ) { var calc_option_2 = $('#calc_option_2:checked').val(); var calc_option_2_name = "Ванная | "; } else { var calc_option_2 = 0; var calc_option_2_name = "" ;}
		if ( $('#calc_option_3:checked').val() != undefined ) { var calc_option_3 = $('#calc_option_3:checked').val(); var calc_option_3_name = "Кухня | "; } else { var calc_option_3 = 0; var calc_option_3_name = "" ;}
		if ( $('#calc_option_4:checked').val() != undefined ) { var calc_option_4 = $('#calc_option_4:checked').val(); var calc_option_4_name = "Комната 1 | "; } else { var calc_option_4 = 0; var calc_option_4_name = "" ;}
		if ( $('#calc_option_5:checked').val() != undefined ) { var calc_option_5 = $('#calc_option_5:checked').val(); var calc_option_5_name = "Комната 2 | "; } else { var calc_option_5 = 0; var calc_option_5_name = "" ;}
		if ( $('#calc_option_6:checked').val() != undefined ) { var calc_option_6 = $('#calc_option_6:checked').val(); var calc_option_6_name = "Комната 3 | "; } else { var calc_option_6 = 0; var calc_option_6_name = "" ;}
		if ( $('#calc_option_7:checked').val() != undefined ) { var calc_option_7 = $('#calc_option_7:checked').val(); var calc_option_7_name = "Комната 4 | "; } else { var calc_option_7 = 0; var calc_option_7_name = "" ;}

		if ( $('#calc_defects_1:checked').val() != undefined ) { var calc_defects_1 = $('#calc_defects_1:checked').val(); var calc_defects_1_name = "Вздутый пол | " } else { var calc_defects_1 = 0; var calc_defects_1_name = "" ;}
		if ( $('#calc_defects_2:checked').val() != undefined ) { var calc_defects_2 = $('#calc_defects_2:checked').val(); var calc_defects_2_name = "Потолок | " } else { var calc_defects_2 = 0; var calc_defects_2_name = "" ;}
		if ( $('#calc_defects_3:checked').val() != undefined ) { var calc_defects_3 = $('#calc_defects_3:checked').val(); var calc_defects_3_name = "Отслоились обои | " } else { var calc_defects_3 = 0; var calc_defects_3_name = "" ;}
		if ( $('#calc_defects_4:checked').val() != undefined ) { var calc_defects_4 = $('#calc_defects_4:checked').val(); var calc_defects_4_name = "Подтеки, пятна | " } else { var calc_defects_4 = 0; var calc_defects_4_name = "" ;}
		if ( $('#calc_defects_5:checked').val() != undefined ) { var calc_defects_5 = $('#calc_defects_5:checked').val(); var calc_defects_5_name = "Техника | " } else { var calc_defects_5 = 0; var calc_defects_5_name = "" ;}
		if ( $('#calc_defects_6:checked').val() != undefined ) { var calc_defects_6 = $('#calc_defects_6:checked').val(); var calc_defects_6_name = "Мебель | " } else { var calc_defects_6 = 0; var calc_defects_6_name = "" ;}

		var calc_names_1 = 
		calc_option_1_name + 
		calc_option_2_name + 
		calc_option_3_name + 
		calc_option_4_name + 
		calc_option_5_name + 
		calc_option_6_name + 
		calc_option_7_name;
		var calc_names_2 = 
		calc_defects_1_name + 
		calc_defects_2_name + 
		calc_defects_3_name + 
		calc_defects_4_name + 
		calc_defects_5_name + 
		calc_defects_6_name;

		var calc_sum = 
		+calc_option_1 + 
		+calc_option_2 + 
		+calc_option_3 + 
		+calc_option_4 + 
		+calc_option_5 + 
		+calc_option_6 + 
		+calc_option_7;

		var calc_options = 
		+calc_defects_1 + 
		+calc_defects_2 + 
		+calc_defects_3 + 
		+calc_defects_4 + 
		+calc_defects_5 + 
		+calc_defects_6 + 
		1;

		console.log(calc_sum);
		
		console.log(calc_options);

		var calc_itog_1 = calc_sum * calc_remont * calc_options;
		var calc_itog_2 = 5000;
		var calc_itog_3 = calc_itog_1 * 0.5;
		var calc_itog_4 = +calc_itog_1 + +calc_itog_2 + +calc_itog_3;

		$('#calc_price_1').text( (+calc_itog_1.toFixed(0)).toLocaleString("ru") + " руб" );
		$('#calc_price_2').text( (+calc_itog_2.toFixed(0)).toLocaleString("ru") + " руб" );
		$('#calc_price_3').text( (+calc_itog_3.toFixed(0)).toLocaleString("ru") + " руб" );
		$('#calc_price_4').text( (+calc_itog_4.toFixed(0)).toLocaleString("ru") + " руб" );

		$('#calc_data').val(

			"Тип ремонта: " + calc_remont_name + " <br>" + " \n" +
			"Пострадавшие помещения: " + calc_names_1 + " <br>" + " \n" +
			"Какие дефекты: " + calc_names_2 + " <br>" + " \n" +
			"Неустойка: " + calc_itog_1.toFixed(0) + " <br>" + " \n" +
			"Моральный вред: " + calc_itog_2.toFixed(0) + " <br>" + " \n" +
			"Штраф 50%: " + calc_itog_3.toFixed(0) + " <br>" + " \n" +
			"Итого к взысканию: " + calc_itog_4.toFixed(0)

		);

	}

});