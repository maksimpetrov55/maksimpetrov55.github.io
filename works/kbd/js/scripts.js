$(document).ready(function() {

    $('.calc__input--phone').mask("+7 (999) 999-99-99", {placeholder: "__________" });

	$('.calc__digit--dig').click(function(){
        let length = $('#calc_password').val().length;

        if ( length < 4 ) {
            let value = $(this).text();
            let input = $('#calc_password').val();
            $('#calc_password').val( input + value );
        }

        if ( $('#calc_password').val() == 1234 ) {
            $('.calc__step--pass').addClass("calc__step--hide");
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

        if ( page == "pay" ) { $('.header__remind').addClass("header__remind--show"); } 
        else { $('.header__remind').removeClass("header__remind--show"); }
        
        if ( page == "news" ) { $('.calc__icon--news').addClass("calc__icon--active"); } 
        else { $('.calc__icon--news').removeClass("calc__icon--active"); }

        if ( page == "form" ) { $('.calc__icon--form').addClass("calc__icon--active"); } 
        else { $('.calc__icon--form').removeClass("calc__icon--active"); }

        if ( page == "pay" ) { $('.calc__icon--pay').addClass("calc__icon--active"); } 
        else { $('.calc__icon--pay').removeClass("calc__icon--active"); }
    });

    $('.calc__link').click(function(){
        let page = $(this).attr("data-page");
        // $('.calc__step').css({display: "none"});
        // $('.calc__step--' + page).css({display: "flex"});
        $('.calc__step').addClass("calc__step--hide");
        $('.calc__step--' + page).removeClass("calc__step--hide");

        let title = $(this).attr("data-name");
        $('.header__title').text( title );

        if ( page == "pay" ) { $('.header__remind').addClass("header__remind--show"); } 
        else { $('.header__remind').removeClass("header__remind--show"); }
        
        if ( page == "news" ) { $('.calc__icon--news').addClass("calc__icon--active"); } 
        else { $('.calc__icon--news').removeClass("calc__icon--active"); }

        if ( page == "form" ) { $('.calc__icon--form').addClass("calc__icon--active"); } 
        else { $('.calc__icon--form').removeClass("calc__icon--active"); }

        if ( page == "pay" ) { $('.calc__icon--pay').addClass("calc__icon--active"); } 
        else { $('.calc__icon--pay').removeClass("calc__icon--active"); }
    });

    $('.header__link').click(function(){
        let page = $(this).attr("data-page");
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

    

    $('.header__dots').click(function(){
        $('.header__window').addClass("header__window--show");
    });

    $('.header__link, .calc__step').click(function(){
        $('.header__window--show').removeClass("header__window--show");
    });












    




    $('.header__remind').click(function(){

        $('.remind').addClass("remind--show");

        $('.slider__body--1').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true
        });
    
        $('.slider__border--1').on('wheel', (function(e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $('.slider__body--1').slick('slickPrev');
            } else {
                $('.slider__body--1').slick('slickNext');
            }
        }));
    
        $('.slider__body--2').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true
        });
    
        $('.slider__border--2').on('wheel', (function(e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $('.slider__body--2').slick('slickPrev');
            } else {
                $('.slider__body--2').slick('slickNext');
            }
        }));
    
        $('.slider__body--3').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true
        });
    
        $('.slider__border--3').on('wheel', (function(e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $('.slider__body--3').slick('slickPrev');
            } else {
                $('.slider__body--3').slick('slickNext');
            }
        }));
    });

    $('.remind__btn, .remind__black').click(function(){
        $('.remind--show').removeClass("remind--show");
    });

    $('.calc__head').delay(500).animate({opacity: "1"}, 1000);
    setTimeout(() => {
        $('.calc__step--logo').addClass("calc__step--hide"); 
    }, 2000);
    

    $('.calc__forget').click(function(){
        $('.calc__step--login').addClass("calc__step--hide");
    });

    $('.calc__button').click(function(){
        $('.calc__step--login').addClass("calc__step--hide");
        $('.calc__step--forget').addClass("calc__step--hide");
    });




    setTimeout(() => {
        $('.calc__words--1').delay(0).animate({opacity: "1"}, 400);
        $('.calc__words--2').delay(400).animate({opacity: "1"}, 400);
        $('.calc__words--3').delay(800).animate({opacity: "1"}, 400);
        $('.calc__words--4').delay(1200).animate({opacity: "1"}, 400);
        $('.calc__words--5').delay(1600).animate({opacity: "1"}, 400);
        $('.calc__words--6').delay(2000).animate({opacity: "1"}, 400);
        $('.calc__words--7').delay(2400).animate({opacity: "1"}, 400);
    }, 2500);

    $('.calc__block--1').click(function(){
        $(this).css({display: "none"});
        $('.calc__block--2').css({display: "flex"});
        setTimeout(() => {
            $('.calc__words--8').delay(0).animate({opacity: "1"}, 400);
            $('.calc__words--9').delay(400).animate({opacity: "1"}, 400);
            $('.calc__words--10').delay(800).animate({opacity: "1"}, 400);
            $('.calc__words--11').delay(1200).animate({opacity: "1"}, 400);
            $('.calc__words--12').delay(1600).animate({opacity: "1"}, 400);
            $('.calc__words--13').delay(2000).animate({opacity: "1"}, 400);
        }, 300);
    });

    $('.calc__block--2').click(function(){
        $(this).css({display: "none"});
        $('.calc__block--3').css({display: "flex"});
        setTimeout(() => {
            $('.calc__words--14').delay(0).animate({opacity: "1"}, 400);
            $('.calc__words--15').delay(400).animate({opacity: "1"}, 400);
            $('.calc__words--16').delay(800).animate({opacity: "1"}, 400);
            $('.calc__words--17').delay(1200).animate({opacity: "1"}, 400);
            $('.calc__words--18').delay(1600).animate({opacity: "1"}, 400);
            $('.calc__words--19').delay(2000).animate({opacity: "1"}, 400);
            $('.calc__words--20').delay(2400).animate({opacity: "1"}, 400);
            $('.calc__words--21').delay(2800).animate({opacity: "1"}, 400);
        }, 300);
    });

    $('.calc__block--3').click(function(){
        $(this).css({display: "none"});
        $('.calc__step--words').addClass("calc__step--hide");
    });

    $('.news__baloon').click(function(){
        $(this).addClass("news__baloon--hide");
    });

    $('.menu__dark').click(function(){
        if ( $(this).children().text() == "brightness_5" ) {
            $(this).children().text("dark_mode");
            $('.mark-text').removeClass("dark-text");
            $('.mark-bg').removeClass("dark-bg");
            $('.mark-bg--light').removeClass("dark-bg--light");
            $('.mark-svg').removeClass("dark-svg");
            $('.mark-baloon').removeClass("dark-baloon");
        } else {
            $(this).children().text("brightness_5");
            $('.mark-text').addClass("dark-text");
            $('.mark-bg').addClass("dark-bg");
            $('.mark-bg--light').addClass("dark-bg--light");
            $('.mark-svg').addClass("dark-svg");
            $('.mark-baloon').addClass("dark-baloon");
        }
    });


});