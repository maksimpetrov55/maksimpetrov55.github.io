$(document).ready(function() {

	$('body, html').animate({ scrollTop: $("html").offset().top }, 100);

	$('.calc3__btn').click(function(){
		window.print();
	});

	// $('.calc3__logo').delay(200).animate({opacity: "1"}, 1000)
	// $('.calc3__img').delay(700).animate({opacity: "1"}, 1000)

	// $('.calc3__logo').addClass('calc3__logo--appear');
	// $('.calc3__img').addClass('calc3__img--appear');
	// $('.calc3__head').addClass('calc3__head--appear');

	$('.calc3__container--1').addClass('calc3__container--appear');
	$('.calc3__container--2').addClass('calc3__container--appear');
	$('.calc3__img').addClass('calc3__img--show');

	$('.calc3__radio[name ="que1"]').change(function(){
		if ( $('.calc3__radio[name ="que2"]').is(":checked") &&
		$('.calc3__radio[name ="que3"]').is(":checked") ) {
			$('.calc3__block--4').fadeIn(1000);
		}
	});
	$('.calc3__radio[name ="que2"]').change(function(){
		if ( $('.calc3__radio[name ="que3"]').is(":checked") &&
		$('.calc3__radio[name ="que1"]').is(":checked") ) {
			$('.calc3__block--4').fadeIn(1000);
		}
	});
	$('.calc3__radio[name ="que3"]').change(function(){
		if ( $('.calc3__radio[name ="que2"]').is(":checked") &&
		$('.calc3__radio[name ="que1"]').is(":checked") ) {
			$('.calc3__block--4').fadeIn(1000);
			//$('body, html').one().animate({ scrollTop: $('.calc3__block--2').offset().top }, 600);
		}
	});
	$('.calc3__radio[name ="que4"]').change(function(){
		$('.calc3__block--5').fadeIn(1000);
		//$('body, html').animate({ scrollTop: $('.calc3__block--3').offset().top }, 600);
	});
	$('.calc3__radio[name ="que5"]').change(function(){
		$('.calc3__block--6').fadeIn(1000);
		//$('body, html').animate({ scrollTop: $('.calc3__block--4').offset().top }, 600);
	});
	$('.calc3__radio[name ="que6"]').change(function(){
		$('.calc3__block--7').fadeIn(1000);
		//$('body, html').animate({ scrollTop: $('.calc3__block--5').offset().top }, 600);
	});
	$('.calc3__radio[name ="que7"]').change(function(){
		$('.calc3__block--8').fadeIn(1000);
		//$('body, html').animate({ scrollTop: $('.calc3__block--6').offset().top }, 600);
	});

	var lock = 1;
	$('.calc3__radio[name ="que8"]').change(function(){
		if ( lock == 1 ) {
			$('body, html').animate({ scrollTop: $('#anchor1').offset().top }, 600);
			lock = 0;
		}
	});

	$('.calc3__radio[name ="que8"]').change(function(){


		$('.calc3__tip').fadeOut(300);

		$('.calc3__title').fadeIn(700);
		$('.calc3__sos').fadeIn(1000);
		$('.calc3__temp').delay(600).addClass('calc3__temp--grow');
		$('.calc3__select').delay(600).addClass('calc3__select--show');
	

		$('.calc3__investor').delay(600).addClass("calc3__investor--show");
		$('.calc3__textarea').delay(600).addClass("calc3__textarea--show");
		$('.calc3__note').delay(600).addClass("calc3__note--show");
		$('.calc3__btn').delay(600).addClass("calc3__btn--show");

	});


	function selector() {

		var windowW = $(document).width();
		var kf = $('.calc3__dig').width();
		var marg = ( kf - 22 ) / 2;

		var val1 = $('.calc3__radio[name ="que1"]:checked').val();
		var val2 = $('.calc3__radio[name ="que2"]:checked').val();
		var val3 = $('.calc3__radio[name ="que3"]:checked').val();
		var val4 = $('.calc3__radio[name ="que4"]:checked').val();
		var val5 = $('.calc3__radio[name ="que5"]:checked').val();
		var val6 = $('.calc3__radio[name ="que6"]:checked').val();
		var val7 = $('.calc3__radio[name ="que7"]:checked').val();
		var val8 = $('.calc3__radio[name ="que8"]:checked').val();

		$('.calc3__select').css({marginLeft: marg});
		$('.calc3__select').css({marginRight: marg});
	
		var result = +val1 + +val2 + +val3 + +val4 + +val5 + +val6 + +val7 + +val8;
		console.log(result);

		if ( windowW < 470 ) {
			var moveSelect = 5 + (+result * +kf / 2 ) - ( 8 * +kf / 2 );
		} else {
			var moveSelect = 5 + (+result * +kf) - ( 8 * +kf);
		}


		$('.calc3__select').css({left: moveSelect});

		if ( result < 13 ) {
			$('.calc3__type').removeClass('calc3__type--select');
			$('.calc3__type--1').addClass('calc3__type--select');
			$('.calc3__print--in').html("Вы консервативный (осторожный) инвестор!");
			$('.calc3__oneway').html("Вы консервативный (осторожный) инвестор!");
		} else {
			if ( result < 18 ) {
				$('.calc3__type').removeClass('calc3__type--select');
				$('.calc3__type--2').addClass('calc3__type--select');
				$('.calc3__print--in').html("Вы умеренно-консервативный инвестор!");
				$('.calc3__oneway').html("Вы умеренно-консервативный инвестор!");
			} else {
				if ( result < 23 ) {
					$('.calc3__type').removeClass('calc3__type--select');
					$('.calc3__type--3').addClass('calc3__type--select');
					$('.calc3__print--in').html("Вы умеренный инвестор!");
					$('.calc3__oneway').html("Вы умеренный инвестор!");
				} else {
					if ( result < 28 ) {
						$('.calc3__type').removeClass('calc3__type--select');
						$('.calc3__type--4').addClass('calc3__type--select');
						$('.calc3__print--in').html("Вы умеренно-агрессивный инвестор!");
						$('.calc3__oneway').html("Вы умеренно-агрессивный инвестор!");
					} else {
						if ( result >= 28 ) {
							$('.calc3__type').removeClass('calc3__type--select');
							$('.calc3__type--5').addClass('calc3__type--select');
							$('.calc3__print--in').html("Вы агрессивный (динамичный) инвестор!");
							$('.calc3__oneway').html("Вы агрессивный (динамичный) инвестор!");
						}
					}
				}
			}
		}

	}

	selector();

	$(window).resize(function(){
		selector();
	});

	$('.calc3__radio').change(function(){

		selector();

	});











});
