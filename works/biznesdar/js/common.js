$(document).ready(function() {

	$('.header-menu-button').click(function() {
		if ($(this).hasClass("show")) {
			$('#header .header-menu-button').removeClass("show");
			$('body').removeClass('disable-scroll');
			$('#mob-header-menu').removeClass('active');
		} else {
			$('#header .header-menu-button').addClass("show");
			$('body').addClass('disable-scroll');
			$('#mob-header-menu').addClass('active');
		}
	});

	
	$('.header-contact.phone').on('click', function() {
		$('#popup2').addClass("popup2--open");
	});
	$('.popup2__black').click(function(){
		$('#popup2').removeClass("popup2--open");
	});
	$('.popup2__close').click(function(){
		$('#popup2').removeClass("popup2--open");
	});

	$('.single-item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		//dots: true,
		//dotsClass: 'dots',
		prevArrow: "<div class='arrow__prev'></div>",
		nextArrow: "<div class='arrow__next'></div>"
	});

	var currentSlide = $('.single-item').slick('slickCurrentSlide') + 1;
	var allSlide = $(".single-item").slick("getSlick").slideCount;

	console.log(currentSlide);
	console.log(allSlide);

});




