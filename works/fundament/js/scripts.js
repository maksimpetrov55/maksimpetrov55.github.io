$(document).ready(function() {

	$('.form__btn').click(function(e){
		e.preventDefault();
		$('.calc__black').fadeOut(300);
		$('.table').css({display: "block"});
	});

	$('.form__close').click(function(){
		$('.calc__black').fadeOut(300);
	});

	$('.calc__btn').click(function(){
		$('.calc__black').css({display: "flex"});
		$('.form').fadeIn(300);
	});

	$('.calc__input').change(function(){
		if ( $(this).val() < 0 ) {
			$(this).val(0);
		}
		calculation();
	});

	$('.calc__check').change(function(){
		calculation();
	});

	calculation();

	function calculation() {

		var calc_input_1 = $('#calc_input_1').val();
		var calc_input_2 = $('#calc_input_2').val();

		if ( calc_input_1 > 0 && calc_input_2 > 0 ) {
			$('.calc__img--2').css({display: "block"});
		} else {
			$('.calc__img--2').css({display: "none"});
		}

		$('#calc_input_3').val( (calc_input_1 * 2) + (calc_input_2 * 2) );
		$('#calc_input_4').val( calc_input_1 * calc_input_2 );

		var calc_input_3 = $('#calc_input_3').val();
		var calc_input_4 = $('#calc_input_4').val();
		var calc_input_5 = $('#calc_input_5').val();
		var calc_input_6 = $('#calc_input_6').val();
		var calc_input_7 = $('#calc_input_7').val();
		var calc_input_8 = $('#calc_input_8').val();
		var calc_input_9 = $('#calc_input_9').val();
		var calc_input_10 = $('#calc_input_10').val();
		var calc_input_11 = $('#calc_input_11').val();
		var calc_input_12 = $('#calc_input_12').val();

		var calc_options = '';
		$('.calc__check:checked').each(function(){
			calc_options = calc_options + $(this).next().text() + ";" + "<br>" + "\n";
		});

		$('#form_data').val(

			$('#calc_input_1').prev().text() + ": " + calc_input_1 + "<br>" + "\n" + 
			$('#calc_input_2').prev().text() + ": " + calc_input_2 + "<br>" + "\n" + 
			$('#calc_input_3').prev().text() + ": " + calc_input_3 + "<br>" + "\n" + 
			$('#calc_input_4').prev().text() + ": " + calc_input_4 + "<br>" + "\n" + 
			$('#calc_input_5').prev().text() + ": " + calc_input_5 + "<br>" + "\n" + 
			$('#calc_input_6').prev().text() + ": " + calc_input_6 + "<br>" + "\n" + 
			$('#calc_input_7').prev().text() + ": " + calc_input_7 + "<br>" + "\n" + 
			$('#calc_input_8').prev().text() + ": " + calc_input_8 + "<br>" + "\n" + 
			$('#calc_input_9').prev().text() + ": " + calc_input_9 + "<br>" + "\n" + 
			$('#calc_input_10').prev().text() + ": " + calc_input_10 + "<br>" + "\n" + 
			$('#calc_input_11').prev().text() + ": " + calc_input_11 + "<br>" + "\n" + 
			$('#calc_input_12').prev().text() + ": " + calc_input_12 + "<br>" + "\n" + 

			"Опции: " + calc_options

		);

		
		if ( $('#calc_check_1').is(":checked") == true ){
			$('.calc__img--4').css({display: "block"});
		} else {
			$('.calc__img--4').css({display: "none"});
		}

		if ( $('#calc_check_2').is(":checked") == true ){
			$('.calc__img--3').css({display: "block"});
		} else {
			$('.calc__img--3').css({display: "none"});
		}

		if ( $('#calc_check_4').is(":checked") == true ){
			$('.calc__img--6').css({display: "block"});
		} else {
			$('.calc__img--6').css({display: "none"});
		}

		if ( $('#calc_check_6').is(":checked") == true ){
			$('.calc__img--5').css({display: "block"});
		} else {
			$('.calc__img--5').css({display: "none"});
		}

		if ( $('#calc_check_7').is(":checked") == true ){
			$('.calc__img--7').css({display: "block"});
		} else {
			$('.calc__img--7').css({display: "none"});
		}



		var formula_1 = calc_input_1 * calc_input_2;
		var formula_2 = formula_1 * 1.35;
		var formula_3 = (calc_input_1 * 2) + (calc_input_2 * 2);
		var formula_4 = formula_3 + 0.4;
		var formula_5 = formula_3 * 1.2;
		var formula_6 = formula_5 / 2;
		var formula_7 = formula_3 * 0.65;
		var formula_8 = formula_3 / 2.5;

		var formula_11 = (formula_1*5.6)/1000;

		var formula_10 = (((formula_1 * 4.3)/1000) - +formula_11)*((+calc_input_11 - 150)/50);

		var formula_12 = (((formula_3*4)*1.5)*0.888)/1000;
		var formula_13 = formula_12*0.25;
		var formula_14 = (((formula_3/0.3)*1.2)*0.395)/1000;
		var formula_15 = ((((0.5)*0.395)/1000))*(calc_input_6/100 - 2);
		var formula_16 = +formula_14 + +formula_15;
		var formula_17 = +formula_11 + +formula_10;
		
		var formula_18 = +formula_12;

		var formula_19 = (+formula_17 + +formula_18) * 10;

		var formula_20 = (+calc_input_1 + 0.1)*(+calc_input_2 + 0.1);
		var formula_21 = formula_20 * 0.1;
		var formula_22 = (+calc_input_1 - 0.45)*(+calc_input_2 - 0.45);
		var formula_23 = formula_22 * 0.1;
		var formula_24 = formula_22*((calc_input_6/100)-2);
		var formula_25 = formula_24 * 0.1;
		var formula_26 = formula_4*(calc_input_6/1000);
		var formula_27 = formula_26 * 0.1;
		var formula_28 = formula_7;
		var formula_29 = (formula_28*0.05)*1.1;
		var formula_30 = +formula_20 + +formula_22 + +formula_26;
		var formula_31 = +formula_21 + +formula_23 + +formula_27;

		var formula_32 = ((formula_1*0.1)+((formula_3*0.45))*0.1)*1.2;
		var formula_33 = (((formula_3*0.45)*0.1)*1.2)*((calc_input_6/100)-2);

		var formula_34 = (+formula_32 + +formula_33)*1.1;

		var formula_35 = formula_3*0.02;

		var formula_36 = formula_1*9;
		
		var formula_37 = formula_22*4.7;
		var formula_38 = (formula_22*1.6)*(-(+calc_input_8 - 200)/50);
		var formula_39 = formula_37*2;
		var formula_40 = +formula_37 + +formula_38;

		var formula_41 = +formula_5;
		var formula_42 = formula_41/20;
		var formula_43 = formula_41*0.3*0.4;
		var formula_44 = formula_41*2*1.1;

		var formula_45 = formula_2*(calc_input_5/1000);

		var formula_46 = (formula_2*1.1);

		var formula_47 = (+formula_30 + +formula_28)/25;

		var formula_48 = formula_40/10;
		
		var formula_49 = formula_1*2;


		$('#row_1_1').find(".table__cell--4").text( "1.0" );
		$('#row_1_2').find(".table__cell--4").text( formula_2.toFixed(1) );
		$('#row_1_3').find(".table__cell--4").text( (+calc_input_12).toFixed(1) );
		$('#row_1_4').find(".table__cell--4").text( formula_5.toFixed(1) );
		$('#row_1_5').find(".table__cell--4").text( formula_2.toFixed(1) );
		$('#row_1_6').find(".table__cell--4").text( formula_45.toFixed(1) );
		$('#row_1_7').find(".table__cell--4").text( formula_8.toFixed(1) );
		$('#row_1_8').find(".table__cell--4").text( formula_2.toFixed(1) );
		$('#row_1_9').find(".table__cell--4").text( formula_1.toFixed(1) );
		$('#row_1_10').find(".table__cell--4").text( formula_4.toFixed(1) );
		$('#row_1_11').find(".table__cell--4").text( formula_4.toFixed(1) );
		$('#row_1_12').find(".table__cell--4").text( formula_3.toFixed(1) );
		$('#row_1_13').find(".table__cell--4").text( formula_3.toFixed(1) );
		$('#row_1_14').find(".table__cell--4").text( formula_1.toFixed(1) );
		$('#row_1_15').find(".table__cell--4").text( formula_22.toFixed(1) );
		$('#row_1_16').find(".table__cell--4").text( (+calc_input_7).toFixed(1) );
		$('#row_1_17').find(".table__cell--4").text( formula_34.toFixed(1) );
		$('#row_1_18').find(".table__cell--4").text( formula_1.toFixed(1) );

		$('#row_1_1').find(".table__cell--5").text( price_work_1.toFixed(2) );
		$('#row_1_2').find(".table__cell--5").text( price_work_2.toFixed(2) );
		$('#row_1_3').find(".table__cell--5").text( price_work_3.toFixed(2) );
		$('#row_1_4').find(".table__cell--5").text( price_work_5.toFixed(2) );
		$('#row_1_5').find(".table__cell--5").text( price_work_7.toFixed(2) );
		$('#row_1_6').find(".table__cell--5").text( price_work_8.toFixed(2) );
		$('#row_1_7').find(".table__cell--5").text( price_work_9.toFixed(2) );
		$('#row_1_8').find(".table__cell--5").text( price_work_10.toFixed(2) );
		$('#row_1_9').find(".table__cell--5").text( price_work_11.toFixed(2) );
		$('#row_1_10').find(".table__cell--5").text( price_work_12.toFixed(2) );
		$('#row_1_11').find(".table__cell--5").text( price_work_13.toFixed(2) );
		$('#row_1_12').find(".table__cell--5").text( price_work_15.toFixed(2) );
		$('#row_1_13').find(".table__cell--5").text( price_work_16.toFixed(2) );
		$('#row_1_14').find(".table__cell--5").text( price_work_17.toFixed(2) );
		$('#row_1_15').find(".table__cell--5").text( price_work_18.toFixed(2) );
		$('#row_1_16').find(".table__cell--5").text( price_work_19.toFixed(2) );
		$('#row_1_17').find(".table__cell--5").text( price_work_20.toFixed(2) );
		$('#row_1_18').find(".table__cell--5").text( price_work_21.toFixed(2) );

		$('#row_1_1').find(".table__cell--6").text( ($('#row_1_1').find(".table__cell--4").text() * $('#row_1_1').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_2').find(".table__cell--6").text( ($('#row_1_2').find(".table__cell--4").text() * $('#row_1_2').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_3').find(".table__cell--6").text( ($('#row_1_3').find(".table__cell--4").text() * $('#row_1_3').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_4').find(".table__cell--6").text( ($('#row_1_4').find(".table__cell--4").text() * $('#row_1_4').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_5').find(".table__cell--6").text( ($('#row_1_5').find(".table__cell--4").text() * $('#row_1_5').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_6').find(".table__cell--6").text( ($('#row_1_6').find(".table__cell--4").text() * $('#row_1_6').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_7').find(".table__cell--6").text( ($('#row_1_7').find(".table__cell--4").text() * $('#row_1_7').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_8').find(".table__cell--6").text( ($('#row_1_8').find(".table__cell--4").text() * $('#row_1_8').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_9').find(".table__cell--6").text( ($('#row_1_9').find(".table__cell--4").text() * $('#row_1_9').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_10').find(".table__cell--6").text( ($('#row_1_10').find(".table__cell--4").text() * $('#row_1_10').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_11').find(".table__cell--6").text( ($('#row_1_11').find(".table__cell--4").text() * $('#row_1_11').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_12').find(".table__cell--6").text( ($('#row_1_12').find(".table__cell--4").text() * $('#row_1_12').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_13').find(".table__cell--6").text( ($('#row_1_13').find(".table__cell--4").text() * $('#row_1_13').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_14').find(".table__cell--6").text( ($('#row_1_14').find(".table__cell--4").text() * $('#row_1_14').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_15').find(".table__cell--6").text( ($('#row_1_15').find(".table__cell--4").text() * $('#row_1_15').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_16').find(".table__cell--6").text( ($('#row_1_16').find(".table__cell--4").text() * $('#row_1_16').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_17').find(".table__cell--6").text( ($('#row_1_17').find(".table__cell--4").text() * $('#row_1_17').find(".table__cell--5").text()).toFixed(2) );
		$('#row_1_18').find(".table__cell--6").text( ($('#row_1_18').find(".table__cell--4").text() * $('#row_1_18').find(".table__cell--5").text()).toFixed(2) );

		$('#row_1_19').find(".table__cell--6").text(
			(+$('#row_1_1').find(".table__cell--6").text() + 
			+$('#row_1_2').find(".table__cell--6").text() + 
			+$('#row_1_3').find(".table__cell--6").text() + 
			+$('#row_1_4').find(".table__cell--6").text() + 
			+$('#row_1_5').find(".table__cell--6").text() + 
			+$('#row_1_6').find(".table__cell--6").text() + 
			+$('#row_1_7').find(".table__cell--6").text() + 
			+$('#row_1_8').find(".table__cell--6").text() + 
			+$('#row_1_9').find(".table__cell--6").text() + 
			+$('#row_1_10').find(".table__cell--6").text() + 
			+$('#row_1_11').find(".table__cell--6").text() + 
			+$('#row_1_12').find(".table__cell--6").text() + 
			+$('#row_1_13').find(".table__cell--6").text() + 
			+$('#row_1_14').find(".table__cell--6").text() + 
			+$('#row_1_15').find(".table__cell--6").text() + 
			+$('#row_1_16').find(".table__cell--6").text() + 
			+$('#row_1_17').find(".table__cell--6").text() + 
			+$('#row_1_18').find(".table__cell--6").text()).toFixed(2)
		);







		$('#row_2_1').find(".table__cell--4").text(  formula_45.toFixed(2) );
		$('#row_2_2').find(".table__cell--4").text(  formula_43.toFixed(2) );
		$('#row_2_3').find(".table__cell--4").text(  formula_35.toFixed(2) );
		$('#row_2_4').find(".table__cell--4").text(  formula_46.toFixed(2) );
		$('#row_2_5').find(".table__cell--4").text(  (+calc_input_1).toFixed(2) );
		$('#row_2_6').find(".table__cell--4").text(  formula_8.toFixed(2) );
		$('#row_2_7').find(".table__cell--4").text(  formula_41.toFixed(2) );
		$('#row_2_8').find(".table__cell--4").text(  formula_42.toFixed(2) );
		$('#row_2_9').find(".table__cell--4").text(  formula_44.toFixed(2) );
		$('#row_2_10').find(".table__cell--4").text( (+formula_21 + +formula_27).toFixed(2) );
		$('#row_2_11').find(".table__cell--4").text( (+formula_23 + +formula_25).toFixed(2) );
		$('#row_2_12').find(".table__cell--4").text( formula_4.toFixed(2) );
		$('#row_2_13').find(".table__cell--4").text( (formula_3 * 1.2).toFixed(2) );
		$('#row_2_14').find(".table__cell--4").text( "20.0" );
		$('#row_2_15').find(".table__cell--4").text( formula_3.toFixed(2) );
		$('#row_2_16').find(".table__cell--4").text( formula_3.toFixed(2) );
		$('#row_2_17').find(".table__cell--4").text( formula_2.toFixed(2) );
		$('#row_2_18').find(".table__cell--4").text( formula_49.toFixed(2) );
		$('#row_2_19').find(".table__cell--4").text( formula_47.toFixed(2) );
		$('#row_2_20').find(".table__cell--4").text( formula_39.toFixed(2) );
		$('#row_2_21').find(".table__cell--4").text( formula_40.toFixed(2) );
		$('#row_2_22').find(".table__cell--4").text( "1.0" );
		$('#row_2_23').find(".table__cell--4").text( formula_48.toFixed(2) );
		$('#row_2_24').find(".table__cell--4").text( formula_18.toFixed(2) );
		$('#row_2_25').find(".table__cell--4").text( formula_13.toFixed(2) );
		$('#row_2_26').find(".table__cell--4").text( formula_16.toFixed(2) );
		$('#row_2_27').find(".table__cell--4").text( formula_17.toFixed(2) );
		$('#row_2_28').find(".table__cell--4").text( formula_19.toFixed(2) );
		$('#row_2_29').find(".table__cell--4").text( formula_36.toFixed(2) );
		$('#row_2_30').find(".table__cell--4").text( formula_34.toFixed(2) );

		$('#row_2_1').find(".table__cell--5").text(  price_material_1.toFixed(2) );
		$('#row_2_2').find(".table__cell--5").text(  price_material_2.toFixed(2) );
		$('#row_2_3').find(".table__cell--5").text(  price_material_3.toFixed(2) );
		$('#row_2_4').find(".table__cell--5").text(  price_material_4.toFixed(2) );
		$('#row_2_5').find(".table__cell--5").text(  price_material_5.toFixed(2) );
		$('#row_2_6').find(".table__cell--5").text(  price_material_6.toFixed(2) );
		$('#row_2_7').find(".table__cell--5").text(  price_material_7.toFixed(2) );
		$('#row_2_8').find(".table__cell--5").text(  price_material_8.toFixed(2) );
		$('#row_2_9').find(".table__cell--5").text(  price_material_9.toFixed(2) );
		$('#row_2_10').find(".table__cell--5").text( (+price_material_10).toFixed(2) );
		$('#row_2_11').find(".table__cell--5").text( price_material_30.toFixed(2) );
		$('#row_2_12').find(".table__cell--5").text( price_material_12.toFixed(2) );
		$('#row_2_13').find(".table__cell--5").text( price_material_13.toFixed(2) );
		$('#row_2_14').find(".table__cell--5").text( price_material_14.toFixed(2) );
		$('#row_2_15').find(".table__cell--5").text( price_material_15.toFixed(2) );
		$('#row_2_16').find(".table__cell--5").text( price_material_16.toFixed(2) );
		$('#row_2_17').find(".table__cell--5").text( price_material_17.toFixed(2) );
		$('#row_2_18').find(".table__cell--5").text( "18.00" );
		$('#row_2_19').find(".table__cell--5").text( price_material_18.toFixed(2) );
		$('#row_2_20').find(".table__cell--5").text( price_material_20.toFixed(2) );
		$('#row_2_21').find(".table__cell--5").text( price_material_21.toFixed(2) );
		$('#row_2_22').find(".table__cell--5").text( price_material_22.toFixed(2) );
		$('#row_2_23').find(".table__cell--5").text( price_material_23.toFixed(2) );
		$('#row_2_24').find(".table__cell--5").text( price_material_24.toFixed(2) );
		$('#row_2_25').find(".table__cell--5").text( price_material_24.toFixed(2) );
		$('#row_2_26').find(".table__cell--5").text( price_material_25.toFixed(2) );
		$('#row_2_27').find(".table__cell--5").text( price_material_26.toFixed(2) );
		$('#row_2_28').find(".table__cell--5").text( price_material_27.toFixed(2) );
		$('#row_2_29').find(".table__cell--5").text( price_material_28.toFixed(2) );
		$('#row_2_30').find(".table__cell--5").text( price_material_29.toFixed(2) );


		$('#row_2_1').find(".table__cell--6").text( ($('#row_2_1').find(".table__cell--4").text() * $('#row_2_1').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_2').find(".table__cell--6").text( ($('#row_2_2').find(".table__cell--4").text() * $('#row_2_2').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_3').find(".table__cell--6").text( ($('#row_2_3').find(".table__cell--4").text() * $('#row_2_3').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_4').find(".table__cell--6").text( ($('#row_2_4').find(".table__cell--4").text() * $('#row_2_4').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_5').find(".table__cell--6").text( ($('#row_2_5').find(".table__cell--4").text() * $('#row_2_5').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_6').find(".table__cell--6").text( ($('#row_2_6').find(".table__cell--4").text() * $('#row_2_6').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_7').find(".table__cell--6").text( ($('#row_2_7').find(".table__cell--4").text() * $('#row_2_7').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_8').find(".table__cell--6").text( ($('#row_2_8').find(".table__cell--4").text() * $('#row_2_8').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_9').find(".table__cell--6").text( ($('#row_2_9').find(".table__cell--4").text() * $('#row_2_9').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_10').find(".table__cell--6").text( ($('#row_2_10').find(".table__cell--4").text() * $('#row_2_10').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_11').find(".table__cell--6").text( ($('#row_2_11').find(".table__cell--4").text() * $('#row_2_11').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_12').find(".table__cell--6").text( ($('#row_2_12').find(".table__cell--4").text() * $('#row_2_12').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_13').find(".table__cell--6").text( ($('#row_2_13').find(".table__cell--4").text() * $('#row_2_13').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_14').find(".table__cell--6").text( ($('#row_2_14').find(".table__cell--4").text() * $('#row_2_14').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_15').find(".table__cell--6").text( ($('#row_2_15').find(".table__cell--4").text() * $('#row_2_15').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_16').find(".table__cell--6").text( ($('#row_2_16').find(".table__cell--4").text() * $('#row_2_16').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_17').find(".table__cell--6").text( ($('#row_2_17').find(".table__cell--4").text() * $('#row_2_17').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_18').find(".table__cell--6").text( ($('#row_2_18').find(".table__cell--4").text() * $('#row_2_18').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_19').find(".table__cell--6").text( ($('#row_2_19').find(".table__cell--4").text() * $('#row_2_19').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_20').find(".table__cell--6").text( ($('#row_2_20').find(".table__cell--4").text() * $('#row_2_20').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_21').find(".table__cell--6").text( ($('#row_2_21').find(".table__cell--4").text() * $('#row_2_21').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_22').find(".table__cell--6").text( ($('#row_2_22').find(".table__cell--4").text() * $('#row_2_22').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_23').find(".table__cell--6").text( ($('#row_2_23').find(".table__cell--4").text() * $('#row_2_23').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_24').find(".table__cell--6").text( ($('#row_2_24').find(".table__cell--4").text() * $('#row_2_24').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_25').find(".table__cell--6").text( ($('#row_2_25').find(".table__cell--4").text() * $('#row_2_25').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_26').find(".table__cell--6").text( ($('#row_2_26').find(".table__cell--4").text() * $('#row_2_26').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_27').find(".table__cell--6").text( ($('#row_2_27').find(".table__cell--4").text() * $('#row_2_27').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_28').find(".table__cell--6").text( ($('#row_2_28').find(".table__cell--4").text() * $('#row_2_28').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_29').find(".table__cell--6").text( ($('#row_2_29').find(".table__cell--4").text() * $('#row_2_29').find(".table__cell--5").text()).toFixed(2) );
		$('#row_2_30').find(".table__cell--6").text( ($('#row_2_30').find(".table__cell--4").text() * $('#row_2_30').find(".table__cell--5").text()).toFixed(2) );


		$('#row_2_31').find(".table__cell--6").text(
			(+$('#row_2_1').find(".table__cell--6").text() + 
			+$('#row_2_2').find(".table__cell--6").text() + 
			+$('#row_2_3').find(".table__cell--6").text() + 
			+$('#row_2_4').find(".table__cell--6").text() + 
			+$('#row_2_5').find(".table__cell--6").text() + 
			+$('#row_2_6').find(".table__cell--6").text() + 
			+$('#row_2_7').find(".table__cell--6").text() + 
			+$('#row_2_8').find(".table__cell--6").text() + 
			+$('#row_2_9').find(".table__cell--6").text() + 
			+$('#row_2_10').find(".table__cell--6").text() + 
			+$('#row_2_11').find(".table__cell--6").text() + 
			+$('#row_2_12').find(".table__cell--6").text() + 
			+$('#row_2_13').find(".table__cell--6").text() + 
			+$('#row_2_14').find(".table__cell--6").text() + 
			+$('#row_2_15').find(".table__cell--6").text() + 
			+$('#row_2_16').find(".table__cell--6").text() + 
			+$('#row_2_17').find(".table__cell--6").text() + 
			+$('#row_2_18').find(".table__cell--6").text() + 
			+$('#row_2_19').find(".table__cell--6").text() + 
			+$('#row_2_20').find(".table__cell--6").text() + 
			+$('#row_2_21').find(".table__cell--6").text() + 
			+$('#row_2_22').find(".table__cell--6").text() + 
			+$('#row_2_23').find(".table__cell--6").text() + 
			+$('#row_2_24').find(".table__cell--6").text() + 
			+$('#row_2_25').find(".table__cell--6").text() + 
			+$('#row_2_26').find(".table__cell--6").text() + 
			+$('#row_2_27').find(".table__cell--6").text() + 
			+$('#row_2_28').find(".table__cell--6").text() + 
			+$('#row_2_29').find(".table__cell--6").text() + 
			+$('#row_2_30').find(".table__cell--6").text()
			).toFixed(2)
		);

		var formula_9 = (+$('#row_2_31').find(".table__cell--6").text() + +$('#row_1_19').find(".table__cell--6").text()) / 100 * 2;

		$('#row_3_3').find(".table__cell--5").text( formula_9.toFixed(2) );

		$('#row_3_1').find(".table__cell--6").text( ($('#row_3_1').find(".table__cell--4").text() * $('#row_3_1').find(".table__cell--5").text()).toFixed(2) );
		$('#row_3_2').find(".table__cell--6").text( ($('#row_3_2').find(".table__cell--4").text() * $('#row_3_2').find(".table__cell--5").text()).toFixed(2) );
		$('#row_3_3').find(".table__cell--6").text( ($('#row_3_3').find(".table__cell--4").text() * $('#row_3_3').find(".table__cell--5").text()).toFixed(2) );
		$('#row_3_4').find(".table__cell--6").text( ($('#row_3_4').find(".table__cell--4").text() * $('#row_3_4').find(".table__cell--5").text()).toFixed(2) );

		$('#row_3_5').find(".table__cell--6").text(
			(+$('#row_3_1').find(".table__cell--6").text() + 
			+$('#row_3_2').find(".table__cell--6").text() + 
			+$('#row_3_3').find(".table__cell--6").text() + 
			+$('#row_3_4').find(".table__cell--6").text()
			).toFixed(2)
		);

		$('#table_itog_1').text( $('#row_1_19').find(".table__cell--6").text() );
		$('#table_itog_2').text( $('#row_2_31').find(".table__cell--6").text() );
		$('#table_itog_3').text( $('#row_3_5').find(".table__cell--6").text() );
		$('#table_itog_4').text(
			(+$('#table_itog_1').text() + 
			+$('#table_itog_2').text() + 
			+$('#table_itog_3').text()).toFixed(2)
		);


		$('#row_4_1').find(".table__cell--4").text( formula_29.toFixed(2) );
		$('#row_4_2').find(".table__cell--4").text( formula_4.toFixed(2) );
		$('#row_4_4').find(".table__cell--4").text( formula_6.toFixed(2) );

		$('#row_4_1').find(".table__cell--5").text( price_material_11.toFixed(2) );
		$('#row_4_2').find(".table__cell--5").text( price_work_14.toFixed(2) );
		$('#row_4_4').find(".table__cell--5").text( price_work_6.toFixed(2) );

		$('#row_4_1').find(".table__cell--6").text( ($('#row_4_1').find(".table__cell--4").text() * $('#row_4_1').find(".table__cell--5").text()).toFixed(2) );
		$('#row_4_2').find(".table__cell--6").text( ($('#row_4_2').find(".table__cell--4").text() * $('#row_4_2').find(".table__cell--5").text()).toFixed(2) );
		$('#row_4_3').find(".table__cell--6").text( ($('#row_4_3').find(".table__cell--4").text() * $('#row_4_3').find(".table__cell--5").text()).toFixed(2) );
		$('#row_4_4').find(".table__cell--6").text( ($('#row_4_4').find(".table__cell--4").text() * $('#row_4_4').find(".table__cell--5").text()).toFixed(2) );

		$('#row_4_5').find(".table__cell--6").text(
			(+$('#row_4_1').find(".table__cell--6").text() + 
			+$('#row_4_2').find(".table__cell--6").text() + 
			+$('#row_4_3').find(".table__cell--6").text() + 
			+$('#row_4_4').find(".table__cell--6").text()
			).toFixed(2)
		);

	}

});