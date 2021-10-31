$(document).ready(function() {

	$("#calc_slider_1").slider({
		animate: "slow",
		range: "min",
		value: 25000000,
		step: 500000,
		min: 1000000,
		max: 50000000,
		slide : function(event, ui) {
			$("#calc_value_1").val(ui.value);
			format();
			//calculation();
		}
	});

	$( "#calc_value_1" ).val($( "#calc_slider_1" ).slider( "value" ));

	$('#calc_value_1').on("change", function(){
		if ( $(this).val().split(" ").join('') < 500000 ) {
			$(this).val(500000);
		}
		if ( $(this).val().split(" ").join('') > 50000000 ) {
			$(this).val(50000000);
		}
		var sliderInput = $(this).val().split(" ").join('');
		$( "#calc_slider_1" ).slider( "value", sliderInput );
		format();
		//calculation();
	});

	$("#calc_slider_2").slider({
		animate: "slow",
		range: "min",
		value: 5000000,
		step: 500000,
		min: 1000000,
		max: 50000000,
		slide : function(event, ui) {
			$("#calc_value_2").val(ui.value);
			format();
			//calculation();
		}
	});

	$( "#calc_value_2" ).val($( "#calc_slider_2" ).slider( "value" ));

	$('#calc_value_2').on("change", function(){
		if ( $(this).val().split(" ").join('') < 500000 ) {
			$(this).val(500000);
		}
		if ( $(this).val().split(" ").join('') > 50000000 ) {
			$(this).val(50000000);
		}
		var sliderInput = $(this).val().split(" ").join('');
		$( "#calc_slider_2" ).slider( "value", sliderInput );
		format();
		//calculation();
	});

	$("#calc_slider_3").slider({
		animate: "slow",
		range: "min",
		value: 10,
		step: 1,
		min: 1,
		max: 30,
		slide : function(event, ui) {
			$("#calc_value_3").val(ui.value);
			format();
			//calculation();
		}
	});

	$( "#calc_value_3" ).val($( "#calc_slider_3" ).slider( "value" ));

	$('#calc_value_3').on("change", function(){
		if ( $(this).val().split(" ").join('') < 1 ) {
			$(this).val(1);
		}
		if ( $(this).val().split(" ").join('') > 30 ) {
			$(this).val(30);
		}
		var sliderInput = $(this).val().split(" ").join('');
		$( "#calc_slider_3" ).slider( "value", sliderInput );
		format();
		//calculation();
	});

	$("#calc_slider_4").slider({
		animate: "slow",
		range: "min",
		value: 5,
		step: 1,
		min: 1,
		max: 15,
		slide : function(event, ui) {
			$("#calc_value_4").val(ui.value);
			format();
			//calculation();
		}
	});

	$( "#calc_value_4" ).val($( "#calc_slider_4" ).slider( "value" ));

	$('#calc_value_4').on("change", function(){
		if ( $(this).val().split(" ").join('') < 1 ) {
			$(this).val(1);
		}
		if ( $(this).val().split(" ").join('') > 15 ) {
			$(this).val(30);
		}
		var sliderInput = $(this).val().split(" ").join('');
		$( "#calc_slider_4" ).slider( "value", sliderInput );
		format();
		//calculation();
	});


	$('#calc_value_1, #calc_value_2').each(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	});


	// $('input[name=calc_type]').change(function(){
	// 	calculation();
	// });

	// $('input[name=calc_do]').change(function(){
	// 	calculation();
	// });

	// $('input[name=calc_checkbox]').change(function(){
	// 	calculation();
	// });


	function format() {
		$('#calc_value_1, #calc_value_2').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		});
	}


	$('.calc__btn').click(function(){
		calculation();
	});


	calculation();
	function calculation() {

		var calc_value_1 = $('#calc_value_1').val().split(" ").join('');
		var calc_value_2 = $('#calc_value_2').val().split(" ").join('');
		var calc_value_3 = $('#calc_value_3').val().split(" ").join('');
		var calc_value_4 = $('#calc_value_4').val().split(" ").join('');

		// if ( calc_value_2 > calc_value_1 ) {
		// 	var sliderInput = calc_value_1 * 0.9;
		// 	$('#calc_value_2').val(calc_value_1 * 0.9);
		// 	$( "#calc_slider_2" ).slider( "value", sliderInput );
		// 	format();
		// 	calc_value_2 = $('#calc_value_2').val().split(" ").join('');
		// }

		var calc_credit = +calc_value_1 - +calc_value_2;

		var calc_period = calc_value_3 * 12;
		var calc_platej_cred = [];
		var calc_platej_perc = [];
		var calc_platej_full = [];

		var calc_sum_perc = 0;
		var calc_sum_platej = 0;

		if ( $('input[name=calc_checkbox]:checked').val() == 1 ){

			var calc_F = calc_credit * 
			(
				(calc_value_4 / 100 / 12) + 
				( (calc_value_4 / 100 / 12) / (((1 + (calc_value_4 / 100 / 12)) ** (12 * calc_value_3)) - 1) )
			);
			calc_sum_platej = calc_sum_platej + calc_F;

			$('#calc_result_1').text( calc_sum_platej.toLocaleString("ru") + " ₽" );
			$('#calc_result_2').text( calc_credit.toLocaleString("ru") + " ₽" );
			$('#calc_result_3').text( ((calc_sum_platej * calc_period) - +calc_credit).toLocaleString("ru") + " ₽" );
			$('#calc_result_4').text( (calc_sum_platej * calc_period).toLocaleString("ru") + " ₽" );
		
			var calc_pie = (((calc_sum_platej * calc_period) - +calc_credit) / (calc_sum_platej * calc_period)).toFixed(2);

		} else {

			for (i = 0; i < calc_period; i++) {

				if ( i == 0 ) {
					var calc_C = (calc_credit / 12 / calc_value_3);
					var calc_P = (calc_credit * calc_value_4 * 30.4166667 / 365 / 100)
					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				} else {
					var calc_C = (calc_credit / 12 / calc_value_3);
					var calc_P = ((+calc_credit - (calc_C * i)) * calc_value_4 * 30.4166667 / 365 / 100)
					var calc_F = +calc_C + +calc_P;
					calc_sum_perc = calc_sum_perc + calc_P;
					calc_sum_platej = calc_sum_platej + calc_F;
				}

				calc_platej_cred.push(calc_C.toFixed(2));
				calc_platej_perc.push(calc_P.toFixed(2));
				calc_platej_full.push(calc_F.toFixed(2));

				$('#calc_result_1').text( (calc_sum_platej / calc_period).toLocaleString("ru") + " ₽" );
				$('#calc_result_2').text( calc_credit.toLocaleString("ru") + " ₽" );
				$('#calc_result_3').text( calc_sum_perc.toLocaleString("ru") + " ₽" );
				$('#calc_result_4').text( (+calc_credit + +calc_sum_perc).toLocaleString("ru") + " ₽" );

				var calc_pie = (calc_sum_perc / (+calc_credit + +calc_sum_perc)).toFixed(2);
			}

		}




		

		$('.calc__part').empty();
		for( p = 0; p < (360 * calc_pie); p++){

			$('.calc__part').append(`
				<img src="img/pie.png" alt="" style="transform: rotate(${p}deg);" class="calc__rotate">
			`);

		}

		$('.calc__percent--1 span').text( (+calc_pie * 100).toFixed(0) + "%" );
		$('.calc__percent--2 span').text( ((1 - +calc_pie) * 100).toFixed(0) + "%" );


		if( calc_value_4 < 3 ) {
			$('.calc__percent--1').addClass("calc__percent--switch");
			$('.calc__percent--1').css({left: "90px", top: "45px"});
			$('.calc__percent--2').css({right: "80px", bottom: "70px"});
		}
		if( calc_value_4 >= 3 ) {
			$('.calc__percent--1').removeClass("calc__percent--switch");
			$('.calc__percent--1').css({left: "20px", top: "90px"});
			$('.calc__percent--2').css({right: "70px", bottom: "70px"});
		}
		if( calc_value_4 >= 5 ) {
			$('.calc__percent--1').css({left: "30px", top: "75px"});
			$('.calc__percent--2').css({right: "70px", bottom: "70px"});
		}
		if( calc_value_4 >= 7 ) {
			$('.calc__percent--1').css({left: "50px", top: "55px"});
			$('.calc__percent--2').css({right: "70px", bottom: "70px"});
		}
		if( calc_value_4 >= 10 ) {
			$('.calc__percent--1').css({left: "70px", top: "45px"});
			$('.calc__percent--2').css({right: "70px", bottom: "70px"});
		}
		if( calc_value_4 >= 12 ) {
			$('.calc__percent--1').css({left: "90px", top: "45px"});
			$('.calc__percent--2').css({right: "90px", bottom: "60px"});
		}



		
		$('#calc_value_1, #calc_value_2').each(function(){
			$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		});
	}















	$('.calc__current').click(function(){
		$(this).next().toggleClass("calc__list--open");
		calculation();
	});

	$('.calc__li').click(function(){
		$('.calc__list').removeClass("calc__list--open");
		$(this).parent().prev().text( $(this).text() );
		calculation();
	});




	$('.calc__info').hover(function(){
		$(this).next().css({display: "block"});
	}, function(){
		$(this).next().css({display: "none"});
	});


	$('input[name=calc_variant]').change(function(){
		if ( $('input[name=calc_variant]:checked').val() == 1 ) {
			$('.calc__name--1').text("Стоимость недвижимости");
		} else {
			$('.calc__name--1').text("Сумма кредита");
		}

	});



});