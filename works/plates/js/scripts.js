$(document).ready(function() {

	$('.calc__btn').on("click", function(){

		var calc_price_auto = 1; // цена автоматической пайки
		var calc_price_hand = 2; // цена ручной пайки
		
		var calc_amount = +$('#calc_amount').val();
		var calc_auto = +$('#calc_auto').val();
		var calc_hand = +$('#calc_hand').val();

		$('#calc_itog').val( calc_amount * ((calc_auto * +calc_price_auto) + (calc_hand * +calc_price_hand)) + " руб." );

	});

});