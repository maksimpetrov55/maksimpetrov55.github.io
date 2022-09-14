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


	//спасибо за заявку
	setTimeout( function() {
		if ( window.location.hash == '#tnks' ) {
			$(".tnks").addClass("tnks--show");
			//var url = window.location.href;
			//alert( url.split("#")[0] );
		}
	}, 150 );

	$(".tnks, .tnks__close").click(function(){
        $(".tnks").removeClass("tnks--show");
        var url = window.location.href;
        window.location = url.split("#")[0];
    });
	//спасибо за заявку


	//поиск
	$(function(){
		$('#calc1_search').on('input', function(){
			var str = $(this).val().toLowerCase();

			$('#street_list').children(".calc__li").each(function(e){
				if ( $(this).text().toLowerCase().includes(str) ) {
					//console.log( $(this).text() );
					$(this).css({display: "block"});
				} else {
					$(this).css({display: "none"});
				}
			});

		});
	});

	$(function(){
		$('#calc2_search').on('input', function(){
			var str = $(this).val().toLowerCase();

			$('#calc_2_street_list').children(".calc__li").each(function(e){
				if ( $(this).text().toLowerCase().includes(str) ) {
					//console.log( $(this).text() );
					$(this).css({display: "block"});
				} else {
					$(this).css({display: "none"});
				}
			});

		});
	});
	//поиск

});