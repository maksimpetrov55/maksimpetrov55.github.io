$(document).ready(function() {

	var calc_count = 0;
	var calc_count_a = 0;
	var calc_count_b = 0;
	var calc_result = "NaN";

	$('.calc__minus').click(function(e){
		var calc_input = $(this).next().val();
		$(this).next().val( +calc_input - 1 );
	});

	$('.calc__plus').click(function(e){
		var calc_input = $(this).prev().val();
		$(this).prev().val( +calc_input + 1 );
	});

	$('.calc__select').click(function(e){
		$(this).toggleClass("calc__select--open")
		$(this).children().next().toggleClass("calc__list--open")
	});

	$('.calc__li').click(function(e){
		var calc_li = $(this).text();
		$(this).parent().prev().text(calc_li);
	});

	// $('#calc_btn_start').click(function(){
	// 	$('#calc_step' + calc__count).addClass("calc__block--hide");
	// 	$('#calc_step' + calc__count + 1).removeClass("calc__block--hide");
	// 	calc__count = calc__count + 1;
	// });

	// $('#calc_btn_step1').click(function(){
	// 	$('#calc_step' + calc__count + 1).removeClass("calc__block--hide");
	// 	$('#calc_step' + calc__count).addClass("calc__block--hide");
	// });
	// $('#calc_btn_back1').click(function(){
	// 	$('#calc_step0').removeClass("calc__block--hide");
	// 	$('#calc_step1').addClass("calc__block--hide");
	// });

	$('.calc__btn--next').click(function(e){
		if ( calc_count < 10 ) {
			calc_count_a = calc_count + 1;
			calc_count_b = calc_count - 1;
			$('#calc_step' + calc_count).addClass("calc__block--hide");
			$('#calc_step' + calc_count_a).removeClass("calc__block--hide");
			calc_count = calc_count + 1;
		} else {
			//alert("KONEC");
			$('#calc_step10').addClass("calc__block--hide");
			$('#calc_step11').removeClass("calc__block--hide");
		}
	});

	$('.calc__btn--back').click(function(e){
		calc_count_a = calc_count + 1;
		calc_count_b = calc_count - 1;
		$('#calc_step' + calc_count_b).removeClass("calc__block--hide");
		$('#calc_step' + calc_count).addClass("calc__block--hide");
		calc_count = calc_count - 1;
	});

	$('.calc__btn--last').click(function(e){
		$('#calc_step10').removeClass("calc__block--hide");
		$('#calc_step11').addClass("calc__block--hide");
	});


	$('.calc__input').on("input", function(){
		calculate();
	});
	$('.calc__radio').on("change", function(){
		calculate();
	});
	$('.calc__check').on("change", function(){
		calculate();
	});

	calculate();

	function calculate() {
		
		console.clear();

		var calc_age = $('#calc_age').val();
		if (calc_age < 31) {
			var calc_age_val = 5;
		} else {
			if (calc_age < 56) {
				var calc_age_val = 3;
			} else {
				var calc_age_val = 1;
			}
		}
		
		var calc_sex = $('input[name=calc_sex]:checked').val();

		var calc_weight = $('#calc_weight').val();
		var calc_tall = $('#calc_tall').val();
		var calc_imt = +calc_weight / ( (+calc_tall / 100) * (+calc_tall / 100) );
		if(calc_imt < 16) {
			var calc_imt_val = 0;
		} else {
			if(calc_imt < 20) {
				var calc_imt_val = 1;
			} else {
				if(calc_imt < 26) {
					var calc_imt_val = 5;
				} else {
					if(calc_imt < 31) {
						var calc_imt_val = 3;
					} else {
						var calc_imt_val = 1;
					}
				}
			}
		}

		var calc_length = $('#calc_length').val();
		
		if (calc_sex == 1) {
			if (calc_length < 70) { var calc_length_val = 2 } else {
				if (calc_length < 94 ) { var calc_length_val = 5 } else {
					if (calc_length >= 94 ) { var calc_length_val = 1 }
				}
			}
		} else {
			if (calc_length < 55) { var calc_length_val = 2 } else {
				if (calc_length < 80 ) { var calc_length_val = 5 } else {
					if (calc_length >= 80 ) { var calc_length_val = 1 }
				}
			}
 		}




		var calc_pres = $('input[name=calc_pres]:checked').val();
		var calc_smoke = $('input[name=calc_smoke]:checked').val();
		var calc_heart = $('input[name=calc_heart]:checked').val();
		var calc_stress = $('input[name=calc_stress]:checked').val();


		var calc_ask1 = [];
		$('input[name=calc_ask1]:checked').each(function(){
			calc_ask1.push($(this).val());
		});
		var calc_ask1_summ = 0;
		for(var i=0;i<calc_ask1.length;i++){
			calc_ask1_summ = calc_ask1_summ + parseInt(calc_ask1[i]);
		}

		var calc_ask2 = [];
		$('input[name=calc_ask2]:checked').each(function(){
			calc_ask2.push($(this).val());
		});
		var calc_ask2_summ = 0;
		for(var y=0;y<calc_ask2.length;y++){
			calc_ask2_summ = calc_ask2_summ + parseInt(calc_ask2[y]);
		}

		var calc_ask3 = [];
		$('input[name=calc_ask3]:checked').each(function(){
			calc_ask3.push($(this).val());
		});
		var calc_ask3_summ = 0;
		for(var g=0;g<calc_ask3.length;g++){
			calc_ask3_summ = calc_ask3_summ + parseInt(calc_ask3[g]);
		}

		console.log("calc_age_val: " + calc_age_val);
		console.log("calc_imt_val: " + calc_imt_val);
		console.log("calc_length_val: " + calc_length_val);
		console.log("calc_pres: " + calc_pres);
		console.log("calc_smoke: " + calc_smoke);
		console.log("calc_heart: " + calc_heart);
		console.log("calc_stress: " + calc_stress);
		console.log("calc_ask1_summ: " + calc_ask1_summ);
		console.log("calc_ask2_summ: " + calc_ask2_summ);
		console.log("calc_ask3_summ: " + calc_ask3_summ);

		var calc_result = +calc_age_val + +calc_imt_val + +calc_length_val + +calc_pres + +calc_smoke + +calc_heart + +calc_stress + +calc_ask1_summ + +calc_ask2_summ + +calc_ask3_summ;

		console.log("––––––––––––––––––");
		console.log("calc_result: " + calc_result);

		// $('.calc__score').text( calc_result + " балла" );

		if ( calc_result < 20 ) { 
			$('.calc__result').text("Дорогой друг, нам очень плохо! Мы постоянно обеспокоены и подвержены стрессу, нам страшно и за себя, и за тебя. Ты живешь нескучной жизнью, но не совсем правильно, а мы пытаемся помогать и защищать твой организм, заставлять его работать, несмотря ни на что. К сожалению, мы не всесильны, и кажется, когда-то мы просто проиграем эту войну. Пожалуйста, давай поможем друг другу и устраним из нашей жизни негативные факторы. Помни, твое здоровье – это главный ресурс твоей жизни. С любовью твои сердце и сосуды.");
		} else {
			if ( calc_result < 38 ) {
				$('.calc__result').text("Ну что ж, шанс получить инфаркт или инсульт со временем не так уж и мал. В Ваших действиях прослеживается некоторая забота о здоровье, но и факторов риска встречается не мало. И если их не устранить, критические состояния могут настигнуть Вас в любое время, и есть вероятность, что это может случиться раньше, чем вы достигните старости. Советуем Вас озадачиться этим вопросом. Обратите внимание, на шкале отображены все факторы, постарайтесь в ближайшее время проработать из них негативные и устранить.");
			} else {
				if ( calc_result < 57 ) {
					$('.calc__result').text("Ваши сердце и сосуды Вам благодарны за то, что Вы уже осуществляете ряд полезных действий по отношению к ним. Однако есть и негативные факторы, которые сказываются не лучшим образом на Вашем здоровье. Чем раньше Вы это поймете, тем быстрее сможете предотвратить необратимые последствия. В целом здоровье сердца и сосудов у вас не плохое, как у среднестатистического человека, но не стоит более внимательно относиться к своему здоровью.");
				} else {
					if ( calc_result >= 57) {
						$('.calc__result').text("Благодаря Вашим действиям риск приобрести инфаркт или инсульт в раннем возрасте минимален. Вы трепетно относитесь к своему здоровью, следите за питанием, уделяете время физической активности. Здоровью Ваших сердца и сосудов позавидует профессиональный дайвер. Вы точно сможете и на максимальную глубину погружаться, и покорять вершины гор. Мы имеем дело с профессором своего здоровья. Продолжайте в том же духе и вам будут подвластны любые преграды.");
					} else {
						$('.calc__result').text("Пожалуйста заполните все поля, чтобы увидеть результат!");
					}
				}
			}
		}
	}

});