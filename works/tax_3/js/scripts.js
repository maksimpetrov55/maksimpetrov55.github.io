$(document).ready(function() {

	$('#calc_plus_1').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
	});

	$('#calc_B11, #calc_C11, #calc_D11').change(function(){
		if ( $('#calc_B11').val() == 2 && $('#calc_C11').val() > 28 ){
			$('#calc_C11').val(28);
		}
		if ( $('#calc_B11').val() == 4 && $('#calc_C11').val() > 30 ){
			$('#calc_C11').val(30);
		}
		if ( $('#calc_B11').val() == 6 && $('#calc_C11').val() > 30 ){
			$('#calc_C11').val(30);
		}
		if ( $('#calc_B11').val() == 9 && $('#calc_C11').val() > 30 ){
			$('#calc_C11').val(30);
		}
		if ( $('#calc_B11').val() == 11 && $('#calc_C11').val() > 30 ){
			$('#calc_C11').val(30);
		}
		calculation();
	});

	$('.data-min').on("change",function(){
		let data_min = $(this).data("min");
		if ($(this).val() < data_min){
			$(this).val(data_min);
		}
		if ($(this).val() == ""){
			$(this).val(0);
		}
	});

	$('.calc__tip').hover(function(){
		$(this).next().css({display: "block"});
	}, function(){
		$(this).next().css({display: "none"});
	});

	$('input').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculation();
	});


	$('.calc__select').change(function(){
		calculation();
	});



	calculation();
	function calculation() {

		var calc_B1 = $('#calc_B1').val();
		
		if ( calc_B1 == "Quebec" ) {
			var calc_check_1 = 3000;
			$('#calc_info_1').css({display: "none"});
			$('#calc_info_2').css({display: "none"});
			$('#calc_info_3').css({display: "block"});
			$('#block_4').css({display: "block"});
			$('#calc_names_1').css({display: "flex"});
			$('#calc_names_2').css({display: "none"});
			$('#calc_names_3').css({display: "flex"});
			$('.calc__input--alberta').css({display: "none"});
			$('.calc__input--quebec').css({display: "block"});
			$('#block_5').css({display: "none"});
			$('#block_7').css({display: "none"});
			$('#block_8').css({display: "none"});
			$('#block_9').css({display: "none"});
			$('#block_10').css({display: "none"});
		}
		if ( calc_B1 == "Alberta" ) {
			var calc_check_1 = 2000;
			$('#calc_info_1').css({display: "block"});
			$('#calc_info_3').css({display: "none"});
			$('#calc_info_2').css({display: "block"});
			$('#block_4').css({display: "none"});
			$('#calc_names_1').css({display: "none"});
			$('#calc_names_2').css({display: "flex"});
			$('#calc_names_3').css({display: "flex"});
			$('.calc__input--alberta').css({display: "block"});
			$('.calc__input--quebec').css({display: "block"});
			$('#block_5').css({display: "block"});
			$('#block_7').css({display: "block"});
			$('#block_8').css({display: "none"});
			$('#block_9').css({display: "none"});
			$('#block_10').css({display: "none"});
		}
		if ( calc_B1 == "Other" ) {
			var calc_check_1 = 3000;
			$('#calc_info_1').css({display: "none"});
			$('#calc_info_3').css({display: "none"});
			$('#calc_info_2').css({display: "block"});
			$('#block_4').css({display: "none"});
			$('#calc_names_1').css({display: "none"});
			$('#calc_names_2').css({display: "none"});
			$('#calc_names_3').css({display: "none"});
			$('.calc__input--alberta').css({display: "none"});
			$('.calc__input--quebec').css({display: "none"});
			$('#block_5').css({display: "none"});

			$('#block_7').css({display: "none"});
			$('#block_8').css({display: "block"});
			$('#block_9').css({display: "block"});
			$('#block_10').css({display: "block"});
		}
		

		if ( calc_B1 == "Alberta" ) {
			if ( $('#calc_B2').val() == "Yes" && $('#calc_B3').val() == "Yes" && $('#calc_B4').val() == "No" ) {
				$('#calc_B5').text("Yes, you have to pay instalments to CRA!");
				$('#block_6').css({display: "block"});
			} else {
				$('#calc_B5').text("No, you DO NOT have to pay instalments to CRA!");
				$('#block_6').css({display: "none"});
			}
		}

		if ( calc_B1 == "Quebec" || calc_B1 == "Other" ) {
			if ( $('#calc_B2').val() == "Yes" && $('#calc_B3').val() == "Yes" ) {
				$('#calc_B5').text("Yes, you have to pay instalments to CRA!");
				$('#block_1').css({display: "block"});
			} else {
				$('#calc_B5').text("No, you DO NOT have to pay instalments to CRA!");
				$('#block_1').css({display: "none"});
			}
		}

		var calc_B10 = $('#calc_B10').val();

		if ( calc_B1 == "Other") {
			if ( calc_B10 == "Monthly" ) {
				$('#block_3').css({display: "block"});
				$('#block_2').css({display: "none"});
			} else {
				$('#block_3').css({display: "none"});
				$('#block_2').css({display: "block"});
			}
		}

		if ( calc_B1 == "Alberta" ) {
			$('#block_3').css({display: "block"});
			$('#block_2').css({display: "none"});
		}

		if ( calc_B1 == "Quebec") {
			if ( $('#calc_B7').val() == "Yes" ) {
				$('#calc_B9').text("Monthly");
				$('#block_3').css({display: "block"});
				$('#block_2').css({display: "none"});
			} else {
				$('#calc_B9').text("Quarterly");
				$('#block_3').css({display: "none"});
				$('#block_2').css({display: "block"});
			}
		}




		$('#calc_C12').val( $('#calc_B12').val() );
		$('#calc_D12').val( $('#calc_B12').val() );

		var calc_B14 = $('#calc_B14').val().split(',').join('');
		var calc_C14 = $('#calc_C14').val().split(',').join('');
		var calc_D14 = $('#calc_D14').val().split(',').join('');

		var calc_B13 = $('#calc_B13').val().split(',').join('');
		var calc_C13 = $('#calc_C13').val().split(',').join('');
		var calc_D13 = $('#calc_D13').val().split(',').join('');

		var calc_B12 = $('#calc_B12').val().split(',').join('');
		var calc_C12 = $('#calc_C12').val().split(',').join('');
		var calc_D12 = $('#calc_D12').val().split(',').join('');


		if ( calc_B14 >= calc_check_1 ) {$('#calc_B15').val( calc_B14 );} else {$('#calc_B15').val( 0 );}
		if ( calc_C14 >= calc_check_1 ) {$('#calc_C15').val( calc_C14 );} else {$('#calc_C15').val( 0 );}
		$('#calc_D15').val( calc_D14 );

		if ( calc_B1 == "Other" ) {

			if ( calc_B13 >= calc_check_1 ) {
				var calc_B15_a = Math.max(0, (+calc_B13 - +calc_B12) );
			} else {
				var calc_B15_a = 0;
			}

			if ( calc_B14 >= calc_check_1 ) {
				var calc_B15_b = calc_B14;
			} else {
				var calc_B15_b = 0;
			}

			$('#calc_B15').val( +calc_B15_a + +calc_B15_b );


			if ( calc_C13 >= calc_check_1 ) {
				var calc_C15_a = Math.max(0, (+calc_C13 - +calc_C12) );
			} else {
				var calc_C15_a = 0;
			}

			if ( calc_C14 >= calc_check_1 ) {
				var calc_C15_b = calc_C14;
			} else {
				var calc_C15_b = 0;
			}

			$('#calc_C15').val( +calc_C15_a + +calc_C15_b );


			if ( calc_D13 >= calc_check_1 ) {
				var calc_D15_a = Math.max(0, (+calc_D13 - +calc_D12) );
			} else {
				var calc_D15_a = 0;
			}

			if ( calc_D14 >= calc_check_1 ) {
				var calc_D15_b = calc_D14;
			} else {
				var calc_D15_b = 0;
			}

			$('#calc_D15').val( +calc_D15_a + +calc_D15_b );

		}

		var calc_B11 = $('#calc_B11').val();
		var calc_C11 = $('#calc_C11').val();
		var calc_D11 = $('#calc_D11').val();

		// var calc_date_1 = new Date(calc_D11, (calc_B11-1), calc_C11);
		// alert(+calc_date_1);
		// alert( new Date(+now + (24 * 3600 * 1000)) );

		var calc_quart_1 = +calc_B11 + 3;
		if ( calc_quart_1 > 12 ) {
			var calc_quart_1 = calc_quart_1 - 12;
			var calc_quart_1_year = +calc_D11 + 1;
		} else {
			var calc_quart_1_year = +calc_D11;
		}
		var calc_quart_2 = +calc_quart_1 + 3;
		if ( calc_quart_2 > 12 ) {
			var calc_quart_2 = calc_quart_2 - 12;
			var calc_quart_2_year = +calc_quart_1_year + 1;
		} else {
			var calc_quart_2_year = +calc_quart_1_year;
		}
		var calc_quart_3 = +calc_quart_2 + 3;
		if ( calc_quart_3 > 12 ) {
			var calc_quart_3 = calc_quart_3 - 12;
			var calc_quart_3_year = +calc_quart_2_year + 1;
		} else {
			var calc_quart_3_year = +calc_quart_2_year;
		}
		var calc_quart_4 = +calc_quart_3 + 3;
		if ( calc_quart_4 > 12 ) {
			var calc_quart_4 = calc_quart_4 - 12;
			var calc_quart_4_year = +calc_quart_3_year + 1;
		} else {
			var calc_quart_4_year = +calc_quart_3_year;
		}
		
		var calc_quart_1_days = maxDays(calc_quart_1);
		var calc_quart_2_days = maxDays(calc_quart_2);
		var calc_quart_3_days = maxDays(calc_quart_3);
		var calc_quart_4_days = maxDays(calc_quart_4);

		var calc_quart_1_name = mnthName(calc_quart_1);
		var calc_quart_2_name = mnthName(calc_quart_2);
		var calc_quart_3_name = mnthName(calc_quart_3);
		var calc_quart_4_name = mnthName(calc_quart_4);

		function maxDays(X) {
			if ( X == 1 ) {return 31;}
			if ( X == 2 ) {return 28;}
			if ( X == 3 ) {return 31;}
			if ( X == 4 ) {return 30;}
			if ( X == 5 ) {return 31;}
			if ( X == 6 ) {return 30;}
			if ( X == 7 ) {return 31;}
			if ( X == 8 ) {return 31;}
			if ( X == 9 ) {return 30;}
			if ( X == 10 ) {return 31;}
			if ( X == 11 ) {return 30;}
			if ( X == 12 ) {return 31;}
		}

		function mnthName(X) {
			if ( X == 1 ) {return "Jan";}
			if ( X == 2 ) {return "Feb";}
			if ( X == 3 ) {return "Mar";}
			if ( X == 4 ) {return "Apr";}
			if ( X == 5 ) {return "May";}
			if ( X == 6 ) {return "Jun";}
			if ( X == 7 ) {return "Jul";}
			if ( X == 8 ) {return "Aug";}
			if ( X == 9 ) {return "Sep";}
			if ( X == 10 ) {return "Oct";}
			if ( X == 11 ) {return "Nov";}
			if ( X == 12 ) {return "Dec";}
		}

		function mnthNumb(X) {
			if ( X == "Jan" ) {return 1;}
			if ( X == "Feb" ) {return 2;}
			if ( X == "Mar" ) {return 3;}
			if ( X == "Apr" ) {return 4;}
			if ( X == "May" ) {return 5;}
			if ( X == "Jun" ) {return 6;}
			if ( X == "Jul" ) {return 7;}
			if ( X == "Aug" ) {return 8;}
			if ( X == "Sep" ) {return 9;}
			if ( X == "Oct" ) {return 10;}
			if ( X == "Nov" ) {return 11;}
			if ( X == "Dec" ) {return 12;}
		}

		$('#calc_A18').text( calc_quart_1_name + " " + calc_quart_1_days + " " + calc_quart_1_year );
		$('#calc_A19').text( calc_quart_2_name + " " + calc_quart_2_days + " " + calc_quart_2_year );
		$('#calc_A20').text( calc_quart_3_name + " " + calc_quart_3_days + " " + calc_quart_3_year );
		$('#calc_A21').text( calc_quart_4_name + " " + calc_quart_4_days + " " + calc_quart_4_year );

		$('#calc_B18').val( Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 4 );
		$('#calc_B19').val( Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 4 );
		$('#calc_B20').val( Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 4 );
		$('#calc_B21').val( Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 4 );

		$('#calc_B22').val( 
			+$('#calc_B18').val().split(',').join('') + 
			+$('#calc_B19').val().split(',').join('') + 
			+$('#calc_B20').val().split(',').join('') + 
			+$('#calc_B21').val().split(',').join('')
		);

		if ( $('#calc_C15').val().split(',').join('') == 0 ) {
			$('#calc_C18').val(0);
		} else {
			$('#calc_C18').val( $('#calc_D15').val().split(',').join('') / 4 );
		}

		$('#calc_C19').val( (Math.max(0, (+$('#calc_C15').val().split(',').join('') - +$('#calc_C18').val().split(',').join('')) / 3 )).toFixed(2) );
		$('#calc_C20').val( (Math.max(0, (+$('#calc_C15').val().split(',').join('') - +$('#calc_C18').val().split(',').join('')) / 3 )).toFixed(2) );
		$('#calc_C21').val( (Math.max(0, (+$('#calc_C15').val().split(',').join('') - +$('#calc_C18').val().split(',').join('')) / 3 )).toFixed(2) );

		$('#calc_C22').val( 
			(
			+$('#calc_C18').val().split(',').join('') + 
			+$('#calc_C19').val().split(',').join('') + 
			+$('#calc_C20').val().split(',').join('') + 
			+$('#calc_C21').val().split(',').join('')
			).toFixed(0)
		);


		if ( (+calc_B11 + 1) > 12 ) {
			var calc_month_1_name = mnthName(+calc_B11 + 1 - 12);
			var calc_month_1_year = +calc_D11 + 1;
		} else {
			var calc_month_1_name = mnthName(+calc_B11 + 1);
			var calc_month_1_year = +calc_D11;
		}

		if( calc_C11 > maxDays(+calc_B11 + 1) ) {
			var calc_month_1_days = maxDays(+calc_B11 + 1);
		} else {
			var calc_month_1_days = +calc_C11;
		}

		$('#calc_A25').text( calc_month_1_name + " " + calc_month_1_days + " " + calc_month_1_year );

		for(i = 1, n = 2; n <= 12; i++, n++){

			if ( (+mnthNumb(calc_month_1_name) + +i) > 12 ) {
				var calc_month_name = mnthName(+mnthNumb(calc_month_1_name) + +i - 12);
				var calc_month_year = +calc_D11 + 1;
			} else {
				var calc_month_name = mnthName(+mnthNumb(calc_month_1_name) + +i);
				var calc_month_year = +calc_D11;
			}
			if( calc_month_1_days > maxDays( mnthNumb(calc_month_name) ) ) {
				var calc_month_days = maxDays( mnthNumb(calc_month_name) );
			} else {
				var calc_month_days = +calc_month_1_days;
			}

			if ( n == 2 )  { $('#calc_A26').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 3 )  { $('#calc_A27').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 4 )  { $('#calc_A28').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 5 )  { $('#calc_A29').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 6 )  { $('#calc_A30').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 7 )  { $('#calc_A31').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 8 )  { $('#calc_A32').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 9 )  { $('#calc_A33').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 10 ) { $('#calc_A34').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 11 ) { $('#calc_A35').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
			if ( n == 12 ) { $('#calc_A36').text( calc_month_name + " " + calc_month_days + " " + calc_month_year ); }
		}


		$('#calc_B25').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B26').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B27').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B28').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B29').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B30').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B31').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B32').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B33').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B34').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B35').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );
		$('#calc_B36').val( (Math.min( $('#calc_B15').val().split(',').join(''), $('#calc_C15').val().split(',').join('') ) / 12).toFixed(2) );

		$('#calc_D25').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D26').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D27').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D28').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D29').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D30').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D31').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D32').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D33').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D34').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D35').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );
		$('#calc_D36').val( ($('#calc_C15').val().split(',').join('') / 12).toFixed(2) );

		if ( $('#calc_C15').val().split(',').join('') > 0 ) {
			$('#calc_C25').val( ($('#calc_D15').val().split(',').join('') / 12).toFixed(2) );
		} else {
			$('#calc_C25').val(0);
		}

		if ( $('#calc_C15').val().split(',').join('') > 0 ) {
			$('#calc_C26').val( ($('#calc_D15').val().split(',').join('') / 12).toFixed(2) );
		} else {
			$('#calc_C26').val(0);
		}
		
		$('#calc_C27').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C28').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C29').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C30').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C31').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C32').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C33').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C34').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C35').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		$('#calc_C36').val( (Math.max(0, ( +$('#calc_C15').val().split(',').join('') - +$('#calc_C25').val().split(',').join('') - +$('#calc_C26').val().split(',').join('') ) ) / 10).toFixed(2) );
		

		$('#calc_B37').val( 
			(
			+$('#calc_B25').val().split(',').join('') + 
			+$('#calc_B26').val().split(',').join('') + 
			+$('#calc_B27').val().split(',').join('') + 
			+$('#calc_B28').val().split(',').join('') + 
			+$('#calc_B29').val().split(',').join('') + 
			+$('#calc_B30').val().split(',').join('') +
			+$('#calc_B31').val().split(',').join('') + 
			+$('#calc_B32').val().split(',').join('') + 
			+$('#calc_B33').val().split(',').join('') + 
			+$('#calc_B34').val().split(',').join('') +
			+$('#calc_B35').val().split(',').join('') + 
			+$('#calc_B36').val().split(',').join('')
			).toFixed(0)
		);

		$('#calc_C37').val( 
			(
			+$('#calc_C25').val().split(',').join('') + 
			+$('#calc_C26').val().split(',').join('') + 
			+$('#calc_C27').val().split(',').join('') + 
			+$('#calc_C28').val().split(',').join('') + 
			+$('#calc_C29').val().split(',').join('') + 
			+$('#calc_C30').val().split(',').join('') +
			+$('#calc_C31').val().split(',').join('') + 
			+$('#calc_C32').val().split(',').join('') + 
			+$('#calc_C33').val().split(',').join('') + 
			+$('#calc_C34').val().split(',').join('') +
			+$('#calc_C35').val().split(',').join('') + 
			+$('#calc_C36').val().split(',').join('')
			).toFixed(0)
		);

		$('#calc_D37').val( 
			(
			+$('#calc_D25').val().split(',').join('') + 
			+$('#calc_D26').val().split(',').join('') + 
			+$('#calc_D27').val().split(',').join('') + 
			+$('#calc_D28').val().split(',').join('') + 
			+$('#calc_D29').val().split(',').join('') + 
			+$('#calc_D30').val().split(',').join('') +
			+$('#calc_D31').val().split(',').join('') + 
			+$('#calc_D32').val().split(',').join('') + 
			+$('#calc_D33').val().split(',').join('') + 
			+$('#calc_D34').val().split(',').join('') +
			+$('#calc_D35').val().split(',').join('') + 
			+$('#calc_D36').val().split(',').join('')
			).toFixed(0)
		);

		var calc_B37 = $('#calc_B37').val().split(',').join('');
		var calc_C37 = $('#calc_C37').val().split(',').join('');
		var calc_D37 = $('#calc_D37').val().split(',').join('');

		if ( calc_B15 == 0 || ( calc_D15 == 0 && calc_D15 == 0 ) ) {
			$('#calc_B38').text("No Instalments required");
		} else {
			if ( calc_B37 < calc_C37 && calc_B37 < calc_D37 && calc_B37 != 0 ) {
				$('#calc_B38').text("Option 1");
			} else {
				if ( calc_C37 < calc_D37 && calc_D37 != 0 ) {
					$('#calc_B38').text("Option 2");
				} else {
					if ( calc_C37 != 0 && calc_D37 != 0 ) {
						$('#calc_B38').text("Choose Option 2 or Option 3");
					} else {
						if ( calc_C37 != 0 && calc_D37 != 0 && calc_B37 != 0 ) {
							$('#calc_B38').text("Choose Option 1 or Option 2 or Option 3");
						} else {
							if ( calc_B37 == 0 ) {
								$('#calc_B38').text("No Instalments Required");
							} else {
								if ( calc_D37 == 0 && calc_C37 != 0 && calc_B37 != 0 && calc_C37 < calc_B37 ) {
									$('#calc_B38').text("Option 2");
								} else {
									$('#calc_B38').text("Option 1");
								}
							}
						}
					}
				}
			}
		}












		$('input').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		});

	}


});