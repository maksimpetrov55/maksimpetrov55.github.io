$(document).ready(function() {

	
	$('.calc__btn').click(function(){

		var calc_input_1 = $('#calc_input_1').val();
		var calc_input_2 = $('#calc_input_2').val();
		var calc_input_3 = $('#calc_input_3').val();
		var calc_input_4 = $('#calc_input_4').val();
		var calc_input_5 = $('#calc_input_5').val();
		var calc_input_6 = $('#calc_input_6').val();

		var calc_value = calc_input_3 / calc_input_4;
		

		if ( calc_value > 1000  ) {var calc_tarif = 1.65;}
		if ( calc_value <= 1000 ) {var calc_tarif = 1.80;}
		if ( calc_value <= 900  ) {var calc_tarif = 1.95;}
		if ( calc_value <= 800  ) {var calc_tarif = 2.10;}
		if ( calc_value <= 700  ) {var calc_tarif = 2.25;}
		if ( calc_value <= 600  ) {var calc_tarif = 2.40;}
		if ( calc_value <= 500  ) {var calc_tarif = 2.70;}
		if ( calc_value <= 400  ) {var calc_tarif = 2.85;}
		if ( calc_value <= 350  ) {var calc_tarif = 3.00;}
		if ( calc_value <= 300  ) {var calc_tarif = 3.15;}
		if ( calc_value <= 250  ) {var calc_tarif = 3.30;}
		if ( calc_value <= 200  ) {var calc_tarif = 3.45;}
		if ( calc_value <= 190  ) {var calc_tarif = 3.60;}
		if ( calc_value <= 180  ) {var calc_tarif = 3.75;}
		if ( calc_value <= 170  ) {var calc_tarif = 3.90;}
		if ( calc_value <= 160  ) {var calc_tarif = 4.05;}
		if ( calc_value <= 150  ) {var calc_tarif = 4.20;}
		if ( calc_value <= 140  ) {var calc_tarif = 4.35;}
		if ( calc_value <= 130  ) {var calc_tarif = 4.50;}
		if ( calc_value <= 120  ) {var calc_tarif = 4.65;}
		if ( calc_value <= 110  ) {var calc_tarif = 4.80;}
		if ( calc_value <= 100  ) {var calc_tarif = 500;}


		

		if ( calc_value <= 100  ) {
			var calc_price = calc_input_4 * calc_tarif;
		} else {
			var calc_price = calc_input_3 * calc_tarif;
		}

		var calc_one = calc_price / calc_input_2 * calc_input_5;

		$('.calc__result').removeClass("calc__result--hide");

		$('#calc_itog_1').text("$" + calc_tarif.toFixed(2) + " за кг");
		$('#calc_itog_2').text("$" + calc_price.toFixed(2));
		$('#calc_itog_3').text(calc_one.toFixed(2) + " ₽");
		

	});


});