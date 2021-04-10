$(document).ready(function() {

	$('#btn_1').click(function(){
		if ( $('input[name=place]:checked').val() != undefined ) {
			$('#step_1').addClass("order__step--hide");
			$('#step_2').removeClass("order__step--hide");
		}
	});

	$('#back_2').click(function(){
		$('#step_1').removeClass("order__step--hide");
		$('#step_2').addClass("order__step--hide");
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
			$('.order__head').text("Запись: Шаг 2 из 4");
		} else { 
			if ( distance_1.top <= 60 && distance_2.top <= 60 ) {
				$('.order__head').text("Запись: Шаг 3 из 4");
			} else {
				$('.order__head').text("Запись: Шаг 1 из 4");
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
			$('input[name=person]').prop('checked', false);
			$('input[name=time]').prop('checked', false);
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

	$('#date_header').text( Day + " " + Month_name + ", " + Day_name );


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
		$('#form_text_date').text( Day + "." + Month + "." + Year + ", " + Day_name + " " + time );

	}


});