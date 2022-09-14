

$(document).ready(function() {

    var cityValue, streetValue, typeValue, typeID, statusValue, otoplenieValue, paramValue, floorValue, conditionID, square;


    
    //заполнение списка городов
    $('#city_list').empty();
    let cityList = document.querySelector('#city_list');

    for ( let i = 0; i < 23; i++ ) {
        let cityDiv = document.createElement('div');
        cityDiv.innerHTML = cityArr[i].name;
        cityDiv.className = "calc__li";
        cityList.appendChild( cityDiv );
    }
    //заполнение списка городов

    //заполнение списка тип дома
    $('#type_list').empty();
    let typeList = document.querySelector('#type_list');

    for ( let i = 0; i < 10; i++ ) {
        let typeDiv = document.createElement('div');
        typeDiv.innerHTML = typeArray[i].name;
        typeDiv.className = "calc__li";
        typeList.appendChild( typeDiv );
    }
    //заполнение списка тип дома

    //заполнение списка статус дома
    $('#status_list').empty();
    let statusList = document.querySelector('#status_list');

    for ( let i = 0; i < 4; i++ ) {
        let statusDiv = document.createElement('div');
        statusDiv.innerHTML = statusArray[i].name;
        statusDiv.className = "calc__li";
        statusList.appendChild( statusDiv );
    }
    //заполнение списка статус дома

    //заполнение списка отопление
    $('#otoplenie_list').empty();
    let otoplenieList = document.querySelector('#otoplenie_list');

    for ( let i = 0; i < 3; i++ ) {
        let otoplenieDiv = document.createElement('div');
        otoplenieDiv.innerHTML = otoplenieArray[i].name;
        otoplenieDiv.className = "calc__li";
        otoplenieList.appendChild( otoplenieDiv );
    }
    //заполнение списка отопление

    //заполнение списка параметры
    $('#param_list').empty();
    let paramList = document.querySelector('#param_list');

    for ( let i = 0; i < 4; i++ ) {
        let paramDiv = document.createElement('div');
        paramDiv.innerHTML = paramArray[i].name;
        paramDiv.className = "calc__li";
        paramList.appendChild( paramDiv );
    }
    //заполнение списка параметры

    //заполнение списка этаж
    $('#floor_list').empty();
    let floorList = document.querySelector('#floor_list');

    for ( let i = 0; i < 7; i++ ) {
        let floorDiv = document.createElement('div');
        floorDiv.innerHTML = floorArray[i].name;
        floorDiv.className = "calc__li";
        floorList.appendChild( floorDiv );
    }
    //заполнение списка этаж

    //заполнение списка состояние
    $('#condition_list').empty();
    let conditionList = document.querySelector('#condition_list');

    for ( let i = 0; i < 4; i++ ) {
        let conditionDiv = document.createElement('div');
        conditionDiv.innerHTML = conditionArray[i].name;
        conditionDiv.className = "calc__li";
        conditionList.appendChild( conditionDiv );
    }
    //заполнение списка состояние

    $('#city_list').on("click",".calc__li",function(e){

        console.log( "cityValue: " + cityArr.find(n1 => n1.name === $(this).text() ).value );
        cityValue = cityArr.find(n1 => n1.name === $(this).text() ).value;

        var cityID = cityArr.find(i1 => i1.name === $(this).text() ).id;

        $('#calc1__cityID').text( cityID );
        $('#street_list').empty();
        $('.calc__current--street').empty();


        $('#calc1_pict_1').addClass("calc__pict--show");
        $('#calc1_pict_1 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc1_pict_1 .calcpage__img--' + cityID).addClass("calcpage__img--show");


        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 1 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 871; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray1[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 2 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 124; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray2[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 3 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 108; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray3[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 4 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 62; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray4[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 5 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 150; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray5[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 6 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 65; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray6[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 7 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 33; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray7[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 8 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 109; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray8[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 9 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 103; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray9[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 10 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 114; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray10[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 11 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 31; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray11[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 12 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 34; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray12[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 13 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 91; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray13[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 14 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 54; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray14[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 15 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 46; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray15[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 16 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 29; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray16[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 17 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 62; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray17[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 18 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 48; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray18[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 19 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 20; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray19[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 20 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 72; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray20[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 21 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 50; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray21[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 22 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 173; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray22[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }
        if ( cityArr.find(n1 => n1.name === $(this).text() ).id == 23 ) {
            //заполнение списка улиц
            let streetList = document.querySelector('#street_list');
        
            for ( let i = 0; i < 17; i++ ) {
                let streetDiv = document.createElement('div');
                streetDiv.innerHTML = townArray23[i].name;
                streetDiv.className = "calc__li";
                streetList.appendChild( streetDiv );
            }
            //заполнение списка улиц
        }

    });


    $("#street_list").on("click",".calc__li",function(e){

        if ( $('#calc1__cityID').text() == 1 ) {
            console.log( "streetValue: " + townArray1.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray1.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 2 ) {
            console.log( "streetValue: " + townArray2.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray2.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 3 ) {
            console.log( "streetValue: " + townArray3.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray3.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 4 ) {
            console.log( "streetValue: " + townArray4.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray4.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 5 ) {
            console.log( "streetValue: " + townArray5.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray5.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 6 ) {
            console.log( "streetValue: " + townArray6.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray6.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 7 ) {
            console.log( "streetValue: " + townArray7.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray7.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 8 ) {
            console.log( "streetValue: " + townArray8.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray8.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 9 ) {
            console.log( "streetValue: " + townArray9.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray9.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 10 ) {
            console.log( "streetValue: " + townArray10.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray10.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 11 ) {
            console.log( "streetValue: " + townArray11.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray11.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 12 ) {
            console.log( "streetValue: " + townArray12.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray12.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 13 ) {
            console.log( "streetValue: " + townArray13.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray13.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 14 ) {
            console.log( "streetValue: " + townArray14.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray14.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 15 ) {
            console.log( "streetValue: " + townArray15.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray15.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 16 ) {
            console.log( "streetValue: " + townArray16.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray16.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 17 ) {
            console.log( "streetValue: " + townArray17.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray17.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 18 ) {
            console.log( "streetValue: " + townArray18.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray18.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 19 ) {
            console.log( "streetValue: " + townArray19.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray19.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 20 ) {
            console.log( "streetValue: " + townArray20.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray20.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 21 ) {
            console.log( "streetValue: " + townArray21.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray21.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 22 ) {
            console.log( "streetValue: " + townArray22.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray22.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc1__cityID').text() == 23 ) {
            console.log( "streetValue: " + townArray23.find(c1 => c1.name === $(this).text() ).value );
            streetValue = townArray23.find(c1 => c1.name === $(this).text() ).value;
        }

    });


    $('#type_list').on("click",".calc__li",function(e){
        console.log( "typeValue: " + typeArray.find(n2 => n2.name === $(this).text() ).value );
        console.log( "typeID: " + typeArray.find(i2 => i2.name === $(this).text() ).id );

        typeID = typeArray.find(i2 => i2.name === $(this).text() ).id;
        typeValue = typeArray.find(n2 => n2.name === $(this).text() ).value;

        $('#calc1_pict_2').addClass("calc__pict--show");
        $('#calc1_pict_2 .calc__img').removeClass("calc__img--show");
        $('#calc1_pict_2 .calc__img--' + typeID).addClass("calc__img--show");

    });

    $("#status_list").on("click",".calc__li",function(e){
        console.log( "statusValue: " + statusArray.find(n3 => n3.name === $(this).text() ).value );
        statusValue = statusArray.find(n3 => n3.name === $(this).text() ).value;
    });

    $("#otoplenie_list").on("click",".calc__li",function(e){
        console.log( "otoplenieValue: " + otoplenieArray.find(n4 => n4.name === $(this).text() ).value );
        otoplenieValue = otoplenieArray.find(n4 => n4.name === $(this).text() ).value;
    });

    $("#param_list").on("click",".calc__li",function(e){
        console.log( "paramValue: " + paramArray.find(n5 => n5.name === $(this).text() ).value );
        paramValue = paramArray.find(n5 => n5.name === $(this).text() ).value;
    });

    $("#floor_list").on("click",".calc__li",function(e){
        console.log( "floorValue: " + floorArray.find(n6 => n6.name === $(this).text() ).value );
        floorValue = floorArray.find(n6 => n6.name === $(this).text() ).value;
    });

    $("#condition_list").on("click",".calc__li",function(e){
        console.log( "conditionID: " + conditionArray.find(i7 => i7.name === $(this).text() ).id );
        conditionID = conditionArray.find(i7 => i7.name === $(this).text() ).id;
    });

    $('#calc_1_square').on("input", function(){
        console.log( $("#calc_1_square").val() );
        //square = $("#calc_1_square").val();

        var calc1_square_str = $("#calc_1_square").val();
        if ( calc1_square_str.indexOf(',') > 0 ) {
            //console.log( calc1_square_str.split(",").join('.') );
            square = calc1_square_str.split(",").join('.');
        } else {
            square = calc1_square_str;
        }
    });

















    //расчет

    function calculation() {

        // typeID
        // conditionID

        //var calcCriteria = 71703;
        var calcCriteria = +$('#calc_1_criteria').text();
        console.log( calcCriteria );

        if ( ((typeID == 1)  && (conditionID == 1)) ) { var conditionValue = 0.78; }
        if ( ((typeID == 1)  && (conditionID == 2)) ) { var conditionValue = 0.82; }
        if ( ((typeID == 1)  && (conditionID == 3)) ) { var conditionValue = 0.88; }
        if ( ((typeID == 2)  && (conditionID == 1)) ) { var conditionValue = 0.79; }
        if ( ((typeID == 2)  && (conditionID == 2)) ) { var conditionValue = 0.82; }
        if ( ((typeID == 2)  && (conditionID == 3)) ) { var conditionValue = 0.88; }
        if ( ((typeID == 3)  && (conditionID == 1)) ) { var conditionValue = 0.78; }
        if ( ((typeID == 3)  && (conditionID == 2)) ) { var conditionValue = 0.81; }
        if ( ((typeID == 3)  && (conditionID == 3)) ) { var conditionValue = 0.88; }
        if ( ((typeID == 4)  && (conditionID == 1)) ) { var conditionValue = 0.73; }
        if ( ((typeID == 4)  && (conditionID == 2)) ) { var conditionValue = 0.76; }
        if ( ((typeID == 4)  && (conditionID == 3)) ) { var conditionValue = 0.87; }
        if ( ((typeID == 5)  && (conditionID == 1)) ) { var conditionValue = 0.82; }
        if ( ((typeID == 5)  && (conditionID == 2)) ) { var conditionValue = 0.85; }
        if ( ((typeID == 5)  && (conditionID == 3)) ) { var conditionValue = 0.89; }
        if ( ((typeID == 6)  && (conditionID == 1)) ) { var conditionValue = 0.79; }
        if ( ((typeID == 6)  && (conditionID == 2)) ) { var conditionValue = 0.83; }
        if ( ((typeID == 6)  && (conditionID == 3)) ) { var conditionValue = 0.89; }
        if ( ((typeID == 7)  && (conditionID == 1)) ) { var conditionValue = 0.83; }
        if ( ((typeID == 7)  && (conditionID == 2)) ) { var conditionValue = 0.87; }
        if ( ((typeID == 7)  && (conditionID == 3)) ) { var conditionValue = 0.90; }
        if ( ((typeID == 8)  && (conditionID == 1)) ) { var conditionValue = 0.83; }
        if ( ((typeID == 8)  && (conditionID == 2)) ) { var conditionValue = 0.86; }
        if ( ((typeID == 8)  && (conditionID == 3)) ) { var conditionValue = 0.90; }
        if ( ((typeID == 9)  && (conditionID == 1)) ) { var conditionValue = 0.89; }
        if ( ((typeID == 9)  && (conditionID == 2)) ) { var conditionValue = 0.90; }
        if ( ((typeID == 9)  && (conditionID == 3)) ) { var conditionValue = 0.91; }
        if ( ((typeID == 10) && (conditionID == 1)) ) { var conditionValue = 0.89; }
        if ( ((typeID == 10) && (conditionID == 2)) ) { var conditionValue = 0.90; }
        if ( ((typeID == 10) && (conditionID == 3)) ) { var conditionValue = 0.91; }

        if ( ((typeID == 1) && (conditionID == 4)) || ((typeID == 2) && (conditionID == 4)) || ((typeID == 3) && (conditionID == 4)) || ((typeID == 4) && (conditionID == 4)) || ((typeID == 5) && (conditionID == 4)) || ((typeID == 6) && (conditionID == 4)) || ((typeID == 7) && (conditionID == 4)) || ((typeID == 8) && (conditionID == 4)) || ((typeID == 9) && (conditionID == 4)) || ((typeID == 10) && (conditionID == 4)) ) {
            var conditionValue = 1;
        }
        
        console.log(conditionValue);


        var result1 = calcCriteria * cityValue * streetValue * typeValue * statusValue * otoplenieValue * paramValue * floorValue * conditionValue * square;

        $('#calc1_result_1').text( (+result1.toFixed(0)).toLocaleString("ru") + " руб." );
        $('#calc1_result_2').text( (+(+result1 * 0.9).toFixed(0)).toLocaleString("ru") + " руб." );

    }

    $('#calc1_btn').click(function(){
        calculation();
    });
    //расчет


});