$(document).ready(function() {

	$('.calc__select').click(function(){
		$(this).toggleClass("calc__select--open");
		$(".calc__list").toggleClass("calc__list--open");
	});

	$('.calc__li').click(function(e){
		var calc_select_text = $(this).text();
		$('.calc__current').text( calc_select_text );

	});

	$('#calc_btn').click(function(){
		calculation();
	});

	function calculation() {

		var calc_sex = 0;
		var calc_age = 0;
		var calc_hei = 0;
		var calc_wei = 0;
		var calc_activity = 0;
		var calc_goal = 0;

		calc_sex = $('input[name=calc_sex]:checked').val();
		calc_age = $('#calc_age').val();
		calc_hei = $('#calc_hei').val();
		calc_wei = $('#calc_wei').val();
		calc_activity = $('#calc_activity').text();
		calc_goal = $('input[name=calc_goal]:checked').val();

		console.log( calc_sex );
		console.log( calc_age );
		console.log( calc_hei );
		console.log( calc_wei );
		console.log( calc_activity );
		console.log( calc_goal );
		
		if ( (calc_sex != undefined) && (calc_goal != undefined) && (calc_activity != "Не указано") && (calc_age != "") && (calc_hei != "") && (calc_wei != "") ) {
			$('.calc__warning').removeClass("calc__warning--show");
			$('.calc__itog').addClass("calc__itog--show");
	
			if ( calc_activity == "Не указано" ) 					{ calc_k_2 = 0		}
			if ( calc_activity == "Малоподвижный" ) 				{ calc_k_2 = 1.2	}
			if ( calc_activity == "Тренировки 1-3 раза в неделю" ) 	{ calc_k_2 = 1.375	}
			if ( calc_activity == "Тренировки 3-5 раза в неделю" ) 	{ calc_k_2 = 1.55	}
			if ( calc_activity == "Высокие нагрузки каждый день" ) 	{ calc_k_2 = 1.7	}
			if ( calc_activity == "Экстремальные нагрузки" ) 		{ calc_k_2 = 1.9	}
	
			if ( calc_sex == 1 ) {
				var calc_k_1 = 5;
				var calc_formula_2 = ( 88.362 + (13.397 * calc_wei) + (4.799 * calc_hei) - (5.677 * calc_age ) ) * calc_k_2;
			} else {
				var calc_k_1 = -161;
				var calc_formula_2 = ( 447.593 + (9.247 * calc_wei) + (3.098 * calc_hei) - (4.330 * calc_age ) ) * calc_k_2;
			}
	
			var calc_formula_1 = ( (calc_wei * 9.99) + (calc_hei * 6.25) - ( calc_age * 4.92 ) + calc_k_1 ) * calc_k_2;
			var calc_formula_3 = calc_wei * calc_k_2;
	
			$('#cacl_formula_1').text("По формуле Миффлина-Сан Жеора: " + calc_formula_1.toFixed(0) );
			$('#cacl_formula_2').text("По формуле Харриса-Бенедикта: " + calc_formula_2.toFixed(0) );
			$('#cacl_formula_3').text("По среднему расходу на килограмм: " + (calc_formula_3 * 22).toFixed(0) + " – " + (calc_formula_3 * 26).toFixed(0) );

			if ( calc_goal == 1 ) { 
				$('#calc_goal_title').text("Ориентиры для сброса веса:");
				$('#calc_text_goal').text("Это пример текста который зависит от цели. Сейчас цель – сбросить вес.");
				var calc_formula_4 = (calc_formula_1 + calc_formula_2) / 2;
				$('#calc_formula_4').text("Диапазон калорий: " + (calc_formula_4 * 0.8).toFixed(0) + " – " + (calc_formula_4 * 0.9).toFixed(0) );
				$('#calc_formula_5').text("Суточная норма белка: " + (calc_formula_4 * 0.85 * 0.3 / 4).toFixed(0) + " грамм");
				$('#calc_formula_6').text("Суточная норма жиров: " + (calc_formula_4 * 0.85 * 0.2 / 9).toFixed(0) + " грамм");
				$('#calc_formula_7').text("Суточная норма углеводов: " + (calc_formula_4 * 0.85 * 0.5 / 4).toFixed(0) + " грамм");

				var calc_text_param = calc_formula_4 * 0.9;
			}
			if ( calc_goal == 2 ) { 
				$('#calc_goal_title').text("Ориентиры для набора мышечной массы:");
				$('#calc_text_goal').text("Это пример текста который зависит от цели. Сейчас цель – набрать мышечную массу.");
				var calc_formula_4 = (calc_formula_1 + calc_formula_2) / 2;
				$('#calc_formula_4').text("Диапазон калорий: " + (calc_formula_4 * 1.1).toFixed(0) + " – " + (calc_formula_4 * 1.2).toFixed(0) );
				$('#calc_formula_5').text("Суточная норма белка: " + (calc_formula_4 * 1.15 * 0.3 / 4).toFixed(0) + " грамм");
				$('#calc_formula_6').text("Суточная норма жиров: " + (calc_formula_4 * 1.15 * 0.3 / 9).toFixed(0) + " грамм");
				$('#calc_formula_7').text("Суточная норма углеводов: " + (calc_formula_4 * 1.15 * 0.4 / 4).toFixed(0) + " грамм");

				var calc_text_param = calc_formula_4 * 1.2;
			}
			if ( calc_goal == 3 ) { 
				$('#calc_goal_title').text("Ориентиры для поддержания веса:");
				$('#calc_text_goal').text("Это пример текста который зависит от цели. Сейчас цель – поддерживать вес.");
				var calc_formula_4 = (calc_formula_1 + calc_formula_2) / 2;
				$('#calc_formula_4').text("Диапазон калорий: " + (calc_formula_4 * 0.9).toFixed(0) + " – " + calc_formula_4.toFixed(0) );
				$('#calc_formula_5').text("Суточная норма белка: " + (calc_formula_4 * 0.95 * 0.3 / 4).toFixed(0) + " грамм");
				$('#calc_formula_6').text("Суточная норма жиров: " + (calc_formula_4 * 0.95 * 0.3 / 9).toFixed(0) + " грамм");
				$('#calc_formula_7').text("Суточная норма углеводов: " + (calc_formula_4 * 0.95 * 0.4 / 4).toFixed(0) + " грамм");

				var calc_text_param = calc_formula_4 * 1;
			}

			if ( calc_text_param < 1500 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 1500." ); 
			} else {
				if ( calc_text_param < 2000 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 2000." ); 
				} else {
					if ( calc_text_param < 2500 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 2500." ); 
					} else {
						if ( calc_text_param < 3000 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 3000." ); 
						} else {
							if ( calc_text_param < 3500 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 3500." ); 
							} else {
								if ( calc_text_param < 4000 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 4000." ); 
								} else {
									if ( calc_text_param < 4500 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 4500." ); 
									} else {
										if ( calc_text_param < 5000 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон до 5000." ); 
										} else {
											if ( calc_text_param >= 5000 ) { $('#calc_text_value').text( "Это пример текста который зависит от диапазона калорий. Сейчас диапазон от 5000." ); 
											}		}		}		}		}		}		}		}		}


		} else {
			$('.calc__warning').addClass("calc__warning--show");
			$('.calc__itog').removeClass("calc__itog--show");
		}
		
		

	}

	//(88.362 + (13.397 x вес (кг)) + (4.799 x рост (см)) - (5.677 x возраст (г))) * А - для мужчин;
	//(447.593 + (9.247 x вес (кг)) + (3.098 x рост (см)) - (4.330 x возраст (г))) * А - для женщин

});