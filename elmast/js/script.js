$(document).ready(function() {

	$(".nav a").click(function () {
		event.preventDefault();
		var pointer = $(this).attr("href");
		console.log(pointer);
		$('.navbar-collapse').collapse('hide');
		$('html, body').animate({
			scrollTop: $(pointer).offset().top
		}, 2000);
	});
	$("#1").click(function () {
		$('html, body').animate({
			scrollTop: $('.main-block').offset().top - 50
		}, 2000);
	});
	$("#2").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-2').offset().top - 50
		}, 2000);
	});
	$("#3").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-9').offset().top - 50
		}, 2000);
	});
	$("#4").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-8').offset().top - 50
		}, 2000);
	});
	$("#5").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-7').offset().top - 50
		}, 2000);
	});
	$("#6").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-11').offset().top - 50
		}, 2000);
	});
	$("#7").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-12').offset().top - 50
		}, 2000);
	});
	$("#8").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-14').offset().top - 50
		}, 2000);
	});
	$("#9").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-15').offset().top - 50
		}, 2000);
	});
    $("#10").click(function () {
        $('html, body').animate({
            scrollTop: $('.block-17').offset().top - 50
        }, 2000);
    });
    $("#11").click(function () {
        $('html, body').animate({
            scrollTop: $('.block-18').offset().top - 50
        }, 2000);
    });
	$("#fiz-people").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-2').offset().top - 100
		}, 3000);
	});
	$("#ur-people").click(function () {
		$('html, body').animate({
			scrollTop: $('.block-4').offset().top - 50
		}, 3000);
	});

    var struct5Flag = false;

	$(window).scroll(function () {
		anim();


		function anim() {
			var scrolled = $(window).scrollTop();
			var imagePos_menu = $('.nav-menu').offset().top;
			var poz_top = 84;
				if (imagePos_menu < poz_top) {
					$(".nav-menu").css({"position": "relative", "top": "0"});
				}

				if (scrolled > imagePos_menu) {
					$(".nav-menu").css({"position": "fixed", "top": "0"});
				}
		}

        var images = $('li.animate');

        var imagePosTop = images.first().offset().top;
        var imagePosBottom = images.last().offset().top + images.last().height();
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var topOfWindow = $(window).scrollTop();

        if ((imagePosTop < scrollBottom-300 && imagePosBottom > topOfWindow) && !struct5Flag){
            struct5Flag = true;
            images.each(function(i){
                $(this).delay(500 * $(this).attr('data-order')).animate({opacity: 1}, 100);
            });
        } else if ((imagePosTop > scrollBottom || imagePosBottom < topOfWindow) && struct5Flag){
            struct5Flag = false;
                images.each(function (i) {
                    $(this).stop().animate({opacity: 0}, 1);
                });
        }
	});
    $('.bxslider').bxSlider({
        slideWidth: 732,
        minSlides: 1,
        moveSlides: 1,
        slideMargin: 10
    });
    $('.bxslider2').bxSlider({
        slideWidth: 184,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 15,
        auto: true,
        pause: 6000
    })

    function anim(){
        var scrolled = $(window).scrollTop();
        return scrolled;
    }


    $('.md-trigger').click(function(){
        $('.md-modal').css({'top': anim()+200+'px' ,'position':'absolute'});

    })
});

