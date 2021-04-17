$(document).ready(function() {

	$('.main__btn').click(function(){
		$('.main').addClass("main--hidden")
		$('.order').removeClass("order--hidden");
	});

	$('#btn_1').click(function(){
		if ( $('input[name=place]:checked').val() != undefined ) {
			$('#step_1').addClass("order__step--hide");
			$('#step_2').removeClass("order__step--hide");
		}
	});

	$('#back_1').click(function(){
		$('.main').removeClass("main--hidden")
		$('.order').addClass("order--hidden");
	});

	$('#back_2').click(function(){
		$('#step_1').removeClass("order__step--hide");
		$('#step_2').addClass("order__step--hide");
	});

	$('#back_3').click(function(){
		$('#account').addClass("account--hide");
		$('#step_1').removeClass("order__step--hide");
	});

	$('.account__icon--main').click(function(){
		$('.main').addClass("main--hidden")
		$('.order').removeClass("order--hidden");
		$('#step_1').addClass("order__step--hide");
		$('#step_2').addClass("order__step--hide");
		$('#account').removeClass("account--hide");
	});

	$('.account__icon').click(function(){
		$('#step_1').addClass("order__step--hide");
		$('#step_2').addClass("order__step--hide");
		$('#account').removeClass("account--hide");
	});



	$('.city__current').click(function(){
		$('.city__list').slideToggle();
	});

	function hide_all() {
		$('input[name=servs]').prop('checked', false);
		$('input[name=person]').prop('checked', false);
		$('input[name=time]').prop('checked', false);
		$('.next').removeClass("next--show");
		$('.person').removeClass("person--show");
		$('.date').removeClass("date--show");
		$('.form').removeClass("form--show");
		$('.account__card').addClass("account__card--hide");
	}

	$('.city__radio').on("click", function(){
		hide_all();
		let city = $('input[name=city]:checked').val()
		$('.city__current').text( city );
		$('.city__list').slideToggle();
		$('.order__wrap').addClass("order__wrap--hide");
		$('input[name=place]').prop('checked', false);
		if ( city == "Москва" ) {$('#wrap_mos').removeClass("order__wrap--hide");}
		if ( city == "Красноярск" ) {$('#wrap_krasn').removeClass("order__wrap--hide");}
		if ( city == "Томск" ) {$('#wrap_tomsk').removeClass("order__wrap--hide");}
		if ( city == "Казань" ) {$('#wrap_kazan').removeClass("order__wrap--hide");}
	});

	$('.place__card').click(function(){
		hide_all();
	});

	
	$(".order__mid--2").on('scroll', function (){
		let distance_1 = document.getElementById("target_1").getBoundingClientRect();
		let distance_2 = document.getElementById("target_2").getBoundingClientRect();
		//console.log(distance_1.top);
		if ( distance_1.top <= 60 && distance_2.top >= 60 ) {
			$('#order_head').text("Запись: Шаг 2 из 4");
		} else { 
			if ( distance_1.top <= 60 && distance_2.top <= 60 ) {
				$('#order_head').text("Запись: Шаг 3 из 4");
			} else {
				$('#order_head').text("Запись: Шаг 1 из 4");
			}
		}
	});

	var next_a = 1;
	$('input[name=servs]').on("click", function(){

		if ( next_a == 1 ) {
			$('.next').addClass("next--show");
			next_a = 0;
		}

		if ( $('input[name=servs]:checked').val() != undefined ) {
			$('.person').addClass("person--show");
		} else {
			$('.next').removeClass("next--show");
			$('.person').removeClass("person--show");
			$('.date').removeClass("date--show");
			$('.form').removeClass("form--show");
			$('input[name=person]').prop('checked', false);
			$('input[name=time]').prop('checked', false);
			$('.account__card').addClass("account__card--hide");
		}

	});

	$(document).on('change', 'input.AllValueСheckbox', function() {
		$AllValue=$('input.AllValueСheckbox:checked').map(function() {return this.value;}).get();
		$('input[name="AllСheckbox"]').val($AllValue.join());
	});

	$('#next_btn').click(function(){
		let distance_1 = document.getElementById("target_1").getBoundingClientRect();
		console.log(distance_1.top);
		$('.order__mid--2').animate({ scrollTop: (distance_1.top - 100) }, 1000);
		$('.next').removeClass("next--show");
	});

	$('input[name=person]').on("click", function(){

		if ( $('.date').hasClass("date--show") ) {
			console.log();
		} else {
			setTimeout(function(){
				let distance_2 = document.getElementById("target_2").getBoundingClientRect();
				console.log(distance_2.top);
				$('.order__mid--2').animate({ scrollTop: (distance_2.top - 100) }, 1000);
			},100);
		}

		$('.next').removeClass("next--show");
		if ( $('input[name=person]:checked').val() != undefined ) {
			$('.date').addClass("date--show");
		} else {
			$('.date').removeClass("date--show");
			$('input[name=time]').prop('checked', false);
		}

	});

	$('input[name=time]').on("click", function(){
		if ( $('.form').hasClass("form--show") ) {
			console.log();
		} else {
			let distance_3 = document.getElementById("target_3").getBoundingClientRect();
			console.log(distance_3.top);
			$('.order__mid--2').animate({ scrollTop: (distance_3.top + 100) }, 1000);
		}
		if ( $('input[name=time]:checked').val() != undefined ) {
			$('.form').addClass("form--show");
			$('.account__card').removeClass("account__card--hide");
		} else {
			$('.form').removeClass("form--show");
			$('input[name=time]').prop('checked', false);
		}

		form();
	});


	Data = new Date();
	Year = Data.getFullYear();
	Month = +Data.getMonth() + 1;
	Day = Data.getDate();
	Week_day = Data.getDay();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();

	if ( Week_day == 1 )  { var Day_name = "Понедельник"; }
	if ( Week_day == 2 )  { var Day_name = "Вторник"; }
	if ( Week_day == 3 )  { var Day_name = "Среда"; }
	if ( Week_day == 4 )  { var Day_name = "Четверг"; }
	if ( Week_day == 5 )  { var Day_name = "Пятница"; }
	if ( Week_day == 6 )  { var Day_name = "Суббота"; }
	if ( Week_day == 0 )  { var Day_name = "Воскресенье"; }

	if ( Month == 1 )  { var Month_name = "Января"; }
	if ( Month == 2 )  { var Month_name = "Февраля"; }
	if ( Month == 3 )  { var Month_name = "Марта"; }
	if ( Month == 4 )  { var Month_name = "Апреля"; }
	if ( Month == 5 )  { var Month_name = "Мая"; }
	if ( Month == 6 )  { var Month_name = "Июня"; }
	if ( Month == 7 )  { var Month_name = "Июля"; }
	if ( Month == 8 )  { var Month_name = "Августа"; }
	if ( Month == 9 )  { var Month_name = "Сентября"; }
	if ( Month == 10 ) { var Month_name = "Октября"; }
	if ( Month == 11 ) { var Month_name = "Ноября"; }
	if ( Month == 12 ) { var Month_name = "Декабря"; }


	$('input').on("change", function(){
		setTimeout(function(){
			form();
		},100);
	});


	function form() {

		let city = $('.city__current').text();
		let place = $('input[name=place]:checked').val();
		let person = $('input[name=person]:checked').val();
		let servs = $('input[name="AllСheckbox"]').val();
		let time = $('input[name=time]:checked').val();

		$('#form_otdelenie').val( city + ", " + place );
		$('#form_usluga').val( servs );
		$('#form_master').val( person );
		$('#form_date').val( Day + "." + Month + "." + Year + ", " + Day_name + " " + time );

		$('#form_text_otdelenie').text( city + ", " + place );
		$('#form_text_usluga').text( servs );
		$('#form_text_master').text( person );
		$('#form_text_date').text( $('#date_header').text() + " " + time );



		$('.account__head').text( $('#date_header').text() + ", " + time );
		$('.account__serv').text( servs );
		$('.account__place').text( city + ", " + place );
		$('.account__master').text( person );

	}


	// $('#date_header').click(function(){
	// 	alert("hello");
	// 	picker();
	// });

	picker();

	function picker() {

		// Week_day = 2;
		// Month = 2;
		// Day = 17;

		if ( Month == 4 || Month == 6 || Month == 9 || Month == 11 ){
			var picker_days = 30;
		}
		if ( Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12 ){
			var picker_days = 31;
		}
		if ( Month == 2 ){
			var year_check = Year % 4;
			if ( year_check == 0 ){
				var picker_days = 29;
			} else {
				var picker_days = 28;
			}
		}

		
		let picker_start = Week_day - 1;
		$('.picker__label:eq(' + picker_start + ')').text(Day);
		$('#picker_radio_' + Week_day).val(Day + "." + Month);
		$('#picker_radio_' + Week_day).prop('checked', true);

		let picker_a = 0;
		while (picker_a <= picker_start) {
			$('#picker_radio_' + picker_a).attr('disabled',true);
			$('#picker_radio_' + picker_a).next().addClass("picker__label--dis");
			picker_a++;
		}
		let picker_b = 0;
		while ( picker_b < picker_start ){
			$('.picker__label:eq(' + picker_b + ')').text("");
			picker_b++;
		}

		let picker_rest = picker_days - Day;
		console.log("picker_rest:" + picker_rest);

		let picker_c = 0;
		let picker_d = Week_day;
		let picker_g = Day + 1;
		while ( picker_c < picker_rest ){
			$('.picker__label:eq(' + picker_d + ')').text( Day + 1 + picker_c );
			$('#picker_radio_' + (picker_d + 1)).val(picker_g + "." + Month);
			picker_c++;
			picker_d++;
			picker_g++;
		}

		let picker_full = 21 - Week_day - picker_rest;
		if ( picker_full > 0 ){

			let picker_e = 21 - picker_full;
			let picker_f = 1;
			let next_Month = Month + 1;
			while ( picker_e < 21 ){
				$('.picker__label:eq(' + picker_e + ')').text( picker_f );
				$('#picker_radio_' + (picker_e + 1)).val(picker_f + "." + next_Month);
				picker_e++;
				picker_f++;
			}

		}

		$('#date_header').text( Day + " " + Month_name + ", " + Day_name );



	}

	$('input[name=picker_radio]').on("change",function(){

		var picker_value = $('input[name=picker_radio]:checked').val();
		console.log( picker_value );

		var picker_split = picker_value.split(".");
		var picker_day = +$('input[name=picker_radio]:checked').next().next().text();

		if ( picker_split[1] == 1 )  { var picker_month = "Января"; }
		if ( picker_split[1] == 2 )  { var picker_month = "Февраля"; }
		if ( picker_split[1] == 3 )  { var picker_month = "Марта"; }
		if ( picker_split[1] == 4 )  { var picker_month = "Апреля"; }
		if ( picker_split[1] == 5 )  { var picker_month = "Мая"; }
		if ( picker_split[1] == 6 )  { var picker_month = "Июня"; }
		if ( picker_split[1] == 7 )  { var picker_month = "Июля"; }
		if ( picker_split[1] == 8 )  { var picker_month = "Августа"; }
		if ( picker_split[1] == 9 )  { var picker_month = "Сентября"; }
		if ( picker_split[1] == 10 ) { var picker_month = "Октября"; }
		if ( picker_split[1] == 11 ) { var picker_month = "Ноября"; }
		if ( picker_split[1] == 12 ) { var picker_month = "Декабря"; }

		if ( picker_day == 1 )  { var picker_day_name = "Понедельник"; }
		if ( picker_day == 2 )  { var picker_day_name = "Вторник"; }
		if ( picker_day == 3 )  { var picker_day_name = "Среда"; }
		if ( picker_day == 4 )  { var picker_day_name = "Четверг"; }
		if ( picker_day == 5 )  { var picker_day_name = "Пятница"; }
		if ( picker_day == 6 )  { var picker_day_name = "Суббота"; }
		if ( picker_day == 7 )  { var picker_day_name = "Воскресенье"; }

		$('#date_header').text( picker_split[0] + " " + picker_month + ", " + picker_day_name );
	});

});