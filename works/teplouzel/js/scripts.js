$(document).ready(function() {

	$('.calc__input').change(function(){
		if ( $(this).val() < 0 ){
			$(this).val(0);
		}
	});

});