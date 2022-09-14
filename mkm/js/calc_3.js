







$(document).ready(function() {

    var calc3_hometypeID;
    var calc3_remontkindID;
    var calc3_remonttypeValue;
    var calc3_square;

    $('#calc_3_square').on("input", function(){
        console.log( $("#calc_3_square").val() );
        var calc3_square_str = $("#calc_3_square").val();
        if ( calc3_square_str.indexOf(',') > 0 ) {
            //console.log( calc3_square_str.split(",").join('.') );
            calc3_square = calc3_square_str.split(",").join('.');
        } else {
            calc3_square = calc3_square_str;
        }
    });

    //заполнение списка тип дома
    $('#calc_3_hometype_list').empty();
    let calc3_hometype_list = document.querySelector('#calc_3_hometype_list');

    for ( let i = 0; i < calc3_hometypeArr.length; i++ ) {
        let calc3_hometypeDiv = document.createElement('div');
        calc3_hometypeDiv.innerHTML = calc3_hometypeArr[i].name;
        calc3_hometypeDiv.className = "calc__li";
        calc3_hometype_list.appendChild( calc3_hometypeDiv );
    }
    //заполнение списка тип дома

    //заполнение списка вид ремонта
    $('#calc_3_remontkind_list').empty();
    let calc3_remontkind_list = document.querySelector('#calc_3_remontkind_list');

    for ( let i = 0; i < calc3_remontkindArr.length; i++ ) {
        let calc3_remontkindDiv = document.createElement('div');
        calc3_remontkindDiv.innerHTML = calc3_remontkindArr[i].name;
        calc3_remontkindDiv.className = "calc__li";
        calc3_remontkind_list.appendChild( calc3_remontkindDiv );
    }
    //заполнение списка вид ремонта

    //заполнение списка вид ремонта
    $('#calc_3_remonttype_list').empty();
    let calc3_remonttype_list = document.querySelector('#calc_3_remonttype_list');

    for ( let i = 0; i < calc3_remonttypeArr.length; i++ ) {
        let calc3_remonttypeDiv = document.createElement('div');
        calc3_remonttypeDiv.innerHTML = calc3_remonttypeArr[i].name;
        calc3_remonttypeDiv.className = "calc__li";
        calc3_remonttype_list.appendChild( calc3_remonttypeDiv );
    }
    //заполнение списка вид ремонта





    $("#calc_3_hometype_list").on("click",".calc__li",function(e){ 
        console.log( "calc3_hometypeID: " + calc3_hometypeArr.find(n1 => n1.name === $(this).text() ).value ); 
        calc3_hometypeID = calc3_hometypeArr.find(i1 => i1.name === $(this).text() ).id; 

        $('#calc3_pict_1').addClass("calc__pict--show");
        $('#calc3_pict_1 .calcpage__img').removeClass("calcpage__img--show");
        $('#calc3_pict_1 .calcpage__img--' + calc3_hometypeID).addClass("calcpage__img--show");

    });

    $("#calc_3_remontkind_list").on("click",".calc__li",function(e){ 
        console.log( "calc3_remontkindID: " + calc3_remontkindArr.find(n2 => n2.name === $(this).text() ).value ); 
        calc3_remontkindID = calc3_remontkindArr.find(i2 => i2.name === $(this).text() ).id; 
    });

    $("#calc_3_remonttype_list").on("click",".calc__li",function(e){ 
        console.log( "calc3_remonttypeValue: " + calc3_remonttypeArr.find(n3 => n3.name === $(this).text() ).value ); 
        calc3_remonttypeValue = calc3_remonttypeArr.find(n3 => n3.name === $(this).text() ).value; 
    });




    //расчет

    function calc3_calculation() {

        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 13145;   }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 14175;   }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 17670;   }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 11684;   }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 13611;   }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 10996;   }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 11301;   }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 7687;    }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 7687;    }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 1)) ) { var calc3_tableValue = 7591;    }
        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 11007;   }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 11927;   }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 15252;   }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 9298;    }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 11442;   }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 9298;    }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 9298;    }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 6314;    }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 6314;    }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 2)) ) { var calc3_tableValue = 5600;    }
        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 7272;    }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 7829;    }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 8152;    }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 7292;    }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 7504;    }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 6791;    }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 6911;    }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 6394;    }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 6394;    }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 3)) ) { var calc3_tableValue = 0;       }
        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 7244;    }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 7832;    }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 7578;    }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 6884;    }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 7490;    }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 6884;    }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 8044;    }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 6453;    }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 6453;    }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 4)) ) { var calc3_tableValue = 0;       }
        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 41513;   }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 43992;   }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 56566;   }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 50734;   }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 42395;   }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 34227;   }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 35427;   }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 27844;   }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 27844;   }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 5)) ) { var calc3_tableValue = 27165;   }
        if ( ((calc3_hometypeID == 1)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 7648;    }
        if ( ((calc3_hometypeID == 2)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 7781;    }
        if ( ((calc3_hometypeID == 3)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 17744;   }
        if ( ((calc3_hometypeID == 4)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 14277;   }
        if ( ((calc3_hometypeID == 5)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 7695;    }
        if ( ((calc3_hometypeID == 6)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 5515;    }
        if ( ((calc3_hometypeID == 7)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 5922;    }
        if ( ((calc3_hometypeID == 8)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 5533;    }
        if ( ((calc3_hometypeID == 9)  && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 5533;    }
        if ( ((calc3_hometypeID == 10) && (calc3_remontkindID == 6)) ) { var calc3_tableValue = 0;       }

        console.log(calc3_tableValue);
        console.log(calc3_remonttypeValue);
        console.log(calc3_square);

        var calc3_result1 = +calc3_tableValue * +calc3_remonttypeValue * +calc3_square ;

        $('#calc3_result_1').text( (+calc3_result1.toFixed(0)).toLocaleString("ru") + " руб." );

    }

    $('#calc3_btn').click(function(){
        calc3_calculation();
    });
    //расчет


});

