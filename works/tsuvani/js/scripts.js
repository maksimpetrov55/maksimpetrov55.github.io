$(document).ready(function() {




    $('input[name=calc_category]').change(function(){
        if ( $('input[name=calc_category]:checked').val() == "Man" ) {
            $('.calc__products--woman').addClass("calc__products--hidden");
            $('.calc__products--kids').addClass("calc__products--hidden");
            $('.calc__products--man').removeClass("calc__products--hidden");
        }
        if (  $('input[name=calc_category]:checked').val() == "Woman" ) {
            $('.calc__products--man').addClass("calc__products--hidden");
            $('.calc__products--kids').addClass("calc__products--hidden");
            $('.calc__products--woman').removeClass("calc__products--hidden");
        }
        if (  $('input[name=calc_category]:checked').val() == "Kids" ) {
            $('.calc__products--man').addClass("calc__products--hidden");
            $('.calc__products--woman').addClass("calc__products--hidden");
            $('.calc__products--kids').removeClass("calc__products--hidden");
        }
    });


    $('.cart__minus').click(function(){
        let amount = +$(this).next().text();
        if ( amount > 1 ) {
            $(this).next().text( +amount - 1 );
        }
    });
    $('.cart__plus').click(function(){
        let amount = +$(this).prev().text();
        if ( amount > 0 ) {
            $(this).prev().text( +amount + 1 );
        }
    });


    $('.cart__close').click(function(){
        $(this).parent().addClass("cart__item--remove");
        setTimeout(() => {
            $(this).parent().remove();
        }, 200);
    });


    $('input[name=product_size]').change(function(){
        $('.product__buy--disabled').removeAttr('disabled');
        $('.product__buy--disabled').removeClass("product__buy--disabled");
    });


    $(function(){
        $(".calc__number").mask("+7 (999) 999-99-99", {placeholder: "__________" });
    });


    $('.visual__content').children().eq(0).addClass("visual__item--active");
    var visual_length = +$('.visual__content').children().length - 1;

    $('.visual__forward').click(function(){
        let visual_index = +$('.visual__item--active').index();
        if ( visual_index < visual_length ) {
            $('.visual__item--active').removeClass("visual__item--active");
            $('.visual__content').children().eq( +visual_index + 1 ).addClass("visual__item--active")
        }
    });

    $('.visual__back').click(function(){
        let visual_index = +$('.visual__item--active').index();
        if ( visual_index > 0 ) {
            $('.visual__item--active').removeClass("visual__item--active");
            $('.visual__content').children().eq( +visual_index - 1 ).addClass("visual__item--active")
        }
    });
    

    $('.product__link').click(function(){
        $('.product__table').toggleClass("product__table--show");
    });


    $('.calc__submit').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page2').removeClass("calc__page--hidden");
    });
    $('.calc__icon').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page3').removeClass("calc__page--hidden");
    });
    $('.profile__history').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page4').removeClass("calc__page--hidden");
    });
    $('.calc__cart').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page5').removeClass("calc__page--hidden");
    });
    $('.item').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page6').removeClass("calc__page--hidden");
    });
    $('.product__img, .calc__zoom').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page7').removeClass("calc__page--hidden");
    });

    $('.calc__back--profile').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page2').removeClass("calc__page--hidden");
    });
    $('.calc__back--history').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page3').removeClass("calc__page--hidden");
    });
    $('.calc__back--cart').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page2').removeClass("calc__page--hidden");
    });
    $('.calc__back--product').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page2').removeClass("calc__page--hidden");
    });
    $('.calc__back--visual').click(function(){
        $('.calc__page').addClass("calc__page--hidden");
        $('.calc__page6').removeClass("calc__page--hidden");
    });

});