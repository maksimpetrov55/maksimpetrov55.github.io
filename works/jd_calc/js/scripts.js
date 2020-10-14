$(document).ready(function() {


	

	// $('select').on("change", function(){
	// 	calculation();
	// });

	$('#calc_calculate').click(function(){
		var calc_input_1 = $('#calc_input_1').val();
		if ( calc_input_1 != "" ) {
			$('.calc__result').addClass("calc__result--show");
			$('.calc__form').addClass("calc__form--show");
			calculation();
			$('.calc__alert').text( "" );
		} else {
			$('.calc__alert').text( "Пожалуйста введите длину пути" );
			$('.calc__result').removeClass("calc__result--show");
			$('.calc__form').removeClass("calc__form--show");
		}
		
	});

	function calculation() {

		var calc_select_1 = $('#calc_select_1').val();  // Марка рельс
		var calc_input_1 = $('#calc_input_1').val();  	// Длина пути
		var calc_select_2 = $('#calc_select_2').val();  // Длина рельс
		var calc_select_3 = $('#calc_select_3').val();  // Эпюра пути
		var calc_select_4 = $('#calc_select_4').val();  // Тип шпалы
		var calc_select_5 = $('#calc_select_5').val();  // Глубина пропитки
		var calc_select_6 = $('#calc_select_6').val();  // Подкладка
		var calc_select_7 = $('#calc_select_7').val();  // Крепеж
		var calc_select_8 = $('#calc_select_8').val();  // Стыковое скрепление
		var calc_select_9 = $('#calc_select_9').val();  // Накладка

		var calc_itog_1 = Math.ceil((+calc_input_1 / +calc_select_2) * 2);
		var calc_itog_2 = Math.ceil((+calc_input_1 * +calc_select_3) / 1000);
		var calc_itog_3 = +calc_itog_2 * 2;
		var calc_itog_4 = +calc_itog_3 * 5;


		if ( calc_select_9 == "Без накладки" ) {
			var calc_itog_5 = "Без накладки";
		} else {
			var calc_itog_5 = ((+calc_itog_1 * 2) - 4).toFixed(2);
		}


		if ( calc_select_9 == "2Р-65" ) {
			var calc_itog_6 = ((+calc_itog_5 / 2) * 4).toFixed(2) + " шт.";
		} else {
			if ( calc_select_9 == "1Р-65" ) {
				var calc_itog_6 = ((+calc_itog_5 / 2) * 6).toFixed(2) + " шт.";
			} else {
				if ( calc_select_9 == "1Р-50" ) {
					var calc_itog_6 = ((+calc_itog_5 / 2) * 6).toFixed(2) + " шт.";
				} else {
					var calc_itog_6 = "Без скреплений"
				}
			}
		}
		
		if ( calc_select_4 == "I тип деревянная" ) {

			if ( calc_select_5 == "До 3 мм" ) {
				var calc_itog_7 = 1570 * +calc_itog_2;
			} else {
				if ( calc_select_5 == "3-5 мм" ) {
					var calc_itog_7 = 1610 * +calc_itog_2;
				} else {
					if ( calc_select_5 == "От 5 мм" ) {
						var calc_itog_7 = 1740 * +calc_itog_2;
					}
				}
			}
			
		} else {
			if ( calc_select_4 == "II тип деревянная" ) {
				
				if ( calc_select_5 == "До 3 мм" ) {
					var calc_itog_7 = 1200 * +calc_itog_2;
				} else {
					if ( calc_select_5 == "3-5 мм" ) {
						var calc_itog_7 = 1240 * +calc_itog_2;
					} else {
						if ( calc_select_5 == "От 5 мм" ) {
							var calc_itog_7 = 1350 * +calc_itog_2;
						}
					}
				}

			} else {
				if ( calc_select_4 == "Ш1 железобетонная" ) {
					var calc_itog_7 = 2500 * +calc_itog_2;
				}
			}
		}


		if ( calc_itog_5 != "Без накладки" ) {
			calc_itog_5_ht = calc_itog_5 + " шт.";
		} else {
			calc_itog_5_ht = calc_itog_5;
		}

		$('#calc_itog_1').text( calc_itog_1 + " шт.");
		$('#calc_itog_2').text( calc_itog_2 + " шт.");
		$('#calc_itog_3').text( calc_itog_3 + " шт.");
		$('#calc_itog_4').text( calc_itog_4 + " шт.");
		$('#calc_itog_5').text( calc_itog_5_ht );
		$('#calc_itog_6').text( calc_itog_6 );
		$('#calc_itog_7').text( calc_itog_7 + " руб." );



	}

	

});