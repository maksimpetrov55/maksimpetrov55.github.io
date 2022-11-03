$.ajax({ 
    url: 'https://www.cbr-xml-daily.ru/latest.js', 
    success: function(data) { 
        var info = data.split('rates":')[1].split('{')[1].split('}')[0].split(' ').join('').split('\n').join('').split('"').join("").split(',');
        
        info.push( 'RUB:1' );

        //alert(info); 
        //$('#calc_rates').html( info[5].split(':')[1] );

        var info_currency = [];
        var info_value = [];
        var info_names = [
            'Австралийский доллар',
            'Азербайджанский манат',
            'Фунт стерлингов',
            'Армянский драм',
            'Белорусский рубль',
            'Болгарский лев',
            'Бразильский реал',
            'Венгерский форинт',
            'Гонконгский доллар',
            'Датскую крону',
            'Доллар США',
            'Евро',
            'Индийский рупий',
            'Казахстанский тенге',
            'Канадский доллар',
            'Киргизский сом',
            'Китайский юань',
            'Молдавский лей',
            'Норвежских крон',
            'Польский злотый',
            'Румынский лей',
            'СДР (специальные права заимствования)',
            'Сингапурский доллар',
            'Таджикский сомони',
            'Турецкую лиру',
            'Новый туркменский манат',
            'Узбекский сум',
            'Украинскую гривну',
            'Чешскую крону',
            'Шведскую крону',
            'Швейцарский франк',
            'Южноафриканский рэнд',
            'Вон Республики Корея',
            'Японскую иену',
            'Российский рубль'
        ]

        var info_names_2 = [
            'Австралийских долларов',
            'Азербайджанских манат',
            'Фунтов стерлингов',
            'Армянских драмов',
            'Белорусских рублей',
            'Болгарских левов',
            'Бразильских реалов',
            'Венгерских форинтов',
            'Гонконгских долларов',
            'Датских крон',
            'Долларов США',
            'Евро',
            'Индийских рупий',
            'Казахстанских тенге',
            'Канадских долларов',
            'Киргизских сомов',
            'Китайских юаней',
            'Молдавских леев',
            'Норвежских крон',
            'Польских злотых',
            'Румынских лейев',
            'СДР (специальные права заимствования)',
            'Сингапурских долларов',
            'Таджикских сомони',
            'Турецких лир',
            'Новых туркменских манат',
            'Узбекских сумов',
            'Украинских гривен',
            'Чешских крон',
            'Шведских крон',
            'Швейцарских франков',
            'Южноафриканских рэндов',
            'Вонов Республики Корея',
            'Японских иен',
            'Русских рублей'
        ]

        var info_sign = [
            '¤',
            '¤',
            '£',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '$',
            '€',
            '₹',
            '₸',
            '¤',
            '¤',
            '元',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '¤',
            '₺',
            '¤',
            '¤',
            '₴',
            '¤',
            '¤',
            '¤',
            '¤',
            '원',
            '¥',
            '₽'
        ]



        for (i = 0; i < info.length; i++){

            info_currency.push( info[i].split(':')[0] );
            info_value.push( info[i].split(':')[1] );

            $('#calc_rates').append(` 
                <div data-sign="${ info_sign[i] }" data-name2="${ info_names_2[i] }" data-name="${ info_names[i] }" id="${ info_currency[i] }">${ info_value[i] }</div>
            `);

            console.log( info_currency[i] + ": " + info_value[i] + " ______ " + info_names[i] );
        }

        
        
        console.log( '— — — — — — — — — — — — — — — — — — — — —' );

    } 
});


$(document).ready(function() {
    setTimeout(() => {

        $('.calc__select--1').click(function(){
            $(".calc__list--2").removeClass("calc__list--show");
            $(".calc__list--1").toggleClass("calc__list--show");
            //$('.calc__black').toggleClass("calc__black--show");
        });

        $('.calc__select--2').click(function(){
            $(".calc__list--1").removeClass("calc__list--show");
            $(".calc__list--2").toggleClass("calc__list--show");
            //$('.calc__black').toggleClass("calc__black--show");
        });

        // $('.calc__black').click(function(){
        //     $(".calc__list").removeClass("calc__list--show");
        //     $('.calc__black').toggleClass("calc__black--show");
        // });

        var calc_url_base = location.href.split("?")[0];

        //var calc_url_hash = location.hash.split("?")[0];
        var calc_url_check = location.search;

        if ( calc_url_check == "" || calc_url_check == "/" ){
            location.href = calc_url_base + '?summ=5000.00&from=USD&to=RUB';
        }

        var calc_url = location.search.split('?')[1].split('&');
        var calc_url_summ = calc_url[0].split('=')[1];
        var calc_url_from = calc_url[1].split('=')[1];
        var calc_url_to = calc_url[2].split('=')[1];

        if ( calc_url_from == calc_url_to ) {
            calc_url_to = 'RUB';
        } 
        if ( calc_url_from == calc_url_to ) {
            calc_url_from = 'USD';
        }



        $('.calc__button--selected').removeClass("calc__button--selected");
        $('.calc__switch--1').children().each(function(){
            if ( $(this).text() == calc_url_from ) {
                $(this).addClass("calc__button--selected");
            }
        });
        $('.calc__switch--2').children().each(function(){
            if ( $(this).text() == calc_url_to ) {
                $(this).addClass("calc__button--selected");
            }
        });

        if ( calc_url_from == 'USD' || calc_url_from == 'RUB' ) {
            $('.calc__button--1-3').text( 'EUR' );
        } else {
            $('.calc__button--1-3').text( calc_url_from );
            $('.calc__button--1-3').addClass("calc__button--selected");
        }
        if ( calc_url_to == 'USD' || calc_url_to == 'RUB' ) {
            $('.calc__button--2-3').text( 'EUR' );
        } else {
            $('.calc__button--2-3').text( calc_url_to );
            $('.calc__button--2-3').addClass("calc__button--selected");
        }

        var calc_name_1 = $('#calc_rates').find('#' + calc_url_from).attr("data-name");
        var calc_name_2 = $('#calc_rates').find('#' + calc_url_to).attr("data-name");

        $('.calc__what--1').html(`${calc_name_1} <img class="calc__flag calc__flag--small" src="img/flags/4x3/${calc_url_from}.svg" alt="">`);
        $('.calc__what--2').html(`${calc_name_2} <img class="calc__flag calc__flag--small" src="img/flags/4x3/${calc_url_to}.svg" alt="">`);

        var calc_sign_1 = $('#calc_rates').find('#' + calc_url_from).attr("data-sign");
        var calc_sign_2 = $('#calc_rates').find('#' + calc_url_to).attr("data-sign");

        $('.calc__sign--1').html(`${calc_sign_1}`);
        $('.calc__sign--2').html(`${calc_sign_2}`);

        var calc_name_1_padej = $('#calc_rates').find('#' + calc_url_from).attr("data-name2");
        var calc_name_2_padej = $('#calc_rates').find('#' + calc_url_to).attr("data-name2");

        $('.calc__exchange--1').text( "1 " + calc_name_1_padej + " = " + ( 1 / $('#calc_rates').find('#' + calc_url_from).text() * $('#calc_rates').find('#' + calc_url_to).text() ).toFixed(4) + " " + calc_name_2_padej );
        $('.calc__exchange--2').text( "1 " + calc_name_2_padej + " = " + ( +$('#calc_rates').find('#' + calc_url_from).text() / $('#calc_rates').find('#' + calc_url_to).text() ).toFixed(4) + " " + calc_name_1_padej );
        
        var date = new Date();
        var date_DD = date.getDay();
        var date_MM = date.getMonth() + 1;
        var date_YY = date.getFullYear();

        if ( date_DD < 10 ) { date_DD = '0' + date_DD };
        if ( date_MM < 10 ) { date_MM = '0' + date_MM };
        
        $('.calc__date').text( 'По данным ЦБ РФ на ' + date_DD + "." + date_MM + "." + date_YY );

        


        $('#calc_input_in').val( (+calc_url_summ).toFixed(2) );

        var calc_base = calc_url_summ / $('#calc_rates').find('#' + calc_url_from).text();
        var calc_out = calc_base * $('#calc_rates').find('#' + calc_url_to).text();

        $('#calc_input_out').val( calc_out.toFixed(2) );

        //var calc_link = '/?summ=' + 7000 + '&from=' + 'USD' + '&to=' + 'RUB';

        // $('.calc__button').attr("href", calc_link);
        
        $('.calc__another').text( $('#calc_input_in').val() + ' ' + calc_name_1_padej + ' в других валютах:' );

        $('#calc_bottom_EUR').val( ($('#calc_input_in').val() / $('#calc_rates').find('#' + calc_url_from).text() * $('#calc_rates').find('#EUR').text()).toFixed(2) );
        $('#calc_bottom_USD').val( ($('#calc_input_in').val() / $('#calc_rates').find('#' + calc_url_from).text() * $('#calc_rates').find('#USD').text()).toFixed(2) );


        $('.calc__list--1').find('.calc__valute').each(function(){
            let calc_input = $('#calc_input_in').val();
            let calc_valute_from = $(this).children().text();
            let calc_valute_to = $('.calc__switch--2').find(".calc__button--selected").text();
            let calc_valute_link = calc_url_base + '?summ=' + calc_input + '&from=' + calc_valute_from + '&to=' + calc_valute_to;
            $(this).attr("href", calc_valute_link);
        });
        $('.calc__list--2').find('.calc__valute').each(function(){
            let calc_input = $('#calc_input_in').val();
            let calc_valute_from = $('.calc__switch--1').find(".calc__button--selected").text();
            let calc_valute_to = $(this).children().text();
            let calc_valute_link = calc_url_base + '?summ=' + calc_input + '&from=' + calc_valute_from + '&to=' + calc_valute_to;
            $(this).attr("href", calc_valute_link);
        });
        $('.calc__switch--1').find('.calc__button').each(function(){
            let calc_input = $('#calc_input_in').val();
            let calc_valute_from = $(this).text();
            let calc_valute_to = $('.calc__switch--2').find(".calc__button--selected").text();
            let calc_valute_link = calc_url_base + '?summ=' + calc_input + '&from=' + calc_valute_from + '&to=' + calc_valute_to;
            $(this).attr("href", calc_valute_link);
        });
        $('.calc__switch--2').find('.calc__button').each(function(){
            let calc_input = $('#calc_input_in').val();
            let calc_valute_from = $('.calc__switch--1').find(".calc__button--selected").text();
            let calc_valute_to = $(this).text(); 
            let calc_valute_link = calc_url_base + '?summ=' + calc_input + '&from=' + calc_valute_from + '&to=' + calc_valute_to;
            $(this).attr("href", calc_valute_link);
        });


        $('.calc__input--main').change(function(){
            let calc_input = $('#calc_input_in').val();
            let calc_input_from = $('.calc__switch--1').find(".calc__button--selected").text();
            let calc_input_to = $('.calc__switch--2').find(".calc__button--selected").text();
            let calc_input_link = calc_url_base + '?summ=' + calc_input + '&from=' + calc_input_from + '&to=' + calc_input_to;
            location.href = calc_input_link;
        });

        $('.calc__input--bottom').change(function(){
            let calc_valute = $(this).attr("data-valute");
            let calc_input = $(this).val() / $('#calc_rates').find('#' + calc_valute).text() * $('#calc_rates').find('#' + calc_url_from).text();
            let calc_input_from = $('.calc__switch--1').find(".calc__button--selected").text();
            let calc_input_to = $('.calc__switch--2').find(".calc__button--selected").text();
            let calc_input_link = calc_url_base + '?summ=' + calc_input.toFixed(2) + '&from=' + calc_input_from + '&to=' + calc_input_to;
            location.href = calc_input_link;
        });

        // console.log(
        //     $('#calc_rates').find('#' + calc_url_to).text()
        // );
    
        // alert(
        //     $('.calc__valute:eq(0) span').text()
        // );




    }, 200);
});