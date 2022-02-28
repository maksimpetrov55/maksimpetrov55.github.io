$(document).ready(function() {

	
	$('input[name=calc_type]').change(function(){
		type_switch();
	});


	$('.calc__button').click(function(){
		calculation();
	});




	type_switch();

	function type_switch() {

		var calc_type = $('input[name=calc_type]:checked').val();

		if( calc_type == "1" ){
			$('#part_1').css({display: "block"});
			$('#part_2').css({display: "none"});
		} else {
			$('#part_1').css({display: "none"});
			$('#part_2').css({display: "block"});
		}
		
	}

	function calculation() {


		var calc_square = $('#calc_square').val();
		var calc_height = $('#calc_height').val();
		var calc_rate = $('#calc_rate').val();
		var calc_people = $('#calc_people').val();
		var calc_activity = $('#calc_activity').val();

		var calc_type = $('input[name=calc_type]:checked').val();


		if( calc_type == "1" ){
			if ( calc_square != "" ) {
				$('.calc__result').css({display: "block"});
				var calc_itog = calc_square * calc_height * calc_rate;
			} else {
				$('.calc__result').css({display: "none"});
			}
		} else {
			if ( calc_people != "" ) {
				$('.calc__result').css({display: "block"});
				var calc_itog = calc_activity * calc_people;
			} else {
				$('.calc__result').css({display: "none"});
			}
		}

		$('.calc__itog').text( calc_itog.toFixed(2) );
		

	}








});