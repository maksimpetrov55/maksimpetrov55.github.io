$(document).ready(function() {

	$('.calc__minus').click(function(){
		$(this).next().val( +$(this).next().val() - 1 );
		if ( $(this).next().val() < $(this).next().data("min") ){
			$(this).next().val( $(this).next().data("min") );
		}
		calculation();
	});
	$('.calc__plus').click(function(){
		$(this).prev().val( +$(this).prev().val() + 1 );
		if ( $(this).prev().val() < $(this).prev().data("min") ){
			$(this).prev().val( $(this).prev().data("min") );
		}
		calculation();
	});

	$('.calc__input').change(function(){
		if ( $(this).val() < $(this).data("min") ){
			$(this).val( $(this).data("min") );
		}
		calculation();
	});



	$('.calc__tip').hover(function(){
		$(this).next().stop().fadeIn(200);
	}, function(){
		$(this).next().stop().fadeOut(200);
	});


	$('input[name=calc_switch]').change(function(){
		calculation();
	});





	calculation();
	function calculation() {
		
		var calc_space = $('input[name=calc_switch]:checked').val();

		if ( calc_space == 1 ) {
			var calc_name = "Открытое пространство (openspace)";
		}
		if ( calc_space == 2 ) {
			var calc_name = "Смешанное (открытое пространство + кабинеты)";
		}
		if ( calc_space == 3 ) {
			var calc_name = "Классическое (кабинетная планировка)";
		}




		var calc_personal = $('#calc_personal').val();
		var calc_top_1 = $('#calc_top_1').val();
		var calc_top_2 = $('#calc_top_2').val();
		var calc_conf_1 = $('#calc_conf_1').val();
		var calc_conf_2 = $('#calc_conf_2').val();
		var calc_conf_3 = $('#calc_conf_3').val();
		
		var calc_mebel_1 = 2000;
		var calc_mebel_2 = 4000;
		var calc_mebel_3 = 6500;
		var calc_coridor = 1.1;

		var itog = 
		( 4.1 * calc_personal ) +
		( 11.5 * (+calc_top_1 + +calc_top_2) ) + 
		( 7.8 * calc_conf_1 ) + 
		( 20.25 * calc_conf_2 ) + 
		( 36.4 * calc_conf_3 )
		;
		
		
		$('.calc__square').empty();

		$('.calc__square').append(`${(itog * calc_coridor).toFixed(0)} м<sup>2</sup>`);


		$('#calc_price_1').text( (itog * calc_coridor * calc_mebel_1).toLocaleString("ru") + " руб." );
		$('#calc_price_2').text( (itog * calc_coridor * calc_mebel_2).toLocaleString("ru") + " руб." );
		$('#calc_price_3').text( (itog * calc_coridor * calc_mebel_3).toLocaleString("ru") + " руб." );




		$('#print_value_1').text( calc_name );
		$('#print_value_2').text( calc_personal + " чел." );
		$('#print_value_3').text( calc_top_1 + " шт." );
		$('#print_value_4').text( calc_top_2 + " шт." );
		$('#print_value_5').text( calc_conf_1 + " шт." );
		$('#print_value_6').text( calc_conf_2 + " шт." );
		$('#print_value_7').text( calc_conf_3 + " шт." );
		$('#print_value_8').text( (itog * calc_coridor).toFixed(0) + " м²" );
		$('#print_value_9').text( (itog * calc_coridor * calc_mebel_1).toLocaleString("ru") + " руб." );
		$('#print_value_10').text( (itog * calc_coridor * calc_mebel_2).toLocaleString("ru") + " руб." );
		$('#print_value_11').text( (itog * calc_coridor * calc_mebel_3).toLocaleString("ru") + " руб." );


	}







	$('.calc__print').click(function(){
		window.print();
	});

});