


$(document).ready(function() {


    var calc4_priceValue = 0;
    var calc4_paketsaleValue = 0;
    var calc4_documentsValue = 0;
    var calc4_urValue = 0;
    var calc4_preparesaleValue = 0;
    var calc4_saleValue = 0;

    var calc4_priceName = "Не выбрано";
    var calc4_paketsaleName = "Не выбрано";
    var calc4_documentsName = "Не выбрано";
    var calc4_urName = "Не выбрано";
    var calc4_preparesaleName = "Не выбрано";
    var calc4_saleName = "Не выбрано";




    //рыночную стоимость
    $('#calc_4_price_list').empty();
    let calc4_price_list = document.querySelector('#calc_4_price_list');

    for ( let i = 0; i < calc4_priceArr.length; i++ ) {
        let calc4_priceDiv = document.createElement('div');
        calc4_priceDiv.innerHTML = calc4_priceArr[i].name;
        calc4_priceDiv.className = "calc__li";
        calc4_price_list.appendChild( calc4_priceDiv );
    }
    //рыночную стоимость

    //Пакет услуг к продаже
    $('#calc_4_paketsale_list').empty();
    let calc4_paketsale_list = document.querySelector('#calc_4_paketsale_list');

    for ( let i = 0; i < calc4_paketsaleArr.length; i++ ) {
        let calc4_paketsaleDiv = document.createElement('div');
        calc4_paketsaleDiv.innerHTML = calc4_paketsaleArr[i].name;
        calc4_paketsaleDiv.className = "calc__li";
        calc4_paketsale_list.appendChild( calc4_paketsaleDiv );
    }
    //Пакет услуг к продаже

    //Подготовка договоров
    $('#calc_4_documents_list').empty();
    let calc4_documents_list = document.querySelector('#calc_4_documents_list');

    for ( let i = 0; i < calc4_documentsArr.length; i++ ) {
        let calc4_documentsDiv = document.createElement('div');
        calc4_documentsDiv.innerHTML = calc4_documentsArr[i].name;
        calc4_documentsDiv.className = "calc__li";
        calc4_documents_list.appendChild( calc4_documentsDiv );
    }
    //Подготовка договоров

    //Юр. сопровождение
    $('#calc_4_ur_list').empty();
    let calc4_ur_list = document.querySelector('#calc_4_ur_list');

    for ( let i = 0; i < calc4_urArr.length; i++ ) {
        let calc4_urDiv = document.createElement('div');
        calc4_urDiv.innerHTML = calc4_urArr[i].name;
        calc4_urDiv.className = "calc__li";
        calc4_ur_list.appendChild( calc4_urDiv );
    }
    //Юр. сопровождение

    //подготовки объекта к продаже
    $('#calc_4_preparesale_list').empty();
    let calc4_preparesale_list = document.querySelector('#calc_4_preparesale_list');

    for ( let i = 0; i < calc4_preparesaleArr.length; i++ ) {
        let calc4_preparesaleDiv = document.createElement('div');
        calc4_preparesaleDiv.innerHTML = calc4_preparesaleArr[i].name;
        calc4_preparesaleDiv.className = "calc__li";
        calc4_preparesale_list.appendChild( calc4_preparesaleDiv );
    }
    //подготовки объекта к продаже

    //Организация продажи объекта
    $('#calc_4_sale_list').empty();
    let calc4_sale_list = document.querySelector('#calc_4_sale_list');

    for ( let i = 0; i < calc4_saleArr.length; i++ ) {
        let calc4_saleDiv = document.createElement('div');
        calc4_saleDiv.innerHTML = calc4_saleArr[i].name;
        calc4_saleDiv.className = "calc__li";
        calc4_sale_list.appendChild( calc4_saleDiv );
    }
    //Организация продажи объекта


    $("#calc_4_price_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_priceValue: " + calc4_priceArr.find(n1 => n1.name === $(this).text() ).value ); 
        calc4_priceValue = calc4_priceArr.find(n1 => n1.name === $(this).text() ).value;
        calc4_priceName = calc4_priceArr.find(j1 => j1.name === $(this).text() ).name;
    });

    $("#calc_4_paketsale_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_paketsaleValue: " + calc4_paketsaleArr.find(n2 => n2.name === $(this).text() ).value ); 
        calc4_paketsaleValue = calc4_paketsaleArr.find(n2 => n2.name === $(this).text() ).value;
        calc4_paketsaleName = calc4_paketsaleArr.find(j2 => j2.name === $(this).text() ).name;
    });

    $("#calc_4_documents_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_documentsValue: " + calc4_documentsArr.find(n3 => n3.name === $(this).text() ).value ); 
        calc4_documentsValue = calc4_documentsArr.find(n3 => n3.name === $(this).text() ).value;
        calc4_documentsName = calc4_documentsArr.find(j3 => j3.name === $(this).text() ).name;
    });

    $("#calc_4_ur_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_urValue: " + calc4_urArr.find(n4 => n4.name === $(this).text() ).value ); 
        calc4_urValue = calc4_urArr.find(n4 => n4.name === $(this).text() ).value;
        calc4_urName = calc4_urArr.find(j4 => j4.name === $(this).text() ).name;
    });

    $("#calc_4_preparesale_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_preparesaleValue: " + calc4_preparesaleArr.find(n5 => n5.name === $(this).text() ).value ); 
        calc4_preparesaleValue = calc4_preparesaleArr.find(n5 => n5.name === $(this).text() ).value;
        calc4_preparesaleName = calc4_preparesaleArr.find(j5 => j5.name === $(this).text() ).name;
    });

    $("#calc_4_sale_list").on("click",".calc__li",function(e){ 
        console.log( "calc4_saleValue: " + calc4_saleArr.find(n6 => n6.name === $(this).text() ).value ); 
        calc4_saleValue = calc4_saleArr.find(n6 => n6.name === $(this).text() ).value;
        calc4_saleName = calc4_saleArr.find(j6 => j6.name === $(this).text() ).name;
    });



    //расчет

    function calc4_calculation() {

        var calc4_result1 = +calc4_priceValue + +calc4_paketsaleValue + +calc4_documentsValue + +calc4_urValue + +calc4_preparesaleValue + +calc4_saleValue;

        $('#calc4_result_1').text( (+calc4_result1.toFixed(0)).toLocaleString("ru") + " руб." );

        $('#calc4_textarea1').text( 
            "Оценить рыночную стоимость объекта: "              + calc4_priceName           + " <br>" + " \n" +
            "Пакет услуг по подготовке объекта к продаже: "     + calc4_paketsaleName       + " <br>" + " \n" +
            "Подготовка договоров (задатка, купли-продажи): "   + calc4_documentsName       + " <br>" + " \n" +
            "Юр. сопровождение: "                               + calc4_urName              + " <br>" + " \n" +
            "Организация подготовки объекта к продаже: "        + calc4_preparesaleName     + " <br>" + " \n" +
            "Организация продажи объекта: "                     + calc4_saleName            + " <br>" + " \n"
        );
        // $('#calc4_textarea2').text( "Пакет услуг по подготовке объекта к продаже: " + calc4_paketsaleName );
        // $('#calc4_textarea3').text( "Подготовка договоров (задатка, купли-продажи): " + calc4_documentsName );
        // $('#calc4_textarea4').text( "Юр. сопровождение: " + calc4_urName );
        // $('#calc4_textarea5').text( "Организация подготовки объекта к продаже: " + calc4_preparesaleName );
        // $('#calc4_textarea6').text( "Организация продажи объекта: " + calc4_saleName );

    }

    $('#calc4_btn').click(function(){
        calc4_calculation();
    });
    //расчет





});