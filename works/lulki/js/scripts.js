var time_1 = 240;
var time_2 = 300;
var time_3 = 330;

var price_nds_1 = 800;
var price_nds_2 = 700;
var price_nds_3 = 600;

var price_1 = 650;
var price_2 = 600;
var price_3 = 550;
var price_4 = 500;








$(document).ready(function() {

	$('.calc__close').click(function(){
		$('.calc__black').removeClass("calc__black--show");
	});

	$('.calc__btn').click(function(){
		$('.calc__black').addClass("calc__black--show");
	});

	calculation();

	$('input').on("input",function(){
		calculation();
	});

	$('select').on("change",function(){
		calculation();
	});


	function calculation() {

		var calc_type = $('#calc_type').val();
		var calc_shtuk = $('#calc_shtuk').val();
		var calc_dni = $('#calc_dni').val();

		if( $('#calc_dlina').is(":checked",true) ){
			var calc_dlina_name = "Удлиненная";
		} else {
			var calc_dlina_name = "Обычная";
		}

		if( $('#calc_nds').is(":checked",true) ){
			var calc_nds_name = "с НДС";

			if ( calc_dni <= time_1 ){
				var calc_itog = price_nds_1 * calc_dni;
			}
			if ( calc_dni > time_1 ){
				var calc_itog = (price_nds_1 * time_1) + (price_nds_2 * (+calc_dni - +time_1));
			}
			if ( calc_dni > time_2 ){
				var calc_itog = (price_nds_1 * time_1) + (price_nds_2 * (+time_2 - +time_1)) + (price_nds_3 * (+calc_dni - +time_2));
			}

		} else {
			var calc_nds_name = "без НДС";

			if ( calc_dni <= time_1 ){
				var calc_itog = price_1 * calc_dni;
			}
			if ( calc_dni > time_1 ){
				var calc_itog = (price_1 * time_1) + (price_2 * (+calc_dni - +time_1));
			}
			if ( calc_dni > time_2 ){
				var calc_itog = (price_1 * time_1) + (price_2 * (+time_2 - +time_1)) + (price_3 * (+calc_dni - +time_2));
			}
			if ( calc_dni > time_3 ){
				var calc_itog = (price_1 * time_1) + (price_2 * (+time_2 - +time_1)) + (price_3 * (+time_3 - +time_2)) + (price_4 * (+calc_dni - +time_3));
			}

		}


		var calc_final = calc_itog * calc_shtuk;

		$('.calc__itog').text( calc_final.toFixed(0) + " руб.");

		$('#calc_textarea').val(
			"Тип люльки: " + calc_type + " <br>" + " \n" +
			"Консоль: " + calc_dlina_name + " <br>" + " \n" +
			"Количество: " + calc_shtuk + " <br>" + " \n" +
			"Время в днях: " + calc_dni + " <br>" + " \n" +
			"НДС: " + calc_nds_name + " <br>" + " \n" +
			"Стоимость: " + calc_final + " руб."
		);


	}

});