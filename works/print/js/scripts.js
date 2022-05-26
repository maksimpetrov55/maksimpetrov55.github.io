$(document).ready(function() {

	$('.calc__input').change(function(){
		if ( $(this).val() == "" ) {
			$(this).val(0);
		}
		if ( $(this).val() < 0 ) {
			$(this).val(0);
		}
		calculation();
	});

	$('.calc__input').on("input", function(){
		calculation();
	});

	$('.calc__select').change(function(){
		calculation();
	});

	$('#calc_material').change(function(){
		wrapSwith();
		calculation();
	});

	wrapSwith();

	function wrapSwith() {
		var calc_material = ".calc__wrap--" + $('#calc_material').val();
		$('.calc__wrap').css({display: "none"});
		$(calc_material).css({display: "flex"});
	}

	calculation();

	function calculation() {

		var calc_type = $('#calc_material').val();

		if ( calc_type == 1 ) {
			var calc_inp_1_1 = $('#calc_inp_1_1').val();
			var calc_inp_1_2 = $('#calc_inp_1_2').val();
			var calc_inp_1_3 = $('#calc_inp_1_3').val();
			var calc_sel_1_1 = $('#calc_sel_1_1').val();
			var calc_sel_1_2 = $('#calc_sel_1_2').val();
			var calc_sel_1_3 = $('#calc_sel_1_3').val();
			var calc_sel_1_4 = $('#calc_sel_1_4').val();
			var calc_sel_1_5 = $('#calc_sel_1_5').val();
			var calc_sel_1_6 = $('#calc_sel_1_6').val();

			if ( (calc_inp_1_1 * calc_inp_1_2 * calc_inp_1_3) > 99999 ) {
				var calc_rate = 0.85;
			} else {
				var calc_rate = 1;
			}

			var calc_formula = (
				+calc_sel_1_1 + 
				+calc_sel_1_2 + 
				+calc_sel_1_3 + 
				+calc_sel_1_4 + 
				+calc_sel_1_5
			) * calc_inp_1_1 * calc_inp_1_2 * calc_inp_1_3 * calc_sel_1_6 / 10000 * calc_rate;
		}

		if ( calc_type == 2 ) {
			var calc_inp_2_1 = $('#calc_inp_2_1').val();
			var calc_inp_2_2 = $('#calc_inp_2_2').val();
			var calc_inp_2_3 = $('#calc_inp_2_3').val();
			var calc_sel_2_1 = $('#calc_sel_2_1').val();
			var calc_sel_2_2 = $('#calc_sel_2_2').val();
			var calc_sel_2_3 = $('#calc_sel_2_3').val();

			if ( (calc_inp_2_1 * calc_inp_2_2 * calc_inp_2_3) > 99999 ) {
				var calc_rate = 0.85;
			} else {
				var calc_rate = 1;
			}

			var calc_formula = (
				1100 + 
				+calc_sel_2_1 + 
				+calc_sel_2_2
			) * calc_inp_2_1 * calc_inp_2_2 * calc_inp_2_3 * calc_sel_2_3 / 10000 * calc_rate;
		}

		if ( calc_type == 3 ) {
			var calc_inp_3_1 = $('#calc_inp_3_1').val();
			var calc_inp_3_2 = $('#calc_inp_3_2').val();
			var calc_sel_3_1 = $('#calc_sel_3_1').val();
			var calc_sel_3_2 = $('#calc_sel_3_2').val();
			var calc_sel_3_3 = $('#calc_sel_3_3').val();

			var calc_formula = 1400 * calc_inp_3_1 * calc_inp_3_2 * calc_sel_3_1 * calc_sel_3_2 * calc_sel_3_3 / 10000;
		}

		if ( calc_type == 4 ) {
			var calc_inp_4_1 = $('#calc_inp_4_1').val();
			var calc_inp_4_2 = $('#calc_inp_4_2').val();
			var calc_inp_4_3 = $('#calc_inp_4_3').val();
			var calc_sel_4_1 = $('#calc_sel_4_1').val();
			var calc_sel_4_2 = $('#calc_sel_4_2').val();
			var calc_sel_4_3 = $('#calc_sel_4_3').val();

			var calc_formula = (700 * calc_inp_4_1 * calc_inp_4_2 * calc_sel_4_2 * calc_sel_4_3 / 10000) + ( calc_inp_4_3 * 20 ) + +calc_sel_4_1;
		}

		if ( calc_type == 5 ) {
			var calc_inp_5_1 = $('#calc_inp_5_1').val();
			var calc_inp_5_2 = $('#calc_inp_5_2').val();
			var calc_sel_5_1 = $('#calc_sel_5_1').val();
			var calc_sel_5_2 = $('#calc_sel_5_2').val();
			var calc_sel_5_3 = $('#calc_sel_5_3').val();

			var calc_formula = ( +calc_sel_5_1 + 2400 ) * calc_inp_5_1 * calc_inp_5_2 * calc_sel_5_2 * calc_sel_5_3 / 10000;
		}

		if ( calc_type == 6 ) {
			var calc_inp_6_1 = $('#calc_inp_6_1').val();
			var calc_inp_6_2 = $('#calc_inp_6_2').val();
			var calc_inp_6_3 = $('#calc_inp_6_3').val();
			var calc_sel_6_1 = $('#calc_sel_6_1').val();
			var calc_sel_6_2 = $('#calc_sel_6_2').val();
			var calc_sel_6_3 = $('#calc_sel_6_3').val();

			var calc_formula = ( +calc_sel_6_1 + +calc_sel_6_2 ) * calc_inp_6_1 * calc_inp_6_2 * calc_inp_6_3 * calc_sel_6_3 / 10000;
		}

		if ( calc_type == 7 ) {
			var calc_inp_7_1 = $('#calc_inp_7_1').val();
			var calc_inp_7_2 = $('#calc_inp_7_2').val();
			var calc_inp_7_3 = $('#calc_inp_7_3').val();
			var calc_sel_7_1 = $('#calc_sel_7_1').val();
			var calc_sel_7_2 = $('#calc_sel_7_2').val();
			var calc_sel_7_3 = $('#calc_sel_7_3').val();

			var calc_formula = calc_inp_7_1 * calc_inp_7_2 * calc_inp_7_3 * calc_sel_7_1 * calc_sel_7_2 * calc_sel_7_3 / 10000;
		}


		$('.calc__summ').text( calc_formula.toLocaleString('ru') + " ₽" )

	}



	// $('.calc__drop').click(function(){
	// 	$(this).find(".calc__drop__list").slideToggle();
	// });

});