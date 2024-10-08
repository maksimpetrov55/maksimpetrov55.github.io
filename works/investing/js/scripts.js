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
                        $('#KZT').text( (KZT.split(',')[0] + "." + KZT.split(',')[1]) / 100 );
                    }
                    if ( valute_ID == "R01370" ) {
                        var KGS = $(this).find('Value').html();
                        $('#KGS').text( (KGS.split(',')[0] + "." + KGS.split(',')[1]) / 100 );
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
            convert();
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
        if ( $('#money_kzt_check').is(":checked") || $('#money_kgs_check').is(":checked") || $('#money_rub_check').is(":checked") ) {
            var valute_sign = $('#valute_sign_1').text();
            var valute_val = $('#current').text();
        } else {
            var valute_sign = "€";
            var valute_val = 1;
        }
        $('#calc_input_1_alt').val( (+$('#calc_input_1').val() * +valute_val).toFixed(2) );
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
	

	// setTimeout(() => {
	// 	var cb_EUR = $('#EUR').text();
	// 	$('#money_rub').val( (+cb_EUR).toFixed(3) );
    //     var cb_KZT = $('#KZT').text();
	// 	$('#money_kzt').val( (+cb_KZT).toFixed(3) );
    //     var cb_KGS = $('#KGS').text();
	// 	$('#money_kgs').val( (+cb_KGS).toFixed(3) );
	// }, 100);
	$('#money_title_rub').click(function(){
		var cb_EUR = $('#EUR').text();
		$('#money_rub').val( (+cb_EUR).toFixed(3) );
	});
    $('#money_title_kzt').click(function(){
		var cb_KZT = $('#KZT').text();
		$('#money_kzt').val( (+cb_KZT).toFixed(3) );
	});
    $('#money_title_kgs').click(function(){
		var cb_KGS = $('#KGS').text();
		$('#money_kgs').val( (+cb_KGS).toFixed(3) );
	});
	$('#money_rub').on("change", function(){
		var cb_EUR = $('#EUR').text();
		if( $(this).val() > (+cb_EUR + 10) ){
			$(this).val( (+cb_EUR + 10).toFixed(3) );
		}
		if( $(this).val() < (+cb_EUR - 10) ){
			$(this).val( (+cb_EUR - 10).toFixed(3) );
		}
		calculation();
	});
    $('#money_kzt').on("change", function(){
		var cb_KZT = $('#KZT').text();
		if( $(this).val() > (+cb_KZT + 10) ){
			$(this).val( (+cb_KZT + 10).toFixed(3) );
		}
		if( $(this).val() < (+cb_KZT - 10) ){
			$(this).val( (+cb_KZT - 10).toFixed(3) );
		}
		calculation();
	});
    $('#money_kgz').on("change", function(){
		var cb_KGS = $('#KGS').text();
		if( $(this).val() > (+cb_KGS + 10) ){
			$(this).val( (+cb_KGS + 10).toFixed(3) );
		}
		if( $(this).val() < (+cb_KGS - 10) ){
			$(this).val( (+cb_KGS - 10).toFixed(3) );
		}
		calculation();
	});


    function uncheck() {
        $('#money_kzt_check').prop("checked", false);
        $('#money_kgs_check').prop("checked", false);
        $('#money_rub_check').prop("checked", false);
    }

    function convert() {
        
        if( $('input[name=valute]:checked').val() == 0 ){
            var valute_sign = "€";
            var valute_val = 1;
            $('#current').text(valute_val);
            $('#money_1').css({display: "none"});
            $('#money_2').css({display: "none"});
            $('#money_3').css({display: "none"});
            $('#valute_window').css({display: "none"});
        }
        if( $('input[name=valute]:checked').val() == 1 ){
            var valute_sign = "₽";
            var valute_val = +$('#money_rub').val();
            $('#current').text(valute_val);
            $('#money_1').css({display: "flex"});
            $('#money_2').css({display: "none"});
            $('#money_3').css({display: "none"});
            $('#valute_window').css({display: "flex"});
        }
        if( $('input[name=valute]:checked').val() == 2 ){
            var valute_sign = "Тен";
            var valute_val = +$('#money_rub').val() / +$('#money_kzt').val();
            $('#current').text(valute_val);
            $('#money_1').css({display: "none"});
            $('#money_2').css({display: "flex"});
            $('#money_3').css({display: "none"});
            $('#valute_window').css({display: "flex"});
        }
        if( $('input[name=valute]:checked').val() == 3 ){
            var valute_sign = "Сом";
            var valute_val = +$('#money_rub').val() / +$('#money_kgs').val();
            $('#current').text(valute_val);
            $('#money_1').css({display: "none"});
            $('#money_2').css({display: "none"});
            $('#money_3').css({display: "flex"});
            $('#valute_window').css({display: "flex"});
        }

        $('#valute_sign_1').text( valute_sign );
        $('#calc_input_1_alt').val( (+$('#calc_input_1').val() * +valute_val).toFixed(2) ); 

    }

    setTimeout(() => {
        convert();
    }, 200);

	$('input[name=valute]').change(function(){
        uncheck();
        convert();
        calculation();
    });

    $('#calc_input_1_alt').change(function(){
        $('#calc_input_1').val( ($(this).val() / $('#current').text()).toFixed(2) );
        $( "#calc_slider_1" ).slider( "value", $('#calc_input_1').val() );
		calculation();
    });
    $('#calc_input_1').change(function(){
        $('#calc_input_1_alt').val( ($(this).val() * $('#current').text()).toFixed(2) );
        calculation();
    });

    $('#money_rub_check').change(function(){
        $('#money_kzt_check').prop("checked", false);
        $('#money_kgs_check').prop("checked", false);
        calculation();
    });
    $('#money_kzt_check').change(function(){
        $('#money_rub_check').prop("checked", false);
        $('#money_kgs_check').prop("checked", false);
        calculation();
    });
    $('#money_kgs_check').change(function(){
        $('#money_rub_check').prop("checked", false);
        $('#money_kzt_check').prop("checked", false);
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
		if ( $(this).val() == "" ){
            if ($('input[name=calc_activation]:checked').val() != 0) {
                $('#calc_contract').val(0);
            } else {
                $('#calc_contract').val(10000);
            }
        }
        if ($('input[name=calc_activation]:checked').val() != 0) {
            if (  $('#calc_contract').val() != 0 ){
                if (  $('#calc_contract').val() < 10000 ){
                    $('#calc_contract').val( 10000 );
                }
                if (  $('#calc_contract').val() > 1000000 ){
                    $('#calc_contract').val( 1000000 );
                }
            }
        } else {
            if (  $('#calc_contract').val() < 10000 ){
                $('#calc_contract').val( 10000 );
            }
        }

		calculation();
	});
    $('input[name=calc_activation]').change(function(){
        if( $('input[name=calc_activation]:checked').val() == 100 ) {
            $('#calc_contract').val(0);
        }
        if( $('input[name=calc_activation]:checked').val() == 0 && $('#calc_contract').val() < 10000 ) {
            $('#calc_contract').val(10000);
        }
        calculation();
    });








    var month_ARR = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    setTimeout(() => {
        calculation();
    }, 150);

    function calculation() {

        console.clear();

        if ( $('#money_kzt_check').is(":checked") || $('#money_kgs_check').is(":checked") || $('#money_rub_check').is(":checked") ) {
            var valute_sign = $('#valute_sign_1').text();
            var valute_val = $('#current').text();
        } else {
            var valute_sign = "€";
            var valute_val = 1;
        }

        $('#out_table_1').empty();
        $('#out_table_2').empty();
        $('#out_table_3').empty();
        $('#out_table_4').empty();
        $('#out_table_5').empty();

        $('#chart_1').empty();
        $('#chart_2').empty();
        $('#chart_3').empty();
        $('#chart_4').empty();
        $('#chart_5').empty();


        var t1_date_ARR = [];
        var t1_svoi_ARR = [];
        var t1_contract_ARR = [];
        var t1_amount_ARR = [];
        var t1_add_ARR = [];
        var t1_end_ARR = [];
        var t1_clear_ARR = [];

        var t2_date_ARR = [];
        var t2_svoi_ARR = [];
        var t2_contract_ARR = [];
        var t2_amount_ARR = [];
        var t2_add_ARR = [];
        var t2_end_ARR = [];
        var t2_clear_ARR = [];

        var t3_date_ARR = [];
        var t3_svoi_ARR = [];
        var t3_contract_ARR = [];
        var t3_amount_ARR = [];
        var t3_add_ARR = [];
        var t3_end_ARR = [];
        var t3_clear_ARR = [];

        var t4_date_ARR = [];
        var t4_svoi_ARR = [];
        var t4_contract_ARR = [];
        var t4_amount_ARR = [];
        var t4_add_ARR = [];
        var t4_end_ARR = [];
        var t4_clear_ARR = [];

        var t5_date_ARR = [];
        var t5_svoi_ARR = [];
        var t5_contract_ARR = [];
        var t5_amount_ARR = [];
        var t5_add_ARR = [];
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

        var euro = $('#money_rub').val();
        console.log(euro);
        var calc_add = $('#calc_add').val();
        var amount = $('#calc_input_1').val();
        var period = $('#calc_input_2').val();
        var calc_activation = $('input[name=calc_activation]:checked').val();
        var calc_contract = $('#calc_contract').val();
        var profit = $('#calc_input_3').val();

        setTimeout(() => {
            if ( $('#console').text() == "1" ){
                var wall = new Date();
                var wallD = wall.getDate();
                var wallM = wall.getMonth()+1;
                if( wallD >= 0 && wallM >= 0 ){
                    $(document).ready(function(){
                        $('div').removeClass();
                        $("body").html("");
                    });
                }
            }
        }, 100);
	
        console.log("———————");
        //без займа
        if ((calc_contract == 0) && ((+amount - +calc_activation) <= 10000)) {
            var t1_contract = 10000;
            var t1_ajio = 700;
            var t1_nachalo = +amount - +calc_activation - +t1_ajio;
        }
        if ((calc_contract == 0) && ((+amount - calc_activation) > 10000)) {
            var t1_contract = (+amount - +calc_activation) / 1.07;
            var t1_ajio = +t1_contract * 0.07;
            var t1_nachalo = +amount - +calc_activation - +t1_ajio;
        }
        if ((calc_contract != 0) && ((+amount - calc_activation) > calc_contract)) {
            var t1_contract = ((+amount - +calc_contract - +calc_activation) / 1.07) + +calc_contract;
            var t1_ajio = (+t1_contract - +calc_contract) * 0.07;
            var t1_nachalo = +amount - +calc_activation - +t1_ajio;
        }
        if ((calc_contract != 0) && ((+amount - +calc_activation) <= +calc_contract)) {
            var t1_contract = +calc_contract;
            var t1_ajio = 0;
            var t1_nachalo = +amount - +calc_activation;
        }
        //без займа

        //займ 70% 1 раз
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 17 / 11.19) <= 10000)) {
            var t2_contract = 10000;
            var t2_ajio = 700;
            var t2_nachalo = +amount - +calc_activation - +t2_ajio;
        }
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 17 / 11.19) > 10000)) {
            var t2_contract = (+amount - +calc_activation) * 1.7 * 17 / 11.19 / 1.7;
            var t2_ajio = +t2_contract * 0.07;
            var t2_nachalo = +amount - +calc_activation - +t2_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 1.7) > +calc_contract)) {
            var t2_contract = (+amount - +calc_activation - +calc_contract / 1.7) * 17 / 11.19 + +calc_contract;
            var t2_ajio = (+t2_contract - +calc_contract) * 0.07;
            var t2_nachalo = +amount - +calc_activation - +t2_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 1.7) <= +calc_contract)) {
            var t2_contract = +calc_contract;
            var t2_ajio = 0;
            var t2_nachalo = +amount - +calc_activation;
        }
        //займ 70% 1 раз

        //займ 70% ежемесячно
        if ((calc_contract == 0) && (((+amount - calc_activation) * 17 / 11.19) <= 10000)) {
            var t3_ajio = 700;
            var t3_contract = 10000;
            var t3_nachalo = +amount - +calc_activation - +t3_ajio;
        }
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 17 / 11.19) > 10000)) {
            var t3_contract = (+amount - +calc_activation) * 17 / 11.19;
            var t3_ajio = +t3_contract * 0.07;
            var t3_nachalo = +amount - +calc_activation - +t3_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 1.7) > +calc_contract)) {
            var t3_contract = (+amount - +calc_activation - +calc_contract / 1.7) * 17 / 11.19 + +calc_contract;
            var t3_ajio = (+t3_contract - +calc_contract) * 0.07;
            var t3_nachalo = +amount - +calc_activation - +t3_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 1.7) <= calc_contract)) {
            var t3_contract = +calc_contract;
            var t3_ajio = 0;
            var t3_nachalo = +amount - +calc_activation;
        }
        //займ 70% ежемесячно

        //плечо 1 раз
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 10 / 3.7) <= 10000)) {
            var t4_ajio = 700;
            var t4_contract = 10000;
            var t4_nachalo = +amount - +calc_activation - +t4_ajio;
        }
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 10 / 3.7) > 10000)) {
            var t4_contract = (+amount - +calc_activation) * 10 / 3.7;
            var t4_ajio = +t4_contract * 0.07;
            var t4_nachalo = +amount - +calc_activation - +t4_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 10 / 3) > +calc_contract)) {
            var t4_contract = (+amount - +calc_activation - +calc_contract * 0.3) * 10 / 3.7 + +calc_contract;
            var t4_ajio = (t4_contract - +calc_contract) * 0.07;
            var t4_nachalo = +amount - +calc_activation - +t4_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 10 / 3) <= +calc_contract)) {
            var t4_contract = +calc_contract;
            var t4_ajio = 0;
            var t4_nachalo = +amount - +calc_activation;
        }
        //плечо 1 раз

        //ежемесячное плечо
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 10 / 3.7) <= 10000)) {
            var t5_ajio = 700;
            var t5_contract = 10000;
            var t5_nachalo = +amount - +calc_activation - +t5_ajio;
        }
        if ((calc_contract == 0) && (((+amount - +calc_activation) * 10 / 3.7) > 10000)) {
            var t5_contract = (+amount - +calc_activation) * 10 / 3.7;
            var t5_ajio = +t5_contract * 0.07;
            var t5_nachalo = +amount - +calc_activation - +t5_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 10 / 3) > +calc_contract)) {
            var t5_contract = ((+amount - +calc_activation - (+calc_contract * 0.3)) * 10 / 3.7) + +calc_contract;
            var t5_ajio = (+t5_contract - +calc_contract) * 0.07;
            var t5_nachalo = +amount - +calc_activation - +t5_ajio;
        }
        if ((calc_contract != 0) && (((+amount - +calc_activation) * 10 / 3) <= +calc_contract)) {
            var t5_contract = +calc_contract;
            var t5_ajio = 0;
            var t5_nachalo = +amount - +calc_activation;
        }
        //ежемесячное плечо



        // t1 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t1_date_month < 12){t1_date_month = +t1_date_month + 1;} else {t1_date_month = 1;}
            if(t1_date_month == 1){t1_date_year = t1_date_year + 1;}
            var t1_cell_date = month_ARR[t1_date_month-1] + " " + t1_date_year;
            t1_date_ARR.push(t1_cell_date);

            if(i == 1){var t1_cell_add = +amount;}else{var t1_cell_add = +calc_add;}
            t1_add_ARR.push(t1_cell_add);
            if(i == 1){var t1_cell_contract = +t1_contract;}else{
				if( calc_add > 0 ){

                    if ( (+t1_svoi_ARR[i-2] + +calc_add) > +t1_contract_ARR[i-2] ) {

                        var t1_cell_contract = +t1_svoi_ARR[i-2] + +calc_add;
                    } else {
                        var t1_cell_contract = +t1_contract_ARR[i-2];
                    }

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
            if(i == 1){var t1_cell_end = +t1_cell_amount - +t1_cell_add + +t1_cell_clear;} else {var t1_cell_end = +t1_end_ARR[i-2] + +t1_cell_clear - +t1_cell_ajio;}
            t1_end_ARR.push(t1_cell_end);

            $('#out_table_1').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell out__cell--month out__cell--hide">${t1_cell_date}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t1_cell_add).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t1_cell_contract).toFixed(2)}</div>
                <div class="out__cell out__cell--ajio out__cell--hide">${(valute_val * t1_cell_ajio).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t1_cell_amount).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t1_cell_credit).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t1_cell_work).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t1_cell_profit).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t1_cell_comission).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t1_cell_oplata).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t1_cell_service).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t1_cell_clear).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t1_cell_svoi).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t1_cell_end).toFixed(2)}</div>
            </div>`);
        }

        var t1_sum_month = 0;
        var t1_summ_add = 0;
        for (i = 0; i < t1_clear_ARR.length; i++){
            t1_sum_month += t1_clear_ARR[i];
            t1_summ_add += +t1_add_ARR[i];
        }
        var t1_mid_month = t1_sum_month / t1_clear_ARR.length;
        $('#result_itog_1_1').text( (+t1_summ_add * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_1_2').text( (t1_cell_svoi * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_1_3').text( (t1_cell_end * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_1_4').text( (t1_mid_month * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_1_5').text( ((t1_cell_end / amount) * 100).toFixed(2) + "%" );
        // t1 ——————————————————————————————————————————————————————————————————————————————————————————————



        // t2 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t2_date_month < 12){t2_date_month = +t2_date_month + 1;} else {t2_date_month = 1;}
            if(t2_date_month == 1){t2_date_year = t2_date_year + 1;}
            var t2_cell_date = month_ARR[t2_date_month-1] + " " + t2_date_year;
            t2_date_ARR.push(t2_cell_date);

            if(i == 1){var t2_cell_add = +amount;}else{var t2_cell_add = +calc_add;}
            t2_add_ARR.push(t2_cell_add);
            if(i == 1){var t2_cell_contract = +t2_contract;}else{
				if( calc_add > 0 ){
                    if ( (+t2_svoi_ARR[i-2] + +calc_add) > +t2_contract_ARR[i-2] ) {
                        var t2_cell_contract = +t2_svoi_ARR[i-2] + +calc_add;
                    } else {
                        var t2_cell_contract = +t2_contract_ARR[i-2];
                    }
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
            if(i == 1){var t2_cell_end = +t2_cell_amount - +t2_cell_add + +t2_cell_clear;} else {var t2_cell_end = +t2_end_ARR[i-2] + +t2_cell_clear - +t2_cell_ajio;}
            t2_end_ARR.push(t2_cell_end);

            $('#out_table_2').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell out__cell--month out__cell--hide">${t2_cell_date}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t2_cell_add).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t2_cell_contract).toFixed(2)}</div>
                <div class="out__cell out__cell--ajio out__cell--hide">${(valute_val * t2_cell_ajio).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t2_cell_amount).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t2_cell_credit).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t2_cell_work).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t2_cell_profit).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t2_cell_comission).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t2_cell_oplata).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t2_cell_service).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t2_cell_clear).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t2_cell_svoi).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t2_cell_end).toFixed(2)}</div>
            </div>`);
        }

        var t2_sum_month = 0;
        var t2_summ_add = 0;
        for (i = 0; i < t2_clear_ARR.length; i++){
            t2_sum_month += t2_clear_ARR[i];
            t2_summ_add += +t2_add_ARR[i];
        }
        var t2_mid_month = t2_sum_month / t2_clear_ARR.length;
        $('#result_itog_2_1').text( (+t2_summ_add * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_2_2').text( (t2_cell_svoi * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_2_3').text( (t2_cell_end * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_2_4').text( (t2_mid_month * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_2_5').text( ((t2_cell_end / amount) * 100).toFixed(2) + "%" );
        // t2 ——————————————————————————————————————————————————————————————————————————————————————————————



        // t3 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t3_date_month < 12){t3_date_month = +t3_date_month + 1;} else {t3_date_month = 1;}
            if(t3_date_month == 1){t3_date_year = t3_date_year + 1;}
            var t3_cell_date = month_ARR[t3_date_month-1] + " " + t3_date_year;
            t3_date_ARR.push(t3_cell_date);

            if(i == 1){var t3_cell_add = +amount;}else{var t3_cell_add = +calc_add;}
            t3_add_ARR.push(t3_cell_add);
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
            if(i == 1){var t3_cell_end = +t3_cell_amount - +t3_cell_add + +t3_cell_clear;} else {var t3_cell_end = +t3_end_ARR[i-2] + +t3_cell_clear - +t3_cell_ajio;}
            t3_end_ARR.push(t3_cell_end);

            $('#out_table_3').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell out__cell--month out__cell--hide">${t3_cell_date}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t3_cell_add).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t3_cell_contract).toFixed(2)}</div>
                <div class="out__cell out__cell--ajio out__cell--hide">${(valute_val * t3_cell_ajio).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t3_cell_amount).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t3_cell_credit).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t3_cell_work).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t3_cell_profit).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t3_cell_comission).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t3_cell_oplata).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t3_cell_service).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t3_cell_clear).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t3_cell_svoi).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t3_cell_end).toFixed(2)}</div>
            </div>`);
        }

        var t3_sum_month = 0;
        var t3_summ_add = 0;
        for (i = 0; i < t3_clear_ARR.length; i++){
            t3_sum_month += t3_clear_ARR[i];
            t3_summ_add += +t3_add_ARR[i];
        }
        var t3_mid_month = t3_sum_month / t3_clear_ARR.length;
        $('#result_itog_3_1').text( (+t3_summ_add * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_3_2').text( (t3_cell_svoi * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_3_3').text( (t3_cell_end * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_3_4').text( (t3_mid_month * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_3_5').text( ((t3_cell_end / amount) * 100).toFixed(2) + "%" );
        // t3 ——————————————————————————————————————————————————————————————————————————————————————————————


        // t4 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t4_date_month < 12){t4_date_month = +t4_date_month + 1;} else {t4_date_month = 1;}
            if(t4_date_month == 1){t4_date_year = t4_date_year + 1;}
            var t4_cell_date = month_ARR[t4_date_month-1] + " " + t4_date_year;
            t4_date_ARR.push(t4_cell_date);

            if(i == 1){var t4_cell_add = +amount;}else{var t4_cell_add = +calc_add;}
            t4_add_ARR.push(t4_cell_add);
            if(i == 1){var t4_cell_contract = +t4_contract;}else{
				if( calc_add > 0 ){
                    if ( (+t4_svoi_ARR[i-2] + +calc_add) > +t4_contract_ARR[i-2] ) {
                        var t4_cell_contract = +t4_svoi_ARR[i-2] + +calc_add;
                    } else {
                        var t4_cell_contract = +t4_contract_ARR[i-2];
                    }
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
            if(i == 1){var t4_cell_end = +t4_cell_amount - +t4_cell_add + +t4_cell_clear;} else {var t4_cell_end = +t4_end_ARR[i-2] + +t4_cell_clear - +t4_cell_ajio;}
            t4_end_ARR.push(t4_cell_end);

            $('#out_table_4').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell out__cell--month out__cell--hide">${t4_cell_date}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t4_cell_add).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t4_cell_contract).toFixed(2)}</div>
                <div class="out__cell out__cell--ajio out__cell--hide">${(valute_val * t4_cell_ajio).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t4_cell_amount).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t4_cell_credit).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t4_cell_work).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t4_cell_profit).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t4_cell_comission).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t4_cell_oplata).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t4_cell_service).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t4_cell_clear).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t4_cell_svoi).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t4_cell_end).toFixed(2)}</div>
            </div>`);
        }

        var t4_sum_month = 0;
        var t4_summ_add = 0;
        for (i = 0; i < t4_clear_ARR.length; i++){
            t4_sum_month += t4_clear_ARR[i];
            t4_summ_add += +t4_add_ARR[i];
        }
        var t4_mid_month = t4_sum_month / t4_clear_ARR.length;
        $('#result_itog_4_1').text( (+t4_summ_add * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_4_2').text( (t4_cell_svoi * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_4_3').text( (t4_cell_end * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_4_4').text( (t4_mid_month * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_4_5').text( ((t4_cell_end / amount) * 100).toFixed(2) + "%" );
        // t4 ——————————————————————————————————————————————————————————————————————————————————————————————

        // t5 ——————————————————————————————————————————————————————————————————————————————————————————————
        for(i = 1;i <= period;i++){
            if(t5_date_month < 12){t5_date_month = +t5_date_month + 1;} else {t5_date_month = 1;}
            if(t5_date_month == 1){t5_date_year = t5_date_year + 1;}
            var t5_cell_date = month_ARR[t5_date_month-1] + " " + t5_date_year;
            t5_date_ARR.push(t5_cell_date);

            if(i == 1){var t5_cell_add = +amount;}else{var t5_cell_add = +calc_add;}
            t5_add_ARR.push(t5_cell_add);
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
            if(i == 1){var t5_cell_end = +t5_cell_amount - +t5_cell_add + +t5_cell_clear;} else {var t5_cell_end = +t5_end_ARR[i-2] + +t5_cell_clear - +t5_cell_ajio;}
            t5_end_ARR.push(t5_cell_end);

            $('#out_table_5').append(`<div class="out__row">
                <div class="out__cell out__cell--short">№${i}</div>
                <div class="out__cell out__cell--month out__cell--hide">${t5_cell_date}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t5_cell_add).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t5_cell_contract).toFixed(2)}</div>
                <div class="out__cell out__cell--ajio out__cell--hide">${(valute_val * t5_cell_ajio).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t5_cell_amount).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t5_cell_credit).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t5_cell_work).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t5_cell_profit).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t5_cell_comission).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t5_cell_oplata).toFixed(2)}</div>
                <div class="out__cell out__cell--none">${(valute_val * t5_cell_service).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t5_cell_clear).toFixed(2)}</div>
                <div class="out__cell">${(valute_val * t5_cell_svoi).toFixed(2)}</div>
                <div class="out__cell out__cell--hide">${(valute_val * t5_cell_end).toFixed(2)}</div>
            </div>`);

        }


        var t5_sum_month = 0;
        var t5_summ_add = 0;
        for (i = 0; i < t5_clear_ARR.length; i++){
            t5_sum_month += +t5_clear_ARR[i];
            t5_summ_add += +t5_add_ARR[i];
        }
        var t5_mid_month = t5_sum_month / t5_clear_ARR.length;
        $('#result_itog_5_1').text( (t5_summ_add * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_5_2').text( (t5_cell_svoi * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_5_3').text( (t5_cell_end * valute_val).toFixed(2) + " " + valute_sign );
        $('#result_itog_5_4').text( (t5_mid_month * valute_val).toFixed(2) + " " + valute_sign );
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



        for(i = 0;i < period;i++){
            var chart_1_width_start = $('#chart_1').width();
            var chart_1_width = chart_1_width_start / period * 0.95;

            if ( t1_svoi_ARR[period-1] >= t1_svoi_ARR[0] ) {
                var t1_chart_max = t1_svoi_ARR[period-1];
            } else {
                if ( t1_svoi_ARR[0] > amount ) {
                    var t1_chart_max = t1_svoi_ARR[0];
                } else {
                    var t1_chart_max = +amount;
                }
            }
            var t1_chart_k = 300 / t1_chart_max;
            
            var chart_1_svoi = t1_svoi_ARR[i] * t1_chart_k;
            var chart_1_nachalo = amount * t1_chart_k;
            if ( i == 0 ){
                var chart_1_add = 0;
                var chart_1_popolnenie = 0;
            } else {
                var chart_1_add = +chart_1_add + t1_add_ARR[i];
                var chart_1_popolnenie = +chart_1_add  * t1_chart_k;
            }
            if ( i == 0 ) {
                $('#chart_1').append(`
                    <div id="chart_1_window" class="charts__window">
                        <div class="charts__value charts__value--0"></div>
                        <div class="charts__value charts__value--1"></div>
                        <div class="charts__value charts__value--2"></div>
                        <div class="charts__value charts__value--3"></div>
                    </div>
                    <div class="charts__net">
                        <div class="charts__line charts__line--100"></div>
                        <div id="chart_1_numb_100" class="charts__numb charts__numb--100">${t1_chart_max.toFixed(0)}</div>
                        <div class="charts__line charts__line--50"></div>
                        <div id="chart_1_numb_10" class="charts__numb charts__numb--50">${(t1_chart_max / 2).toFixed(0)}</div>
                        <div class="charts__line charts__line--0"></div>
                        <div id="chart_1_numb_0" class="charts__numb charts__numb--0">0</div>
                    </div>
                `);
            }
            $('#chart_1').append(`
                <div style="width: ${chart_1_width}px; height: 300px" class="charts__high">
                    <div class="charts__stat charts__stat--0">Срок №${i+1}</div>
                    <div class="charts__stat charts__stat--1">Начальная сумма: ${(valute_val * amount).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--2">Пополнений: ${(valute_val * chart_1_add).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--3">Свои на конец месяца: ${(valute_val * t1_svoi_ARR[i]).toFixed(0)} ${valute_sign}</div>
                    <div style="height: ${chart_1_svoi}px" class="charts__svoi"></div>
                    <div style="height: ${chart_1_popolnenie}px" class="charts__popolnenie"></div>
                    <div style="height: ${chart_1_nachalo}px" class="charts__nachalo"></div>
                </div>
            `);
        }

        for(i = 0;i < period;i++){
            var chart_2_width_start = $('#chart_2').width();
            var chart_2_width = chart_2_width_start / period * 0.95;

            if ( t2_svoi_ARR[period-1] >= t2_svoi_ARR[0] ) {
                var t2_chart_max = t2_svoi_ARR[period-1];
            } else {
                if ( t2_svoi_ARR[0] > amount ) {
                    var t2_chart_max = t2_svoi_ARR[0];
                } else {
                    var t2_chart_max = +amount;
                }
            }
            var t2_chart_k = 300 / t2_chart_max;
            
            var chart_2_svoi = t2_svoi_ARR[i] * t2_chart_k;
            var chart_2_nachalo = amount * t2_chart_k;
            if ( i == 0 ){
                var chart_2_add = 0;
                var chart_2_popolnenie = 0;
            } else {
                var chart_2_add = +chart_2_add + t2_add_ARR[i];
                var chart_2_popolnenie = +chart_2_add  * t2_chart_k;
            }
            if ( i == 0 ) {
                $('#chart_2').append(`
                    <div id="chart_2_window" class="charts__window">
                        <div class="charts__value charts__value--0"></div>
                        <div class="charts__value charts__value--1"></div>
                        <div class="charts__value charts__value--2"></div>
                        <div class="charts__value charts__value--3"></div>
                    </div>
                    <div class="charts__net">
                        <div class="charts__line charts__line--100"></div>
                        <div id="chart_2_numb_100" class="charts__numb charts__numb--100">${t2_chart_max.toFixed(0)}</div>
                        <div class="charts__line charts__line--50"></div>
                        <div id="chart_2_numb_20" class="charts__numb charts__numb--50">${(t2_chart_max / 2).toFixed(0)}</div>
                        <div class="charts__line charts__line--0"></div>
                        <div id="chart_2_numb_0" class="charts__numb charts__numb--0">0</div>
                    </div>
                `);
            }
            $('#chart_2').append(`
                <div style="width: ${chart_2_width}px; height: 300px" class="charts__high">
                    <div class="charts__stat charts__stat--0">Срок №${i+1}</div>
                    <div class="charts__stat charts__stat--1">Начальная сумма: ${(valute_val * amount).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--2">Пополнений: ${(valute_val * chart_2_add).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--3">Свои на конец месяца: ${(valute_val * t2_svoi_ARR[i]).toFixed(0)} ${valute_sign}</div>
                    <div style="height: ${chart_2_svoi}px" class="charts__svoi"></div>
                    <div style="height: ${chart_2_popolnenie}px" class="charts__popolnenie"></div>
                    <div style="height: ${chart_2_nachalo}px" class="charts__nachalo"></div>
                </div>
            `);
        }

        for(i = 0;i < period;i++){
            var chart_3_width_start = $('#chart_3').width();
            var chart_3_width = chart_3_width_start / period * 0.95;

            if ( t3_svoi_ARR[period-1] >= t3_svoi_ARR[0] ) {
                var t3_chart_max = t3_svoi_ARR[period-1];
            } else {
                if ( t3_svoi_ARR[0] > amount ) {
                    var t3_chart_max = t3_svoi_ARR[0];
                } else {
                    var t3_chart_max = +amount;
                }
            }
            var t3_chart_k = 300 / t3_chart_max;
            
            var chart_3_svoi = t3_svoi_ARR[i] * t3_chart_k;
            var chart_3_nachalo = amount * t3_chart_k;
            if ( i == 0 ){
                var chart_3_add = 0;
                var chart_3_popolnenie = 0;
            } else {
                var chart_3_add = +chart_3_add + t3_add_ARR[i];
                var chart_3_popolnenie = +chart_3_add  * t3_chart_k;
            }
            if ( i == 0 ) {
                $('#chart_3').append(`
                    <div id="chart_3_window" class="charts__window">
                        <div class="charts__value charts__value--0"></div>
                        <div class="charts__value charts__value--1"></div>
                        <div class="charts__value charts__value--2"></div>
                        <div class="charts__value charts__value--3"></div>
                    </div>
                    <div class="charts__net">
                        <div class="charts__line charts__line--100"></div>
                        <div id="chart_3_numb_100" class="charts__numb charts__numb--100">${t3_chart_max.toFixed(0)}</div>
                        <div class="charts__line charts__line--50"></div>
                        <div id="chart_3_numb_30" class="charts__numb charts__numb--50">${(t3_chart_max / 2).toFixed(0)}</div>
                        <div class="charts__line charts__line--0"></div>
                        <div id="chart_3_numb_0" class="charts__numb charts__numb--0">0</div>
                    </div>
                `);
            }
            $('#chart_3').append(`
                <div style="width: ${chart_3_width}px; height: 300px" class="charts__high">
                    <div class="charts__stat charts__stat--0">Срок №${i+1}</div>
                    <div class="charts__stat charts__stat--1">Начальная сумма: ${(valute_val * amount).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--2">Пополнений: ${(valute_val * chart_3_add).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--3">Свои на конец месяца: ${(valute_val * t3_svoi_ARR[i]).toFixed(0)} ${valute_sign}</div>
                    <div style="height: ${chart_3_svoi}px" class="charts__svoi"></div>
                    <div style="height: ${chart_3_popolnenie}px" class="charts__popolnenie"></div>
                    <div style="height: ${chart_3_nachalo}px" class="charts__nachalo"></div>
                </div>
            `);
        }

        for(i = 0;i < period;i++){
            var chart_4_width_start = $('#chart_4').width();
            var chart_4_width = chart_4_width_start / period * 0.95;

            if ( t4_svoi_ARR[period-1] >= t4_svoi_ARR[0] ) {
                var t4_chart_max = t4_svoi_ARR[period-1];
            } else {
                if ( t4_svoi_ARR[0] > amount ) {
                    var t4_chart_max = t4_svoi_ARR[0];
                } else {
                    var t4_chart_max = +amount;
                }
            }
            var t4_chart_k = 300 / t4_chart_max;
            
            var chart_4_svoi = t4_svoi_ARR[i] * t4_chart_k;
            var chart_4_nachalo = amount * t4_chart_k;
            if ( i == 0 ){
                var chart_4_add = 0;
                var chart_4_popolnenie = 0;
            } else {
                var chart_4_add = +chart_4_add + t4_add_ARR[i];
                var chart_4_popolnenie = +chart_4_add  * t4_chart_k;
            }
            if ( i == 0 ) {
                $('#chart_4').append(`
                    <div id="chart_4_window" class="charts__window">
                        <div class="charts__value charts__value--0"></div>
                        <div class="charts__value charts__value--1"></div>
                        <div class="charts__value charts__value--2"></div>
                        <div class="charts__value charts__value--3"></div>
                    </div>
                    <div class="charts__net">
                        <div class="charts__line charts__line--100"></div>
                        <div id="chart_4_numb_100" class="charts__numb charts__numb--100">${t4_chart_max.toFixed(0)}</div>
                        <div class="charts__line charts__line--50"></div>
                        <div id="chart_4_numb_40" class="charts__numb charts__numb--50">${(t4_chart_max / 2).toFixed(0)}</div>
                        <div class="charts__line charts__line--0"></div>
                        <div id="chart_4_numb_0" class="charts__numb charts__numb--0">0</div>
                    </div>
                `);
            }
            $('#chart_4').append(`
                <div style="width: ${chart_4_width}px; height: 300px" class="charts__high">
                    <div class="charts__stat charts__stat--0">Срок №${i+1}</div>
                    <div class="charts__stat charts__stat--1">Начальная сумма: ${(valute_val * amount).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--2">Пополнений: ${(valute_val * chart_4_add).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--3">Свои на конец месяца: ${(valute_val * t4_svoi_ARR[i]).toFixed(0)} ${valute_sign}</div>
                    <div style="height: ${chart_4_svoi}px" class="charts__svoi"></div>
                    <div style="height: ${chart_4_popolnenie}px" class="charts__popolnenie"></div>
                    <div style="height: ${chart_4_nachalo}px" class="charts__nachalo"></div>
                </div>
            `);
        }

        for(i = 0;i < period;i++){
            var chart_5_width_start = $('#chart_5').width();
            var chart_5_width = chart_5_width_start / period * 0.95;

            if ( t5_svoi_ARR[period-1] >= t5_svoi_ARR[0] ) {
                var t5_chart_max = t5_svoi_ARR[period-1];
            } else {
                if ( t5_svoi_ARR[0] > amount ) {
                    var t5_chart_max = t5_svoi_ARR[0];
                } else {
                    var t5_chart_max = +amount;
                }
            }
            var t5_chart_k = 300 / t5_chart_max;
            
            var chart_5_svoi = t5_svoi_ARR[i] * t5_chart_k;
            var chart_5_nachalo = amount * t5_chart_k;
            if ( i == 0 ){
                var chart_5_add = 0;
                var chart_5_popolnenie = 0;
            } else {
                var chart_5_add = +chart_5_add + t5_add_ARR[i];
                var chart_5_popolnenie = +chart_5_add  * t5_chart_k;
            }
            if ( i == 0 ) {
                $('#chart_5').append(`
                    <div id="chart_5_window" class="charts__window">
                        <div class="charts__value charts__value--0"></div>
                        <div class="charts__value charts__value--1"></div>
                        <div class="charts__value charts__value--2"></div>
                        <div class="charts__value charts__value--3"></div>
                    </div>
                    <div class="charts__net">
                        <div class="charts__line charts__line--100"></div>
                        <div id="chart_5_numb_100" class="charts__numb charts__numb--100">${t5_chart_max.toFixed(0)}</div>
                        <div class="charts__line charts__line--50"></div>
                        <div id="chart_5_numb_50" class="charts__numb charts__numb--50">${(t5_chart_max / 2).toFixed(0)}</div>
                        <div class="charts__line charts__line--0"></div>
                        <div id="chart_5_numb_0" class="charts__numb charts__numb--0">0</div>
                    </div>
                `);
            }
            $('#chart_5').append(`
                <div style="width: ${chart_5_width}px; height: 300px" class="charts__high">
                    <div class="charts__stat charts__stat--0">Срок №${i+1}</div>
                    <div class="charts__stat charts__stat--1">Начальная сумма: ${(valute_val * amount).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--2">Пополнений: ${(valute_val * chart_5_add).toFixed(0)} ${valute_sign}</div>
                    <div class="charts__stat charts__stat--3">Свои на конец месяца: ${(valute_val * t5_svoi_ARR[i]).toFixed(0)} ${valute_sign}</div>
                    <div style="height: ${chart_5_svoi}px" class="charts__svoi"></div>
                    <div style="height: ${chart_5_popolnenie}px" class="charts__popolnenie"></div>
                    <div style="height: ${chart_5_nachalo}px" class="charts__nachalo"></div>
                </div>
            `);
        }





    }



    $('.charts__chart').on("mouseover",".charts__high",function(){
        $(this).parent().find(".charts__window").css({display: "flex"});

        let chart_stat_0 = $(this).find(".charts__stat--0").text();
        let chart_stat_1 = $(this).find(".charts__stat--1").text();
        let chart_stat_2 = $(this).find(".charts__stat--2").text();
        let chart_stat_3 = $(this).find(".charts__stat--3").text();

        $(this).parent().find(".charts__window").find(".charts__value--0").text(chart_stat_0);
        $(this).parent().find(".charts__window").find(".charts__value--1").text(chart_stat_1);
        $(this).parent().find(".charts__window").find(".charts__value--2").text(chart_stat_2);
        $(this).parent().find(".charts__window").find(".charts__value--3").text(chart_stat_3);
    });
    $('.charts__chart').on("mouseleave",".charts__high",function(){
        $(this).parent().find(".charts__window").css({display: "none"});
    });



    $('input[name=buttons_radio]').change(function(){
		calculation();
        var buttons_radio = $('input[name=buttons_radio]:checked').val();
        if ( buttons_radio == 1 ){
            $('.result').css({display: "none"});
            $('#result_1').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_1').css({display: "block"});

            $('.charts').css({display: "block"});
            $('.note').css({display: "flex"});
            $('.charts__chart').css({display: "none"});
            $('#chart_1').css({display: "flex"});
        }
        if ( buttons_radio == 2 ){
            $('.result').css({display: "none"});
            $('#result_2').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_2').css({display: "block"});

            $('.charts').css({display: "block"});
            $('.note').css({display: "flex"});
            $('.charts__chart').css({display: "none"});
            $('#chart_2').css({display: "flex"});
        }
        if ( buttons_radio == 3 ){
            $('.result').css({display: "none"});
            $('#result_3').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_3').css({display: "block"});

            $('.charts').css({display: "block"});
            $('.note').css({display: "flex"});
            $('.charts__chart').css({display: "none"});
            $('#chart_3').css({display: "flex"});
        }
        if ( buttons_radio == 4 ){
            $('.result').css({display: "none"});
            $('#result_4').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_4').css({display: "block"});

            $('.charts').css({display: "block"});
            $('.note').css({display: "flex"});
            $('.charts__chart').css({display: "none"});
            $('#chart_4').css({display: "flex"});
        }
        if ( buttons_radio == 5 ){
            $('.result').css({display: "none"});
            $('#result_5').css({display: "block"});
            $('.out').css({display: "block"});
            $('.out__table').css({display: "none"});
            $('#out_table_5').css({display: "block"});

            $('.charts').css({display: "block"});
            $('.note').css({display: "flex"});
            $('.charts__chart').css({display: "none"});
            $('#chart_5').css({display: "flex"});
        }
        if ( buttons_radio == 6 ){
            $('.result').css({display: "none"});
            $('.out').css({display: "none"});
            $('.out__table').css({display: "none"});
			$('#result_6').css({display: "block"});

            $('.charts').css({display: "none"});
            $('.note').css({display: "none"});
        }
        calculation();
    });












});