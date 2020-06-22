$(document).ready(function() {

	$('.calc4__btn').click(function(){
		window.print();
	});

	$(".calc4__label").click(function(){
		setTimeout(() => {
			// setcurrency();
			calculate();
		}, 50);
	});

	// function setcurrency(){

	// 	var currency = $("input[name=calc4_currency]:checked").val();
	// 	//$(".calc__currency").html( calcCurrency );

	// }

	$(".calc4__input").on('input', function () {
		calculate();
	});

	$(".calc4__input").focusin(function(e){
		$(this).next('.calc4__rub').addClass('calc4__rub--focus');
	});
	$(".calc4__input").focusout(function(e){
		$(this).next('.calc4__rub').removeClass('calc4__rub--focus');
	});


	calculate();

	function calculate() {


		var currency = "₽";
		//currency = $("input[name=calc4_currency]:checked").val();
		$('.calc4__rub').html( currency );
		$('.calc4__rub--prc').html( "%" );

		if ( currency == "₽" ) {
			var prcnt1 = 0;
			var prcnt2 = 6;
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
		$('#in6').val(String($('#in6').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

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

		var arr2 = $('#in6').val().split(' ');
		var length2 = arr2.length;

		if ( length2 == 1 ) {
			var val6 = arr2[0];
		} else {
			if ( length2 == 2 ) {
				var val6 = arr2[0] + arr2[1];
			} else {
				if ( length2 == 3 ) {
					var val6 = arr2[0] + arr2[1] + arr2[2];
				} else {
					if ( length2 == 4 ) {
						var val6 = arr2[0] + arr2[1] + arr2[2] + arr2[3];
					} else {
						if ( length2 > 4 ) {
							var val6 = 999999999999;
							$('#in6').val( val6.toLocaleString('ru') );
						}
					}
				}
			}
		}

		
		console.log( length );
		console.log( val1 );
		
		//var val1 = $('#in1').val(); // цель
		var val3 = $('#in3').val(); // рост цен
		//var val5 = $('#in5').val(); // года  
		var val7 = $('#in7').val(); // год первого платежа
		//var val6 = $('#in6').val(); // старт капитал

		var date = new Date();

		$('#newcell-1-1').html( +val7 );
		$('#newcell-2-1').html( +val7 + 1 );
		$('#newcell-3-1').html( +val7 + 2 );
		$('#newcell-4-1').html( +val7 + 3 );
		$('#newcell-5-1').html( +val7 + 4 );

		$('#newcell-1-2').html( +val7 - +date.getFullYear() );
		$('#newcell-2-2').html( +val7 + 1 - +date.getFullYear() );
		$('#newcell-3-2').html( +val7 + 2 - +date.getFullYear() );
		$('#newcell-4-2').html( +val7 + 3 - +date.getFullYear() );
		$('#newcell-5-2').html( +val7 + 4 - +date.getFullYear() );

		var newcell_1_3 = +(val1 * (1 + val3/100) ** +$('#newcell-1-2').html()).toFixed(0);
		var newcell_2_3 = +(val1 * (1 + val3/100) ** +$('#newcell-2-2').html()).toFixed(0);
		var newcell_3_3 = +(val1 * (1 + val3/100) ** +$('#newcell-3-2').html()).toFixed(0);
		var newcell_4_3 = +(val1 * (1 + val3/100) ** +$('#newcell-4-2').html()).toFixed(0);
		var newcell_5_3 = +(val1 * (1 + val3/100) ** +$('#newcell-5-2').html()).toFixed(0);
		$('#newcell-1-3').html( newcell_1_3.toLocaleString("ru") + " " + currency );
		$('#newcell-2-3').html( newcell_2_3.toLocaleString("ru") + " " + currency );
		$('#newcell-3-3').html( newcell_3_3.toLocaleString("ru") + " " + currency );
		$('#newcell-4-3').html( newcell_4_3.toLocaleString("ru") + " " + currency );
		$('#newcell-5-3').html( newcell_5_3.toLocaleString("ru") + " " + currency );

		var cellItogo = newcell_1_3 + newcell_2_3 + newcell_3_3 + newcell_4_3 + newcell_5_3;
		$('#newcell-6-3').html( cellItogo.toLocaleString("ru") + " " + currency );

		var val5 = + $('#newcell-5-2').html();



		if ( val5 <= 3 ) {
			$('.calc4__input--year').addClass('calc4__input--error');
			$('#calc4_error').html("Калькулятор настроен на срок более 3-х лет, на меньших периодах точность не гарантируется!")
		} else {
			$('.calc4__input--year').removeClass('calc4__input--error');
			$('#calc4_error').html("");
		}

		$('.calc4__replace').html( val5 );
		
		$('#in4').val( ((( 1 + (val3/100) ) ** val5 - 1) * 100).toFixed(2) );

		var infl = (val1 * (1 + (val3/100)) ** val5);
		let infl_fix = +infl.toFixed(0);
		$('#in2').val( infl_fix.toLocaleString('ru') ); // сумма через N лет

		console.log(val5);

		var cell_1_1 = +(val6 * (1 + prcnt1/100) ** val5).toFixed(0);
		$('#cell-1-1').html( cell_1_1.toLocaleString('ru') + " " + currency );

		var cell_2_1 = +(val6 * (1 + prcnt2/100) ** val5).toFixed(0);
		$('#cell-2-1').html( cell_2_1.toLocaleString('ru') + " " + currency );

		var cell_3_1 = +(val6 * (1 + prcnt3/100) ** val5).toFixed(0);
		$('#cell-3-1').html( cell_3_1.toLocaleString('ru') + " " + currency );

		var cell_4_1 = +(val6 * (1 + prcnt4/100) ** val5).toFixed(0);
		$('#cell-4-1').html( cell_4_1.toLocaleString('ru') + " " + currency );


		var cell_1_2 = cellItogo - cell_1_1;
		$('#cell-1-2').html( cell_1_2.toLocaleString('ru') + " " + currency );

		var cell_2_2 = cellItogo - cell_2_1;
		$('#cell-2-2').html( cell_2_2.toLocaleString('ru') + " " + currency );

		var cell_3_2 = cellItogo - cell_3_1;
		$('#cell-3-2').html( cell_3_2.toLocaleString('ru') + " " + currency );

		var cell_4_2 = cellItogo - cell_4_1;
		$('#cell-4-2').html( cell_4_2.toLocaleString('ru') + " " + currency );




		var cell_1_3 = +(cell_1_2 / (val5 * 12)).toFixed(0);
		$('#cell-1-3').html( cell_1_3.toLocaleString('ru') + " " + currency );

		var cell_2_3 = +(( cell_2_2 * ( prcnt2 / 100 / 12 ) ) / ( (( 1 + ( prcnt2 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 )).toFixed(0);
		$('#cell-2-3').html( cell_2_3.toLocaleString('ru') + " " + currency );

		var cell_3_3 = +(( cell_3_2 * ( prcnt3 / 100 / 12 ) ) / ( (( 1 + ( prcnt3 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 )).toFixed(0);
		$('#cell-3-3').html( cell_3_3.toLocaleString('ru') + " " + currency );

		// var cell_4_3 = ( cell_4_2 * ( prcnt4 / 100 / 12 ) ) / ( (( 1 + ( prcnt4 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 );
		// $('#cell-4-3').html( cell_4_3.toLocaleString('ru') + " " + currency );

		var cell_4_3 = +(val1 * ( ( prcnt4 / 100 / 12 * -1 ) + ( ( prcnt4 / 100 / 12 * -1 ) / ( ( 1 + ( prcnt4 / 100 / 12 * -1 ) ) ** ( val5 * 12 ) - 1 ) ) )).toFixed(0);
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