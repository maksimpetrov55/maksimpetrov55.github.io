$(document).ready(function() {

	$('#btn_1').click(function(){
		$('#step_1').addClass("order__step--hide");
		$('#step_2').removeClass("order__step--hide");
	});

	$('#back_2').click(function(){
		$('#step_1').removeClass("order__step--hide");
		$('#step_2').addClass("order__step--hide");
	});

});