$(document).ready(function() {

	// $('.t754__imgwrapper').each(function(){
	// 	var this_newid = +$(this).index('.t754__imgwrapper') + 1;
	// 	var this_index = "anchor" + this_newid;
	// 	$(this).attr("id", this_index);
	// 	//var this_id = $(this).attr("id");
	// 	//$(this).text(this_id);
	// });

	// $('.quiz__btn').click(function(){
	// 	calculate();
	// });

	// function calculate() {

	// 	var color = ".color1";
	// 	var size = ".size1";

	// 	var selector = color + " " + size;
	// 	var length = $('.quiz__elements').children(".color1, .size1").length;
		
	// 	console.log(length);

	// 	$('.quiz__elements').children(".color3.size1").addClass("quiz__item--select");

	// }

	$('.quiz__radio').on("change", function(){
		quiz();
	});

	function quiz() {

		$('.item--select').removeClass("item--select");

		var radio_1 = $('input[name=quiz_kronshtein]:checked').val();
		var radio_2 = $('input[name=quiz_karbonat]:checked').val();
		var radio_3 = $('input[name=quiz_kozirek]:checked').val();
		var radio_4 = $('input[name=quiz_section]:checked').val();

		console.log( radio_1 + " | " + radio_2 + " | " + radio_3  + " | " + radio_4 );
		
		if ( radio_1 != undefined && radio_2 != undefined && radio_3 != undefined && radio_4 != undefined ) {

			$('#quiz_itog').addClass("quiz__itog--show");
			$('.quiz__title--temp').css({display: "none"});
			
			var selector = "." + radio_1 + "." + radio_2 + "." + radio_3 + "." + radio_4;
			
			//console.log(selector);
			
			console.log( $(selector).length );

			if ( $(selector).length == 0 || $(selector).length == undefined ) {
				$('.quiz__sorry').addClass("quiz__sorry--show");
			} else {
				$('.quiz__sorry--show').removeClass("quiz__sorry--show");
			}
			
			$('.quiz__elements').children( selector ).addClass("item--select");
			

		}

	}

	// $('#quiz_next_1').click(function(){
	// 	var radio_1 = $('input[name=quiz_kronshtein]:checked').val();
	// 	if ( radio_1 != undefined ) {
	// 		$('#quiz_step_1').removeClass("quiz__step--show");
	// 		$('#quiz_step_2').addClass("quiz__step--show");
	// 		$(this).parent().prev().removeClass("quiz__error--show");
	// 	} else {
	// 		$(this).parent().prev().addClass("quiz__error--show");
	// 	}

	// });
	// $('#quiz_next_2').click(function(){
	// 	var radio_2 = $('input[name=quiz_karbonat]:checked').val();
	// 	if ( radio_2 != undefined ) {
	// 		$('#quiz_step_2').removeClass("quiz__step--show");
	// 		$('#quiz_step_3').addClass("quiz__step--show");
	// 		$(this).parent().prev().removeClass("quiz__error--show");
	// 	} else {
	// 		$(this).parent().prev().addClass("quiz__error--show");
	// 	}

	// });
	// $('#quiz_next_3').click(function(){
	// 	var radio_3 = $('input[name=quiz_kozirek]:checked').val();
	// 	if ( radio_3 != undefined ) {
	// 		$('#quiz_step_3').removeClass("quiz__step--show");
	// 		$('#quiz_step_4').addClass("quiz__step--show");
	// 		$(this).parent().prev().removeClass("quiz__error--show");
	// 	} else {
	// 		$(this).parent().prev().addClass("quiz__error--show");
	// 	}

	// });
	// $('#quiz_next_4').click(function(){
	// 	var radio_4 = $('input[name=quiz_section]:checked').val();
	// 	if ( radio_4 != undefined ) {
	// 		$('#quiz_step_4').removeClass("quiz__step--show");
	// 		$('#quiz_itog').addClass("quiz__itog--show");
	// 		$(this).parent().prev().removeClass("quiz__error--show");
	// 	} else {
	// 		$(this).parent().prev().addClass("quiz__error--show");
	// 	}

	// });


	// $('#quiz_prev_2').click(function(){
	// 	$('#quiz_step_2').removeClass("quiz__step--show");
	// 	$('#quiz_step_1').addClass("quiz__step--show");
	// });
	// $('#quiz_prev_3').click(function(){
	// 	$('#quiz_step_3').removeClass("quiz__step--show");
	// 	$('#quiz_step_2').addClass("quiz__step--show");
	// });
	// $('#quiz_prev_4').click(function(){
	// 	$('#quiz_step_4').removeClass("quiz__step--show");
	// 	$('#quiz_step_3').addClass("quiz__step--show");
	// });


	$('.quiz__again').click(function(){
		$('#quiz_itog').removeClass("quiz__itog--show");
		$('#quiz_step_1').addClass("quiz__step--show");
	});



});