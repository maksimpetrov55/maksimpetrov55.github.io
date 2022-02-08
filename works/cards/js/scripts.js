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


		// стоимость в зависимости от тиража
		if ( calc_tiraj <= 50 ){ // тираж менее 50 шт 
			var calc_color_value_white = 15;		// стоимость цвет белый
			var calc_color_value_silver = 20;		// стоимость цвет серебрянный
			var calc_color_value_gold = 25;			// стоимость цвет золотой
			var calc_option_value_1 = 30;			// стоимость опции №1
			var calc_option_value_2 = 30;			// стоимость опции №2
			var calc_option_value_3 = 30;			// стоимость опции №3
			var calc_option_value_4 = 30;			// стоимость опции №4
			var calc_option_value_5 = 30;			// стоимость опции №5
			var calc_option_value_6 = 30;			// стоимость опции №6
			var calc_option_value_7 = 30;			// стоимость опции №7
			var calc_option_value_8 = 30;			// стоимость опции №8
		}
		if ( calc_tiraj > 50 ){ // тираж от 50 до 100
			var calc_color_value_white = 10;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 25;			// стоимость опции №1
			var calc_option_value_2 = 25;			// стоимость опции №2
			var calc_option_value_3 = 25;			// стоимость опции №3
			var calc_option_value_4 = 25;			// стоимость опции №4
			var calc_option_value_5 = 25;			// стоимость опции №5
			var calc_option_value_6 = 25;			// стоимость опции №6
			var calc_option_value_7 = 25;			// стоимость опции №7
			var calc_option_value_8 = 25;			// стоимость опции №8
		}
		if ( calc_tiraj > 100 ){ // тираж от 100 до 300
			var calc_color_value_white = 10;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 22;			// стоимость опции №1
			var calc_option_value_2 = 22;			// стоимость опции №2
			var calc_option_value_3 = 22;			// стоимость опции №3
			var calc_option_value_4 = 22;			// стоимость опции №4
			var calc_option_value_5 = 22;			// стоимость опции №5
			var calc_option_value_6 = 22;			// стоимость опции №6
			var calc_option_value_7 = 22;			// стоимость опции №7
			var calc_option_value_8 = 22;			// стоимость опции №8
		}
		if ( calc_tiraj > 300 ){ // тираж от 300 до 500
			var calc_color_value_white = 10;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 19;			// стоимость опции №1
			var calc_option_value_2 = 19;			// стоимость опции №2
			var calc_option_value_3 = 19;			// стоимость опции №3
			var calc_option_value_4 = 19;			// стоимость опции №4
			var calc_option_value_5 = 19;			// стоимость опции №5
			var calc_option_value_6 = 19;			// стоимость опции №6
			var calc_option_value_7 = 19;			// стоимость опции №7
			var calc_option_value_8 = 19;			// стоимость опции №8
		}
		if ( calc_tiraj > 500 ){ // тираж от 500 до 1000
			var calc_color_value_white = 9;		// стоимость цвет белый
			var calc_color_value_silver = 12;		// стоимость цвет серебрянный
			var calc_color_value_gold = 17;			// стоимость цвет золотой
			var calc_option_value_1 = 16;			// стоимость опции №1
			var calc_option_value_2 = 16;			// стоимость опции №2
			var calc_option_value_3 = 16;			// стоимость опции №3
			var calc_option_value_4 = 16;			// стоимость опции №4
			var calc_option_value_5 = 16;			// стоимость опции №5
			var calc_option_value_6 = 16;			// стоимость опции №6
			var calc_option_value_7 = 16;			// стоимость опции №7
			var calc_option_value_8 = 16;			// стоимость опции №8
		}
		if ( calc_tiraj > 1000 ){ // тираж от 1000 до 3000
			var calc_color_value_white = 8;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 13;			// стоимость опции №1
			var calc_option_value_2 = 13;			// стоимость опции №2
			var calc_option_value_3 = 13;			// стоимость опции №3
			var calc_option_value_4 = 13;			// стоимость опции №4
			var calc_option_value_5 = 13;			// стоимость опции №5
			var calc_option_value_6 = 13;			// стоимость опции №6
			var calc_option_value_7 = 13;			// стоимость опции №7
			var calc_option_value_8 = 13;			// стоимость опции №8
		}
		if ( calc_tiraj > 3000 ){ // тираж от 3000 до 5000
			var calc_color_value_white = 7;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 11;			// стоимость опции №1
			var calc_option_value_2 = 11;			// стоимость опции №2
			var calc_option_value_3 = 11;			// стоимость опции №3
			var calc_option_value_4 = 11;			// стоимость опции №4
			var calc_option_value_5 = 11;			// стоимость опции №5
			var calc_option_value_6 = 11;			// стоимость опции №6
			var calc_option_value_7 = 11;			// стоимость опции №7
			var calc_option_value_8 = 11;			// стоимость опции №8
		}
		if ( calc_tiraj > 5000 ){ // тираж от 5000 до 10000
			var calc_color_value_white = 6;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 10;			// стоимость опции №1
			var calc_option_value_2 = 10;			// стоимость опции №2
			var calc_option_value_3 = 10;			// стоимость опции №3
			var calc_option_value_4 = 10;			// стоимость опции №4
			var calc_option_value_5 = 10;			// стоимость опции №5
			var calc_option_value_6 = 10;			// стоимость опции №6
			var calc_option_value_7 = 10;			// стоимость опции №7
			var calc_option_value_8 = 10;			// стоимость опции №8
		}
		if ( calc_tiraj > 10000 ){ // тираж от 10000 до 20000
			var calc_color_value_white = 5;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 10;			// стоимость опции №1
			var calc_option_value_2 = 10;			// стоимость опции №2
			var calc_option_value_3 = 10;			// стоимость опции №3
			var calc_option_value_4 = 10;			// стоимость опции №4
			var calc_option_value_5 = 10;			// стоимость опции №5
			var calc_option_value_6 = 10;			// стоимость опции №6
			var calc_option_value_7 = 10;			// стоимость опции №7
			var calc_option_value_8 = 10;			// стоимость опции №8
		}
		if ( calc_tiraj > 20000 ){ // тираж от 20000
			var calc_color_value_white = 5;		// стоимость цвет белый
			var calc_color_value_silver = 10;		// стоимость цвет серебрянный
			var calc_color_value_gold = 15;			// стоимость цвет золотой
			var calc_option_value_1 = 10;			// стоимость опции №1
			var calc_option_value_2 = 10;			// стоимость опции №2
			var calc_option_value_3 = 10;			// стоимость опции №3
			var calc_option_value_4 = 10;			// стоимость опции №4
			var calc_option_value_5 = 10;			// стоимость опции №5
			var calc_option_value_6 = 10;			// стоимость опции №6
			var calc_option_value_7 = 10;			// стоимость опции №7
			var calc_option_value_8 = 10;			// стоимость опции №8
		}



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
			var calc_color_price = calc_color_value_white;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--white').addClass("calc__img--show");
		}
		if ( calc_color == "silver" ) {
			var calc_color_price = calc_color_value_silver;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--silver').addClass("calc__img--show");
		}
		if ( calc_color == "gold" ) {
			var calc_color_price = calc_color_value_gold;
			$('.calc__img--show').removeClass("calc__img--show");
			$('.calc__img--gold').addClass("calc__img--show");
		}

		var calc_options_name = '';

		if ( $('#calc_option_1').is(':checked') ){	
			var calc_option_price_1 = calc_option_value_1;
			calc_options_name = calc_options_name + " | " + $('#calc_option_1').next().text();
			$('.calc__img--add1').addClass("calc__img--show");	
		} else {	
			var calc_option_price_1 = 0;
			$('.calc__img--add1').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_2').is(':checked') ){	
			var calc_option_price_2 = calc_option_value_2;
			calc_options_name = calc_options_name + " | " + $('#calc_option_2').next().text();
			$('.calc__img--add2').addClass("calc__img--show");	
		} else {	
			var calc_option_price_2 = 0;
			$('.calc__img--add2').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_3').is(':checked') ){	
			var calc_option_price_3 = calc_option_value_3;
			calc_options_name = calc_options_name + " | " + $('#calc_option_3').next().text();
			$('.calc__img--add3').addClass("calc__img--show");	
		} else {	
			var calc_option_price_3 = 0;
			$('.calc__img--add3').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_4').is(':checked') ){	
			var calc_option_price_4 = calc_option_value_4;
			calc_options_name = calc_options_name + " | " + $('#calc_option_4').next().text();
			$('.calc__img--add4').addClass("calc__img--show");	
		} else {	
			var calc_option_price_4 = 0;
			$('.calc__img--add4').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_5').is(':checked') ){	
			var calc_option_price_5 = calc_option_value_5;
			calc_options_name = calc_options_name + " | " + $('#calc_option_5').next().text();
			$('.calc__img--add5').addClass("calc__img--show");	
		} else {	
			var calc_option_price_5 = 0;
			$('.calc__img--add5').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_6').is(':checked') ){	
			var calc_option_price_6 = calc_option_value_6;
			calc_options_name = calc_options_name + " | " + $('#calc_option_6').next().text();
			$('.calc__img--add6').addClass("calc__img--show");	
		} else {	
			var calc_option_price_6 = 0;
			$('.calc__img--add6').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_7').is(':checked') ){	
			var calc_option_price_7 = calc_option_value_7;
			calc_options_name = calc_options_name + " | " + $('#calc_option_7').next().text();
			$('.calc__img--add7').addClass("calc__img--show");	
		} else {	
			var calc_option_price_7 = 0;
			$('.calc__img--add7').removeClass("calc__img--show");	
		}
		if ( $('#calc_option_8').is(':checked') ){	
			var calc_option_price_8 = calc_option_value_8;
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