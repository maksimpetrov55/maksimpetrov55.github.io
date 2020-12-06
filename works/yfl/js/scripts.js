$(document).ready(function() {

	$("#slider_1").slider({
		animate: "slow",
		//orientation: "vertical",
		range: "min",
		value: 20,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_1_in").val(ui.value);
			calculation();
		}
	});
	$( "#slider_1_in" ).val( $( "#slider_1" ).slider( "value" ) );
	
	$("#slider_2").slider({
		animate: "slow",
		//orientation: "vertical",
		range: "min",
		value: 2,
		step: 1,
		min: 1,
		max: 200,
		slide : function(event, ui) {
			$("#slider_2_in").val(ui.value);
			calculation();
		}
	});
	$( "#slider_2_in" ).val( $( "#slider_2" ).slider( "value" ) );

	$('#calc_yfl').on("input", function(){
		calculation();
	});

	calculation();

	function calculation() {

		var calc_yfl = $('#calc_yfl').val();

		var calc_slider_1_val = $( "#slider_1_in" ).val();
		$('#calc_slider_1_val').text( calc_slider_1_val + "%" );

		var calc_slider_2_val = +$( "#slider_2_in" ).val();
		$('#calc_slider_2_val').text( "$ " + calc_slider_2_val.toLocaleString("en") + ",000,000" );


		var calc_itog_1 = +calc_yfl / (+calc_slider_1_val * 50000 / 100) * (0.05 / 100 * +calc_slider_2_val * 1000000);
		var calc_itog_2 = +calc_itog_1 * 7;
		var calc_itog_3 = +calc_itog_1 * 30;
		var calc_itog_4 = +calc_itog_1 * 365;

		$('#calc_itog_1').text( "$ " + calc_itog_1.toLocaleString("en") );
		$('#calc_itog_2').text( "$ " + calc_itog_2.toLocaleString("en") );
		$('#calc_itog_3').text( "$ " + calc_itog_3.toLocaleString("en") );
		$('#calc_itog_4').text( "$ " + calc_itog_4.toLocaleString("en") );

		
	}

});