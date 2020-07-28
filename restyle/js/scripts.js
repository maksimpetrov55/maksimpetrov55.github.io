$(document).ready(function() {

	$('.calc__picker').click(function(e){
		$(this).next(".calc__palette").toggleClass("calc__palette--show");
		// $(this).toggleClass("calc__picker--close");
	});

	$('.calc__palette-close').click(function(e){
		$(this).parent().toggleClass("calc__palette--show");
	});




	var paletteColor_1 = "FFF7F7";
	$('.calc__theword').css({ color: "#" + paletteColor_1 });

	$('input[name="palette_1"]').click(function(){
		var paletteColor_1 = $(this).val();
		console.log( paletteColor_1 );
		$(this).parent().prev(".calc__picker").css({ background: "#" + paletteColor_1 });
		$('.calc__theword').css({ color: "#" + paletteColor_1 });
	});

	var paletteColor_2 = "AFAFAF";
	$('.calc__theword').css({ textShadow: "1px 1px 0px #" + paletteColor_2 + ", 2px 2px 0px #" + paletteColor_2 + ", 3px 3px 0px #" + paletteColor_2 + ", 4px 4px 0px #" + paletteColor_2 + ", 5px 5px 0px #" + paletteColor_2 });

	$('input[name="palette_2"]').click(function(){
		var paletteColor_2 = $(this).val();
		console.log( paletteColor_2 );
		$(this).parent().prev(".calc__picker").css({ background: "#" + paletteColor_2 });
		$('.calc__theword').css({ textShadow: "1px 1px 0px #" + paletteColor_2 + ", 2px 2px 0px #" + paletteColor_2 + ", 3px 3px 0px #" + paletteColor_2 + ", 4px 4px 0px #" + paletteColor_2 + ", 5px 5px 0px #" + paletteColor_2 });
	});

	var paletteColor_3 = "FF2512";
	$('.calc__theword--back').css({ background: "#" + paletteColor_3 });

	$('input[name="palette_3"]').click(function(){
		var paletteColor_3 = $(this).val();
		console.log( paletteColor_3 );
		$(this).parent().prev(".calc__picker").css({ background: "#" + paletteColor_3 });
		$('.calc__theword--back').css({ background: "#" + paletteColor_3 });
	});




	$('.calc__palette-img').each(function(){
		var tempColor = $(this).parent().prev(".calc__palette-radio").val();
		$(this).css({ background: "#" + tempColor });
	});

	$('#main_input').on("input", function(){
		$('.calc__theword').text( $(this).val().toUpperCase() );
	});
	
	$('.calc__select').click(function(){
		$('.calc__list').toggleClass("calc__list--show");
	});

	$('.calc__li').click(function(e){
		var calcLi = $(this).text();
		$('.calc__select').text( calcLi );
		$('.calc__list').toggleClass("calc__list--show");
		$('.calc__theword').css({ fontFamily: calcLi });
		calculate();
	});



	function calculate() {

		var calcHeight = $('#calc_height').val();

		//$('#calc_back_height').val( +calcHeight + 10 );

		var calcBackHight = $('#calc_back_height').val();

		var calcWidth = $('.calc__theword').width();
		console.log( calcWidth );

		$('#calc_width').val( calcWidth.toFixed(0) );
		$('#calc_back_width').val( +calcWidth.toFixed(0) + 20 );

		if ( $('#calc_checkbox_1').is(":checked") ) {
			$('.calc__theword').addClass("calc__theword--back");
			$('.calc__theword').removeClass("calc__theword--trans");

			$('.calc__sizemark--right').text( +calcBackHight );
			$('.calc__sizemark--bot').text( +calcWidth.toFixed(0) + 20 );
		} else {
			$('.calc__theword').removeClass("calc__theword--back");
			$('.calc__theword').addClass("calc__theword--trans");

			$('.calc__sizemark--right').text( calcHeight );
			$('.calc__sizemark--bot').text( +calcWidth.toFixed(0) );
		}

		var calcLength = $('#main_input').val().split(' ').join('').length;
		console.log( calcLength );


		var calcBase = $('input[name=letter_type]:checked').val();




		var calcPriceLetters = +calcLength * +calcBase;
		var calcPriceBlock = 1500;

		if ( $('#calc_checkbox_1').is(":checked") ){
			var calcPriceBack = calcLength * calcBackHight * 19;
		} else {
			var calcPriceBack = 0;
		}
		
		if ( $('#calc_checkbox_2').is(":checked") ){
			var calcPriceSet = 3000;
		} else {
			var calcPriceSet = 0;
		}
		
		var calcPriceItogo = calcPriceLetters + calcPriceBlock + calcPriceSet + calcPriceBack;

		$('#calc_summ_1').text( calcPriceLetters.toLocaleString("ru") + " руб." );
		$('#calc_summ_2').text( calcPriceBlock.toLocaleString("ru") + " руб." );
		$('#calc_summ_3').text( calcPriceBack.toLocaleString("ru") + " руб." );
		$('#calc_summ_4').text( calcPriceSet.toLocaleString("ru") + " руб." );
		$('#calc_summ_5').text( calcPriceItogo.toLocaleString("ru") + " руб." );


	}

	$('input').on("input", function(){
		calculate();
	});

	// $('#main_input').on("input", function(){
	// 	calculate();
	// });

	// $('#calc_height').on("input", function(){
	// 	calculate();
	// });

	$('.calc__checkbox').on("change", function(){
		calculate();
	});

	calculate();

});