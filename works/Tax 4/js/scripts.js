$(document).ready(function() {

	$('#calc_plus_1').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
	});

	$('#calc_plus_2').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
	});

	$('#calc_B10, #calc_C10, #calc_D10').change(function(){
		if ( $('#calc_B10').val() == 2 && $('#calc_C10').val() > 28 ){
			$('#calc_C10').val(28);
		}
		if ( $('#calc_B10').val() == 4 && $('#calc_C10').val() > 30 ){
			$('#calc_C10').val(30);
		}
		if ( $('#calc_B10').val() == 6 && $('#calc_C10').val() > 30 ){
			$('#calc_C10').val(30);
		}
		if ( $('#calc_B10').val() == 9 && $('#calc_C10').val() > 30 ){
			$('#calc_C10').val(30);
		}
		if ( $('#calc_B10').val() == 11 && $('#calc_C10').val() > 30 ){
			$('#calc_C10').val(30);
		}
		calculation();
	});

	$('#calc_B9, #calc_C9, #calc_D9').change(function(){
		if ( $('#calc_B9').val() == 2 && $('#calc_C9').val() > 28 ){
			$('#calc_C9').val(28);
		}
		if ( $('#calc_B9').val() == 4 && $('#calc_C9').val() > 30 ){
			$('#calc_C9').val(30);
		}
		if ( $('#calc_B9').val() == 6 && $('#calc_C9').val() > 30 ){
			$('#calc_C9').val(30);
		}
		if ( $('#calc_B9').val() == 9 && $('#calc_C9').val() > 30 ){
			$('#calc_C9').val(30);
		}
		if ( $('#calc_B9').val() == 11 && $('#calc_C9').val() > 30 ){
			$('#calc_C9').val(30);
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

		var calc_B2 = $('#calc_B2').val();
		var calc_B3 = $('#calc_B3').val();
		var calc_B4 = $('#calc_B4').val();
		var calc_B5 = $('#calc_B5').val();

		if ( calc_B2 == "Yes" ) {
			$('#calc_B7').text("It depends, fill out section below");
		} else {
			if ( calc_B3 == "No" ) {
				$('#calc_B7').text("No, you DO NOT have to pay instalments to CRA!");
			} else {
				if ( calc_B3 == "" || calc_B4 == "" || calc_B5 == "" ) {
					$('#calc_B7').text("");
				} else {
					if ( calc_B3 == "Yes" && calc_B4 == "Yes" && calc_B5 == "Yes" ) {
						$('#calc_B7').text("Yes, you have to pay instalments to CRA!");
					} else {
						$('#calc_B7').text("No, you DO NOT have to pay instalments to CRA!");
					}
				}
			}
		}





		if ( calc_B2 == "Yes" ) {
			$('#block_1').css({display: "none"});
		} else {
			$('#block_1').css({display: "block"});
		}


		var calc_B14 = $('#calc_B14').val().split(',').join('');
		var calc_C14 = $('#calc_C14').val().split(',').join('');

		if ( calc_B14 >= 3000 ) {$('#calc_B15').val( calc_B14 );} else {$('#calc_B15').val( 0 );}
		if ( calc_C14 >= 3000 ) {$('#calc_C15').val( calc_C14 );} else {$('#calc_C15').val( 0 );}


		var calc_B9 = $('#calc_B9').val();
		var calc_C9 = $('#calc_C9').val();
		var calc_D9 = $('#calc_D9').val();

		var calc_B10 = $('#calc_B10').val();
		var calc_C10 = $('#calc_C10').val();
		var calc_D10 = $('#calc_D10').val();

		var calc_date_1 = new Date(calc_D9, (calc_B9 - 1), calc_C9);
		var calc_date_2 = new Date(calc_D10, (calc_B10 - 1), calc_C10);

		var calc_date_diff = new Date( calc_date_2 - calc_date_1)
		var calc_date_final = calc_date_diff / 1000 / 60 / 60 / 24;
		

		if ( $('#calc_B7').text() == "It depends, fill out section below" ) {
			$('#block_2').css({display: "block"});

			if ( calc_date_final > 365 ) {
				$('.calc__alert').css({display: "block"});
			} else {
				$('.calc__alert').css({display: "none"});
			}
	
		}

		if ( $('#calc_B7').text() == "Yes, you have to pay instalments to CRA!" ) {
			$('#block_2').css({display: "none"});

			$('.calc__alert').css({display: "none"});
		}

		// var calc_date_1 = new Date(calc_D10, (calc_B10-1), calc_C10);
		// alert(+calc_date_1);
		// alert( new Date(+now + (24 * 3600 * 1000)) );

		var calc_quart_1 = +calc_B10 + 4;
		if ( calc_quart_1 > 12 ) {
			var calc_quart_1 = calc_quart_1 - 12;
			var calc_quart_1_year = +calc_D10 + 1;
		} else {
			var calc_quart_1_year = +calc_D10;
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






		$('input').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		});

	}


});