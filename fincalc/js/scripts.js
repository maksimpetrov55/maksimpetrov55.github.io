$(document).ready(function() {

	var date = new Date();
	var dateYear = date.getFullYear();

	$("#calc_year-today").val( dateYear );
	$("#calc_age-today").val( 44 );
	$("#calc_profit").val( 500 );
	$("#calc_lifetime").val( 20 );

	$("#calc_years-stop").val( 6 );

	$("#calc_maybe-percent").val( 3.5 );

	$("#calc_profit-percent").val( 8.5 );
	$("#calc_profit-inflation").val( 5 );

	calculation();

	$(".calc__input").on('input', function () {
		calculation();
	});

	function calculation(){

		var calcAgeToday = $("#calc_age-today").val();
		var calcProfit = $("#calc_profit").val();
		var calcLifetime = $("#calc_lifetime").val();
		var calcYearsStop = $("#calc_years-stop").val();
		var calcPercentInf = $("#calc_profit-inflation").val();
		var clacYearsStop = $("#calc_years-stop").val();
		var calcMaybePercent = $("#calc_maybe-percent").val();
		var calcYearsStop = $("#calc_years-stop").val();

		var calcRate = calcPercentInf / 100 / 12 ;
		var calcPeriods = calcLifetime * 12;
		var calcPeriodsInv =- calcPeriods;

		$("#calc_months").val( calcPeriods );

		var calcPV = calcProfit * ( ( 1 - Math.pow( ( 1 + calcRate ), calcPeriodsInv ) ) / ( calcRate ) );

		$("#calc_money-min").val( calcPV.toFixed(0) );
		$("#calc_money-max").val( calcPeriods * calcProfit );

		$("#calc_age-stop").val( +clacYearsStop + +calcAgeToday )

		var calcMaybeMin = calcPV * Math.pow(( 1 + ( calcMaybePercent / 100 ) ), calcYearsStop );
		var calcMaybeMax = calcPeriods * calcProfit * Math.pow(( 1 + ( calcMaybePercent / 100 ) ), calcYearsStop );

		$("#calc_maybe-min").val( calcMaybeMin.toFixed(0) );
		$("#calc_maybe-max").val( calcMaybeMax.toFixed(0) );


		$("#calc_age-goal").val( $("#calc_age-stop").val() );
		$("#calc_year-goal").val( +$("#calc_year-today").val() + +calcYearsStop );
		$("#calc_age-last").val( +$("#calc_age-stop").val() + +calcLifetime );
		$("#calc_year-last").val( +$("#calc_year-today").val() + +calcYearsStop + +calcLifetime );

		//console.log(calcRate);

	}

});