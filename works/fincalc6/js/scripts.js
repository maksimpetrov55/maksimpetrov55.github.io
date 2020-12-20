$(document).ready(function() {

	
	$('input[type=radio]').click(function(){
		counting();
	});

	function counting() {

		var test_radio_1 = $('input[name=question_1]:checked').val();
		var test_radio_2 = $('input[name=question_2]:checked').val();
		var test_radio_3 = $('input[name=question_3]:checked').val();
		var test_radio_4 = $('input[name=question_4]:checked').val();
		var test_radio_5 = $('input[name=question_5]:checked').val();
		var test_radio_6 = $('input[name=question_6]:checked').val();
		var test_radio_7 = $('input[name=question_7]:checked').val();
		var test_radio_8 = $('input[name=question_8]:checked').val();
		var test_radio_9 = $('input[name=question_9]:checked').val();

		console.clear();

		console.log(test_radio_1);
		console.log(test_radio_2);
		console.log(test_radio_3);
		console.log(test_radio_4);
		console.log(test_radio_5);
		console.log(test_radio_6);
		console.log(test_radio_7);
		console.log(test_radio_8);
		console.log(test_radio_9);

		var test_part1 = +test_radio_1 + +test_radio_2 + +test_radio_3 + +test_radio_4 + +test_radio_5 + +test_radio_6;

		console.log(test_part1);

		var test_type_1 = "Консервативный";
		var test_type_2 = "Умеренно-Консервативный";
		var test_type_3 = "Умеренный";
		var test_type_4 = "Умеренно-Агрессивный";
		var test_type_5 = "Агрессивный";

		
		if ( test_part1 > 0 )  {
			if ( (test_radio_3 > 1) && (test_radio_7 == 3) ) {
				var test_type_itog = test_type_2;
			} else {
				var test_type_itog = test_type_1;
			}
		}
		if ( test_part1 > 15 ) {
			if ( (test_radio_1 == 1) && (test_radio_7 <= 2) ) {
				var test_type_itog = test_type_1;
			} else {
				if ( (test_radio_1 == 9) && (test_radio_7 == 3) ) {
					var test_type_itog = test_type_3;
				} else {
					var test_type_itog = test_type_2;
				}
			}
		}
		if ( test_part1 > 25 ) {
			if ( (test_radio_1 <= 5) && (test_radio_7 <= 2) ) {
				var test_type_itog = test_type_2;
			} else {
				if ( (test_radio_1 >= 7) && (test_radio_7 == 3) ) {
					var test_type_itog = test_type_4;
				} else {
					var test_type_itog = test_type_3;
				}
			}
		}
		if ( test_part1 > 34 ) {
			if ( (test_radio_8 == 1) && (test_radio_7 <= 2) ) {
				var test_type_itog = test_type_3;
			} else {
				if ( (test_radio_8 == 1) && (test_radio_7 == 3) ) {
					var test_type_itog = test_type_4;
				} else {
					if ( (test_radio_9 <= 2) && (test_radio_8 == 2) && (test_radio_7 == 1) ) {
						var test_type_itog = test_type_3;
					} else {
						if ( (test_radio_9 == 1) && (test_radio_8 == 2) && (test_radio_7 == 2) ) {
							var test_type_itog = test_type_4;
						} else {
							if ( (test_radio_9 == 1) && (test_radio_8 == 2) && (test_radio_7 == 3) ) {
								var test_type_itog = test_type_5;
							} else {
								if ( (test_radio_9 == 2) && (test_radio_8 == 2) && (test_radio_7 == 2) ) {
									var test_type_itog = test_type_3;
								} else {
									if ( (test_radio_9 == 2) && (test_radio_8 == 2) && (test_radio_7 == 3) ) {
										var test_type_itog = test_type_4;
									}
								}
							}
						}
					}
				}
			}
		}
		if ( test_part1 > 44 ) {
			if ( test_radio_7 == 1 ) {
				var test_type_itog = test_type_3;
			} else {
				var test_type_itog = test_type_5;
			}
		}

		var test_answers = +test_radio_1 + +test_radio_2 + +test_radio_3 + +test_radio_4 + +test_radio_5 + +test_radio_6 + +test_radio_7 + +test_radio_8 + +test_radio_9;

		if ( test_answers > 0 ) {
			$('.test__result').text("Быллы: " + test_part1 + "; Тип: " + test_type_itog);
		}

		
	}


});