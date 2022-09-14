



$(document).ready(function() {

    var calc2_cityValue;
    var calc2_streetValue;
    var calc2_borderValue;
    var calc2_greenValue;
    var calc2_network;
    calc2_network = 0;
    var calc2_perimeter;
    var calc2_square;

    var calc2_dlina;
    var calc2_shirina;
    var calc2_homebaseValue;
    var calc2_hometypeValue;
    var calc2_overlapValue;
    var calc2_wallsValue;
    var calc2_insidetrimValue;
    var calc2_roofValue;
    var calc2_outsidetrimValue;
    var calc2_warmValue;
    var calc2_classValue;

    $('#calc_2_network').on("input", function(){
        console.log( $("#calc_2_network").val() );
        //calc2_network = $("#calc_2_network").val();
        
        var calc2_network_str = $("#calc_2_network").val();
        if ( calc2_network_str.indexOf(',') > 0 ) {
            //console.log( calc2_network_str.split(",").join('.') );
            calc2_network = calc2_network_str.split(",").join('.');
        } else {
            calc2_network = calc2_network_str;
        }
    });

    $('#calc_2_perimeter').on("input", function(){
        console.log( $("#calc_2_perimeter").val() );
        //calc2_perimeter = $("#calc_2_perimeter").val();

        var calc2_perimeter_str = $("#calc_2_perimeter").val();
        if ( calc2_perimeter_str.indexOf(',') > 0 ) {
            //console.log( calc2_perimeter_str.split(",").join('.') );
            calc2_perimeter = calc2_perimeter_str.split(",").join('.');
        } else {
            calc2_perimeter = calc2_perimeter_str;
        }

        $('#calc2_pict_4').addClass("calc__pict--show");
        $('#calc2_pict_4 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc2_pict_4 .calcpage__img--1').addClass("calcpage__img--show");
    });

    $('#calc_2_square').on("input", function(){
        console.log( $("#calc_2_square").val() );
        //calc2_square = $("#calc_2_square").val();

        var calc2_square_str = $("#calc_2_square").val();
        if ( calc2_square_str.indexOf(',') > 0 ) {
            //console.log( calc2_square_str.split(",").join('.') );
            calc2_square = calc2_square_str.split(",").join('.');
        } else {
            calc2_square = calc2_square_str;
        }
    });

    $('#calc_2_dlina').on("input", function(){
        console.log( $("#calc_2_dlina").val() );
        //calc2_dlina = $("#calc_2_dlina").val();

        var calc2_dlina_str = $("#calc_2_dlina").val();
        if ( calc2_dlina_str.indexOf(',') > 0 ) {
            //console.log( calc2_dlina_str.split(",").join('.') );
            calc2_dlina = calc2_dlina_str.split(",").join('.');
        } else {
            calc2_dlina = calc2_dlina_str;
        }
    });

    $('#calc_2_shirina').on("input", function(){
        console.log( $("#calc_2_shirina").val() );
        //calc2_shirina = $("#calc_2_shirina").val();

        var calc2_shirina_str = $("#calc_2_shirina").val();
        if ( calc2_shirina_str.indexOf(',') > 0 ) {
            //console.log( calc2_shirina_str.split(",").join('.') );
            calc2_shirina = calc2_shirina_str.split(",").join('.');
        } else {
            calc2_shirina = calc2_shirina_str;
        }
    });

    // var rrr1 = [ 
    //     { id: 0, name: "qwerty--0" }, 
    //     { id: 1, name: "qwerty--1" }, 
    //     { id: 2, name: "qwerty--2" }, 
    //     { id: 3, name: "qwerty--3" }, 
    //     { id: 4, name: "qwerty--4" },
    // ]

    // var rrr2 = [ 
    //     { id: 0, name: "redsa--0" }, 
    //     { id: 1, name: "redsa--1" }, 
    //     { id: 2, name: "redsa--2" }, 
    //     { id: 3, name: "redsa--3" }, 
    //     { id: 4, name: "redsa--4" },
    // ]

    // for ( let x = 1; x < 5; x++ ) {

    //     var aaa1 = [ rrr1[x].name, rrr2[x].name ]

    //     console.log( aaa1[0] );

    // }

    //заполнение списка городов
    $('#calc_2_city_list').empty();
    let calc2_cityList = document.querySelector('#calc_2_city_list');

    for ( let i = 0; i < calc2_cityArr.length; i++ ) {
        let calc2_cityDiv = document.createElement('div');
        calc2_cityDiv.innerHTML = calc2_cityArr[i].name;
        calc2_cityDiv.className = "calc__li";
        calc2_cityList.appendChild( calc2_cityDiv );
    }
    //заполнение списка городов

    //заполнение списка ограждение
    $('#calc_2_border_list').empty();
    let calc2_border_list = document.querySelector('#calc_2_border_list');

    for ( let i = 0; i < calc2_borderArr.length; i++ ) {
        let calc2_borderDiv = document.createElement('div');
        calc2_borderDiv.innerHTML = calc2_borderArr[i].name;
        calc2_borderDiv.className = "calc__li";
        calc2_border_list.appendChild( calc2_borderDiv );
    }
    //заполнение списка ограждение

    //заполнение списка благоустройство
    $('#calc_2_green_list').empty();
    let calc2_green_list = document.querySelector('#calc_2_green_list');

    for ( let i = 0; i < calc2_greenArr.length; i++ ) {
        let calc2_greenDiv = document.createElement('div');
        calc2_greenDiv.innerHTML = calc2_greenArr[i].name;
        calc2_greenDiv.className = "calc__li";
        calc2_green_list.appendChild( calc2_greenDiv );
    }
    //заполнение списка благоустройство

    // ----------------------------------------------------------------------------------------

    //заполнение списка homebase
    $('#calc_2_homebase_list').empty();
    let calc2_homebase_list = document.querySelector('#calc_2_homebase_list');

    for ( let i = 0; i < calc2_homebaseArr.length; i++ ) {
        let calc2_homebaseDiv = document.createElement('div');
        calc2_homebaseDiv.innerHTML = calc2_homebaseArr[i].name;
        calc2_homebaseDiv.className = "calc__li";
        calc2_homebase_list.appendChild( calc2_homebaseDiv );
    }
    //заполнение списка homebase

    //заполнение списка hometype
    $('#calc_2_hometype_list').empty();
    let calc2_hometype_list = document.querySelector('#calc_2_hometype_list');

    for ( let i = 0; i < calc2_hometypeArr.length; i++ ) {
        let calc2_hometypeDiv = document.createElement('div');
        calc2_hometypeDiv.innerHTML = calc2_hometypeArr[i].name;
        calc2_hometypeDiv.className = "calc__li";
        calc2_hometype_list.appendChild( calc2_hometypeDiv );
    }
    //заполнение списка hometype

    //заполнение списка overlap
    $('#calc_2_overlap_list').empty();
    let calc2_overlap_list = document.querySelector('#calc_2_overlap_list');

    for ( let i = 0; i < calc2_overlapArr.length; i++ ) {
        let calc2_overlapDiv = document.createElement('div');
        calc2_overlapDiv.innerHTML = calc2_overlapArr[i].name;
        calc2_overlapDiv.className = "calc__li";
        calc2_overlap_list.appendChild( calc2_overlapDiv );
    }
    //заполнение списка overlap



    //заполнение списка walls
    $('#calc_2_walls_list').empty();
    let calc2_walls_list = document.querySelector('#calc_2_walls_list');

    for ( let i = 0; i < calc2_wallsArr.length; i++ ) {
        let calc2_wallsDiv = document.createElement('div');
        calc2_wallsDiv.innerHTML = calc2_wallsArr[i].name;
        calc2_wallsDiv.className = "calc__li";
        calc2_walls_list.appendChild( calc2_wallsDiv );
    }
    //заполнение списка walls

    //заполнение списка insidetrim
    $('#calc_2_insidetrim_list').empty();
    let calc2_insidetrim_list = document.querySelector('#calc_2_insidetrim_list');

    for ( let i = 0; i < calc2_insidetrimArr.length; i++ ) {
        let calc2_insidetrimDiv = document.createElement('div');
        calc2_insidetrimDiv.innerHTML = calc2_insidetrimArr[i].name;
        calc2_insidetrimDiv.className = "calc__li";
        calc2_insidetrim_list.appendChild( calc2_insidetrimDiv );
    }
    //заполнение списка insidetrim

    //заполнение списка roof
    $('#calc_2_roof_list').empty();
    let calc2_roof_list = document.querySelector('#calc_2_roof_list');

    for ( let i = 0; i < calc2_roofArr.length; i++ ) {
        let calc2_roofDiv = document.createElement('div');
        calc2_roofDiv.innerHTML = calc2_roofArr[i].name;
        calc2_roofDiv.className = "calc__li";
        calc2_roof_list.appendChild( calc2_roofDiv );
    }
    //заполнение списка roof

    //заполнение списка outsidetrim
    $('#calc_2_outsidetrim_list').empty();
    let calc2_outsidetrim_list = document.querySelector('#calc_2_outsidetrim_list');

    for ( let i = 0; i < calc2_outsidetrimArr.length; i++ ) {
        let calc2_outsidetrimDiv = document.createElement('div');
        calc2_outsidetrimDiv.innerHTML = calc2_outsidetrimArr[i].name;
        calc2_outsidetrimDiv.className = "calc__li";
        calc2_outsidetrim_list.appendChild( calc2_outsidetrimDiv );
    }
    //заполнение списка outsidetrim

    //заполнение списка warm
    $('#calc_2_warm_list').empty();
    let calc2_warm_list = document.querySelector('#calc_2_warm_list');

    for ( let i = 0; i < calc2_warmArr.length; i++ ) {
        let calc2_warmDiv = document.createElement('div');
        calc2_warmDiv.innerHTML = calc2_warmArr[i].name;
        calc2_warmDiv.className = "calc__li";
        calc2_warm_list.appendChild( calc2_warmDiv );
    }
    //заполнение списка warm

    //заполнение списка class
    $('#calc_2_class_list').empty();
    let calc2_class_list = document.querySelector('#calc_2_class_list');

    for ( let i = 0; i < calc2_classArr.length; i++ ) {
        let calc2_classDiv = document.createElement('div');
        calc2_classDiv.innerHTML = calc2_classArr[i].name;
        calc2_classDiv.className = "calc__li";
        calc2_class_list.appendChild( calc2_classDiv );
    }
    //заполнение списка class




    $('#calc_2_city_list').on("click",".calc__li",function(e){

        console.log( "calc2_cityValue: " + calc2_cityArr.find(n1 => n1.name === $(this).text() ).value );
        calc2_cityValue = calc2_cityArr.find(p1 => p1.name === $(this).text() ).value;

        var calc2_cityID = calc2_cityArr.find(i1 => i1.name === $(this).text() ).id;

        $('#calc2__cityID').text( calc2_cityID );
        $('#calc_2_street_list').empty();
        $('#calc_2_current-street').empty();


        $('#calc2_pict_1').addClass("calc__pict--show");
        $('#calc2_pict_1 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc2_pict_1 .calcpage__img--' + calc2_cityID).addClass("calcpage__img--show");


        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 1 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray1.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray1[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 2 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray2.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray2[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 3 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray3.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray3[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 4 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray4.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray4[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 5 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray5.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray5[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 6 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray6.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray6[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 7 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray7.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray7[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 8 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray8.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray8[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 9 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray9.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray9[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 10 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray10.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray10[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 11 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray11.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray11[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 12 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray12.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray12[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 13 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray13.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray13[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 14 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray14.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray14[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 15 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray15.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray15[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 16 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray16.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray16[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 17 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray17.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray17[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 18 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray18.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray18[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 19 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray19.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray19[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 20 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray20.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray20[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 21 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray21.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray21[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 22 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray22.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray22[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }
        if ( calc2_cityArr.find(n1 => n1.name === $(this).text() ).id == 23 ) {
            //заполнение списка улиц
            let calc2_streetList = document.querySelector('#calc_2_street_list');
        
            for ( let i = 0; i < calc2_townArray23.length; i++ ) {
                let calc2_streetDiv = document.createElement('div');
                calc2_streetDiv.innerHTML = calc2_townArray23[i].name;
                calc2_streetDiv.className = "calc__li";
                calc2_streetList.appendChild( calc2_streetDiv );
            }
            //заполнение списка улиц
        }


    });




    $("#calc_2_border_list").on("click",".calc__li",function(e){ 

        console.log( "calc2_borderValue: " + calc2_borderArr.find(n2 => n2.name === $(this).text() ).value ); 
        calc2_borderValue = calc2_borderArr.find(n2 => n2.name === $(this).text() ).value; 

        var calc2_borderID = calc2_borderArr.find(i2 => i2.name === $(this).text() ).id;

        $('#calc2_pict_2').addClass("calc__pict--show");
        $('#calc2_pict_2 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc2_pict_2 .calcpage__img--' + calc2_borderID).addClass("calcpage__img--show");

    });
    $("#calc_2_green_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_greenValue: " + calc2_greenArr.find(n3 => n3.name === $(this).text() ).value ); 
        calc2_greenValue = calc2_greenArr.find(n3 => n3.name === $(this).text() ).value; 

        var calc2_greenID = calc2_greenArr.find(i3 => i3.name === $(this).text() ).id;

        $('#calc2_pict_3').addClass("calc__pict--show");
        $('#calc2_pict_3 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc2_pict_3 .calcpage__img--' + calc2_greenID).addClass("calcpage__img--show");

    });
    $("#calc_2_homebase_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_homebaseValue: " + calc2_homebaseArr.find(n4 => n4.name === $(this).text() ).value ); 
        calc2_homebaseValue = calc2_homebaseArr.find(n4 => n4.name === $(this).text() ).value; 
    });
    $("#calc_2_hometype_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_hometypeValue: " + calc2_hometypeArr.find(n5 => n5.name === $(this).text() ).value ); 
        calc2_hometypeValue = calc2_hometypeArr.find(n5 => n5.name === $(this).text() ).value; 
    });
    $("#calc_2_overlap_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_overlapValue: " + calc2_overlapArr.find(n6 => n6.name === $(this).text() ).value ); 
        calc2_overlapValue = calc2_overlapArr.find(n6 => n6.name === $(this).text() ).value; 
    });
    $("#calc_2_walls_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_wallsValue: " + calc2_wallsArr.find(n7 => n7.name === $(this).text() ).value ); 
        calc2_wallsValue = calc2_wallsArr.find(n7 => n7.name === $(this).text() ).value; 
    });
    $("#calc_2_outsidetrim_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_outsidetrimValue: " + calc2_outsidetrimArr.find(n8 => n8.name === $(this).text() ).value ); 
        calc2_outsidetrimValue = calc2_outsidetrimArr.find(n8 => n8.name === $(this).text() ).value; 
    });
    $("#calc_2_roof_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_roofValue: " + calc2_roofArr.find(n9 => n9.name === $(this).text() ).value ); 
        calc2_roofValue = calc2_roofArr.find(n9 => n9.name === $(this).text() ).value; 
    });
    $("#calc_2_insidetrim_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_insidetrimValue: " + calc2_insidetrimArr.find(n10 => n10.name === $(this).text() ).value ); 
        calc2_insidetrimValue = calc2_insidetrimArr.find(n10 => n10.name === $(this).text() ).value; 
    });
    $("#calc_2_warm_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_warmValue: " + calc2_warmArr.find(n11 => n11.name === $(this).text() ).value ); 
        calc2_warmValue = calc2_warmArr.find(n11 => n11.name === $(this).text() ).value; 
    });
    $("#calc_2_class_list").on("click",".calc__li",function(e){ 
        console.log( "calc2_classValue: " + calc2_classArr.find(n12 => n12.name === $(this).text() ).value ); 
        calc2_classValue = calc2_classArr.find(n12 => n12.name === $(this).text() ).value; 
    });



    $("#calc_2_street_list").on("click",".calc__li",function(e){

        if ( $('#calc2__cityID').text() == 1 ) {
            console.log( "calc2_streetValue: " + calc2_townArray1.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray1.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 2 ) {
            console.log( "calc2_streetValue: " + calc2_townArray2.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray2.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 3 ) {
            console.log( "calc2_streetValue: " + calc2_townArray3.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray3.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 4 ) {
            console.log( "calc2_streetValue: " + calc2_townArray4.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray4.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 5 ) {
            console.log( "calc2_streetValue: " + calc2_townArray5.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray5.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 6 ) {
            console.log( "calc2_streetValue: " + calc2_townArray6.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray6.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 7 ) {
            console.log( "calc2_streetValue: " + calc2_townArray7.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray7.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 8 ) {
            console.log( "calc2_streetValue: " + calc2_townArray8.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray8.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 9 ) {
            console.log( "calc2_streetValue: " + calc2_townArray9.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray9.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 10 ) {
            console.log( "calc2_streetValue: " + calc2_townArray10.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray10.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 11 ) {
            console.log( "calc2_streetValue: " + calc2_townArray11.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray11.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 12 ) {
            console.log( "calc2_streetValue: " + calc2_townArray12.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray12.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 13 ) {
            console.log( "calc2_streetValue: " + calc2_townArray13.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray13.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 14 ) {
            console.log( "calc2_streetValue: " + calc2_townArray14.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray14.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 15 ) {
            console.log( "calc2_streetValue: " + calc2_townArray15.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray15.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 16 ) {
            console.log( "calc2_streetValue: " + calc2_townArray16.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray16.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 17 ) {
            console.log( "calc2_streetValue: " + calc2_townArray17.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray17.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 18 ) {
            console.log( "calc2_streetValue: " + calc2_townArray18.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray18.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 19 ) {
            console.log( "calc2_streetValue: " + calc2_townArray19.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray19.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 20 ) {
            console.log( "calc2_streetValue: " + calc2_townArray20.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray20.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 21 ) {
            console.log( "calc2_streetValue: " + calc2_townArray21.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray21.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 22 ) {
            console.log( "calc2_streetValue: " + calc2_townArray22.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray22.find(c1 => c1.name === $(this).text() ).value;
        }
        if ( $('#calc2__cityID').text() == 23 ) {
            console.log( "calc2_streetValue: " + calc2_townArray23.find(c1 => c1.name === $(this).text() ).value );
            calc2_streetValue = calc2_townArray23.find(c1 => c1.name === $(this).text() ).value;
        }

    });




    //расчет

    function calc2_calculation() {


        var calc2_criteria1 = +$('#calc_2_criteria').text();
        var calc2_criteria2 = +$('#calc_3_criteria').text();
        var calc2_criteria3 = +$('#calc_4_criteria').text();

        console.log( calc2_criteria1 );
        console.log( calc2_criteria2 );
        console.log( calc2_criteria3 );


        var calc2_result1 = ( +calc2_criteria3 * +calc2_criteria2 * +calc2_cityValue * +calc2_streetValue * +calc2_square ) + +calc2_network + ( +calc2_perimeter * +calc2_borderValue ) + ( +calc2_greenValue * +calc2_square );
        var calc2_result2 = +calc2_criteria1 * +calc2_dlina * +calc2_shirina * +calc2_homebaseValue * +calc2_hometypeValue * +calc2_overlapValue * +calc2_wallsValue * +calc2_insidetrimValue * +calc2_roofValue * +calc2_outsidetrimValue * +calc2_warmValue * +calc2_classValue;
        var calc2_result3 = +calc2_result1 + +calc2_result2;
        var calc2_result4 = +calc2_result3 * 0.9;

        //var result1 = calcCriteria * cityValue * streetValue * typeValue * statusValue * otoplenieValue * paramValue * floorValue * conditionValue * square;

        $('#calc2_result_1').text( (+calc2_result1.toFixed(0)).toLocaleString("ru") + " руб." );
        $('#calc2_result_2').text( (+calc2_result2.toFixed(0)).toLocaleString("ru") + " руб." );
        $('#calc2_result_3').text( (+calc2_result3.toFixed(0)).toLocaleString("ru") + " руб." );
        $('#calc2_result_4').text( (+calc2_result4.toFixed(0)).toLocaleString("ru") + " руб." );


    }

    $('#calc2_btn').click(function(){
        calc2_calculation();
    });
    //расчет



});

