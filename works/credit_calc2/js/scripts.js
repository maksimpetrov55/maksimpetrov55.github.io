$(document).ready(function() {

	
	


	// var date = new Date();
	// var dateDay = date.getDate();
	// var dateMonth = date.getMonth()+1;
	// var dateYear = date.getFullYear();

	// if ( dateDay < 9 ) {dateDay = "0" + dateDay;}
	// if ( dateMonth < 9 ) {dateMonth = "0" + dateMonth;}

	// $('#calc_date').val( dateYear + "-" + dateMonth + "-" + dateDay );





	$('.calc__btn').click(function(){
		calculation();
	});

	$('#calc_credit').each(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	});

	$('.calc__input--padding').change(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	});

	$('.calc__input--padding').on("input",function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	});

	$('#calc_free').change(function(){
		var let_free = $(this).val();
		var let_srok = $('#calc_srok').val();

		if ( +let_free > +let_srok ){
			$('#calc_free').val( +let_srok );
		}
	});

	$('#calc_period').change(function(){

		var calc_period = $('#calc_period').val();

		if ( calc_period == 'mm' ) {
			$('.calc__block--tohide1').css({display: "none"});
			$('.calc__block--tohide2').css({display: "block"});
			//$('.calc__block--space').css({display: "none"});
		}
		if ( calc_period == 'yy' ) {
			$('.calc__block--tohide1').css({display: "none"});
			$('.calc__block--tohide2').css({display: "block"});
			//$('.calc__block--space').css({display: "none"});
		}
		if ( calc_period == 'dd' ) {
			$('.calc__block--tohide1').css({display: "block"});
			$('.calc__block--tohide2').css({display: "none"});
			//$('.calc__block--space').css({display: "block"});
		}

	});









	calculation();

	function calculation() {


		
		var calc_credit = $('#calc_credit').val().split(" ").join('');
		var calc_percent = $('#calc_percent').val();
		var calc_srok = $('#calc_srok').val();
		//var calc_date = $('#calc_date').val().split("-");
		var calc_type = $('#calc_type').val();
		var calc_period = $('#calc_period').val();

		var calc_free = $('#calc_free').val();

		// if ( calc_date[1] == "01" ) {	var dateMonthName = "января";	}
		// if ( calc_date[1] == "02" ) {	var dateMonthName = "февраля";	}
		// if ( calc_date[1] == "03" ) {	var dateMonthName = "марта";	}
		// if ( calc_date[1] == "04" ) {	var dateMonthName = "апреля";	}
		// if ( calc_date[1] == "05" ) {	var dateMonthName = "мая";	}
		// if ( calc_date[1] == "06" ) {	var dateMonthName = "июня";	}
		// if ( calc_date[1] == "07" ) {	var dateMonthName = "июля";	}
		// if ( calc_date[1] == "08" ) {	var dateMonthName = "августа";	}
		// if ( calc_date[1] == "09" ) {	var dateMonthName = "сентября";	}
		// if ( calc_date[1] == "10" ) {	var dateMonthName = "октября";	}
		// if ( calc_date[1] == "11" ) {	var dateMonthName = "ноября";	}
		// if ( calc_date[1] == "12" ) {	var dateMonthName = "декабря";	}
		
		//var calc_date_new = calc_date[2] + " " + dateMonthName + " " + (+calc_date[0] + +calc_srok) + " г.";

		$('.chart__scale').empty();



		if ( calc_period == 'mm' ) {
			$('#calc_pay').text("Ежемесячный платеж:");
			//var calc_rate = 12;
			var calc_rate = 1;
			var calc_months = calc_srok;
			var calc_years = calc_srok / 12;
			$('.calc__block--tohide2').css({display: "block"});
		}
		if ( calc_period == 'yy' ) {
			$('#calc_pay').text("Ежегодный платеж:");
			//var calc_rate = 1;
			var calc_rate = 1;
			var calc_months = calc_srok * 12;
			var calc_years = calc_srok;
			$('.calc__block--tohide2').css({display: "block"});
		}
		if ( calc_period == 'dd' ) {
			$('#calc_pay').text("Ежедневный платеж:");
			//var calc_rate = 30.4166667;
			var calc_rate = 1;
			var calc_months = calc_srok / 12;
			var calc_years = calc_srok / 12 / 30.4166667;
			$('.calc__block--tohide2').css({display: "none"});
			calc_type = 3;
		}

		// for (y = 0; y <= calc_years; y++) {
		// 	$('.chart__scale').append(`
		// 		<div class="chart__year">${ +calc_date[0] + y }</div>
		// 	`);
		// }

		var calc_platej_cred = [];
		var calc_platej_perc = [];
		var calc_platej_full = [];
		var calc_dolg = [];

		var calc_sum_perc = 0;
		var calc_sum_cred = 0;
		var calc_sum_platej = 0;
		var calc_sum_dolg = calc_credit;

		var calc_dateARR = [];


		// var calc_date_item_month = +calc_date[1];
		// var calc_date_item_year = +calc_date[0];


		for (d = 0; d < calc_srok; d++) {

			// var calc_date_item_day = +calc_date[2];
			// if ( calc_date_item_day < 10 ) {
			// 	calc_date_item_day = "0" + calc_date_item_day;
			// }

			// calc_date_item_month = +calc_date_item_month + 1;
			// if ( calc_date_item_month > 12 ) {
			// 	calc_date_item_month = 1;
			// 	calc_date_item_year = +calc_date_item_year + 1;
			// }

			// if ( +calc_date_item_month == 1 || +calc_date_item_month == 3 || +calc_date_item_month == 5 || +calc_date_item_month == 7 || +calc_date_item_month == 8 || +calc_date_item_month == 10 || +calc_date_item_month == 12 ) {
			// 	if ( calc_date_item_day > 30 ) {
			// 		calc_date_item_day = 30;
			// 	}
			// }
			// if ( calc_date_item_month == 2 && calc_date_item_day > 28 ) {
			// 	calc_date_item_day = 28;
			// }

			// if ( +calc_date_item_month < 10 ) {
			// 	calc_date_item_month = "0" + calc_date_item_month;
			// }

			//var calc_date_item = calc_date_item_day + "." + calc_date_item_month + "." + calc_date_item_year;
			var calc_date_item = "Платеж №" + (+d + 1);
			calc_dateARR.push( calc_date_item );
		}

		// console.log(calc_dateARR);
		// console.log(calc_dateARR[calc_srok-1]);

		if ( calc_type == 1 ) {

			for (i = 0; i < calc_srok; i++) {

				var calc_F = calc_credit * 
				(
					(calc_percent / 100 / calc_rate) + 
					( (calc_percent / 100 / calc_rate) / (((1 + (calc_percent / 100 / calc_rate)) ** (calc_srok)) - 1) )
				);


				calc_sum_platej = calc_sum_platej + calc_F;
				calc_platej_full.push(calc_F.toFixed(0));

				if ( i == 0 ) {

					var calc_P = (calc_credit) * calc_percent / 100 / calc_rate;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_platej_perc.push(calc_P.toFixed(0));

					var calc_C = +calc_F - +calc_P;
					calc_sum_cred = calc_sum_perc + calc_P;
					calc_platej_cred.push(calc_C.toFixed(0));

					calc_sum_dolg = calc_sum_dolg - calc_C;
					calc_dolg.push(calc_sum_dolg.toFixed(0));
					
				} else {

					var calc_P = (calc_dolg[i-1]) * calc_percent / 100 / calc_rate;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_platej_perc.push(calc_P.toFixed(0));

					var calc_C = +calc_F - +calc_P;
					calc_sum_cred = calc_sum_perc + calc_P;
					calc_platej_cred.push(calc_C.toFixed(0));

					calc_sum_dolg = calc_sum_dolg - calc_C;
					if ( calc_sum_dolg < 0 ) {
						calc_sum_dolg = 0;
					}

					calc_dolg.push(calc_sum_dolg.toFixed(0));
				}

			}
			
			$('#calc_result_1').text( (+calc_F.toFixed(0)).toLocaleString("ru") + " ₽" );
			$('#calc_result_2').text( (+calc_sum_platej.toFixed(0)).toLocaleString("ru") + " ₽" );
			$('#calc_result_3').text( (+calc_credit).toLocaleString("ru") + " ₽" );
			$('#calc_result_4').text( (+(+calc_sum_platej - +calc_credit).toFixed(0)).toLocaleString("ru") + " ₽" );
			$('#calc_result_5').text( calc_percent + "%" );
			// $('#calc_result_6').text( calc_date_new );

			var calc_compare = (((+calc_sum_platej - +calc_credit)) / calc_sum_platej).toFixed(2) * 100;

		}
		
		if ( calc_type == 2 ) {

			for (i = 0; i < calc_srok; i++) {

				if ( i == 0 ) {
					var calc_C = (calc_credit / calc_rate / calc_srok);
					var calc_P = (calc_credit * calc_percent * calc_rate / 100)
					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				} else {
					var calc_C = (calc_credit / calc_rate / calc_srok);
					var calc_P = ((+calc_credit - (calc_C * i)) * calc_percent * calc_rate / 100)
					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				}

				calc_platej_cred.push(calc_C.toFixed(0));
				calc_platej_perc.push(calc_P.toFixed(0));
				calc_platej_full.push(calc_F.toFixed(0));

				calc_sum_dolg = calc_sum_dolg - calc_C;
				if ( calc_sum_dolg < 0 ) {
					calc_sum_dolg = 0;
				}

				calc_dolg.push(calc_sum_dolg.toFixed(0));

				$('#calc_result_1').text( "~" + (+(calc_sum_platej / calc_srok).toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_2').text( (+calc_sum_platej.toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_3').text( (+calc_credit).toLocaleString("ru") + " ₽" );
				$('#calc_result_4').text( (+(+calc_sum_platej - +calc_credit).toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_5').text( calc_percent + "%" );
				// $('#calc_result_6').text( calc_date_new );
				var calc_compare = (calc_sum_perc / (+calc_credit + +calc_sum_perc)).toFixed(2) * 100;
			}

		}

		if ( calc_type == 3 ) {

			for (i = 0; i < calc_srok; i++) {

				if ( i == 0 ) {
					var calc_C = (calc_credit / calc_rate / calc_srok);
					
					if ( i < calc_free ) {
						var calc_P = 0;
					} else {
						var calc_P = (calc_credit * calc_percent * calc_rate / 100) * (+i - +calc_free + 1);
					}

					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				} else {
					var calc_C = (calc_credit / calc_rate / calc_srok);

					if ( i < calc_free ) {
						var calc_P = 0;
					} else {
						var calc_P = (calc_credit * calc_percent * calc_rate / 100) * (+i - +calc_free + 1);
					}

					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				}

				calc_platej_cred.push(calc_C.toFixed(0));
				calc_platej_perc.push(calc_P.toFixed(0));
				calc_platej_full.push(calc_F.toFixed(0));

				calc_sum_dolg = calc_sum_dolg - calc_C;
				if ( calc_sum_dolg < 0 ) {
					calc_sum_dolg = 0;
				}

				calc_dolg.push(calc_sum_dolg.toFixed(0));

				$('#calc_result_1').text( "~" + (+(calc_sum_platej / calc_srok).toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_2').text( (+calc_sum_platej.toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_3').text( (+calc_credit).toLocaleString("ru") + " ₽" );
				$('#calc_result_4').text( (+(+calc_sum_platej - +calc_credit).toFixed(0)).toLocaleString("ru") + " ₽" );
				$('#calc_result_5').text( calc_percent + "%" );
				// $('#calc_result_6').text( calc_date_new );
				var calc_compare = (calc_sum_perc / (+calc_credit + +calc_sum_perc)).toFixed(2) * 100;
			}

		}

		$('.compare__credit').text( (100 - +calc_compare).toFixed(0) + "%" );
		$('.compare__percent').text( calc_compare.toFixed(0) + "%" );

		$('.compare__credit').css({width: (100 - +calc_compare) + "%"});
		$('.compare__percent').css({width: calc_compare + "%"});
		
		if ( calc_compare < 9 ) {
			$('.compare__percent').text( "" );
		}
		if ( calc_compare > 91 ) {
			$('.compare__credit').text( "" );
		}

		$('.calc__descr--perc1').css({display: "none"});
		$('.calc__descr--perc2').css({display: "block"});
		$('.calc__descr--name').text("Проценты");
		$('.calc__descr--value').text( $('#calc_result_4').text() );
		$('.calc__descr--perc2').text( $('.compare__percent').text() );


		
		var bar_width = $('.chart__wrap').width() / calc_srok;
		var bar_padding = bar_width * 0.1;


		$('.chart__wrap').empty();
		for (z = 0; z < calc_srok; z++) {

			if ( calc_type == 1 ) {
				var bar_rate = calc_platej_full[0] / 100;

				var bar_height_1 = calc_platej_perc[z] / bar_rate;
				var bar_height_2 = 100 - +bar_height_1;
			} 
			
			if ( calc_type == 2 ) {
				var bar_rate = calc_platej_full[0] / 100;

				var bar_height_1 = calc_platej_perc[z] / bar_rate;
				var bar_height_2 = calc_platej_cred[z] / bar_rate;
			}

			if ( calc_type == 3 ) {
				var bar_rate = calc_platej_full[calc_srok-1] / 100;

				var bar_height_1 = calc_platej_perc[z] / bar_rate;
				var bar_height_2 = calc_platej_cred[z] / bar_rate;
			}



			$('.chart__wrap').append(`

				<div style="width: ${bar_width}px; padding: 0 ${bar_padding}px" class="chart__bar" data-date="${calc_dateARR[z]}" data-numb="№${z+1}" data-perc="${calc_platej_perc[z]} ₽" data-credit="${calc_platej_cred[z]} ₽">
					<div style="height: ${bar_height_1}%;" class="chart__perc chart__perc--1"></div>
					<div style="height: ${bar_height_2}%;" class="chart__perc chart__perc--2"></div>
				</div>

			`);

		}


		$('.table__body').empty();
		for (t = 0; t < calc_srok; t++) {

			$('.table__body').append(`

				<div class="table__row">
					<div class="table__cell">${calc_dateARR[t]}</div>
					<div class="table__cell">${calc_dolg[t]}</div>
					<div class="table__cell">${calc_platej_perc[t]}</div>
					<div class="table__cell">${calc_platej_cred[t]}</div>
					<div class="table__cell table__cell--bold">${calc_platej_full[t]}</div>
				</div>

			`);

		}


	}





	$('.compare__credit').hover(function(){
		$('.calc__descr--perc2').css({display: "none"});
		$('.calc__descr--perc1').css({display: "block"});
		$('.calc__descr--perc1').text( $('.compare__credit').text() );
		$('.calc__descr--name').text("Сумма кредита");
		$('.calc__descr--value').text( $('#calc_result_3').text() );
	}, function(){
		$('.calc__descr--perc1').css({display: "none"});
		$('.calc__descr--perc2').css({display: "block"});
		$('.calc__descr--perc2').text( $('.compare__percent').text() );
		$('.calc__descr--name').text("Проценты");
		$('.calc__descr--value').text( $('#calc_result_4').text() );
	});



	$('.chart__wrap').on("mouseenter",".chart__bar", function(){

		let bar_date = $(this).data("date");
		let bar_numb = $(this).data("numb");
		let bar_perc = $(this).data("perc");
		let bar_credit = $(this).data("credit");
		
		$('.chart__fly--date').text( bar_date );
		$('.chart__fly--number').text( "Платеж: " + bar_numb );
		$('.chart__fly--perc').text( "Проценты: " + bar_perc );
		$('.chart__fly--credit').text( "Тело кредита: " + bar_credit );

		$('.chart__fly').css({display: "block"});
		// $(this).children().next().css({display: "block"});
		// let chert_bot = $(this).children().height();
		// $('.chart__fly').css({bottom: (chert_bot)});
		

	});
	$('.chart__wrap').on("mouseleave",".chart__bar", function(){
		$('.chart__fly').css({display: "none"});
		//$(this).children().next().css({display: "none"});
	});


	$('.table__open').click(function(){
		$('.table__open').css({display: "none"});
		$('.table__body').removeClass("table__body--closed");
	});

});