$(document).ready(function() {


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


});