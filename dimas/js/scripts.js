$(document).ready(function() {

    //плавный скролл до якоря
    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });
    //плавный скролл до якоря

    //открытие-закрытие формы
    $(".form").fadeOut(0);
    $(".form").css({transform: "translateY(0px)"})

    function form_open(){
        $(".form").fadeIn(300);
        $(".form__content").addClass("form__content--show");
    }
    function form_close(){
        $(".form").fadeOut(400);
        $(".form__content").removeClass("form__content--show");
    }
    $(".form__close").click(function(){
        form_close();
        $(".form__content__title").html("Оставьте заявку");
    });


    $(".form-callback").click(function(){
        $(".form__content__title").html("Заказать звонок");
        form_open();
    });
    $(".form-order").click(function(){
        $(".form__content__title").html("Обсудить проект");
        form_open();
    });
    //открытие-закрытие формы

    //отправка формы
    $(".form__content__btn").click(function(){
        $( "form" ).submit();
    });
    //отправка формы

    //появление заголовка
    setTimeout(function(){
        $(".first__title").animate({opacity: "1"}, 1000);
    }, 800)
    //появление заголовка

    //появление кнопки
    setTimeout(function(){
        $(".first__btn").animate({opacity: "1"}, 200);
    }, 1000)
    //появление кнопки

    //whatsapp кнопка
    $(".wa-btn__link").mouseover(function(){
        $(".wa-btn__note").addClass('wa-btn__note--animation');
    });
    $(".wa-btn__link").mouseleave(function(){
        $(".wa-btn__note").removeClass('wa-btn__note--animation');
    });
    $(".wa-btn__link").click(function(){
        $(".wa-btn__note").removeClass('wa-btn__note--animation');
    });
    //whatsapp кнопка

    //info
    function info() {
        var info_width = $(window).width(); 
        var info_width2 = window.innerWidth;
        $(".info__width").html(info_width.toFixed(2));
        $(".info__width2").html(info_width2.toFixed(2));
    }

    $(window).scroll(function(e){
        info();
    });

    $(window).resize(function() {
        info();
    });
    //info

    //бургер меню
    $(".header__burger").click(function(){
        $(".header__menu").toggleClass("header__menu--show");
    });
    $(".header__link").click(function(){
        $(".header__menu").removeClass("header__menu--show");
    });
    //бургер меню

    //выбор города
    $(".first__city__current, .first__city__select--omsk, .first__city__select--tumen, .first__city__select--mariup").click(function(){
        $(".first__city__select").toggleClass("first__city__select--show");
    });
    $(".first__city__select--omsk").click(function(){
        $(".first__city__current").html("Омск")
    });
    $(".first__city__select--tumen").click(function(){
        $(".first__city__current").html("Тюмень")
    });
    $(".first__city__select--mariup").click(function(){
        $(".first__city__current").html("Мариуполь")
    });
    //выбор города

    //раскрытие услуги

    $(".serv__block").click(function(){
        if( $(".serv__block").hasClass("serv__block--open") ) {
            $(".serv__block").not($(this)).removeClass("serv__block--open");
            $(".serv__block__text").not($(this).children(".serv__block__text")).slideUp(300);
        }
        $(this).toggleClass("serv__block--open");
        $(this).children(".serv__block__text").slideToggle(300);
    });

    $(".serv__block").hover(function(e){
        $(this).toggleClass("serv__block--hover");
    });

    // $(".serv__block").mouseleave(function(e){
    //     $(this).animate({height: "60px"},{queue:false, duration:150});
    //     $(this).children( ".serv__block__text" ).fadeOut(150);
    // });
    //раскрытие услуги

});

