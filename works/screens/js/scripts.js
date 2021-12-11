$(document).ready(function() {

	$('.calc__minus').click(function(){
		let value = $(this).next().val();
		if ( value <= 0 ) {
			$(this).next().val(0);
		} else {
			$(this).next().val( +value - 1 );
		}
	});

	$('.calc__plus').click(function(){
		let value = $(this).prev().val();
		$(this).prev().val( +value + 1 );
	});

});