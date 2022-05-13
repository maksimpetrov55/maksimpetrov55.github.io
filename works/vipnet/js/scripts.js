$(document).ready(function() {


	$('.calc__minus').click(function(){
		let inp = $(this).next();
		let value = $(this).next().val();
		
		if ( value >= 1 ) {
			inp.val( +value - 1 );
		}
		calculation();
	});

	$('.calc__plus').click(function(){
		let inp = $(this).prev();
		let value = $(this).prev().val();
		
		if ( value >= 0 ) {
			inp.val( +value + 1 );
		}
		calculation();
	});


	$('input[name=calc_type]').change(function(){
		calculation();
	});

	calculation();

	function calculation() {
		
		var calc_type = $('input[name=calc_type]:checked').val();


		var calc_inp_1_1_1 = $('#calc_inp_1_1_1').val();

		var calc_inp_2_1_1 = $('#calc_inp_2_1_1').val();
		var calc_inp_2_2_1 = $('#calc_inp_2_2_1').val();
		var calc_inp_2_3_1 = $('#calc_inp_2_3_1').val();
		var calc_inp_2_3_2 = $('#calc_inp_2_3_2').val();

		var calc_inp_3_1_1 = $('#calc_inp_3_1_1').val();
		var calc_inp_3_1_2 = $('#calc_inp_3_1_2').val();
		var calc_inp_3_2_1 = $('#calc_inp_3_2_1').val();
		//var calc_inp_3_2_2 = $('#calc_inp_3_2_2').val();
		var calc_inp_3_3_1 = $('#calc_inp_3_3_1').val();
		var calc_inp_3_3_2 = $('#calc_inp_3_3_2').val();


		if ( calc_type == 1 ) {
			$('#calc_body_1').fadeIn();
			$('#calc_body_2').fadeOut(0);
			$('#calc_body_3').fadeOut(0);
			$('#calc_body_4').fadeOut(0);
			$('.calc__hide').css({display: "block"});

			let calc_line_1 = calc_inp_1_1_1 * 1500;

			var calc_result = calc_line_1;

			$('.calc__summ').html(`
				<div class="calc__price">помесячная оплата: <span class="calc__price--span">${calc_result.toLocaleString("ru") } ₽</span></div>
				<div class="calc__price">оплата по полугодиям: <span class="calc__price--span">${(calc_result * 0.9).toLocaleString("ru") } ₽</span></div>
				<div class="calc__price">оплата за весь год: <span class="calc__price--span">${(calc_result * 0.8).toLocaleString("ru") } ₽</span></div>
			`);
		}

		if ( calc_type == 2 ) {
			$('#calc_body_2').fadeIn();
			$('#calc_body_1').fadeOut(0);
			$('#calc_body_3').fadeOut(0);
			$('#calc_body_4').fadeOut(0);
			$('.calc__hide').css({display: "block"});

			let calc_line_1 = calc_inp_2_1_1 * 7790;
			let calc_line_2 = calc_inp_2_2_1 * 2350;
			let calc_line_3 = calc_inp_2_3_1 * calc_inp_2_3_2 * 1000;

			var calc_result = calc_line_1 + calc_line_2 + calc_line_3;

			$('.calc__summ').html(`
				<div class="calc__price">оплата за весь год: <span class="calc__price--span">${calc_result.toLocaleString("ru") } ₽</span></div>
			`);
		}

		if ( calc_type == 3 ) {
			$('#calc_body_3').fadeIn();
			$('#calc_body_1').fadeOut(0);
			$('#calc_body_2').fadeOut(0);
			$('#calc_body_4').fadeOut(0);
			$('.calc__hide').css({display: "block"});

			let calc_line_1 = calc_inp_3_1_1 * calc_inp_3_1_2 * 1200;
			let calc_line_2 = calc_inp_3_2_1 * 1050;
			let calc_line_3 = calc_inp_3_3_1 * calc_inp_3_3_2 * 1000;

			var calc_result = calc_line_1 + calc_line_2 + calc_line_3;

			$('.calc__summ').html(`
				<div class="calc__price">помесячная оплата: <span class="calc__price--span">${calc_result.toLocaleString("ru") } ₽</span></div>
				<div class="calc__price">оплата по полугодиям: <span class="calc__price--span">${(calc_result * 0.9).toLocaleString("ru") } ₽</span></div>
				<div class="calc__price">оплата за весь год: <span class="calc__price--span">${(calc_result * 0.8).toLocaleString("ru") } ₽</span></div>
			`);
		}

		if ( calc_type == 4 ) {
			$('#calc_body_4').fadeIn();
			$('#calc_body_1').fadeOut(0);
			$('#calc_body_2').fadeOut(0);
			$('#calc_body_3').fadeOut(0);
			$('.calc__hide').css({display: "none"});

			var calc_result = 15000;

			$('.calc__summ').html(`
				<div class="calc__price">оплата за весь год: <span class="calc__price--span">${calc_result.toLocaleString("ru") } ₽</span></div>
			`);
		}




	}




});