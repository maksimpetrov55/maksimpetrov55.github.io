$(document).ready(function() {

	$('.calc__checkbox').change(function(){
		calculation();
	});
	$('.calc__select').change(function(){
		calculation();
	});
	$('.calc__radio').change(function(){
		calculation();
	});
	


	calculation();
	function calculation() {
		
		var calc_base = +$('#calc_base').text();
		var calc_square = $('#calc_select_1').val();
		var calc_k = +$('#calc_select_1 option:selected').data("k") / 100;

		var calc_mejkomnat = $('input[name=calc_mejkomnat]:checked').val();
		var calc_styajka = $('input[name=calc_styajka]:checked').val();
		var calc_elektrika = $('input[name=calc_elektrika]:checked').val();
		var calc_zaselennost = $('input[name=calc_zaselennost]:checked').val(); //%

		if ( $('#calc_dekor').is(':checked') ){
			var calc_steni = $('input[name=calc_dekor]:checked').val(); //%
		} else {
			var calc_steni = $('input[name=calc_steni]:checked').val(); //%
		}

		var calc_potolki = $('input[name=calc_potolki]:checked').val();
		var calc_pol = $('input[name=calc_pol]:checked').val(); //%

		if ( $('#calc_balkoni_2').is(':checked') ){
			var calc_balkoni = $('input[name=calc_balkoni_2]:checked').val(); //%
		} else {
			var calc_balkoni = 1;
		}

		if ( $('#calc_balkoni_4').is(':checked') ){
			var calc_balkoni_fix1 = $('input[name=calc_balkoni_4]:checked').val() * $('#calc_select_2').val();
		} else {
			var calc_balkoni_fix1 = 0;
		}
		if ( $('#calc_balkoni_5').is(':checked') ){
			var calc_balkoni_fix2 = $('input[name=calc_balkoni_5]:checked').val() * $('#calc_select_3').val();
		} else {
			var calc_balkoni_fix2 = 0;
		}

		var calc_dverkomnat = $('#calc_select_4').val() * $('#calc_select_4').data("value");

		if ( $('#calc_otoplenie').is(':checked') ){
			var calc_otoplenie = $('input[name=calc_otoplenie]:checked').val() * $('#calc_select_5').val();
		} else {
			var calc_otoplenie = 0;
		}

		if ( $('#calc_shumpola').is(':checked') ){
			var calc_shumpola = $('input[name=calc_shumpola]:checked').val();
		} else {
			var calc_shumpola = 0;
		}

		if ( $('#calc_shumsten').is(':checked') ){
			var calc_shumsten = $('input[name=calc_shumsten]:checked').val() * $('#calc_select_6').val();
		} else {
			var calc_shumsten = 0;
		}

		if ( $('#calc_shumpotolok').is(':checked') ){
			var calc_shumpotolok = $('input[name=calc_shumpotolok]:checked').val();
		} else {
			var calc_shumpotolok = 0;
		}

		if ( $('#calc_dver').is(':checked') ){
			var calc_dver = $('input[name=calc_dver]:checked').val();
		} else {
			var calc_dver = 0;
		}


		var calc_metr = 
		((((((calc_base * calc_k) + 
		+calc_mejkomnat +
		+calc_styajka + 
		+calc_elektrika) * calc_zaselennost * calc_steni) + 
		+calc_potolki) * calc_pol * calc_balkoni) +
		+calc_shumpola + 
		+calc_shumpotolok);

		var calc_options = 
		+calc_balkoni_fix1 + 
		+calc_balkoni_fix2 + 
		+calc_dverkomnat + 
		+calc_otoplenie + 
		+calc_shumsten + 
		+calc_dver;

		var calc_itog = (calc_metr * calc_square) + calc_options;
		

		console.log(calc_metr);
		console.log(calc_options);
		console.log(calc_itog);
		
		$('#calc_itog').text( (+calc_itog.toFixed(0)).toLocaleString("ru") + " руб. 00 коп." );


	}

});