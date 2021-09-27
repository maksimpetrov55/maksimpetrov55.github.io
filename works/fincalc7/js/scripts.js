$(document).ready(function() {

	var date = new Date();
	var dateYear = date.getFullYear();
	var calcA = 1;

	$("#calc_year-today").val( dateYear );
	$("#calc_itog_year-today").html( dateYear );
	$("#calc_age-today").val( 44 );
	$("#calc_profit").val( 500 );
	$("#calc_lifetime").val( 20 );

	$("#calc_years-stop").val( 6 );

	//$("#calc_profit-percent").val( 8.5 + "%" );

	calculation();

	$(".calc__input").on('input', function () {
		calculation();
	});

	$(".calc__label").click(function(){
		setTimeout(() => {
			//calculation();
			setcurrency();
			calculation();
		}, 50);
	});

	function setcurrency(){

		var calcCurrency = $("input[name=currency]:checked").val();
		$(".calc__currency").html( calcCurrency );

	}

	function calculation(){

		var calcAgeToday = $("#calc_age-today").val();
		var calcLifetime = $("#calc_lifetime").val();
		var calcYearsStop = $("#calc_years-stop").val();
		var calcMaybePercent = $("#calc_maybe-percent").val();

		// var eee = calcProfit.split( calcCurrency );
		// console.log( calcProfit );
		// console.log( eee );
		// console.log( eee + 111 );

		//var options2 = { style: "currency", currency: "EUR" };



		if ( calcA == 1 ) {
			var calcProfit = +$("#calc_profit").val();
			var calcProfitLocal = calcProfit.toLocaleString('ru');
			calcA = 0;
			console.log( calcProfitLocal );
			$("#calc_profit").val( calcProfitLocal );
		} else {

			if ( $("#calc_profit").val().split( " " )[2] != undefined ) {
				var calcProfit = $("#calc_profit").val().split( " " )[0] + $("#calc_profit").val().split( " " )[1] + $("#calc_profit").val().split( " " )[2];
			} else {
				if ( $("#calc_profit").val().split( " " )[1] != undefined ) {
					var calcProfit = $("#calc_profit").val().split( " " )[0] + $("#calc_profit").val().split( " " )[1];
				} else {
					var calcProfit = $("#calc_profit").val().split( " " )[0];
				}
			}

			$("#calc_profit").val( calcProfit );
			console.log( calcProfit );
			var calcProfitNew = +$("#calc_profit").val();
			var calcProfitLocal = calcProfitNew.toLocaleString('ru');
			$("#calc_profit").val( calcProfitLocal );

		}

		// var calcProfit = $("#calc_profit").val().split( " " )[0];
		// var calcProfitNew = +$("#calc_profit").val();
		// var calcProfitLocal = calcProfitNew.toLocaleString('ru');
		// $("#calc_profit").val( calcProfitLocal );



		
		

		// var calcProfitLocal = +calcProfit;
		// var calcProfitLocal2 = calcProfitLocal.toLocaleString('ru');
		// console.log(calcProfitLocal2);
		// if ( calcProfitLocal2.split( " " )[1] != undefined ) {
		// 	console.log( calcProfitLocal2.split( " " )[0] + calcProfitLocal2.split( " " )[1] );
		// } else {
		// 	console.log( calcProfitLocal2.split( " " )[0] );
		// }
		
		//$("#calc_profit").val( calcProfitLocal2 );

		// var calcMaybePercent = 3.5;
		var calcPercentInf = $('#calc_profit-percent').val();
		var calcRate = calcPercentInf / 100 / 12 ;
		var calcPeriods = calcLifetime * 12;
		var calcPeriodsInv =- calcPeriods;

		// $("#calc_maybe-percent").val( calcMaybePercent + "%" );
		//$("#calc_profit-inflation").val( calcPercentInf + "%" );

		$("#calc_profit-inflation").val( calcPercentInf - calcMaybePercent + "%" );
		$("#calc_months").val( calcPeriods );

		var calcPV = calcProfit * ( ( 1 - Math.pow( ( 1 + calcRate ), calcPeriodsInv ) ) / ( calcRate ) );

		$("#calc_money-min").val( (+calcPV.toFixed(0)).toLocaleString('ru') );
		$("#calc_money-max").val( (calcPeriods * calcProfit).toLocaleString('ru') );

		$("#calc_age-stop").val( +calcYearsStop + +calcAgeToday )

		var calcMaybeMin = calcPV * Math.pow(( 1 + ( calcMaybePercent / 100 ) ), calcYearsStop );
		var calcMaybeMax = calcPeriods * calcProfit * Math.pow(( 1 + ( calcMaybePercent / 100 ) ), calcYearsStop );


		$("#calc_maybe-min").val( (+calcMaybeMin.toFixed(0)).toLocaleString('ru') );
		$("#calc_maybe-max").val( (+calcMaybeMax.toFixed(0)).toLocaleString('ru') );



		$("#calc_age-goal").val( $("#calc_age-stop").val() );
		$("#calc_year-goal").val( +$("#calc_year-today").val() + +calcYearsStop );
		$("#calc_age-last").val( +$("#calc_age-stop").val() + +calcLifetime );
		$("#calc_year-last").val( +$("#calc_year-today").val() + +calcYearsStop + +calcLifetime );

		//console.log(calcRate);

		var calcItogCurrency = $("input[name=currency]:checked").val();

		$("#calc_itog_profit").html( calcItogCurrency + calcProfitLocal );
		$("#calc_itog_lifetime").html( calcLifetime );
		$("#calc_itog_money-min").html( calcItogCurrency + (+calcPV.toFixed(0)).toLocaleString('ru') );
		$("#calc_itog_money-max").html( calcItogCurrency + (calcPeriods * calcProfit).toLocaleString('ru') );
		$("#calc_itog_years-stop1").html( calcYearsStop );
		$("#calc_itog_years-stop2").html( calcYearsStop );
		$("#calc_itog_maybe-percent").html( calcMaybePercent + "%" );
		$("#calc_itog_maybe-min").html( calcItogCurrency + (+calcMaybeMin.toFixed(0)).toLocaleString('ru') );
		$("#calc_itog_maybe-max").html( calcItogCurrency + (+calcMaybeMax.toFixed(0)).toLocaleString('ru') );

	}

});