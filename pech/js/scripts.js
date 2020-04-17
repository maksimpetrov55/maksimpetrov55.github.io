$(document).ready(function() {

	// алгоритм перехода со step1 на step2 в зависимости от выбора в начале
	$("#forward_step_1").click(function() {

		var btn_choice_step_1 = $('input[name=choice_step_1]:checked').val();

		if (btn_choice_step_1 == 'pech') {
			//alert("pech");
			$('.step__1').hide();
			$('.step__2ab').show();
		} 
		else {

			if (btn_choice_step_1 == 'barbeq') {
				//alert("barbeq");
				$('.step__1').hide();
				$('.step__2ab').show();
			} 
			else {

				if (btn_choice_step_1 == 'besedka') {
					//alert("besedka");
					$('.step__1').hide();
					$('.step__2c').show();
				}
			}
		}

	});


	// переход с печей/барбекью step2 на первый экран
	$("#back_step_2ab").click(function() {
			
			$('.step__2ab').hide();
			$('.step__1').show();
	});

	// переход с беседок step2 на первый экран
	$("#back_step_2c").click(function() {
			
			$('.step__2c').hide();
			$('.step__1').show();
	});

	// переход с печей/барбекью step2 на step3
	$("#forward_step_2ab").click(function() {
			
			$('.step__3ab').show();
			$('.step__2ab').hide();			
	});

	// переход с печей/барбекью step3 на step2
	$("#back_step_3ab").click(function() {
			
			$('.step__3ab').hide();
			$('.step__2ab').show();
	});

	// переход с печей/барбекью step3 на step4
	$("#forward_step_3ab").click(function() {
			
			$('.step__4').show();
			$('.step__3ab').hide();			
	});

	// переход с беседок step2 на step3
	$("#forward_step_2c").click(function() {
			
			$('.step__3c').show();
			$('.step__2c').hide();			
	});

	// переход с беседок step3 на step2
	$("#back_step_3c").click(function() {
			
			$('.step__3c').hide();
			$('.step__2c').show();
	});

	// переход с беседок step3 на step4
	$("#forward_step_3c").click(function() {
			
			$('.step__4').show();
			$('.step__3c').hide();			
	});

	// переход со step4 на step5
	$("#forward_step_4").click(function() {
			
			$('.step__5').show();
			$('.step__4').hide();			
	});

	// переход со step5 на step4
	$("#back_step_5").click(function() {
			
			$('.step__5').hide();
			$('.step__4').show();
	});

	// переход со step5 на step6
	$("#forward_step_5").click(function() {
			
			$('.step__6').show();
			$('.step__5').hide();			
	});

	// переход со step6 на step5
	$("#back_step_6").click(function() {
			
			$('.step__6').hide();
			$('.step__5').show();
	});


	// алгоритм перехода со step4 на step3 в зависимости от выбора в начале
	$("#back_step_4").click(function() {

		var btn_choice_step_1 = $('input[name=choice_step_1]:checked').val();

		if (btn_choice_step_1 == 'pech') {
			//alert("pech");
			$('.step__4').hide();
			$('.step__3ab').show();
		} 
		else {

			if (btn_choice_step_1 == 'barbeq') {
				//alert("barbeq");
				$('.step__4').hide();
				$('.step__3ab').show();
			} 
			else {

				if (btn_choice_step_1 == 'besedka') {
					//alert("besedka");
					$('.step__4').hide();
					$('.step__3c').show();
				}
			}
		}

	});


	$(".show__quiz").click(function() {
			
			$('.black__shadow').show();
			$('.step__1').show();
	});

	$(".black__shadow").click(function() {
			
			$('.black__shadow').hide();
			$('.step__1').hide();
			$('.step__2ab').hide();
			$('.step__2c').hide();
			$('.step__3ab').hide();
			$('.step__3c').hide();
			$('.step__4').hide();
			$('.step__5').hide();
			$('.step__6').hide();


	});


	$('.quiz__form form').submit(function(){

		$(".quiz__form").hide();
		$(".quiz__final__sale").hide();
		$(".quiz__final__gift").hide();
		$(".quiz__final__tnks").show();
		return false;
	  
	});


});