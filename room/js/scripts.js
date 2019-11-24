$(document).ready(function() {

/* 	$(".room__hover__locker").mouseleave(function(){
		$(".room__img__locker").delay(50).animate({opacity: "0"},{queue:false, duration: 250});
	}); */
	
	$(".room__hover__locker").click(function(){
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__locker").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__locker").delay(400).fadeIn(350);
	});

	$(".room__hover__bed").click(function(){
		$(".room__hover__bed").fadeOut(0);
		$(".room__img__bed").fadeIn(400);
		$(".room__things__scooter").fadeIn(400);
/* 		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__bed").delay(400).fadeIn(350); */

		$(".room__things__scooter").delay(15000).fadeOut(0);
		$(".room__img__bed").delay(15000).fadeOut(400);
		$(".room__hover__bed").delay(15500).fadeIn(400);
	});



	$(".room__hover__table").click(function(){
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__table").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__table").delay(400).fadeIn(350);
	});
	$(".room__hover__stand").click(function(){
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__stand").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__stand").delay(400).fadeIn(350);
	});


	$(".room__dark-matter").click(function(){
		$(this).fadeOut(400);
		
		$(".room__popup__locker, .room__popup__bed, .room__popup__table, .room__popup__stand").fadeOut(400);
		$(".room__img__bed, .room__img__locker, .room__img__table, .room__img__stand").delay(200).fadeOut(200);
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand").delay(400).fadeIn(0);
		$(".room__things").delay(400).fadeIn(0);
	});
	



	$(".room__popup__locker__copter").mouseenter(function(){
		$(".room__popup__locker__copter__note").stop().fadeIn(300);
	});
	$(".room__popup__locker__copter").mouseleave(function(){
		$(".room__popup__locker__copter__note").stop().fadeOut(300);
	});


	$(".room__popup__table__iphone").mouseenter(function(){
		$(".room__popup__table__iphone__note").stop().fadeIn(300);
	});
	$(".room__popup__table__iphone").mouseleave(function(){
		$(".room__popup__table__iphone__note").stop().fadeOut(300);
	});


	$(".room__popup__table__macbook").mouseenter(function(){
		$(".room__popup__table__macbook__note").stop().fadeIn(300);
	});
	$(".room__popup__table__macbook").mouseleave(function(){
		$(".room__popup__table__macbook__note").stop().fadeOut(300);
	});


	$(".room__popup__stand__photocam").mouseenter(function(){
		$(".room__popup__stand__photocam__note").stop().fadeIn(300);
	});
	$(".room__popup__stand__photocam").mouseleave(function(){
		$(".room__popup__stand__photocam__note").stop().fadeOut(300);
	});


	$(".room__popup__stand__gopro").mouseenter(function(){
		$(".room__popup__stand__gopro__note").stop().fadeIn(300);
	});
	$(".room__popup__stand__gopro").mouseleave(function(){
		$(".room__popup__stand__gopro__note").stop().fadeOut(300);
	});




	$(".room__things__piano__hover").mouseenter(function(){
		$(".room__things__piano__note").stop().fadeIn(300);
	});
	$(".room__things__piano__hover").mouseleave(function(){
		$(".room__things__piano__note").stop().fadeOut(300);
	});

	$(".room__things__telescope__hover").mouseenter(function(){
		$(".room__things__telescope__note").stop().fadeIn(300);
	});
	$(".room__things__telescope__hover").mouseleave(function(){
		$(".room__things__telescope__note").stop().fadeOut(300);
	});

	$(".room__things__scooter__hover").mouseenter(function(){
		$(".room__things__scooter__note").stop().fadeIn(300);
	});
	$(".room__things__scooter__hover").mouseleave(function(){
		$(".room__things__scooter__note").stop().fadeOut(300);
	});

	$(".room__things__sound__hover1, .room__things__sound__hover2").mouseenter(function(){
		$(".room__things__sound__note").stop().fadeIn(300);
	});
	$(".room__things__sound__hover1, .room__things__sound__hover2").mouseleave(function(){
		$(".room__things__sound__note").stop().fadeOut(300);
	});

	$(".room__things__run__hover1, .room__things__run__hover2").mouseenter(function(){
		$(".room__things__run__note").stop().fadeIn(300);
	});
	$(".room__things__run__hover1, .room__things__run__hover2").mouseleave(function(){
		$(".room__things__run__note").stop().fadeOut(300);
	});

});