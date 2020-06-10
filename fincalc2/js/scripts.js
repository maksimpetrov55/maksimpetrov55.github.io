$(document).ready(function() {

	$('.calc2__btn').click(function(){
		calculate();
	});

	calculate();

	function calculate() {

		var val1 = $('#in1').val(); // цель
		var val3 = $('#in3').val(); // рост цен
		var val5 = $('#in5').val(); // года
		var val6 = $('#in6').val(); // старт капитал

		$('#in4').val( ((( 1 + (val3/100) ) ** val5 - 1) * 100).toFixed(2) );
		$('#in2').val( (val1 * (1 + (val3/100)) ** val5).toFixed(0) ); // сумма через N лет

		var val7 = $('#cell-1-0').html();
		var val8 = $('#cell-2-0').html();
		var val9 = $('#cell-3-0').html();

		$('#cell-1-1').html( val6 * (1 + val7/100) ** val5 );
		$('#cell-1-2').html( $('#in2').val() - $('#cell-1-1').html() );
		$('#cell-1-3').html( (( $('#cell-1-2').html() * ( val7 / 100 / 12 ) ) / ( (( 1 + ( val7 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 )).toFixed(0) );
		$('#cell-1-4').html( ($('#cell-1-3').html() * 12 * val5 ).toFixed(0) );

		$('#cell-2-1').html( val6 * (1 + val8/100) ** val5 );
		$('#cell-2-2').html( $('#in2').val() - $('#cell-2-1').html() );
		$('#cell-2-3').html( ($('#cell-2-2').html() / ( 12 * val5 )).toFixed(0) );
		$('#cell-2-4').html( ($('#cell-2-3').html() * 12 * val5 ).toFixed(0) );

		$('#cell-3-1').html( val6 * (1 + val9/100) ** val5 );
		$('#cell-3-2').html( $('#in2').val() - $('#cell-3-1').html() );
		$('#cell-3-3').html( (( $('#cell-2-2').html() * ( val9 / 100 / 12 ) ) / ( (( 1 + ( val9 / 100 / 12 ) ) ** ( 12 * val5 )) - 1 )).toFixed(0) );
		$('#cell-3-4').html( ($('#cell-3-3').html() * 12 * val5 ).toFixed(0) );

	}

});