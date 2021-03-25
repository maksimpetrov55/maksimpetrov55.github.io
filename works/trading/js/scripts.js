$(document).ready(function() {

	
	$('.calc__input, .calc__rate').on("change", function(){
		calculate();
	});

	calculate();

	function calculate() {
		var long_num_in = +$('#long_num_in').val();
		var long_num_size = +$('#long_num_size').val();
		var long_num_priceTP = +$('#long_num_priceTP').val();
		var long_num_priceSL = +$('#long_num_priceSL').val();

		var long_perc_in = +$('#long_perc_in').val();
		var long_perc_size = +$('#long_perc_size').val();
		var long_perc_percTP = +$('#long_perc_percTP').val();
		var long_perc_percSL = +$('#long_perc_percSL').val();
		
		var long_maker = +$('#long_maker').val() / 100;
		var long_taker = +$('#long_taker').val() / 100;


		var short_num_in = +$('#short_num_in').val();
		var short_num_size = +$('#short_num_size').val();
		var short_num_priceTP = +$('#short_num_priceTP').val();
		var short_num_priceSL = +$('#short_num_priceSL').val();
		
		
		var short_perc_in = +$('#short_perc_in').val();
		var short_perc_size = +$('#short_perc_size').val();
		var short_perc_percTP = +$('#short_perc_percTP').val();
		var short_perc_percSL = +$('#short_perc_percSL').val();
		
		
		var short_perc_resultTP = +$('#short_perc_resultTP').val();
		var short_perc_resultSL = +$('#short_perc_resultSL').val();
		var short_maker = +$('#short_maker').val() / 100;
		var short_taker = +$('#short_taker').val() / 100;


		$('#long_num_percTP').val( ((long_num_priceTP - long_num_in) / long_num_in * 100).toFixed(2) );
		$('#long_num_percSL').val( ((long_num_priceSL - long_num_in) / long_num_in * 100 * -1).toFixed(2) );
		$('#long_num_resultTP').val( ((long_num_priceTP - long_num_in) * long_num_size - (long_num_in * long_num_size * long_maker) - (long_num_priceTP * long_num_size * long_maker)).toFixed(2) );
		$('#long_num_resultSL').val( ((long_num_priceSL - long_num_in) * long_num_size - (long_num_in * long_num_size * long_maker) - (long_num_priceSL * long_num_size * long_taker)).toFixed(2) );

		$('#long_perc_priceTP').val( ( long_perc_in + long_perc_in * long_perc_percTP / 100 ).toFixed(2) );
		$('#long_perc_priceSL').val( ( long_perc_in - long_perc_in * long_perc_percSL / 100 ).toFixed(2) );
		var long_perc_priceTP = +$('#long_perc_priceTP').val();
		var long_perc_priceSL = +$('#long_perc_priceSL').val();
		$('#long_perc_resultTP').val( ((long_perc_priceTP - long_perc_in) * long_perc_size - (long_perc_in * long_perc_size * long_maker) - (long_perc_priceTP * long_perc_size * long_maker)).toFixed(2) );
		$('#long_perc_resultSL').val( ((long_perc_priceSL - long_perc_in) * long_perc_size - (long_perc_in * long_perc_size * long_maker) - (long_perc_priceSL * long_perc_size * long_taker)).toFixed(2) );


		$('#short_num_percTP').val( ((short_num_priceTP - short_num_in) / short_num_in * 100  * -1).toFixed(2) );
		$('#short_num_percSL').val( ((short_num_priceSL - short_num_in) / short_num_in * 100).toFixed(2) );
		$('#short_num_resultTP').val( ( (short_num_in - short_num_priceTP ) * short_num_size - (short_num_in * short_num_size * short_maker) - (short_num_priceTP * short_num_size * short_maker) ).toFixed(2) );
		$('#short_num_resultSL').val( ( (short_num_in - short_num_priceSL ) * short_num_size - (short_num_in * short_num_size * short_maker) - (short_num_priceTP * short_num_size * short_taker) ).toFixed(2) );

		$('#short_perc_priceTP').val( ( short_perc_in - (short_perc_in * short_perc_percTP / 100) ).toFixed(2) );
		$('#short_perc_priceSL').val( ( short_perc_in + (short_perc_in * short_perc_percSL / 100) ).toFixed(2) );
		var short_perc_priceTP = +$('#short_perc_priceTP').val();
		var short_perc_priceSL = +$('#short_perc_priceSL').val();
		$('#short_perc_resultTP').val( ( (short_perc_in - short_perc_priceTP ) * short_perc_size - (short_perc_in * short_perc_size * short_maker) - (short_perc_priceTP * short_perc_size * short_maker) ).toFixed(2) );
		$('#short_perc_resultSL').val( ( (short_perc_in - short_perc_priceSL ) * short_perc_size - (short_perc_in * short_perc_size * short_maker) - (short_perc_priceTP * short_perc_size * short_taker) ).toFixed(2) );
	}

	$('.calc__average__input').on("change", function(){
		average();
	});

	function average() {
		var average_price = 0;
		var average_amount = 0;
		var average_total = 0;
		// $('.calc__average__input--price').each(function(){
		// 	average_price = +average_price + +$(this).val();
		// });
		$('.calc__average__input--amount').each(function(){
			average_amount = +average_amount + +$(this).val();
			average_total = (average_total + ( +$(this).val() * +$(this).prev().val()));
		});
		$('#average_itog').val( ( average_total / average_amount ).toFixed(2) )
	}

});