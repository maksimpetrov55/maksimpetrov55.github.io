$(document).ready(function() {

	$('.calc__button').click(function(){
		calculate();
	});
	
	calculate();

	function calculate() {
		
		var calc_square = $('#calc_square').val();
		var calc_select_name = $('#calc_select option:selected').text();

		
		$('#table_row_1').find(".table__cell:eq(0)").text( calc_select_name );

		$('#table_row_1').find(".table__cell:eq(1)").text( calc_square + " м2" );
		$('#table_row_2').find(".table__cell:eq(1)").text( calc_square + " м2" );
		$('#table_row_3').find(".table__cell:eq(1)").text( calc_square + " м2" );

	}

});