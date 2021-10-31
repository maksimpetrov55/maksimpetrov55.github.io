$(document).ready(function() {

	$("#calc_slider").slider({
		animate: "slow",
		range: "min",
		value: 25000000,
		step: 500000,
		min: 1000000,
		max: 50000000,
		slide : function(event, ui) {
			$("#calc_input").val(ui.value);
			calculation();
		}
	});

	$( "#calc_input" ).val($( "#calc_slider" ).slider( "value" ));

	$('#calc_input').on("change", function(){
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




	$('.calc__current').click(function(){
		$('.calc__list').toggleClass("calc__list--open");
		calculation();
	});
	$('.calc__li').click(function(){
		$('.calc__list').toggleClass("calc__list--open");

		$('.calc__current').text( $(this).text() );
		$('.calc__current').attr('data-value', $(this).data("value"));
		$('.calc__rate').text($(this).data("value"));
		calculation();
	});






	calculation();
	function calculation() {

		var calc_value = $( "#calc_input" ).val().split(" ").join('');
		var calc_rate = $('.calc__rate').text();


		$('.calc__sum').text( (calc_value * calc_rate).toLocaleString("ru") + " ₽" );
		
		$('input').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		});
	}

});