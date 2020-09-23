$(document).ready(function() {

	//список меню
	$('#header').on("mouseenter", ".header__link",function(e){
		$(".header__list--open").removeClass("header__list--open");
	});
	$('#header').on("mouseenter", ".header__link--list",function(e){
		$(".header__list--open").removeClass("header__list--open");
		$(this).next().addClass("header__list--open");
	});
	$('#header').on("mouseleave", ".header__list",function(e){
		$(this).removeClass("header__list--open");
	});
	//список меню


});