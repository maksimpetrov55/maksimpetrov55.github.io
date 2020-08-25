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
	
			$('#cacl_formula_1').text("По формуле Миффлина-Сан Жеора: " + calc_formula_1.toFixed(0) );
			$('#cacl_formula_2').text("По формуле Харриса-Бенедикта: " + calc_formula_2.toFixed(0) );

			if ( calc_goal == 1 ) { $('#calc_goal_title').text("Ориентиры для сброса веса:"); }
			if ( calc_goal == 2 ) { $('#calc_goal_title').text("Ориентиры для набора мышечной массы:"); }
			if ( calc_goal == 3 ) { $('#calc_goal_title').text("Ориентиры для поддержания веса:"); }

		} else {
			$('.calc__warning').addClass("calc__warning--show");
			$('.calc__itog').removeClass("calc__itog--show");
		}
		
		

	}

	//(88.362 + (13.397 x вес (кг)) + (4.799 x рост (см)) - (5.677 x возраст (г))) * А - для мужчин;
	//(447.593 + (9.247 x вес (кг)) + (3.098 x рост (см)) - (4.330 x возраст (г))) * А - для женщин

});