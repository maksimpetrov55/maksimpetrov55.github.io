$(document).ready(function() {

	$("#calc_slider").slider({
		animate: "slow",
		range: "min",
		value: 25000000,
		step: 500000,
		min: 1000000,
		max: 50000000,
		slide : function(event, ui) {
			$("#calc_credit").val(ui.value);
			calculation();
		}
	});

	$( "#calc_credit" ).val($( "#calc_slider" ).slider( "value" ));

	$('#calc_credit').on("change", function(){
		if ( $(this).val().split(" ").join('') < 500000 ) {
			$(this).val(500000);
		}
		if ( $(this).val().split(" ").join('') > 50000000 ) {
			$(this).val(50000000);
		}
		var sliderInput = $(this).val().split(" ").join('');
		$( "#calc_slider" ).slider( "value", sliderInput );
		calculation();
	});





	$('input[name=calc_type]').change(function(){
		calculation();
	});

	$('input[name=calc_do]').change(function(){
		calculation();
	});

	$('input[name=calc_checkbox]').change(function(){
		calculation();
	});




	calculation();
	function calculation() {

		var calc_value = $( "#calc_credit" ).val().split(" ").join('');


		if ( calc_value > 30000000 ) {
			var calc_price = 200000;
		}
		if ( calc_value < 30000000 ) {
			var calc_price = 100000;
		}
		if ( calc_value < 20000000 ) {
			var calc_price = 50000;
		}
		if ( calc_value < 10000000 ) {
			var calc_price = 0;
		}


		if ( $('#calc_do_4').is(":checked") ){
			$('#calc_checkbox_1').prop("checked", true);
			$('#calc_checkbox_1').prop("disabled", true);
		} else {
			//$('#calc_checkbox_1').prop("checked", false);
			$('#calc_checkbox_1').prop("disabled", false);
		}

		var calc_type = +$('input[name=calc_type]:checked').val();
		var calc_type_name = $('input[name=calc_type]:checked').next().find(".calc__name").text();

		var calc_do = +$('input[name=calc_do]:checked').val();
		var calc_do_name = $('input[name=calc_do]:checked').next().find(".calc__name").text();



		if ( $('#calc_checkbox_1').is(":checked") ){	
			var calc_checkbox_1_name = "Да";
			var calc_checkbox_1 = 50000;
		} else {
			var calc_checkbox_1 = 0;
			var calc_checkbox_1_name = "Нет";
		}
		if ( $('#calc_checkbox_2').is(":checked") ){	
			var calc_checkbox_2_name = "Да";
			var calc_checkbox_2 = 3000;
		} else {
			var calc_checkbox_2 = 0;
			var calc_checkbox_2_name = "Нет";
		}
		if ( $('#calc_checkbox_3').is(":checked") ){	
			var calc_checkbox_3_name = "Да";
			var calc_checkbox_3 = 10000;
		} else {
			var calc_checkbox_3 = 0;
			var calc_checkbox_3_name = "Нет";
		}
		if ( $('#calc_checkbox_4').is(":checked") ){	
			var calc_checkbox_4_name = "Да";
			var calc_checkbox_4 = 0;
		} else {
			var calc_checkbox_4 = 0;
			var calc_checkbox_4_name = "Нет";
		}
		if ( $('#calc_checkbox_5').is(":checked") ){	
			var calc_checkbox_5_name = "Да";
			var calc_checkbox_5 = 5000;
		} else {
			var calc_checkbox_5 = 0;
			var calc_checkbox_5_name = "Нет";
		}
		if ( $('#calc_checkbox_6').is(":checked") ){	
			var calc_checkbox_6_name = "Да";
			var calc_checkbox_6 = 10000;
		} else {
			var calc_checkbox_6 = 0;
			var calc_checkbox_6_name = "Нет";
		}
		if ( $('#calc_checkbox_7').is(":checked") ){	
			var calc_checkbox_7_name = "Да";
			var calc_checkbox_7 = 10000;
		} else {
			var calc_checkbox_7 = 0;
			var calc_checkbox_7_name = "Нет";
		}
		if ( $('#calc_checkbox_8').is(":checked") ){	
			var calc_checkbox_8_name = "Да";
			var calc_checkbox_8 = 5000;
		} else {
			var calc_checkbox_8 = 0;
			var calc_checkbox_8_name = "Нет";
		}
		if ( $('#calc_checkbox_9').is(":checked") ){	
			var calc_checkbox_9_name = "Да";
			var calc_checkbox_9 = 0;
		} else {
			var calc_checkbox_9 = 0;
			var calc_checkbox_9_name = "Нет";
		}
		if ( $('#calc_checkbox_10').is(":checked") ){	
			var calc_checkbox_10_name = "Да";
			var calc_checkbox_10 = 0;
		} else {
			var calc_checkbox_10 = 0;
			var calc_checkbox_10_name = "Нет";
		}
		if ( $('#calc_checkbox_11').is(":checked") ){	
			var calc_checkbox_11_name = "Да";
			var calc_checkbox_11 = 0;
		} else {
			var calc_checkbox_11 = 0;
			var calc_checkbox_11_name = "Нет";
		}
		if ( $('#calc_checkbox_12').is(":checked") ){	
			var calc_checkbox_12_name = "Да";
			var calc_checkbox_12 = 0;
		} else {
			var calc_checkbox_12 = 0;
			var calc_checkbox_12_name = "Нет";
		}
		if ( $('#calc_checkbox_13').is(":checked") ){	
			var calc_checkbox_13_name = "Да";
			var calc_checkbox_13 = 20000;
		} else {
			var calc_checkbox_13 = 0;
			var calc_checkbox_13_name = "Нет";
		}
		if ( $('#calc_checkbox_14').is(":checked") ){	
			var calc_checkbox_14_name = "Да";
			var calc_checkbox_14 = 20000;
		} else {
			var calc_checkbox_14 = 0;
			var calc_checkbox_14_name = "Нет";
		}
		if ( $('#calc_checkbox_15').is(":checked") ){	
			var calc_checkbox_15_name = "Да";
			var calc_checkbox_15 = 0;
		} else {
			var calc_checkbox_15 = 0;
			var calc_checkbox_15_name = "Нет";
		}
		if ( $('#calc_checkbox_16').is(":checked") ){	
			var calc_checkbox_16_name = "Да";
			var calc_checkbox_16 = 0;
		} else {
			var calc_checkbox_16 = 0;
			var calc_checkbox_16_name = "Нет";
		}
		

		if ( calc_do_name == 'Сопровождение сделки' ) {
			var calc_price = 0;
			var calc_checkbox_1 = 0;
		}

		var calc_itog = 
		+calc_type + 
		+calc_do + 
		+calc_price + 
		+calc_checkbox_1 + 
		+calc_checkbox_2 + 
		+calc_checkbox_3 + 
		+calc_checkbox_4 + 
		+calc_checkbox_5 + 
		+calc_checkbox_6 + 
		+calc_checkbox_7 + 
		+calc_checkbox_8 + 
		+calc_checkbox_9 + 
		+calc_checkbox_10 + 
		+calc_checkbox_11 + 
		+calc_checkbox_12 + 
		+calc_checkbox_13 + 
		+calc_checkbox_14 + 
		+calc_checkbox_15 + 
		+calc_checkbox_16;

		$('.calc__sum').text( calc_itog.toLocaleString("ru") + " ₽" );

		$('#calc_textarea').val(
			"Тип помещения: " + calc_type_name + " \n" +
			"Что нужно сделать: " + calc_do_name + " \n" +
			"Стоимость недвижимости: " + calc_value.toLocaleString("ru") + " \n" +
			"-----------" + " \n" +
			"Сопровождение сделки: " + calc_checkbox_1_name + " \n" +
			"Юр.проверки объекта: " + calc_checkbox_2_name + " \n" +
			"Ипотека: " + calc_checkbox_3_name + " \n" +
			"Ипотека с кэшбэком: " + calc_checkbox_4_name + " \n" +
			"Сбор документов: " + calc_checkbox_5_name + " \n" +
			"Использование мат.кап.: " + calc_checkbox_6_name + " \n" +
			"Согласование с опекой: " + calc_checkbox_7_name + " \n" +
			"Регистрация док. в МФЦ: " + calc_checkbox_8_name + " \n" +
			"Оценка недвижимости: " + calc_checkbox_9_name + " \n" +
			"Подбор Недвижимости: " + calc_checkbox_10_name + " \n" +
			"Подготовка объекта: " + calc_checkbox_11_name + " \n" +
			"Сделать фотографии: " + calc_checkbox_12_name + " \n" +
			"Выезд на показы: " + calc_checkbox_13_name + " \n" +
			"Выезд на просмотры: " + calc_checkbox_14_name + " \n" +
			"Реклама: " + calc_checkbox_15_name + " \n" +
			"Организация просмотров и показов: " + calc_checkbox_16_name + " \n" +
			"-----------" + " \n" +
			"Итоговая цена: " + calc_itog.toLocaleString("ru") + " руб."
		);








		
		$('#calc_credit').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		});
	}

});