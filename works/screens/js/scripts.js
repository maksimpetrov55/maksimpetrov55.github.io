$(document).ready(function() {

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

	$('.calc__input').change(function(){
		calculate();
	});
	$('input[name=calc_color]').change(function(){
		calculate();
	});
	$('input[name=params]').change(function(){
		calculate();
	});
	$('.calc__select').change(function(){
		calculate();
	});

	$('#calc_select_2').css({display: "none"});
	$('input[name=calc_use]').change(function(){
		var calc_use = $('input[name=calc_use]:checked').val();
		if ( calc_use == 1 ){
			$('#calc_select').css({display: "block"});
			$('#calc_select_2').css({display: "none"});
		} else {
			$('#calc_select_2').css({display: "block"});
			$('#calc_select').css({display: "none"});
		}
		calculate();
	});


	calculate();

	function calculate() {



		var calc_height = $('#calc_height').val();
		var calc_width = $('#calc_width').val();

		var calc_color = $('input[name=calc_color]:checked').val();

		if ( calc_color == 1 ){
			var calc_color_hex = "#CA321E";
			var calc_price = 1000;
		}
		if ( calc_color == 2 ){
			var calc_color_hex = "#2457D8";
			var calc_price = 1100;
		}
		if ( calc_color == 3 ){
			var calc_color_hex = "#219015";
			var calc_price = 1100;
		}
		if ( calc_color == 4 ){
			var calc_color_hex = "#E8D505";
			var calc_price = 1100;
		}
		if ( calc_color == 5 ){
			var calc_color_hex = "#ffffff";
			var calc_price = 1100;
		}
		if ( calc_color == 6 ){
			var calc_color_hex = "linear-gradient(90deg, rgba(255,0,0,1) 15%, rgba(255,128,0,1) 30%, rgba(0,255,0,1) 50%, rgba(0,240,255,1) 70%, rgba(0,0,255,1) 85%, rgba(255,0,255,1) 100%)";
		}

		var calc_use = $('input[name=calc_use]:checked').val();
		if ( calc_use == 1 ){
			var calc_select = $('#calc_select').val();
			if ( calc_select == 1.25) {
				var select_name = 1.25;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 256;
				var select_pixel_2 = 128;
				var select_price = 480;
				if ( calc_color == 6 ){var calc_price = 31680;}
			}
			if ( calc_select == 1.66) {
				var select_name = 1.66;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 192;
				var select_pixel_2 = 96;
				var select_price = 265;
				if ( calc_color == 6 ){var calc_price = 17490;}
			}
			if ( calc_select == 1.83) {
				var select_name = 1.83;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 174;
				var select_pixel_2 = 87;
				var select_price = 165;
				if ( calc_color == 6 ){var calc_price = 10890;}
			}
			if ( calc_select == 2) {
				var select_name = 2;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 160;
				var select_pixel_2 = 80;
				var select_price = 97;
				if ( calc_color == 6 ){var calc_price = 6402;}
			}
			if ( calc_select == 2.5) {
				var select_name = 2.5;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 128;
				var select_pixel_2 = 64;
				var select_price = 68;
				if ( calc_color == 6 ){var calc_price = 4488;}
			}
			if ( calc_select == 3) {
				var select_name = 3;
				var select_size_1 = 192;
				var select_size_2 = 192;
				var select_pixel_1 = 64;
				var select_pixel_2 = 64;
				var select_price = 51;
				if ( calc_color == 6 ){var calc_price = 3366;}
			}
			if ( calc_select == 3.07) {
				var select_name = 3.07;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 104;
				var select_pixel_2 = 52;
				var select_price = 48;
				if ( calc_color == 6 ){var calc_price = 3168;}
			}
			if ( calc_select == 4) {
				var select_name = 4;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 80;
				var select_pixel_2 = 40;
				var select_price = 40;
				if ( calc_color == 6 ){var calc_price = 2640;}
			}
			if ( calc_select == 5) {
				var select_name = 5;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 64;
				var select_pixel_2 = 32;
				var select_price = 36;
				if ( calc_color == 6 ){var calc_price = 2376;}
			}
		} else {
			var calc_select = $('#calc_select_2').val();
			if ( calc_select == 4) {
				var select_name = 4;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 80;
				var select_pixel_2 = 40;
				var select_price = 65;
				if ( calc_color == 6 ){var calc_price = 4290;}
			}
			if ( calc_select == 4.81) {
				var select_name = 4.81;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 67;
				var select_pixel_2 = 33;
				var select_price = 60;
				if ( calc_color == 6 ){var calc_price = 3960;}
			}
			if ( calc_select == 5) {
				var select_name = 5;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 64;
				var select_pixel_2 = 32;
				var select_price = 52;
				if ( calc_color == 6 ){var calc_price = 3432;}
			}
			if ( calc_select == 6) {
				var select_name = 6;
				var select_size_1 = 192;
				var select_size_2 = 192;
				var select_pixel_1 = 32;
				var select_pixel_2 = 32;
				var select_price = 47;
				if ( calc_color == 6 ){var calc_price = 3102;}
			}
			if ( calc_select == 6.66) {
				var select_name = 6.66;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 48;
				var select_pixel_2 = 24;
				var select_price = 42;
				if ( calc_color == 6 ){var calc_price = 2772;}
			}
			if ( calc_select == 8) {
				var select_name = 8;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 40;
				var select_pixel_2 = 20;
				var select_price = 38;
				if ( calc_color == 6 ){var calc_price = 2508;}
			}
			if ( calc_select == 10) {
				var select_name = 10;
				var select_size_1 = 320;
				var select_size_2 = 160;
				var select_pixel_1 = 32;
				var select_pixel_2 = 16;
				var select_price = 34;
				if ( calc_color == 6 ){var calc_price = 2244;}
			}
		}



		

		if ( calc_color_hex.length > 10 ) {
			$('.calc__more').css({display: "block"});
		} else {
			$('.calc__more').css({display: "none"});
		}
		

		$('.calc__module').empty();

		for( i = 0; i < calc_height; i++){
			$('.calc__module').append(`
				<div class="calc__row"></div>
			`);
		}

		for( c = 0; c < calc_width; c++){
			$('.calc__row').each(function(){
				$(this).append(`
					<div class="calc__cell"></div>
				`);
			});
		}

		$('.calc__cell').css({background: calc_color_hex});


		$('#var2').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		$('#var3').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		$('#var4').text( (calc_height * select_pixel_1) + " x " + (calc_width * select_pixel_2) + " px" );
		$('#var5').text( calc_select + " мм" );
		$('#var6').text( calc_select + " мм" );
		$('#var7').text( select_size_1 + " x " + select_size_2 + " мм" );
		$('#var8').text( select_pixel_1 + " x " + select_pixel_2 + " px" );
		$('#var9').text( (calc_height * 16) + " x " + (calc_width * 32) + " см" );
		$('#var10').text( (calc_height * select_pixel_1) + " x " + (calc_width * select_pixel_2) + " px" );

		
		if ( $('#calc_montaj_1').is(':checked') ){calc_montag_1 = $('#calc_montaj_1').val() * calc_height * calc_width;} else { var calc_montag_1 = 0;}
		if ( $('#calc_montaj_2').is(':checked') ){calc_montag_2 = $('#calc_montaj_2').val() * calc_height * calc_width;} else { var calc_montag_2 = 0;}
		if ( $('#calc_montaj_3').is(':checked') ){calc_montag_3 = $('#calc_montaj_3').val() * calc_height * calc_width;} else { var calc_montag_3 = 0;}
		if ( $('#calc_montaj_4').is(':checked') ){calc_montag_4 = $('#calc_montaj_4').val() * calc_height * calc_width;} else { var calc_montag_4 = 0;}
		if ( $('#calc_montaj_5').is(':checked') ){calc_montag_5 = $('#calc_montaj_5').val() * calc_height * calc_width;} else { var calc_montag_5 = 0;}


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
		
		var calc_screen = calc_price * calc_height * calc_width;

		$('#summ1').text( calc_montag + " руб" );
		$('#summ2').text( calc_screen + " руб" );
		$('#summ3').text( calc_computer + " руб" );
		// $('#summ4').text(  + " руб" );
		$('#summ5').text( (+calc_montag + +calc_computer + +calc_screen) + " руб" );

		$('#var1').text( (+calc_montag + +calc_computer + +calc_screen) + " руб" );



	}

});