$(document).ready(function() {

	$('.calc__cell--height').click(function(e){
		$(this).addClass("calc__cell--open");
	});


	$('.calc__more').click(function(e){
		$(".calc__cloud").removeClass("calc__cloud--show");
		$(this).next().addClass("calc__cloud--show");
	});

	
	$('.calc__close').click(function(e){
		$(this).parent().removeClass("calc__cloud--show");
	});

	//$('.calc__slide--closed').slideToggle(0);

	$('.calc__text--slide').click(function(e){
		$(this).toggleClass("calc__text--slide--open");
		$(this).next().slideToggle( 500 );
	});

	calculation();

	$(".calc__input").on('input', function () {
		calculation();
	});

	function calculation() {

		//row 1
		var inp_1_1 = $('#inp_1_1').val();
		var inp_1_2 = $('#inp_1_2').val();
		var inp_1_3 = $('#inp_1_3').val();
		var inp_1_4 = $('#inp_1_4').val();

		var cell_1_7 = $('#cell_1_7').html();
		$('#cell_1_8').html( (cell_1_7 / 100) );
		$('#cell_1_10').html( inp_1_1 * inp_1_2 * inp_1_3 );
		var cell_1_8 = $('#cell_1_8').html();
		var cell_1_10 = $('#cell_1_10').html();
		$('#cell_1_12').html( (cell_1_8 * cell_1_10).toFixed(4) );
		var cell_1_12 = $('#cell_1_12').html();
		$('#cell_1_13').html( (inp_1_4 * cell_1_12).toFixed(4) );
		//row 1

		//row 2
		var inp_2_1 = $('#inp_2_1').val();
		var inp_2_2 = $('#inp_2_2').val();
		var inp_2_3 = $('#inp_2_3').val();
		var inp_2_4 = $('#inp_2_4').val();

		var cell_2_7 = $('#cell_2_7').html();
		$('#cell_2_8').html( (cell_2_7 / 100) );
		$('#cell_2_10').html( inp_2_1 * inp_2_2 * inp_2_3 );
		var cell_2_8 = $('#cell_2_8').html();
		var cell_2_10 = $('#cell_2_10').html();
		$('#cell_2_12').html( (cell_2_8 * cell_2_10).toFixed(4) );
		var cell_2_12 = $('#cell_2_12').html();
		$('#cell_2_13').html( (inp_2_4 * cell_2_12).toFixed(4) );
		//row 2

		//row 3
		var inp_3_1 = $('#inp_3_1').val();
		var inp_3_2 = $('#inp_3_2').val();
		var inp_3_3 = $('#inp_3_3').val();
		var inp_3_4 = $('#inp_3_4').val();

		var cell_3_7 = $('#cell_3_7').html();
		$('#cell_3_8').html( (cell_3_7 / 100) );
		$('#cell_3_10').html( inp_3_1 * inp_3_2 * inp_3_3 );
		var cell_3_8 = $('#cell_3_8').html();
		var cell_3_10 = $('#cell_3_10').html();
		$('#cell_3_12').html( (cell_3_8 * cell_3_10).toFixed(4) );
		var cell_3_12 = $('#cell_3_12').html();
		$('#cell_3_13').html( (inp_3_4 * cell_3_12).toFixed(4) );
		//row 3

		//row 4
		var inp_4_1 = $('#inp_4_1').val();
		var inp_4_2 = $('#inp_4_2').val();
		var inp_4_3 = $('#inp_4_3').val();
		var inp_4_4 = $('#inp_4_4').val();

		var cell_4_7 = $('#cell_4_7').html();
		$('#cell_4_8').html( (cell_4_7 / 100) );
		$('#cell_4_10').html( inp_4_1 * inp_4_2 * inp_4_3 );
		var cell_4_8 = $('#cell_4_8').html();
		var cell_4_10 = $('#cell_4_10').html();
		$('#cell_4_12').html( (cell_4_8 * cell_4_10).toFixed(4) );
		var cell_4_12 = $('#cell_4_12').html();
		$('#cell_4_13').html( (inp_4_4 * cell_4_12).toFixed(4) );
		//row 4

		//row 5
		var inp_5_1 = $('#inp_5_1').val();
		var inp_5_2 = $('#inp_5_2').val();
		var inp_5_3 = $('#inp_5_3').val();
		var inp_5_4 = $('#inp_5_4').val();

		var cell_5_7 = $('#cell_5_7').html();
		$('#cell_5_8').html( (cell_5_7 / 100) );
		$('#cell_5_10').html( inp_5_1 * inp_5_2 * inp_5_3 );
		var cell_5_8 = $('#cell_5_8').html();
		var cell_5_10 = $('#cell_5_10').html();
		$('#cell_5_12').html( (cell_5_8 * cell_5_10).toFixed(4) );
		var cell_5_12 = $('#cell_5_12').html();
		$('#cell_5_13').html( (inp_5_4 * cell_5_12).toFixed(4) );
		//row 5

		//row 6
		var inp_6_1 = $('#inp_6_1').val();
		var inp_6_2 = $('#inp_6_2').val();
		var inp_6_3 = $('#inp_6_3').val();
		var inp_6_4 = $('#inp_6_4').val();

		var cell_6_7 = $('#cell_6_7').html();
		$('#cell_6_8').html( (cell_6_7 / 100) );
		$('#cell_6_10').html( inp_6_1 * inp_6_2 * inp_6_3 );
		var cell_6_8 = $('#cell_6_8').html();
		var cell_6_10 = $('#cell_6_10').html();
		$('#cell_6_12').html( (cell_6_8 * cell_6_10).toFixed(4) );
		var cell_6_12 = $('#cell_6_12').html();
		$('#cell_6_13').html( (inp_6_4 * cell_6_12).toFixed(4) );
		//row 6

		//row 7
		var inp_7_1 = $('#inp_7_1').val();
		var inp_7_2 = $('#inp_7_2').val();
		var inp_7_3 = $('#inp_7_3').val();
		var inp_7_4 = $('#inp_7_4').val();

		var cell_7_7 = $('#cell_7_7').html();
		$('#cell_7_8').html( (cell_7_7 / 100) );
		$('#cell_7_10').html( inp_7_1 * inp_7_2 * inp_7_3 );
		var cell_7_8 = $('#cell_7_8').html();
		var cell_7_10 = $('#cell_7_10').html();
		$('#cell_7_12').html( (cell_7_8 * cell_7_10).toFixed(4) );
		var cell_7_12 = $('#cell_7_12').html();
		$('#cell_7_13').html( (inp_7_4 * cell_7_12).toFixed(4) );
		//row 7

		//row 8
		var inp_8_1 = $('#inp_8_1').val();
		var inp_8_2 = $('#inp_8_2').val();
		var inp_8_3 = $('#inp_8_3').val();
		var inp_8_4 = $('#inp_8_4').val();

		var cell_8_7 = $('#cell_8_7').html();
		$('#cell_8_8').html( (cell_8_7 / 100) );
		$('#cell_8_10').html( inp_8_1 * inp_8_2 * inp_8_3 );
		var cell_8_8 = $('#cell_8_8').html();
		var cell_8_10 = $('#cell_8_10').html();
		$('#cell_8_12').html( (cell_8_8 * cell_8_10).toFixed(4) );
		var cell_8_12 = $('#cell_8_12').html();
		$('#cell_8_13').html( (inp_8_4 * cell_8_12).toFixed(4) );
		//row 8

		//row 9
		var inp_9_1 = $('#inp_9_1').val();
		var inp_9_2 = $('#inp_9_2').val();
		var inp_9_3 = $('#inp_9_3').val();
		var inp_9_4 = $('#inp_9_4').val();

		var cell_9_7 = $('#cell_9_7').html();
		$('#cell_9_8').html( (cell_9_7 / 100) );
		$('#cell_9_10').html( inp_9_1 * inp_9_2 * inp_9_3 );
		var cell_9_8 = $('#cell_9_8').html();
		var cell_9_10 = $('#cell_9_10').html();
		$('#cell_9_12').html( (cell_9_8 * cell_9_10).toFixed(4) );
		var cell_9_12 = $('#cell_9_12').html();
		$('#cell_9_13').html( (inp_9_4 * cell_9_12).toFixed(4) );
		//row 9

		//row 10
		var inp_10_1 = $('#inp_10_1').val();
		var inp_10_2 = $('#inp_10_2').val();
		var inp_10_3 = $('#inp_10_3').val();
		var inp_10_4 = $('#inp_10_4').val();

		var cell_10_7 = $('#cell_10_7').html();
		$('#cell_10_8').html( (cell_10_7 / 100) );
		$('#cell_10_10').html( inp_10_1 * inp_10_2 * inp_10_3 );
		var cell_10_8 = $('#cell_10_8').html();
		var cell_10_10 = $('#cell_10_10').html();
		$('#cell_10_12').html( (cell_10_8 * cell_10_10).toFixed(4) );
		var cell_10_12 = $('#cell_10_12').html();
		$('#cell_10_13').html( (inp_10_4 * cell_10_12).toFixed(4) );
		//row 10

		//row 11
		var inp_11_1 = $('#inp_11_1').val();
		var inp_11_2 = $('#inp_11_2').val();
		var inp_11_3 = $('#inp_11_3').val();
		var inp_11_4 = $('#inp_11_4').val();

		var cell_11_7 = $('#cell_11_7').html();
		$('#cell_11_8').html( (cell_11_7 / 100) );
		$('#cell_11_10').html( inp_11_1 * inp_11_2 * inp_11_3 );
		var cell_11_8 = $('#cell_11_8').html();
		var cell_11_10 = $('#cell_11_10').html();
		$('#cell_11_12').html( (cell_11_8 * cell_11_10).toFixed(4) );
		var cell_11_12 = $('#cell_11_12').html();
		$('#cell_11_13').html( (inp_11_4 * cell_11_12).toFixed(4) );
		//row 11

		//row 12
		var inp_12_1 = $('#inp_12_1').val();
		var inp_12_2 = $('#inp_12_2').val();
		var inp_12_3 = $('#inp_12_3').val();
		var inp_12_4 = $('#inp_12_4').val();

		var cell_12_7 = $('#cell_12_7').html();
		$('#cell_12_8').html( (cell_12_7 / 100) );
		$('#cell_12_10').html( inp_12_1 * inp_12_2 * inp_12_3 );
		var cell_12_8 = $('#cell_12_8').html();
		var cell_12_10 = $('#cell_12_10').html();
		$('#cell_12_12').html( (cell_12_8 * cell_12_10).toFixed(4) );
		var cell_12_12 = $('#cell_12_12').html();
		$('#cell_12_13').html( (inp_12_4 * cell_12_12).toFixed(4) );
		//row 12

		//row 13
		var inp_13_1 = $('#inp_13_1').val();
		var inp_13_2 = $('#inp_13_2').val();
		var inp_13_3 = $('#inp_13_3').val();
		var inp_13_4 = $('#inp_13_4').val();

		var cell_13_7 = $('#cell_13_7').html();
		$('#cell_13_8').html( (cell_13_7 / 100) );
		$('#cell_13_10').html( inp_13_1 * inp_13_2 * inp_13_3 );
		var cell_13_8 = $('#cell_13_8').html();
		var cell_13_10 = $('#cell_13_10').html();
		$('#cell_13_12').html( (cell_13_8 * cell_13_10).toFixed(4) );
		var cell_13_12 = $('#cell_13_12').html();
		$('#cell_13_13').html( (inp_13_4 * cell_13_12).toFixed(4) );
		//row 13

		//row 14
		var inp_14_1 = $('#inp_14_1').val();
		var inp_14_2 = $('#inp_14_2').val();
		var inp_14_3 = $('#inp_14_3').val();
		var inp_14_4 = $('#inp_14_4').val();

		var cell_14_7 = $('#cell_14_7').html();
		$('#cell_14_8').html( (cell_14_7 / 100) );
		$('#cell_14_10').html( inp_14_1 * inp_14_2 * inp_14_3 );
		var cell_14_8 = $('#cell_14_8').html();
		var cell_14_10 = $('#cell_14_10').html();
		$('#cell_14_12').html( (cell_14_8 * cell_14_10).toFixed(4) );
		var cell_14_12 = $('#cell_14_12').html();
		$('#cell_14_13').html( (inp_14_4 * cell_14_12).toFixed(4) );
		//row 14

		//row 15
		var inp_15_1 = $('#inp_15_1').val();
		var inp_15_2 = $('#inp_15_2').val();
		var inp_15_3 = $('#inp_15_3').val();
		var inp_15_4 = $('#inp_15_4').val();

		var cell_15_7 = $('#cell_15_7').html();
		$('#cell_15_8').html( (cell_15_7 / 100) );
		$('#cell_15_10').html( inp_15_1 * inp_15_2 * inp_15_3 );
		var cell_15_8 = $('#cell_15_8').html();
		var cell_15_10 = $('#cell_15_10').html();
		$('#cell_15_12').html( (cell_15_8 * cell_15_10).toFixed(4) );
		var cell_15_12 = $('#cell_15_12').html();
		$('#cell_15_13').html( (inp_15_4 * cell_15_12).toFixed(4) );
		//row 15

		//row 16
		var inp_16_1 = $('#inp_16_1').val();
		var inp_16_2 = $('#inp_16_2').val();
		var inp_16_3 = $('#inp_16_3').val();
		var inp_16_4 = $('#inp_16_4').val();

		var cell_16_7 = $('#cell_16_7').html();
		$('#cell_16_8').html( (cell_16_7 / 100) );
		$('#cell_16_10').html( inp_16_1 * inp_16_2 * inp_16_3 );
		var cell_16_8 = $('#cell_16_8').html();
		var cell_16_10 = $('#cell_16_10').html();
		$('#cell_16_12').html( (cell_16_8 * cell_16_10).toFixed(4) );
		var cell_16_12 = $('#cell_16_12').html();
		$('#cell_16_13').html( (inp_16_4 * cell_16_12).toFixed(4) );
		//row 16

		//row 17
		var inp_17_1 = $('#inp_17_1').val();
		var inp_17_2 = $('#inp_17_2').val();
		var inp_17_3 = $('#inp_17_3').val();
		var inp_17_4 = $('#inp_17_4').val();

		var cell_17_7 = $('#cell_17_7').html();
		$('#cell_17_8').html( (cell_17_7 / 100) );
		$('#cell_17_10').html( inp_17_1 * inp_17_2 * inp_17_3 );
		var cell_17_8 = $('#cell_17_8').html();
		var cell_17_10 = $('#cell_17_10').html();
		$('#cell_17_12').html( (cell_17_8 * cell_17_10).toFixed(4) );
		var cell_17_12 = $('#cell_17_12').html();
		$('#cell_17_13').html( (inp_17_4 * cell_17_12).toFixed(4) );
		//row 17

		//row 18
		var inp_18_1 = $('#inp_18_1').val();
		var inp_18_2 = $('#inp_18_2').val();
		var inp_18_3 = $('#inp_18_3').val();
		var inp_18_4 = $('#inp_18_4').val();

		var cell_18_7 = $('#cell_18_7').html();
		$('#cell_18_8').html( (cell_18_7 / 100) );
		$('#cell_18_10').html( inp_18_1 * inp_18_2 * inp_18_3 );
		var cell_18_8 = $('#cell_18_8').html();
		var cell_18_10 = $('#cell_18_10').html();
		$('#cell_18_12').html( (cell_18_8 * cell_18_10).toFixed(4) );
		var cell_18_12 = $('#cell_18_12').html();
		$('#cell_18_13').html( (inp_18_4 * cell_18_12).toFixed(4) );
		//row 18

		//row 19
		var inp_19_1 = $('#inp_19_1').val();
		var inp_19_2 = $('#inp_19_2').val();
		var inp_19_3 = $('#inp_19_3').val();
		var inp_19_4 = $('#inp_19_4').val();

		var cell_19_7 = $('#cell_19_7').html();
		$('#cell_19_8').html( (cell_19_7 / 100) );
		$('#cell_19_10').html( inp_19_1 * inp_19_2 * inp_19_3 );
		var cell_19_8 = $('#cell_19_8').html();
		var cell_19_10 = $('#cell_19_10').html();
		$('#cell_19_12').html( (cell_19_8 * cell_19_10).toFixed(4) );
		var cell_19_12 = $('#cell_19_12').html();
		$('#cell_19_13').html( (inp_19_4 * cell_19_12).toFixed(4) );
		//row 19

		//row 20
		var inp_20_1 = $('#inp_20_1').val();
		var inp_20_2 = $('#inp_20_2').val();
		var inp_20_3 = $('#inp_20_3').val();
		var inp_20_4 = $('#inp_20_4').val();

		var cell_20_7 = $('#cell_20_7').html();
		$('#cell_20_8').html( (cell_20_7 / 100) );
		$('#cell_20_10').html( inp_20_1 * inp_20_2 * inp_20_3 );
		var cell_20_8 = $('#cell_20_8').html();
		var cell_20_10 = $('#cell_20_10').html();
		$('#cell_20_12').html( (cell_20_8 * cell_20_10).toFixed(4) );
		var cell_20_12 = $('#cell_20_12').html();
		$('#cell_20_13').html( (inp_20_4 * cell_20_12).toFixed(4) );
		//row 20

		//row 21
		var inp_21_1 = $('#inp_21_1').val();
		var inp_21_2 = $('#inp_21_2').val();
		var inp_21_3 = $('#inp_21_3').val();
		var inp_21_4 = $('#inp_21_4').val();

		var cell_21_7 = $('#cell_21_7').html();
		$('#cell_21_8').html( (cell_21_7 / 100) );
		$('#cell_21_10').html( inp_21_1 * inp_21_2 * inp_21_3 );
		var cell_21_8 = $('#cell_21_8').html();
		var cell_21_10 = $('#cell_21_10').html();
		$('#cell_21_12').html( (cell_21_8 * cell_21_10).toFixed(4) );
		var cell_21_12 = $('#cell_21_12').html();
		$('#cell_21_13').html( (inp_21_4 * cell_21_12).toFixed(4) );
		//row 21

		//row 22
		var inp_22_1 = $('#inp_22_1').val();
		var inp_22_2 = $('#inp_22_2').val();
		var inp_22_3 = $('#inp_22_3').val();
		var inp_22_4 = $('#inp_22_4').val();

		var cell_22_7 = $('#cell_22_7').html();
		$('#cell_22_8').html( (cell_22_7 / 100) );
		$('#cell_22_10').html( inp_22_1 * inp_22_2 * inp_22_3 );
		var cell_22_8 = $('#cell_22_8').html();
		var cell_22_10 = $('#cell_22_10').html();
		$('#cell_22_12').html( (cell_22_8 * cell_22_10).toFixed(4) );
		var cell_22_12 = $('#cell_22_12').html();
		$('#cell_22_13').html( (inp_22_4 * cell_22_12).toFixed(4) );
		//row 22

		//row 23
		var inp_23_1 = $('#inp_23_1').val();
		var inp_23_2 = $('#inp_23_2').val();
		var inp_23_3 = $('#inp_23_3').val();
		var inp_23_4 = $('#inp_23_4').val();

		var cell_23_7 = $('#cell_23_7').html();
		$('#cell_23_8').html( (cell_23_7 / 100) );
		$('#cell_23_10').html( inp_23_1 * inp_23_2 * inp_23_3 );
		var cell_23_8 = $('#cell_23_8').html();
		var cell_23_10 = $('#cell_23_10').html();
		$('#cell_23_12').html( (cell_23_8 * cell_23_10).toFixed(4) );
		var cell_23_12 = $('#cell_23_12').html();
		$('#cell_23_13').html( (inp_23_4 * cell_23_12).toFixed(4) );
		//row 23

		//row 24
		var inp_24_1 = $('#inp_24_1').val();
		var inp_24_2 = $('#inp_24_2').val();
		var inp_24_3 = $('#inp_24_3').val();
		var inp_24_4 = $('#inp_24_4').val();

		var cell_24_7 = $('#cell_24_7').html();
		$('#cell_24_8').html( (cell_24_7 / 100) );
		$('#cell_24_10').html( inp_24_1 * inp_24_2 * inp_24_3 );
		var cell_24_8 = $('#cell_24_8').html();
		var cell_24_10 = $('#cell_24_10').html();
		$('#cell_24_12').html( (cell_24_8 * cell_24_10).toFixed(4) );
		var cell_24_12 = $('#cell_24_12').html();
		$('#cell_24_13').html( (inp_24_4 * cell_24_12).toFixed(4) );
		//row 24

		//row 25
		var inp_25_1 = $('#inp_25_1').val();
		var inp_25_2 = $('#inp_25_2').val();
		var inp_25_3 = $('#inp_25_3').val();
		var inp_25_4 = $('#inp_25_4').val();

		var cell_25_7 = $('#cell_25_7').html();
		$('#cell_25_8').html( (cell_25_7 / 100) );
		$('#cell_25_10').html( inp_25_1 * inp_25_2 * inp_25_3 );
		var cell_25_8 = $('#cell_25_8').html();
		var cell_25_10 = $('#cell_25_10').html();
		$('#cell_25_12').html( (cell_25_8 * cell_25_10).toFixed(4) );
		var cell_25_12 = $('#cell_25_12').html();
		$('#cell_25_13').html( (inp_25_4 * cell_25_12).toFixed(4) );
		//row 25

		//row 26
		var inp_26_1 = $('#inp_26_1').val();
		var inp_26_2 = $('#inp_26_2').val();
		var inp_26_3 = $('#inp_26_3').val();
		var inp_26_4 = $('#inp_26_4').val();

		var cell_26_7 = $('#cell_26_7').html();
		$('#cell_26_8').html( (cell_26_7 / 100) );
		$('#cell_26_10').html( inp_26_1 * inp_26_2 * inp_26_3 );
		var cell_26_8 = $('#cell_26_8').html();
		var cell_26_10 = $('#cell_26_10').html();
		$('#cell_26_12').html( (cell_26_8 * cell_26_10).toFixed(4) );
		var cell_26_12 = $('#cell_26_12').html();
		$('#cell_26_13').html( (inp_26_4 * cell_26_12).toFixed(4) );
		//row 26

		//row 27
		var inp_27_1 = $('#inp_27_1').val();
		var inp_27_2 = $('#inp_27_2').val();
		var inp_27_3 = $('#inp_27_3').val();
		var inp_27_4 = $('#inp_27_4').val();

		var cell_27_7 = $('#cell_27_7').html();
		$('#cell_27_8').html( (cell_27_7 / 100) );
		$('#cell_27_10').html( inp_27_1 * inp_27_2 * inp_27_3 );
		var cell_27_8 = $('#cell_27_8').html();
		var cell_27_10 = $('#cell_27_10').html();
		$('#cell_27_12').html( (cell_27_8 * cell_27_10).toFixed(4) );
		var cell_27_12 = $('#cell_27_12').html();
		$('#cell_27_13').html( (inp_27_4 * cell_27_12).toFixed(4) );
		//row 27

		//row 28
		var inp_28_1 = $('#inp_28_1').val();
		var inp_28_2 = $('#inp_28_2').val();
		var inp_28_3 = $('#inp_28_3').val();
		var inp_28_4 = $('#inp_28_4').val();

		var cell_28_7 = $('#cell_28_7').html();
		$('#cell_28_8').html( (cell_28_7 / 100) );
		$('#cell_28_10').html( inp_28_1 * inp_28_2 * inp_28_3 );
		var cell_28_8 = $('#cell_28_8').html();
		var cell_28_10 = $('#cell_28_10').html();
		$('#cell_28_12').html( (cell_28_8 * cell_28_10).toFixed(4) );
		var cell_28_12 = $('#cell_28_12').html();
		$('#cell_28_13').html( (inp_28_4 * cell_28_12).toFixed(4) );
		//row 28

		//row 29
		var inp_29_1 = $('#inp_29_1').val();
		var inp_29_2 = $('#inp_29_2').val();
		var inp_29_3 = $('#inp_29_3').val();
		var inp_29_4 = $('#inp_29_4').val();

		var cell_29_7 = $('#cell_29_7').html();
		$('#cell_29_8').html( (cell_29_7 / 100) );
		$('#cell_29_10').html( inp_29_1 * inp_29_2 * inp_29_3 );
		var cell_29_8 = $('#cell_29_8').html();
		var cell_29_10 = $('#cell_29_10').html();
		$('#cell_29_12').html( (cell_29_8 * cell_29_10).toFixed(4) );
		var cell_29_12 = $('#cell_29_12').html();
		$('#cell_29_13').html( (inp_29_4 * cell_29_12).toFixed(4) );
		//row 29

		//row 30
		var inp_30_1 = $('#inp_30_1').val();
		var inp_30_2 = $('#inp_30_2').val();
		var inp_30_3 = $('#inp_30_3').val();
		var inp_30_4 = $('#inp_30_4').val();

		var cell_30_7 = $('#cell_30_7').html();
		$('#cell_30_8').html( (cell_30_7 / 100) );
		$('#cell_30_10').html( inp_30_1 * inp_30_2 * inp_30_3 );
		var cell_30_8 = $('#cell_30_8').html();
		var cell_30_10 = $('#cell_30_10').html();
		$('#cell_30_12').html( (cell_30_8 * cell_30_10).toFixed(4) );
		var cell_30_12 = $('#cell_30_12').html();
		$('#cell_30_13').html( (inp_30_4 * cell_30_12).toFixed(4) );
		//row 30

		//row 31
		var inp_31_1 = $('#inp_31_1').val();
		var inp_31_2 = $('#inp_31_2').val();
		var inp_31_3 = $('#inp_31_3').val();
		var inp_31_4 = $('#inp_31_4').val();

		var cell_31_7 = $('#cell_31_7').html();
		$('#cell_31_8').html( (cell_31_7 / 100) );
		$('#cell_31_10').html( inp_31_1 * inp_31_2 * inp_31_3 );
		var cell_31_8 = $('#cell_31_8').html();
		var cell_31_10 = $('#cell_31_10').html();
		$('#cell_31_12').html( (cell_31_8 * cell_31_10).toFixed(4) );
		var cell_31_12 = $('#cell_31_12').html();
		$('#cell_31_13').html( (inp_31_4 * cell_31_12).toFixed(4) );
		//row 31

		//row 32
		var inp_32_1 = $('#inp_32_1').val();
		var inp_32_2 = $('#inp_32_2').val();
		var inp_32_3 = $('#inp_32_3').val();
		var inp_32_4 = $('#inp_32_4').val();

		var cell_32_7 = $('#cell_32_7').html();
		$('#cell_32_8').html( (cell_32_7 / 100) );
		$('#cell_32_10').html( inp_32_1 * inp_32_2 * inp_32_3 );
		var cell_32_8 = $('#cell_32_8').html();
		var cell_32_10 = $('#cell_32_10').html();
		$('#cell_32_12').html( (cell_32_8 * cell_32_10).toFixed(4) );
		var cell_32_12 = $('#cell_32_12').html();
		$('#cell_32_13').html( (inp_32_4 * cell_32_12).toFixed(4) );
		//row 32

		//row 33
		var inp_33_1 = $('#inp_33_1').val();
		var inp_33_2 = $('#inp_33_2').val();
		var inp_33_3 = $('#inp_33_3').val();
		var inp_33_4 = $('#inp_33_4').val();

		var cell_33_7 = $('#cell_33_7').html();
		$('#cell_33_8').html( (cell_33_7 / 100) );
		$('#cell_33_10').html( inp_33_1 * inp_33_2 * inp_33_3 );
		var cell_33_8 = $('#cell_33_8').html();
		var cell_33_10 = $('#cell_33_10').html();
		$('#cell_33_12').html( (cell_33_8 * cell_33_10).toFixed(4) );
		var cell_33_12 = $('#cell_33_12').html();
		$('#cell_33_13').html( (inp_33_4 * cell_33_12).toFixed(4) );
		//row 33

		//row 34
		var inp_34_1 = $('#inp_34_1').val();
		var inp_34_2 = $('#inp_34_2').val();
		var inp_34_3 = $('#inp_34_3').val();
		var inp_34_4 = $('#inp_34_4').val();

		var cell_34_7 = $('#cell_34_7').html();
		$('#cell_34_8').html( (cell_34_7 / 100) );
		$('#cell_34_10').html( inp_34_1 * inp_34_2 * inp_34_3 );
		var cell_34_8 = $('#cell_34_8').html();
		var cell_34_10 = $('#cell_34_10').html();
		$('#cell_34_12').html( (cell_34_8 * cell_34_10).toFixed(4) );
		var cell_34_12 = $('#cell_34_12').html();
		$('#cell_34_13').html( (inp_34_4 * cell_34_12).toFixed(4) );
		//row 34

		//row 35
		var inp_35_1 = $('#inp_35_1').val();
		var inp_35_2 = $('#inp_35_2').val();
		var inp_35_3 = $('#inp_35_3').val();
		var inp_35_4 = $('#inp_35_4').val();

		var cell_35_7 = $('#cell_35_7').html();
		$('#cell_35_8').html( (cell_35_7 / 100) );
		$('#cell_35_10').html( inp_35_1 * inp_35_2 * inp_35_3 );
		var cell_35_8 = $('#cell_35_8').html();
		var cell_35_10 = $('#cell_35_10').html();
		$('#cell_35_12').html( (cell_35_8 * cell_35_10).toFixed(4) );
		var cell_35_12 = $('#cell_35_12').html();
		$('#cell_35_13').html( (inp_35_4 * cell_35_12).toFixed(4) );
		//row 35

		//row 36
		var inp_36_1 = $('#inp_36_1').val();
		var inp_36_2 = $('#inp_36_2').val();
		var inp_36_3 = $('#inp_36_3').val();
		var inp_36_4 = $('#inp_36_4').val();

		var cell_36_7 = $('#cell_36_7').html();
		$('#cell_36_8').html( (cell_36_7 / 100) );
		$('#cell_36_10').html( inp_36_1 * inp_36_2 * inp_36_3 );
		var cell_36_8 = $('#cell_36_8').html();
		var cell_36_10 = $('#cell_36_10').html();
		$('#cell_36_12').html( (cell_36_8 * cell_36_10).toFixed(4) );
		var cell_36_12 = $('#cell_36_12').html();
		$('#cell_36_13').html( (inp_36_4 * cell_36_12).toFixed(4) );
		//row 36

		//row 37
		var inp_37_1 = $('#inp_37_1').val();
		var inp_37_2 = $('#inp_37_2').val();
		var inp_37_3 = $('#inp_37_3').val();
		var inp_37_4 = $('#inp_37_4').val();

		var cell_37_7 = $('#cell_37_7').html();
		$('#cell_37_8').html( (cell_37_7 / 100) );
		$('#cell_37_10').html( inp_37_1 * inp_37_2 * inp_37_3 );
		var cell_37_8 = $('#cell_37_8').html();
		var cell_37_10 = $('#cell_37_10').html();
		$('#cell_37_12').html( (cell_37_8 * cell_37_10).toFixed(4) );
		var cell_37_12 = $('#cell_37_12').html();
		$('#cell_37_13').html( (inp_37_4 * cell_37_12).toFixed(4) );
		//row 37

		//row 38
		var inp_38_1 = $('#inp_38_1').val();
		var inp_38_2 = $('#inp_38_2').val();
		var inp_38_3 = $('#inp_38_3').val();
		var inp_38_4 = $('#inp_38_4').val();

		var cell_38_7 = $('#cell_38_7').html();
		$('#cell_38_8').html( (cell_38_7 / 100) );
		$('#cell_38_10').html( inp_38_1 * inp_38_2 * inp_38_3 );
		var cell_38_8 = $('#cell_38_8').html();
		var cell_38_10 = $('#cell_38_10').html();
		$('#cell_38_12').html( (cell_38_8 * cell_38_10).toFixed(4) );
		var cell_38_12 = $('#cell_38_12').html();
		$('#cell_38_13').html( (inp_38_4 * cell_38_12).toFixed(4) );
		//row 38

		//row 39
		var inp_39_1 = $('#inp_39_1').val();
		var inp_39_2 = $('#inp_39_2').val();
		var inp_39_3 = $('#inp_39_3').val();
		var inp_39_4 = $('#inp_39_4').val();

		var cell_39_7 = $('#cell_39_7').html();
		$('#cell_39_8').html( (cell_39_7 / 100) );
		$('#cell_39_10').html( inp_39_1 * inp_39_2 * inp_39_3 );
		var cell_39_8 = $('#cell_39_8').html();
		var cell_39_10 = $('#cell_39_10').html();
		$('#cell_39_12').html( (cell_39_8 * cell_39_10).toFixed(4) );
		var cell_39_12 = $('#cell_39_12').html();
		$('#cell_39_13').html( (inp_39_4 * cell_39_12).toFixed(4) );
		//row 39

		//row 40
		var inp_40_1 = $('#inp_40_1').val();
		var inp_40_2 = $('#inp_40_2').val();
		var inp_40_3 = $('#inp_40_3').val();
		var inp_40_4 = $('#inp_40_4').val();

		var cell_40_7 = $('#cell_40_7').html();
		$('#cell_40_8').html( (cell_40_7 / 100) );
		$('#cell_40_10').html( inp_40_1 * inp_40_2 * inp_40_3 );
		var cell_40_8 = $('#cell_40_8').html();
		var cell_40_10 = $('#cell_40_10').html();
		$('#cell_40_12').html( (cell_40_8 * cell_40_10).toFixed(4) );
		var cell_40_12 = $('#cell_40_12').html();
		$('#cell_40_13').html( (inp_40_4 * cell_40_12).toFixed(4) );
		//row 40

		//row 41
		var inp_41_1 = $('#inp_41_1').val();
		var inp_41_2 = $('#inp_41_2').val();
		var inp_41_3 = $('#inp_41_3').val();
		var inp_41_4 = $('#inp_41_4').val();

		var cell_41_7 = $('#cell_41_7').html();
		$('#cell_41_8').html( (cell_41_7 / 100) );
		$('#cell_41_10').html( inp_41_1 * inp_41_2 * inp_41_3 );
		var cell_41_8 = $('#cell_41_8').html();
		var cell_41_10 = $('#cell_41_10').html();
		$('#cell_41_12').html( (cell_41_8 * cell_41_10).toFixed(4) );
		var cell_41_12 = $('#cell_41_12').html();
		$('#cell_41_13').html( (inp_41_4 * cell_41_12).toFixed(4) );
		//row 41

		//row 42
		var inp_42_1 = $('#inp_42_1').val();
		var inp_42_2 = $('#inp_42_2').val();
		var inp_42_3 = $('#inp_42_3').val();
		var inp_42_4 = $('#inp_42_4').val();

		var cell_42_7 = $('#cell_42_7').html();
		$('#cell_42_8').html( (cell_42_7 / 100) );
		$('#cell_42_10').html( inp_42_1 * inp_42_2 * inp_42_3 );
		var cell_42_8 = $('#cell_42_8').html();
		var cell_42_10 = $('#cell_42_10').html();
		$('#cell_42_12').html( (cell_42_8 * cell_42_10).toFixed(4) );
		var cell_42_12 = $('#cell_42_12').html();
		$('#cell_42_13').html( (inp_42_4 * cell_42_12).toFixed(4) );
		//row 42

		//row 43
		var inp_43_1 = $('#inp_43_1').val();
		var inp_43_2 = $('#inp_43_2').val();
		var inp_43_3 = $('#inp_43_3').val();
		var inp_43_4 = $('#inp_43_4').val();

		var cell_43_7 = $('#cell_43_7').html();
		$('#cell_43_8').html( (cell_43_7 / 100) );
		$('#cell_43_10').html( inp_43_1 * inp_43_2 * inp_43_3 );
		var cell_43_8 = $('#cell_43_8').html();
		var cell_43_10 = $('#cell_43_10').html();
		$('#cell_43_12').html( (cell_43_8 * cell_43_10).toFixed(4) );
		var cell_43_12 = $('#cell_43_12').html();
		$('#cell_43_13').html( (inp_43_4 * cell_43_12).toFixed(4) );
		//row 43

		//row 44
		var inp_44_1 = $('#inp_44_1').val();
		var inp_44_2 = $('#inp_44_2').val();
		var inp_44_3 = $('#inp_44_3').val();
		var inp_44_4 = $('#inp_44_4').val();

		var cell_44_7 = $('#cell_44_7').html();
		$('#cell_44_8').html( (cell_44_7 / 100) );
		$('#cell_44_10').html( inp_44_1 * inp_44_2 * inp_44_3 );
		var cell_44_8 = $('#cell_44_8').html();
		var cell_44_10 = $('#cell_44_10').html();
		$('#cell_44_12').html( (cell_44_8 * cell_44_10).toFixed(4) );
		var cell_44_12 = $('#cell_44_12').html();
		$('#cell_44_13').html( (inp_44_4 * cell_44_12).toFixed(4) );
		//row 44

		//row 45
		var inp_45_1 = $('#inp_45_1').val();
		var inp_45_2 = $('#inp_45_2').val();
		var inp_45_3 = $('#inp_45_3').val();
		var inp_45_4 = $('#inp_45_4').val();

		var cell_45_7 = $('#cell_45_7').html();
		$('#cell_45_8').html( (cell_45_7 / 100) );
		$('#cell_45_10').html( inp_45_1 * inp_45_2 * inp_45_3 );
		var cell_45_8 = $('#cell_45_8').html();
		var cell_45_10 = $('#cell_45_10').html();
		$('#cell_45_12').html( (cell_45_8 * cell_45_10).toFixed(4) );
		var cell_45_12 = $('#cell_45_12').html();
		$('#cell_45_13').html( (inp_45_4 * cell_45_12).toFixed(4) );
		//row 45

		//row 46
		var inp_46_1 = $('#inp_46_1').val();
		var inp_46_2 = $('#inp_46_2').val();
		var inp_46_3 = $('#inp_46_3').val();
		var inp_46_4 = $('#inp_46_4').val();

		var cell_46_7 = $('#cell_46_7').html();
		$('#cell_46_8').html( (cell_46_7 / 100) );
		$('#cell_46_10').html( inp_46_1 * inp_46_2 * inp_46_3 );
		var cell_46_8 = $('#cell_46_8').html();
		var cell_46_10 = $('#cell_46_10').html();
		$('#cell_46_12').html( (cell_46_8 * cell_46_10).toFixed(4) );
		var cell_46_12 = $('#cell_46_12').html();
		$('#cell_46_13').html( (inp_46_4 * cell_46_12).toFixed(4) );
		//row 46

		//row 47
		var inp_47_1 = $('#inp_47_1').val();
		var inp_47_2 = $('#inp_47_2').val();
		var inp_47_3 = $('#inp_47_3').val();
		var inp_47_4 = $('#inp_47_4').val();

		var cell_47_7 = $('#cell_47_7').html();
		$('#cell_47_8').html( (cell_47_7 / 100) );
		$('#cell_47_10').html( inp_47_1 * inp_47_2 * inp_47_3 );
		var cell_47_8 = $('#cell_47_8').html();
		var cell_47_10 = $('#cell_47_10').html();
		$('#cell_47_12').html( (cell_47_8 * cell_47_10).toFixed(4) );
		var cell_47_12 = $('#cell_47_12').html();
		$('#cell_47_13').html( (inp_47_4 * cell_47_12).toFixed(4) );
		//row 47

		//row 48
		var inp_48_1 = $('#inp_48_1').val();
		var inp_48_2 = $('#inp_48_2').val();
		var inp_48_3 = $('#inp_48_3').val();
		var inp_48_4 = $('#inp_48_4').val();

		var cell_48_7 = $('#cell_48_7').html();
		$('#cell_48_8').html( (cell_48_7 / 100) );
		$('#cell_48_10').html( inp_48_1 * inp_48_2 * inp_48_3 );
		var cell_48_8 = $('#cell_48_8').html();
		var cell_48_10 = $('#cell_48_10').html();
		$('#cell_48_12').html( (cell_48_8 * cell_48_10).toFixed(4) );
		var cell_48_12 = $('#cell_48_12').html();
		$('#cell_48_13').html( (inp_48_4 * cell_48_12).toFixed(4) );
		//row 48

		//row 49
		var inp_49_1 = $('#inp_49_1').val();
		var inp_49_2 = $('#inp_49_2').val();
		var inp_49_3 = $('#inp_49_3').val();
		var inp_49_4 = $('#inp_49_4').val();

		var cell_49_7 = $('#cell_49_7').html();
		$('#cell_49_8').html( (cell_49_7 / 100) );
		$('#cell_49_10').html( inp_49_1 * inp_49_2 * inp_49_3 );
		var cell_49_8 = $('#cell_49_8').html();
		var cell_49_10 = $('#cell_49_10').html();
		$('#cell_49_12').html( (cell_49_8 * cell_49_10).toFixed(4) );
		var cell_49_12 = $('#cell_49_12').html();
		$('#cell_49_13').html( (inp_49_4 * cell_49_12).toFixed(4) );
		//row 49

		//row 50
		var inp_50_1 = $('#inp_50_1').val();
		var inp_50_2 = $('#inp_50_2').val();
		var inp_50_3 = $('#inp_50_3').val();
		var inp_50_4 = $('#inp_50_4').val();

		var cell_50_7 = $('#cell_50_7').html();
		$('#cell_50_8').html( (cell_50_7 / 100) );
		$('#cell_50_10').html( inp_50_1 * inp_50_2 * inp_50_3 );
		var cell_50_8 = $('#cell_50_8').html();
		var cell_50_10 = $('#cell_50_10').html();
		$('#cell_50_12').html( (cell_50_8 * cell_50_10).toFixed(4) );
		var cell_50_12 = $('#cell_50_12').html();
		$('#cell_50_13').html( (inp_50_4 * cell_50_12).toFixed(4) );
		//row 50

		//row 51
		var inp_51_1 = $('#inp_51_1').val();
		var inp_51_2 = $('#inp_51_2').val();
		var inp_51_3 = $('#inp_51_3').val();
		var inp_51_4 = $('#inp_51_4').val();

		var cell_51_7 = $('#cell_51_7').html();
		$('#cell_51_8').html( (cell_51_7 / 100) );
		$('#cell_51_10').html( inp_51_1 * inp_51_2 * inp_51_3 );
		var cell_51_8 = $('#cell_51_8').html();
		var cell_51_10 = $('#cell_51_10').html();
		$('#cell_51_12').html( (cell_51_8 * cell_51_10).toFixed(4) );
		var cell_51_12 = $('#cell_51_12').html();
		$('#cell_51_13').html( (inp_51_4 * cell_51_12).toFixed(4) );
		//row 51

		//row 52
		var inp_52_1 = $('#inp_52_1').val();
		var inp_52_2 = $('#inp_52_2').val();
		var inp_52_3 = $('#inp_52_3').val();
		var inp_52_4 = $('#inp_52_4').val();

		var cell_52_7 = $('#cell_52_7').html();
		$('#cell_52_8').html( (cell_52_7 / 100) );
		$('#cell_52_10').html( inp_52_1 * inp_52_2 * inp_52_3 );
		var cell_52_8 = $('#cell_52_8').html();
		var cell_52_10 = $('#cell_52_10').html();
		$('#cell_52_12').html( (cell_52_8 * cell_52_10).toFixed(4) );
		var cell_52_12 = $('#cell_52_12').html();
		$('#cell_52_13').html( (inp_52_4 * cell_52_12).toFixed(4) );
		//row 52

		//row 53
		var inp_53_1 = $('#inp_53_1').val();
		var inp_53_2 = $('#inp_53_2').val();
		var inp_53_3 = $('#inp_53_3').val();
		var inp_53_4 = $('#inp_53_4').val();

		var cell_53_7 = $('#cell_53_7').html();
		$('#cell_53_8').html( (cell_53_7 / 100) );
		$('#cell_53_10').html( inp_53_1 * inp_53_2 * inp_53_3 );
		var cell_53_8 = $('#cell_53_8').html();
		var cell_53_10 = $('#cell_53_10').html();
		$('#cell_53_12').html( (cell_53_8 * cell_53_10).toFixed(4) );
		var cell_53_12 = $('#cell_53_12').html();
		$('#cell_53_13').html( (inp_53_4 * cell_53_12).toFixed(4) );
		//row 53

		//row 54
		var inp_54_1 = $('#inp_54_1').val();
		var inp_54_2 = $('#inp_54_2').val();
		var inp_54_3 = $('#inp_54_3').val();
		var inp_54_4 = $('#inp_54_4').val();

		var cell_54_7 = $('#cell_54_7').html();
		$('#cell_54_8').html( (cell_54_7 / 100) );
		$('#cell_54_10').html( inp_54_1 * inp_54_2 * inp_54_3 );
		var cell_54_8 = $('#cell_54_8').html();
		var cell_54_10 = $('#cell_54_10').html();
		$('#cell_54_12').html( (cell_54_8 * cell_54_10).toFixed(4) );
		var cell_54_12 = $('#cell_54_12').html();
		$('#cell_54_13').html( (inp_54_4 * cell_54_12).toFixed(4) );
		//row 54

		//row 55
		var inp_55_1 = $('#inp_55_1').val();
		var inp_55_2 = $('#inp_55_2').val();
		var inp_55_3 = $('#inp_55_3').val();
		var inp_55_4 = $('#inp_55_4').val();

		var cell_55_7 = $('#cell_55_7').html();
		$('#cell_55_8').html( (cell_55_7 / 100) );
		$('#cell_55_10').html( inp_55_1 * inp_55_2 * inp_55_3 );
		var cell_55_8 = $('#cell_55_8').html();
		var cell_55_10 = $('#cell_55_10').html();
		$('#cell_55_12').html( (cell_55_8 * cell_55_10).toFixed(4) );
		var cell_55_12 = $('#cell_55_12').html();
		$('#cell_55_13').html( (inp_55_4 * cell_55_12).toFixed(4) );
		//row 55

		//row 56
		var inp_56_1 = $('#inp_56_1').val();
		var inp_56_2 = $('#inp_56_2').val();
		var inp_56_3 = $('#inp_56_3').val();
		var inp_56_4 = $('#inp_56_4').val();

		var cell_56_7 = $('#cell_56_7').html();
		$('#cell_56_8').html( (cell_56_7 / 100) );
		$('#cell_56_10').html( inp_56_1 * inp_56_2 * inp_56_3 );
		var cell_56_8 = $('#cell_56_8').html();
		var cell_56_10 = $('#cell_56_10').html();
		$('#cell_56_12').html( (cell_56_8 * cell_56_10).toFixed(4) );
		var cell_56_12 = $('#cell_56_12').html();
		$('#cell_56_13').html( (inp_56_4 * cell_56_12).toFixed(4) );
		//row 56

		//row 57
		var inp_57_1 = $('#inp_57_1').val();
		var inp_57_2 = $('#inp_57_2').val();
		var inp_57_3 = $('#inp_57_3').val();
		var inp_57_4 = $('#inp_57_4').val();

		var cell_57_7 = $('#cell_57_7').html();
		$('#cell_57_8').html( (cell_57_7 / 100) );
		$('#cell_57_10').html( inp_57_1 * inp_57_2 * inp_57_3 );
		var cell_57_8 = $('#cell_57_8').html();
		var cell_57_10 = $('#cell_57_10').html();
		$('#cell_57_12').html( (cell_57_8 * cell_57_10).toFixed(4) );
		var cell_57_12 = $('#cell_57_12').html();
		$('#cell_57_13').html( (inp_57_4 * cell_57_12).toFixed(4) );
		//row 57

		//row 58
		var inp_58_1 = $('#inp_58_1').val();
		var inp_58_2 = $('#inp_58_2').val();
		var inp_58_3 = $('#inp_58_3').val();
		var inp_58_4 = $('#inp_58_4').val();

		var cell_58_7 = $('#cell_58_7').html();
		$('#cell_58_8').html( (cell_58_7 / 100) );
		$('#cell_58_10').html( inp_58_1 * inp_58_2 * inp_58_3 );
		var cell_58_8 = $('#cell_58_8').html();
		var cell_58_10 = $('#cell_58_10').html();
		$('#cell_58_12').html( (cell_58_8 * cell_58_10).toFixed(4) );
		var cell_58_12 = $('#cell_58_12').html();
		$('#cell_58_13').html( (inp_58_4 * cell_58_12).toFixed(4) );
		//row 58

		//row 59
		var inp_59_1 = $('#inp_59_1').val();
		var inp_59_2 = $('#inp_59_2').val();
		var inp_59_3 = $('#inp_59_3').val();
		var inp_59_4 = $('#inp_59_4').val();

		var cell_59_7 = $('#cell_59_7').html();
		$('#cell_59_8').html( (cell_59_7 / 100) );
		$('#cell_59_10').html( inp_59_1 * inp_59_2 * inp_59_3 );
		var cell_59_8 = $('#cell_59_8').html();
		var cell_59_10 = $('#cell_59_10').html();
		$('#cell_59_12').html( (cell_59_8 * cell_59_10).toFixed(4) );
		var cell_59_12 = $('#cell_59_12').html();
		$('#cell_59_13').html( (inp_59_4 * cell_59_12).toFixed(4) );
		//row 59

		//row 60
		var inp_60_1 = $('#inp_60_1').val();
		var inp_60_2 = $('#inp_60_2').val();
		var inp_60_3 = $('#inp_60_3').val();
		var inp_60_4 = $('#inp_60_4').val();

		var cell_60_7 = $('#cell_60_7').html();
		$('#cell_60_8').html( (cell_60_7 / 100) );
		$('#cell_60_10').html( inp_60_1 * inp_60_2 * inp_60_3 );
		var cell_60_8 = $('#cell_60_8').html();
		var cell_60_10 = $('#cell_60_10').html();
		$('#cell_60_12').html( (cell_60_8 * cell_60_10).toFixed(4) );
		var cell_60_12 = $('#cell_60_12').html();
		$('#cell_60_13').html( (inp_60_4 * cell_60_12).toFixed(4) );
		//row 60

		//row_61_
		var inp_61_1 = $('#inp_61_1').val();
		var inp_61_2 = $('#inp_61_2').val();
		var inp_61_3 = $('#inp_61_3').val();
		var inp_61_4 = $('#inp_61_4').val();

		var cell_61_7 = $('#cell_61_7').html();
		$('#cell_61_8').html( (cell_61_7 / 100) );
		$('#cell_61_10').html( inp_61_1 * inp_61_2 * inp_61_3 );
		var cell_61_8 = $('#cell_61_8').html();
		var cell_61_10 = $('#cell_61_10').html();
		$('#cell_61_12').html( (cell_61_8 * cell_61_10).toFixed(4) );
		var cell_61_12 = $('#cell_61_12').html();
		$('#cell_61_13').html( (inp_61_4 * cell_61_12).toFixed(4) );
		//row_61_

		//row_62_
		var inp_62_1 = $('#inp_62_1').val();
		var inp_62_2 = $('#inp_62_2').val();
		var inp_62_3 = $('#inp_62_3').val();
		var inp_62_4 = $('#inp_62_4').val();

		var cell_62_7 = $('#cell_62_7').html();
		$('#cell_62_8').html( (cell_62_7 / 100) );
		$('#cell_62_10').html( inp_62_1 * inp_62_2 * inp_62_3 );
		var cell_62_8 = $('#cell_62_8').html();
		var cell_62_10 = $('#cell_62_10').html();
		$('#cell_62_12').html( (cell_62_8 * cell_62_10).toFixed(4) );
		var cell_62_12 = $('#cell_62_12').html();
		$('#cell_62_13').html( (inp_62_4 * cell_62_12).toFixed(4) );
		//row_62_

		//row_63_
		var inp_63_1 = $('#inp_63_1').val();
		var inp_63_2 = $('#inp_63_2').val();
		var inp_63_3 = $('#inp_63_3').val();
		var inp_63_4 = $('#inp_63_4').val();

		var cell_63_7 = $('#cell_63_7').html();
		$('#cell_63_8').html( (cell_63_7 / 100) );
		$('#cell_63_10').html( inp_63_1 * inp_63_2 * inp_63_3 );
		var cell_63_8 = $('#cell_63_8').html();
		var cell_63_10 = $('#cell_63_10').html();
		$('#cell_63_12').html( (cell_63_8 * cell_63_10).toFixed(4) );
		var cell_63_12 = $('#cell_63_12').html();
		$('#cell_63_13').html( (inp_63_4 * cell_63_12).toFixed(4) );
		//row_63_

		//row_64_
		var inp_64_1 = $('#inp_64_1').val();
		var inp_64_2 = $('#inp_64_2').val();
		var inp_64_3 = $('#inp_64_3').val();
		var inp_64_4 = $('#inp_64_4').val();

		var cell_64_7 = $('#cell_64_7').html();
		$('#cell_64_8').html( (cell_64_7 / 100) );
		$('#cell_64_10').html( inp_64_1 * inp_64_2 * inp_64_3 );
		var cell_64_8 = $('#cell_64_8').html();
		var cell_64_10 = $('#cell_64_10').html();
		$('#cell_64_12').html( (cell_64_8 * cell_64_10).toFixed(4) );
		var cell_64_12 = $('#cell_64_12').html();
		$('#cell_64_13').html( (inp_64_4 * cell_64_12).toFixed(4) );
		//row_64_

		//row_65_
		var inp_65_1 = $('#inp_65_1').val();
		var inp_65_2 = $('#inp_65_2').val();
		var inp_65_3 = $('#inp_65_3').val();
		var inp_65_4 = $('#inp_65_4').val();

		var cell_65_7 = $('#cell_65_7').html();
		$('#cell_65_8').html( (cell_65_7 / 100) );
		$('#cell_65_10').html( inp_65_1 * inp_65_2 * inp_65_3 );
		var cell_65_8 = $('#cell_65_8').html();
		var cell_65_10 = $('#cell_65_10').html();
		$('#cell_65_12').html( (cell_65_8 * cell_65_10).toFixed(4) );
		var cell_65_12 = $('#cell_65_12').html();
		$('#cell_65_13').html( (inp_65_4 * cell_65_12).toFixed(4) );
		//row_65_

		//row_66_
		var inp_66_1 = $('#inp_66_1').val();
		var inp_66_2 = $('#inp_66_2').val();
		var inp_66_3 = $('#inp_66_3').val();
		var inp_66_4 = $('#inp_66_4').val();

		var cell_66_7 = $('#cell_66_7').html();
		$('#cell_66_8').html( (cell_66_7 / 100) );
		$('#cell_66_10').html( inp_66_1 * inp_66_2 * inp_66_3 );
		var cell_66_8 = $('#cell_66_8').html();
		var cell_66_10 = $('#cell_66_10').html();
		$('#cell_66_12').html( (cell_66_8 * cell_66_10).toFixed(4) );
		var cell_66_12 = $('#cell_66_12').html();
		$('#cell_66_13').html( (inp_66_4 * cell_66_12).toFixed(4) );
		//row_66_

		//row_67_
		var inp_67_1 = $('#inp_67_1').val();
		var inp_67_2 = $('#inp_67_2').val();
		var inp_67_3 = $('#inp_67_3').val();
		var inp_67_4 = $('#inp_67_4').val();

		var cell_67_7 = $('#cell_67_7').html();
		$('#cell_67_8').html( (cell_67_7 / 100) );
		$('#cell_67_10').html( inp_67_1 * inp_67_2 * inp_67_3 );
		var cell_67_8 = $('#cell_67_8').html();
		var cell_67_10 = $('#cell_67_10').html();
		$('#cell_67_12').html( (cell_67_8 * cell_67_10).toFixed(4) );
		var cell_67_12 = $('#cell_67_12').html();
		$('#cell_67_13').html( (inp_67_4 * cell_67_12).toFixed(4) );
		//row_67_

		//row_68_
		var inp_68_1 = $('#inp_68_1').val();
		var inp_68_2 = $('#inp_68_2').val();
		var inp_68_3 = $('#inp_68_3').val();
		var inp_68_4 = $('#inp_68_4').val();

		var cell_68_7 = $('#cell_68_7').html();
		$('#cell_68_8').html( (cell_68_7 / 100) );
		$('#cell_68_10').html( inp_68_1 * inp_68_2 * inp_68_3 );
		var cell_68_8 = $('#cell_68_8').html();
		var cell_68_10 = $('#cell_68_10').html();
		$('#cell_68_12').html( (cell_68_8 * cell_68_10).toFixed(4) );
		var cell_68_12 = $('#cell_68_12').html();
		$('#cell_68_13').html( (inp_68_4 * cell_68_12).toFixed(4) );
		//row_68_

		//row_69_
		var inp_69_1 = $('#inp_69_1').val();
		var inp_69_2 = $('#inp_69_2').val();
		var inp_69_3 = $('#inp_69_3').val();
		var inp_69_4 = $('#inp_69_4').val();

		var cell_69_7 = $('#cell_69_7').html();
		$('#cell_69_8').html( (cell_69_7 / 100) );
		$('#cell_69_10').html( inp_69_1 * inp_69_2 * inp_69_3 );
		var cell_69_8 = $('#cell_69_8').html();
		var cell_69_10 = $('#cell_69_10').html();
		$('#cell_69_12').html( (cell_69_8 * cell_69_10).toFixed(4) );
		var cell_69_12 = $('#cell_69_12').html();
		$('#cell_69_13').html( (inp_69_4 * cell_69_12).toFixed(4) );
		//row_69_

		//row_70_
		var inp_70_1 = $('#inp_70_1').val();
		var inp_70_2 = $('#inp_70_2').val();
		var inp_70_3 = $('#inp_70_3').val();
		var inp_70_4 = $('#inp_70_4').val();

		var cell_70_7 = $('#cell_70_7').html();
		$('#cell_70_8').html( (cell_70_7 / 100) );
		$('#cell_70_10').html( inp_70_1 * inp_70_2 * inp_70_3 );
		var cell_70_8 = $('#cell_70_8').html();
		var cell_70_10 = $('#cell_70_10').html();
		$('#cell_70_12').html( (cell_70_8 * cell_70_10).toFixed(4) );
		var cell_70_12 = $('#cell_70_12').html();
		$('#cell_70_13').html( (inp_70_4 * cell_70_12).toFixed(4) );
		//row_70_

		//row_71_
		var inp_71_1 = $('#inp_71_1').val();
		var inp_71_2 = $('#inp_71_2').val();
		var inp_71_3 = $('#inp_71_3').val();
		var inp_71_4 = $('#inp_71_4').val();

		var cell_71_7 = $('#cell_71_7').html();
		$('#cell_71_8').html( (cell_71_7 / 100) );
		$('#cell_71_10').html( inp_71_1 * inp_71_2 * inp_71_3 );
		var cell_71_8 = $('#cell_71_8').html();
		var cell_71_10 = $('#cell_71_10').html();
		$('#cell_71_12').html( (cell_71_8 * cell_71_10).toFixed(4) );
		var cell_71_12 = $('#cell_71_12').html();
		$('#cell_71_13').html( (inp_71_4 * cell_71_12).toFixed(4) );
		//row_71_

		//row_72_
		var inp_72_1 = $('#inp_72_1').val();
		var inp_72_2 = $('#inp_72_2').val();
		var inp_72_3 = $('#inp_72_3').val();
		var inp_72_4 = $('#inp_72_4').val();

		var cell_72_7 = $('#cell_72_7').html();
		$('#cell_72_8').html( (cell_72_7 / 100) );
		$('#cell_72_10').html( inp_72_1 * inp_72_2 * inp_72_3 );
		var cell_72_8 = $('#cell_72_8').html();
		var cell_72_10 = $('#cell_72_10').html();
		$('#cell_72_12').html( (cell_72_8 * cell_72_10).toFixed(4) );
		var cell_72_12 = $('#cell_72_12').html();
		$('#cell_72_13').html( (inp_72_4 * cell_72_12).toFixed(4) );
		//row_72_

		//row_73_
		var inp_73_1 = $('#inp_73_1').val();
		var inp_73_2 = $('#inp_73_2').val();
		var inp_73_3 = $('#inp_73_3').val();
		var inp_73_4 = $('#inp_73_4').val();

		var cell_73_7 = $('#cell_73_7').html();
		$('#cell_73_8').html( (cell_73_7 / 100) );
		$('#cell_73_10').html( inp_73_1 * inp_73_2 * inp_73_3 );
		var cell_73_8 = $('#cell_73_8').html();
		var cell_73_10 = $('#cell_73_10').html();
		$('#cell_73_12').html( (cell_73_8 * cell_73_10).toFixed(4) );
		var cell_73_12 = $('#cell_73_12').html();
		$('#cell_73_13').html( (inp_73_4 * cell_73_12).toFixed(4) );
		//row_73_

		//row_74_
		var inp_74_1 = $('#inp_74_1').val();
		var inp_74_2 = $('#inp_74_2').val();
		var inp_74_3 = $('#inp_74_3').val();
		var inp_74_4 = $('#inp_74_4').val();

		var cell_74_7 = $('#cell_74_7').html();
		$('#cell_74_8').html( (cell_74_7 / 100) );
		$('#cell_74_10').html( inp_74_1 * inp_74_2 * inp_74_3 );
		var cell_74_8 = $('#cell_74_8').html();
		var cell_74_10 = $('#cell_74_10').html();
		$('#cell_74_12').html( (cell_74_8 * cell_74_10).toFixed(4) );
		var cell_74_12 = $('#cell_74_12').html();
		$('#cell_74_13').html( (inp_74_4 * cell_74_12).toFixed(4) );
		//row_74_

		//row_75_
		var inp_75_1 = $('#inp_75_1').val();
		var inp_75_2 = $('#inp_75_2').val();
		var inp_75_3 = $('#inp_75_3').val();
		var inp_75_4 = $('#inp_75_4').val();

		var cell_75_7 = $('#cell_75_7').html();
		$('#cell_75_8').html( (cell_75_7 / 100) );
		$('#cell_75_10').html( inp_75_1 * inp_75_2 * inp_75_3 );
		var cell_75_8 = $('#cell_75_8').html();
		var cell_75_10 = $('#cell_75_10').html();
		$('#cell_75_12').html( (cell_75_8 * cell_75_10).toFixed(4) );
		var cell_75_12 = $('#cell_75_12').html();
		$('#cell_75_13').html( (inp_75_4 * cell_75_12).toFixed(4) );
		//row_75_

		//row_76_
		var inp_76_1 = $('#inp_76_1').val();
		var inp_76_2 = $('#inp_76_2').val();
		var inp_76_3 = $('#inp_76_3').val();
		var inp_76_4 = $('#inp_76_4').val();

		var cell_76_7 = $('#cell_76_7').html();
		$('#cell_76_8').html( (cell_76_7 / 100) );
		$('#cell_76_10').html( inp_76_1 * inp_76_2 * inp_76_3 );
		var cell_76_8 = $('#cell_76_8').html();
		var cell_76_10 = $('#cell_76_10').html();
		$('#cell_76_12').html( (cell_76_8 * cell_76_10).toFixed(4) );
		var cell_76_12 = $('#cell_76_12').html();
		$('#cell_76_13').html( (inp_76_4 * cell_76_12).toFixed(4) );
		//row_76_

		//row_77_
		var inp_77_1 = $('#inp_77_1').val();
		var inp_77_2 = $('#inp_77_2').val();
		var inp_77_3 = $('#inp_77_3').val();
		var inp_77_4 = $('#inp_77_4').val();

		var cell_77_7 = $('#cell_77_7').html();
		$('#cell_77_8').html( (cell_77_7 / 100) );
		$('#cell_77_10').html( inp_77_1 * inp_77_2 * inp_77_3 );
		var cell_77_8 = $('#cell_77_8').html();
		var cell_77_10 = $('#cell_77_10').html();
		$('#cell_77_12').html( (cell_77_8 * cell_77_10).toFixed(4) );
		var cell_77_12 = $('#cell_77_12').html();
		$('#cell_77_13').html( (inp_77_4 * cell_77_12).toFixed(4) );
		//row_77_

		//row_78_
		var inp_78_1 = $('#inp_78_1').val();
		var inp_78_2 = $('#inp_78_2').val();
		var inp_78_3 = $('#inp_78_3').val();
		var inp_78_4 = $('#inp_78_4').val();

		var cell_78_7 = $('#cell_78_7').html();
		$('#cell_78_8').html( (cell_78_7 / 100) );
		$('#cell_78_10').html( inp_78_1 * inp_78_2 * inp_78_3 );
		var cell_78_8 = $('#cell_78_8').html();
		var cell_78_10 = $('#cell_78_10').html();
		$('#cell_78_12').html( (cell_78_8 * cell_78_10).toFixed(4) );
		var cell_78_12 = $('#cell_78_12').html();
		$('#cell_78_13').html( (inp_78_4 * cell_78_12).toFixed(4) );
		//row_78_

		//row_79_
		var inp_79_1 = $('#inp_79_1').val();
		var inp_79_2 = $('#inp_79_2').val();
		var inp_79_3 = $('#inp_79_3').val();
		var inp_79_4 = $('#inp_79_4').val();

		var cell_79_7 = $('#cell_79_7').html();
		$('#cell_79_8').html( (cell_79_7 / 100) );
		$('#cell_79_10').html( inp_79_1 * inp_79_2 * inp_79_3 );
		var cell_79_8 = $('#cell_79_8').html();
		var cell_79_10 = $('#cell_79_10').html();
		$('#cell_79_12').html( (cell_79_8 * cell_79_10).toFixed(4) );
		var cell_79_12 = $('#cell_79_12').html();
		$('#cell_79_13').html( (inp_79_4 * cell_79_12).toFixed(4) );
		//row_79_

		//row_80_
		var inp_80_1 = $('#inp_80_1').val();
		var inp_80_2 = $('#inp_80_2').val();
		var inp_80_3 = $('#inp_80_3').val();
		var inp_80_4 = $('#inp_80_4').val();

		var cell_80_7 = $('#cell_80_7').html();
		$('#cell_80_8').html( (cell_80_7 / 100) );
		$('#cell_80_10').html( inp_80_1 * inp_80_2 * inp_80_3 );
		var cell_80_8 = $('#cell_80_8').html();
		var cell_80_10 = $('#cell_80_10').html();
		$('#cell_80_12').html( (cell_80_8 * cell_80_10).toFixed(4) );
		var cell_80_12 = $('#cell_80_12').html();
		$('#cell_80_13').html( (inp_80_4 * cell_80_12).toFixed(4) );
		//row_80_

		//row_81_
		var inp_81_1 = $('#inp_81_1').val();
		var inp_81_2 = $('#inp_81_2').val();
		var inp_81_3 = $('#inp_81_3').val();
		var inp_81_4 = $('#inp_81_4').val();

		var cell_81_7 = $('#cell_81_7').html();
		$('#cell_81_8').html( (cell_81_7 / 100) );
		$('#cell_81_10').html( inp_81_1 * inp_81_2 * inp_81_3 );
		var cell_81_8 = $('#cell_81_8').html();
		var cell_81_10 = $('#cell_81_10').html();
		$('#cell_81_12').html( (cell_81_8 * cell_81_10).toFixed(4) );
		var cell_81_12 = $('#cell_81_12').html();
		$('#cell_81_13').html( (inp_81_4 * cell_81_12).toFixed(4) );
		//row_81_

		//row_82_
		var inp_82_1 = $('#inp_82_1').val();
		var inp_82_2 = $('#inp_82_2').val();
		var inp_82_3 = $('#inp_82_3').val();
		var inp_82_4 = $('#inp_82_4').val();

		var cell_82_7 = $('#cell_82_7').html();
		$('#cell_82_8').html( (cell_82_7 / 100) );
		$('#cell_82_10').html( inp_82_1 * inp_82_2 * inp_82_3 );
		var cell_82_8 = $('#cell_82_8').html();
		var cell_82_10 = $('#cell_82_10').html();
		$('#cell_82_12').html( (cell_82_8 * cell_82_10).toFixed(4) );
		var cell_82_12 = $('#cell_82_12').html();
		$('#cell_82_13').html( (inp_82_4 * cell_82_12).toFixed(4) );
		//row_82_

		//row_83_
		var inp_83_1 = $('#inp_83_1').val();
		var inp_83_2 = $('#inp_83_2').val();
		var inp_83_3 = $('#inp_83_3').val();
		var inp_83_4 = $('#inp_83_4').val();

		var cell_83_7 = $('#cell_83_7').html();
		$('#cell_83_8').html( (cell_83_7 / 100) );
		$('#cell_83_10').html( inp_83_1 * inp_83_2 * inp_83_3 );
		var cell_83_8 = $('#cell_83_8').html();
		var cell_83_10 = $('#cell_83_10').html();
		$('#cell_83_12').html( (cell_83_8 * cell_83_10).toFixed(4) );
		var cell_83_12 = $('#cell_83_12').html();
		$('#cell_83_13').html( (inp_83_4 * cell_83_12).toFixed(4) );
		//row_83_

		//row_84_
		var inp_84_1 = $('#inp_84_1').val();
		var inp_84_2 = $('#inp_84_2').val();
		var inp_84_3 = $('#inp_84_3').val();
		var inp_84_4 = $('#inp_84_4').val();

		var cell_84_7 = $('#cell_84_7').html();
		$('#cell_84_8').html( (cell_84_7 / 100) );
		$('#cell_84_10').html( inp_84_1 * inp_84_2 * inp_84_3 );
		var cell_84_8 = $('#cell_84_8').html();
		var cell_84_10 = $('#cell_84_10').html();
		$('#cell_84_12').html( (cell_84_8 * cell_84_10).toFixed(4) );
		var cell_84_12 = $('#cell_84_12').html();
		$('#cell_84_13').html( (inp_84_4 * cell_84_12).toFixed(4) );
		//row_84_

		//row_85_
		var inp_85_1 = $('#inp_85_1').val();
		var inp_85_2 = $('#inp_85_2').val();
		var inp_85_3 = $('#inp_85_3').val();
		var inp_85_4 = $('#inp_85_4').val();

		var cell_85_7 = $('#cell_85_7').html();
		$('#cell_85_8').html( (cell_85_7 / 100) );
		$('#cell_85_10').html( inp_85_1 * inp_85_2 * inp_85_3 );
		var cell_85_8 = $('#cell_85_8').html();
		var cell_85_10 = $('#cell_85_10').html();
		$('#cell_85_12').html( (cell_85_8 * cell_85_10).toFixed(4) );
		var cell_85_12 = $('#cell_85_12').html();
		$('#cell_85_13').html( (inp_85_4 * cell_85_12).toFixed(4) );
		//row_85_

	}





});