$(document).ready(function() {

	$('input').focus(function(){
		$(this).select();
	});

	$('input').blur(function(){
		if ( $(this).val() == '' ){
			$(this).val(0);
		}
	});

	$('.calc__tip').hover(function(){
		$(this).next().css({display: "block"});
	}, function(){
		$(this).next().css({display: "none"});
	});

	$('#calc_plus_1').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$('#calc_closed_1').toggleClass("calc__closed--open");
	});

	$('#calc_plus_2').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$('#calc_closed_2').toggleClass("calc__closed--open");
	});


	$('select').change(function(){
		tables_values();
		tables_values();
	});
	$('input').change(function(){
		tables_values();
		tables_values();
	});

	$('.data-min').on("change",function(){
		let data_min = $(this).data("min");
		if ($(this).val() < data_min){
			$(this).val(data_min);
		}
		tables_values();
		tables_values();
	});

	tables_values();
	tables_values();
	function tables_values() {
		//console.clear();

		var C3 = $('#calc_C3').val();

		if ( C3 == "Yes" ) {
			$('.calc__ask').css({display: "block"});
			$('#calc_C5').prop("disabled", false);
			// $('#calc_C6').prop("disabled", false);
			// $('#calc_C7').prop("disabled", false);
		} else {
			$('.calc__ask').css({display: "none"});
			$('#calc_C5').val(0);
			$('#calc_C7').val(0);
			$('#calc_C6').val(0);
			$('#calc_C4').val("No");

			$('#calc_C5').prop("disabled", true);
			// $('#calc_C6').prop("disabled", true);
			// $('#calc_C7').prop("disabled", true);
		}

		var C4 = $('#calc_C4').val();

		if ( C4 == "No" ) {
			$('#calc_C5').val(0);
			// $('#calc_C6').val(0);
			// $('#calc_C7').val(0);

			$('#calc_C5').prop("disabled", true);
			// $('#calc_C6').prop("disabled", true);
			// $('#calc_C7').prop("disabled", true);
		} else {
			$('#calc_C5').prop("disabled", false);
			// $('#calc_C6').prop("disabled", false);
			// $('#calc_C7').prop("disabled", false);
		}

		var C7 = +$('#calc_C7').val();
		var C12 = +$('#calc_C12').val();
		var C13 = +$('#calc_C13').val();
		var C22 = +$('#calc_C22').val();
		var C23 = +$('#calc_C23').val();
		var C32 = +$('#calc_C32').val();
		var C5 = $('#calc_C5').val();
		var C6 = $('#calc_C6').val();
		var B1 = $('#calc_B1').val();
		var C17 = +$('#calc_C17').val();
		var C18 = +$('#calc_C18').val();




		total_income();



		// CWB_calculation ————————————————————————————————————————————————————————————————
		var CWB_calculation = [
			{Province: "ON", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "AB", Base_ded_amount: "2760", Rate: "0.21", Line_20: "formula", Single_amount: "1481", Single_i_spouse_amount: "2216", Line_22: "formula", Base_income_threshold: "13451", Base_income_threshold_i_spouse: "18291", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "BC", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "MB", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "NB", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "NL", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "NS", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "PE", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "QC", Base_ded_amount: "2400", Base_i_spouse_ded_amount: "3600", Base_Rate: "0.274", Line_20: "formula", Single_amount: "2319", Single_i_spouse_amount: "3620", Line_22: "formula", Base_income_threshold: "12308", Base_income_threshold_i_spouse: "18898", Line_25: "formula", Rate_reduction: "0.20", Line_27: "formula" },
			{Province: "SK", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "NT", Base_ded_amount: "3000", Rate: "0.26", Line_20: "formula", Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064", Base_income_threshold_i_spouse: "17348", Line_25: "formula", Rate_reduction: "0.12", Line_27: "formula" },
			{Province: "NU", Base_ded_amount: "6000", Rate_single: "0.1", Rate_Single_i_spouse: "0.14", Line_20: "formula",Single_amount: "1085", Single_i_spouse_amount: "1630",Line_22: "formula",Base_income_threshold: "21654",Base_income_threshold_i_spouse: "29551",Line_25: "formula",Rate_reduction: "0.08",Line_27: "formula" },
			{Province: "YT", Base_ded_amount: "3000", Rate: "0.26",Line_20: "formula",Single_amount: "1381", Single_i_spouse_amount: "2379", Line_22: "formula", Base_income_threshold: "13064",Base_income_threshold_i_spouse: "17348",Line_25: "formula",Rate_reduction: "0.12",Line_27: "formula" }
		]
	
		// CWB_calculation.push({"id": 1, "val": "test"});
		// CWB_calculation.push({"id": 2, "val": "test"});
	
		for (i = 0; i < (province_array.length - 1); i++){
	
			let province = CWB_calculation[i].Province;
			if ( province !=  "QC" && province != "NU" ) {
	
				//line_20
				CWB_calculation[i].Line_20 = Math.max( 0 , (+C12 + +C13 - +C23 - +CWB_calculation[i].Base_ded_amount) ) * CWB_calculation[i].Rate;
				
				//line_22 
				if( C4 == "Yes" ) {var cwb_A = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_A = CWB_calculation[i].Single_amount;}
				if( C4 == "Yes" ) {var cwb_B = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_B = CWB_calculation[i].Single_amount;}
				if( +cwb_B > +CWB_calculation[i].Line_20 ) {var cwb_C = CWB_calculation[i].Line_20;} else {var cwb_C = cwb_A;}
				if( B1 == CWB_calculation[i].Province ) {CWB_calculation[i].Line_22 = +cwb_C;} else {CWB_calculation[i].Line_22 = 0;}

				//line_25
				if( C4 == "Yes" ) {
					var cwb_D = +CWB_calculation[i].Base_income_threshold_i_spouse;
				} else {
					var cwb_D = +CWB_calculation[i].Base_income_threshold;
				}
				var cwb_E = Math.max( 0 , (+C32 + +C5 - +cwb_D) );
				if ( B1 == CWB_calculation[i].Province ) {
					CWB_calculation[i].Line_25 = cwb_E;
				} else {
					CWB_calculation[i].Line_25 = 0;
				}

				//line_27
				CWB_calculation[i].Line_27 = CWB_calculation[i].Line_25 * CWB_calculation[i].Rate_reduction;

				//console.log( CWB_calculation[i].Line_25 );
				//console.log( CWB_calculation[i].Line_27 );
	
			}
			if ( province == "QC" ) {
				//line_20
				if ( C4 == "Yes" ) {
					var cwb_X = CWB_calculation[i].Base_i_spouse_ded_amount;
				} else {
					var cwb_X = CWB_calculation[i].Base_ded_amount;
				}
				CWB_calculation[i].Line_20 = Math.max( 0 , ((+C12 + +C13 - +C23 - +cwb_X) * CWB_calculation[i].Base_Rate) );
				
				//line_22 
				if( C4 == "Yes" ) {var cwb_A = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_A = CWB_calculation[i].Single_amount;}
				if( C4 == "Yes" ) {var cwb_B = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_B = CWB_calculation[i].Single_amount;}
				if( +cwb_B > +CWB_calculation[i].Line_20 ) {var cwb_C = CWB_calculation[i].Line_20;} else {var cwb_C = cwb_A;}
				if( B1 == CWB_calculation[i].Province ) {CWB_calculation[i].Line_22 = cwb_C;} else {CWB_calculation[i].Line_22 = 0;}


				//line_25
				if( C4 == "Yes" ) {var cwb_D = CWB_calculation[i].Base_income_threshold_i_spouse;} else {var cwb_D = CWB_calculation[i].Base_income_threshold;}
				var cwb_E = Math.max( 0 , (+C32 + +C5 - +cwb_D) );
				if( B1 == CWB_calculation[i].Province ) {CWB_calculation[i].Line_25 = cwb_E;} else {CWB_calculation[i].Line_25 = 0 ;}
				//line_27
				CWB_calculation[i].Line_27 = CWB_calculation[i].Line_25 * CWB_calculation[i].Rate_reduction;

				// console.log( "Line_20 " + CWB_calculation[i].Line_20 );
				// console.log( "Line_22 " + CWB_calculation[i].Line_22 );
				// console.log( "Line_25 " + CWB_calculation[i].Line_25 );
				// console.log( "Line_27 " + CWB_calculation[i].Line_27 );
			}
			if ( province == "NU" ) {
				//line_20
				if( C4 == "Yes" ) {var cwb_F = CWB_calculation[i].Rate_Single_i_spouse;} else {var cwb_F = CWB_calculation[i].Rate_single;}
				CWB_calculation[i].Line_20 = Math.max( 0 , (+C12 + +C13 - +C23 - +CWB_calculation[i].Base_ded_amount) ) * cwb_F;
				//line_22 
				if( C4 == "Yes" ) {var cwb_A = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_A = CWB_calculation[i].Single_amount;}
				if( C4 == "Yes" ) {var cwb_B = CWB_calculation[i].Single_i_spouse_amount;} else {var cwb_B = CWB_calculation[i].Single_amount;}
				if( +cwb_B > +CWB_calculation[i].Line_20 ) {var cwb_C = CWB_calculation[i].Line_20;} else {var cwb_C = cwb_A;}
				if( B1 == CWB_calculation[i].Province ) {CWB_calculation[i].Line_22 = cwb_C;} else {CWB_calculation[i].Line_22 = 0;}
				//line_25
				if( C4 == "Yes" ) {var cwb_D = CWB_calculation[i].Base_income_threshold_i_spouse;} else {var cwb_D = CWB_calculation[i].Base_income_threshold;}
				var cwb_E = Math.max( 0 , (+C32 + +C5 - +cwb_D) );
				if( B1 == CWB_calculation[i].Province ) {CWB_calculation[i].Line_25 = cwb_E;} else {CWB_calculation[i].Line_25 = 0 ;}
				//line_27
				CWB_calculation[i].Line_27 = CWB_calculation[i].Line_25 * CWB_calculation[i].Rate_reduction;

				//console.log( CWB_calculation[i].Line_20 );
			}
	
		}

		if ( B1 == "ON" ) {var cwb_amount_22 = +CWB_calculation[0].Line_22;		var cwb_amount_27 = +CWB_calculation[0].Line_27;}
		if ( B1 == "AB" ) {var cwb_amount_22 = +CWB_calculation[1].Line_22;		var cwb_amount_27 = +CWB_calculation[1].Line_27;}
		if ( B1 == "BC" ) {var cwb_amount_22 = +CWB_calculation[2].Line_22;		var cwb_amount_27 = +CWB_calculation[2].Line_27;}
		if ( B1 == "MB" ) {var cwb_amount_22 = +CWB_calculation[3].Line_22;		var cwb_amount_27 = +CWB_calculation[3].Line_27;}
		if ( B1 == "NB" ) {var cwb_amount_22 = +CWB_calculation[4].Line_22;		var cwb_amount_27 = +CWB_calculation[4].Line_27;}
		if ( B1 == "NL" ) {var cwb_amount_22 = +CWB_calculation[5].Line_22;		var cwb_amount_27 = +CWB_calculation[5].Line_27;}
		if ( B1 == "NS" ) {var cwb_amount_22 = +CWB_calculation[6].Line_22;		var cwb_amount_27 = +CWB_calculation[6].Line_27;}
		if ( B1 == "PE" ) {var cwb_amount_22 = +CWB_calculation[7].Line_22;		var cwb_amount_27 = +CWB_calculation[7].Line_27;}
		if ( B1 == "QC" ) {var cwb_amount_22 = +CWB_calculation[8].Line_22;		var cwb_amount_27 = +CWB_calculation[8].Line_27;}
		if ( B1 == "SK" ) {var cwb_amount_22 = +CWB_calculation[9].Line_22;		var cwb_amount_27 = +CWB_calculation[9].Line_27;}
		if ( B1 == "NT" ) {var cwb_amount_22 = +CWB_calculation[10].Line_22;	var cwb_amount_27 = +CWB_calculation[10].Line_27;}
		if ( B1 == "NU" ) {var cwb_amount_22 = +CWB_calculation[11].Line_22;	var cwb_amount_27 = +CWB_calculation[11].Line_27;}
		if ( B1 == "YT" ) {var cwb_amount_22 = +CWB_calculation[12].Line_22;	var cwb_amount_27 = +CWB_calculation[12].Line_27;}

		if ( cwb_amount_22 == undefined ){
			var cwb_amount_22 = 0;
		}
		if ( cwb_amount_27 == undefined ){
			var cwb_amount_27 = 0;
		}

		var CWB_amount = Math.max(0, (+cwb_amount_22 - +cwb_amount_27));
		

		// CWB_calculation ————————————————————————————————————————————————————————————————



		// Federal Tax 2020 ————————————————————————————————————————————————————————————————
		var Federal_Tax = [
			{Bracket: "1", Lower_end: "formula",Higher_end: "48535",Tax_rate: "0.15",Max_amount: "formula",Tax_amount: "formula"},
			{Bracket: "2", Lower_end: "formula",Higher_end: "97069",Tax_rate: "0.205",Max_amount: "formula",Tax_amount: "formula"},
			{Bracket: "3", Lower_end: "formula",Higher_end: "150473",Tax_rate: "0.26",Max_amount: "formula",Tax_amount: "formula"},
			{Bracket: "4", Lower_end: "formula",Higher_end: "214368",Tax_rate: "0.29",Max_amount: "formula",Tax_amount: "formula"},
			{Bracket: "5", Lower_end: "formula",Higher_end: "999999999",Tax_rate: "0.33",Max_amount: "formula",Tax_amount: "formula"}
		];
		var Fed_Surtax_rate = 0.48;

		//console.log("c32 " + C32);
		

		for(i = 0; i < Federal_Tax.length; i++){
			if ( i == 0 ){
				Federal_Tax[i].Lower_end = 0;
			} else {
				Federal_Tax[i].Lower_end = +Federal_Tax[i-1].Higher_end + 1;
			}

			if ( ((+Federal_Tax[i].Higher_end - +Federal_Tax[i].Lower_end) * Federal_Tax[i].Tax_rate) < 0 ){
				Federal_Tax[i].Max_amount = 0;
			} else {
				Federal_Tax[i].Max_amount = (+Federal_Tax[i].Higher_end - +Federal_Tax[i].Lower_end) * Federal_Tax[i].Tax_rate;
			}

			if ( i == 4 ) {
				if ( C32 >= +Federal_Tax[i].Lower_end ){
					if( i == 4 ) {Federal_Tax[i].Tax_amount = ((+C32 - +Federal_Tax[i-1].Higher_end) * Federal_Tax[i].Tax_rate) + +Federal_Tax[i-4].Max_amount + +Federal_Tax[i-3].Max_amount + +Federal_Tax[i-2].Max_amount + +Federal_Tax[i-1].Max_amount;}
				} else {
					Federal_Tax[i].Tax_amount = 0;
				}
			} else {
				if ( (C32 >= +Federal_Tax[i].Lower_end) && (C32 <= +Federal_Tax[i].Higher_end) ){
					if ( i == 0 ){
						Federal_Tax[i].Tax_amount = C32 * Federal_Tax[i].Tax_rate;
					}
					if( i == 1 ) {Federal_Tax[i].Tax_amount = ((+C32 - +Federal_Tax[i-1].Higher_end) * Federal_Tax[i].Tax_rate) + +Federal_Tax[i-1].Max_amount;}
					if( i == 2 ) {Federal_Tax[i].Tax_amount = ((+C32 - +Federal_Tax[i-1].Higher_end) * Federal_Tax[i].Tax_rate) + +Federal_Tax[i-2].Max_amount + +Federal_Tax[i-1].Max_amount;}
					if( i == 3 ) {Federal_Tax[i].Tax_amount = ((+C32 - +Federal_Tax[i-1].Higher_end) * Federal_Tax[i].Tax_rate) + +Federal_Tax[i-3].Max_amount + +Federal_Tax[i-2].Max_amount + +Federal_Tax[i-1].Max_amount;}
					if( i == 4 ) {Federal_Tax[i].Tax_amount = ((+C32 - +Federal_Tax[i-1].Higher_end) * Federal_Tax[i].Tax_rate) + +Federal_Tax[i-4].Max_amount + +Federal_Tax[i-3].Max_amount + +Federal_Tax[i-2].Max_amount + +Federal_Tax[i-1].Max_amount;}
				} else {
					Federal_Tax[i].Tax_amount = 0;
				}
			}


			//console.log("Max_amount " + Federal_Tax[i].Max_amount);
			//console.log("Tax_amount " + Federal_Tax[i].Tax_amount);
		}
		

		var Federal_Tax_itog = 0;
		for(i = 0; i < Federal_Tax.length; i++){
			Federal_Tax_itog = +Federal_Tax_itog + +Federal_Tax[i].Tax_amount;
		}

		//console.log("Federal_Tax_itog " + Federal_Tax_itog);
		
		

		// Federal Tax 2020 ————————————————————————————————————————————————————————————————

		// PX table ————————————————————————————————————————————————————————————————

		var PX_table = [
			{id: 0,		LineName: "Basic personal amount",		Helper_Column: "", 			BPA_Threshold: "150473", 	BPA_amount: "63895", 	BPA_additional: "931", 	Max_PPIP: "", 			Base_amount: "formula", 	Base_rate: "", 			Max_Limit: "13229"},
			{id: 1,		LineName: "Spouse amount",				Helper_Column: "", 			BPA_Threshold: "formula", 	BPA_amount: "formula", 	BPA_additional: "931", 	Max_PPIP: "", 			Base_amount: "formula", 	Base_rate: "", 			Max_Limit: "formula"},
			{id: 2,		LineName: "CPP base",					Helper_Column: "0.942857", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "55200", 		Base_rate: "0.0495", 	Max_Limit: "formula"},
			{id: 3,		LineName: "CPP enhanced",				Helper_Column: "formula", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "formula", 	Base_rate: "0.0030", 	Max_Limit: "formula"},
			{id: 4,		LineName: "QPP QC",						Helper_Column: "0.947368", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "55200", 		Base_rate: "0.0540", 	Max_Limit: "2980,8"},
			{id: 5,		LineName: "QPP enhanced",				Helper_Column: "formula", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "formula", 	Base_rate: "0.0030", 	Max_Limit: "formula"},
			{id: 6,		LineName: "EI",							Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "54200", 		Base_rate: "0.0158", 	Max_Limit: "formula"},
			{id: 7,		LineName: "EI QC",						Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "54200", 		Base_rate: "0.0120", 	Max_Limit: "650.40"},
			{id: 8,		LineName: "PPIP QC",					Helper_Column: "0.43736", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "387.79", 	Base_amount: "78500", 		Base_rate: "0.00878", 	Max_Limit: "689.23"},
			{id: 9,		LineName: "Federal QC abatement",		Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "", 			Base_rate: "0.1650", 	Max_Limit: ""},
			{id: 10,	LineName: "Canada employment amount",	Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "", 			Base_rate: "", 			Max_Limit: "1245"},
			{id: 11,	LineName: "Federal tax credit",			Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "", 			Base_rate: "0.15", 		Max_Limit: ""},
			{id: 12,	LineName: "Federal EDTC",				Helper_Column: "formula", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "", 			Base_rate: "formula", 	Max_Limit: ""},
			{id: 13,	LineName: "Federal Non EDTC",			Helper_Column: "formula", 	BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "", 			Base_rate: "formula", 	Max_Limit: ""},
			{id: 14,	LineName: "ON Surtax 1",				Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "4830", 		Base_rate: "0.20", 		Max_Limit: ""},
			{id: 15,	LineName: "ON Surtax 2",				Helper_Column: "", 			BPA_Threshold: "", 			BPA_amount: "", 		BPA_additional: "", 	Max_PPIP: "", 			Base_amount: "6182", 		Base_rate: "0.36", 		Max_Limit: ""}
		];

		PX_table[1].BPA_Threshold = PX_table[0].BPA_Threshold;
		PX_table[1].BPA_amount = PX_table[0].BPA_amount;
		PX_table[0].Base_amount = +PX_table[0].Max_Limit - +PX_table[0].BPA_additional;
		PX_table[1].Max_Limit = PX_table[0].Max_Limit;
		PX_table[1].Base_amount = +PX_table[1].Max_Limit - +PX_table[1].BPA_additional;

		PX_table[3].Helper_Column = 1 - +PX_table[2].Helper_Column;
		PX_table[5].Helper_Column = 1 - +PX_table[4].Helper_Column;

		PX_table[12].Helper_Column = EDTC_array[1].Gross_up;
		PX_table[13].Helper_Column = nonEDTC_array[1].Gross_up;

		PX_table[3].Base_amount = PX_table[2].Base_amount;
		PX_table[5].Base_amount = PX_table[4].Base_amount;

		PX_table[12].Base_rate = EDTC_array[1].Federal;
		PX_table[13].Base_rate = nonEDTC_array[1].Federal;

		PX_table[2].Max_Limit = PX_table[2].Base_amount * PX_table[2].Base_rate;
		PX_table[3].Max_Limit = PX_table[3].Base_amount * PX_table[3].Base_rate;
		PX_table[5].Max_Limit = PX_table[5].Base_amount * PX_table[5].Base_rate;
		PX_table[6].Max_Limit = PX_table[6].Base_amount * PX_table[6].Base_rate;

		// PX table ————————————————————————————————————————————————————————————————

		// Provincial Table 1 ————————————————————————————————————————————————————————————————

		var Provincial_Table_1 = [
			{id: 0,		Province: "ON", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "10783",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 1,		Province: "ON", Deduction: "Spouse amount",	 		Max_2020: "10071", 	Min_2020: "9156",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 2,		Province: "AB", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "19369",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 3,		Province: "AB", Deduction: "Spouse amount",			Max_2020: "19369", 	Min_2020: "19369",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 4,		Province: "BC", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "10949",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 5,		Province: "BC", Deduction: "Spouse amount",			Max_2020: "10314", 	Min_2020: "9376",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 6,		Province: "MB", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "9838",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 7,		Province: "MB", Deduction: "Spouse amount",			Max_2020: "9134", 	Min_2020: "9134",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 8,		Province: "NB", Deduction: "Family tax benefit",		Max_2020: "2065", 	Min_2020: "",		 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: "0.09"},
			{id: 9,		Province: "NB", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "10459",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 10,	Province: "NB", Deduction: "Spouse amount",			Max_2020: "9771", 	Min_2020: "8882",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 11,	Province: "NL", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "9498",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 12,	Province: "NL", Deduction: "Spouse amount",			Max_2020: "8538", 	Min_2020: "7761",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 13,	Province: "NS", Deduction: "Basic personal amount",	Max_2020: "11481", 	Min_2020: "8481",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "25000", Max_Taxable_Threshold: "75000", Rate: "0.06"},
			{id: 14,	Province: "NS", Deduction: "Spouse amount",			Max_2020: "11481", 	Min_2020: "8481",	 NS_base_amount: "9329", NS_Supplement: "3000", Min_Taxable_Threshold: "formula", Max_Taxable_Threshold: "formula", Rate: "formula"},
			{id: 15,	Province: "NT", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "15093",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 16,	Province: "NT", Deduction: "Spouse amount",			Max_2020: "", 		Min_2020: "15093",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 17,	Province: "NU", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "16304",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 18,	Province: "NU", Deduction: "Spouse amount",			Max_2020: "", 		Min_2020: "16304",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 19,	Province: "PE", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "10000",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 20,	Province: "PE", Deduction: "Spouse amount",			Max_2020: "9342", 	Min_2020: "8493",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 21,	Province: "QC", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "15532",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 22,	Province: "QC", Deduction: "Spouse amount",			Max_2020: "", 		Min_2020: "15532",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 23,	Province: "SK", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "16065",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 24,	Province: "SK", Deduction: "Spouse amount",			Max_2020: "17672", 	Min_2020: "16065",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 25,	Province: "YT", Deduction: "Basic personal amount",	Max_2020: "", 		Min_2020: "13229",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""},
			{id: 26,	Province: "YT", Deduction: "Spouse amount",			Max_2020: "", 		Min_2020: "13229",	 NS_base_amount: "", NS_Supplement: "", Min_Taxable_Threshold: "", Max_Taxable_Threshold: "", Rate: ""}
		]

		Provincial_Table_1[14].Min_Taxable_Threshold = Provincial_Table_1[13].Min_Taxable_Threshold;
		Provincial_Table_1[14].Max_Taxable_Threshold = Provincial_Table_1[13].Max_Taxable_Threshold;
		Provincial_Table_1[14].Rate = Provincial_Table_1[13].Rate;

		// Provincial Table 1 ————————————————————————————————————————————————————————————————

		// Climate Action Incentive ————————————————————————————————————————————————————————————————

		var Climate_Action_Incentive = [
			{id: 0,  CAI: "AB", Self: "490", Additional: "245",	 Amount: ""},
			{id: 1,  CAI: "BC", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 2,  CAI: "MB", Self: "360", Additional: "180",	 Amount: ""},
			{id: 3,  CAI: "NB", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 4,  CAI: "NL", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 5,  CAI: "NS", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 6,  CAI: "NT", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 7,  CAI: "NU", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 8,  CAI: "ON", Self: "300", Additional: "150",	 Amount: ""},
			{id: 9, CAI: "PE", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 10, CAI: "QC", Self: "0",	 Additional: "0",	 Amount: ""},
			{id: 11, CAI: "SK", Self: "500", Additional: "250",	 Amount: ""},
			{id: 12, CAI: "YT", Self: "0",	 Additional: "0",	 Amount: ""}
		];

		for (i = 0; i < Climate_Action_Incentive.length; i++){
			if ( Climate_Action_Incentive[i].CAI == B1 ) {
				if ( C4 == "Yes" ) {
					Climate_Action_Incentive[i].Amount = +Climate_Action_Incentive[i].Self + +Climate_Action_Incentive[i].Additional;
				} else {
					Climate_Action_Incentive[i].Amount = Climate_Action_Incentive[i].Self;
				}
			} else {
				Climate_Action_Incentive[i].Amount = 0;
			}
		}

		var CAI = 0;
		for (i = 0; i < Climate_Action_Incentive.length; i++){
			CAI = +CAI + +Climate_Action_Incentive[i].Amount;
		}
		// Climate Action Incentive ————————————————————————————————————————————————————————————————



		// Provincial Tax Bracket 2021 ————————————————————————————————————————————————————————————————

		var Provincial_Tax_Bracket_2021_ON = [
			{id: 0, Province: "ON",	Lower_end: "0",	Higher_end: "44740",	Tax_rate: "0.0505",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "ON",	Lower_end: "",	Higher_end: "89482",	Tax_rate: "0.0915",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "ON",	Lower_end: "",	Higher_end: "150000",	Tax_rate: "0.1116",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "ON",	Lower_end: "",	Higher_end: "220000",	Tax_rate: "0.1216",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "ON",	Lower_end: "",	Higher_end: "999999999",			Tax_rate: "0.1316",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 5, Province: "ON",	Lower_end: "",	Higher_end: "",			Tax_rate: "",		Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_ON_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_ON.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_ON[i].Lower_end = +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_ON[i].Higher_end - +Provincial_Tax_Bracket_2021_ON[i].Lower_end ) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_ON[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_ON[i].Max_amount = (+Provincial_Tax_Bracket_2021_ON[i].Higher_end - +Provincial_Tax_Bracket_2021_ON[i].Lower_end ) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_ON[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_ON[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_ON[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_ON[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate + +Provincial_Tax_Bracket_2021_ON[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate + +Provincial_Tax_Bracket_2021_ON[i-1].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate + +Provincial_Tax_Bracket_2021_ON[i-1].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-2].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate + +Provincial_Tax_Bracket_2021_ON[i-1].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-2].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-3].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_ON[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_ON[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_ON_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_ON_Tax_amount_Summ + Provincial_Tax_Bracket_2021_ON[i].Tax_amount;

			// ———————————————————————————————————————————————————————————————— !!! ————————————————————————————————————————————————————————————————
			//if ( i == 5 ) {Provincial_Tax_Bracket_2021_ON[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_ON[i-1].Higher_end) * Provincial_Tax_Bracket_2021_ON[i].Tax_rate + +Provincial_Tax_Bracket_2021_ON[i-1].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-2].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-3].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-4].Max_amount + +Provincial_Tax_Bracket_2021_ON[i-5].Tax_amount;}
			// ———————————————————————————————————————————————————————————————— !!! ————————————————————————————————————————————————————————————————

		}

		var Provincial_Tax_Bracket_2021_AB = [
			{id: 0, Province: "AB",	Lower_end: "0",	Higher_end: "131220",	Tax_rate: "0.10",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "AB",	Lower_end: "",	Higher_end: "157464",	Tax_rate: "0.12",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "AB",	Lower_end: "",	Higher_end: "209952",	Tax_rate: "0.13",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "AB",	Lower_end: "",	Higher_end: "314928",	Tax_rate: "0.14",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "AB",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.15",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_AB_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_AB.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_AB[i].Lower_end = +Provincial_Tax_Bracket_2021_AB[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_AB[i].Higher_end - +Provincial_Tax_Bracket_2021_AB[i].Lower_end ) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_AB[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_AB[i].Max_amount = (+Provincial_Tax_Bracket_2021_AB[i].Higher_end - +Provincial_Tax_Bracket_2021_AB[i].Lower_end ) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_AB[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_AB[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_AB[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_AB[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_AB[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_AB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_AB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate + +Provincial_Tax_Bracket_2021_AB[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_AB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_AB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate + +Provincial_Tax_Bracket_2021_AB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_AB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_AB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate + +Provincial_Tax_Bracket_2021_AB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-2].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_AB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_AB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_AB[i].Tax_rate + +Provincial_Tax_Bracket_2021_AB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-2].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-3].Max_amount + +Provincial_Tax_Bracket_2021_AB[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_AB[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_AB[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_AB_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_AB_Tax_amount_Summ + Provincial_Tax_Bracket_2021_AB[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_BC = [
			{id: 0, Province: "BC",	Lower_end: "0",	Higher_end: "41725",	Tax_rate: "0.0506",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "BC",	Lower_end: "",	Higher_end: "83451",	Tax_rate: "0.0770",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "BC",	Lower_end: "",	Higher_end: "95812",	Tax_rate: "0.1050",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "BC",	Lower_end: "",	Higher_end: "116344",	Tax_rate: "0.1229",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "BC",	Lower_end: "",	Higher_end: "157748",	Tax_rate: "0.1470",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 5, Province: "BC",	Lower_end: "",	Higher_end: "220000",	Tax_rate: "0.1680",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 6, Province: "BC",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.2050",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_BC_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_BC.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_BC[i].Lower_end = +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_BC[i].Higher_end - +Provincial_Tax_Bracket_2021_BC[i].Lower_end ) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_BC[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_BC[i].Max_amount = (+Provincial_Tax_Bracket_2021_BC[i].Higher_end - +Provincial_Tax_Bracket_2021_BC[i].Lower_end ) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_BC[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_BC[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_BC[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_BC[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-3].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-4].Max_amount;}
					if ( i == 5 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-3].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-4].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-5].Max_amount;}
					if ( i == 6 ) {Provincial_Tax_Bracket_2021_BC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_BC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_BC[i].Tax_rate + +Provincial_Tax_Bracket_2021_BC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-3].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-4].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-5].Max_amount + +Provincial_Tax_Bracket_2021_BC[i-6].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_BC[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_BC[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_BC_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_BC_Tax_amount_Summ + Provincial_Tax_Bracket_2021_BC[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_MB = [
			{id: 0, Province: "MB",	Lower_end: "0",	Higher_end: "33389",	Tax_rate: "0.1080",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "MB",	Lower_end: "",	Higher_end: "72164",	Tax_rate: "0.1275",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "MB",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1740",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_MB_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_MB.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_MB[i].Lower_end = +Provincial_Tax_Bracket_2021_MB[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_MB[i].Higher_end - +Provincial_Tax_Bracket_2021_MB[i].Lower_end ) * Provincial_Tax_Bracket_2021_MB[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_MB[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_MB[i].Max_amount = (+Provincial_Tax_Bracket_2021_MB[i].Higher_end - +Provincial_Tax_Bracket_2021_MB[i].Lower_end ) * Provincial_Tax_Bracket_2021_MB[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_MB[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_MB[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_MB[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_MB[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_MB[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_MB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_MB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_MB[i].Tax_rate + +Provincial_Tax_Bracket_2021_MB[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_MB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_MB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_MB[i].Tax_rate + +Provincial_Tax_Bracket_2021_MB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_MB[i-2].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_MB[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_MB[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_MB_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_MB_Tax_amount_Summ + Provincial_Tax_Bracket_2021_MB[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_NB = [
			{id: 0, Province: "NB",	Lower_end: "0",	Higher_end: "43401",	Tax_rate: "0.0968",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "NB",	Lower_end: "",	Higher_end: "86803",	Tax_rate: "0.1482",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "NB",	Lower_end: "",	Higher_end: "141122",	Tax_rate: "0.1652",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "NB",	Lower_end: "",	Higher_end: "160776",	Tax_rate: "0.1784",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "NB",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.2030",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_NB_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_NB.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_NB[i].Lower_end = +Provincial_Tax_Bracket_2021_NB[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_NB[i].Higher_end - +Provincial_Tax_Bracket_2021_NB[i].Lower_end ) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_NB[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_NB[i].Max_amount = (+Provincial_Tax_Bracket_2021_NB[i].Higher_end - +Provincial_Tax_Bracket_2021_NB[i].Lower_end ) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_NB[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_NB[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_NB[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_NB[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_NB[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_NB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate + +Provincial_Tax_Bracket_2021_NB[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_NB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate + +Provincial_Tax_Bracket_2021_NB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_NB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate + +Provincial_Tax_Bracket_2021_NB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_NB[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NB[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NB[i].Tax_rate + +Provincial_Tax_Bracket_2021_NB[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-3].Max_amount + +Provincial_Tax_Bracket_2021_NB[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_NB[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_NB[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_NB_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_NB_Tax_amount_Summ + Provincial_Tax_Bracket_2021_NB[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_NL = [
			{id: 0, Province: "NL",	Lower_end: "0",	Higher_end: "37929",	Tax_rate: "0.0870",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "NL",	Lower_end: "",	Higher_end: "75858",	Tax_rate: "0.1450",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "NL",	Lower_end: "",	Higher_end: "135432",	Tax_rate: "0.1580",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "NL",	Lower_end: "",	Higher_end: "189604",	Tax_rate: "0.1730",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "NL",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1830",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_NL_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_NL.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_NL[i].Lower_end = +Provincial_Tax_Bracket_2021_NL[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_NL[i].Higher_end - +Provincial_Tax_Bracket_2021_NL[i].Lower_end ) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_NL[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_NL[i].Max_amount = (+Provincial_Tax_Bracket_2021_NL[i].Higher_end - +Provincial_Tax_Bracket_2021_NL[i].Lower_end ) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_NL[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_NL[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_NL[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_NL[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_NL[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_NL[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NL[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate + +Provincial_Tax_Bracket_2021_NL[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_NL[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NL[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate + +Provincial_Tax_Bracket_2021_NL[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_NL[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NL[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate + +Provincial_Tax_Bracket_2021_NL[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_NL[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NL[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NL[i].Tax_rate + +Provincial_Tax_Bracket_2021_NL[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-3].Max_amount + +Provincial_Tax_Bracket_2021_NL[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_NL[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_NL[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_NL_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_NL_Tax_amount_Summ + Provincial_Tax_Bracket_2021_NL[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_NS = [
			{id: 0, Province: "NS",	Lower_end: "0",	Higher_end: "29590",	Tax_rate: "0.0879",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "NS",	Lower_end: "",	Higher_end: "59180",	Tax_rate: "0.1495",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "NS",	Lower_end: "",	Higher_end: "93000",	Tax_rate: "0.1667",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "NS",	Lower_end: "",	Higher_end: "150000",	Tax_rate: "0.1750",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "NS",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.2100",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_NS_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_NS.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_NS[i].Lower_end = +Provincial_Tax_Bracket_2021_NS[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_NS[i].Higher_end - +Provincial_Tax_Bracket_2021_NS[i].Lower_end ) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_NS[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_NS[i].Max_amount = (+Provincial_Tax_Bracket_2021_NS[i].Higher_end - +Provincial_Tax_Bracket_2021_NS[i].Lower_end ) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_NS[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_NS[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_NS[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_NS[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_NS[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_NS[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NS[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate + +Provincial_Tax_Bracket_2021_NS[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_NS[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NS[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate + +Provincial_Tax_Bracket_2021_NS[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_NS[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NS[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate + +Provincial_Tax_Bracket_2021_NS[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_NS[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NS[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NS[i].Tax_rate + +Provincial_Tax_Bracket_2021_NS[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-3].Max_amount + +Provincial_Tax_Bracket_2021_NS[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_NS[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_NS[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_NS_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_NS_Tax_amount_Summ + Provincial_Tax_Bracket_2021_NS[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_NT = [
			{id: 0, Province: "NT",	Lower_end: "0",	Higher_end: "43957",	Tax_rate: "0.0590",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "NT",	Lower_end: "",	Higher_end: "87916",	Tax_rate: "0.0860",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "NT",	Lower_end: "",	Higher_end: "142932",	Tax_rate: "0.1220",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "NT",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1405",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_NT_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_NT.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_NT[i].Lower_end = +Provincial_Tax_Bracket_2021_NT[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_NT[i].Higher_end - +Provincial_Tax_Bracket_2021_NT[i].Lower_end ) * Provincial_Tax_Bracket_2021_NT[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_NT[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_NT[i].Max_amount = (+Provincial_Tax_Bracket_2021_NT[i].Higher_end - +Provincial_Tax_Bracket_2021_NT[i].Lower_end ) * Provincial_Tax_Bracket_2021_NT[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_NT[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_NT[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_NT[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_NT[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_NT[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_NT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NT[i].Tax_rate + +Provincial_Tax_Bracket_2021_NT[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_NT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NT[i].Tax_rate + +Provincial_Tax_Bracket_2021_NT[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NT[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_NT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NT[i].Tax_rate + +Provincial_Tax_Bracket_2021_NT[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NT[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NT[i-3].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_NT[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_NT[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_NT_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_NT_Tax_amount_Summ + Provincial_Tax_Bracket_2021_NT[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_NU = [
			{id: 0, Province: "NU",	Lower_end: "0",	Higher_end: "46277",	Tax_rate: "0.0400",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "NU",	Lower_end: "",	Higher_end: "92555",	Tax_rate: "0.0700",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "NU",	Lower_end: "",	Higher_end: "150473",	Tax_rate: "0.0900",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "NU",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1150",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_NU_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_NU.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_NU[i].Lower_end = +Provincial_Tax_Bracket_2021_NU[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_NU[i].Higher_end - +Provincial_Tax_Bracket_2021_NU[i].Lower_end ) * Provincial_Tax_Bracket_2021_NU[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_NU[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_NU[i].Max_amount = (+Provincial_Tax_Bracket_2021_NU[i].Higher_end - +Provincial_Tax_Bracket_2021_NU[i].Lower_end ) * Provincial_Tax_Bracket_2021_NU[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_NU[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_NU[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_NU[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_NU[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_NU[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_NU[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NU[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NU[i].Tax_rate + +Provincial_Tax_Bracket_2021_NU[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_NU[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NU[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NU[i].Tax_rate + +Provincial_Tax_Bracket_2021_NU[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NU[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_NU[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_NU[i-1].Higher_end) * Provincial_Tax_Bracket_2021_NU[i].Tax_rate + +Provincial_Tax_Bracket_2021_NU[i-1].Max_amount + +Provincial_Tax_Bracket_2021_NU[i-2].Max_amount + +Provincial_Tax_Bracket_2021_NU[i-3].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_NU[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_NU[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_NU_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_NU_Tax_amount_Summ + Provincial_Tax_Bracket_2021_NU[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_PE = [
			{id: 0, Province: "PE",	Lower_end: "0",	Higher_end: "31984",	Tax_rate: "0.0980",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "PE",	Lower_end: "",	Higher_end: "63969",	Tax_rate: "0.1380",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "PE",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1670",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_PE_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_PE.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_PE[i].Lower_end = +Provincial_Tax_Bracket_2021_PE[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_PE[i].Higher_end - +Provincial_Tax_Bracket_2021_PE[i].Lower_end ) * Provincial_Tax_Bracket_2021_PE[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_PE[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_PE[i].Max_amount = (+Provincial_Tax_Bracket_2021_PE[i].Higher_end - +Provincial_Tax_Bracket_2021_PE[i].Lower_end ) * Provincial_Tax_Bracket_2021_PE[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_PE[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_PE[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_PE[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_PE[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_PE[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_PE[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_PE[i-1].Higher_end) * Provincial_Tax_Bracket_2021_PE[i].Tax_rate + +Provincial_Tax_Bracket_2021_PE[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_PE[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_PE[i-1].Higher_end) * Provincial_Tax_Bracket_2021_PE[i].Tax_rate + +Provincial_Tax_Bracket_2021_PE[i-1].Max_amount + +Provincial_Tax_Bracket_2021_PE[i-2].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_PE[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_PE[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_PE_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_PE_Tax_amount_Summ + Provincial_Tax_Bracket_2021_PE[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_QC = [
			{id: 0, Province: "QC",	Lower_end: "1190",	Higher_end: "0",	Tax_rate: "0.0600",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "QC",	Lower_end: "0",	Higher_end: "44545",	Tax_rate: "0.1500",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "QC",	Lower_end: "",	Higher_end: "89080",	Tax_rate: "0.2000",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "QC",	Lower_end: "",	Higher_end: "108390",	Tax_rate: "0.2400",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "QC",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.2575",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_QC_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_QC.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_QC[i].Lower_end = +Provincial_Tax_Bracket_2021_QC[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_QC[i].Higher_end - +Provincial_Tax_Bracket_2021_QC[i].Lower_end ) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_QC[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_QC[i].Max_amount = (+Provincial_Tax_Bracket_2021_QC[i].Higher_end - +Provincial_Tax_Bracket_2021_QC[i].Lower_end ) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate;
			}

			if (i == 0){
				Provincial_Tax_Bracket_2021_QC[i].Max_amount = Math.max(0, (Math.min(Provincial_Tax_Bracket_2021_QC[i].Lower_end, ((+C12 + +C13 - +C23) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate) )));
			}

			if( Provincial_Tax_Bracket_2021_QC[i].Province == B1 ) {
				// if ( +C32 >= +Provincial_Tax_Bracket_2021_QC[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_QC[i].Higher_end ) {
				// 	if ( i == 0 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_QC[i].Tax_rate;}
				// 	if ( i == 1 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_QC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + +Provincial_Tax_Bracket_2021_QC[i-1].Max_amount;}
				// 	if ( i == 2 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_QC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + +Provincial_Tax_Bracket_2021_QC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-2].Max_amount;}
				// 	if ( i == 3 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_QC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + +Provincial_Tax_Bracket_2021_QC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-3].Max_amount;}
				// 	if ( i == 4 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_QC[i-1].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + +Provincial_Tax_Bracket_2021_QC[i-1].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-2].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-3].Max_amount + +Provincial_Tax_Bracket_2021_QC[i-4].Max_amount;}
				// } else {
				// 	Provincial_Tax_Bracket_2021_QC[i].Tax_amount = 0;
				// }

				if ( (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount) >= Provincial_Tax_Bracket_2021_QC[i].Lower_end && (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount) <= Provincial_Tax_Bracket_2021_QC[i].Higher_end ) {
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount - Provincial_Tax_Bracket_2021_QC[1].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + Provincial_Tax_Bracket_2021_QC[1].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount - Provincial_Tax_Bracket_2021_QC[2].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + Provincial_Tax_Bracket_2021_QC[1].Max_amount + Provincial_Tax_Bracket_2021_QC[2].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = (C32 - Provincial_Tax_Bracket_2021_QC[0].Max_amount - Provincial_Tax_Bracket_2021_QC[3].Higher_end) * Provincial_Tax_Bracket_2021_QC[i].Tax_rate + Provincial_Tax_Bracket_2021_QC[1].Max_amount + Provincial_Tax_Bracket_2021_QC[2].Max_amount + Provincial_Tax_Bracket_2021_QC[3].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_QC[i].Tax_amount = 0;
				}

				if ( i == 0 ) {Provincial_Tax_Bracket_2021_QC[i].Tax_amount = 0;}

			} else {
				Provincial_Tax_Bracket_2021_QC[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_QC_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_QC_Tax_amount_Summ + Provincial_Tax_Bracket_2021_QC[i].Tax_amount;
			//console.log(Provincial_Tax_Bracket_2021_QC_Tax_amount_Summ);
			
		
		}

		//console.log(Provincial_Tax_Bracket_2021_QC[0].Tax_amount);
		//console.log(Provincial_Tax_Bracket_2021_QC[1].Tax_amount);
		//console.log(Provincial_Tax_Bracket_2021_QC[2].Tax_amount);
		//console.log(Provincial_Tax_Bracket_2021_QC[3].Tax_amount);
		//console.log(Provincial_Tax_Bracket_2021_QC[4].Tax_amount);

		var Provincial_Tax_Bracket_2021_SK = [
			{id: 0, Province: "SK",	Lower_end: "0",	Higher_end: "45225",	Tax_rate: "0.1050",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "SK",	Lower_end: "",	Higher_end: "129214",	Tax_rate: "0.1250",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "SK",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1450",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_SK_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_SK.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_SK[i].Lower_end = +Provincial_Tax_Bracket_2021_SK[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_SK[i].Higher_end - +Provincial_Tax_Bracket_2021_SK[i].Lower_end ) * Provincial_Tax_Bracket_2021_SK[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_SK[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_SK[i].Max_amount = (+Provincial_Tax_Bracket_2021_SK[i].Higher_end - +Provincial_Tax_Bracket_2021_SK[i].Lower_end ) * Provincial_Tax_Bracket_2021_SK[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_SK[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_SK[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_SK[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_SK[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_SK[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_SK[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_SK[i-1].Higher_end) * Provincial_Tax_Bracket_2021_SK[i].Tax_rate + +Provincial_Tax_Bracket_2021_SK[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_SK[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_SK[i-1].Higher_end) * Provincial_Tax_Bracket_2021_SK[i].Tax_rate + +Provincial_Tax_Bracket_2021_SK[i-1].Max_amount + +Provincial_Tax_Bracket_2021_SK[i-2].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_SK[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_SK[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_SK_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_SK_Tax_amount_Summ + Provincial_Tax_Bracket_2021_SK[i].Tax_amount;
		}


		var Provincial_Tax_Bracket_2021_YT = [
			{id: 0, Province: "YT",	Lower_end: "0",	Higher_end: "48535",	Tax_rate: "0.0640",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 1, Province: "YT",	Lower_end: "",	Higher_end: "97069",	Tax_rate: "0.0900",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 2, Province: "YT",	Lower_end: "",	Higher_end: "150473",	Tax_rate: "0.1090",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 3, Province: "YT",	Lower_end: "",	Higher_end: "500000",	Tax_rate: "0.1280",	Min_amount: "",	Max_amount: "",	Tax_amount: ""},
			{id: 4, Province: "YT",	Lower_end: "",	Higher_end: "999999999",		Tax_rate: "0.1500",	Min_amount: "",	Max_amount: "",	Tax_amount: ""}
		];

		var Provincial_Tax_Bracket_2021_YT_Tax_amount_Summ = 0;
		for( i = 0; i < Provincial_Tax_Bracket_2021_YT.length; i++){
			if(i > 0){
				Provincial_Tax_Bracket_2021_YT[i].Lower_end = +Provincial_Tax_Bracket_2021_YT[i-1].Higher_end + 1;
			}

			if( (+Provincial_Tax_Bracket_2021_YT[i].Higher_end - +Provincial_Tax_Bracket_2021_YT[i].Lower_end ) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate < 0 ) {
				Provincial_Tax_Bracket_2021_YT[i].Max_amount = 0;
			} else {
				Provincial_Tax_Bracket_2021_YT[i].Max_amount = (+Provincial_Tax_Bracket_2021_YT[i].Higher_end - +Provincial_Tax_Bracket_2021_YT[i].Lower_end ) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate;
			}

			if( Provincial_Tax_Bracket_2021_YT[i].Province == B1 ) {
				if ( +C32 >= +Provincial_Tax_Bracket_2021_YT[i].Lower_end && +C32 <= +Provincial_Tax_Bracket_2021_YT[i].Higher_end ) {
					if ( i == 0 ) {Provincial_Tax_Bracket_2021_YT[i].Tax_amount = +C32 * Provincial_Tax_Bracket_2021_YT[i].Tax_rate;}
					if ( i == 1 ) {Provincial_Tax_Bracket_2021_YT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_YT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate + +Provincial_Tax_Bracket_2021_YT[i-1].Max_amount;}
					if ( i == 2 ) {Provincial_Tax_Bracket_2021_YT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_YT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate + +Provincial_Tax_Bracket_2021_YT[i-1].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-2].Max_amount;}
					if ( i == 3 ) {Provincial_Tax_Bracket_2021_YT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_YT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate + +Provincial_Tax_Bracket_2021_YT[i-1].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-2].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-3].Max_amount;}
					if ( i == 4 ) {Provincial_Tax_Bracket_2021_YT[i].Tax_amount = (+C32 - +Provincial_Tax_Bracket_2021_YT[i-1].Higher_end) * Provincial_Tax_Bracket_2021_YT[i].Tax_rate + +Provincial_Tax_Bracket_2021_YT[i-1].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-2].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-3].Max_amount + +Provincial_Tax_Bracket_2021_YT[i-4].Max_amount;}
				} else {
					Provincial_Tax_Bracket_2021_YT[i].Tax_amount = 0;
				}
			} else {
				Provincial_Tax_Bracket_2021_YT[i].Tax_amount = 0;
			}
			var Provincial_Tax_Bracket_2021_YT_Tax_amount_Summ = +Provincial_Tax_Bracket_2021_YT_Tax_amount_Summ + Provincial_Tax_Bracket_2021_YT[i].Tax_amount;
		}





		//console.log(Provincial_Tax_Bracket_2021_BC[5].Max_amount);
		// Provincial Tax Bracket 2021 ————————————————————————————————————————————————————————————————


		// Schedule 8 CPP 2020 ————————————————————————————————————————————————————————————————

		// CPP/QPP on Employment
		if ( +C12 <= 3500 ) {
			var Employment_earnings = 0;
		} else {
			if ( (+C12 - 3500) > PX_table[2].Base_amount ) {
				var Employment_earnings = +PX_table[2].Base_amount;
			} else {
				var Employment_earnings = (+C12 - 3500);
			}
		}

		if ( B1 == "QC") {
			var Actual_CPP_Contribution = 0;
			var Base_CPP = 0;
		} else {
			if ( C12 <= 3500 ) {
				var Actual_CPP_Contribution = 0;
				var Base_CPP = 0;
			} else {
				if ( (+C12 - 3500) > PX_table[2].Base_amount ) {
					var Actual_CPP_Contribution = +PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate);
					var Base_CPP = +PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * PX_table[2].Helper_Column;
				} else {
					var Actual_CPP_Contribution = (+C12 - 3500) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate);
					var Base_CPP = (+C12 - 3500) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * PX_table[2].Helper_Column;
				}
			}
		}

		if ( B1 == "QC") {
			if ( C12 <= 3500 ) {
				var Actual_QPP_Contribution = 0;
				var Base_QPP = 0;
			} else {
				if ( (+C12 - 3500) > PX_table[4].Base_amount ) {
					var Actual_QPP_Contribution = +PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate);
					var Base_QPP = +PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * PX_table[4].Helper_Column;
				} else {
					var Actual_QPP_Contribution = (+C12 - 3500) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate);
					var Base_QPP = (+C12 - 3500) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * PX_table[4].Helper_Column;
				}
			}
		} else {
			var Actual_QPP_Contribution = 0;
			var Base_QPP = 0;
		}

		var Enhanced_CPP = +Actual_CPP_Contribution - Base_CPP;
		var Enhanced_QPP = +Actual_QPP_Contribution - Base_QPP;
		// if ( B1 == "QC") {var Enhanced_CPP = 0;} else {if ( C12 <= 3500 ) {var Enhanced_CPP = 0;} else {if ( (+C12 - 3500) > PX_table[2].Base_amount ) {var Enhanced_CPP = ( +PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) ) - (  );
		// 		} else {var Enhanced_CPP = ( (+C12 - 3500) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) ) - (  );}}}

		var Total_CPP = +Base_CPP + +Base_QPP + +Enhanced_CPP + +Enhanced_QPP;


		// CPP/QPP on Self-employment
		if ( C12 == 0 && (C13 - C23) > 0 ) {
			if ( Math.max( 0, (C13 - C23 - 3500) ) > PX_table[2].Base_amount ) {
				var Self_employment_earnings = PX_table[2].Base_amount;
			} else {
				var Self_employment_earnings = Math.max( 0,(C13 - C23 - 3500) );
			}
		} else {
			var Self_employment_earnings = 0;
		}

		if ( B1 == "QC" ) {
			var Total_CPP_Payable = 0;
			var Base_CPP_2 = 0;
		} else {
			if ( C12 == 0 && (C13 - C23) > 0 ) {
				if ( Math.max(0,(C13 - C23 - 3500)) > PX_table[2].Base_amount ) {
					var Total_CPP_Payable = PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * 2;
					var Base_CPP_2 = PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * +PX_table[2].Helper_Column;
				} else {
					var Total_CPP_Payable = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * 2;
					var Base_CPP_2 = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * +PX_table[2].Helper_Column;
				}
			} else {
				var Total_CPP_Payable = 0;
				var Base_CPP_2 = 0;
			}
		}

		if ( B1 == "QC" ) {
			if ( C12 == 0 && (C13 - C23) > 0 ) {
				if ( Math.max(0,(C13 - C23 - 3500)) > PX_table[4].Base_amount ) {
					var Total_QPP_Payable = PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * 2;
					var Base_QPP_2 = PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * +PX_table[4].Helper_Column;
				} else {
					var Total_QPP_Payable = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * 2;
					var Base_QPP_2 = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * +PX_table[4].Helper_Column;
				}
			} else {
				var Total_QPP_Payable = 0;
				var Base_QPP_2 = 0;
			}
		} else {
			var Total_QPP_Payable = 0;
			var Base_QPP_2 = 0;
		}

		if (B1 == "QC") {
			var Enhanced_CPP_2 = 0;
		} else {
			if ( C12 == 0 && (C13 - C23) > 0 ) {
				if ( Math.max(0,(C13 - C23 - 3500)) > PX_table[2].Base_amount ) {
					var Enhanced_CPP_2 = PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * 2 * +PX_table[3].Helper_Column;
				} else {
					var Enhanced_CPP_2 = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * 2 * +PX_table[3].Helper_Column;
				}
			} else {
				var Enhanced_CPP_2 = 0;
			}
		}

		if (B1 == "QC") {
			if ( C12 == 0 && (C13 - C23) > 0 ) {
				if ( Math.max(0,(C13 - C23 - 3500)) > PX_table[4].Base_amount ) {
					var Enhanced_QPP_2 = PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * 2 * +PX_table[5].Helper_Column;
				} else {
					var Enhanced_QPP_2 = Math.max(0,(C13 - C23 - 3500)) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * 2 * +PX_table[5].Helper_Column;
				}
			} else {
				var Enhanced_QPP_2 = 0;
			}
		} else {
			var Enhanced_QPP_2 = 0;
		}

		var Total_CPP_2 = +Base_QPP_2 + +Base_CPP_2 + +Enhanced_QPP_2 + +Enhanced_CPP_2;


		// CPP/QPP on both
		if ( C12 > 0 && (C13 - C23) > 0) {
			var Self_employment_earnings_2 = (C13 - C23);
		} else {
			var Self_employment_earnings_2 = 0
		}

		if ( B1 == "QC" ) {
			var Actual_CPP_Contribution_2 = 0;
		} else {
			if ( C12 <= 3500 ) {
				var Actual_CPP_Contribution_2 = 0;
			} else {
				if ( (C12 - 3500) > PX_table[2].Base_amount ) {
					var Actual_CPP_Contribution_2 = PX_table[2].Base_amount * (+PX_table[2].Base_rate + +PX_table[3].Base_rate);
				} else {
					var Actual_CPP_Contribution_2 = (C12 - 3500) * (+PX_table[2].Base_rate + +PX_table[3].Base_rate);
				}
			}
		}

		if ( B1 == "QC" ) {
			if ( C12 <= 3500 ) {
				var Actual_QPP_Contribution_2 = 0;
			} else {
				if ( (C12 - 3500) > PX_table[4].Base_amount ) {
					var Actual_QPP_Contribution_2 = PX_table[4].Base_amount * (+PX_table[4].Base_rate + +PX_table[5].Base_rate);
				} else {
					var Actual_QPP_Contribution_2 = (C12 - 3500) * (+PX_table[4].Base_rate + +PX_table[5].Base_rate);
				}
			}
		} else {
			var Actual_QPP_Contribution_2 = 0;
		}


		var line_5 = Total_CPP;
		if ( C12 > 0 && (C13 - C23) > 0 ){
			var line_4 = (C13 - C23);
			var line_8 = Math.max(0,(C12 - 3500));
			var line_13 = +PX_table[2].Base_amount - +line_8;
			if ( (C13 - C23) > line_13 ) {
				var line_14 = line_13;
			} else {
				var line_14 = line_4;
			}
		} else {
			var line_4 = 0;
			var line_8 = 0;
			var line_13 = 0;
			var line_14 = 0;
		}
		if ( C12 < 3500 && C12 != 0 ) {
			var line_15 = Math.max(0,(3500 - C12));
		} else {
			var line_15 = 0;
		}
		var line_16 = Math.max(0,(+line_4 - +PX_table[2].Base_amount));
		if ( C12 > 0 && (C13 - C23) > 0 ){
			if ( C12 < 3500 ){
				var line_17 = Math.max(0,((3500 - C12) - line_16));
			} else {
				var line_17 = 0;
			}
		} else {
			var line_17 = 0;
		}
		var line_18 = Math.max(0, (+line_14 - +line_17));

		var Earnings_subject_to_CPP_QPP = line_18;

		if ( B1 == "QC" ) {
			var Total_CPP_Payable_2 = 0;
		} else {
			var Total_CPP_Payable_2 = Earnings_subject_to_CPP_QPP * (+PX_table[2].Base_rate + +PX_table[3].Base_rate) * 2;
		}

		if ( B1 == "QC" ) {
			var Total_QPP_Payable_2 = Earnings_subject_to_CPP_QPP * (+PX_table[4].Base_rate + +PX_table[5].Base_rate) * 2;
		} else {
			var Total_QPP_Payable_2 = 0;
		}

		var Base_CPP_QPP = (Total_CPP_Payable_2 * PX_table[2].Helper_Column / 2) + (Total_QPP_Payable_2 * PX_table[4].Helper_Column / 2);
		var Enhanced_CPP_QPP = (Total_CPP_Payable_2 * PX_table[3].Helper_Column) + (Total_QPP_Payable_2 * PX_table[5].Helper_Column);

		var Total_CPP_QPP = +Base_CPP_QPP + Enhanced_CPP_QPP;

		//Self employment
		var PPIP_Premiums = Math.max(0,(C13 - C23));
		var Max_less_Employment_income = +PX_table[8].Base_amount - C12;

		if ( B1 == "QC" ) {
			if ( Max_less_Employment_income > PPIP_Premiums ) {
				var Deduction_for_PPIP_on_self_employment = Math.max(0 , (Math.min(+PX_table[8].Max_Limit, (PPIP_Premiums * +PX_table[8].Base_rate)) * +PX_table[8].Helper_Column) );
				var Federal_line_31215 = Math.max(0 , (Math.min(PX_table[8].Max_PPIP , (Math.max(0,PPIP_Premiums) * PX_table[8].Base_rate - Deduction_for_PPIP_on_self_employment))));
			} else {
				var Deduction_for_PPIP_on_self_employment = Math.max(0 , (Math.min(+PX_table[8].Max_Limit, (Max_less_Employment_income * +PX_table[8].Base_rate)) * +PX_table[8].Helper_Column) );
				var Federal_line_31215 = Math.max(0 , (Math.min(PX_table[8].Max_PPIP , (Math.max(0,Max_less_Employment_income) * PX_table[8].Base_rate - Deduction_for_PPIP_on_self_employment))));
			}
		} else {
			var Deduction_for_PPIP_on_self_employment = 0;
			var Federal_line_31215 = 0;
		}

		// Schedule 8 CPP 2020 ————————————————————————————————————————————————————————————————


		// Federal Deductions 2020 ————————————————————————————————————————————————————————————————

		
		if ( Math.max(0, (PX_table[0].BPA_additional - (C32 - PX_table[0].BPA_Threshold) / PX_table[0].BPA_amount * PX_table[0].BPA_additional)) > PX_table[0].BPA_additional ){
			var Basic_personal_amount = +PX_table[0].BPA_additional + +PX_table[0].Base_amount;
		} else {
			var Basic_personal_amount = Math.max(0, (+PX_table[0].BPA_additional - (C32 - +PX_table[0].BPA_Threshold) / +PX_table[0].BPA_amount * +PX_table[0].BPA_additional)) + +PX_table[0].Base_amount;
		}
		

		if ( C4 == "Yes" ) {
			if ( Math.max(0, (PX_table[0].BPA_additional - (C32 - PX_table[0].BPA_Threshold) / PX_table[0].BPA_amount * PX_table[0].BPA_additional)) > PX_table[0].BPA_additional ) {
				var Spouse_amount = Math.max(0 , (PX_table[0].BPA_additional - +C5 + +PX_table[0].Base_amount));
			} else {
				var Spouse_amount = Math.max(0 , (Math.max(0, (PX_table[0].BPA_additional - (C32 - PX_table[0].BPA_Threshold) / PX_table[0].BPA_amount * PX_table[0].BPA_additional)) - +C5 + +PX_table[0].Base_amount));
			}
		} else {
			var Spouse_amount = 0
		}

		

		if ( B1 == "NR" ) { 
			var CPP_credit_employment = +Base_CPP + +Base_QPP + +Base_QPP_2;
			var CPP_credit_self_employment = 0;
		} else {
			var CPP_credit_employment = +Base_CPP + +Base_QPP;
			var CPP_credit_self_employment = +Base_CPP_2 + +Base_CPP_QPP + +Base_QPP_2;
		}
		var PPIP_credit_self_employment = +Federal_line_31215;
		

		


		if ( (C12 * +PX_table[7].Base_rate) < 0 ) {
			var EI_credit_K = 0;
		} else {
			var EI_credit_K = (C12 * +PX_table[7].Base_rate);
		}
		if ( (C12 * +PX_table[6].Base_rate) < 0 ) {
			var EI_credit_V = 0;
		} else {
			var EI_credit_V = (C12 * +PX_table[6].Base_rate);
		}
		if ( B1 == "QC" ) {
			if ( EI_credit_K > +PX_table[7].Max_Limit ) {
				var EI_credit = +PX_table[7].Max_Limit;
			} else {
				var EI_credit = EI_credit_K;
			}
		} else {
			if ( EI_credit_V > +PX_table[6].Max_Limit ) {
				var EI_credit = +PX_table[6].Max_Limit;
			} else {
				var EI_credit = EI_credit_V;
			}
		}

		
		
		
		if ( C12 > +PX_table[10].Max_Limit ) {
			var Canada_employment_amount = +PX_table[10].Max_Limit;
		} else {
			var Canada_employment_amount = +C12;
		}

		if ( B1 == "NR") {
			var Home_buyers_amount = 0;
		} else {
			if ( C6 == 1 ) {
				var Home_buyers_amount = 5000;
			} else {
				var Home_buyers_amount = 0;
			}
		}

		//console.log(Home_buyers_amount);

		var Federal_Credit = (
			+Basic_personal_amount + 
			+Spouse_amount + 
			+CPP_credit_employment + 
			+CPP_credit_self_employment + 
			+PPIP_credit_self_employment + 
			+EI_credit + 
			+Canada_employment_amount + 
			+Home_buyers_amount
		) * +PX_table[11].Base_rate;

		//console.log(CPP_credit_self_employment);
		

		if ( B1 == "QC" ) {
			var Federal_QC_Abatement = Math.max(0 , ((+Federal_Tax_itog - +Federal_Credit) * PX_table[9].Base_rate ) );
		} else {
			var Federal_QC_Abatement = 0;
		}
		
		var Federal_DTC = (C17 * PX_table[12].Base_rate) + (C18 * PX_table[13].Base_rate);


		var Federal_Deduction = +Federal_Credit + +Federal_QC_Abatement + +Federal_DTC;

		// console.log("Federal_Credit " + Federal_Credit);
		// console.log("Federal_QC_Abatement " + Federal_QC_Abatement);
		// console.log("Federal_DTC " + Federal_DTC);
		// console.log("Federal_Deduction " + Federal_Deduction);
		

		// Federal Deductions 2020 ————————————————————————————————————————————————————————————————


		if ( B1 == "NR" ){
			var Fed_Surtax = Math.max(0,(( +Federal_Tax_itog - +Federal_Deduction ) * Fed_Surtax_rate))
		} else {
			var Fed_Surtax = 0;
		}

		var Federal_Tax_summ = +Federal_Tax_itog + +Fed_Surtax;


		//Fconsole.log(Federal_Tax_summ);



		// Provincial Deductions ————————————————————————————————————————————————————————————————

		var Provincial_Deductions = [
			{id: 0, Province: "ON",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 1, Province: "AB",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 2, Province: "BC",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 3, Province: "MB",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 4, Province: "NB",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 5, Province: "NL",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 6, Province: "NS",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 7, Province: "NT",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 8, Province: "NU",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 9, Province: "PE",		Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 10, Province: "QC",	Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 11, Province: "SK",	Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"},
			{id: 12, Province: "YT",	Tax_rate: "",	Basic_personal_amount: "0",	Spouse_amount: "0",	CPP_credit_employment: "0",	CPP_credit_self_employment: "0",	EI_credit: "0", Family_tax_benefit: "0",	Canada_employment_amount: "0"}
		];

		Provincial_Deductions[0].Tax_rate =		Provincial_Tax_Bracket_2021_ON[0].Tax_rate;
		Provincial_Deductions[1].Tax_rate =		Provincial_Tax_Bracket_2021_AB[0].Tax_rate;
		Provincial_Deductions[2].Tax_rate =		Provincial_Tax_Bracket_2021_BC[0].Tax_rate;
		Provincial_Deductions[3].Tax_rate =		Provincial_Tax_Bracket_2021_MB[0].Tax_rate;
		Provincial_Deductions[4].Tax_rate =		Provincial_Tax_Bracket_2021_NB[0].Tax_rate;
		Provincial_Deductions[5].Tax_rate =		Provincial_Tax_Bracket_2021_NL[0].Tax_rate;
		Provincial_Deductions[6].Tax_rate =		Provincial_Tax_Bracket_2021_NS[0].Tax_rate;
		Provincial_Deductions[7].Tax_rate =		Provincial_Tax_Bracket_2021_NT[0].Tax_rate;
		Provincial_Deductions[8].Tax_rate =		Provincial_Tax_Bracket_2021_NU[0].Tax_rate;
		Provincial_Deductions[9].Tax_rate =		Provincial_Tax_Bracket_2021_PE[0].Tax_rate;
		Provincial_Deductions[10].Tax_rate =	Provincial_Tax_Bracket_2021_QC[1].Tax_rate;
		Provincial_Deductions[11].Tax_rate =	Provincial_Tax_Bracket_2021_SK[0].Tax_rate;
		Provincial_Deductions[12].Tax_rate =	Provincial_Tax_Bracket_2021_YT[0].Tax_rate;

		for(i = 0; i < Provincial_Deductions.length; i++){
			Provincial_Deductions[i].Basic_personal_amount = 0;
			Provincial_Deductions[i].Spouse_amount = 0;
			Provincial_Deductions[i].CPP_credit_employment = 0;
			Provincial_Deductions[i].CPP_credit_self_employment = 0;
			Provincial_Deductions[i].EI_credit = 0;
			Provincial_Deductions[i].Family_tax_benefit = 0;
			Provincial_Deductions[i].Canada_employment_amount = 0;
		}

		if ( B1 == "ON" ) {
			Provincial_Deductions[0].Basic_personal_amount = Provincial_Table_1[0].Min_2020 * Provincial_Deductions[0].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[1].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[1].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[1].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[0].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[0].Tax_rate;
			} else {
				Provincial_Deductions[0].Spouse_amount = 0;
			}

			Provincial_Deductions[0].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[0].Tax_rate;
			Provincial_Deductions[0].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[0].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[0].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[0].Tax_rate;
			} else {
				Provincial_Deductions[0].EI_credit = Provincial_Deductions_V * Provincial_Deductions[0].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[0].Basic_personal_amount +
			+Provincial_Deductions[0].Spouse_amount +
			+Provincial_Deductions[0].CPP_credit_employment +
			+Provincial_Deductions[0].CPP_credit_self_employment +
			+Provincial_Deductions[0].EI_credit;
		}

		if ( B1 == "AB" ) {
			Provincial_Deductions[1].Basic_personal_amount = Provincial_Table_1[2].Min_2020 * Provincial_Deductions[1].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[3].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[3].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[3].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[1].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[1].Tax_rate;
			} else {
				Provincial_Deductions[1].Spouse_amount = 0;
			}

			Provincial_Deductions[1].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[1].Tax_rate;
			Provincial_Deductions[1].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[1].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[1].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[1].Tax_rate;
			} else {
				Provincial_Deductions[1].EI_credit = Provincial_Deductions_V * Provincial_Deductions[1].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[1].Basic_personal_amount +
			+Provincial_Deductions[1].Spouse_amount +
			+Provincial_Deductions[1].CPP_credit_employment +
			+Provincial_Deductions[1].CPP_credit_self_employment +
			+Provincial_Deductions[1].EI_credit;
		}

		if ( B1 == "BC" ) {
			Provincial_Deductions[2].Basic_personal_amount = Provincial_Table_1[4].Min_2020 * Provincial_Deductions[2].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[5].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[5].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[5].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[2].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[2].Tax_rate;
			} else {
				Provincial_Deductions[2].Spouse_amount = 0;
			}

			Provincial_Deductions[2].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[2].Tax_rate;
			Provincial_Deductions[2].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[2].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[2].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[2].Tax_rate;
			} else {
				Provincial_Deductions[2].EI_credit = Provincial_Deductions_V * Provincial_Deductions[2].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[2].Basic_personal_amount +
			+Provincial_Deductions[2].Spouse_amount +
			+Provincial_Deductions[2].CPP_credit_employment +
			+Provincial_Deductions[2].CPP_credit_self_employment +
			+Provincial_Deductions[2].EI_credit;
		}

		if ( B1 == "MB" ) {
			Provincial_Deductions[3].Basic_personal_amount = Provincial_Table_1[6].Min_2020 * Provincial_Deductions[3].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[7].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[7].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[7].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}

			if ( C4 == "Yes" ) {
				Provincial_Deductions[3].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[3].Tax_rate;
			} else {
				Provincial_Deductions[3].Spouse_amount = 0;
			}

			Provincial_Deductions[3].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[3].Tax_rate;
			Provincial_Deductions[3].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[3].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[3].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[3].Tax_rate;
			} else {
				Provincial_Deductions[3].EI_credit = Provincial_Deductions_V * Provincial_Deductions[3].Tax_rate;
			}
			if (C4 == "Yes") {
				Provincial_Deductions[3].Family_tax_benefit = Math.max(0, Provincial_Table_1[8].Max_2020 * 2 - (C32 * Provincial_Table_1[8].Rate) ) * Provincial_Deductions[3].Tax_rate;
			} else {
				Provincial_Deductions[3].Family_tax_benefit = Math.max(0, Provincial_Table_1[8].Max_2020 - (C32 * Provincial_Table_1[8].Rate) ) * Provincial_Deductions[3].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[3].Basic_personal_amount +
			+Provincial_Deductions[3].Spouse_amount +
			+Provincial_Deductions[3].CPP_credit_employment +
			+Provincial_Deductions[3].CPP_credit_self_employment +
			+Provincial_Deductions[3].EI_credit +
			+Provincial_Deductions[3].Family_tax_benefit;
		}

		if ( B1 == "NB" ) {
			Provincial_Deductions[4].Basic_personal_amount = Provincial_Table_1[9].Min_2020 * Provincial_Deductions[4].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[10].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[10].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[10].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[4].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[4].Tax_rate;
			} else {
				Provincial_Deductions[4].Spouse_amount = 0;
			}

			Provincial_Deductions[4].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[4].Tax_rate;
			Provincial_Deductions[4].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[4].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[4].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[4].Tax_rate;
			} else {
				Provincial_Deductions[4].EI_credit = Provincial_Deductions_V * Provincial_Deductions[4].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[4].Basic_personal_amount +
			+Provincial_Deductions[4].Spouse_amount +
			+Provincial_Deductions[4].CPP_credit_employment +
			+Provincial_Deductions[4].CPP_credit_self_employment +
			+Provincial_Deductions[4].EI_credit;

			//console.log(Provincial_Deductions[4].EI_credit);

		}

		if ( B1 == "NL" ) {
			Provincial_Deductions[5].Basic_personal_amount = Provincial_Table_1[11].Min_2020 * Provincial_Deductions[5].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[12].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[12].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[12].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[5].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[5].Tax_rate;
			} else {
				Provincial_Deductions[5].Spouse_amount = 0;
			}

			Provincial_Deductions[5].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[5].Tax_rate;
			Provincial_Deductions[5].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[5].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[5].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[5].Tax_rate;
			} else {
				Provincial_Deductions[5].EI_credit = Provincial_Deductions_V * Provincial_Deductions[5].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[5].Basic_personal_amount +
			+Provincial_Deductions[5].Spouse_amount +
			+Provincial_Deductions[5].CPP_credit_employment +
			+Provincial_Deductions[5].CPP_credit_self_employment +
			+Provincial_Deductions[5].EI_credit;
		}

		if ( B1 == "NS" ) {
			//Provincial_Deductions[6].Basic_personal_amount = Provincial_Table_1[13].Min_2020 * Provincial_Deductions[6].Tax_rate;

			if (C32 < Provincial_Table_1[13].Min_Taxable_Threshold) {
				Provincial_Deductions[6].Basic_personal_amount = Provincial_Table_1[13].Max_2020 * Provincial_Deductions[6].Tax_rate;
			} else {
				if (C32 > Provincial_Table_1[13].Max_Taxable_Threshold){
					Provincial_Deductions[6].Basic_personal_amount = Provincial_Table_1[13].Min_2020 * Provincial_Deductions[6].Tax_rate;
				} else {
					Provincial_Deductions[6].Basic_personal_amount = (Provincial_Table_1[13].Max_2020 - ((+C32 - +Provincial_Table_1[13].Min_Taxable_Threshold) * Provincial_Table_1[13].Rate)) * Provincial_Deductions[6].Tax_rate;
				}
			}

			if ( C4 == "Yes" ) {
				Provincial_Deductions[6].Spouse_amount = +Math.min( +Provincial_Table_1[14].Max_2020, (+Provincial_Table_1[14].NS_base_amount - +C5 + +Math.max(0, (+Provincial_Table_1[14].NS_Supplement - +Math.max(0, (+C5 - +Provincial_Table_1[14].Min_Taxable_Threshold)) * +Provincial_Table_1[14].Rate - +C5)) ) ) * Provincial_Deductions[6].Tax_rate;
			} else {
				Provincial_Deductions[6].Spouse_amount = 0;
			}


			Provincial_Deductions[6].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[6].Tax_rate;
			Provincial_Deductions[6].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[6].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[6].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[6].Tax_rate;
			} else {
				Provincial_Deductions[6].EI_credit = Provincial_Deductions_V * Provincial_Deductions[6].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[6].Basic_personal_amount +
			+Provincial_Deductions[6].Spouse_amount +
			+Provincial_Deductions[6].CPP_credit_employment +
			+Provincial_Deductions[6].CPP_credit_self_employment +
			+Provincial_Deductions[6].EI_credit;

			// console.log(Provincial_Deductions[6].Basic_personal_amount);
			// console.log(Provincial_Deductions[6].Spouse_amount);
			// console.log(Provincial_Deductions[6].CPP_credit_employment);
			// console.log(Provincial_Deductions[6].CPP_credit_self_employment);
			// console.log(Provincial_Deductions[6].EI_credit);
		}
		
		if ( B1 == "NT" ) {
			Provincial_Deductions[7].Basic_personal_amount = Provincial_Table_1[15].Min_2020 * Provincial_Deductions[7].Tax_rate;

			if (C5 > 0 && C5 < +Provincial_Table_1[16].Min_2020) {
				Provincial_Deductions[7].Spouse_amount = (Provincial_Table_1[16].Min_2020 - C5) * Provincial_Deductions[7].Tax_rate;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					Provincial_Deductions[7].Spouse_amount = Provincial_Table_1[16].Min_2020 * Provincial_Deductions[7].Tax_rate;
				} else {
					Provincial_Deductions[7].Spouse_amount = 0;
				}
			}

			Provincial_Deductions[7].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[7].Tax_rate;
			Provincial_Deductions[7].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[7].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[7].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[7].Tax_rate;
			} else {
				Provincial_Deductions[7].EI_credit = Provincial_Deductions_V * Provincial_Deductions[7].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[7].Basic_personal_amount +
			+Provincial_Deductions[7].Spouse_amount +
			+Provincial_Deductions[7].CPP_credit_employment +
			+Provincial_Deductions[7].CPP_credit_self_employment +
			+Provincial_Deductions[7].EI_credit;
		}

		if ( B1 == "NU" ) {
			Provincial_Deductions[8].Basic_personal_amount = Provincial_Table_1[17].Min_2020 * Provincial_Deductions[8].Tax_rate;

			if (C5 > 0 && C5 < +Provincial_Table_1[18].Min_2020) {
				Provincial_Deductions[8].Spouse_amount = (Provincial_Table_1[18].Min_2020 - C5) * Provincial_Deductions[8].Tax_rate;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					Provincial_Deductions[8].Spouse_amount = Provincial_Table_1[18].Min_2020 * Provincial_Deductions[8].Tax_rate;
				} else {
					Provincial_Deductions[8].Spouse_amount = 0;
				}
			}

			Provincial_Deductions[8].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[8].Tax_rate;
			Provincial_Deductions[8].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[8].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[8].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[8].Tax_rate;
			} else {
				Provincial_Deductions[8].EI_credit = Provincial_Deductions_V * Provincial_Deductions[8].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[8].Basic_personal_amount +
			+Provincial_Deductions[8].Spouse_amount +
			+Provincial_Deductions[8].CPP_credit_employment +
			+Provincial_Deductions[8].CPP_credit_self_employment +
			+Provincial_Deductions[8].EI_credit;
		}

		if ( B1 == "PE" ) {
			Provincial_Deductions[9].Basic_personal_amount = Provincial_Table_1[19].Min_2020 * Provincial_Deductions[9].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[20].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[20].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[20].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[9].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[9].Tax_rate;
			} else {
				Provincial_Deductions[9].Spouse_amount = 0;
			}

			Provincial_Deductions[9].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[9].Tax_rate;
			Provincial_Deductions[9].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[9].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[9].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[9].Tax_rate;
			} else {
				Provincial_Deductions[9].EI_credit = Provincial_Deductions_V * Provincial_Deductions[9].Tax_rate;
			}
			var Provincial_Credit = 
			+Provincial_Deductions[9].Basic_personal_amount +
			+Provincial_Deductions[9].Spouse_amount +
			+Provincial_Deductions[9].CPP_credit_employment +
			+Provincial_Deductions[9].CPP_credit_self_employment +
			+Provincial_Deductions[9].EI_credit;
		}
		
		if ( B1 == "QC" ) {
			Provincial_Deductions[10].Basic_personal_amount = Provincial_Table_1[21].Min_2020 * Provincial_Deductions[10].Tax_rate;

			if (C5 > 0 && C5 < +Provincial_Table_1[22].Min_2020) {
				Provincial_Deductions[10].Spouse_amount = (Provincial_Table_1[22].Min_2020 - C5) * Provincial_Deductions[10].Tax_rate;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					Provincial_Deductions[10].Spouse_amount = Provincial_Table_1[22].Min_2020 * Provincial_Deductions[10].Tax_rate;
				} else {
					Provincial_Deductions[10].Spouse_amount = 0;
				}
			}
			var Provincial_Credit = 
			+Provincial_Deductions[10].Basic_personal_amount +
			+Provincial_Deductions[10].Spouse_amount;
		}

		if ( B1 == "SK" ) {
			Provincial_Deductions[11].Basic_personal_amount = Provincial_Table_1[23].Min_2020 * Provincial_Deductions[11].Tax_rate;

			if ( C5 > 0 && C5 < +Provincial_Table_1[24].Max_2020 ) {
				var Provincial_Deductions_U = Provincial_Table_1[24].Max_2020 - C5;
			} else {
				if ( C4 == "Yes" && C5 == 0 ) {
					var Provincial_Deductions_U = Provincial_Table_1[24].Min_2020;
				} else {
					var Provincial_Deductions_U = 0;
				}
			}
			if ( C4 == "Yes" ) {
				Provincial_Deductions[11].Spouse_amount = Math.max(0, Provincial_Deductions_U) * Provincial_Deductions[11].Tax_rate;
			} else {
				Provincial_Deductions[11].Spouse_amount = 0;
			}

			Provincial_Deductions[11].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[11].Tax_rate;
			Provincial_Deductions[11].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[11].Tax_rate;
			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[11].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[11].Tax_rate;
			} else {
				Provincial_Deductions[11].EI_credit = Provincial_Deductions_V * Provincial_Deductions[11].Tax_rate;
			}

			var Provincial_Credit = 
			+Provincial_Deductions[11].Basic_personal_amount +
			+Provincial_Deductions[11].Spouse_amount +
			+Provincial_Deductions[11].CPP_credit_employment +
			+Provincial_Deductions[11].CPP_credit_self_employment +
			+Provincial_Deductions[11].EI_credit;
		}

		if ( B1 == "YT" ) {
			Provincial_Deductions[12].Basic_personal_amount = Basic_personal_amount * Provincial_Deductions[12].Tax_rate;
			Provincial_Deductions[12].Spouse_amount = Spouse_amount * Provincial_Deductions[12].Tax_rate;
			Provincial_Deductions[12].CPP_credit_employment = CPP_credit_employment * Provincial_Deductions[12].Tax_rate;
			Provincial_Deductions[12].CPP_credit_self_employment = CPP_credit_self_employment * Provincial_Deductions[12].Tax_rate;

			if ( (C12 * PX_table[6].Base_rate) < 0 ) {
				var Provincial_Deductions_V = 0;
			} else {
				var Provincial_Deductions_V = C12 * PX_table[6].Base_rate;
			}
			if ( Provincial_Deductions_V > PX_table[6].Max_Limit ) {
				Provincial_Deductions[12].EI_credit = PX_table[6].Max_Limit * Provincial_Deductions[12].Tax_rate;
			} else {
				Provincial_Deductions[12].EI_credit = Provincial_Deductions_V * Provincial_Deductions[12].Tax_rate;
			}

			if (C12 > PX_table[10].Max_Limit){
				Provincial_Deductions[12].Canada_employment_amount = PX_table[10].Max_Limit * Provincial_Deductions[12].Tax_rate;
			} else {
				Provincial_Deductions[12].Canada_employment_amount = C12 * Provincial_Deductions[12].Tax_rate;
			}

			// console.log(Provincial_Deductions[12].Basic_personal_amount);
			// console.log(Provincial_Deductions[12].Spouse_amount);
			// console.log(Provincial_Deductions[12].CPP_credit_employment);
			// console.log(Provincial_Deductions[12].CPP_credit_self_employment);
			// console.log(Provincial_Deductions[12].EI_credit);
			// console.log(Provincial_Deductions[12].Canada_employment_amount);

			var Provincial_Credit = 
			+Provincial_Deductions[12].Basic_personal_amount +
			+Provincial_Deductions[12].Spouse_amount +
			+Provincial_Deductions[12].CPP_credit_employment +
			+Provincial_Deductions[12].CPP_credit_self_employment +
			+Provincial_Deductions[12].EI_credit +
			+Provincial_Deductions[12].Canada_employment_amount;
		}

		if ( Provincial_Credit == undefined ){
			var Provincial_Credit = 0;
		}

		//console.log(Provincial_Credit);
		

		// Provincial Deductions ————————————————————————————————————————————————————————————————


		// Provincial Territories Credit 2020 ————————————————————————————————————————————————————————————————

		var Cost_of_living_credit = 942;

		//var Cost_living_credit = 

		if ( B1 == "NT" ) {
			var Supplement_basic = 350;
		} else {
			var Supplement_basic = 0;
		}

		if ( B1 == "NT" && C4 == "Yes" ) {
			var Spouse = 350;
		} else {
			var Spouse = 0;
		}

		var Provincial_line_16 = +Supplement_basic + +Spouse;

		var Cost_living_credit_J = 0;
		if ( B1 == "NT" ) {
			if ( C32 >= 0 && C32 <= 12000 ) {
				var Cost_living_credit_J = +C32 * 0.026;
			} else {
				if ( C32 >= 12001 && C32 <= 48000 ) {
					var Cost_living_credit_J = (+C32 - 12000) * 0.0125 + 312;
				} else {
					if ( C32 >= 48001 && C32 <= 9999999999 ) {
						var Cost_living_credit_J = (+C32 - 48000) * 0.01 + 762;
					}
				}
			}
		}

		
		var Cost_living_credit = Math.min(Cost_of_living_credit , Cost_living_credit_J);
		
		var Cost_living_credit_W = 0;
		if ( B1 == "NT" ) {
			if ( C5 >= 0 && C5 <= 12000 ) {
				var Cost_living_credit_W = C5 * 0.026;
			} else {
				if ( C5 >= 12001 && C5 <= 48000 ) {
					var Cost_living_credit_W = (+C5 - 12000) * 0.0125 + 312;
				} else {
					if ( C5 >= 48001 && C5 <= 9999999999 ) {
						var Cost_living_credit_W = (+C5 - 48000) * 0.01 + 762;
					}
				}
			}
		}
		var Spouse_credit = Math.min(Cost_of_living_credit , Cost_living_credit_W);

		var Supplement_amount = Math.max(0,(+Provincial_line_16 - +Cost_living_credit - +Spouse_credit));
		

		var Sales_tax = 75;
		var Base_income_threshold = 15000;
		var base_income_threshold_i_spouse = 18000;
		var Reduction_rate_BC = 0.02;

		if ( B1 == "BC" ) {
			if (C4 == "Yes") {
				BC_Provincial_Territories_Credit_2020_P = Sales_tax * 2;
			} else {
				BC_Provincial_Territories_Credit_2020_P = Sales_tax;
			}
		}
		if ( B1 == "BC" ) {
			if (C4 == "Yes"){
				BC_Provincial_Territories_Credit_2020_L = Math.max(0,((+C5 + +C32) - +base_income_threshold_i_spouse)) * Reduction_rate_BC;
			} else {
				BC_Provincial_Territories_Credit_2020_L = Math.max(0,(+C32 - +Base_income_threshold)) * Reduction_rate_BC;
			}
		}
		if (B1 == "BC"){
			var BC_Provincial_Territories_Credit_2020_U = (+BC_Provincial_Territories_Credit_2020_P - +BC_Provincial_Territories_Credit_2020_L);
		} else {
			var BC_Provincial_Territories_Credit_2020_U = 0;
		}

		var BC_Provincial_Territories_Credit_2020 = Math.max(0, BC_Provincial_Territories_Credit_2020_U);

		//console.log(BC_Provincial_Territories_Credit_2020);
		


		var Personal_tax_credit = 195;
		var Reduction_rate_MB = 0.01;

		if (B1 == "MB") {
			if (C4 == "Yes") {
				var MB_Provincial_Territories_Credit_2020_R = Personal_tax_credit * 2;
			} else {
				var MB_Provincial_Territories_Credit_2020_R = Personal_tax_credit;
			}
		}

		if (B1 == "MB") {
			if (C4 == "Yes") {
				var MB_Provincial_Territories_Credit_2020_X = (+C5 + +C32) * Reduction_rate_MB;
			} else {
				var MB_Provincial_Territories_Credit_2020_X = C32 * Reduction_rate_MB;
			}
		}

		if (B1 == "MB") {
			var MB_Provincial_Territories_Credit_2020 = Math.max(0, (+MB_Provincial_Territories_Credit_2020_R - +MB_Provincial_Territories_Credit_2020_X));
		} else {
			var MB_Provincial_Territories_Credit_2020 = 0;
		}

		//console.log(MB_Provincial_Territories_Credit_2020);
		

		var NU_Cost_of_living_credit = 0.02;
		var NU_blank_value = 1500;

		if (B1 == "NU"){
			var NU_Provincial_Territories_Credit_2020 = Math.min(NU_blank_value, (C32 * NU_Cost_of_living_credit));
		} else {
			var NU_Provincial_Territories_Credit_2020 = 0;
		}

		var Provincial_Territories_Credit_2020_itog = +MB_Provincial_Territories_Credit_2020 + +NU_Provincial_Territories_Credit_2020 + +BC_Provincial_Territories_Credit_2020 + +Supplement_amount + +Cost_living_credit;
	


		


		// Provincial Territories Credit 2020 ————————————————————————————————————————————————————————————————


		// Provincial Tax Bracket 2021 below ————————————————————————————————————————————————————————————————

		var Provincial_Subtotal_Tax = 
		+Provincial_Tax_Bracket_2021_ON_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_AB_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_BC_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_MB_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_NB_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_NL_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_NS_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_NT_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_NU_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_PE_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_QC_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_SK_Tax_amount_Summ + 
		+Provincial_Tax_Bracket_2021_YT_Tax_amount_Summ;

		//console.log(Provincial_Subtotal_Tax);

		if ( B1 == "ON" ) {
			if ( (+Provincial_Subtotal_Tax - +Provincial_Credit) > PX_table[15].Base_amount ) {
				var ON_Surtax = (((+Provincial_Subtotal_Tax - +Provincial_Credit) - +PX_table[15].Base_amount) * PX_table[15].Base_rate) + (((+Provincial_Subtotal_Tax - +Provincial_Credit) - +PX_table[14].Base_amount) * PX_table[14].Base_rate);
			} else {
				if ( (+Provincial_Subtotal_Tax - +Provincial_Credit) > PX_table[14].Base_amount ) {
					var ON_Surtax = ((+Provincial_Subtotal_Tax - +Provincial_Credit) - +PX_table[14].Base_amount) * PX_table[14].Base_rate;
				} else {
					var ON_Surtax = 0;
				}
			}
		} else {
			var ON_Surtax = 0;
		}

		if ( B1 == "PE" ) {
			var PE_Surtax = Math.max(0, ((Provincial_Subtotal_Tax - Provincial_Credit - 12500) * 0.1));
		} else {
			var PE_Surtax = 0;
		}

		if ( B1 == "" || B1 == "NR" ) {
			var Provincial_DTC = 0;
		} else {
			if ( B1 == "AB") { var Provincial_DTC = (C17 * EDTC_array[0].AB) + (C18 * nonEDTC_array[0].AB); }
			if ( B1 == "BC") { var Provincial_DTC = (C17 * EDTC_array[0].BC) + (C18 * nonEDTC_array[0].BC); }
			if ( B1 == "MB") { var Provincial_DTC = (C17 * EDTC_array[0].MB) + (C18 * nonEDTC_array[0].MB); }
			if ( B1 == "NB") { var Provincial_DTC = (C17 * EDTC_array[0].NB) + (C18 * nonEDTC_array[0].NB); }
			if ( B1 == "NL") { var Provincial_DTC = (C17 * EDTC_array[0].NL) + (C18 * nonEDTC_array[0].NL); }
			if ( B1 == "NS") { var Provincial_DTC = (C17 * EDTC_array[0].NS) + (C18 * nonEDTC_array[0].NS); }
			if ( B1 == "NT") { var Provincial_DTC = (C17 * EDTC_array[0].NT) + (C18 * nonEDTC_array[0].NT); }
			if ( B1 == "NU") { var Provincial_DTC = (C17 * EDTC_array[0].NU) + (C18 * nonEDTC_array[0].NU); }
			if ( B1 == "ON") { var Provincial_DTC = (C17 * EDTC_array[0].ON) + (C18 * nonEDTC_array[0].ON); }
			if ( B1 == "PE") { var Provincial_DTC = (C17 * EDTC_array[0].PE) + (C18 * nonEDTC_array[0].PE); }
			if ( B1 == "QC") { var Provincial_DTC = (C17 * EDTC_array[0].QC) + (C18 * nonEDTC_array[0].QC); }
			if ( B1 == "SK") { var Provincial_DTC = (C17 * EDTC_array[0].SK) + (C18 * nonEDTC_array[0].SK); }
			if ( B1 == "YT") { var Provincial_DTC = (C17 * EDTC_array[0].YT) + (C18 * nonEDTC_array[0].YT); }
		}

		//console.log(Provincial_Credit);
		// console.log(PE_Surtax);
		// console.log(Provincial_DTC);
		Prov_Tax_Bracket_Summ_1 = Math.max(0, (+Provincial_Subtotal_Tax - +Provincial_Credit + +ON_Surtax + +PE_Surtax - +Provincial_DTC));

		//console.log(Provincial_Credit);
		
		//console.log(Prov_Tax_Bracket_Summ_1);


		if ( B1 == "BC" ) {Prov_Tax_Bracket_BC = Math.max(0, (476 - (Math.max(0, ((+C32 - 21185) * 0.0356) ))));} else {Prov_Tax_Bracket_BC = 0;}

		if ( B1 == "NB" ) {
			if ( C4 == "Yes" ) {
				Prov_Tax_Bracket_NB = Math.max(0, (678 * 2 - Math.max(0, ((+C32 + +C5 - 17455) * 0.03))) );
			} else {
				Prov_Tax_Bracket_NB = Math.max(0, (678 - Math.max(0, ((+C32 + +C5 - 17455) * 0.03))) );
			}
		} else {
			Prov_Tax_Bracket_NB = 0;
		}
		//console.log(Prov_Tax_Bracket_NB);
		

		if ( B1 == "NS" ) {
			if ( C4 == "Yes" ) {
				Prov_Tax_Bracket_NS = Math.max(0, (300 * 2 - Math.max(0, ((+C32 + +C5 - 15000) * 0.05))) );
			} else {
				Prov_Tax_Bracket_NS = Math.max(0, (300 - Math.max(0, ((+C32 + +C5 - 15000) * 0.05))) );
			}
		} else {
			Prov_Tax_Bracket_NS = 0;
		}


		if ( B1 == "PE" ) {
			if ( C4 == "Yes" ) {
				Prov_Tax_Bracket_PE = Math.max(0, (350 * 2 - Math.max(0, ((+C32 + +C5 - 18000) * 0.05))) );
			} else {
				Prov_Tax_Bracket_PE = Math.max(0, (350 - Math.max(0, ((+C32 + +C5 - 18000) * 0.05))) );
			}
		} else {
			Prov_Tax_Bracket_PE = 0;
		}

		if ( B1 == "NL" ) {
			if ( C4 == "Yes" ) {
				Prov_Tax_Bracket_NL = Math.max( 0, (859 + 479 - Math.max(0, ((+C5 + +C32 - 34727) * 0.16) )) );
			} else {
				Prov_Tax_Bracket_NL = 859 - Math.max(0, ((+C5 + +C32 - 20537) * 0.16) );
			}
		} else {
			Prov_Tax_Bracket_NL = 0;
		}
		//console.log(Prov_Tax_Bracket_NL);
		

		if ( B1 == "ON" ) {
			var Prov_Tax_Bracket_ON_1 = Math.max(0, ((249 * 2) - +Prov_Tax_Bracket_Summ_1) );
		} else {
			var Prov_Tax_Bracket_ON_1 = 0;
		}


		// if ( C4 == "Yes" ) {
		// 	Prov_Tax_Bracket_ON_2_S = 30000 * 2 * 0.1;
		// } else {
		// 	Prov_Tax_Bracket_ON_2_S = 30000 * 0.1;
		// }

		// if ( (C12 * 0.0505) > 850 ) {
		// 	Prov_Tax_Bracket_ON_2_H = 850;
		// } else {
		// 	Prov_Tax_Bracket_ON_2_H = C12 * 0.0505;
		// }

		// if ( B1 == "ON" ) {
		// 	var Prov_Tax_Bracket_ON_2 = Math.max(0, (Math.max(0, Prov_Tax_Bracket_ON_2_H) - +Math.max(0, (+C32 + +C5 - +Prov_Tax_Bracket_ON_2_S))));
		// } else {
		// 	var Prov_Tax_Bracket_ON_2 = 0;
		// }

		if ( C12 * 0.0505 > 850 ) {
			var Prov_Tax_Bracket_ON_2_C = 850;
		} else {
			var Prov_Tax_Bracket_ON_2_C = C12 * 0.0505;
		}

		if ( C4 == "Yes" ) {
			var Prov_Tax_Bracket_ON_2_S = 30000 * 2;
		} else {
			var Prov_Tax_Bracket_ON_2_S = 30000;
		}

		var Prov_Tax_Bracket_ON_2_G = Math.max(0, ((+C32 + +C5 - +Prov_Tax_Bracket_ON_2_S) * 0.1))

		if ( B1 == "ON" ) {
			var Prov_Tax_Bracket_ON_2 = Math.max(0, (+Prov_Tax_Bracket_ON_2_C - +Prov_Tax_Bracket_ON_2_G));
		} else {
			var Prov_Tax_Bracket_ON_2 = 0;
		}


		//console.log(Prov_Tax_Bracket_ON_2);


		Prov_Tax_Bracket_Summ_2 = Math.max(0 , (Prov_Tax_Bracket_Summ_1 
			- Prov_Tax_Bracket_BC
			- Prov_Tax_Bracket_NB
			- Prov_Tax_Bracket_NS
			- Prov_Tax_Bracket_PE
			- Prov_Tax_Bracket_NL
			- Prov_Tax_Bracket_ON_1
			- Prov_Tax_Bracket_ON_2) );

		//console.log(Prov_Tax_Bracket_Summ_2);
		



		if ( B1 == "QC" ) {
			if (Max_less_Employment_income > PPIP_Premiums) {
				var Prov_Tax_Bracket_QC_1 = Math.max(0, Math.min(PX_table[8].Max_PPIP, Math.max(0, PPIP_Premiums) * PX_table[8].Base_rate ))
			} else {
				var Prov_Tax_Bracket_QC_1 = Math.max(0, Math.min(PX_table[8].Max_PPIP, Math.max(0, Max_less_Employment_income) * PX_table[8].Base_rate ))
			}
		} else {
			var Prov_Tax_Bracket_QC_1 = 0;
		}


		if ( C4 == "Yes" ) {
			Prov_Tax_Bracket_QC_2_C4 = 27000;
		} else {
			Prov_Tax_Bracket_QC_2_C4 = 16660;
		}
		if ( B1 == "QC" ) {
			Prov_Tax_Bracket_QC_2_SOME = Math.max(0, (+C5 + +C32 - +Provincial_Tax_Bracket_2021_QC[0].Max_amount - +Prov_Tax_Bracket_QC_2_C4));
		} else {
			Prov_Tax_Bracket_QC_2_SOME = 0;
		}


		if ( Prov_Tax_Bracket_QC_2_SOME > 5000 ) {
			if ( C4 == "Yes" ) {
				var Prov_Tax_Bracket_QC_2_LONG = ((Prov_Tax_Bracket_QC_2_SOME - 5000) * 0.0501 + 167);
			} else {
				var Prov_Tax_Bracket_QC_2_LONG = ((Prov_Tax_Bracket_QC_2_SOME - 5000) * 0.0999 + 332.5);
			}
		} else {
			if ( C4 != "Yes") {
				var Prov_Tax_Bracket_QC_2_LONG = (Prov_Tax_Bracket_QC_2_SOME * 0.0665);
			} else {
				var Prov_Tax_Bracket_QC_2_LONG = (Prov_Tax_Bracket_QC_2_SOME * 0.0334);
			}
		}

		Prov_Tax_Bracket_QC_2 = Math.min(648 , Prov_Tax_Bracket_QC_2_LONG);


		if ( B1 == "QC" ) {
			if ( C32 >= 52745 ) {
				Prov_Tax_Bracket_QC_3 = Math.min( 1000 , ((+C32 - 52745) * 0.01 + 150) );
			} else {
				if ( C32 >= 15170 ) {
					Prov_Tax_Bracket_QC_3 = Math.min(150 , (C32 - 15170 ) * 0.01 );
				} else {
					Prov_Tax_Bracket_QC_3 = 0;
				}
			}
		} else {
			Prov_Tax_Bracket_QC_3 = 0;
		}



		if ( B1 == "ON" ) {
			if (C32 >= 0 && C32 <= 20000 ){
				Prov_Tax_Bracket_ON_3 = 0;
			} else {
				if (C32 >= 20001 && C32 <= 25000){
					Prov_Tax_Bracket_ON_3 = 0.06 * (C32 - 20000);
				} else {
					if (C32 >= 25001 && C32 <= 36000){
						Prov_Tax_Bracket_ON_3 = 300;
					} else {
						if (C32 >= 36501 && C32 <= 38500){
							Prov_Tax_Bracket_ON_3 = .06 * (C32 - 36000) + 300;
						} else {
							if (C32 >= 38501 && C32 <= 48000){
								Prov_Tax_Bracket_ON_3 = 450;
							} else {
								if (C32 >= 48001 && C32 <= 48600){
									Prov_Tax_Bracket_ON_3 = 0.25 * (C32 - 48000) + 450;
								} else {
									if (C32 >= 48601 && C32 <= 72000){
										Prov_Tax_Bracket_ON_3 = 600;
									} else {
										if (C32 >= 72000 && C32 <= 72600){
											Prov_Tax_Bracket_ON_3 = 0.25 * (C32 - 72000) + 600;
										} else {
											if (C32 >= 72601 && C32 <= 200000){
												Prov_Tax_Bracket_ON_3 = 750;
											} else {
												if (C32 >= 200001 && C32 <= 200600){
													Prov_Tax_Bracket_ON_3 = 0.25 * (C32 - 200000) + 750;
												} else {
													if (C32 >= 200601 && C32 <= 999999999){
														Prov_Tax_Bracket_ON_3 = 900;
													} else {
														Prov_Tax_Bracket_ON_3 = 0;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		} else {
			Prov_Tax_Bracket_ON_3 = 0;
		}

		var Final_Provincial_Tax = 
			Prov_Tax_Bracket_Summ_2 + 
			Prov_Tax_Bracket_QC_1 + 
			Prov_Tax_Bracket_QC_2 + 
			Prov_Tax_Bracket_QC_3 + 
			Prov_Tax_Bracket_ON_3
		;
		//console.log(Final_Provincial_Tax);



		// Provincial Tax Bracket 2021 below ————————————————————————————————————————————————————————————————



		
		// Total Income
		//$('#calc_C12, #calc_C13, #calc_C14, #calc_C15, #calc_C16, #calc_C17, #calc_C18').change(total_income);
		function total_income() {
			var B1 = $('#calc_B1').val();
			var calc_C12 = $('#calc_C12').val();
			var calc_C13 = $('#calc_C13').val();
			var calc_C14 = $('#calc_C14').val();
			var calc_C15 = $('#calc_C15').val();
			var calc_C16 = $('#calc_C16').val();
			var calc_C17 = $('#calc_C17').val();
			var calc_C18 = $('#calc_C18').val();
			$('#calc_C19').val( (+calc_C12 + +calc_C13 + +calc_C14 + +calc_C15 + +calc_C16 + +calc_C17 + +calc_C18).toFixed(0) );
		}
		//total_income();
		// Total Income
		
		// Total Deductions
		//$('#calc_C22, #calc_C23, #calc_C24, #calc_C25, #calc_C26, #calc_C27, #calc_C28').change(total_deductions);
		function total_deductions() {
			var B1 = $('#calc_B1').val();
			var calc_C22 = +$('#calc_C22').val();
			var calc_C23 = +$('#calc_C23').val();
			var calc_C24 = +$('#calc_C24').val();
			var calc_C25 = +$('#calc_C25').val();
			var calc_C26 = +$('#calc_C26').val();
			var calc_C27 = +$('#calc_C27').val();

			
		
			//console.log(Deduction_for_PPIP_on_self_employment);
			
			if ( B1 == "NR" ) {
				var calc_C28 = +Enhanced_CPP;
			} else {
				if ( B1 == "QC" ) {
					var calc_C28 = +Enhanced_QPP + +Total_CPP_2 + +Total_CPP_QPP + +Deduction_for_PPIP_on_self_employment;
				} else {
					var calc_C28 = +Enhanced_CPP + +Total_CPP_2 + +Total_CPP_QPP;
				}
			}
		
			$('#calc_C28').val( calc_C28.toFixed(0) );
			$('#calc_C29').val( (+calc_C22 + +calc_C23 + +calc_C24 + +calc_C25 + +calc_C26 + +calc_C27 + +calc_C28).toFixed(0) );
		}
		//total_deductions();
		// Total Deductions


		total_deductions();

		var C19 = +$('#calc_C19').val();
		var C29 = +$('#calc_C29').val();
		var C32 = Math.max((+C19 - +C29),0);
		$('#calc_C32').val(C32.toFixed(0));











		// console.log(Federal_Tax_summ);
		// console.log(Federal_Deduction);
		

		if ( (+Federal_Tax_summ - +Federal_Deduction) < 0 ) {
			var C36 = 0;
		} else {
			var C36 = (+Federal_Tax_summ - +Federal_Deduction);
		}
		$('#calc_C36').val(C36.toFixed(0));

		if (B1 == "QC"){
			var C37 = +Total_QPP_Payable + +Total_QPP_Payable_2;
		} else {
			if ( B1 == "NR" ){
				var C37 = 0;
			} else {
				var C37 = +Total_CPP_Payable_2 + +Total_CPP_Payable;
			}
		}
		$('#calc_C37').val(C37.toFixed(0));

		var C38 = Final_Provincial_Tax;
		$('#calc_C38').val(C38.toFixed(0));

		var C39 = +C36 + +C37 + +C38;
		$('#calc_C39').val(C39.toFixed(0));

		var C40 = +$('#calc_C7').val();
		$('#calc_C40').val(C40.toFixed(0));

		var C41 = CAI;
		$('#calc_C41').val(C41.toFixed(0));

		
		
		var C42 = CWB_amount;
		$('#calc_C42').val(C42.toFixed(0));

		var C43 = Provincial_Territories_Credit_2020_itog;
		$('#calc_C43').val(C43.toFixed(0));

		var C40 = $('#calc_C40').val();
		var C41 = $('#calc_C41').val();
		var C42 = $('#calc_C42').val();
		var C43 = $('#calc_C43').val();

		var C44 = +C40 + +C41 + +C42 + +C43;
		$('#calc_C44').val(C44.toFixed(0));

		if ( C39 > C44 ) {
			var C46 = Math.abs(+C39 - +C44);
		} else {
			var C46 = 0;
		}
		$('#calc_C46').val(C46.toFixed(0));

		if ( C39 < C44 ) {
			var C47 = Math.abs(+C39 - +C44);
		} else {
			var C47 = 0;
		}
		$('#calc_C47').val(C47.toFixed(0));

		if ( C22 > 0 && C32 < (Federal_Deduction / Federal_Tax[0].Tax_rate ) ) {
			$('#final_text').text("Tax suggestion: Total income is less than total deductions and credits. To pay less tax in the future, consider carrying forward the RRSP Contribution amount to next year's tax return. Reduce the RRSP Contribution amount so that Federal Tax line is zero");
		} else {
			$('#final_text').text("");
		}


	}// tables_values() END














	//  ————————————————————————————————————————————————————————————————
	//  ————————————————————————————————————————————————————————————————




});