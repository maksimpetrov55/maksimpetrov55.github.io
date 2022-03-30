$(document).ready(function() {

	$("#calc_slider").slider({
		animate: "slow",
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 120,
		slide : function(event, ui) {
			$("#calc_kolvoSmen").val(ui.value);
			calculation();
		}
	});
	$( "#calc_kolvoSmen" ).val($( "#calc_slider" ).slider( "value" ));
	
	$('#calc_kolvoSmen').on("change", function(){
		if ( $(this).val() > 120 ) {
			$(this).val(120);
		}
		if ( $(this).val() < 1 ) {
			$(this).val(1);
		}
		var sliderInput = $(this).val();
		$( "#calc_slider" ).slider( "value", sliderInput );
		calculation();
	});
	

	$('.calc__btn').click(function(){
		$('.calc__window').addClass("calc__window--open");
	});

	$('.calc__close').click(function(){
		$('.calc__window').removeClass("calc__window--open");
	});

	$('#calc_distance').change(calculation);


	calculation();
	function calculation() {

		var calc_delivery = $('#calc_distance').val();

		var calc_distance = $('#calc_distance option:selected').text();

		$('#calc_delivery').text(calc_delivery);

		var calc_smena = $('#calc_smena').data("val");
		var calc_kolvoSmen = $('#calc_kolvoSmen').val();
		
		var calc_sum = (calc_kolvoSmen * calc_smena) + +calc_delivery;


		$('#calc_itog').text( "Количество смен (" + calc_kolvoSmen + ") x Аренда техники (" + calc_smena.toLocaleString("ru") + " ₽) + Доставка (" + calc_delivery + " ₽) = " + calc_sum.toLocaleString("ru") + " ₽" );

		$('#calc_price').text( calc_sum.toLocaleString("ru") + " ₽" );

		$('#calc_data').val(
			"Стоимость смены: " + calc_smena + " ₽" + " <br>" + " \n" +
			"Количество смен: " + calc_kolvoSmen + " <br>" + " \n" +
			"Дистанция: " + calc_distance + " <br>" + " \n" +
			"Итого: " + calc_sum.toLocaleString("ru") + " ₽"
		);


		if ( calc_kolvoSmen < 4 ) {
			$('#calc_economy').text("0 ₽");
		}
		if ( calc_kolvoSmen >= 4 ) {
			$('#calc_economy').text( calc_kolvoSmen * 500 + " ₽");
		}
		if ( calc_kolvoSmen >= 8 ) {
			$('#calc_economy').text( calc_kolvoSmen * 1000 + " ₽");
		}
		if ( calc_kolvoSmen >= 20 ) {
			$('#calc_economy').text( calc_kolvoSmen * 1300 + " ₽");
		}


		if ( calc_kolvoSmen >= 20 ) {
			$('#calc_note').text("");
		} 
		if ( calc_kolvoSmen < 20 ) {
			$('#calc_note').html(`А при оплате сразу за 20 смен стоимость аренды с доставкой техники выйдет дешевле на <b>26 000 ₽</b>`);
		} 
		if ( calc_kolvoSmen < 7 ) {
			$('#calc_note').html(`А при оплате сразу за 8 смен стоимость аренды с доставкой техники выйдет дешевле на <b>8 000 ₽</b>`);
		}
		if ( calc_kolvoSmen < 4 ) {
			$('#calc_note').html(`А при оплате сразу за 4 смены стоимость аренды с доставкой техники выйдет дешевле на <b>2 000 ₽</b>`);
		}


	}

});