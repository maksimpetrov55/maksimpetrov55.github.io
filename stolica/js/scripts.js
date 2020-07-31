$(document).ready(function() {

	$('.calc__hover').click(function(){
		$('.calc__info').addClass("calc__info--show");
	});

	$('.calc__info--close').click(function(){
		$('.calc__info').removeClass("calc__info--show");
	});

	$("#polzunok").slider({
		animate: "slow",
		range: "min",
		value: 50,
		min: 1,
		max: 350,
		slide : function(event, ui) {
			$("#result-polzunok").val(ui.value);
			calculation();
		}
	});
	$( "#result-polzunok" ).val($( "#polzunok" ).slider( "value" ));
	
	$('#result-polzunok').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok" ).slider( "value", sliderInput );
		calculation();
	});

	$("#polzunok2").slider({
		animate: "slow",
		range: "min",
		value: 10,
		min: 1,
		max: 30,
		slide : function(event, ui) {
			$("#result-polzunok2").val(ui.value);
			calculation();
		}
	});
	$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));
	
	$('#result-polzunok2').on("change", function(){
		var sliderInput2 = $(this).val();
		$( "#polzunok2" ).slider( "value", sliderInput2 );
		calculation();
	});

	$('.calc__select').on("change", function(){
		calculation();
	});

	$('.calc__radio').on("change", function(){
		calculation();
	});



	calculation();

	function calculation() {

		// var radioReg = 0;
		// var radioNalog = 0;

		// var textReg = "";
		// var textNalog = "";

		var sliderValue = $('#result-polzunok').val();
		var sliderValue2 = $('#result-polzunok2').val();

		if ( $('input[name=radio_reg]').is(":checked") ) {
			var radioReg = $('input[name=radio_reg]:checked').val();
			if ( radioReg == 1 ) {
				var textReg = "ИП";
			} else {
				var textReg = "ООО";
			}
		}

		if ( $('input[name=radio_nalog]').is(":checked") ) {
			var radioNalog = $('input[name=radio_nalog]:checked').val();
			if ( radioNalog == 1 ) {
				var textNalog = "ОСН";
			} 
			if ( radioNalog == 2 ) {
				var textNalog = "УСН 6%";
			}
			if ( radioNalog == 3 ) {
				var textNalog = "УСН 15%";
			}
		}

		if ( sliderValue2 > 0 ) {
			var textEmplo = "1 — 5";
		}
		if ( sliderValue2 >= 6 ) {
			var textEmplo = "6 — 10";
		}
		if ( sliderValue2 >= 11 ) {
			var textEmplo = "11 — 20";
		}
		if ( sliderValue2 >= 21 ) {
			var textEmplo = "21 — 30";
		}
		if ( sliderValue2 > 30 ) {
			var textEmplo = "более 30";
		}

		//if ( $('input[name=radio_emplo]').is(":checked") ) {
			//var radioEmplo = $('input[name=radio_emplo]:checked').val();
			// if ( radioEmplo == 1 ) {
			// 	var textEmplo = "1 — 5";
			// } 
			// if ( radioEmplo == 2 ) {
			// 	var textEmplo = "6 — 10";
			// }
			// if ( radioEmplo == 3 ) {
			// 	var textEmplo = "11 — 20";
			// }
			// if ( radioEmplo == 4 ) {
			// 	var textEmplo = "21 — 30";
			// }
			// if ( radioEmplo == 5 ) {
			// 	var textEmplo = "более 30";
			// }
		//}


		if ( $('input[name=radio_reg]').is(":checked") && $('input[name=radio_nalog]').is(":checked") ) {

			$('.calc__display').addClass("calc__display--show");

			$('.calc__itogtext').text( textReg + " на " + textNalog + ", " + textEmplo + " сотрудников, " + sliderValue + " документов в месяц." );

			if ( radioNalog == 1 ) {

				if ( sliderValue2 > 0 ) {
					if ( sliderValue > 0 ) {	var calcResult = 4900; }
					if ( sliderValue >= 20 ) {	var calcResult = 8900; }
					if ( sliderValue >= 40 ) {	var calcResult = 10900; }
					if ( sliderValue >= 70 ) {	var calcResult = 15900; }
					if ( sliderValue >= 120 ) {	var calcResult = 25900; }
					if ( sliderValue >= 180 ) {	var calcResult = 28900; }
					if ( sliderValue >= 240 ) {	var calcResult = 30900; }
					if ( sliderValue == 350 ) {	var calcResult = 42900; }
					if ( sliderValue > 350 ) {	var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 6 ) {
					if ( sliderValue > 0 ) {	var calcResult = 6900; }
					if ( sliderValue >= 20 ) {	var calcResult = 10900; }
					if ( sliderValue >= 40 ) {	var calcResult = 12900; }
					if ( sliderValue >= 70 ) {	var calcResult = 18900; }
					if ( sliderValue >= 120 ) {	var calcResult = 28900; }
					if ( sliderValue >= 180 ) {	var calcResult = 30900; }
					if ( sliderValue >= 240 ) {	var calcResult = 35900; }
					if ( sliderValue == 350 ) {	var calcResult = 45900; }
					if ( sliderValue > 350 ) {	var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 11 ) {
					if ( sliderValue > 0    ) { var calcResult = 9900;	}
					if ( sliderValue >= 20  ) { var calcResult = 13900; }
					if ( sliderValue >= 40  ) { var calcResult = 15900; }
					if ( sliderValue >= 70  ) { var calcResult = 22900; }
					if ( sliderValue >= 120 ) { var calcResult = 30900; }
					if ( sliderValue >= 180 ) { var calcResult = 33900; }
					if ( sliderValue >= 240 ) { var calcResult = 38900; }
					if ( sliderValue == 350  ) { var calcResult = 48900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 21 ) {
					if ( sliderValue > 0    ) { var calcResult = 12900;	}
					if ( sliderValue >= 20  ) { var calcResult = 16900; }
					if ( sliderValue >= 40  ) { var calcResult = 18900; }
					if ( sliderValue >= 70  ) { var calcResult = 25900; }
					if ( sliderValue >= 120 ) { var calcResult = 32900; }
					if ( sliderValue >= 180 ) { var calcResult = 35900; }
					if ( sliderValue >= 240 ) { var calcResult = 40900; }
					if ( sliderValue == 350  ) { var calcResult = 50900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 > 30 ) {
					var calcResult = "Индивидуальные условия";
				}

			}

			if ( radioNalog == 3 ) {

				if ( sliderValue2 > 0 ) {
					if ( sliderValue > 0    ) { var calcResult = 3900; }
					if ( sliderValue >= 20  ) { var calcResult = 6900; }
					if ( sliderValue >= 40  ) { var calcResult = 8900; }
					if ( sliderValue >= 70  ) { var calcResult = 12900; }
					if ( sliderValue >= 120 ) { var calcResult = 15900; }
					if ( sliderValue >= 180 ) { var calcResult = 20900; }
					if ( sliderValue >= 240 ) { var calcResult = 22900; }
					if ( sliderValue == 350  ) { var calcResult = 24900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 6 ) {
					if ( sliderValue > 0    ) { var calcResult = 4900; }
					if ( sliderValue >= 20  ) { var calcResult = 7900; }
					if ( sliderValue >= 40  ) { var calcResult = 10900; }
					if ( sliderValue >= 70  ) { var calcResult = 13900; }
					if ( sliderValue >= 120 ) { var calcResult = 19900; }
					if ( sliderValue >= 180 ) { var calcResult = 22900; }
					if ( sliderValue >= 240 ) { var calcResult = 24900; }
					if ( sliderValue == 350  ) { var calcResult = 26900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 11 ) {
					if ( sliderValue > 0    ) { var calcResult = 6900; }
					if ( sliderValue >= 20  ) { var calcResult = 9900; }
					if ( sliderValue >= 40  ) { var calcResult = 12900; }
					if ( sliderValue >= 70  ) { var calcResult = 15900; }
					if ( sliderValue >= 120 ) { var calcResult = 22900; }
					if ( sliderValue >= 180 ) { var calcResult = 24900; }
					if ( sliderValue >= 240 ) { var calcResult = 26900; }
					if ( sliderValue == 350  ) { var calcResult = 28900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 21 ) {
					if ( sliderValue > 0    ) { var calcResult = 9900; }
					if ( sliderValue >= 20  ) { var calcResult = 12900; }
					if ( sliderValue >= 40  ) { var calcResult = 14900; }
					if ( sliderValue >= 70  ) { var calcResult = 18900; }
					if ( sliderValue >= 120 ) { var calcResult = 24900; }
					if ( sliderValue >= 180 ) { var calcResult = 26900; }
					if ( sliderValue >= 240 ) { var calcResult = 29900; }
					if ( sliderValue == 350  ) { var calcResult = 31900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 > 30 ) {
					var calcResult = "Индивидуальные условия";
				}

			}

			if ( radioNalog == 2 ) {

				if ( sliderValue2 > 0 ) {
					if ( sliderValue > 0    ) { var calcResult = 3900; }
					if ( sliderValue >= 20  ) { var calcResult = 6900; }
					if ( sliderValue >= 40  ) { var calcResult = 7900; }
					if ( sliderValue >= 70  ) { var calcResult = 9900; }
					if ( sliderValue >= 120 ) { var calcResult = 11900; }
					if ( sliderValue >= 180 ) { var calcResult = 15900; }
					if ( sliderValue >= 240 ) { var calcResult = 15900; }
					if ( sliderValue == 350  ) { var calcResult = 19900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 6 ) {
					if ( sliderValue > 0    ) { var calcResult = 4900; }
					if ( sliderValue >= 20  ) { var calcResult = 7900; }
					if ( sliderValue >= 40  ) { var calcResult = 8900; }
					if ( sliderValue >= 70  ) { var calcResult = 11900; }
					if ( sliderValue >= 120 ) { var calcResult = 14900; }
					if ( sliderValue >= 180 ) { var calcResult = 16900; }
					if ( sliderValue >= 240 ) { var calcResult = 19900; }
					if ( sliderValue == 350  ) { var calcResult = 21900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 11 ) {
					if ( sliderValue > 0    ) { var calcResult = 6900; }
					if ( sliderValue >= 20  ) { var calcResult = 8900; }
					if ( sliderValue >= 40  ) { var calcResult = 10900; }
					if ( sliderValue >= 70  ) { var calcResult = 15900; }
					if ( sliderValue >= 120 ) { var calcResult = 17900; }
					if ( sliderValue >= 180 ) { var calcResult = 19900; }
					if ( sliderValue >= 240 ) { var calcResult = 21900; }
					if ( sliderValue == 350  ) { var calcResult = 23900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 >= 16 ) {
					if ( sliderValue > 0    ) { var calcResult = 9900; }
					if ( sliderValue >= 20  ) { var calcResult = 10900; }
					if ( sliderValue >= 40  ) { var calcResult = 13900; }
					if ( sliderValue >= 70  ) { var calcResult = 16900; }
					if ( sliderValue >= 120 ) { var calcResult = 19900; }
					if ( sliderValue >= 180 ) { var calcResult = 21900; }
					if ( sliderValue >= 240 ) { var calcResult = 23900; }
					if ( sliderValue == 350  ) { var calcResult = 26900; }
					if ( sliderValue > 350  ) { var calcResult = "Индивидуальные условия"; }
				}
				if ( sliderValue2 > 20 ) {
					var calcResult = "Индивидуальные условия";
				}

			}

			if ( $('input[name=radio_activity]').is(":checked") ) {
				var calcUp = $('input[name=radio_activity]:checked').val();
			} else {
				var calcUp = 0;
			}

			if ( calcResult == "Индивидуальные условия" ) {
				$('.calc__price--cross').css({ display: "none" });
				$('.calc__pricesale').text ( calcResult );
			} else {
				$('.calc__price--cross').css({ display: "inline-block" });
				$('.calc__price--cross').text( (+calcResult * ((calcUp / 100) + 1)).toFixed(0) + " руб." );
				$('.calc__pricesale').text ( (+calcResult * ((calcUp / 100) + 1) * 0.95).toFixed(0) + " руб." );
			}


		}


	}

});