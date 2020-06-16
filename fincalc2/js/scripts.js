$(document).ready(function() {

	$('.calc2__btn').click(function(){
		window.print();
	});

	$(".calc2__label").click(function(){
		setTimeout(() => {
			// setcurrency();
			calculate();
		}, 50);
	});

	// function setcurrency(){

	// 	var currency = $("input[name=calc2_currency]:checked").val();
	// 	//$(".calc__currency").html( calcCurrency );

	// }

	$(".calc2__input").on('input', function () {
		calculate();
	});

	$(".calc2__input").focusin(function(e){
		$(this).next('.calc2__rub').addClass('calc2__rub--focus');
	});
	$(".calc2__input").focusout(function(e){
		$(this).next('.calc2__rub').removeClass('calc2__rub--focus');
	});


	calculate();

	function calculate() {

		var currency = $("input[name=calc2_currency]:checked").val();
		$('.calc2__rub').html( currency );
		$('.calc2__rub--prc').html( "%" );

		if ( currency == "₽" ) {
			var prcnt1 = 0;
			var prcnt2 = 6.5;
			var prcnt3 = 11.5;
			var prcnt4 = -9;
		}
		if ( currency == "$" ) {
			var prcnt1 = 0;
			var prcnt2 = 1.5;
			var prcnt3 = 6.5;
			var prcnt4 = -4;
		}
		if ( currency == "€" ) {
			var prcnt1 = 0;
			var prcnt2 = 1.5;
			var prcnt3 = 6.5;
			var prcnt4 = -4;
		}

		$('#cell-1-0').html( prcnt1 + "%" );
		$('#cell-2-0').html( prcnt2 + "%" );
		$('#cell-3-0').html( prcnt3 + "%" );
		$('#cell-4-0').html( prcnt4 + "%" );

		$('#in1').val(String($('#in1').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		//$('#in6').val(String($('#in6').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

		var arr = $('#in1').val().split(' ');
		var length = arr.length;

		if ( length == 1 ) {
			var val1 = arr[0];
		} else {
			if ( length == 2 ) {
				var val1 = arr[0] + arr[1];
			} else {
				if ( length == 3 ) {
					var val1 = arr[0] + arr[1] + arr[2];
				} else {
					if ( length == 4 ) {
						var val1 = arr[0] + arr[1] + arr[2] + arr[3];
					} else {
						if ( length > 4 ) {
							var val1 = 999999999999;
							$('#in1').val( val1.toLocaleString('ru') );
						}
					}
				}
			}
		}

		// var arr = $('#in6').val().split(' ');
		// var length = arr.length;

		// if ( length == 1 ) {
		// 	var val6 = arr[0];
		// } else {
		// 	if ( length == 2 ) {
		// 		var val6 = arr[0] + arr[1];
		// 	} else {
		// 		if ( length == 3 ) {
		// 			var val6 = arr[0] + arr[1] + arr[2];
		// 		} else {
		// 			if ( length == 4 ) {
		// 				var val6 = arr[0] + arr[1] + arr[2] + arr[3];
		// 			} else {
		// 				if ( length > 4 ) {
		// 					var val6 = 999999999999;
		// 					$('#in6').val( val1.toLocaleString('ru') );
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		
		console.log( length );
		console.log( val1 );
		
		//var val1 = $('#in1').val(); // цель
		var val3 = $('#in3').val(); // рост цен
		var val5 = $('#in5').val(); // года
		//var val6 = $('#in6').val(); // старт капитал
		var val6 = 0; // старт капитал

		if ( val5 <= 3 ) {
			$('.calc2__input--year').addClass('calc2__input--error');
			$('#calc2_error').html("Калькулятор настроен на срок более 3-х лет, на меньших периодах точность не гарантируется!")
		} else {
			$('.calc2__input--year').removeClass('calc2__input--error');
			$('#calc2_error').html("");
		}

		$('.calc2__replace').html( val5 );
		
		$('#in4').val( ((( 1 + (val3/100) ) ** val5 - 1) * 100).toFixed(2) );

		var infl = (val1 * (1 + (val3/100)) ** val5);
		let infl_fix = +infl.toFixed(0);
		$('#in2').val( infl_fix.toLocaleString('ru') ); // сумма через N лет

		// var val7 = $('#cell-1-0').html();
		// var val8 = $('#cell-2-0').html();
		// var val9 = $('#cell-3-0').html();
		// var val7 = 0;
		// var val8 = 6;
		// var val9 = 11.5;

		var cell_1_1 = val6 * (1 + prcnt1/100) ** val5;
		$('#cell-1-1').html( cell_1_1.toLocaleString('ru') + " " + currency );

		var cell_2_1 = val6 * (1 + prcnt2/100) ** val5;
		$('#cell-2-1').html( cell_2_1.toLocaleString('ru') + " " + currency );

		var cell_3_1 = val6 * (1 + prcnt3/100) ** val5;
		$('#cell-3-1').html( cell_3_1.toLocaleString('ru') + " " + currency );

		var cell_4_1 = val6 * (1 + prcnt4/100) ** val5;
		$('#cell-4-1').html( cell_4_1.toLocaleString('ru') + " " + currency );




		var cell_1_2 = infl - cell_1_1;
		$('#cell-1-2').html( cell_1_2.toLocaleString('ru') + " " + currency );

		var cell_2_2 = infl - cell_2_1;
		$('#cell-2-2').html( cell_2_2.toLocaleString('ru') + " " + currency );

		var cell_3_2 = infl - cell_3_1;
		$('#cell-3-2').html( cell_3_2.toLocaleString('ru') + " " + currency );

		var cell_4_2 = infl - cell_4_1;
		$('#cell-4-2').html( cell_4_2.toLocaleString('ru') + " " + currency );




		var cell_1_3 = cell_1_2 / (val5 * 12);
		$('#cell-1-3').html( cell_1_3.toLocaleString('ru') + " " + currency );

		var cell_2_3 = ( cell_2_2 * ( prcnt2 / 100 / 12 ) ) / ( (( 1 + ( prcnt2 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 );
		$('#cell-2-3').html( cell_2_3.toLocaleString('ru') + " " + currency );

		var cell_3_3 = ( cell_3_2 * ( prcnt3 / 100 / 12 ) ) / ( (( 1 + ( prcnt3 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 );
		$('#cell-3-3').html( cell_3_3.toLocaleString('ru') + " " + currency );

		// var cell_4_3 = ( cell_4_2 * ( prcnt4 / 100 / 12 ) ) / ( (( 1 + ( prcnt4 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 );
		// $('#cell-4-3').html( cell_4_3.toLocaleString('ru') + " " + currency );

		var cell_4_3 = val1 * ( ( prcnt4 / 100 / 12 * -1 ) + ( ( prcnt4 / 100 / 12 * -1 ) / ( ( 1 + ( prcnt4 / 100 / 12 * -1 ) ) ** ( val5 * 12 ) - 1 ) ) );
		$('#cell-4-3').html( cell_4_3.toLocaleString('ru') + " " + currency );



		var cell_1_4 = cell_1_3 * 12 * val5;
		$('#cell-1-4').html( cell_1_4.toLocaleString('ru') + " " + currency );

		var cell_2_4 = cell_2_3 * 12 * val5;
		$('#cell-2-4').html( cell_2_4.toLocaleString('ru') + " " + currency );

		var cell_3_4 = cell_3_3 * 12 * val5;
		$('#cell-3-4').html( cell_3_4.toLocaleString('ru') + " " + currency );

		var cell_4_4 = cell_4_3 * 12 * val5;
		$('#cell-4-4').html( cell_4_4.toLocaleString('ru') + " " + currency );


	}

});