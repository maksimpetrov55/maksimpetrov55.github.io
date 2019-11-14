$(document).ready(function() {

	$(".room__hover__locker").mouseleave(function(){
		/* $(".room__hover-locker__point").animate({opacity: "0"},{queue:false, duration: 0}); */
		$(".room__img__locker").delay(50).animate({opacity: "0"},{queue:false, duration: 250});
	});
	$(".room__hover__locker").click(function(){
		$(".room__img__locker").animate({opacity: "1"},{queue:false, duration: 400});
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__locker").delay(400).fadeIn(350);
		/* $(".room__hover-locker__point").delay(400).animate({opacity: "1"},{queue:false, duration: 100}); */
	});
/* 	$(".room__popup__locker").mouseleave(function(){
		$(".room__dark-matter").fadeOut(400);
		$(".room__popup__locker").fadeOut(400);
	}); */

	$(".room__dark-matter").click(function(){
		$(this).fadeOut(400);
		$(".room__popup__locker").fadeOut(400);
	});
	
	$(".room__popup__locker__flex__copter").mouseenter(function(){
		$(".room__popup__locker__flex__note").fadeIn(300).css({display: "flex"});
	});

	$(".room__popup__locker__flex__copter").mouseleave(function(){
		$(".room__popup__locker__flex__note").fadeOut(300); // --------------------------------------------- SHOW HIDE
	});



/* 	$(".room__hover-locker__point").click(function(){
		$(".room__popup-locker").fadeIn(400);
		$(".room__close-locker").delay(400).fadeIn(400);
		$(".room__dark-matter").fadeIn(400);

	});
	$(".room__close-locker").click(function(){
		$(".room__close-locker").fadeOut(100);
		$(".room__popup-locker").fadeOut(300);
		$(".room__dark-matter").fadeOut(300);

	}); */

});