$(document).ready(function() {

	$("#slider_1").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_1_value").val(ui.value);
			//calculation();
		}
	});
	$( "#slider_1_value" ).val($( "#slider_1" ).slider( "value" ));

	$("#slider_2").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_2_value").val(ui.value);
			//calculation();
		}
	});
	$( "#slider_2_value" ).val($( "#slider_2" ).slider( "value" ));

	$("#slider_3").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_3_value").val(ui.value);
			//calculation();
		}
	});
	$( "#slider_3_value" ).val($( "#slider_3" ).slider( "value" ));

	$("#slider_4").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_4_value").val(ui.value);
			//calculation();
		}
	});
	$( "#slider_4_value" ).val($( "#slider_4" ).slider( "value" ));

	$("#slider_5").slider({
		animate: "slow",
		range: "min",
		value: 50,
		step: 1,
		min: 1,
		max: 100,
		slide : function(event, ui) {
			$("#slider_5_value").val(ui.value);
			//calculation();
		}
	});
	$( "#slider_5_value" ).val($( "#slider_5" ).slider( "value" ));



	$('.calc__btn').click(function(){

		var calc_val_1 = $( "#slider_1_value" ).val();
		var calc_val_2 = $( "#slider_2_value" ).val();
		var calc_val_3 = $( "#slider_3_value" ).val();
		var calc_val_4 = $( "#slider_4_value" ).val();
		var calc_val_5 = $( "#slider_5_value" ).val();

		// console.log( calc_val_1 );
		// console.log( calc_val_2 );
		// console.log( calc_val_3 );
		// console.log( calc_val_4 );
		// console.log( calc_val_5 );

		var calc_result = ((+calc_val_1 + +calc_val_2 + +calc_val_3 + +calc_val_4 + +calc_val_5) / 5) * 1.2;

		$('.calc__age').text("Ожидаемый срок жизни — " + calc_result.toFixed(0) + " лет!")

		if ( calc_result.toFixed(0) > 105 ) {
			$('.calc__result').text("Если вы все правильно оценили, то вы будущий долгожитель!");
		} else {
			if ( calc_result.toFixed(0) > 85 ) {
				$('.calc__result').text("Все не так уж и плохо. Вы создали для себя хорошие условия. Но вам нужно меньше нервничать.");
			} else {
				if ( calc_result.toFixed(0) > 55 ) {
					$('.calc__result').text("Чтобы укрепить здоровье вам нужно тщательней отнестись к своему образу жизни.");
				} else {
					if ( calc_result.toFixed(0) > 20 ) {
						$('.calc__result').text("Вам срочно нужно менять свой образ жизни.");
					} else {
						$('.calc__result').text("Вы не жилец. Если вы еще живы, то вам осталось не долго.");
					}
				}
			}
		}

		$('.calc__link').removeClass("calc__link--hidden");

	});



});