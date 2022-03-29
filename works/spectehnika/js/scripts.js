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
		var sliderInput = $(this).val();
		$( "#calc_slider" ).slider( "value", sliderInput );
		calculation();
	});
	


	$('#calc_distance').change(calculation);


	calculation();
	function calculation() {

		var calc_delivery = $('#calc_distance').val();

		$('#calc_delivery').text(calc_delivery);

		var calc_smena = $('#calc_smena').data("val");
		var calc_kolvoSmen = $('#calc_kolvoSmen').val();
		
		var calc_sum = (calc_kolvoSmen * calc_smena) + +calc_delivery;


		$('#calc_itog').text( "Количество смен (" + calc_kolvoSmen + ") x Аренда техники (" + calc_smena.toLocaleString("ru") + " ₽) + Доставка (" + calc_delivery + " ₽) = " + calc_sum.toLocaleString("ru") + " ₽" );

		$('#calc_price').text( calc_sum.toLocaleString("ru") + " ₽" );

	}

});