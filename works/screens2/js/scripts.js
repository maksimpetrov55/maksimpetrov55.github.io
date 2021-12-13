$(document).ready(function() {

	for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
		e.style.setProperty('--value', e.value);
		e.style.setProperty('--min', e.min == '' ? '0' : e.min);
		e.style.setProperty('--max', e.max == '' ? '100' : e.max);
		e.addEventListener('input', () => e.style.setProperty('--value', e.value));
	  }

	$('.calc__minus').click(function(){
		let value = $(this).next().val();
		if ( value <= 0 ) {
			$(this).next().val(0);
		} else {
			$(this).next().val( +value - 1 );
		}
		calculate();
	});

	$('.calc__plus').click(function(){
		let value = $(this).prev().val();
		$(this).prev().val( +value + 1 );
		calculate();
	});

	$('#calc_width').on("input", function(){
		$(this).prev().find(".calc__value").text( $(this).val() );
		calculate();
	});
	$('#calc_height').on("input", function(){
		$(this).prev().find(".calc__value").text( $(this).val() );
		calculate();
	});
	$('#calc_width2').on("input", function(){
		$(this).prev().prev().find(".calc__value").text( $(this).val() );
		calculate();
	});
	$('#calc_height2').on("input", function(){
		$(this).prev().prev().find(".calc__value").text( $(this).val() );
		calculate();
	});

	$('#calc_step').on("input", function(){
		if ( $(this).val() == 1 ) { $(this).prev().find(".calc__value").text( 1.25 ); }
		if ( $(this).val() == 2 ) { $(this).prev().find(".calc__value").text( 1.66 ); }
		if ( $(this).val() == 3 ) { $(this).prev().find(".calc__value").text( 1.83 ); }
		if ( $(this).val() == 4 ) { $(this).prev().find(".calc__value").text( 2 ); }
		if ( $(this).val() == 5 ) { $(this).prev().find(".calc__value").text( 2.5 ); }
		if ( $(this).val() == 6 ) { $(this).prev().find(".calc__value").text( 3.07 ); }
		if ( $(this).val() == 7 ) { $(this).prev().find(".calc__value").text( 3 ); }
		if ( $(this).val() == 8 ) { $(this).prev().find(".calc__value").text( 4 ); }
		if ( $(this).val() == 9 ) { $(this).prev().find(".calc__value").text( 5 ); }
		calculate();
	});

	$('#calc_step2').on("input", function(){
		if ( $(this).val() == 1 ) { $(this).prev().prev().find(".calc__value").text( 4 ); }
		if ( $(this).val() == 2 ) { $(this).prev().prev().find(".calc__value").text( 4.81 ); }
		if ( $(this).val() == 3 ) { $(this).prev().prev().find(".calc__value").text( 5 ); }
		if ( $(this).val() == 4 ) { $(this).prev().prev().find(".calc__value").text( 6 ); }
		if ( $(this).val() == 5 ) { $(this).prev().prev().find(".calc__value").text( 6.66 ); }
		if ( $(this).val() == 6 ) { $(this).prev().prev().find(".calc__value").text( 8 ); }
		if ( $(this).val() == 7 ) { $(this).prev().prev().find(".calc__value").text( 10 ); }
		calculate();
	});

	$('#calc_step3').on("input", function(){
		if ( $(this).val() == 1 ) { $(this).prev().prev().prev().find(".calc__value").text( "25x25" ); }
		if ( $(this).val() == 2 ) { $(this).prev().prev().prev().find(".calc__value").text( "50x25" ); }
		if ( $(this).val() == 3 ) { $(this).prev().prev().prev().find(".calc__value").text( "31x31" ); }
		calculate();
	});


	theswitch()
	$('input[name=calc_type]').change(function(){
		theswitch();
	});

	function theswitch() {
		var calc_type = $('input[name=calc_type]:checked').val();
		if( calc_type == 1 ){
			$('.calc__bgvideo--1').css({display: "block"});
			$('.calc__bgvideo--2').css({display: "none"});
			$('.calc__module').addClass("calc__module--transform1");
			$('.calc__module').removeClass("calc__module--transform2");
			$('#calc_width2').css({display: "none"});
			$('#calc_width').css({display: "block"});
			$('#calc_height2').css({display: "none"});
			$('#calc_height').css({display: "block"});
			$('#calc_width').prev().find(".calc__value").text( $('#calc_width').val() );
			$('#calc_height').prev().find(".calc__value").text( $('#calc_height').val() );

			$('#calc_step3').css({display: "none"});
			$('#calc_step2').css({display: "none"});
			$('#calc_step').css({display: "block"});
			$('#calc_step').trigger('input');
		}
		if( calc_type == 2 ){
			$('.calc__bgvideo--2').css({display: "block"});
			$('.calc__bgvideo--1').css({display: "none"});
			$('.calc__module').addClass("calc__module--transform2");
			$('.calc__module').removeClass("calc__module--transform1");
			$('#calc_width2').css({display: "none"});
			$('#calc_width').css({display: "block"});
			$('#calc_height2').css({display: "none"});
			$('#calc_height').css({display: "block"});
			$('#calc_width').prev().find(".calc__value").text( $('#calc_width').val() );
			$('#calc_height').prev().find(".calc__value").text( $('#calc_height').val() );

			$('#calc_step3').css({display: "none"});
			$('#calc_step').css({display: "none"});
			$('#calc_step2').css({display: "block"});
			$('#calc_step2').trigger('input');
		}
		if( calc_type == 3 ){
			$('.calc__bgvideo--2').css({display: "block"});
			$('.calc__bgvideo--1').css({display: "none"});
			$('.calc__module').addClass("calc__module--transform2");
			$('.calc__module').removeClass("calc__module--transform1");
			$('#calc_width').css({display: "none"});
			$('#calc_width2').css({display: "block"});
			$('#calc_height').css({display: "none"});
			$('#calc_height2').css({display: "block"});
			$('#calc_width2').prev().prev().find(".calc__value").text( $('#calc_width2').val() );
			$('#calc_height2').prev().prev().find(".calc__value").text( $('#calc_height2').val() );

			$('#calc_step').css({display: "none"});
			$('#calc_step2').css({display: "none"});
			$('#calc_step3').css({display: "block"});
			$('#calc_step3').trigger('input');
		}
		calculate();
	}


	$('input[name=calc_year]').change(function(){
		calculate();
	});
	$('input[name=params]').change(function(){
		calculate();
	});


	calculate();

	function calculate() {

		var calc_type = $('input[name=calc_type]:checked').val();
		if( calc_type == 1 ){
			var calc_height = $('#calc_height').val();
			var calc_width = $('#calc_width').val();
			$('.calc__module').css({
				width: (100 + (calc_width * 10)),
				height: (100 + (calc_height * 5)),
			});

			var calc_inp_step = 0.96;

			var calc_step = $('#calc_step_val').text();
			if ( calc_step == 1.25 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 256;
				var calc_step_pixel2 = 128;
				var calc_price = 601445;
			}
			
			if ( calc_step == 1.66 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 193;
				var calc_step_pixel2 = 96;
				var calc_price = 332833;
			}
			
			if ( calc_step == 1.83 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 175;
				var calc_step_pixel2 = 87;
				var calc_price = 207480;
			}
			
			if ( calc_step == 2 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 160;
				var calc_step_pixel2 = 80;
				var calc_price = 129984;
			}
			
			if ( calc_step == 2.5 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 128;
				var calc_step_pixel2 = 64;
				var calc_price = 90773;
			}
			
			if ( calc_step == 3.07 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 104;
				var calc_step_pixel2 = 52;
				var calc_price = 66381;
			}
			
			if ( calc_step == 3 ) {
				var calc_step_size1 = 192;
				var calc_step_size2 = 192;
				var calc_step_pixel1 = 64;
				var calc_step_pixel2 = 64;
				var calc_price = 67925;
			}
			
			if ( calc_step == 4 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 80;
				var calc_step_pixel2 = 40;
				var calc_price = 53599;
			}
			
			if ( calc_step == 5 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 64;
				var calc_step_pixel2 = 32;
				var calc_price = 47548;
			}
		}
		if( calc_type == 2 ){
			var calc_height = $('#calc_height').val();
			var calc_width = $('#calc_width').val();
			$('.calc__module').css({
				width: (100 + (calc_width * 4)),
				height: (100 + (calc_height * 2)),
			});

			var calc_inp_step = 0.96;

			var calc_step = $('#calc_step_val').text();
			if ( calc_step == 4 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 80;
				var calc_step_pixel2 = 40;
				var calc_price = 85215;
			}
			
			if ( calc_step == 4.81 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 67;
				var calc_step_pixel2 = 33;
				var calc_price = 62985;
			}
			
			if ( calc_step == 5 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 64;
				var calc_step_pixel2 = 32;
				var calc_price = 70086;
			}
			
			if ( calc_step == 6 ) {
				var calc_step_size1 = 192;
				var calc_step_size2 = 192;
				var calc_step_pixel1 = 32;
				var calc_step_pixel2 = 32;
				var calc_price = 63911;
			}
			
			if ( calc_step == 6.66 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 48;
				var calc_step_pixel2 = 24;
				var calc_price = 57428;
			}
			
			if ( calc_step == 8 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 40;
				var calc_step_pixel2 = 20;
				var calc_price = 53723;
			}
			
			if ( calc_step == 10 ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 32;
				var calc_step_pixel2 = 16;
				var calc_price = 43843;
			}
		}
		if( calc_type == 3 ){
			var calc_height = $('#calc_height2').val();
			var calc_width = $('#calc_width2').val();
			$('.calc__module').css({
				width: (100 + (calc_width * 4)),
				height: (100 + (calc_height * 2)),
			});

			var calc_inp_step = 1;

			var calc_step = $('#calc_step_val').text();
			if ( calc_step == "25x25" ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 13;
				var calc_step_pixel2 = 6;
				var calc_price = 123240;
			}
			
			if ( calc_step == "50x25" ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 6;
				var calc_step_pixel2 = 3;
				var calc_price = 147875;
			}
			
			if ( calc_step == "31x31" ) {
				var calc_step_size1 = 320;
				var calc_step_size2 = 160;
				var calc_step_pixel1 = 10;
				var calc_step_pixel2 = 5;
				var calc_price = 74425;
			}
			
		}

		var calc_rate = $('input[name=calc_year]:checked').val();
		var calc_year = $('input[name=calc_year]:checked').next().text();

		$('#var2').text( (calc_height * calc_width).toFixed(2) + " м2" );
		$('#var3').text( (calc_width * 1000) + " x " + (calc_height * 1000) + " мм" );
		$('#var4').text( (calc_width * 1000 / calc_step_size1 * calc_step_pixel1) + " x " + (calc_height * 1000 / calc_step_size2 * calc_step_pixel2) + " px" );

		$('#var5').text( calc_step + " мм" );
		$('#var10').text( calc_step + " мм" );
		$('#var6').text( calc_year );

		$('#var7').text( (calc_width * 1000) + " x " + (calc_height * 1000) + " мм" );

		$('#var11').text( calc_step_size1 + " x " + calc_step_size2 + " мм" );
		$('#var12').text( calc_step_pixel1 + " x " + calc_step_pixel2 + " px" );

		$('#var13').text( (calc_width * 1000) + " x " + (calc_height * 1000) + " мм" );
		$('#var14').text( (calc_width * 1000 / calc_step_size1 * calc_step_pixel1) + " x " + (calc_height * 1000 / calc_step_size2 * calc_step_pixel2) + " px" );
		$('#var15').text( (calc_height * calc_width).toFixed(2) + " м2" );


		// $('#var2').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		// $('#var3').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		// $('#var4').text( (calc_height * select_pixel_1) + " x " + (calc_width * select_pixel_2) + " px" );
		// $('#var5').text( calc_select + " мм" );
		// $('#var6').text( calc_select + " мм" );
		// $('#var7').text( select_size_1 + " x " + select_size_2 + " мм" );
		// $('#var8').text( select_pixel_1 + " x " + select_pixel_2 + " px" );
		// $('#var9').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		// $('#var10').text( (calc_height * select_pixel_1) + " x " + (calc_width * select_pixel_2) + " px" );


		if ( $('#calc_montaj_1').is(':checked') ){calc_montag_1 = $('#calc_montaj_1').val() * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step));} else { var calc_montag_1 = 0;}
		if ( $('#calc_montaj_2').is(':checked') ){calc_montag_2 = $('#calc_montaj_2').val() * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step));} else { var calc_montag_2 = 0;}
		if ( $('#calc_montaj_3').is(':checked') ){calc_montag_3 = $('#calc_montaj_3').val() * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step));} else { var calc_montag_3 = 0;}
		if ( $('#calc_montaj_4').is(':checked') ){calc_montag_4 = $('#calc_montaj_4').val() * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step));} else { var calc_montag_4 = 0;}
		if ( $('#calc_montaj_5').is(':checked') ){calc_montag_5 = $('#calc_montaj_5').val() * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step));} else { var calc_montag_5 = 0;}


		var calc_montag = 
			+calc_montag_1 + 
			+calc_montag_2 + 
			+calc_montag_3 + 
			+calc_montag_4 + 
			+calc_montag_5
		;

		if ( $('#calc_params_1').is(':checked') ){calc_params_1 = $('#calc_params_1').val();} else { var calc_params_1 = 0;}
		if ( $('#calc_params_2').is(':checked') ){calc_params_2 = $('#calc_params_2').val();} else { var calc_params_2 = 0;}
		if ( $('#calc_params_3').is(':checked') ){calc_params_3 = $('#calc_params_3').val();} else { var calc_params_3 = 0;}
		if ( $('#calc_params_4').is(':checked') ){calc_params_4 = $('#calc_params_4').val();} else { var calc_params_4 = 0;}
		if ( $('#calc_params_5').is(':checked') ){calc_params_5 = $('#calc_params_5').val();} else { var calc_params_5 = 0;}
		if ( $('#calc_params_6').is(':checked') ){calc_params_6 = $('#calc_params_6').val();} else { var calc_params_6 = 0;}

		var calc_computer = 
			+calc_params_1 + 
			+calc_params_2 + 
			+calc_params_3 + 
			+calc_params_4 + 
			+calc_params_5 + 
			+calc_params_6
		;

		var calc_screen = (calc_price * ((calc_height / calc_inp_step) * (calc_width / calc_inp_step)) * calc_rate).toFixed(0);

		$('#summ1').text( calc_montag + " руб" );
		$('#summ2').text( calc_screen + " руб" );
		$('#summ3').text( calc_computer + " руб" );
		// $('#summ4').text(  + " руб" );
		$('#summ5').text( (+calc_montag + +calc_computer + +calc_screen) + " руб" );

		$('#var1').text( (+calc_montag + +calc_computer + +calc_screen) + " руб" );


	}





});