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
		step: 500,
		value: 50000,
		min: 1000,
		max: 500000,
		// slide: function( event, ui ) {
		// $( "#calc_slider_input" ).val( "$" + ui.value.toLocaleString("ru") );
		// }
	});

	function calculate(){

		var r1	= $('input[name=1]:checked').val();
		var slider_value = $( "#calc_slider" ).slider( "value" );
		if (r1 == 1) { var calc_currency = "₽" } else { if (r1 == 2) { var calc_currency = "$" } }
		$("#calc_slider_input").val( slider_value.toLocaleString("ru") + " " + calc_currency );

		if ( slider_value >= 150000 ) { var percent = 38; var calc_tarif = "Расширенный"; } else { if ( slider_value >= 50000 ) { var percent = 36; var calc_tarif = "Умеренный"; } else { if ( slider_value < 50000 ) { var percent = 28; var calc_tarif = "Консервативный"; }}}

		var result = +slider_value * +Math.pow(( 1 + (+percent / 100 / 12) ),12) - +slider_value;
		result = result.toFixed(0);

		$("#calc_itog").text( "≈ " + result.toLocaleString("ru") + " " + calc_currency );

		$(".calc__right__column__tarif__result").text( calc_tarif );


		var calc_grow_height = 100 + (46 * +slider_value / 100000);

		$(".calc__right__column__grow").css("height", +calc_grow_height );

	}
	calculate();

	$( ".ui-slider-handle" ).mousedown(function(){
		setInterval( calculate, 50 );
	});

});