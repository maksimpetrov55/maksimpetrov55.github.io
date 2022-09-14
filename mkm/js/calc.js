

$(document).ready(function() {


    //форма
    $(function(){
        $(".calc__forminput--mask").mask("+7 (999) 999-99-99", {placeholder: "__________" });
    });

    $('#calc4_btn_mail').click(function(){
        $( "#calc4_form" ).submit();
    });

    $('#calc5_btn_mail').click(function(){
        $( "#calc5_form" ).submit();
    });
    //форма

    //popup
    $('#calc_note_1').click(function(){
        $('#calc_popup_1').addClass("calc__popup--show");
    });
    $('#calc_note_2').click(function(){
        $('#calc_popup_2').addClass("calc__popup--show");
    });


    $('#calc3_note_1').click(function(){
        $('#calc3_popup_1').addClass("calc__popup--show");
    });
    $('#calc3_note_2').click(function(){
        $('#calc3_popup_2').addClass("calc__popup--show");
    });


    $('#calc4_note_1').click(function(){
        $('#calc4_popup_1').addClass("calc__popup--show");
    });
    $('#calc4_note_2').click(function(){
        $('#calc4_popup_2').addClass("calc__popup--show");
    });
    $('#calc4_note_3').click(function(){
        $('#calc4_popup_3').addClass("calc__popup--show");
    });


    $('#calc5_note_1').click(function(){
        $('#calc5_popup_1').addClass("calc__popup--show");
    });
    $('#calc5_note_2').click(function(){
        $('#calc5_popup_2').addClass("calc__popup--show");
    });
    $('#calc5_note_3').click(function(){
        $('#calc5_popup_3').addClass("calc__popup--show");
    });
    $('#calc5_note_4').click(function(){
        $('#calc5_popup_4').addClass("calc__popup--show");
    });
    $('#calc5_note_5').click(function(){
        $('#calc5_popup_5').addClass("calc__popup--show");
    });
    $('#calc5_note_6').click(function(){
        $('#calc5_popup_6').addClass("calc__popup--show");
    });
    $('#calc5_note_7').click(function(){
        $('#calc5_popup_7').addClass("calc__popup--show");
    });


    $('.calc__popup__close').click(function(e){
        $(this).parent().removeClass("calc__popup--show");
    });
    
    //popup

    // кнопки калькуляторов
    $('#calcpage_appear_1').click(function(e){
        $('.calcpage__appear--active').removeClass("calcpage__appear--active");
        $(this).addClass("calcpage__appear--active");
        $('.calc--show').removeClass("calc--show");
        $('#calc_1').addClass("calc--show");
    });
    $('#calcpage_appear_2').click(function(e){
        $('.calcpage__appear--active').removeClass("calcpage__appear--active");
        $(this).addClass("calcpage__appear--active");
        $('.calc--show').removeClass("calc--show");
        $('#calc_2').addClass("calc--show");
    });
    $('#calcpage_appear_3').click(function(e){
        $('.calcpage__appear--active').removeClass("calcpage__appear--active");
        $(this).addClass("calcpage__appear--active");
        $('.calc--show').removeClass("calc--show");
        $('#calc_3').addClass("calc--show");
    });
    // кнопки калькуляторов


    //список
    $('.calc__select').click(function(e){
        $('.calc__close').addClass("calc__close--show");
        $(this).toggleClass("calc__select--open");
        $(this).children(".calc__list").toggleClass("calc__list--show");
    });

    $('.calc__list').on("click",".calc__li",function(e){
        setTimeout(() => {
            $('.calc__close').removeClass("calc__close--show"); 
        }, 100);
        $(this).parent(".calc__list").prev(".calc__current").text( $(this).text() );
        $(this).parent(".calc__list").prev().prev(".calc__street").val( $(this).text() );
        
    });



    // $('#city_list').on("click",".calc__li",function(e){
    //     console.log( "cityValue: " + cityArr.find(n1 => n1.name === $(this).text() ).value );
    // });


    $('.calc__close').click(function(){
        $(".calc__list").removeClass("calc__list--show");
        $('.calc__close').removeClass("calc__close--show");
        $('.calc__select').removeClass("calc__select--open");
    });
    //список

});
