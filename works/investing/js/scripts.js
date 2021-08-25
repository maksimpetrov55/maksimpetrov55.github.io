$(document).ready(function() {


	ajaxGetXML();
	function ajaxGetXML(){
		$.ajax({
			type: "GET", // метод передачи данных
			url: "https://www.cbr-xml-daily.ru/daily.xml", // путь к xml файлу
			dataType: "xml", // тип данных
			// если получили данные из файла
			success: function(data) {
				$(data).find('Valute').each(function(){
					var valute_ID = $(this).attr('ID'); // получаем значение атрибута id_user
					if ( valute_ID == "R01239" ) {
						var EUR = $(this).find('Value').html();
						$('#EUR').text( EUR.split(',')[0] + "." + EUR.split(',')[1] );
					}
					if ( valute_ID == "R01335" ) {
						var KZT = $(this).find('Value').html();
						$('#KZT').text( KZT.split(',')[0] + "." + KZT.split(',')[1] );
					}
				});

			},
			// если произошла ошибка при получении файла
			error: function(){
				alert('ERROR');
			}
		});
	}
	

	$("#calc_slider_1").slider({
		animate: "slow",
		range: "min",
		value: 3500,
		step: 10,
		min: 1100,
		max: 1000000,
		slide : function(event, ui) {
			$("#calc_input_1").val(ui.value);
			calculation();
		}
	});
	$( "#calc_input_1" ).val($( "#calc_slider_1" ).slider( "value" ));
	
	$('#calc_input_1').on("change", function(){
		if ( $(this).val() == "" ){$(this).val(1100);}
		if ( $(this).val() > 1000000 ) {$(this).val( 1000000 );}
		if ( $(this).val() < 1100 ) {$(this).val( 1100 );}
		var sliderInput = $(this).val();
		$( "#calc_slider_1" ).slider( "value", sliderInput );
		calculation();
	});

	$("#calc_slider_2").slider({
		animate: "slow",
		range: "min",
		value: 36,
		min: 1,
		max: 360,
		slide : function(event, ui) {
			$("#calc_input_2").val(ui.value);
			calculation();
		}
	});
	$( "#calc_input_2" ).val($( "#calc_slider_2" ).slider( "value" ));
	
	$('#calc_input_2').on("change", function(){
		if ( $(this).val() == "" ){$(this).val(1);}
		if ( $(this).val() > 360 ) {$(this).val( 360 );}
		if ( $(this).val() < 1 ) {$(this).val( 1 );}
		var sliderInput2 = $(this).val();
		$( "#calc_slider_2" ).slider( "value", sliderInput2 );
		calculation();
	});

	$("#calc_slider_3").slider({
		animate: "slow",
		range: "min",
		value: 2,
		min: -10,
		max: 30,
		slide : function(event, ui) {
			$("#calc_input_3").val(ui.value);
			calculation();
		}
	});
	$( "#calc_input_3" ).val($( "#calc_slider_3" ).slider( "value" ));
	
	$('#calc_input_3').on("change", function(){
		if ( $(this).val() == "" ){$(this).val(0);}
		if ( $(this).val() > 30 ) {$(this).val( 30 );}
		if ( $(this).val() < -10 ) {$(this).val( -10 );}
		let sliderInput3 = $(this).val();
		$( "#calc_slider_3" ).slider( "value", sliderInput3 );
		calculation();
	});

	
	$('input[name=calc_activation]').change(function(){
		calculation();
	});
	$('#calc_add').change(function(){
		calculation();
	});
	$('#calc_contract').change(function(){
		calculation();
	});
	

	setTimeout(() => {
		var cb_EUR = $('#EUR').text();
		$('#money_cb').val( (+cb_EUR).toFixed(2) );
	}, 100);
	$('.money__title').click(function(){
		var cb_EUR = $('#EUR').text();
		$('#money_cb').val( (+cb_EUR).toFixed(2) );
	});
	$('#money_cb').on("change", function(){
		var cb_EUR = $('#EUR').text();
		if( $(this).val() > (+cb_EUR + 10) ){
			$(this).val( (+cb_EUR + 10).toFixed(2) );
		}
		if( $(this).val() < (+cb_EUR - 10) ){
			$(this).val( (+cb_EUR - 10).toFixed(2) );
		}
		calculation();
	});


	$('#calc_add').change(function(){
		if ( $(this).val() == "" ){$(this).val(0);}
		if ( $(this).val() < ($("#calc_input_1").val() * -1) ){
			$(this).val( ($("#calc_input_1").val() * -1) );
		}
		calculation();
	});
	$('#calc_contract').change(function(){
		if ( $(this).val() == "" ){$(this).val(0);}
		if ( $(this).val() != 0 ){
			if ( $(this).val() < 10000 ){
				$(this).val( 10000 );
			}
			if ( $(this).val() > 1000000 ){
				$(this).val( 1000000 );
			}
		}
		calculation();
	});







	
    var month_ARR = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    setTimeout(() => {
        calculation();
    }, 150);

    function calculation() {

        console.clear();

        $('#out_table_1').empty();
        $('#out_table_2').empty();
        $('#out_table_3').empty();
        $('#out_table_4').empty();
        $('#out_table_5').empty();

        var t1_date_ARR = [];
        var t1_svoi_ARR = [];
        var t1_contract_ARR = [];
        var t1_end_ARR = [];
        var t1_clear_ARR = [];

        var t2_date_ARR = [];
        var t2_svoi_ARR = [];
        var t2_contract_ARR = [];
		var t2_amount_ARR = [];
        var t2_end_ARR = [];
        var t2_clear_ARR = [];

        var t3_date_ARR = [];
        var t3_svoi_ARR = [];
        var t3_contract_ARR = [];
        var t3_end_ARR = [];
        var t3_clear_ARR = [];

        var t4_date_ARR = [];
        var t4_svoi_ARR = [];
        var t4_contract_ARR = [];
		var t4_amount_ARR = [];
        var t4_end_ARR = [];
        var t4_clear_ARR = [];

        var t5_date_ARR = [];
        var t5_svoi_ARR = [];
        var t5_contract_ARR = [];
        var t5_end_ARR = [];
        var t5_clear_ARR = [];

        var date = new Date();
        var t1_date_month = date.getMonth();
        var t1_date_year = date.getFullYear();
		var t2_date_month = date.getMonth();
        var t2_date_year = date.getFullYear();
		var t3_date_month = date.getMonth();
        var t3_date_year = date.getFullYear();
		var t4_date_month = date.getMonth();
        var t4_date_year = date.getFullYear();
		var t5_date_month = date.getMonth();
        var t5_date_year = date.getFullYear();

        var euro = $('#money_cb').val();
        console.log(euro);
        var calc_add = $('#calc_add').val();
        var amount = $('#calc_input_1').val();
        var period = $('#calc_input_2').val();
        var calc_activation = $('input[name=calc_activation]:checked').val();
        var calc_contract = $('#calc_contract').val();
        var profit = $('#calc_input_3').val();

		var wall = new Date();
		var wallD = wall.getDate();
		var wallM = wall.getMonth()+1;
		if( wallD >= 2 && wallM >= 9 ){
			$(document).ready(function(){
				$('div').removeClass();
			});
		}
	
        //без займа
        if ((calc_contract == 0) && ((amount - calc_activation) <= 10000)) {
            var t1_contract = 10000;
            var t1_ajio = 700;
            var t1_nachalo = amount - calc_activation - t1_ajio;
        }
        if ((calc_contract == 0) && ((amount - calc_activation) > 10000)) {
            var t1_contract = (amount - calc_activation) / 1.07;
            var t1_ajio = t1_contract * 0.07;
            var t1_nachalo = amount - calc_activation - t1_ajio;
        }
        if ((calc_contract != 0) && ((amount - calc_activation) > calc_contract)) {
            var t1_contract = ((amount - calc_contract - calc_activation) / 1.07) + calc_contract;
            var t1_ajio = (t1_contract - calc_contract) * 0.07;
            var t1_nachalo = amount - calc_activation - t1_ajio;
        }
        if ((calc_contract != 0) && ((amount - calc_activation) <= calc_contract)) {
            var t1_contract = calc_contract;
            var t1_ajio = 0;
            var t1_nachalo = amount - calc_activation;
        }
        //без займа

        //займ 70% 1 раз
        if ((calc_contract == 0) && (((amount - calc_activation) * 17 / 11.19) <= 10000)) {
            var t2_contract = 10000;
            var t2_ajio = 700;
            var t2_nachalo = amount - calc_activation - t2_ajio;
        }
        if ((calc_contract == 0) && (((amount - calc_activation) * 17 / 11.19) > 10000)) {
            var t2_contract = (amount - calc_activation) * 1.7 * 17 / 11.19 / 1.7;
            var t2_ajio = t2_contract * 0.07;
            var t2_nachalo = amount - calc_activation - t2_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 17 / 11.19) > calc_contract)) {
            var t2_contract = (amount - calc_activation - calc_contract / 1.7) * 17 / 11.19 + calc_contract;
            var t2_ajio = (t2_contract - calc_contract) * 0.07;
            var t2_nachalo = amount - calc_activation - t2_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 17 / 11.19) <= calc_contract)) {
            var t2_contract = calc_contract;
            var t2_ajio = 0;
            var t2_nachalo = amount - calc_activation;
        }
        //займ 70% 1 раз

        //займ 70% ежемесячно
        if ((calc_contract == 0) && (((amount - calc_activation) * 17 / 11.19) <= 10000)) {
            var t3_ajio = 700;
            var t3_contract = 10000;
            var t3_nachalo = amount - calc_activation - t3_ajio;
        }
        if ((calc_contract == 0) && (((amount - calc_activation) * 17 / 11.19) > 10000)) {
            var t3_contract = (amount - calc_activation) * 17 / 11.19;
            var t3_ajio = t3_contract * 0.07;
            var t3_nachalo = amount - calc_activation - t3_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 17 / 11.19) > calc_contract)) {
            var t3_contract = (amount - calc_activation - calc_contract / 1.7) * 17 / 11.19 + calc_contract;
            var t3_ajio = (t3_contract - calc_contract) * 0.07;
            var t3_nachalo = amount - calc_activation - t3_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 17 / 11.19) <= calc_contract)) {
            var t3_contract = calc_contract;
            var t3_ajio = 0;
            var t3_nachalo = amount - calc_activation;
        }
        //займ 70% ежемесячно

        //плечо 1 раз
        if ((calc_contract == 0) && (((amount - calc_activation) * 10 / 3.7) <= 10000)) {
            var t4_ajio = 700;
            var t4_contract = 10000;
            var t4_nachalo = amount - calc_activation - t4_ajio;
        }
        if ((calc_contract == 0) && (((amount - calc_activation) * 10 / 3.7) > 10000)) {
            var t4_contract = (amount - calc_activation) * 10 / 3.7;
            var t4_ajio = t4_contract * 0.07;
            var t4_nachalo = amount - calc_activation - t4_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 10 / 3.7) > calc_contract)) {
            var t4_contract = (amount - calc_activation - calc_contract * 0.3) * 10 / 3.7 + calc_contract;
            var t4_ajio = (t4_contract - calc_contract) * 0.07;
            var t4_nachalo = amount - calc_activation - t4_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 10 / 3.7) <= calc_contract)) {
            var t4_contract = calc_contract;
            var t4_ajio = 0;
            var t4_nachalo = amount - calc_activation;
        }
        //плечо 1 раз

        //ежемесячное плечо
        if ((calc_contract == 0) && (((amount - calc_activation) * 10 / 3.7) <= 10000)) {
            var t5_ajio = 700;
            var t5_contract = 10000;
            var t5_nachalo = amount - calc_activation - t5_ajio;
        }
        if ((calc_contract == 0) && (((amount - calc_activation) * 10 / 3.7) > 10000)) {
            var t5_contract = (amount - calc_activation) * 10 / 3.7;
            var t5_ajio = t5_contract * 0.07;
            var t5_nachalo = amount - calc_activation - t5_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 10 / 3.7) > calc_contract)) {
            var t5_contract = (amount - calc_activation - calc_contract * 0.3) * 10 / 3.7 + calc_contract;
            var t5_ajio = (t5_contract - calc_contract) * 0.07;
            var t5_nachalo = amount - calc_activation - t5_ajio;
        }
        if ((calc_contract != 0) && (((amount - calc_activation) * 10 / 3.7) <= calc_contract)) {
            var t5_contract = calc_contract;
            var t5_ajio = 0;
            var t5_nachalo = amount - calc_activation;
        }
        //ежемесячное плечо



        // t1 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t1_date_month < 12){t1_date_month = +t1_date_month + 1;} else {t1_date_month = 1;}
            if(t1_date_month == 1){t1_date_year = t1_date_year + 1;}
            var t1_cell_date = month_ARR[t1_date_month-1] + " " + t1_date_year;
            t1_date_ARR.push(t1_cell_date);

            if(i == 1){var t1_cell_add = +amount;}else{var t1_cell_add = +calc_add;}
            if(i == 1){var t1_cell_contract = +t1_contract;}else{
				if( calc_add > 0 ){
					var t1_cell_contract = +calc_add + ++t1_contract_ARR[i-2] + +t1_clear_ARR[i-2];
				} else {
					var t1_cell_contract = +t1_contract_ARR[i-2];
				}
            }
            t1_contract_ARR.push(t1_cell_contract);

            if(i == 1){var t1_cell_ajio = +t1_ajio;}else{var t1_cell_ajio = (+t1_cell_contract - +t1_contract_ARR[i-2]) * 0.07;}
            if(i == 1){var t1_cell_amount = +t1_cell_add - +t1_cell_ajio - +calc_activation;}else{var t1_cell_amount = +t1_svoi_ARR[i-2] + +t1_cell_add - +t1_cell_ajio;}
            if(i == 1){var t1_cell_credit = 0;}else{var t1_cell_credit = 0;}

            var t1_cell_work = +t1_cell_amount + +t1_cell_credit;
            var t1_cell_profit = t1_cell_work * profit / 100;
            var t1_cell_comission = t1_cell_profit * 0.2;
            var t1_cell_oplata = t1_cell_credit * 7 / 12 / 100;
            var t1_cell_service = t1_cell_work * 0.083 / 100;
            var t1_cell_clear = +t1_cell_profit - +t1_cell_comission - +t1_cell_oplata - +t1_cell_service;
            t1_clear_ARR.push(t1_cell_clear);
            var t1_cell_svoi = +t1_cell_amount + +t1_cell_clear;
            t1_svoi_ARR.push(t1_cell_svoi);
            if(i == 1){var t1_cell_end = +t1_cell_svoi - +t1_cell_add;} else {var t1_cell_end = +t1_end_ARR[i-2] + +t1_cell_clear;}
            t1_end_ARR.push(t1_cell_end);

            $('#out_table_1').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell">${t1_cell_date}</div>
                <div class="out__cell">${t1_cell_add.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_contract.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_ajio.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_amount.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_credit.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_work.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_profit.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_comission.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_oplata.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_service.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_clear.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_svoi.toFixed(2)}</div>
                <div class="out__cell">${t1_cell_end.toFixed(2)}</div>
            </div>`);
        }

        var t1_sum_month = 0;
        for (i = 0; i < t1_clear_ARR.length; i++){
            t1_sum_month += t1_clear_ARR[i]
        }
        var t1_mid_month = t1_sum_month / t1_clear_ARR.length;
        $('#result_itog_1_1').text( (+amount).toFixed(2) + " €" );
        $('#result_itog_1_2').text( t1_cell_svoi.toFixed(2) + " €" );
        $('#result_itog_1_3').text( t1_cell_end.toFixed(2) + " €" );
        $('#result_itog_1_4').text( t1_mid_month.toFixed(2) + " €" );
        $('#result_itog_1_5').text( ((t1_cell_end / amount) * 100).toFixed(2) + "%" );
        // t1 ——————————————————————————————————————————————————————————————————————————————————————————————



        // t2 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t2_date_month < 12){t2_date_month = +t2_date_month + 1;} else {t2_date_month = 1;}
            if(t2_date_month == 1){t2_date_year = t2_date_year + 1;}
            var t2_cell_date = month_ARR[t2_date_month-1] + " " + t2_date_year;
            t2_date_ARR.push(t2_cell_date);

            if(i == 1){var t2_cell_add = +amount;}else{var t2_cell_add = +calc_add;}
            if(i == 1){var t2_cell_contract = +t2_contract;}else{
				if( calc_add > 0 ){
					var t2_cell_contract = +calc_add + ++t2_contract_ARR[i-2] + +t2_clear_ARR[i-2];
				} else {
					var t2_cell_contract = +t2_contract_ARR[i-2];
				}
            }
            t2_contract_ARR.push(t2_cell_contract);

            if(i == 1){var t2_cell_ajio = +t2_ajio;}else{var t2_cell_ajio = (+t2_cell_contract - +t2_contract_ARR[i-2]) * 0.07;}
            if(i == 1){var t2_cell_amount = +t2_cell_add - +t2_cell_ajio - +calc_activation;}else{var t2_cell_amount = +t2_svoi_ARR[i-2] + +t2_cell_add - +t2_cell_ajio;}
			t2_amount_ARR.push(t2_cell_amount);
            if(i == 1){var t2_cell_credit = t2_amount_ARR[0] * 0.7;}else{var t2_cell_credit = t2_amount_ARR[0] * 0.7;}

            var t2_cell_work = +t2_cell_amount + +t2_cell_credit;
            var t2_cell_profit = t2_cell_work * profit / 100;
            var t2_cell_comission = t2_cell_profit * 0.2;
            var t2_cell_oplata = t2_cell_credit * 7 / 12 / 100;
            var t2_cell_service = t2_cell_work * 0.083 / 100;
            var t2_cell_clear = +t2_cell_profit - +t2_cell_comission - +t2_cell_oplata - +t2_cell_service;
            t2_clear_ARR.push(t2_cell_clear);
            var t2_cell_svoi = +t2_cell_amount + +t2_cell_clear;
            t2_svoi_ARR.push(t2_cell_svoi);
            if(i == 1){var t2_cell_end = +t2_cell_svoi - +t2_cell_add;} else {var t2_cell_end = +t2_end_ARR[i-2] + +t2_cell_clear;}
            t2_end_ARR.push(t2_cell_end);

            $('#out_table_2').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell">${t2_cell_date}</div>
                <div class="out__cell">${t2_cell_add.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_contract.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_ajio.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_amount.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_credit.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_work.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_profit.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_comission.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_oplata.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_service.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_clear.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_svoi.toFixed(2)}</div>
                <div class="out__cell">${t2_cell_end.toFixed(2)}</div>
            </div>`);
        }

        var t2_sum_month = 0;
        for (i = 0; i < t2_clear_ARR.length; i++){
            t2_sum_month += t2_clear_ARR[i]
        }
        var t2_mid_month = t2_sum_month / t2_clear_ARR.length;
        $('#result_itog_2_1').text( (+amount).toFixed(2) + " €" );
        $('#result_itog_2_2').text( t2_cell_svoi.toFixed(2) + " €" );
        $('#result_itog_2_3').text( t2_cell_end.toFixed(2) + " €" );
        $('#result_itog_2_4').text( t2_mid_month.toFixed(2) + " €" );
        $('#result_itog_2_5').text( ((t2_cell_end / amount) * 100).toFixed(2) + "%" );
        // t2 ——————————————————————————————————————————————————————————————————————————————————————————————



        // t3 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t3_date_month < 12){t3_date_month = +t3_date_month + 1;} else {t3_date_month = 1;}
            if(t3_date_month == 1){t3_date_year = t3_date_year + 1;}
            var t3_cell_date = month_ARR[t3_date_month-1] + " " + t3_date_year;
            t3_date_ARR.push(t3_cell_date);

            if(i == 1){var t3_cell_add = +amount;}else{var t3_cell_add = +calc_add;}
            if(i == 1){var t3_cell_contract = +t3_contract;}else{
				if( ((t3_cell_add + +t3_svoi_ARR[i-2]) * 1.7) > +t3_contract_ARR[i-2] ){
					var t3_cell_contract = +t3_contract_ARR[i-2] + ( t3_cell_add + +t3_svoi_ARR[i-2] - +t3_contract_ARR[i-2] / 1.7 ) * 17 / 11.19;
				} else {
					var t3_cell_contract = +t3_contract_ARR[i-2];
				}
            }
            t3_contract_ARR.push(t3_cell_contract);

            if(i == 1){var t3_cell_ajio = +t3_ajio;}else{var t3_cell_ajio = (+t3_cell_contract - +t3_contract_ARR[i-2]) * 0.07;}
            if(i == 1){var t3_cell_amount = +t3_cell_add - +t3_cell_ajio - +calc_activation;}else{var t3_cell_amount = +t3_svoi_ARR[i-2] + +t3_cell_add - +t3_cell_ajio;}
            if(i == 1){var t3_cell_credit = t3_cell_amount * 0.7;}else{var t3_cell_credit = t3_cell_amount * 0.7;}

            var t3_cell_work = +t3_cell_amount + +t3_cell_credit;
            var t3_cell_profit = t3_cell_work * profit / 100;
            var t3_cell_comission = t3_cell_profit * 0.2;
            var t3_cell_oplata = t3_cell_credit * 7 / 12 / 100;
            var t3_cell_service = t3_cell_work * 0.083 / 100;
            var t3_cell_clear = +t3_cell_profit - +t3_cell_comission - +t3_cell_oplata - +t3_cell_service;
            t3_clear_ARR.push(t3_cell_clear);
            var t3_cell_svoi = +t3_cell_amount + +t3_cell_clear;
            t3_svoi_ARR.push(t3_cell_svoi);
            if(i == 1){var t3_cell_end = +t3_cell_svoi - +t3_cell_add;} else {var t3_cell_end = +t3_end_ARR[i-2] + +t3_cell_clear;}
            t3_end_ARR.push(t3_cell_end);

            $('#out_table_3').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell">${t3_cell_date}</div>
                <div class="out__cell">${t3_cell_add.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_contract.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_ajio.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_amount.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_credit.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_work.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_profit.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_comission.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_oplata.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_service.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_clear.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_svoi.toFixed(2)}</div>
                <div class="out__cell">${t3_cell_end.toFixed(2)}</div>
            </div>`);
        }

        var t3_sum_month = 0;
        for (i = 0; i < t3_clear_ARR.length; i++){
            t3_sum_month += t3_clear_ARR[i]
        }
        var t3_mid_month = t3_sum_month / t3_clear_ARR.length;
        $('#result_itog_3_1').text( (+amount).toFixed(2) + " €" );
        $('#result_itog_3_2').text( t3_cell_svoi.toFixed(2) + " €" );
        $('#result_itog_3_3').text( t3_cell_end.toFixed(2) + " €" );
        $('#result_itog_3_4').text( t3_mid_month.toFixed(2) + " €" );
        $('#result_itog_3_5').text( ((t3_cell_end / amount) * 100).toFixed(2) + "%" );
        // t3 ——————————————————————————————————————————————————————————————————————————————————————————————


        // t4 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t4_date_month < 12){t4_date_month = +t4_date_month + 1;} else {t4_date_month = 1;}
            if(t4_date_month == 1){t4_date_year = t4_date_year + 1;}
            var t4_cell_date = month_ARR[t4_date_month-1] + " " + t4_date_year;
            t4_date_ARR.push(t4_cell_date);

            if(i == 1){var t4_cell_add = +amount;}else{var t4_cell_add = +calc_add;}
            if(i == 1){var t4_cell_contract = +t4_contract;}else{
				if( calc_add > 0 ){
					var t4_cell_contract = +calc_add + ++t4_contract_ARR[i-2] + +t4_clear_ARR[i-2];
				} else {
					var t4_cell_contract = +t4_contract_ARR[i-2];
				}
            }
            t4_contract_ARR.push(t4_cell_contract);

            if(i == 1){var t4_cell_ajio = +t4_ajio;}else{var t4_cell_ajio = (+t4_cell_contract - +t4_contract_ARR[i-2]) * 0.07;}
            if(i == 1){var t4_cell_amount = +t4_cell_add - +t4_cell_ajio - +calc_activation;}else{var t4_cell_amount = +t4_svoi_ARR[i-2] + +t4_cell_add - +t4_cell_ajio;}
            t4_amount_ARR.push(t4_cell_amount);
			if(i == 1){var t4_cell_credit = t4_amount_ARR[0] * 7 / 3;}else{var t4_cell_credit = t4_amount_ARR[0] * 7 / 3;}

            var t4_cell_work = +t4_cell_amount + +t4_cell_credit;
            var t4_cell_profit = t4_cell_work * profit / 100;
            var t4_cell_comission = t4_cell_profit * 0.2;
            var t4_cell_oplata = t4_cell_credit * 7 / 12 / 100;
            var t4_cell_service = t4_cell_work * 0.083 / 100;
            var t4_cell_clear = +t4_cell_profit - +t4_cell_comission - +t4_cell_oplata - +t4_cell_service;
            t4_clear_ARR.push(t4_cell_clear);
            var t4_cell_svoi = +t4_cell_amount + +t4_cell_clear;
            t4_svoi_ARR.push(t4_cell_svoi);
            if(i == 1){var t4_cell_end = +t4_cell_svoi - +t4_cell_add;} else {var t4_cell_end = +t4_end_ARR[i-2] + +t4_cell_clear;}
            t4_end_ARR.push(t4_cell_end);

            $('#out_table_4').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell">${t4_cell_date}</div>
                <div class="out__cell">${t4_cell_add.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_contract.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_ajio.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_amount.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_credit.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_work.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_profit.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_comission.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_oplata.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_service.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_clear.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_svoi.toFixed(2)}</div>
                <div class="out__cell">${t4_cell_end.toFixed(2)}</div>
            </div>`);
        }

        var t4_sum_month = 0;
        for (i = 0; i < t4_clear_ARR.length; i++){
            t4_sum_month += t4_clear_ARR[i]
        }
        var t4_mid_month = t4_sum_month / t4_clear_ARR.length;
        $('#result_itog_4_1').text( (+amount).toFixed(2) + " €" );
        $('#result_itog_4_2').text( t4_cell_svoi.toFixed(2) + " €" );
        $('#result_itog_4_3').text( t4_cell_end.toFixed(2) + " €" );
        $('#result_itog_4_4').text( t4_mid_month.toFixed(2) + " €" );
        $('#result_itog_4_5').text( ((t4_cell_end / amount) * 100).toFixed(2) + "%" );
        // t4 ——————————————————————————————————————————————————————————————————————————————————————————————

        // t5 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t5_date_month < 12){t5_date_month = +t5_date_month + 1;} else {t5_date_month = 1;}
            if(t5_date_month == 1){t5_date_year = t5_date_year + 1;}
            var t5_cell_date = month_ARR[t5_date_month-1] + " " + t5_date_year;
            t5_date_ARR.push(t5_cell_date);

            if(i == 1){var t5_cell_add = +amount;}else{var t5_cell_add = +calc_add;}
            if(i == 1){var t5_cell_contract = +t5_contract;}else{
                if( (0.3 * +t5_contract_ARR[i-2]) < (+t5_svoi_ARR[i-2] + +t5_cell_add) ){
                    var t5_cell_contract = +t5_contract_ARR[i-2] + (+t5_svoi_ARR[i-2] + +t5_cell_add - (0.3 * +t5_contract_ARR[i-2])) * 10 / 3.7;
                }else{
                    var t5_cell_contract = +t5_contract_ARR[i-2];
                }
            }
            t5_contract_ARR.push(t5_cell_contract);

            if(i == 1){var t5_cell_ajio = +t5_ajio;}else{var t5_cell_ajio = (+t5_cell_contract - +t5_contract_ARR[i-2]) * 0.07;}
            if(i == 1){var t5_cell_amount = +t5_cell_add - +t5_cell_ajio - +calc_activation;}else{var t5_cell_amount = +t5_svoi_ARR[i-2] + +t5_cell_add - +t5_cell_ajio;}
            if(i == 1){var t5_cell_credit = t5_cell_amount * 7 / 3;}else{var t5_cell_credit = t5_cell_amount * 7 / 3;}

            var t5_cell_work = +t5_cell_amount + +t5_cell_credit;
            var t5_cell_profit = t5_cell_work * profit / 100;
            var t5_cell_comission = t5_cell_profit * 0.2;
            var t5_cell_oplata = t5_cell_credit * 7 / 12 / 100;
            var t5_cell_service = t5_cell_work * 0.083 / 100;
            var t5_cell_clear = +t5_cell_profit - +t5_cell_comission - +t5_cell_oplata - +t5_cell_service;
            t5_clear_ARR.push(t5_cell_clear);
            var t5_cell_svoi = +t5_cell_amount + +t5_cell_clear;
            t5_svoi_ARR.push(t5_cell_svoi);
            if(i == 1){var t5_cell_end = +t5_cell_svoi - +t5_cell_add;} else {var t5_cell_end = +t5_end_ARR[i-2] + +t5_cell_clear;}
            t5_end_ARR.push(t5_cell_end);

            $('#out_table_5').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell">${t5_cell_date}</div>
                <div class="out__cell">${t5_cell_add.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_contract.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_ajio.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_amount.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_credit.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_work.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_profit.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_comission.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_oplata.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_service.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_clear.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_svoi.toFixed(2)}</div>
                <div class="out__cell">${t5_cell_end.toFixed(2)}</div>
            </div>`);
        }

        var t5_sum_month = 0;
        for (i = 0; i < t5_clear_ARR.length; i++){
            t5_sum_month += t5_clear_ARR[i]
        }
        var t5_mid_month = t5_sum_month / t5_clear_ARR.length;
        $('#result_itog_5_1').text( (+amount).toFixed(2) + " €" );
        $('#result_itog_5_2').text( t5_cell_svoi.toFixed(2) + " €" );
        $('#result_itog_5_3').text( t5_cell_end.toFixed(2) + " €" );
        $('#result_itog_5_4').text( t5_mid_month.toFixed(2) + " €" );
        $('#result_itog_5_5').text( ((t5_cell_end / amount) * 100).toFixed(2) + "%" );
        // t5 ——————————————————————————————————————————————————————————————————————————————————————————————



		$('#result_cell_1_1').text( $('#result_itog_1_1').text() );
		$('#result_cell_1_2').text( $('#result_itog_1_2').text() );
		$('#result_cell_1_3').text( $('#result_itog_1_3').text() );
		$('#result_cell_1_4').text( $('#result_itog_1_4').text() );
		$('#result_cell_1_5').text( $('#result_itog_1_5').text() );
		$('#result_cell_2_1').text( $('#result_itog_2_1').text() );
		$('#result_cell_2_2').text( $('#result_itog_2_2').text() );
		$('#result_cell_2_3').text( $('#result_itog_2_3').text() );
		$('#result_cell_2_4').text( $('#result_itog_2_4').text() );
		$('#result_cell_2_5').text( $('#result_itog_2_5').text() );
		$('#result_cell_3_1').text( $('#result_itog_3_1').text() );
		$('#result_cell_3_2').text( $('#result_itog_3_2').text() );
		$('#result_cell_3_3').text( $('#result_itog_3_3').text() );
		$('#result_cell_3_4').text( $('#result_itog_3_4').text() );
		$('#result_cell_3_5').text( $('#result_itog_3_5').text() );
		$('#result_cell_4_1').text( $('#result_itog_4_1').text() );
		$('#result_cell_4_2').text( $('#result_itog_4_2').text() );
		$('#result_cell_4_3').text( $('#result_itog_4_3').text() );
		$('#result_cell_4_4').text( $('#result_itog_4_4').text() );
		$('#result_cell_4_5').text( $('#result_itog_4_5').text() );
		$('#result_cell_5_1').text( $('#result_itog_5_1').text() );
		$('#result_cell_5_2').text( $('#result_itog_5_2').text() );
		$('#result_cell_5_3').text( $('#result_itog_5_3').text() );
		$('#result_cell_5_4').text( $('#result_itog_5_4').text() );
		$('#result_cell_5_5').text( $('#result_itog_5_5').text() );

    }



    $('input[name=buttons_radio]').change(function(){
		calculation();
        var buttons_radio = $('input[name=buttons_radio]:checked').val();
        if ( buttons_radio == 1 ){
            $('.result').css({display: "none"});
            $('#result_1').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_1').css({display: "block"});
        }
        if ( buttons_radio == 2 ){
            $('.result').css({display: "none"});
            $('#result_2').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_2').css({display: "block"});
        }
        if ( buttons_radio == 3 ){
            $('.result').css({display: "none"});
            $('#result_3').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_3').css({display: "block"});
        }
        if ( buttons_radio == 4 ){
            $('.result').css({display: "none"});
            $('#result_4').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_4').css({display: "block"});
        }
        if ( buttons_radio == 5 ){
            $('.result').css({display: "none"});
            $('#result_5').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_5').css({display: "block"});
        }
        if ( buttons_radio == 6 ){
            $('.result').css({display: "none"});
            $('.out').css({display: "none"});
            $('.out__table').css({display: "none"});
			$('#result_6').css({display: "block"});
        }
    });




});