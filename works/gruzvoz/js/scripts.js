$(document).ready(function() {

	$('.calc__checkbox').click(function(){
		$(this).next().toggleClass("calc__tick--show");
	});
	
	var calc_sborka = "No";
	var calc_upakovka = "No";



	var where_get = "none";
	var where_go = "none";

	// msg
	$('#calc_btn_msg').click(function(){
		side_open();
		$('.msg').addClass("msg--show");
	});

	var msg_text = "No comment";
	$('#msg_textarea').change(function(){
		var msg_text = $(this).val();
		if ( msg_text != "" ) {
			$('.calc_sub_msg').text( "Comment placed" );
		} else {
			$('.calc_sub_msg').text( "No comment" );
		}
	});

	$('.msg__confirm').click(function(){
		side_close();
	});
	// msg


	// workers
	var workers_count = $('input[name="workers"]:checked').val();
	$('input[name="workers"]').change(function(){
		var workers_text = $("input[name='workers']:checked").next().text();
		$('.calc_sub_workers').text(workers_text);
		$('.workers__tick--show').removeClass("workers__tick--show");
		$("input[name='workers']:checked").next().next().toggleClass("workers__tick--show");
		calculate();
		side_close();
	});

	$('#calc_btn_workers').click(function(){
		side_open();
		$('.workers').addClass("workers--show");
	});
	// workers


	// car
	$('#calc_btn_car').click(function(){
		side_open();
		$('.car').addClass("car--show");
	});

	var car_type = $('input[name="car"]:checked').val();
	$('input[name="car"]').change(function(){
		var car_text = $("input[name='car']:checked").next().children(".car__label--bold").text();
		var car_type = $('input[name="car"]:checked').val();
		$('.calc_sub_car').text(car_text);
		$('.car__tick--show').removeClass("car__tick--show");
		$("input[name='car']:checked").next().next().toggleClass("car__tick--show");
		side_close();
	});
	// car

	// hours
	$('#calc_btn_hours').click(function(){
		side_open();
		$('.hours').addClass("hours--show");
	});
	var hours_count = $("input[name='hours']:checked").val();
	$('input[name="hours"]').change(function(){
		var hours_text = $("input[name='hours']:checked").next().text();
		$('.calc_sub_hours').text(hours_text);
		$('.hours__tick--show').removeClass("hours__tick--show");
		$("input[name='hours']:checked").next().next().toggleClass("hours__tick--show");
		calculate();
		side_close();
	});
	// hours

	// date
	$('#calc_btn_date').click(function(){
		side_open();
		$('.date').addClass("date--show");
	});

	var date = new Date();
	var dateDay = date.getDate();
	var dateMonth = date.getMonth()+1;
	var dateYear = date.getFullYear();
	if ( dateDay < 10 ) {
		var dateDay = "0" + date.getDate();
	}
	if ( +dateMonth < 10 ) {
		var dateMonth = "0" + dateMonth;
	}

	var full_date = dateYear + "-" + dateMonth + "-" + dateDay;
	console.log( full_date );
	$('#date_date').val( full_date );
	$('#date_time').val( "00:00" );

	// var li_count =  $('.date__li').length;

	// console.log(li_count);

	// for (let i = 0; i < 3; i++) {
	// 	var step = +dateDay + +i; 
	// 	$('.date__li:eq(' + i + ')').text( step );
	// }

	var date_count = $("#date_date").val();
	var time_count = "Not set";
	$(".date__ok").click(function(){
		var date_count = $("#date_date").val();
		var time_count = $("#date_time").val();
		$('.calc_sub_date').text( date_count + " " + time_count );
		side_close();
	});
	// date

	// form
	$('#itog').click(function(){
		side_open();
		make_order();
		$('.form').addClass("form--show");
	});

	$('.form__back').click(function(){
		side_close();
	});
	// form

	// otkuda
	$('#calc_btn_otkuda').click(function(){
		side_open();
		$('.otkuda').addClass("otkuda--show");
	});
	// otkuda

	// kuda
	$('#calc_btn_kuda').click(function(){
		side_open();
		$('.kuda').addClass("kuda--show");
	});
	// kuda


	$('.header__back').click(function(){
		side_close();
	});

	function side_open() {
		$('.side').addClass("side--open");
		$('.header__back').addClass("header__back--show");
	}

	function side_close() {
		$('.side').removeClass("side--open");
		$('.header__back').removeClass("header__back--show");
		$('.workers').removeClass("workers--show");
		$('.msg').removeClass("msg--show");
		$('.car').removeClass("car--show");
		$('.hours').removeClass("hours--show");
		$('.date').removeClass("date--show");
		$('.form').removeClass("form--show");
		$('.otkuda').removeClass("otkuda--show");
		$('.kuda').removeClass("kuda--show");
	}

	$('.otkuda__confirm').click(function(){
		if ( $('.otkuda__value').text() != "" ) {
			side_close();
		} else {
			alert("Please set address");
		}
	});
	$('.kuda__confirm').click(function(){
		if ( $('.kuda__value').text() != "" ) {
			side_close();
		} else {
			alert("Please set address");
		}
	});

	calculate();

	function calculate() {

		var hours_count = $("input[name='hours']:checked").val();
		var workers_count = $('input[name="workers"]:checked').val();

		if ( workers_count == 2 ) {
			var calc__rent = 79;
		}
		if ( workers_count == 3 ) {
			var calc__rent = 109;
		}
		if ( workers_count == 4 ) {
			var calc__rent = 129;
		}

		var calc__price = +calc__rent * +hours_count;

		$('#itog_text_1').text( "Total: $" + calc__price + " " );
		$('#itog_text_2').text( "(further $" + calc__rent + " per hour)" );

	}

	function make_order() {

		if ( $( 'input[name="calc_sborka"]' ).prop('checked') == true ) { var calc_sborka = "Yes"; } else { var calc_sborka = "No"; }
		if ( $( 'input[name="calc_upakovka"]' ).prop('checked') == true ) { var calc_upakovka = "Yes"; } else { var calc_upakovka = "No"; }
		var msg_text = $('#msg_textarea').val();
		var car_type = $('input[name="car"]:checked').val();
		var date_count = $("#date_date").val();
		var time_count = $("#date_time").val();
		var hours_count = $("input[name='hours']:checked").val();
		var workers_count = $("input[name='workers']:checked").val();
		var where_get = $('.otkuda__value').text();
		var where_go = $('.kuda__value').text();

		$('#form_text').val(
			"Where to get: " + where_get + "\n" + 
			" " + "\n" + 
			"Where to go: " + where_go + "\n" + 
			" " + "\n" + 
			"Your comment: " + msg_text + "\n" + 
			" " + "\n" + 
			"Your vehicle: " + car_type + "\n" + 
			" " + "\n" + 
			"Date: " + date_count + "\n" + 
			" " + "\n" + 
			"Time: " + time_count + "\n" + 
			" " + "\n" + 
			"Work time: " + hours_count + " hours" + "\n" + 
			" " + "\n" + 
			"Workers: " + workers_count + "\n" + 
			" " + "\n" + 
			"Furniture work: " + calc_sborka + "\n" + 
			" " + "\n" + 
			"Packaging materials: " + calc_upakovka + "\n" + 
			" " + "\n"
		);

		$('.form__info').html(
			"Where to get: " + where_get + "<br>" + 
			" " + "<br>" + 
			"Where to go: " + where_go + "<br>" + 
			" " + "<br>" + 
			"Your comment: " + msg_text + "<br>" + 
			" " + "<br>" + 
			"Your vehicle: " + car_type + "<br>" + 
			" " + "<br>" + 
			"Date: " + date_count + "<br>" + 
			" " + "<br>" + 
			"Time: " + time_count + "<br>" + 
			" " + "<br>" + 
			"Work time: " + hours_count + " hours" + "<br>" + 
			" " + "<br>" + 
			"Workers: " + workers_count + "<br>" + 
			" " + "<br>" + 
			"Furniture work: " + calc_sborka + "<br>" + 
			" " + "<br>" + 
			"Packaging materials: " + calc_upakovka + "<br>" + 
			" " + "<br>"
		);
	}

});