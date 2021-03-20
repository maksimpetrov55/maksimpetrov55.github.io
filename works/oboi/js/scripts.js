$(document).ready(function() {

	$('.calc__btn').on("click", function(){
		calculation();
	});

	$('.calc__checkbox').click(function(){
		$(this).parent().parent().find(".calc__input").toggleClass("calc__input--disabled");
	});

	$('.calc__add').click(function(){
		let walls = $('.calc__stena--show').length;
		let n = walls;
		$('.calc__stena:eq(' + n + ')').removeClass("calc__stena--hidden");
		$('.calc__stena:eq(' + n + ')').addClass("calc__stena--show");
	});
	$('.calc__del').click(function(){
		let walls = $('.calc__stena--show').length;
		let n = walls - 1;
		$('.calc__stena:eq(' + n + ')').removeClass("calc__stena--show");
		$('.calc__stena:eq(' + n + ')').addClass("calc__stena--hidden");
	});



	function calculation() {

		var walls = $('.calc__stena--show').length;
		$('.table__row').addClass("table__row--hidden");
		$('.table').removeClass("table--hidden");
		var step = 0;
		while ( step <= walls) {
			// var i = step + 1;
			$(".table__row:eq(" + step + ")").removeClass("table__row--hidden");
			step++;
		}
		
		var rulon_shirina = $('#rulon_shirina').val();
		var rulon_dlina = $('#rulon_dlina').val();
		var rulon_nahlest = $('#rulon_nahlest').val();
		var rulon_cena = $('#rulon_cena').val();

		var rulon_square = +rulon_shirina / 100 * +rulon_dlina;
		var rulon_width = (+rulon_shirina - (+rulon_nahlest / 10)) / 100;

		console.log(rulon_width);


		// stena 1
		if( $("#stena_1").hasClass("calc__stena--show") ) {
			var stena_1_shirina = $('#stena_1_shirina').val();
			var stena_1_visota = $('#stena_1_visota').val();
			var okno_1_shirina = $('#okno_1_shirina').val();
			var okno_1_visota = $('#okno_1_visota').val();
			if ( $('#okno_1_check').is(':checked') ) {
				var stena_1_square = ((stena_1_shirina / 100) * (stena_1_visota / 100)) - ((okno_1_shirina / 100) * (okno_1_visota / 100));
			} else {
				var stena_1_square = (stena_1_shirina / 100) * (stena_1_visota / 100);
			}
			var stena_1_polos = Math.ceil( stena_1_shirina / 100 / rulon_width );
			var stena_1_ruloni = Math.ceil( stena_1_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_1_square );
			var stena_1_ostatok = +rulon_square - (+stena_1_square - (+stena_1_polos * +rulon_square));
			if ( stena_1_ostatok < 0 ) {
				var stena_1_ostatok = 0;
			}
		} else {
			var stena_1_shirina = 0;
			var stena_1_visota = 0;
			var okno_1_shirina = 0;
			var okno_1_visota = 0;
			var stena_1_square = 0;
			var stena_1_polos = 0;
			var stena_1_ruloni = 0;
			var stena_1_ostatok = 0;
		}



		$('#table_row_1').find(".table__cell:eq(1)").text( stena_1_square.toFixed(2) + " м²" );
		$('#table_row_1').find(".table__cell:eq(2)").text( stena_1_ruloni );
		$('#table_row_1').find(".table__cell:eq(3)").text( stena_1_ostatok + " м" );
		$('#table_row_1').find(".table__cell:eq(4)").text( stena_1_polos.toFixed(0) );
		// stena 1

		// stena 2
		if( $("#stena_2").hasClass("calc__stena--show") ) {
			var stena_2_shirina = $('#stena_2_shirina').val();
			var stena_2_visota = $('#stena_2_visota').val();
			var okno_2_shirina = $('#okno_2_shirina').val();
			var okno_2_visota = $('#okno_2_visota').val();
			if ( $('#okno_2_check').is(':checked') ) {
				var stena_2_square = ((stena_2_shirina / 100) * (stena_2_visota / 100)) - ((okno_2_shirina / 100) * (okno_2_visota / 100));
			} else {
				var stena_2_square = (stena_2_shirina / 100) * (stena_2_visota / 100);
			}
			var stena_2_polos = Math.ceil( stena_2_shirina / 100 / rulon_width );
			var stena_2_ruloni = Math.ceil( stena_2_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_2_square );
			var stena_2_ostatok = +rulon_square - (+stena_2_square - (+stena_2_polos * +rulon_square));
			if ( stena_2_ostatok < 0 ) {
				var stena_2_ostatok = 0;
			}
		} else {
			var stena_2_shirina = 0;
			var stena_2_visota = 0;
			var okno_2_shirina = 0;
			var okno_2_visota = 0;
			var stena_2_square = 0;
			var stena_2_polos = 0;
			var stena_2_ruloni = 0;
			var stena_2_ostatok = 0;
		}


		$('#table_row_2').find(".table__cell:eq(1)").text( stena_2_square.toFixed(2) + " м²" );
		$('#table_row_2').find(".table__cell:eq(2)").text( stena_2_ruloni );
		$('#table_row_2').find(".table__cell:eq(3)").text( stena_2_ostatok + " м" );
		$('#table_row_2').find(".table__cell:eq(4)").text( stena_2_polos.toFixed(0) );
		// stena 2

		// stena 3
		if( $("#stena_3").hasClass("calc__stena--show") ) {
			var stena_3_shirina = $('#stena_3_shirina').val();
			var stena_3_visota = $('#stena_3_visota').val();
			var okno_3_shirina = $('#okno_3_shirina').val();
			var okno_3_visota = $('#okno_3_visota').val();
			if ( $('#okno_3_check').is(':checked') ) {
				var stena_3_square = ((stena_3_shirina / 100) * (stena_3_visota / 100)) - ((okno_3_shirina / 100) * (okno_3_visota / 100));
			} else {
				var stena_3_square = (stena_3_shirina / 100) * (stena_3_visota / 100);
			}
			var stena_3_polos = Math.ceil( stena_3_shirina / 100 / rulon_width );
			var stena_3_ruloni = Math.ceil( stena_3_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_3_square );
			var stena_3_ostatok = +rulon_square - (+stena_3_square - (+stena_3_polos * +rulon_square));
			if ( stena_3_ostatok < 0 ) {
				var stena_3_ostatok = 0;
			}
		} else {
			var stena_3_shirina = 0;
			var stena_3_visota = 0;
			var okno_3_shirina = 0;
			var okno_3_visota = 0;
			var stena_3_square = 0;
			var stena_3_polos = 0;
			var stena_3_ruloni = 0;
			var stena_3_ostatok = 0;
		}



		$('#table_row_3').find(".table__cell:eq(1)").text( stena_3_square.toFixed(2) + " м²" );
		$('#table_row_3').find(".table__cell:eq(2)").text( stena_3_ruloni );
		$('#table_row_3').find(".table__cell:eq(3)").text( stena_3_ostatok + " м" );
		$('#table_row_3').find(".table__cell:eq(4)").text( stena_3_polos.toFixed(0) );
		// stena 3

		// stena 4
		if( $("#stena_4").hasClass("calc__stena--show") ) {
			var stena_4_shirina = $('#stena_4_shirina').val();
			var stena_4_visota = $('#stena_4_visota').val();
			var okno_4_shirina = $('#okno_4_shirina').val();
			var okno_4_visota = $('#okno_4_visota').val();
			if ( $('#okno_4_check').is(':checked') ) {
				var stena_4_square = ((stena_4_shirina / 100) * (stena_4_visota / 100)) - ((okno_4_shirina / 100) * (okno_4_visota / 100));
			} else {
				var stena_4_square = (stena_4_shirina / 100) * (stena_4_visota / 100);
			}
			var stena_4_polos = Math.ceil( stena_4_shirina / 100 / rulon_width );
			var stena_4_ruloni = Math.ceil( stena_4_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_4_square );
			var stena_4_ostatok = +rulon_square - (+stena_4_square - (+stena_4_polos * +rulon_square));
			if ( stena_4_ostatok < 0 ) {
				var stena_4_ostatok = 0;
			}
		} else {
			var stena_4_shirina = 0;
			var stena_4_visota = 0;
			var okno_4_shirina = 0;
			var okno_4_visota = 0;
			var stena_4_square = 0;
			var stena_4_polos = 0;
			var stena_4_ruloni = 0;
			var stena_4_ostatok = 0;
		}



		$('#table_row_4').find(".table__cell:eq(1)").text( stena_4_square.toFixed(2) + " м²" );
		$('#table_row_4').find(".table__cell:eq(2)").text( stena_4_ruloni );
		$('#table_row_4').find(".table__cell:eq(3)").text( stena_4_ostatok + " м" );
		$('#table_row_4').find(".table__cell:eq(4)").text( stena_4_polos.toFixed(0) );
		// stena 4

		// stena 5
		if( $("#stena_5").hasClass("calc__stena--show") ) {
			var stena_5_shirina = $('#stena_5_shirina').val();
			var stena_5_visota = $('#stena_5_visota').val();
			var okno_5_shirina = $('#okno_5_shirina').val();
			var okno_5_visota = $('#okno_5_visota').val();
			if ( $('#okno_5_check').is(':checked') ) {
				var stena_5_square = ((stena_5_shirina / 100) * (stena_5_visota / 100)) - ((okno_5_shirina / 100) * (okno_5_visota / 100));
			} else {
				var stena_5_square = (stena_5_shirina / 100) * (stena_5_visota / 100);
			}
			var stena_5_polos = Math.ceil( stena_5_shirina / 100 / rulon_width );
			var stena_5_ruloni = Math.ceil( stena_5_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_5_square );
			var stena_5_ostatok = +rulon_square - (+stena_5_square - (+stena_5_polos * +rulon_square));
			if ( stena_5_ostatok < 0 ) {
				var stena_5_ostatok = 0;
			}
		} else {
			var stena_5_shirina = 0;
			var stena_5_visota = 0;
			var okno_5_shirina = 0;
			var okno_5_visota = 0;
			var stena_5_square = 0;
			var stena_5_polos = 0;
			var stena_5_ruloni = 0;
			var stena_5_ostatok = 0;
		}



		$('#table_row_5').find(".table__cell:eq(1)").text( stena_5_square.toFixed(2) + " м²" );
		$('#table_row_5').find(".table__cell:eq(2)").text( stena_5_ruloni );
		$('#table_row_5').find(".table__cell:eq(3)").text( stena_5_ostatok + " м" );
		$('#table_row_5').find(".table__cell:eq(4)").text( stena_5_polos.toFixed(0) );
		// stena 5

		// stena 6
		if( $("#stena_6").hasClass("calc__stena--show") ) {
			var stena_6_shirina = $('#stena_6_shirina').val();
			var stena_6_visota = $('#stena_6_visota').val();
			var okno_6_shirina = $('#okno_6_shirina').val();
			var okno_6_visota = $('#okno_6_visota').val();
			if ( $('#okno_6_check').is(':checked') ) {
				var stena_6_square = ((stena_6_shirina / 100) * (stena_6_visota / 100)) - ((okno_6_shirina / 100) * (okno_6_visota / 100));
			} else {
				var stena_6_square = (stena_6_shirina / 100) * (stena_6_visota / 100);
			}
			var stena_6_polos = Math.ceil( stena_6_shirina / 100 / rulon_width );
			var stena_6_ruloni = Math.ceil( stena_6_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_6_square );
			var stena_6_ostatok = +rulon_square - (+stena_6_square - (+stena_6_polos * +rulon_square));
			if ( stena_6_ostatok < 0 ) {
				var stena_6_ostatok = 0;
			}
	
		} else {
			var stena_6_shirina = 0;
			var stena_6_visota = 0;
			var okno_6_shirina = 0;
			var okno_6_visota = 0;
			var stena_6_square = 0;
			var stena_6_polos = 0;
			var stena_6_ruloni = 0;
			var stena_6_ostatok = 0;
		}


		$('#table_row_6').find(".table__cell:eq(1)").text( stena_6_square.toFixed(2) + " м²" );
		$('#table_row_6').find(".table__cell:eq(2)").text( stena_6_ruloni );
		$('#table_row_6').find(".table__cell:eq(3)").text( stena_6_ostatok + " м" );
		$('#table_row_6').find(".table__cell:eq(4)").text( stena_6_polos.toFixed(0) );
		// stena 6

		// stena 7
		if( $("#stena_7").hasClass("calc__stena--show") ) {
			var stena_7_shirina = $('#stena_7_shirina').val();
			var stena_7_visota = $('#stena_7_visota').val();
			var okno_7_shirina = $('#okno_7_shirina').val();
			var okno_7_visota = $('#okno_7_visota').val();
			if ( $('#okno_7_check').is(':checked') ) {
				var stena_7_square = ((stena_7_shirina / 100) * (stena_7_visota / 100)) - ((okno_7_shirina / 100) * (okno_7_visota / 100));
			} else {
				var stena_7_square = (stena_7_shirina / 100) * (stena_7_visota / 100);
			}
			var stena_7_polos = Math.ceil( stena_7_shirina / 100 / rulon_width );
			var stena_7_ruloni = Math.ceil( stena_7_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_7_square );
			var stena_7_ostatok = +rulon_square - (+stena_7_square - (+stena_7_polos * +rulon_square));
			if ( stena_7_ostatok < 0 ) {
				var stena_7_ostatok = 0;
			}
		} else {
			var stena_7_shirina = 0;
			var stena_7_visota = 0;
			var okno_7_shirina = 0;
			var okno_7_visota = 0;
			var stena_7_square = 0;
			var stena_7_polos = 0;
			var stena_7_ruloni = 0;
			var stena_7_ostatok = 0;
		}



		$('#table_row_7').find(".table__cell:eq(1)").text( stena_7_square.toFixed(2) + " м²" );
		$('#table_row_7').find(".table__cell:eq(2)").text( stena_7_ruloni );
		$('#table_row_7').find(".table__cell:eq(3)").text( stena_7_ostatok + " м" );
		$('#table_row_7').find(".table__cell:eq(4)").text( stena_7_polos.toFixed(0) );
		// stena 7

		// stena 8
		if( $("#stena_8").hasClass("calc__stena--show") ) {
			var stena_8_shirina = $('#stena_8_shirina').val();
			var stena_8_visota = $('#stena_8_visota').val();
			var okno_8_shirina = $('#okno_8_shirina').val();
			var okno_8_visota = $('#okno_8_visota').val();
			if ( $('#okno_8_check').is(':checked') ) {
				var stena_8_square = ((stena_8_shirina / 100) * (stena_8_visota / 100)) - ((okno_8_shirina / 100) * (okno_8_visota / 100));
			} else {
				var stena_8_square = (stena_8_shirina / 100) * (stena_8_visota / 100);
			}
			var stena_8_polos = Math.ceil( stena_8_shirina / 100 / rulon_width );
			var stena_8_ruloni = Math.ceil( stena_8_square / rulon_square ) + Math.ceil( (rulon_nahlest / 1000 * rulon_dlina) / stena_8_square );
			var stena_8_ostatok = +rulon_square - (+stena_8_square - (+stena_8_polos * +rulon_square));
			if ( stena_8_ostatok < 0 ) {
				var stena_8_ostatok = 0;
			}
		} else {
			var stena_8_shirina = 0;
			var stena_8_visota = 0;
			var okno_8_shirina = 0;
			var okno_8_visota = 0;
			var stena_8_square = 0;
			var stena_8_polos = 0;
			var stena_8_ruloni = 0;
			var stena_8_ostatok = 0;
		}



		$('#table_row_8').find(".table__cell:eq(1)").text( stena_8_square.toFixed(2) + " м²" );
		$('#table_row_8').find(".table__cell:eq(2)").text( stena_8_ruloni );
		$('#table_row_8').find(".table__cell:eq(3)").text( stena_8_ostatok + " м" );
		$('#table_row_8').find(".table__cell:eq(4)").text( stena_8_polos.toFixed(0) );
		// stena 8



		$('.itog').removeClass("itog--hidden");
		$('.calc__header').addClass("calc__header--margin")

		var itog_square = +stena_1_square + +stena_2_square + +stena_3_square + +stena_4_square + +stena_5_square + +stena_6_square + +stena_7_square + +stena_8_square;
		var itog_ruloni = +stena_1_ruloni + +stena_2_ruloni + +stena_3_ruloni + +stena_4_ruloni + +stena_5_ruloni + +stena_6_ruloni + +stena_7_ruloni + +stena_8_ruloni;
		var itog_ostatok = +stena_1_ostatok + +stena_2_ostatok + +stena_3_ostatok + +stena_4_ostatok + +stena_5_ostatok + +stena_6_ostatok + +stena_7_ostatok + +stena_8_ostatok;
		var itog_klei = +itog_square * 0.03;
		var itog_cena = +itog_ruloni * +rulon_cena;

		$('#itog_square').text( itog_square.toFixed(2) + " м²");
		$('#itog_ruloni').text( itog_ruloni + " шт" );
		$('#itog_ostatok').text( itog_ostatok + " м" );
		$('#itog_klei').text( itog_klei.toFixed(2) + " кг" );
		$('#itog_cena').text( itog_cena.toFixed(0) + " руб" );

	}

});