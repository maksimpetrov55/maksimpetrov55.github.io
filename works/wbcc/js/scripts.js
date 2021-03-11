$(document).ready(function() {

	$('.calc__input').on("change", function(){
		calc();
	});

	$('.calc__error-close').click(function(){
		$('.calc__error').removeClass("calc__error--show");
	});

	calc();

	function calc() {

		var calc_steps = $('.calc__scroll').find(".calc__input--small").length;
		//console.log("calc_steps " + calc_steps);

		var calc_lines = $('#calc_lines').val();
		if ( calc_lines < 10 ) {
			var calc_lines = 10;
			$('#calc_lines').val( calc_lines );
		}
		if ( calc_lines > 100 ) {
			var calc_lines = 100;
			$('#calc_lines').val( calc_lines );
		}

		var calc_current = calc_lines;
		//console.log("calc_current " + calc_current);

		var calc_start = 0;
		while ( calc_start <= calc_current ) {
			$('.calc__scroll').find(".calc__line:eq(" + calc_start + ")").removeClass("calc__line--hidden");
			calc_start++;
		}

		while ( calc_current <= calc_steps ) {
			$('.calc__scroll').find(".calc__line:eq(" + calc_current + ")").removeClass("calc__line--hidden");
			$('.calc__scroll').find(".calc__line:eq(" + calc_current + ")").addClass("calc__line--hidden");
			calc_current++;
		}

		var calc_deposit = $('#calc_deposit').val();
		$('.calc__itog--span').text( (+calc_deposit).toFixed(2) );
		var calc_leverage = $('#calc_leverage').val();

		var calc_amount = 0;
		var line_itog = +calc_deposit;

		while (calc_amount < calc_steps) {

			var line_this = $('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").val();

			if ( line_this == "" ) {
				$('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").next().text("-");
				$('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").next().next().text("-");
			}

			if ( line_this != "" ) {
				var line_percent = line_this;
				var line_itog = +line_itog + ( (line_itog * line_percent * calc_leverage) / 100 );

				if ( line_itog < 0 ) {
					var line_last = line_itog;
					$('.calc__error-dep').text(line_last.toFixed(2));
					var line_itog = 0;
					$('.calc__error--show').removeClass("calc__error--show");
					$('.calc__error').addClass("calc__error--show");
				}
				$('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").next().text( line_percent * calc_leverage + "%" );
				$('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").next().next().text( line_itog.toFixed(2) );
				$('.calc__itog--span').text( line_itog.toFixed(2) );
			}

			calc_amount++;
		}

		//$('.calc__scroll').find(".calc__input--small:eq(" + calc_amount + ")").val(222);

		// $('.calc__scroll').find(".calc__input--small").each(function(){
		// 	if ( $(this).val() != "" ) {
		// 		let calc_temp = $(this).val();
		// 		$(this).next().text( calc_leverage * calc_temp + "%" );
		// 	}
		// });

	}

});