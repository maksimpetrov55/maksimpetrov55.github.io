$(document).ready(function() {

	$('#calc_step_1').css({display: "none"});
	$('#calc_step_2').css({display: "none"});
	$('#calc_step_3').css({display: "none"});
	$('#calc_step_4').css({display: "none"});
	$('#calc_result').css({display: "none"});

	$('#calc_btn_start').click(function(){
		$('#calc_step_start').css({display: "none"});
		$('#calc_step_1').css({display: "block"});
	});

	$('#calc_btn_1').click(function(){
		$('#calc_step_1').css({display: "none"});
		$('#calc_step_2').css({display: "block"});
	});

	$('#calc_btn_2').click(function(){
		$('#calc_step_2').css({display: "none"});
		$('#calc_step_3').css({display: "block"});
	});

	$('#calc_btn_3').click(function(){
		$('#calc_step_3').css({display: "none"});
		$('#calc_step_4').css({display: "block"});
	});

	$('#calc_back_1').click(function(){
		$('#calc_step_1').css({display: "none"});
		$('#calc_step_start').css({display: "block"});
	});

	$('#calc_back_2').click(function(){
		$('#calc_step_2').css({display: "none"});
		$('#calc_step_1').css({display: "block"});
	});
	
	$('#calc_back_3').click(function(){
		$('#calc_step_3').css({display: "none"});
		$('#calc_step_2').css({display: "block"});
	});
	
	$('#calc_back_4').click(function(){
		$('#calc_step_4').css({display: "none"});
		$('#calc_step_3').css({display: "block"});
	});

	$('#calc_btn_4').click(function(){

		if (
			$('input[name=calc_sex]').val() > 0 &&
			$('#calc_weight').val() != "" &&
			$('#calc_age').val() != "" &&
			$('#calc_height').val() != "" &&
			$('input[name=calc_activity]').val() > 0
		) {
			$('#calc_step_4').css({display: "none"});
			$('#calc_result').css({display: "block"});
			calculation();
		} else {
			alert("Пожалуйста заполните все поля!");
		}

	});

	function calculation() {

		var calc_sex = $('input[name=calc_sex]').val();
		var calc_weight = $('#calc_weight').val();
		var calc_age = $('#calc_age').val();
		var calc_height = $('#calc_height').val();
		var calc_now = $('#calc_now').val();
		var calc_activity = $('input[name=calc_activity]').val();

		if ( calc_sex == 2 ) {
			var calc_BMR = ( 10 * calc_now ) + ( 6.25 * calc_height ) - ( 5 * calc_age ) + 5;
		} else {
			var calc_BMR = ( 10 * calc_now ) + ( 6.25 * calc_height ) - ( 5 * calc_age ) - 161;
		}

		var calc_norma = calc_BMR * calc_activity

		$('#weight_1').text( (+calc_now).toFixed(1) );
		$('#weight_2').text( (+calc_now * 0.990).toFixed(1) );
		$('#weight_3').text( (+calc_now * 0.98).toFixed(1) );
		$('#weight_4').text( (+calc_now * 0.975).toFixed(1) );

		$('#calc_calory').text( calc_BMR + " ккал" );


		$('#result_kg_1').text( (calc_now * 0.005).toFixed(1) + " кг" );
		$('#result_kg_2').text( (calc_now * 0.01).toFixed(1) + " кг" );
		$('#result_kg_3').text( (calc_now * 0.015).toFixed(1) + " кг" );

		$('#result_calory_1').text( (calc_BMR * 0.85).toFixed(0) + " ккал");
		$('#result_calory_2').text( (calc_BMR * 0.75).toFixed(0) + " ккал");
		$('#result_calory_3').text( (calc_BMR * 0.65).toFixed(0) + " ккал");


	}

});