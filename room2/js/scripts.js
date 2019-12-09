


$(document).ready(function() {

	adapt();
	
	function adapt() {

		var win_width = window.innerWidth;


		if ( +win_width > 1300 ) {

			var b_width = $(".adapt-or-die").width();
			var b_adapt_height = +b_width / 1.77778;
	
			$(".adapt-or-die").css({
				width: "100%",
				height: b_adapt_height
			});
	
			$(".wrap-room").css({
				width: "100%",
				height: "100%"
			});
	
		}
	
		if ( +win_width <= 1300 ) {

			var window_height = $(window).height();
	
			$(".wrap-room").css({
				width: "100%",
				height: window_height
			});

			var a_height = $(".wrap-room").height();
			var b_adapt_width = (+a_height - 9) * 1.77778;

			$(".adapt-or-die").css({
				width: b_adapt_width,
				height: "100%"
			});

			var adapt_fz = +a_height * 0.02;

			$(".room__general__note__title, .room__general__note__text, .room__general__note__price").css({
				fontSize: adapt_fz
			});

			var window_width = $(window).width();

			$(".wrap-room").scrollLeft( (+b_adapt_width / 2) * (1 - (+window_width / +b_adapt_width))  );
	
		}
	
		//alert( "adapt execute" );
	}

	$(window).resize(function(){
		adapt();
		location.reload();
	});


	//$(".room__hover__locker").click(function(){
	$(".room__point__locker").click(function(){
		leave();
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__locker").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__locker").delay(400).fadeIn(350);
	});

	//$(".room__hover__bed").click(function(){
	$(".room__point__bed").click(function(){
		$(".room__hover__bed").fadeOut(0);
		$(".room__img__bed").fadeIn(400);
		$(".room__things__scooter").fadeIn(400);
		$(".room__point__bed").fadeOut(100);
		$(".room__things__scooter__out1, .room__things__scooter__out2").fadeIn(0);
	});

	$(".room__things__scooter__out1, .room__things__scooter__out2").click(function(){
		leave();
	});

	function leave() {
		$(".room__things__scooter").fadeOut(0);
		$(".room__img__bed").fadeOut(400);
		$(".room__hover__bed").delay(500).fadeIn(400);
		$(".room__point__bed").delay(200).fadeIn(200);
		$(".room__things__scooter__out1, .room__things__scooter__out2").fadeOut(0);
	}




	//$(".room__hover__table").click(function(){
	$(".room__point__table").click(function(){
		leave();
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__table").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__table").delay(400).fadeIn(350);
	});
	//$(".room__hover__stand").click(function(){
	$(".room__point__stand").click(function(){
		leave();
		$(".room__hover__bed, .room__hover__locker, .room__hover__table, .room__hover__stand, .room__things").fadeOut(0);
		$(".room__img__stand").fadeIn(400);
		$(".room__dark-matter").delay(400).fadeIn(350);
		$(".room__popup__stand").delay(400).fadeIn(350);
	});


	$(".room__dark-matter").click(function(){
		leave();
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