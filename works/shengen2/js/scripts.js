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


	$('.calc__examp').click(function(){
		$('.calc__input--date1:eq(0)').val("2022-01-01");
		$('.calc__input--date2:eq(0)').val("2022-01-10");

		$('.calc__input--date1:eq(1)').val("2022-03-01");
		$('.calc__input--date2:eq(1)').val("2022-03-30");

		$('.calc__input--date1:eq(2)').val("2022-05-01");
		$('.calc__input--date2:eq(2)').val("2022-06-09");
	});


	// alert(
	// 	$('.calc__input--date1').length
	// );
	


	//$('.calc__input--date').change(function(){
	$('.calc__btn').click(function(){

		// console.log(
		// 	new Date($('.calc__input--date').val()).getTime()
		// );

		// console.log(
		// 	new Date(new Date($('.calc__input--date').val()).getTime())
		// );
		
		function toSeconds( toSeconds_value ){
			return new Date( toSeconds_value ).getTime()
		}
		
		function toDate( toDate_value ){
			let toDate_time = new Date( toDate_value );
			let toDate_timeD = toDate_time.getDate();
			let toDate_timeM = toDate_time.getMonth() + 1;
			let toDate_timeY = toDate_time.getFullYear();
			if ( toDate_timeM < 10 ) {toDate_timeM = "0" + toDate_timeM;}
			if ( toDate_timeD < 10 ) {toDate_timeD = "0" + toDate_timeD;}
			return toDate_timeY + "-" + toDate_timeM + "-" + toDate_timeD;
		}

		function toFormat( toFormat_value ){
			let toFormat_split = toFormat_value.split("-");
			return toFormat_split[2] + "." + toFormat_split[1] + "." + toFormat_split[0];
		}

		var date_biggest = 0;
		$('.calc__input--date').each(function(){
			if( $(this).val() != "" ){
				var date_biggest_temp = toSeconds( $(this).val() );
				if ( date_biggest_temp > date_biggest ){
					date_biggest = date_biggest_temp;
				}
			}
		});

		// console.log("date_biggest " + toDate( date_biggest + (24*3600*1000*91) ) );
		

		if ( date_biggest > 0 ){

			$('#inp1').val( toDate( date_biggest ) );

			var date_90 = Math.ceil( Math.abs( date_biggest - (24 * 3600 * 1000 * (90 - 1) ) ) );
			var date_180 = Math.ceil( Math.abs( date_biggest - (24 * 3600 * 1000 * (180 - 1) ) ) );

			$('.calc__date--90').text( toFormat( toDate( date_90 ) ) );
			$('.calc__date--180').text( toFormat( toDate( date_180 ) ) );

		}

		var calc_count = 0;
		var calc_diff = 0;
		$('.calc__line--date').each(function(){

			let value2 = toSeconds( $(this).find(".calc__input--date2").val() );
			let value1 = toSeconds( $(this).find(".calc__input--date1").val() );
			let count = $(this).find(".calc__count");

			if ( value1 > 0 && value2 > 0 ) {
				var date_calculation = Math.ceil(Math.abs( +value2 - +value1 ) / (1000 * 3600 * 24) ) + 1;
				count.text( date_calculation );
			} else {
				count.text( "" );
			}

			if ( value2 < date_180 ) {
				calc_diff += +count.text();
			} else {
				if ( value1 < date_180 ) {
					var date_cut = Math.ceil(Math.abs( +value2 - +date_180 ) / (1000 * 3600 * 24) ) + 1;
					calc_diff += +date_cut;
				}
			}

			if ( value1 > 0 ) {
				if ( (90 - 1 - +calc_count) >= 0 ) {
					var calc_left = toFormat (toDate (+value1 + ((24 * 3600 * 1000 ) * (90 - 1 - +calc_count)) ));
				} else {
					var calc_left = toFormat (toDate (+value1 + ((24 * 3600 * 1000 ) * 0) ));
				}
				
			}

			$(this).find(".calc__last").text(calc_left);
			

			calc_count += +$(this).find(".calc__count").text();

			// if ( calc_count > 90 && value1 > 0 ) {
			// 	$(this).find(".calc__last").text("---");
			// }

		});

		console.log("calc_diff " + calc_diff);

		
		// $(".calc__count").each(function(){
		// 	calc_count += +$(this).text();
		// });

		console.log("calc_count " + calc_count);
		
		console.log("calc_count - calc_diff " + (+calc_count - +calc_diff));

		var calc_summ = (+calc_count - +calc_diff);

		if ( calc_summ < 0 ){
			calc_summ = 0;
		}

		// if ( calc_summ > 90 ){
		// 	calc_summ = 90;
		// }
	
		var count_itog = 90 - +calc_summ;

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

		$('.calc__note--1').text(
			"Если вы повторно въедете в Шенгенскую зону " + toFormat( toDate( date_biggest + (24*3600*1000*91) )) + 
			", вы можете остаться на 90 дней до " + toFormat( toDate( date_biggest + (24*3600*1000*180) )) + 
			"."
			
		);

	});



});