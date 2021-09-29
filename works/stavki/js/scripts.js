$(document).ready(function() {

	







	$('.calc__input').change(function(){
		calculation();
	});
	$('.calc__select').change(function(){
		calculation();
	});

	calculation();

	function calculation() {


		var calc_inp_1 = $('#calc_inp_1').val();
		var calc_valute = $('#calc_valute').val();

		$('.calc__valute').text(calc_valute);

		var calc_stavka_1 = (calc_inp_1 / 133).toFixed(0);
		var calc_stavka_2 = (calc_inp_1 / 100).toFixed(0);

		$('#calc_text_1').text("");
		$('#calc_text_1').append(`
			«${calc_inp_1}» / 133 = <span id="calc_span_1" class="calc__yellow">${calc_stavka_1} </span><span class="calc__valute">${calc_valute}</span> и «${calc_inp_1}» / 100 = <span id="calc_span_2" class="calc__yellow">${calc_stavka_2}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_span_3').text(calc_stavka_1);
		$('#calc_span_4').text(calc_stavka_2);
		$('#calc_span_5').text(calc_stavka_2);

		$('#calc_span_6').text(calc_stavka_1 * 2);

		var calc_inp_2 = $('#calc_inp_2').val();

		var calc_inp_3 = $('#calc_inp_3').val();
		var calc_inp_4 = $('#calc_inp_4').val();
		var calc_inp_5 = $('#calc_inp_5').val();
		var calc_inp_6 = $('#calc_inp_6').val();

		var calc_event_1 = (calc_inp_2 / (+calc_inp_3 - 1)).toFixed(0);
		var calc_event_2 = (calc_inp_2 / (+calc_inp_4 - 1)).toFixed(0);
		var calc_event_3 = (calc_inp_2 / (+calc_inp_5 - 1)).toFixed(0);
		var calc_event_4 = (calc_inp_2 / (+calc_inp_6 - 1)).toFixed(0);

		$('#calc_text_2').text("");
		$('#calc_text_2').append(`
		<span class="calc__yellow">${calc_event_1}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__teal">${calc_inp_2}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_3').text("");
		$('#calc_text_3').append(`
		<span class="calc__yellow">${calc_event_2}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__teal">${calc_inp_2}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_4').text("");
		$('#calc_text_4').append(`
		<span class="calc__yellow">${calc_event_3}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__teal">${calc_inp_2}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_5').text("");
		$('#calc_text_5').append(`
		<span class="calc__yellow">${calc_event_4}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__teal">${calc_inp_2}</span> <span class="calc__valute">${calc_valute}</span>
		`);




		var calc_event_5 = ((calc_inp_2 / 2) / (+calc_inp_3 - 1)).toFixed(0);
		var calc_event_6 = ((calc_inp_2 / 2) / (+calc_inp_4 - 1)).toFixed(0);
		var calc_event_7 = ((calc_inp_2 / 2) / (+calc_inp_5 - 1)).toFixed(0);
		var calc_event_8 = ((calc_inp_2 / 2) / (+calc_inp_6 - 1)).toFixed(0);

		$('#calc_text_6').text("");
		$('#calc_text_6').append(`
		<span class="calc__yellow">${calc_event_5}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 2).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_7').text("");
		$('#calc_text_7').append(`
		<span class="calc__yellow">${calc_event_6}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 2).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_8').text("");
		$('#calc_text_8').append(`
		<span class="calc__yellow">${calc_event_7}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 2).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_9').text("");
		$('#calc_text_9').append(`
		<span class="calc__yellow">${calc_event_8}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 2).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		



		var calc_event_9 = ((calc_inp_2 / 4) / (+calc_inp_3 - 1)).toFixed(0);
		var calc_event_10 = ((calc_inp_2 / 4) / (+calc_inp_4 - 1)).toFixed(0);
		var calc_event_11 = ((calc_inp_2 / 4) / (+calc_inp_5 - 1)).toFixed(0);
		var calc_event_12 = ((calc_inp_2 / 4) / (+calc_inp_6 - 1)).toFixed(0);

		$('#calc_text_10').text("");
		$('#calc_text_10').append(`
		<span class="calc__yellow">${calc_event_9}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 4).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_11').text("");
		$('#calc_text_11').append(`
		<span class="calc__yellow">${calc_event_10}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 4).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_12').text("");
		$('#calc_text_12').append(`
		<span class="calc__yellow">${calc_event_11}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 4).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);

		$('#calc_text_13').text("");
		$('#calc_text_13').append(`
		<span class="calc__yellow">${calc_event_12}</span> <span class="calc__valute">${calc_valute}</span> нужно поставить на это событие с этим коэффициентом, чтобы выиграть <span class="calc__red">${(calc_inp_2 / 4).toFixed(0)}</span> <span class="calc__valute">${calc_valute}</span>
		`);
	}




});