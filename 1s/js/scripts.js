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

	//экран загрузки
	$(".loading__logo").delay(100).fadeOut(100);
	$(".loading").delay(200).fadeOut(130);
	// $(".loading__logo").delay(1000).fadeOut(1000);
	// $(".loading").delay(2000).fadeOut(1300);
	//экран загрузки

	//открытие формы
	$(".form--open").click(function(){
		$(".form").fadeIn(200);
		$(".form").css({display: "flex"});
		$(".form__block").delay(200).fadeIn(400);
	});

	$(".form--close").click(function(){
		$(".form__block").delay(100).fadeOut(300);
		$(".form").delay(300).fadeOut(100);
	});

	$(".form--phone").click(function(){
		$(".form__header").html("Заказать звонок");
	});
	$(".form--consult").click(function(){
		$(".form__header").html("Бесплатная консультация специалиста");
	});
	//открытие формы

	//маска телефона
	$(function(){
		//$("").mask("+7 (999) 999-99-99", {placeholder: "__________" });
	});
	//маска телефона

	//прилипание хедера



	function headerChange() {

		var scroll = $(window).scrollTop();
		$(".tech").html(scroll.toFixed(0));

		if ( scroll > 200 ) {
			$('.header').addClass("header--scroll");
			$('.header__logo').addClass("header__logo--scroll");
			$('.header__separator').addClass("header__separator--scroll");
			$('.header__link').addClass("header__link--scroll");
			$('.header__phone').addClass("header__phone--scroll");
		} else {
			$('.header').removeClass("header--show");
			$('.header').removeClass("header--scroll");
			$('.header__logo').removeClass("header__logo--scroll");
			$('.header__separator').removeClass("header__separator--scroll");
			$('.header__link').removeClass("header__link--scroll");
			$('.header__phone').removeClass("header__phone--scroll");
		}

		if ( scroll > 500 ) {
			$('.header').addClass("header--show");
		}

	}

	headerChange();

	$(window).scroll(function(e){
		headerChange();
	});
	//прилипание хедера


});