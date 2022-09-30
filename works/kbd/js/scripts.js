$(document).ready(function() {


	$('.calc__digit--dig').click(function(){
        let length = $('#calc_password').val().length;

        if ( length < 4 ) {
            let value = $(this).text();
            let input = $('#calc_password').val();
            $('#calc_password').val( input + value );
        }

        if ( $('#calc_password').val() == 1234 ) {
            $('.calc__step--login').addClass("calc__step--hide");
        }

    });

    // let inputs = document.querySelectorAll('.input__file');
    // Array.prototype.forEach.call(inputs, function (input) {
    //     let label = $('.form__label'),
    //         labelVal = label.querySelector('.input__file-button-text').innerText;
    
    //     input.addEventListener('change', function (e) {
    //         let countFiles = '';
    //         if (this.files && this.files.length >= 1) {
    //             countFiles = this.files.length;
    //         }
    //         if (countFiles) {
    //             label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    //         } else {
    //             label.querySelector('.input__file-button-text').innerText = labelVal;
    //         }
    //     });
    // });

    $('#form_file').change(function(){
        // let files = $('#form_file')[0].files[0]['name']
        // alert( files );
        if ( $(this).val() != "" ) {
            $('.form__attachment').text("✔ Файлы добавлены.");
        } else {
            $('.form__attachment').text("Файлов пока нет.");
        }
    });

    $('input[name=stats_radio]').change(function(){
        if ( $('input[name=stats_radio]:checked').val() == "1" ) {
            $('.stats__screen--1').css({display: "block"});
            $('.stats__screen--2').css({display: "none"});
        } 
        if ( $('input[name=stats_radio]:checked').val() == "2" ) {
            $('.stats__screen--1').css({display: "none"});
            $('.stats__screen--2').css({display: "block"});
        }
    });

    $('.calc__del').click(function(){
        let split = $('#calc_password').val().split("");
        split.pop();
        $('#calc_password').val( split.join("") );
    });

    $('#calc_link_menu').click(function(){
        $('.calc__menu').addClass("calc__menu--slide");
        $('.calc__step').addClass("calc__step--slide");
        $('.calc__black').addClass("calc__black--show");
    });

    $('.calc__black').click(function(){
        $('.calc__menu').removeClass("calc__menu--slide");
        $('.calc__step').removeClass("calc__step--slide");
        $('.calc__black').removeClass("calc__black--show");
    });

    $('.menu__link').click(function(){
        let page = $(this).attr("data-page");
        // $('.calc__step').css({display: "none"});
        // $('.calc__step--' + page).css({display: "flex"});
        $('.calc__step').addClass("calc__step--hide");
        $('.calc__step--' + page).removeClass("calc__step--hide");

        $('.calc__menu').removeClass("calc__menu--slide");
        $('.calc__step').removeClass("calc__step--slide");
        $('.calc__black').removeClass("calc__black--show");

        let title = $(this).attr("data-name");
        $('.header__title').text( title );
    });

    $('.calc__link').click(function(){
        let page = $(this).attr("data-page");
        // $('.calc__step').css({display: "none"});
        // $('.calc__step--' + page).css({display: "flex"});
        $('.calc__step').addClass("calc__step--hide");
        $('.calc__step--' + page).removeClass("calc__step--hide");

        let title = $(this).attr("data-name");
        $('.header__title').text( title );
    });

    $('.sales__card').click(function(){
        let page = $(this).attr("data-page");
        $('.calc__step').addClass("calc__step--hide");
        $('.calc__step--' + page).removeClass("calc__step--hide");
        let title = $(this).attr("data-name");
        $('.header__title').text( title );
    });

    

});