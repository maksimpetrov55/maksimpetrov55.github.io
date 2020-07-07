$(document).ready(function() {

	calculation();

	// let dig = 23112;
	// function roundTo10(num) {
	// 	return Math.round(num/10000)*20000;
	// }
	// console.log( roundTo10(dig) );

	$(".calc5__input").on('input', function () {
		calculation();
	});

	function calculation() {

		var numberDiv = document.querySelector('#table1');
		var additionDiv = document.querySelector('#table2');
		var profitDiv = document.querySelector('#table3');
		var summDiv = document.querySelector('#table4');

		var chart = document.querySelector('#chart');

		$("#table1").empty();
		$("#table2").empty();
		$("#table3").empty();
		$("#table4").empty();

		$("#chart").empty();

		var percent = $('#in1').val();
		var cash = $('#in2').val();
		var addition = $('#in3').val();
		var period = $('#in4').val();

		var arr_addition = [];

		var rate = 1 + (+percent / 100 / 12);

		$('#result_add').html( (+(+period * +addition).toFixed(0)).toLocaleString("ru") );
		$('#result_profit').html( (+((( +addition * 12 / (+percent / 100) ) * ( (rate ** +period) - 1 ) + ( +cash * ( rate ** +period ) ) - +cash - +period * +addition )).toFixed(0)).toLocaleString("ru") );
		var total = ( ( +addition * 12 / (+percent / 100) ) * ( (rate ** +period) - 1 ) + ( +cash * ( rate ** +period ) ) ).toFixed(0);
		$('#result_summ').html( (+total).toLocaleString("ru") );

		var set = 290 / total;

		var length = (String(total).length - 3);
		console.log( "length: " + length );

		var scale = Math.ceil(total / ( 10 ** (length - 2) )) * ( 10 ** (length - 2) );

		console.log( scale / 4 );


		$('.calc5__chart__scaleY__1').html( (scale / 3 * 1).toFixed(0) );
		$('.calc5__chart__scaleY__2').html( (scale / 3 * 2).toFixed(0) );
		$('.calc5__chart__scaleY__3').html( (scale / 3 * 3).toFixed(0) );
		$('.calc5__chart__scaleY__4').html( (scale / 3 * 4).toFixed(0) );


		$('.calc5__chart__scaleX__1').html( period / 12 );
		$('.calc5__chart__scaleX__2').html( period / 12 * 2 );
		$('.calc5__chart__scaleX__3').html( period / 12 * 3 );
		$('.calc5__chart__scaleX__4').html( period / 12 * 4 );
		$('.calc5__chart__scaleX__5').html( period / 12 * 5 );
		$('.calc5__chart__scaleX__6').html( period / 12 * 6 );
		$('.calc5__chart__scaleX__7').html( period / 12 * 7 );
		$('.calc5__chart__scaleX__8').html( period / 12 * 8 );
		$('.calc5__chart__scaleX__9').html( period / 12 * 9 );
		$('.calc5__chart__scaleX__10').html( period / 12 * 10 );
		$('.calc5__chart__scaleX__11').html( period / 12 * 11 );
		$('.calc5__chart__scaleX__12').html( period );


		$('#chart').on('mouseover','.calc5__chart__block', function(e) {
			var blockNumber = $(this).attr('id').split("_");
			
			$('.calc5__chart__cloud__text--mnth').html( "Месяц №" + blockNumber[2] );
			$('.calc5__chart__cloud__text--add').html( "Пополнений на: " + (blockNumber[2] * addition).toLocaleString("ru") );
			$('.calc5__chart__cloud__text--perc').html( "Проценты: " + (+((( +addition * 12 / (+percent / 100) ) * ( (rate ** blockNumber[2]) - 1 ) + ( +cash * ( rate ** blockNumber[2] ) ) - +cash - blockNumber[2] * +addition )).toFixed(0)).toLocaleString("ru") );
			$('.calc5__chart__cloud__text--full').html( "Полная сумма: " + (+( ( +addition * 12 / (+percent / 100) ) * ( (rate ** blockNumber[2]) - 1 ) + ( +cash * ( rate ** blockNumber[2] ) ) ).toFixed(0)).toLocaleString("ru") );

			$('.calc5__chart__cloud').addClass("calc5__chart__cloud--show");
		});

		$('#chart').on('mouseleave','.calc5__chart__block', function(e) {
			$('.calc5__chart__cloud').removeClass("calc5__chart__cloud--show");
		});


		for ( let i = 1; i <= period; i++ ) {

			let div1 = document.createElement('div');
			div1.innerHTML = i;
			div1.className = "calc5__cell";
			numberDiv.appendChild(div1);

			let div2 = document.createElement('div');
			div2.innerHTML = (+(+i * +addition).toFixed(0)).toLocaleString("ru");
			arr_addition.push(i);
			div2.className = "calc5__cell";
			additionDiv.appendChild(div2);

			let div3 = document.createElement('div');
			var profit = (+( (( +addition * 12 / (+percent / 100) ) * ( (rate ** i) - 1 ) + ( +cash * ( rate ** i ) ) - +cash - i * +addition ) ).toFixed(0)).toLocaleString("ru");
			var reverseProfit = ( (( +addition * 12 / (+percent / 100) ) * ( (rate ** (period - i +1)) - 1 ) + ( +cash * ( rate ** (period - i +1) ) ) - +cash - (period - i +1) * +addition ) ).toFixed(0);
			div3.innerHTML = profit;
			div3.className = "calc5__cell";
			profitDiv.appendChild(div3);

			let div4 = document.createElement('div');
			div4.innerHTML = (+( ( +addition * 12 / (+percent / 100) ) * ( (rate ** i) - 1 ) + ( +cash * ( rate ** i ) ) ).toFixed(0)).toLocaleString("ru") ;
			div4.className = "calc5__cell";
			summDiv.appendChild(div4);

			//(rate ** i) - 1
			//( +cash + ((+i - 1) * +addition) ) * +percent / 100 / 12
			//+cash + ( +cash * +percent / 100 / 12 ) + ( +i * +addition );

			// let chartBlock = document.createElement('div');
			// //some.innerHTML = i;
			// chartBlock.className = "calc5__chart__block";
			// chartBlock.id = "chart_block_" + i;
			// chart.appendChild(chartBlock);

			//var randomColor = "green";

			var chartColor1 = "#2c85c0";
			var chartColor2 = "#003B3B";
			var chartColor3 = "#00C967";
			//var height1 = 150 / period * ( period - i + 1);
			var height1 = set * addition * ( period - i + 1) + 0.5;
			var height2 = cash * set;
			var height3 = set * reverseProfit + 0.5;
			var htmlCode1 = "<div id='chart_block_" + (period - i + 1) + "' class='calc5__chart__block'><div style='height:" + height3 +"px; background:" + chartColor3 + "'></div><div style='height:" + height1 +"px; background:" + chartColor1 + "'></div><div style='height:" + height2 +"px; background:" + chartColor2 + "'></div></div>";
			chart.insertAdjacentHTML('afterBegin', htmlCode1);

			// <div class=''></div>
			// var chartColor2 = "#ff0000";
			// var htmlCode2 = "<div class='calc5__chart__block' style='height:" + height +"px; background:" + chartColor2 + "'></div>";
			// chart.insertAdjacentHTML('afterBegin', htmlCode2);

		}

		
		if ( period > 250 ) {
			$('.calc5__chart__block').removeClass("calc5__chart__block--margin1");
			$('.calc5__chart__block').removeClass("calc5__chart__block--margin2");
			$('.calc5__chart__block').addClass("calc5__chart__block--margin2");
		} else {
			if ( period > 150 ) {
				$('.calc5__chart__block').removeClass("calc5__chart__block--margin1");
				$('.calc5__chart__block').removeClass("calc5__chart__block--margin2");
				$('.calc5__chart__block').addClass("calc5__chart__block--margin1");
			} else {
				$('.calc5__chart__block').removeClass("calc5__chart__block--margin1");
				$('.calc5__chart__block').removeClass("calc5__chart__block--margin2");
			}
		}


		//console.log( arr_addition );
		
		// var a = 3;
		// $('#chart_block_' + a).css({width: "20"});

	}

	
	// Highcharts.chart('container', {
	// 	chart: {
	// 		type: 'column'
	// 	},
	// 	title: {
	// 		text: ''
	// 	},
	// 	xAxis: {
	// 		categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	// 	},
	// 	yAxis: {
	// 		min: 0,
	// 	title: {
	// 		text: ''
	// 	},
	// 	stackLabels: {
	// 		enabled: false,
	// 		style: {
	// 		fontWeight: 'bold',
	// 		color: ( // theme
	// 			Highcharts.defaultOptions.title.style &&
	// 			Highcharts.defaultOptions.title.style.color
	// 		) || 'gray'
	// 		}
	// 	}
	// 	},
	// 	legend: {
	// 		align: 'right',
	// 		x: -80,
	// 		verticalAlign: 'top',
	// 		y: 25,
	// 		floating: false,
	// 		backgroundColor:
	// 			Highcharts.defaultOptions.legend.backgroundColor || 'white',
	// 		borderColor: '#CCC',
	// 		borderWidth: 1,
	// 		shadow: false
	// 	},
	// 	tooltip: {
	// 		headerFormat: '<b>{point.y}</b><br/>',
	// 		pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
	// 	},
	// 	plotOptions: {
	// 		column: {
	// 			stacking: 'normal',
	// 			dataLabels: {
	// 			enabled: false
	// 			}
	// 		}
	// 	},
	// 	series: [
	// 		{
	// 			name: 'John',
	// 			data: [5, 3, 4, 7, 2, 8, 4, 2, 3]
	// 		}, {
	// 			name: 'Jane',
	// 			data: [2, 2, 3, 2, 1, 8, 4, 2, 3]
	// 		}, {
	// 			name: 'Joe',
	// 			data: [3, 4, 4, 2, 5, 8, 4, 2, 3]
	// 		}
			
	// 	]
	// });

});
