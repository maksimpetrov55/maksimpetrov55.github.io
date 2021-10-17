$(document).ready(function() {

	$('#calc_plus_1').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
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

	var awd = $('#calc_B9').val().split(',').join('');
	// alert( awd * 1 );


	$('.calc__input').change(function(){
		let this_val = $(this).val().split(',').join('');
		let calc_B1 = $('#calc_B1').val();

		if ( calc_B1 == "Quebec" ) {
			if ( this_val != 0 && this_val < 1800 ) {
				$(this).val("1,800");
			}
		} else {
			if ( this_val != 0 && this_val < 3000 ) {
				$(this).val("3,000");
			}
		}
		calculation();
	});

	$('#calc_B1').change(function(){
		let calc_B1 = $('#calc_B1').val();
		if ( calc_B1 != "Quebec" ) {
			let calc_B9 = +$('#calc_B9').val().split(',').join('');
			let calc_B10 = +$('#calc_B10').val().split(',').join('');
			let calc_B11 = +$('#calc_B11').val().split(',').join('');

			if ( calc_B9 != 0 && calc_B9 < 3000 ) {
				$("#calc_B9").val("3,000");
			}
			if ( calc_B10 != 0 && calc_B10 < 3000 ) {
				$("#calc_B10").val("3,000");
			}
			if ( calc_B11 != 0 && calc_B11 < 3000 ) {
				$("#calc_B11").val("3,000");
			}
		}
	});

	$('select').change(function(){
		calculation();
	});



	calculation();
	function calculation() {

		var calc_B1 = $('#calc_B1').val();
		var calc_B2 = $('#calc_B2').val();
		var calc_B3 = $('#calc_B3').val();
		var calc_B4 = $('#calc_B4').val();

		var calc_B9 = +$('#calc_B9').val().split(',').join('');
		var calc_B10 = +$('#calc_B10').val().split(',').join('');
		var calc_B11 = +$('#calc_B11').val().split(',').join('');

		if ( calc_B2 == "Yes" && calc_B3 == "Yes" ) {
			$('#calc_B7').text("Yes, you have to pay instalments to CRA this year");
		} else {
			$('#calc_B7').text("No, you DO NOT have to pay instalments to CRA this year");
		}

		if ( calc_B4 == "Yes" ) {
			$('#block_1').css({display: "none"});
			$('#block_2').css({display: "block"});
		} else {
			$('#block_2').css({display: "none"});
			$('#block_1').css({display: "block"});
		}

		if ( calc_B1 == "Quebec" ) {
			if ( calc_B9 == 0 && calc_B10 == 0 ) {
				$('#calc_B13').text("No Tax Instalment Required");
			} else {
				if ( calc_B11 > calc_B10 && calc_B10 >= 1800 ) {
					$('#calc_B13').text("Prior Year");
				} else {
					$('#calc_B13').text("Current Year");
				}
			}
		} else {
			if ( calc_B9 == 0 && calc_B10 == 0 ) {
				$('#calc_B13').text("No Tax Instalment Required");
			} else {
				if ( calc_B11 > calc_B10 && calc_B10 >= 3000 ) {
					$('#calc_B13').text("Prior Year");
				} else {
					$('#calc_B13').text("Current Year");
				}
			}
		}

		var calc_B15 = $('#calc_B15').val();

		if ( calc_B15 == "Current" ) {
			var calc_value_1 = calc_B11 / 4;
			var calc_value_2 = calc_B11 / 4;
			var calc_value_3 = calc_B11 / 4;
			var calc_value_4 = calc_B11 / 4;
			var calc_value_summ = +calc_value_1 + +calc_value_2 + +calc_value_3 + +calc_value_4;
			var calc_value_066 = (calc_value_summ * 0.66).toFixed(2);
		}

		if ( calc_B15 == "Prior" ) {
			var calc_value_1 = calc_B10 / 4;
			var calc_value_2 = calc_B10 / 4;
			var calc_value_3 = calc_B10 / 4;
			var calc_value_4 = calc_B10 / 4;
			var calc_value_summ = +calc_value_1 + +calc_value_2 + +calc_value_3 + +calc_value_4;
			var calc_value_066 = (calc_value_summ * 0.66).toFixed(2);
		}

		$('#calc_B25').val( calc_value_066 );
		$('#calc_B26').val( calc_value_066 );

		$('#calc_B18').val( calc_value_1 );
		$('#calc_B19').val( calc_value_2 );
		$('#calc_B20').val( calc_value_3 );
		$('#calc_B21').val( calc_value_4 );
		$('#calc_B22').val( calc_value_summ );

		$('input').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		});

		if ( calc_B15 == "No calc" ) {

			if ( calc_B9 < 1800 || calc_B10 < 1800 ) {
				var calc_value_1 = 0;
			} else {
				var calc_value_1 = calc_B9 / 4;
			}

			if ( calc_B9 < 1800 || calc_B10 < 1800 ) {
				var calc_value_2 = 0;
			} else {
				var calc_value_2 = calc_B9 / 4;
			}

			if ( calc_B9 < 1800 || calc_B10 < 1800 ) {
				var calc_value_3 = 0;
			} else {
				var calc_value_3 = calc_B10 / 2 - calc_value_2;
			}

			if ( calc_B9 < 1800 || calc_B10 < 1800 ) {
				var calc_value_4 = 0;
			} else {
				var calc_value_4 = calc_B10 / 2 - calc_value_2;
			}

			var calc_value_summ = +calc_value_1 + +calc_value_2 + +calc_value_3 + +calc_value_4;

			$('#calc_B18').val( calc_value_1 );
			$('#calc_B19').val( calc_value_2 );
			$('#calc_B20').val( calc_value_3 );
			$('#calc_B21').val( calc_value_4 );
			$('#calc_B22').val( calc_value_summ );
	
			$('input').each(function(){
				$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			});

			$('#calc_B25').val( "Use Prior or Current Year" );
			$('#calc_B26').val( "-" );
		}









	}


});