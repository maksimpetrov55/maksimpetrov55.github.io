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

});