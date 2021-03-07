$(document).ready(function() {

	$('.about__img__point').hover(function(event) {
		$('.about__img__point--hover').removeClass('about__img__point--hover');
		$('.about__img__text--hover').removeClass('about__img__text--hover');
		$(this).addClass('about__img__point--hover');
		$(this).next().addClass('about__img__text--hover');
	});

	$(".g-btn--form").click(function(){
		$(".form").fadeIn(300);
	});

	$(".g-btn--callback").click(function(){
		$(".form-callback").fadeIn(300);
	});

	$(".form__close").click(function(){
		$(".form").fadeOut(300);
		$(".form-callback").fadeOut(300);
	});

	$(".form__close--tnks").click(function(){
		$(".form-tnks").fadeOut(300);
		setTimeout(function(){
			window.location = "index.html";
		}, 250);

	});

	$(".form__btn").click(function(){
		$( "form" ).submit();
	});

	$(".header__content__mobile__menu").click(function(){
		$(".header__content__menu").toggleClass("header__content__menu--hide");
	});

	$(function(){
		$("#form__phone").mask("+7 (999) 999-99-99", {placeholder: "__________" });
	});

	$(".works__more__link").click(function(){
		$(".works--hide").css({display: "block"});
		$(".works--hide").animate({opacity: "1"}, 600);
		$(this).delay(500).fadeOut(300);
	});

	$('.single-item').slick({
		arrows: false,
		dots: true
	});

	$(".fancybox").fancybox();

	if ( window.location.hash == '#tnks' ) {
		$(".form-tnks").fadeIn(0);
	}

	$(".consult__round__round__btn").click(function(){
		$(".popup-video").fadeIn(300);
	});
	$(".popup-video").click(function(){
		$(this).fadeOut(300);
		setTimeout(function(){
			location.reload();
		}, 300);
	});

	$(".footer-mobile__poly__link, .footer__poly__link").click(function(){
		$(".popup-poly").fadeIn(300);
	});
	$(".popup-poly, .popup-poly__block__close").click(function(){
		$(".popup-poly").fadeOut(300);
	});


	$(window).scroll(function(e){
		var aaa = $(window).scrollTop(); 
		$(".techwindow").html(aaa.toFixed(0));

		var bbb = $(window).width(); 
		//$(".techwindow2").html(bbb.toFixed(2));

		if ( bbb < 901 ) {
			var imgH = +bbb * 0.596666667;
			$("#about_img").css({height: imgH });
		}

		var veg1 = ( -50 - ( aaa / 2 ));	// красный перец слева
		var veg2 = ( 0 - ( aaa / 7 ));	// 3 томата на ветке справа
		var veg3 = ( -650 - ( aaa / 8 ));	// большой желтый перец справа
		var veg4 = ( 200 - ( aaa / 2 ));	// маленький зеленый перец справа
		var veg5 = ( 100 - ( aaa / 5 ));	// капуста слева
		var veg6 = ( 1550 - ( aaa / 2 ));	// цветок справа
		var veg7 = ( 1150 - ( aaa / 3 ));	// огурцы слева


		$(".vegetable--1").css({
			marginTop: veg1
		});
		$(".vegetable--2").css({
			marginTop: veg2
		});
		$(".vegetable--3").css({
			marginTop: veg3
		});
		$(".vegetable--4").css({
			marginTop: veg4
		});
		$(".vegetable--5").css({
			marginTop: veg5
		});
		$(".vegetable--6").css({
			marginTop: veg6
		});
		$(".vegetable--7").css({
			marginTop: veg7
		});
	});

});