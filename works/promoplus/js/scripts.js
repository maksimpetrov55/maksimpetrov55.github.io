$(document).ready(function() {

	$(".calc__left__flex__choice-left").click(function(){
		$("#calc_radio_rub").prop("checked", true);
		$(this).addClass("calc__left__flex__choice--active");
		$(".calc__left__flex__choice-right").removeClass("calc__left__flex__choice--active");
	});
	$(".calc__left__flex__choice-right").click(function(){
		$("#calc_radio_usd").prop("checked", true);
		$(this).addClass("calc__left__flex__choice--active");
		$(".calc__left__flex__choice-left").removeClass("calc__left__flex__choice--active");
	});


	$( "#calc_slider" ).slider({
		range: "min",
		step: 1,
		value: 3,
		min: 0,
		max: 4,
		// slide: function( event, ui ) {
		// $( "#calc_slider_input" ).val( "$" + ui.value.toLocaleString("ru") );
		// }
	});

	function calculate(){

		var calc_tarif = $('input[name=calc_tarif]:checked').val();
		var calc_exp = $('input[name=calc_exp]:checked').val();

		var slider_value = $( "#calc_slider" ).slider( "value" );


		if ( slider_value == 0 ) { var calc_rate = 0; }
		if ( slider_value == 1 ) { var calc_rate = 0.7; }
		if ( slider_value == 2 ) { var calc_rate = 0.9; }
		if ( slider_value == 3 ) { var calc_rate = 1; }
		if ( slider_value == 4 ) { var calc_rate = 1.1; }


		var calc_itog = calc_tarif * calc_exp * calc_rate * 3;

		// var r1	= $('input[name=1]:checked').val();
		
		// if (r1 == 1) { var calc_currency = "₽" } else { if (r1 == 2) { var calc_currency = "$" } }
		// $("#calc_slider_input").val( slider_value.toLocaleString("ru") + " " + " ₽" );

		// if ( slider_value >= 150000 ) { var percent = 38; var calc_tarif = "Расширенный"; } else { if ( slider_value >= 50000 ) { var percent = 36; var calc_tarif = "Умеренный"; } else { if ( slider_value < 50000 ) { var percent = 28; var calc_tarif = "Консервативный"; }}}

		// var result = +slider_value * +Math.pow(( 1 + (+percent / 100 / 12) ),12) - +slider_value;
		// result = result.toFixed(0);

		$("#calc_itog").text( "≈ " + calc_itog.toLocaleString("ru") + " " + " ₽" );

		// $(".calc__right__column__tarif__result").text( calc_tarif );


		var calc_grow_height = 100 + (25 * +calc_itog / 100000);

		$(".calc__right__column__grow").css("height", +calc_grow_height );

	}
	calculate();

	$( ".ui-slider-handle" ).mousedown(function(){
		setInterval( calculate, 50 );
	});

	$('input[name=calc_exp]').change(function(){
		calculate();
	});
	$('input[name=calc_tarif]').change(function(){
		calculate();
	});

});