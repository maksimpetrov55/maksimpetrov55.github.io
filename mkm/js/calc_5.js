

$(document).ready(function() {

    calc5_ipotekaValue = 0;
    calc5_stoimostValue = 0;
    calc5_dogovorValue = 0;
    calc5_urValue = 0;
    calc5_podborValue = 0;
    calc5_smetaValue = 0;
    calc5_remontValue = 0;
    calc5_podkluchValue = 0;
    calc5_inogorodValue = 0;
    calc5_visual = 0;

    calc5_ipotekaName = "Не выбрано";
    calc5_stoimostName = "Не выбрано";
    calc5_dogovorName = "Не выбрано";
    calc5_urName = "Не выбрано";
    calc5_podborName = "Не выбрано";
    calc5_smetaName = "Не выбрано";
    calc5_remontName = "Не выбрано";
    calc5_podkluchName = "Не выбрано";
    calc5_inogorodName = "Не выбрано";

    $('#calc_5_visual').on("input", function(){
        console.log( $("#calc_5_visual").val() );
        var calc5_visual_str = $("#calc_5_visual").val();
        if ( calc5_visual_str.indexOf(',') > 0 ) {
            //console.log( calc5_visual_str.split(",").join('.') );
            calc5_visual = calc5_visual_str.split(",").join('.');
        } else {
            calc5_visual = calc5_visual_str;
        }
    });

    //Помощь в оформлении ипотеки
    $('#calc_5_ipoteka_list').empty();
    let calc5_ipoteka_list = document.querySelector('#calc_5_ipoteka_list');

    for ( let i = 0; i < calc5_ipotekaArr.length; i++ ) {
        let calc5_ipotekaDiv = document.createElement('div');
        calc5_ipotekaDiv.innerHTML = calc5_ipotekaArr[i].name;
        calc5_ipotekaDiv.className = "calc__li";
        calc5_ipoteka_list.appendChild( calc5_ipotekaDiv );
    }
    //Помощь в оформлении ипотеки


    //Оценка рыночной стоимости объекта
    $('#calc_5_stoimost_list').empty();
    let calc5_stoimost_list = document.querySelector('#calc_5_stoimost_list');

    for ( let i = 0; i < calc5_stoimostArr.length; i++ ) {
        let calc5_stoimostDiv = document.createElement('div');
        calc5_stoimostDiv.innerHTML = calc5_stoimostArr[i].name;
        calc5_stoimostDiv.className = "calc__li";
        calc5_stoimost_list.appendChild( calc5_stoimostDiv );
    }
    //Оценка рыночной стоимости объекта


    //Подготовка договоров
    $('#calc_5_dogovor_list').empty();
    let calc5_dogovor_list = document.querySelector('#calc_5_dogovor_list');

    for ( let i = 0; i < calc5_dogovorArr.length; i++ ) {
        let calc5_dogovorDiv = document.createElement('div');
        calc5_dogovorDiv.innerHTML = calc5_dogovorArr[i].name;
        calc5_dogovorDiv.className = "calc__li";
        calc5_dogovor_list.appendChild( calc5_dogovorDiv );
    }
    //Подготовка договоров


    //Юр. сопровождение
    $('#calc_5_ur_list').empty();
    let calc5_ur_list = document.querySelector('#calc_5_ur_list');

    for ( let i = 0; i < calc5_urArr.length; i++ ) {
        let calc5_urDiv = document.createElement('div');
        calc5_urDiv.innerHTML = calc5_urArr[i].name;
        calc5_urDiv.className = "calc__li";
        calc5_ur_list.appendChild( calc5_urDiv );
    }
    //Юр. сопровождение


    //Подобор объекта под покупку 
    $('#calc_5_podbor_list').empty();
    let calc5_podbor_list = document.querySelector('#calc_5_podbor_list');

    for ( let i = 0; i < calc5_podborArr.length; i++ ) {
        let calc5_podborDiv = document.createElement('div');
        calc5_podborDiv.innerHTML = calc5_podborArr[i].name;
        calc5_podborDiv.className = "calc__li";
        calc5_podbor_list.appendChild( calc5_podborDiv );
    }
    //Подобор объекта под покупку 


    //Калькуляция (осмечивание) ремонтно отделочных работ
    $('#calc_5_smeta_list').empty();
    let calc5_smeta_list = document.querySelector('#calc_5_smeta_list');

    for ( let i = 0; i < calc5_smetaArr.length; i++ ) {
        let calc5_smetaDiv = document.createElement('div');
        calc5_smetaDiv.innerHTML = calc5_smetaArr[i].name;
        calc5_smetaDiv.className = "calc__li";
        calc5_smeta_list.appendChild( calc5_smetaDiv );
    }
    //Калькуляция (осмечивание) ремонтно отделочных работ


    //Организация проведения ремонтно отделочных работ
    $('#calc_5_remont_list').empty();
    let calc5_remont_list = document.querySelector('#calc_5_remont_list');

    for ( let i = 0; i < calc5_remontArr.length; i++ ) {
        let calc5_remontDiv = document.createElement('div');
        calc5_remontDiv.innerHTML = calc5_remontArr[i].name;
        calc5_remontDiv.className = "calc__li";
        calc5_remont_list.appendChild( calc5_remontDiv );
    }
    //Организация проведения ремонтно отделочных работ


    //Жилье под ключ
    $('#calc_5_podkluch_list').empty();
    let calc5_podkluch_list = document.querySelector('#calc_5_podkluch_list');

    for ( let i = 0; i < calc5_podkluchArr.length; i++ ) {
        let calc5_podkluchDiv = document.createElement('div');
        calc5_podkluchDiv.innerHTML = calc5_podkluchArr[i].name;
        calc5_podkluchDiv.className = "calc__li";
        calc5_podkluch_list.appendChild( calc5_podkluchDiv );
    }
    //Жилье под ключ


    //Иногородним/переселенцам
    $('#calc_5_inogorod_list').empty();
    let calc5_inogorod_list = document.querySelector('#calc_5_inogorod_list');

    for ( let i = 0; i < calc5_inogorodArr.length; i++ ) {
        let calc5_inogorodDiv = document.createElement('div');
        calc5_inogorodDiv.innerHTML = calc5_inogorodArr[i].name;
        calc5_inogorodDiv.className = "calc__li";
        calc5_inogorod_list.appendChild( calc5_inogorodDiv );
    }
    //Иногородним/переселенцам







    $("#calc_5_ipoteka_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_ipotekaValue: " + calc5_ipotekaArr.find(n1 => n1.name === $(this).text() ).value ); 
        calc5_ipotekaValue = calc5_ipotekaArr.find(n1 => n1.name === $(this).text() ).value;
        calc5_ipotekaName = calc5_ipotekaArr.find(j1 => j1.name === $(this).text() ).name;
    });

    $("#calc_5_stoimost_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_stoimostValue: " + calc5_stoimostArr.find(n2 => n2.name === $(this).text() ).value ); 
        calc5_stoimostValue = calc5_stoimostArr.find(n2 => n2.name === $(this).text() ).value;
        calc5_stoimostName = calc5_stoimostArr.find(j2 => j2.name === $(this).text() ).name;
    });

    $("#calc_5_dogovor_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_dogovorValue: " + calc5_dogovorArr.find(n3 => n3.name === $(this).text() ).value ); 
        calc5_dogovorValue = calc5_dogovorArr.find(n3 => n3.name === $(this).text() ).value;
        calc5_dogovorName = calc5_dogovorArr.find(j3 => j3.name === $(this).text() ).name;
    });

    $("#calc_5_ur_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_urValue: " + calc5_urArr.find(n4 => n4.name === $(this).text() ).value ); 
        calc5_urValue = calc5_urArr.find(n4 => n4.name === $(this).text() ).value;
        calc5_urName = calc5_urArr.find(j4 => j4.name === $(this).text() ).name;
    });

    $("#calc_5_podbor_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_podborValue: " + calc5_podborArr.find(n5 => n5.name === $(this).text() ).value ); 
        calc5_podborValue = calc5_podborArr.find(n5 => n5.name === $(this).text() ).value;
        calc5_podborName = calc5_podborArr.find(j5 => j5.name === $(this).text() ).name;
    });

    $("#calc_5_smeta_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_smetaValue: " + calc5_smetaArr.find(n6 => n6.name === $(this).text() ).value ); 
        calc5_smetaValue = calc5_smetaArr.find(n6 => n6.name === $(this).text() ).value;
        calc5_smetaName = calc5_smetaArr.find(j6 => j6.name === $(this).text() ).name;
    });

    $("#calc_5_remont_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_remontValue: " + calc5_remontArr.find(n7 => n7.name === $(this).text() ).value ); 
        calc5_remontValue = calc5_remontArr.find(n7 => n7.name === $(this).text() ).value;
        calc5_remontName = calc5_remontArr.find(j7 => j7.name === $(this).text() ).name;
    });

    $("#calc_5_podkluch_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_podkluchValue: " + calc5_podkluchArr.find(n8 => n8.name === $(this).text() ).value ); 
        calc5_podkluchValue = calc5_podkluchArr.find(n8 => n8.name === $(this).text() ).value;
        calc5_podkluchName = calc5_podkluchArr.find(j8 => j8.name === $(this).text() ).name;
    });

    $("#calc_5_inogorod_list").on("click",".calc__li",function(e){ 
        console.log( "calc5_inogorodValue: " + calc5_inogorodArr.find(n9 => n9.name === $(this).text() ).value ); 
        calc5_inogorodValue = calc5_inogorodArr.find(n9 => n9.name === $(this).text() ).value;
        calc5_inogorodName = calc5_inogorodArr.find(j9 => j9.name === $(this).text() ).name;
    });



    function calc5_calculation() {

        var calc5_result1 = +calc5_ipotekaValue + +calc5_stoimostValue + +calc5_dogovorValue + +calc5_urValue + +calc5_podborValue + +calc5_smetaValue + +calc5_remontValue + +calc5_podkluchValue + +calc5_inogorodValue + ( +calc5_visual * 150 );
        $('#calc5_result_1').text( (+calc5_result1.toFixed(0)).toLocaleString("ru") + " руб." );

        $('#calc5_textarea1').text( 
            "Помощь в оформлении ипотеки: "                          + calc5_ipotekaName   + " <br>" + " \n" +
            "Оценка рыночной стоимости объекта: "                    + calc5_stoimostName  + " <br>" + " \n" +
            "Подготовка договоров: "                                 + calc5_dogovorName   + " <br>" + " \n" +
            "Юр. сопровождение: "                                    + calc5_urName        + " <br>" + " \n" +
            "Подобор объекта под покупку: "                          + calc5_podborName    + " <br>" + " \n" +
            "Калькуляция (осмечивание) ремонтно отделочных работ: "  + calc5_smetaName     + " <br>" + " \n" +
            "Организация проведения ремонтно отделочных работ: "     + calc5_remontName    + " <br>" + " \n" +
            "Жилье под ключ: "                                       + calc5_podkluchName  + " <br>" + " \n" +
            "Иногородним/переселенцам: "                             + calc5_inogorodName  + " <br>" + " \n" +
            "Визуализация интерьеров: "                              + calc5_visual        + " <br>" + " \n"
        );


        // $('#calc5_textarea2').text( "Пакет услуг по подготовке объекта к продаже: " + calc5_paketsaleName );
        // $('#calc5_textarea3').text( "Подготовка договоров (задатка, купли-продажи): " + calc5_documentsName );
        // $('#calc5_textarea4').text( "Юр. сопровождение: " + calc5_urName );
        // $('#calc5_textarea5').text( "Организация подготовки объекта к продаже: " + calc5_preparesaleName );
        // $('#calc5_textarea6').text( "Организация продажи объекта: " + calc5_saleName );

    }

    $('#calc5_btn').click(function(){
        calc5_calculation();
    });
    //расчет



});