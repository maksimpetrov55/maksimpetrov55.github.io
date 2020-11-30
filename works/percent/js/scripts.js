$(document).ready(function() {

	// $('#in1').on("input", function(){

	// 	$('#in1').val(String($('#in1').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

	// 	var arr = $('#in1').val().split(' ');
	// 	var length = arr.length;

	// 	if ( length == 1 ) {
	// 		var val1 = arr[0];
	// 	} else {
	// 		if ( length == 2 ) {
	// 			var val1 = arr[0] + arr[1];
	// 		} else {
	// 			if ( length == 3 ) {
	// 				var val1 = arr[0] + arr[1] + arr[2];
	// 			} else {
	// 				if ( length == 4 ) {
	// 					var val1 = arr[0] + arr[1] + arr[2] + arr[3];
	// 				} else {
	// 					if ( length > 4 ) {
	// 						var val1 = 999999999999;
	// 						$('#in1').val( val1.toLocaleString('ru') );
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}

	$('.calc__clear').click(function(){
		$(this).parent(".calc__line").children("input").val("");
		$(this).parent(".calc__line").children(".calc__relative").children("input").val("");
		calculate();
	});

	$('#calc_count').on("input", function(){
		var calc_count = $('#calc_count').val();
		if ( calc_count > 9 ) {
			$('#calc_count').val( 9 );
		}
	});


	$('.calc input').on("input", function(){
		calculate();
	});


	function calculate() {

		var calc_count = $('#calc_count').val();

		var calc_inp_1_1 = $('#calc_inp_1_1').val();
		var calc_inp_1_2 = $('#calc_inp_1_2').val();

		var calc_result_1 = calc_inp_1_2 * ( calc_inp_1_1 / 100 );
		$('#calc_result_1').text( calc_result_1.toFixed(calc_count) );


		var calc_inp_2_1 = $('#calc_inp_2_1').val();
		var calc_inp_2_2 = $('#calc_inp_2_2').val();

		if ( (calc_inp_2_1 != "") && (calc_inp_2_2 != "") ) {
			var calc_result_2 = calc_inp_2_1 / calc_inp_2_2 * 100;
		} else {
			var calc_result_2 = 0;
		}
		$('#calc_result_2').text( calc_result_2.toFixed(calc_count) + " %" );


		var calc_inp_3_1 = $('#calc_inp_3_1').val();
		var calc_inp_3_2 = $('#calc_inp_3_2').val();

		if ( (calc_inp_3_1 != "") && (calc_inp_3_2 != "") ) {
			var calc_result_3 = (+calc_inp_3_1 / 100 * +calc_inp_3_2) + +calc_inp_3_2;
		} else {
			var calc_result_3 = 0;
		}
		
		$('#calc_result_3').text( calc_result_3.toFixed(calc_count) );


		var calc_inp_4_1 = $('#calc_inp_4_1').val();
		var calc_inp_4_2 = $('#calc_inp_4_2').val();

		if ( (calc_inp_4_1 != "") && (calc_inp_4_2 != "") ) {
			var calc_result_4 = +calc_inp_4_2 - (+calc_inp_4_1 / 100 * +calc_inp_4_2);
		} else {
			var calc_result_4 = 0;
		}
		
		$('#calc_result_4').text( calc_result_4.toFixed(calc_count) );



		var calc_inp_5_1 = $('#calc_inp_5_1').val();
		var calc_inp_5_2 = $('#calc_inp_5_2').val();

		if ( (calc_inp_5_1 != "") && (calc_inp_5_2 != "") ) {
			var calc_result_5 = calc_inp_5_1 / (calc_inp_5_2 / 100);
		} else {
			var calc_result_5 = 0;
		}

		$('#calc_result_5').text( calc_result_5.toFixed(calc_count) );


		$('#calc_result_6').text( "0.00 %" );

		var calc_inp_6_1 = $('#calc_inp_6_1').val();
		var calc_inp_6_2 = $('#calc_inp_6_2').val();

		if ( (calc_inp_6_1 != "") && (calc_inp_6_2 != "") ) {

			if ( +calc_inp_6_1 >= +calc_inp_6_2 ) {
				var calc_result_6 = (calc_inp_6_1 - calc_inp_6_2) / calc_inp_6_2 * 100;
				$('#calc_result_6').text( "Больше на " + calc_result_6.toFixed(calc_count) + " %" );
			} else {
				var calc_result_6 = (1 - ( calc_inp_6_1 / calc_inp_6_2 )) * 100;
				$('#calc_result_6').text( "Меньше на " + calc_result_6.toFixed(calc_count) + " %" );
			}
			
		} else {
			var calc_result_6 = 0;
		}

		

	}

	

});