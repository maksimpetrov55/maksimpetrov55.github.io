$(document).ready(function() {

	$('.header').on('click','.header__phone', function(e) {
		$('.blackout').addClass("blackout--show");
		$('.form').addClass("form--show");
	});

	$('.blackout').click(function(){
		$(this).removeClass("blackout--show");
		$('.form').removeClass("form--show");
	});

	$('.form').on('click','.form__close', function(e) {
		$('.blackout').removeClass("blackout--show");
		$('.form').removeClass("form--show");
	});

	$('.header').on('click','.header__burger', function(e){
		$('.header__menu').toggleClass('header__menu--show');
		$('.header__burger').toggleClass('header__burger--close');
		$('.header__burger__line').toggleClass('header__burger__line--close');
	});


});