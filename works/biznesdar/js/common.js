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

	// $('.single-item').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000
	// 	//dots: true,
	// 	//dotsClass: 'dots',
	// 	// prevArrow: "<div class='arrow__prev'></div>",
	// 	// nextArrow: "<div class='arrow__next'></div>"
	// });

	// var currentSlide = $('.single-item').slick('slickCurrentSlide') + 1;
	// var allSlide = $(".single-item").slick("getSlick").slideCount;

	// console.log(currentSlide);
	// console.log(allSlide);

	$('.servs__image').fadeOut(0);
	$('.servs__image:eq(0)').fadeIn(100);
	var i = 1;
	let timerId = setTimeout(function tick() {

		$('.servs__image:eq(' + (i - 1) + ')').fadeOut(1200);
		$('.servs__image:eq(' + i + ')').fadeIn(1800);
		//console.log('tick' + i);

		timerId = setTimeout(tick, 6000);
		if ( i < 13 ) {
			i++;
		} else {
			i = 0;
		}
	}, 6000);

});




