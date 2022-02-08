$(document).ready(function() {


	$('#calc_tiraj').on("input", function(){
		calculation();
	});

	$('.calc__select').change(function(){
		calculation();
	});

	$('input[name=calc_option]').change(function(){
		calculation();
	});

	calculation();

	function calculation() {

		var calc_color = $('#calc_color').val();
		var calc_tiraj = $('#calc_tiraj').val();
		var calc_type = $('#calc_type').val();
		var calc_maket = $('#calc_maket').val();

		var calc_color_name = $('#calc_color option:selected').text();
		var calc_type_name = $('#calc_type option:selected').text();
		var calc_maket_name = $('#calc_maket option:selected').text();


		if ( calc_type == "standard" ) {
			var calc_type_price = 1;
		}
		if ( calc_type == "mifare" ) {
			var calc_type_price = 2;
		}
		if ( calc_type == "marine" ) {
			var calc_type_price = 2.2;
		}


		if ( calc_color == "white" ) {
			var calc_color_price = 50;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--white').addClass("calc__img--show");
		}
		if ( calc_color == "silver" ) {
			var calc_color_price = 70;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--silver').addClass("calc__img--show");
		}
		if ( calc_color == "gold" ) {
			var calc_color_price = 90;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--gold').addClass("calc__img--show");
		}


		var calc_options_name = '';

		if ( $('#calc_option_1').is(':checked') ){	
			var calc_option_price_1 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_1').next().text();
			$('.calc__img--add1').addClass("calc__img--show");	
		} else {	
			var calc_option_price_1 = 0;
			$('.calc__img--add1').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_2').is(':checked') ){	
			var calc_option_price_2 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_2').next().text();
			$('.calc__img--add2').addClass("calc__img--show");	
		} else {	
			var calc_option_price_2 = 0;
			$('.calc__img--add2').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_3').is(':checked') ){	
			var calc_option_price_3 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_3').next().text();
			$('.calc__img--add3').addClass("calc__img--show");	
		} else {	
			var calc_option_price_3 = 0;
			$('.calc__img--add3').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_4').is(':checked') ){	
			var calc_option_price_4 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_4').next().text();
			$('.calc__img--add4').addClass("calc__img--show");	
		} else {	
			var calc_option_price_4 = 0;
			$('.calc__img--add4').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_5').is(':checked') ){	
			var calc_option_price_5 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_5').next().text();
			$('.calc__img--add5').addClass("calc__img--show");	
		} else {	
			var calc_option_price_5 = 0;
			$('.calc__img--add5').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_6').is(':checked') ){	
			var calc_option_price_6 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_6').next().text();
			$('.calc__img--add6').addClass("calc__img--show");	
		} else {	
			var calc_option_price_6 = 0;
			$('.calc__img--add6').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_7').is(':checked') ){	
			var calc_option_price_7 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_7').next().text();
			$('.calc__img--add7').addClass("calc__img--show");	
		} else {	
			var calc_option_price_7 = 0;
			$('.calc__img--add7').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_8').is(':checked') ){	
			var calc_option_price_8 = 15;
			calc_options_name = calc_options_name + " | " + $('#calc_option_8').next().text();
			$('.calc__img--add8').addClass("calc__img--show");	
		} else {	
			var calc_option_price_8 = 0;
			$('.calc__img--add8').removeClass("calc__img--show");	
		}


		var calc_options = 
			+calc_option_price_1 + 
			+calc_option_price_2 + 
			+calc_option_price_3 + 
			+calc_option_price_4 + 
			+calc_option_price_5 + 
			+calc_option_price_6 + 
			+calc_option_price_7 + 
			+calc_option_price_8
		;

		var calc_itog1 = (+calc_color_price + +calc_options) * calc_type_price;
		var calc_itog2 = calc_itog1 * calc_tiraj;
		var calc_itog3 = calc_tiraj * 5;

		$('#calc_summ_1').text( calc_itog1.toLocaleString('ru') + " руб." );
		$('#calc_summ_2').text( calc_itog2.toLocaleString('ru') + " руб." );
		$('#calc_summ_3').text( calc_itog3.toLocaleString('ru') + " г"  );

		$('#calc_data').val(
			"Данные заказа" + " <br>" + " \n" +
			"— - — - — - — - — - — - — - — - — - — -" + " <br>" + " \n" +
			"Тираж: " + calc_tiraj + " <br>" + " \n" +
			"Цвет: " + calc_color_name + " <br>" + " \n" +
			"Тип: " + calc_type_name + " <br>" + " \n" +
			"Макет: " + calc_maket_name + " <br>" + " \n" +
			"— - — - — - — - — - — - — - — - — - — -" + " <br>" + " \n" +
			"Опции: " + calc_options_name + " | "
		);

	}


});