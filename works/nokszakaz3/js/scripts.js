$(document).ready(function() {


	$("#calc_slider").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 10,
		min: 40,
		max: 150,
		slide : function(event, ui) {
			$("#calc_styajka").val(ui.value);
			calculation();
		}
	});

	$( "#calc_styajka" ).val($( "#calc_slider" ).slider( "value" ));

	$('#calc_styajka').on("change", function(){
		if ( $(this).val() < 40 ) {
			$(this).val(40);
		}
		if ( $(this).val() > 150 ) {
			$(this).val(150);
		}
		var sliderInput = $(this).val();
		$( "#calc_slider" ).slider( "value", sliderInput );
		calculation();
	});





	$('.calc__minus').click(function(){
		let value = $(this).parent().find("input").val();
		if ( value <= 0 ) {
			$(this).parent().find("input").val(0);
		} else {
			$(this).parent().find("input").val( +value - 1 );
		}
	});

	$('.calc__plus').click(function(){
		let value = $(this).parent().find("input").val();
		$(this).parent().find("input").val( +value + 1 );
	});

	$('.calc__input--short').change(function(){
		if ( $(this).val() <= 0 ) {
			$(this).val(0);
		}
	});


	calculation();

	function calculation() {
		console.log(
			calculation
		);
		
	}

});