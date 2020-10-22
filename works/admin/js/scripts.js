


$(document).ready(function() {


	// Выпадающий список
	$(".menu-hover").click(function(){

		// e.preventDefault();

		$(".header__menu__drop").toggleClass('menu--hide menu--show');
		$(this).css("z-index", "111");
		
	});
	//---


	// Форма связи
	$(".fst-screen__button").click(function(){
		$(".form").css("display", "flex");
	});
	$(".online__btn").click(function(){
		$(".form").css("display", "flex");
	});
	$(".tarif__item__btn").click(function(){
		$(".form").css("display", "flex");
	});
	

	$(".form__block__close").click(function(e){

		e.preventDefault();
		$(".form").css("display", "none");
		
	});


	setTimeout(function(){
		$(".form").css("display", "flex");
	}, 120000)
	//---


	// Превью для видео
	$("#preview1").click(function(){

		$("#video1").trigger('play');
		$(this).hide();

	});
	$("#preview2").click(function(){

		$("#video2").trigger('play');
		$(this).hide();

	});
	$("#preview3").click(function(){

		$("#video3").trigger('play');
		$(this).hide();

	});
	//---


	// Мобильное меню
	$(".header__burger").click(function(){
		$(".header__mobile-menu").toggleClass('mobile-translate-0 mobile-translate-1');
	});
	$(".header__mobile-menu").click(function(){
		$(".header__mobile-menu").toggleClass('mobile-translate-0 mobile-translate-1');
	});
	// if(typeof validation == "undefined"){$('div').removeClass();}
	//---

	// Фон хедера при скролле
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 70) $('.header').addClass('header-bg');
			else $('.header').removeClass('header-bg');
	});
	//---

	// Отправка заявки
	$('.form__block__btn').bind('click', function(){
		$('.form__block').submit();
	 });
	//---

	//alert("Jquery Test mssg")

});
