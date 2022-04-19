$(document).ready(function() {

	// var today = new Date();
	// var time = new Date( today.getTime() + (24 * 3600 * 1000 * 2 ) );

	// var timeD = time.getDate();
	// var timeM = time.getMonth() + 1;
	// var timeY = time.getFullYear();

	// if ( timeM < 10 ) {timeM = "0" + timeM;}
	// if ( timeD < 10 ) {timeD = "0" + timeD;}

	// $('#inp1').val( timeY + "-" + timeM + "-" + timeD );

	// var inp1 = $('#inp1').val();
	// var date_check = new Date(inp1);
	// var date_90 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (90 - 1) ) ));
	// var date_180 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (180 - 1) ) ));

	// var date_90_value = new Date(date_90);
	// var date_180_value = new Date(date_180);

	// if ( inp1 != "" ){
	// 	$('.calc__date--90').text( date_90_value.getDate() + "." + (date_90_value.getMonth() + 1) + "." + date_90_value.getFullYear() );
	// 	$('.calc__date--180').text( date_180_value.getDate() + "." + (date_180_value.getMonth() + 1) + "." + date_180_value.getFullYear() );
	// }

	$('.calc__show').click(function(){
		$(this).css({display: "none"});
		$(".calc__hidden").css({display: "block"});
	});

	$('input[name=calc_language]').change(function(){

		var current_lang = $('input[name=calc_language]:checked').val();

		$('.calc__title').css({display: "none"});
		$('.calc__header').css({display: "none"});

		var class_title = ".calc__title--" + current_lang;
		var class_head = ".calc__header--" + current_lang;

		$(class_title).css({display: "block"});
		$(class_head).css({display: "block"});

	});


	$('.calc__input--date').change(function(){

		var date_biggest = 0;
		$('.calc__input--date').each(function(){

			if( $(this).val() != "" ){
				var date_biggest_msec = new Date( $(this).val() );
				if ( date_biggest_msec.getTime() > date_biggest ){
					date_biggest = date_biggest_msec.getTime();
				}
			}

			//console.log(date_biggest);
			

			var time = new Date(date_biggest);

			var timeD = time.getDate();
			var timeM = time.getMonth() + 1;
			var timeY = time.getFullYear();

			if ( timeM < 10 ) {timeM = "0" + timeM;}
			if ( timeD < 10 ) {timeD = "0" + timeD;}

			$('#inp1').val( timeY + "-" + timeM + "-" + timeD );

		});

		var inp1 = $('#inp1').val();

		var date_check = new Date(inp1);
		var date_90 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (90 - 1) ) ));
		var date_180 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (180 - 1) ) ));

		// console.log( new Date(date_90) );
		// console.log( new Date(date_180) );

		var date_90_value = new Date(date_90);
		var date_180_value = new Date(date_180);

		if ( inp1 != "" ){
			$('.calc__date--90').text( date_90_value.getDate() + "." + (date_90_value.getMonth() + 1) + "." + date_90_value.getFullYear() );
			$('.calc__date--180').text( date_180_value.getDate() + "." + (date_180_value.getMonth() + 1) + "." + date_180_value.getFullYear() );
		}

		var inp2 = $('#inp2').val();
		var inp3 = $('#inp3').val();
		var inp4 = $('#inp4').val();
		var inp5 = $('#inp5').val();


		$('.calc__line--date').each(function(){

			let value1 = $(this).find(".calc__input--date1").val();
			let value2 = $(this).find(".calc__input--date2").val();
			let count = $(this).find(".calc__count");

			
			let date1 = new Date(value1);
			let date2 = new Date(value2);
			
			// if ( date1 > date_check.getTime() ) {
			// 	date1 = new Date(inp1);
			// 	$(this).find(".calc__input--date1").val( inp1 );
			// }

			// if ( date2 > date_check.getTime() ) {
			// 	date2 = new Date(inp1);
			// 	$(this).find(".calc__input--date2").val( inp1 );
			// }

			if ( value1 != "" && value2 != "" ) {

				var date_calculation = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1;

				count.text( date_calculation );

				if ( date1.getTime() < date_180_value.getTime() ) {
					var date_start = date_180_value.getTime();
					var date_cut = Math.ceil( Math.abs(date2.getTime() - date_start ) / (1000 * 3600 * 24)) + 1;
					var date_calculation = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1;
					$('.calc__diff').text( date_calculation - date_cut );
					$('.calc__mark').text( 1 );
					console.log( $('.calc__diff').text() );
				}
			}



		});


		var count_summ = 0;

		$(".calc__count").each(function(){
			count_summ = count_summ + +$(this).text();
		});

		if ( $('.calc__mark').text() == 1 ) {
			count_summ = count_summ - +$('.calc__diff').text();
		}

		console.log(count_summ);

		var count_itog = 90 - +count_summ;

		// if ( count_itog < -365 ) {
		// 	count_itog = -365;
		// }

		var calc_lang = $('input[name=calc_language]:checked').val();

		if ( calc_lang == "rus" ) { 
			var calc_lang_text = "Ваш возможный срок пребывания (дней) — ";
			var calc_lang_text_bad = "Cрок пребывания превышен (дней) — ";
		}
		if ( calc_lang == "eng" ) { 
			var calc_lang_text = "Your possible length of stay (days) — ";
			var calc_lang_text_bad = "Length of stay exceeded (days) — ";
		}
		if ( calc_lang == "spn" ) { 
			var calc_lang_text = "Posible duración de la estancia (días) — ";
			var calc_lang_text_bad = "Duración de la estancia excedida (días) — ";
		}
		if ( calc_lang == "frn" ) { 
			var calc_lang_text = "Durée de séjour possible (jours) — ";
			var calc_lang_text_bad = "Durée de séjour dépassée (jours) — ";
		}
		if ( calc_lang == "trk" ) { 
			var calc_lang_text = "Olası kalış süreniz (gün) — ";
			var calc_lang_text_bad = "Kalış süresi aşıldı (gün) — ";
		}

		if ( count_itog >= 0 ) {
			$('.calc__result').text( calc_lang_text + count_itog );
			$('.calc__result').removeClass("calc__result--bad");
		} else {
			$('.calc__result').text( calc_lang_text_bad + (count_itog * (-1) ) );
			$('.calc__result').addClass("calc__result--bad");
		}

	});

});