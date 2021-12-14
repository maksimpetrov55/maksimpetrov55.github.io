$(document).ready(function() {

	$('#calc_step_1').css({display: "none"});
	$('#calc_step_2').css({display: "none"});
	$('#calc_step_3').css({display: "none"});
	$('#calc_step_4').css({display: "none"});
	$('#calc_result').css({display: "none"});
	$('.calc__loading').css({display: "none"});

	$('#calc_btn_start').click(function(){
		$('#calc_step_start').css({display: "none"});
		$('#calc_step_1').css({display: "block"});
	});

	$('#calc_btn_1').click(function(){
		$('#calc_step_1').css({display: "none"});
		$('#calc_step_2').css({display: "block"});
	});

	$('#calc_btn_2').click(function(){
		$('#calc_step_2').css({display: "none"});
		$('#calc_step_3').css({display: "block"});
	});

	$('#calc_btn_3').click(function(){
		$('#calc_step_3').css({display: "none"});
		$('#calc_step_4').css({display: "block"});
	});

	$('#calc_back_1').click(function(){
		$('#calc_step_1').css({display: "none"});
		$('#calc_step_start').css({display: "block"});
	});

	$('#calc_back_2').click(function(){
		$('#calc_step_2').css({display: "none"});
		$('#calc_step_1').css({display: "block"});
	});
	
	$('#calc_back_3').click(function(){
		$('#calc_step_3').css({display: "none"});
		$('#calc_step_2').css({display: "block"});
	});
	
	$('#calc_back_4').click(function(){
		$('#calc_step_4').css({display: "none"});
		$('#calc_step_3').css({display: "block"});
	});

	$('#calc_btn_4').click(function(){

		if (
			$('input[name=calc_sex]').val() > 0 &&
			$('#calc_weight').val() != "" &&
			$('#calc_age').val() != "" &&
			$('#calc_height').val() != "" &&
			$('input[name=calc_activity]').val() > 0
		) {

			$('#calc_step_4').css({display: "none"});
			$('.calc__loading').css({display: "flex"});

			var circleProgress = (function(selector) {
				var wrapper = document.querySelectorAll(selector);
				Array.prototype.forEach.call(wrapper, function(wrapper, i) {
					var wrapperWidth,
					wrapperHeight,
					percent,
					innerHTML,
					context,
					lineWidth,
					centerX,
					centerY,
					radius,
					newPercent,
					speed,
					from,
					to,
					duration,
					start,
					strokeStyle,
					text;
			
				var getValues = function() {
					wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
					wrapperHeight = wrapperWidth;
					percent = wrapper.getAttribute('data-cp-percentage');
					innerHTML = '<span class="percentage"><strong>' + percent + '</strong> %</span><canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
					wrapper.innerHTML = innerHTML;
					text = wrapper.querySelector(".percentage");
					canvas = wrapper.querySelector(".circleProgressCanvas");
					wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
					context = canvas.getContext('2d');
					centerX = canvas.width / 2;
					centerY = canvas.height / 2;
					newPercent = 0;
					speed = 1;
					from = 0;
					to = percent;
					duration = 10000;
					lineWidth = 60;
					radius = canvas.width / 2 - lineWidth;
					strokeStyle = wrapper.getAttribute('data-cp-color');
					start = new Date().getTime();
				};

				function animate() {
					requestAnimationFrame(animate);
					var time = new Date().getTime() - start;
					if (time <= duration) {
						var x = easeInOutQuart(time, from, to - from, duration);
						newPercent = x;
						text.innerHTML = Math.round(newPercent) + " %";
						drawArc();
					}
				}
		  
				function drawArc() {
					var circleStart = 1.5 * Math.PI;
					var circleEnd = circleStart + (newPercent / 50) * Math.PI;
					context.clearRect(0, 0, canvas.width, canvas.height);
					context.beginPath();
					context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
					context.lineWidth = lineWidth;
					context.strokeStyle = "#ddd";
					context.stroke();
					context.beginPath();
					context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
					context.lineWidth = lineWidth;
					context.strokeStyle = strokeStyle;
					context.stroke();
				}
				var update = function() {
					getValues();
					animate();
				}
				update();
		  
				var resizeTimer;
				window.addEventListener("resize", function() {
				  clearTimeout(resizeTimer);
				  resizeTimer = setTimeout(function() {
					clearTimeout(resizeTimer);
					start = new Date().getTime();
					update();
				  }, 250);
				});
			  });
		  
				//
				// http://easings.net/#easeInOutQuart
				//  t: current time
				//  b: beginning value
				//  c: change in value
				//  d: duration
				//
				function easeInOutQuart(t, b, c, d) {
					if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
					return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
				}
		  
			});
		  
			circleProgress('.counter');
		  
			// Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
			function getRandom(min, max) {
				return Math.random() * (max - min) + min;
			}

			setTimeout(() => {
				$('.calc__loading').css({display: "none"});
				$('#calc_result').css({display: "block"});
				calculation();
			}, 11000);

		} else {
			alert("Пожалуйста заполните все поля!");
		}

	});

	function calculation() {

		var calc_sex = $('input[name=calc_sex]:checked').val();
		var calc_weight = $('#calc_weight').val();
		var calc_age = $('#calc_age').val();
		var calc_height = $('#calc_height').val();
		var calc_now = $('#calc_now').val();
		var calc_activity = $('input[name=calc_activity]').val();

		if ( calc_sex == 2 ) {
			var calc_BMR = ( 10 * +calc_now ) + ( 6.25 * +calc_height ) - ( 5 * +calc_age ) + 5;
		} else {
			var calc_BMR = ( 10 * +calc_now ) + ( 6.25 * +calc_height ) - ( 5 * +calc_age ) - 161;
		}

		console.log(calc_age);
		console.log(calc_height);
		console.log(calc_now);
		console.log(calc_activity);
		
		var calc_norma = +calc_BMR * +calc_activity;

		console.log(calc_norma);
		

		$('#weight_1').text( (+calc_now).toFixed(1) );
		$('#weight_2').text( (+calc_now * 0.990).toFixed(1) );
		$('#weight_3').text( (+calc_now * 0.98).toFixed(1) );
		$('#weight_4').text( (+calc_now * 0.975).toFixed(1) );

		$('#calc_calory').text( calc_norma + " ккал" );


		$('#result_kg_1').text( (calc_now * 0.005).toFixed(1) + " кг" );
		$('#result_kg_2').text( (calc_now * 0.01).toFixed(1) + " кг" );
		$('#result_kg_3').text( (calc_now * 0.015).toFixed(1) + " кг" );

		$('#result_calory_1').text( (calc_norma * 0.85).toFixed(0) + " ккал");
		$('#result_calory_2').text( (calc_norma * 0.75).toFixed(0) + " ккал");
		$('#result_calory_3').text( (calc_norma * 0.65).toFixed(0) + " ккал");


	}



	// for (i = 1; i <= 100; i++) {

		

	// 	setTimeout(function(){
			
	// 		var donut_bg = `radial-gradient(white 40%, transparent 41%), conic-gradient(#000 0% ${i}%, #FFEB3B ${i}% 100%)`;
	// 		$(".box").append(`<div style="transform: rotate(${i}deg);" class="block"></div>`);
	// 		$('.calc__donut').css({background: donut_bg});
		
	// 	}, (i * 1000));
		
		
	// }

});


