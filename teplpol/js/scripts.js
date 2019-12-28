$(document).ready(function() {

	$(".calc__btn").click(function(){

		var a1 = $("#input_S").val();

		var b1 = $("#select_1").val();
		var b2 = $("#select_2").val();
		var b3 = $("#select_3").val();
		var b4 = $("#select_4").val();

		var c1 = $('input[name=radio_sauna]:checked').val();
		var c2 = $('input[name=radio_kamin]:checked').val();
		var c3 = $('input[name=radio_kladovka]:checked').val();
		var c4 = $('input[name=radio_pomeshenie]:checked').val();

		// console.log( c1 );
		// console.log( c2 );
		// console.log( c3 );
		// console.log( c4 );

		var itog1 = ( +a1 * (( 70 + +b1 + +b2 + +b3 + +b4 + +c1 + +c2 + +c3 + +c4 ) / 100) * 3590 );
		var itog2 = +a1 * 23;

		$("#result_1").html( itog1.toFixed(2) + " руб." );
		$("#result_2").html( itog2.toFixed(2) + " руб." );

	});

});