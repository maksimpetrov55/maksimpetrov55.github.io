$(document).ready(function() {

	$('.calc__add').click(function(){
		$('.calc__line--hidden:eq(0)').removeClass("calc__line--hidden");
		if ( $('.calc__line--hidden').length == 0 ) {
			$(this).css({display: "none"});
		}
	});

	// setTimeout(() => {
	// 	$('.calc__content').removeClass("calc__content--transform");
	// }, 300);

	$('#inp_mass').on("change", function(){
		if( $('#inp_mass').val() > 150 ) {
			$('#inp_mass').val(150);
		}
		if( $('#inp_mass').val() < 40 ) {
			$('#inp_mass').val(40);
		}
	});

	$('#inp_drink1_perc').on("change", function(){
		if( $('#inp_drink1_perc').val() > 100 ) {
			$('#inp_drink1_perc').val(100);
		}
	});

	$('#inp_drink2_perc').on("change", function(){
		if( $('#inp_drink2_perc').val() > 100 ) {
			$('#inp_drink2_perc').val(100);
		}
	});

	$('#inp_drink3_perc').on("change", function(){
		if( $('#inp_drink3_perc').val() > 100 ) {
			$('#inp_drink3_perc').val(100);
		}
	});


	$('.calc__btn').click(function(){
		calculate();
	});

	function calculate() {

		//$('.calc__img').delay(100).fadeOut(300);
		//$('.calc__result').delay(400).slideToggle(400);
		$('.calc__result').addClass("calc__result--show");

		var calcSex = $('input[name="calc_sex"]:checked').val();
		var calcEat = $('input[name="calc_eat"]:checked').val();

		var calcMass = $('#calc_mass').val();
		var calcHeight = $('#calc_height').val();

		var calcTime1 = $('#calc_time_1').val();
		var calcTime2 = $('#calc_time_2').val();

		var calcDrink1Perc = $('#calc_drink1_perc').val();
		var calcDrink2Perc = $('#calc_drink2_perc').val();
		var calcDrink3Perc = $('#calc_drink3_perc').val();
		var calcDrink4Perc = $('#calc_drink4_perc').val();
		var calcDrink5Perc = $('#calc_drink5_perc').val();

		var calcDrink1Ml = $('#calc_drink1_ml').val();
		var calcDrink2Ml = $('#calc_drink2_ml').val();
		var calcDrink3Ml = $('#calc_drink3_ml').val();
		var calcDrink4Ml = $('#calc_drink4_ml').val();
		var calcDrink5Ml = $('#calc_drink5_ml').val();

		var calcAir = 0.475;

		var calcDrink = 
		(calcDrink1Perc * calcDrink1Ml / 100) + 
		(calcDrink2Perc * calcDrink2Ml / 100) + 
		(calcDrink3Perc * calcDrink3Ml / 100) + 
		(calcDrink4Perc * calcDrink4Ml / 100) + 
		(calcDrink5Perc * calcDrink5Ml / 100);

		var calcAlco = ((calcDrink * 0.06 * 10 * 1.055) / (calcMass * calcSex) * calcEat) - ((+calcTime1 + +calcTime2) * 0.15);

		if ( calcAlco < 0 ) {
			calcAlco = 0;
		}

		console.log(calcAlco);
		

		$('#calc_promille').html( (+calcAlco.toFixed(2)).toLocaleString('ru') + " ‰" );

		$('#calc_mlnal').html( (+(calcAlco * calcAir).toFixed(2)).toLocaleString('ru') + " мг/л" );

		var calcTime = calcAlco / 0.13;
		var calcSplit = (calcTime.toFixed(4)).split(".");

		$('#calc_clear').html( calcSplit[0] + " ч " + " " + (calcSplit[1] / 10000 * 60).toFixed(0) + " мин" );

		// console.log("calcSex: " + calcSex);
		// console.log("calcEat: " + calcEat);
		// console.log("calcMass: " + calcMass);
		// console.log("calcHeight: " + calcHeight);
		// console.log("calcDrink1Perc: " + calcDrink1Perc);
		// console.log("calcDrink2Perc: " + calcDrink2Perc);
		// console.log("calcDrink3Perc: " + calcDrink3Perc);
		// console.log("calcDrink1Ml: " + calcDrink1Ml);
		// console.log("calcDrink2Ml: " + calcDrink2Ml);
		// console.log("calcDrink3Ml: " + calcDrink3Ml);

		if ( calcAlco == 0 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--0').css({display: "block"});
		}
		

		if ( calcAlco >= 01 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--01').css({display: "block"});
		}
		

		if ( calcAlco >= 03 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--03').css({display: "block"});
		}
		

		if ( calcAlco >= 06 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--06').css({display: "block"});
		}
		

		if ( calcAlco >= 1 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--1').css({display: "block"});
		}
		

		if ( calcAlco >= 2 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--2').css({display: "block"});
		}
		

		if ( calcAlco >= 3 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--3').css({display: "block"});
		}
		

		if ( calcAlco >= 4 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--4').css({display: "block"});
		}
		

		if ( calcAlco >= 5 ){
			$('.calc__text').css({display: "none"});
			$('.calc__text--5').css({display: "block"});
		}
		


	}

});