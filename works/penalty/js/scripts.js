$(document).ready(function() {

	var calc_rate = 5.5;

	var date = new Date();

	var date_year = date.getFullYear();
	var date_month = date.getMonth() + 1;
	var date_day = date.getDate();

	// var test1 = (date_year - 1) + "-" + date_month + "-" + date_day;
	// var test2 = date_year + "-" + date_month + "-" + date_day;

	$('#calc_date_1').val( (date_year - 1) + "-" + date_month + "-" + date_day );
	$('#calc_date_2').val( date_year + "-" + date_month + "-" + date_day );

	$('.calc__input').on("input", function(){
		calculate();
	});



	function calculate(){

		console.clear();

		var calc_date_1 = $('#calc_date_1').val();
		var calc_date_2 = $('#calc_date_2').val();

		console.log(calc_date_1);
		console.log(calc_date_2);
	
		let calc_date_1_fix = new Date(convert_date_format( calc_date_1 ));
		let calc_date_2_fix = new Date(convert_date_format( calc_date_2 ));

		function convert_date_format(date_string) {
			let date = date_string.split('-', 3);
			return date[1] + '/' + date[2] + '/' + date[0];
		}

		let calc_date_diff = new Date(calc_date_2_fix - calc_date_1_fix);
		let calc_date_final = calc_date_diff / 1000 / 60 / 60 / 24;
		console.log( calc_date_final );

		var calc_price = $('#calc_price').val();

		var calc_result_1 = (1 / 300) * (+calc_rate / 100) * +calc_price * +calc_date_final  * 2;

		$('#calc_result_1').text( (+calc_result_1.toFixed(0)).toLocaleString("ru") + " руб" );
		$('#calc_result_3').text( (+( calc_result_1 * 0.5 ).toFixed(0)).toLocaleString("ru") + " руб" );
		$('#calc_result_4').text( (+( calc_result_1 + 20000 + (calc_result_1 * 0.5) ).toFixed(0)).toLocaleString("ru") + " руб" );
	

	}



});