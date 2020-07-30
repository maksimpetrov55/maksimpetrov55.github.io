$(document).ready(function() {

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

	$('.calc__select').on("change", function(){
		calculation();
	});


	function calculation() {

		// var radioReg = 0;
		// var radioNalog = 0;

		// var textReg = "";
		// var textNalog = "";

		var sliderValue = $('#result-polzunok').val();

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

		if ( $('input[name=radio_emplo]').is(":checked") ) {
			var radioEmplo = $('input[name=radio_emplo]:checked').val();
			if ( radioEmplo == 1 ) {
				var textEmplo = "1 — 5";
			} 
			if ( radioEmplo == 2 ) {
				var textEmplo = "6 — 10";
			}
			if ( radioEmplo == 3 ) {
				var textEmplo = "11 — 20";
			}
			if ( radioEmplo == 4 ) {
				var textEmplo = "21 — 30";
			}
			if ( radioEmplo == 5 ) {
				var textEmplo = "более 30";
			}
		}


		if ( $('input[name=radio_reg]').is(":checked") && $('input[name=radio_nalog]').is(":checked") && $('input[name=radio_emplo]').is(":checked") ) {

			$('.calc__display').addClass("calc__display--show");

			$('.calc__itogtext').text( textReg + " на " + textNalog + ", " + textEmplo + " сотрудников, " + sliderValue + " документов в месяц." );

		}


	}

});