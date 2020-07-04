$(document).ready(function() {



	function calculation() {

		var numberDiv = document.querySelector('#table1');
		var additionDiv = document.querySelector('#table2');
		var profitDiv = document.querySelector('#table3');
		var summDiv = document.querySelector('#table4');

		$("#table1").empty();
		$("#table2").empty();
		$("#table3").empty();
		$("#table4").empty();

		var percent = $('#in1').val();
		var cash = $('#in2').val();
		var addition = $('#in3').val();
		var period = $('#in4').val();

		var rate = 1 + (+percent / 100 / 12);

		//var some = +cash ;

		for ( let i = 1; i <= period; i++ ) {

			let div1 = document.createElement('div');
			div1.innerHTML = i;
			div1.className = "calc5__cell";
			numberDiv.appendChild(div1);

			let div2 = document.createElement('div');
			div2.innerHTML = +i * +addition;
			div2.className = "calc5__cell";
			additionDiv.appendChild(div2);

			let div3 = document.createElement('div');
			div3.innerHTML = ( (( +addition * 12 / (+percent / 100) ) * ( (rate ** i) - 1 ) + ( +cash * ( rate ** i ) ) - +cash - i * +addition ) ).toFixed(2);
			div3.className = "calc5__cell";
			profitDiv.appendChild(div3);

			let div4 = document.createElement('div');
			div4.innerHTML = ( ( +addition * 12 / (+percent / 100) ) * ( (rate ** i) - 1 ) + ( +cash * ( rate ** i ) ) ).toFixed(2) ;
			div4.className = "calc5__cell";
			summDiv.appendChild(div4);

			//(rate ** i) - 1
			//( +cash + ((+i - 1) * +addition) ) * +percent / 100 / 12
			//+cash + ( +cash * +percent / 100 / 12 ) + ( +i * +addition );

		}

	}


	$('.calc5__btn').click(function(){
		calculation();
	});

});