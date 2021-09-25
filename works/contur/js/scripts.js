$(document).ready(function() {

	$("#calc_slider_1").slider({
		animate: "slow",
		range: "min",
		value: 2,
		step: 1,
		min: 1,
		max: 9,
		slide : function(event, ui) {
			$("#calc_input_1").val(ui.value);
			dots();
			calculation();
		}
	});
	$( "#calc_input_1" ).val($( "#calc_slider_1" ).slider( "value" ));
	
	// $('#calc_input_1').on("change", function(){
	// 	var sliderInput = $(this).val();
	// 	$( "#calc_slider_1" ).slider( "value", sliderInput );
	// 	calculation();
	// });

	function dots() {

		var slider_value = $( "#calc_input_1" ).val();

		$('.calc__dot').each(function(){
			if ( $(this).data('slider') < slider_value ) {
				$(this).addClass("calc__dot--color");
			} else {
				$(this).removeClass("calc__dot--color");
			}
		});

	}


	$('input[name=calc_vigruzka]').change(function(){
		if ( $('input[name=calc_vigruzka]:checked').val() == 1 ) {
			$('input[name=calc_want]').prop("checked", false);
			$('.calc__name--btn').addClass("calc__name--gray");
			$('.calc__options--extend').addClass("calc__options--gray");
		} else {
			$('.calc__name--btn').removeClass("calc__name--gray");
			$('.calc__options--extend').removeClass("calc__options--gray");
		}
		calculation();
	});

	$('input[name=calc_want]').change(function(){
		$('#calc_vigruzka_2').prop("checked", true);
		if ( $('input[name=calc_vigruzka]:checked').val() == 1 ) {
			$('.calc__name--btn').addClass("calc__name--gray");
			$('.calc__options--extend').addClass("calc__options--gray");
		} else {
			$('.calc__name--btn').removeClass("calc__name--gray");
			$('.calc__options--extend').removeClass("calc__options--gray");
		}
		if ( $('input[name=calc_want]').is(":checked") == false ) {
			$('#calc_vigruzka_1').prop("checked", true);
			if ( $('input[name=calc_vigruzka]:checked').val() == 1 ) {
				$('.calc__name--btn').addClass("calc__name--gray");
				$('.calc__options--extend').addClass("calc__options--gray");
			} else {
				$('.calc__name--btn').removeClass("calc__name--gray");
				$('.calc__options--extend').removeClass("calc__options--gray");
			}
		}
		calculation();
	});

	$('input[name=calc_srok]').change(function(){
		calculation();
	});
	
	$('.calc__select').click(function(){
		$('.calc__drop').toggleClass("calc__drop--open");
	});

	$('.calc__drop').click(function(){
		let text_1 = $('.calc__current').text();
		let text_2 = $('.calc__drop').text();

		$('.calc__current').text(text_2);
		$('.calc__drop').text(text_1);
		calculation();
	});

	calculation();
	function calculation() {

		var calc_slider = $( "#calc_input_1" ).val();
		// var calc_time = $('input[name=calc_srok]:checked').val();
		// var calc_time_name = $('input[name=calc_srok]:checked').next().text();
		var calc_time = $('.calc__current').text();
		var calc_vigruzka = $('input[name=calc_vigruzka]:checked').val();
		var calc_vigruzka_name = $('input[name=calc_vigruzka]:checked').next().text();

		if ( calc_slider == 1 ) { var calc_tarif = "до 50 организаций ежемесячно"; }
		if ( calc_slider == 2 ) { var calc_tarif = "до 400 организаций ежемесячно"; }
		if ( calc_slider == 3 ) { var calc_tarif = "до 800 организаций ежемесячно"; }
		if ( calc_slider == 4 ) { var calc_tarif = "до 1500 организаций ежемесячно"; }
		if ( calc_slider == 5 ) { var calc_tarif = "до 3 000 организаций ежемесячно"; }
		if ( calc_slider == 6 ) { var calc_tarif = "до 6 000 организаций ежемесячно"; }
		if ( calc_slider == 7 ) { var calc_tarif = "до 12 000 организаций ежемесячно"; }
		if ( calc_slider == 8 ) { var calc_tarif = "до 24 000 организаций ежемесячно"; }
		if ( calc_slider == 9 ) { var calc_tarif = "Нужно больше 24000 организаций ежемесячно"; }

		$('.calc__tarif').text( calc_tarif );


		if ( calc_time == "на 1 год" ) {
			if ( calc_vigruzka == 1) {
				if ( calc_slider == 1 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Бесплатно по заявке"; }
				if ( calc_slider == 2 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "13 500 ₽ в год"; }
				if ( calc_slider == 3 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "20 300 ₽ в год"; }
				if ( calc_slider == 4 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "28 500 ₽ в год"; }
				if ( calc_slider == 5 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "42 700 ₽ в год"; }
				if ( calc_slider == 6 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "64 100 ₽ в год"; }
				if ( calc_slider == 7 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "96 100 ₽ в год"; }
				if ( calc_slider == 8 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "144 200 ₽ в год"; }
				if ( calc_slider == 9 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Цена по запросу"; }
			} else {
				if ( calc_slider == 1 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Недоступно"; }
				if ( calc_slider == 2 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "16 900 ₽ в год"; }
				if ( calc_slider == 3 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "25 300 ₽ в год"; }
				if ( calc_slider == 4 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "35 600 ₽ в год"; }
				if ( calc_slider == 5 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "53 400 ₽ в год"; }
				if ( calc_slider == 6 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "80 100 ₽ в год"; }
				if ( calc_slider == 7 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "120 100 ₽ в год"; }
				if ( calc_slider == 8 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "180 200 ₽ в год"; }
				if ( calc_slider == 9 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Цена по запросу"; }
			}
		} else {
			if ( calc_vigruzka == 1) {
				if ( calc_slider == 1 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Бесплатно по заявке"; }
				if ( calc_slider == 2 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "9 000 ₽ за 6 месяцев"; }
				if ( calc_slider == 3 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "13 500 ₽ за 6 месяцев"; }
				if ( calc_slider == 4 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "19 000 ₽ за 6 месяцев"; }
				if ( calc_slider == 5 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "28 500 ₽ за 6 месяцев"; }
				if ( calc_slider == 6 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "42 700 ₽ за 6 месяцев"; }
				if ( calc_slider == 7 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "64 100 ₽ за 6 месяцев"; }
				if ( calc_slider == 8 ) { $('.calc__alert').addClass("calc__alert--show"); var calc_price = "144 200 ₽ в год*"; }
				if ( calc_slider == 9 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Цена по запросу"; }
			} else {
				if ( calc_slider == 1 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Недоступно"; }
				if ( calc_slider == 2 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "11 300 ₽ за 6 месяцев"; }
				if ( calc_slider == 3 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "16 900 ₽ за 6 месяцев"; }
				if ( calc_slider == 4 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "23 700 ₽ за 6 месяцев"; }
				if ( calc_slider == 5 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "35 600 ₽ за 6 месяцев"; }
				if ( calc_slider == 6 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "53 400 ₽ за 6 месяцев"; }
				if ( calc_slider == 7 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "80 100 ₽ за 6 месяцев"; }
				if ( calc_slider == 8 ) { $('.calc__alert').addClass("calc__alert--show"); var calc_price = "180 200 ₽ в год*"; }
				if ( calc_slider == 9 ) { $('.calc__alert').removeClass("calc__alert--show"); var calc_price = "Цена по запросу"; }
			}
		}


		$('.calc__itog').text( calc_price );



		$('#form_textarea').val(
			"Тип выгрузки: " + calc_vigruzka_name + " <br>" + " \n" +
			"Срок: " + calc_time + " <br>" + " \n" +
			"Тариф: " + calc_tarif + " <br>" + " \n" +
			"Стоимость: " + calc_price
		);

	}


	$('.calc__btn').click(function(){
		$('.black').addClass("black--show");
	});

	$('.form__close').click(function(){
		$('.black').removeClass("black--show");
	});

});