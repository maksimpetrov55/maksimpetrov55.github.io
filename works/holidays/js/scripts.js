$(document).ready(function() {



	$('input').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		//calculation();
	});

	var tech_arr = [];
	var tech_text = '';
	$('input').each(function(){
		let inp_ID = $(this).attr("id");
		//console.log(tech_arr.includes(inp_ID));
		if ( tech_arr.includes(inp_ID) == true ) {
			tech_text = tech_text + " " + inp_ID;
			$('.tech').text( tech_text );
		}
		tech_arr.push(inp_ID);
	});

	$('.calc__plus').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
	});

	$('#calc_province').change(function(){
		$('.calc__part--show').removeClass("calc__part--show");
		let name = "#part_" + $(this).val();
		$(name).addClass("calc__part--show");
	});

	// AB
	calculate_AB();
	$('#AB_select_1, #AB_select_2, #AB_select_3, #AB_select_4').change(function(){
		calculate_AB();
	});
	$('#AB_inp_1, #AB_inp_2, #AB_inp_3, #AB_inp_4, #AB_inp_5, #AB_inp_6, #AB_inp_7, #AB_inp_8, #AB_inp_9, #AB_inp_10, #AB_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_AB();
	});

	function calculate_AB() {
		var AB_inp_1 = $('#AB_inp_1').val().split(',').join('');
		var AB_inp_2 = $('#AB_inp_2').val().split(',').join('');
		var AB_inp_4 = $('#AB_inp_4').val().split(',').join('');
		var AB_inp_5 = $('#AB_inp_5').val().split(',').join('');

		if ( $('#AB_select_1').val() == "yes" ) {
			$('#AB_inp_3').val( ( AB_inp_1 / AB_inp_2 ).toFixed(2) );
		} else {
			$('#AB_inp_3').val(0);
		}
		$('#AB_inp_6').val( ( +AB_inp_4 / 52 / +AB_inp_5 ).toFixed(2) );

		if ( $('#AB_select_1').val() == "no" && $('#AB_select_2').val() == "yes" ) {
			$('#AB_inp_9').val(1.5);
		} else {
			if ( $('#AB_select_3').val() == "yes" ) {
				$('#AB_inp_9').val(1);
			} else {
				$('#AB_inp_9').val(1.5);
			}
		}

		var AB_inp_6 = $('#AB_inp_6').val().split(',').join('');
		var AB_inp_7 = $('#AB_inp_7').val().split(',').join('');
		var AB_inp_8 = $('#AB_inp_8').val().split(',').join('');
		var AB_inp_9 = $('#AB_inp_9').val().split(',').join('');

		if ( $('#AB_select_2').val() != "yes" ) {
			$('#AB_inp_10').val(0);
		} else {
			if ( $('#AB_select_4').val() == "yes" ) {
				$('#AB_inp_10').val( AB_inp_6 * AB_inp_8 * AB_inp_9 );
			} else {
				$('#AB_inp_10').val( AB_inp_7 * AB_inp_8 * AB_inp_9 );
			}
		}

		var AB_inp_3 = $('#AB_inp_3').val();
		var AB_inp_10 = $('#AB_inp_10').val();

		$('#AB_inp_11').val( +AB_inp_3 + +AB_inp_10 );

	}
	// AB


	// _BC
	calculate_BC();
	$('#BC_select_1, #BC_select_2, #BC_select_3').change(function(){
		calculate_BC();
	});
	$('#BC_inp_1, #BC_inp_2, #BC_inp_3, #BC_inp_4, #BC_inp_5, #BC_inp_6, #BC_inp_7, #BC_inp_8, #BC_inp_9, #BC_inp_10, #BC_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_BC();
	});

	function calculate_BC() {
		var BC_inp_1 = $('#BC_inp_1').val().split(',').join('');
		var BC_inp_2 = $('#BC_inp_2').val().split(',').join('');
		var BC_inp_4 = $('#BC_inp_4').val().split(',').join('');
		var BC_inp_5 = $('#BC_inp_5').val().split(',').join('');

		$('#BC_inp_3').val( ( BC_inp_1 / BC_inp_2 ).toFixed(2) );

		$('#BC_inp_6').val( ( +BC_inp_4 / 52 / +BC_inp_5 ).toFixed(2) );

		var BC_inp_8 = $('#BC_inp_8').val().split(',').join('');

		if ( $('#BC_select_2').val() == "yes" ) {
			if ( BC_inp_8 > 12 ) {
				$('#BC_inp_9').val(2);
			} else {
				$('#BC_inp_9').val(1.5);
			}
		} else {
			$('#BC_inp_9').val(1);
		}

		var BC_inp_6 = $('#BC_inp_6').val().split(',').join('');
		var BC_inp_7 = $('#BC_inp_7').val().split(',').join('');
		
		var BC_inp_9 = $('#BC_inp_9').val().split(',').join('');

		if ( $('#BC_select_1').val() != "yes" ) {
			$('#BC_inp_10').val(0);
		} else {
			if ( $('#BC_select_3').val() == "yes" ) {
				$('#BC_inp_10').val( BC_inp_6 * BC_inp_8 * BC_inp_9 );
			} else {
				$('#BC_inp_10').val( BC_inp_7 * BC_inp_8 * BC_inp_9 );
			}
		}

		var BC_inp_3 = $('#BC_inp_3').val();
		var BC_inp_10 = $('#BC_inp_10').val();

		if ( $('#BC_select_1').val() == "yes" ) {
			$('#BC_inp_11').val( +BC_inp_3 + +BC_inp_10 );
		} else {
			$('#BC_inp_11').val( +BC_inp_3 );
		}

	}
	// _BC


	// _ON
	calculate_ON();
	$('#ON_select_1, #ON_select_2, #ON_select_3').change(function(){
		calculate_ON();
	});
	$('#ON_inp_1, #ON_inp_2, #ON_inp_3, #ON_inp_4, #ON_inp_5, #ON_inp_6, #ON_inp_7, #ON_inp_8, #ON_inp_9, #ON_inp_10, #ON_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_ON();
	});

	function calculate_ON() {
		var ON_inp_1 = $('#ON_inp_1').val().split(',').join('');
		var ON_inp_2 = $('#ON_inp_2').val().split(',').join('');
		var ON_inp_4 = $('#ON_inp_4').val().split(',').join('');
		var ON_inp_5 = $('#ON_inp_5').val().split(',').join('');

		$('#ON_inp_3').val( ( ON_inp_1 / ON_inp_2 ).toFixed(2) );

		$('#ON_inp_6').val( ( +ON_inp_4 / 52 / +ON_inp_5 ).toFixed(2) );

		var ON_inp_8 = $('#ON_inp_8').val().split(',').join('');

		if ( $('#ON_select_2').val() == "yes" ) {
			$('#ON_inp_9').val(1.5);
		} else {
			$('#ON_inp_9').val(1);
		}

		var ON_inp_6 = $('#ON_inp_6').val().split(',').join('');
		var ON_inp_7 = $('#ON_inp_7').val().split(',').join('');
		
		var ON_inp_9 = $('#ON_inp_9').val().split(',').join('');

		if ( $('#ON_select_1').val() != "yes" ) {
			$('#ON_inp_10').val(0);
		} else {
			if ( $('#ON_select_3').val() == "yes" ) {
				$('#ON_inp_10').val( ON_inp_6 * ON_inp_8 * ON_inp_9 );
			} else {
				$('#ON_inp_10').val( ON_inp_7 * ON_inp_8 * ON_inp_9 );
			}
		}

		var ON_inp_3 = $('#ON_inp_3').val();
		var ON_inp_10 = $('#ON_inp_10').val();

		if ( $('#ON_select_1').val() == "yes" ) {
			$('#ON_inp_11').val( +ON_inp_3 + +ON_inp_10 );
		} else {
			$('#ON_inp_11').val( +ON_inp_3 );
		}

	}
	// _ON


	// _NL
	calculate_NL();
	$('#NL_select_1, #NL_select_2').change(function(){
		calculate_NL();
	});
	$('#NL_inp_1, #NL_inp_2, #NL_inp_3, #NL_inp_4, #NL_inp_5, #NL_inp_6, #NL_inp_7, #NL_inp_8, #NL_inp_9, #NL_inp_10, #NL_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_NL();
	});

	function calculate_NL() {
		var NL_inp_1 = $('#NL_inp_1').val().split(',').join('');
		var NL_inp_2 = $('#NL_inp_2').val().split(',').join('');
		var NL_inp_4 = $('#NL_inp_4').val().split(',').join('');
		var NL_inp_5 = $('#NL_inp_5').val().split(',').join('');

		$('#NL_inp_3').val( ( NL_inp_1 / NL_inp_2 ).toFixed(2) );

		$('#NL_inp_6').val( ( +NL_inp_4 / 52 / +NL_inp_5 ).toFixed(2) );

		var NL_inp_8 = $('#NL_inp_8').val().split(',').join('');

		if ( $('#NL_select_1').val() == "yes" ) {
			$('#NL_inp_9').val(2);
		} else {
			$('#NL_inp_9').val(1);
		}

		var NL_inp_6 = $('#NL_inp_6').val().split(',').join('');
		var NL_inp_7 = $('#NL_inp_7').val().split(',').join('');
		
		var NL_inp_9 = $('#NL_inp_9').val().split(',').join('');

		if ( $('#NL_select_1').val() != "yes" ) {
			$('#NL_inp_10').val(0);
		} else {
			if ( $('#NL_select_2').val() == "yes" ) {
				$('#NL_inp_10').val( NL_inp_6 * NL_inp_8 * NL_inp_9 );
			} else {
				$('#NL_inp_10').val( NL_inp_7 * NL_inp_8 * NL_inp_9 );
			}
		}

		var NL_inp_3 = $('#NL_inp_3').val();
		var NL_inp_10 = $('#NL_inp_10').val();

		$('#NL_inp_11').val( +NL_inp_3 + +NL_inp_10 );

	}
	// _NL


	// _NT
	calculate_NT();
	$('#NT_select_1, #NT_select_2').change(function(){
		calculate_NT();
	});
	$('#NT_inp_1, #NT_inp_2, #NT_inp_3, #NT_inp_4, #NT_inp_5, #NT_inp_6, #NT_inp_7, #NT_inp_8, #NT_inp_9, #NT_inp_10, #NT_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_NT();
	});

	function calculate_NT() {
		var NT_inp_1 = $('#NT_inp_1').val().split(',').join('');
		var NT_inp_2 = $('#NT_inp_2').val().split(',').join('');
		var NT_inp_4 = $('#NT_inp_4').val().split(',').join('');
		var NT_inp_5 = $('#NT_inp_5').val().split(',').join('');

		$('#NT_inp_3').val( ( NT_inp_1 / NT_inp_2 ).toFixed(2) );

		$('#NT_inp_6').val( ( +NT_inp_4 / 52 / +NT_inp_5 ).toFixed(2) );

		var NT_inp_8 = $('#NT_inp_8').val().split(',').join('');

		$('#NT_inp_9').val(1.5);

		var NT_inp_6 = $('#NT_inp_6').val().split(',').join('');
		var NT_inp_7 = $('#NT_inp_7').val().split(',').join('');
		
		var NT_inp_9 = $('#NT_inp_9').val().split(',').join('');

		if ( $('#NT_select_1').val() != "yes" ) {
			$('#NT_inp_10').val(0);
		} else {
			if ( $('#NT_select_2').val() == "yes" ) {
				$('#NT_inp_10').val( NT_inp_6 * NT_inp_8 * NT_inp_9 );
			} else {
				$('#NT_inp_10').val( NT_inp_7 * NT_inp_8 * NT_inp_9 );
			}
		}

		var NT_inp_3 = $('#NT_inp_3').val();
		var NT_inp_10 = $('#NT_inp_10').val();

		$('#NT_inp_11').val( +NT_inp_3 + +NT_inp_10 );

	}
	// _NT


	// _NS
	calculate_NS();
	$('#NS_select_1, #NS_select_2').change(function(){
		calculate_NS();
	});
	$('#NS_inp_1, #NS_inp_2, #NS_inp_3, #NS_inp_4, #NS_inp_5, #NS_inp_6, #NS_inp_7, #NS_inp_8, #NS_inp_9, #NS_inp_10, #NS_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_NS();
	});

	function calculate_NS() {
		var NS_inp_1 = $('#NS_inp_1').val().split(',').join('');
		var NS_inp_2 = $('#NS_inp_2').val().split(',').join('');
		var NS_inp_4 = $('#NS_inp_4').val().split(',').join('');
		var NS_inp_5 = $('#NS_inp_5').val().split(',').join('');

		$('#NS_inp_3').val( ( NS_inp_1 / NS_inp_2 ).toFixed(2) );

		$('#NS_inp_6').val( ( +NS_inp_4 / 52 / +NS_inp_5 ).toFixed(2) );

		var NS_inp_8 = $('#NS_inp_8').val().split(',').join('');

		$('#NS_inp_9').val(1.5);

		var NS_inp_6 = $('#NS_inp_6').val().split(',').join('');
		var NS_inp_7 = $('#NS_inp_7').val().split(',').join('');
		
		var NS_inp_9 = $('#NS_inp_9').val().split(',').join('');

		if ( $('#NS_select_1').val() != "yes" ) {
			$('#NS_inp_10').val(0);
		} else {
			if ( $('#NS_select_2').val() == "yes" ) {
				$('#NS_inp_10').val( NS_inp_6 * NS_inp_8 * NS_inp_9 );
			} else {
				$('#NS_inp_10').val( NS_inp_7 * NS_inp_8 * NS_inp_9 );
			}
		}

		var NS_inp_3 = $('#NS_inp_3').val();
		var NS_inp_10 = $('#NS_inp_10').val();

		$('#NS_inp_11').val( +NS_inp_3 + +NS_inp_10 );

	}
	// _NS


	// _NU
	calculate_NU();
	$('#NU_select_1, #NU_select_2').change(function(){
		calculate_NU();
	});
	$('#NU_inp_1, #NU_inp_2, #NU_inp_3, #NU_inp_4, #NU_inp_5, #NU_inp_6, #NU_inp_7, #NU_inp_8, #NU_inp_9, #NU_inp_10, #NU_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_NU();
	});

	function calculate_NU() {
		var NU_inp_1 = $('#NU_inp_1').val().split(',').join('');
		var NU_inp_2 = $('#NU_inp_2').val().split(',').join('');
		var NU_inp_4 = $('#NU_inp_4').val().split(',').join('');
		var NU_inp_5 = $('#NU_inp_5').val().split(',').join('');

		$('#NU_inp_3').val( ( NU_inp_1 / NU_inp_2 ).toFixed(2) );

		$('#NU_inp_6').val( ( +NU_inp_4 / 52 / +NU_inp_5 ).toFixed(2) );

		var NU_inp_8 = $('#NU_inp_8').val().split(',').join('');

		$('#NU_inp_9').val(1.5);

		var NU_inp_6 = $('#NU_inp_6').val().split(',').join('');
		var NU_inp_7 = $('#NU_inp_7').val().split(',').join('');
		
		var NU_inp_9 = $('#NU_inp_9').val().split(',').join('');

		if ( $('#NU_select_1').val() != "yes" ) {
			$('#NU_inp_10').val(0);
		} else {
			if ( $('#NU_select_2').val() == "yes" ) {
				$('#NU_inp_10').val( NU_inp_6 * NU_inp_8 * NU_inp_9 );
			} else {
				$('#NU_inp_10').val( NU_inp_7 * NU_inp_8 * NU_inp_9 );
			}
		}

		var NU_inp_3 = $('#NU_inp_3').val();
		var NU_inp_10 = $('#NU_inp_10').val();

		$('#NU_inp_11').val( +NU_inp_3 + +NU_inp_10 );

	}
	// _NU


	// _PE
	calculate_PE();
	$('#PE_select_1, #PE_select_2, #PE_select_3').change(function(){
		calculate_PE();
	});
	$('#PE_inp_1, #PE_inp_2, #PE_inp_3, #PE_inp_4, #PE_inp_5, #PE_inp_6, #PE_inp_7, #PE_inp_8, #PE_inp_9, #PE_inp_10, #PE_inp_11').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_PE();
	});

	function calculate_PE() {
		var PE_inp_1 = $('#PE_inp_1').val().split(',').join('');
		var PE_inp_2 = $('#PE_inp_2').val().split(',').join('');
		var PE_inp_4 = $('#PE_inp_4').val().split(',').join('');
		var PE_inp_5 = $('#PE_inp_5').val().split(',').join('');

		$('#PE_inp_3').val( ( PE_inp_1 / PE_inp_2 ).toFixed(2) );

		$('#PE_inp_6').val( ( +PE_inp_4 / 52 / +PE_inp_5 ).toFixed(2) );

		var PE_inp_8 = $('#PE_inp_8').val().split(',').join('');

		if ( $('#PE_select_2').val() == "yes" ) {
			$('#PE_inp_9').val(1);
		} else {
			$('#PE_inp_9').val(1.5);
		}

		var PE_inp_6 = $('#PE_inp_6').val().split(',').join('');
		var PE_inp_7 = $('#PE_inp_7').val().split(',').join('');
		
		var PE_inp_9 = $('#PE_inp_9').val().split(',').join('');

		if ( $('#PE_select_1').val() != "yes" ) {
			$('#PE_inp_10').val(0);
		} else {
			if ( $('#PE_select_3').val() == "yes" ) {
				$('#PE_inp_10').val( PE_inp_6 * PE_inp_8 * PE_inp_9 );
			} else {
				$('#PE_inp_10').val( PE_inp_7 * PE_inp_8 * PE_inp_9 );
			}
		}

		var PE_inp_3 = $('#PE_inp_3').val();
		var PE_inp_10 = $('#PE_inp_10').val();

		if ( $('#PE_select_2').val() == "yes" ) {
			$('#PE_inp_11').val( +PE_inp_10 );
		} else {
			$('#PE_inp_11').val( +PE_inp_3 + +PE_inp_10 );
		}

	}
	// _PE


	// _QC
	calculate_QC();
	$('#QC_select_1, #QC_select_2, #QC_select_3').change(function(){
		calculate_QC();
	});
	$('#QC_inp_1, #QC_inp_2, #QC_inp_3, #QC_inp_4, #QC_inp_5, #QC_inp_6, #QC_inp_7, #QC_inp_8, #QC_inp_9, #QC_inp_10, #QC_inp_11, #QC_inp_12').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_QC();
	});

	function calculate_QC() {
		var QC_inp_1 = $('#QC_inp_1').val().split(',').join('');
		var QC_inp_12 = $('#QC_inp_12').val().split(',').join('');
		var QC_inp_2 = $('#QC_inp_2').val().split(',').join('');
		var QC_inp_4 = $('#QC_inp_4').val().split(',').join('');
		var QC_inp_5 = $('#QC_inp_5').val().split(',').join('');

		if( QC_inp_12 == 0 ) {
			$('#QC_inp_3').val( (QC_inp_1 / QC_inp_2).toFixed(2) );
		} else {
			$('#QC_inp_3').val( ((QC_inp_1 / QC_inp_12) * (QC_inp_12 / QC_inp_2)).toFixed(2) );
		}

		$('#QC_inp_6').val( ( +QC_inp_4 / 52 / +QC_inp_5 ).toFixed(2) );

		var QC_inp_8 = $('#QC_inp_8').val().split(',').join('');

		if ( $('#QC_select_2').val() == "yes" ) {
			$('#QC_inp_9').val(1);
		} else {
			$('#QC_inp_9').val(1.5);
		}

		var QC_inp_6 = $('#QC_inp_6').val().split(',').join('');
		var QC_inp_7 = $('#QC_inp_7').val().split(',').join('');
		
		var QC_inp_9 = $('#QC_inp_9').val().split(',').join('');

		if ( $('#QC_select_1').val() != "yes" ) {
			$('#QC_inp_10').val(0);
		} else {
			if ( $('#QC_select_3').val() == "yes" ) {
				$('#QC_inp_10').val( QC_inp_6 * QC_inp_8 * QC_inp_9 );
			} else {
				$('#QC_inp_10').val( QC_inp_7 * QC_inp_8 * QC_inp_9 );
			}
		}

		var QC_inp_3 = $('#QC_inp_3').val();
		var QC_inp_10 = $('#QC_inp_10').val();

		if ( $('#QC_select_2').val() == "yes" ) {
			$('#QC_inp_11').val( +QC_inp_10 );
		} else {
			$('#QC_inp_11').val( +QC_inp_3 + +QC_inp_10 );
		}

	}
	// _QC


	// _MB
	calculate_MB();
	$('#MB_select_1, #MB_select_2, #MB_select_3, #MB_select_4').change(function(){
		calculate_MB();
	});
	$('#MB_inp_1, #MB_inp_2, #MB_inp_3, #MB_inp_4, #MB_inp_5, #MB_inp_6, #MB_inp_7, #MB_inp_8, #MB_inp_9, #MB_inp_10, #MB_inp_11, #MB_inp_12').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_MB();
	});

	function calculate_MB() {

		if ( $('#MB_select_4').val() == "regular" ) {
			$('#MB_inp_2').parent().css({display: "flex"});
			$('#MB_inp_12').parent().css({display: "none"});
			$('#MB_inp_12').val(0);
			$('#MB_inp_4').parent().css({display: "flex"});
			$('#MB_inp_5').parent().css({display: "flex"});
			$('#MB_inp_6').parent().css({display: "flex"});
			$('#MB_select_2').prop('disabled', false);
			$('#MB_select_3').prop('disabled', false);
		}
		if ( $('#MB_select_4').val() == "irregular" ) {
			$('#MB_inp_2').parent().css({display: "none"});
			$('#MB_inp_12').parent().css({display: "flex"});
			$('#MB_inp_12').val(5);
			$('#MB_inp_4').parent().css({display: "none"});
			$('#MB_inp_5').parent().css({display: "none"});
			$('#MB_inp_6').parent().css({display: "none"});
			$('#MB_select_3 option[value="no"]').prop('selected', true);
			$('#MB_select_2').prop('disabled', false);
			$('#MB_select_3').prop('disabled', true);
		}
		if ( $('#MB_select_4').val() == "contruction" ) {
			$('#MB_inp_2').parent().css({display: "none"});
			$('#MB_inp_12').parent().css({display: "flex"});
			$('#MB_inp_12').val(4);
			$('#MB_inp_4').parent().css({display: "none"});
			$('#MB_inp_5').parent().css({display: "none"});
			$('#MB_inp_6').parent().css({display: "none"});
			$('#MB_select_2 option[value="no"]').prop('selected', true);
			$('#MB_select_3 option[value="no"]').prop('selected', true);
			$('#MB_select_2').prop('disabled', true);
			$('#MB_select_3').prop('disabled', true);
		}

		var MB_inp_1 = $('#MB_inp_1').val().split(',').join('');
		var MB_inp_12 = $('#MB_inp_12').val().split(',').join('');
		var MB_inp_2 = $('#MB_inp_2').val().split(',').join('');
		var MB_inp_4 = $('#MB_inp_4').val().split(',').join('');
		var MB_inp_5 = $('#MB_inp_5').val().split(',').join('');

		if ( $('#MB_select_4').val() == "regular" ) {
			$('#MB_inp_3').val( (MB_inp_1 / MB_inp_2).toFixed(2) );
		}
		if ( $('#MB_select_4').val() == "irregular" ) {
			$('#MB_inp_3').val( (MB_inp_1 * MB_inp_12 / 100).toFixed(2) );
		}
		if ( $('#MB_select_4').val() == "contruction" ) {
			$('#MB_inp_3').val( (MB_inp_1 * MB_inp_12 / 100).toFixed(2) );
		}

		$('#MB_inp_6').val( ( +MB_inp_4 / 52 / +MB_inp_5 ).toFixed(2) );

		var MB_inp_8 = $('#MB_inp_8').val().split(',').join('');

		if ( $('#MB_select_2').val() == "yes" ) {
			$('#MB_inp_9').val(1);
		} else {
			if ( $('#MB_select_1').val() == "yes" ) {
				$('#MB_inp_9').val(1.5);
			} else {
				$('#MB_inp_9').val(1);
			}
		}

		var MB_inp_6 = $('#MB_inp_6').val().split(',').join('');
		var MB_inp_7 = $('#MB_inp_7').val().split(',').join('');
		
		var MB_inp_9 = $('#MB_inp_9').val().split(',').join('');


		if ( $('#MB_select_4').val() == "regular" ) {
			if ( $('#MB_select_1').val() != "yes" ) {
				$('#MB_inp_10').val(0);
			} else {
				if ( $('#MB_select_3').val() == "yes" ) {
					$('#MB_inp_10').val( MB_inp_6 * MB_inp_8 * MB_inp_9 );
				} else {
					$('#MB_inp_10').val( MB_inp_7 * MB_inp_8 * MB_inp_9 );
				}
			}
		}
		if ( $('#MB_select_4').val() == "irregular" ) {
			if ( $('#MB_select_1').val() != "yes" ) {
				$('#MB_inp_10').val(0);
			} else {
				$('#MB_inp_10').val( MB_inp_7 * MB_inp_8 * MB_inp_9 );
			}
		}
		if ( $('#MB_select_4').val() == "contruction" ) {
			if ( $('#MB_select_1').val() != "yes" ) {
				$('#MB_inp_10').val(0);
			} else {
				$('#MB_inp_10').val( MB_inp_7 * MB_inp_8 * MB_inp_9 );
			}
		}

		var MB_inp_3 = $('#MB_inp_3').val();
		var MB_inp_10 = $('#MB_inp_10').val();

		$('#MB_inp_11').val( +MB_inp_3 + +MB_inp_10 );

	}
	// _MB


	// _SK
	calculate_SK();
	$('#SK_select_1, #SK_select_2, #SK_select_4, #SK_select_5, #SK_select_6').change(function(){
		calculate_SK();
	});
	$('#SK_inp_1, #SK_inp_2, #SK_inp_3, #SK_inp_4, #SK_inp_5, #SK_inp_6, #SK_inp_7, #SK_inp_8, #SK_inp_9, #SK_inp_10, #SK_inp_11, #SK_inp_13').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_SK();
	});

	function calculate_SK() {

		if ( $('#SK_select_4').val() == "other" ) {
			$('#SK_select_5').prop('disabled', false);
			$('#SK_select_6').prop('disabled', false);
			$('#SK_inp_12').parent().css({display: "flex"});
			$('#SK_inp_13').val(5);
			$('#SK_inp_2').parent().css({display: "flex"});
			$('#SK_inp_15').parent().css({display: "flex"});
			$('#SK_select_5').parent().css({display: "flex"});
			$('#SK_select_6').parent().css({display: "flex"});
			$('#SK_inp_4').parent().css({display: "flex"});
			$('#SK_inp_5').parent().css({display: "flex"});
			$('#SK_inp_6').parent().css({display: "flex"});
			$('#SK_select_2').prop('disabled', false);

		}
		if ( $('#SK_select_4').val() == "contruction" ) {
			$('#SK_select_5').prop('disabled', true);
			$('#SK_select_6').prop('disabled', true);
			$('#SK_inp_12').parent().css({display: "none"});
			$('#SK_inp_13').val(4);
			$('#SK_inp_2').parent().css({display: "none"});
			$('#SK_inp_15').parent().css({display: "none"});
			$('#SK_select_5').parent().css({display: "none"});
			$('#SK_select_6').parent().css({display: "none"});
			$('#SK_inp_4').parent().css({display: "none"});
			$('#SK_inp_5').parent().css({display: "none"});
			$('#SK_inp_6').parent().css({display: "none"});
			$('#SK_select_2').prop('disabled', true);
			$('#SK_select_2 option[value="no"]').prop('selected', true);
		}

		var SK_inp_1 = $('#SK_inp_1').val().split(',').join('');
		var SK_inp_12 = $('#SK_inp_12').val().split(',').join('');
		var SK_inp_13 = $('#SK_inp_13').val().split(',').join('');
		var SK_inp_2 = $('#SK_inp_2').val().split(',').join('');
		var SK_inp_4 = $('#SK_inp_4').val().split(',').join('');
		var SK_inp_5 = $('#SK_inp_5').val().split(',').join('');

		if ( $('#SK_select_4').val() == "other" ) {
			$('#SK_inp_14').val( ((+SK_inp_1 + +SK_inp_12) * SK_inp_13 / 100).toFixed(2) );
			if ( $('#SK_select_5').val() == "yes" && $('#SK_select_6').val() == "yes" ) {
				$('#SK_inp_15').val( (SK_inp_1 / SK_inp_2).toFixed(2) );
			} else {
				$('#SK_inp_15').val( 0 );
			}
			var SK_inp_14 = $('#SK_inp_14').val();
			var SK_inp_15 = $('#SK_inp_15').val();
			$('#SK_inp_3').val( (+SK_inp_14 - +SK_inp_15).toFixed(2) );
		}
		if ( $('#SK_select_4').val() == "contruction" ) {
			$('#SK_inp_14').val( (SK_inp_1 * SK_inp_13 / 100).toFixed(2) );
			$('#SK_inp_15').val( 0 );
			var SK_inp_14 = $('#SK_inp_14').val();
			var SK_inp_15 = $('#SK_inp_15').val();
			$('#SK_inp_3').val( (+SK_inp_14).toFixed(2) );
		}

		$('#SK_inp_6').val( ( +SK_inp_4 / 52 / +SK_inp_5 ).toFixed(2) );

		var SK_inp_8 = $('#SK_inp_8').val().split(',').join('');

		$('#SK_inp_9').val(1.5);

		var SK_inp_6 = $('#SK_inp_6').val().split(',').join('');
		var SK_inp_7 = $('#SK_inp_7').val().split(',').join('');
		
		var SK_inp_9 = $('#SK_inp_9').val().split(',').join('');


		if ( $('#SK_select_4').val() == "other" ) {
			if ( $('#SK_select_1').val() != "yes" ) {
				$('#SK_inp_10').val(0);
			} else {
				if ( $('#SK_select_2').val() == "yes" ) {
					$('#SK_inp_10').val( SK_inp_6 * SK_inp_8 * SK_inp_9 );
				} else {
					$('#SK_inp_10').val( SK_inp_7 * SK_inp_8 * SK_inp_9 );
				}
			}
		}
		if ( $('#SK_select_4').val() == "contruction" ) {
			if ( $('#SK_select_1').val() != "yes" ) {
				$('#SK_inp_10').val(0);
			} else {
				if ( $('#SK_select_2').val() == "yes" ) {
					$('#SK_inp_10').val( SK_inp_6 * SK_inp_8 * SK_inp_9 );
				} else {
					$('#SK_inp_10').val( SK_inp_7 * SK_inp_8 * SK_inp_9 );
				}
			}
		}

		var SK_inp_3 = $('#SK_inp_3').val();
		var SK_inp_10 = $('#SK_inp_10').val();

		$('#SK_inp_11').val( +SK_inp_3 + +SK_inp_10 );

	}
	// _SK

	
	// _NB
	calculate_NB();
	$('#NB_select_1, #NB_select_2, #NB_select_4, #NB_select_5, #NB_select_6').change(function(){
		calculate_NB();
	});
	$('#NB_inp_1, #NB_inp_2, #NB_inp_3, #NB_inp_4, #NB_inp_5, #NB_inp_6, #NB_inp_7, #NB_inp_8, #NB_inp_9, #NB_inp_10, #NB_inp_11, #NB_inp_12, #NB_inp_13, #NB_inp_14, #NB_inp_15').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_NB();
	});

	function calculate_NB() {

		if ( $('#NB_select_4').val() == "regular" ) {
			$('#NB_inp_2').parent().css({display: "flex"});
			$('#NB_inp_13').parent().css({display: "none"});
			$('#NB_inp_13').val(0);
			$('#NB_inp_4').parent().css({display: "flex"});
			$('#NB_inp_5').parent().css({display: "flex"});
			$('#NB_inp_6').parent().css({display: "flex"});
			$('#NB_select_2').prop('disabled', false);

		}
		if ( $('#NB_select_4').val() == "percentage" ) {
			$('#NB_inp_2').parent().css({display: "none"});
			$('#NB_inp_13').parent().css({display: "flex"});
			$('#NB_inp_13').val(4);
			$('#NB_inp_4').parent().css({display: "none"});
			$('#NB_inp_5').parent().css({display: "none"});
			$('#NB_inp_6').parent().css({display: "none"});
			$('#NB_select_2').prop('disabled', true);
			$('#NB_select_2 option[value="no"]').prop('selected', true);
		}

		var NB_inp_1 = $('#NB_inp_1').val().split(',').join('');
		var NB_inp_13 = $('#NB_inp_13').val().split(',').join('');
		var NB_inp_2 = $('#NB_inp_2').val().split(',').join('');
		var NB_inp_4 = $('#NB_inp_4').val().split(',').join('');
		var NB_inp_5 = $('#NB_inp_5').val().split(',').join('');

		if ( $('#NB_select_4').val() == "regular" ) {
			$('#NB_inp_3').val( (+NB_inp_1 / +NB_inp_2).toFixed(2) );
		}
		if ( $('#NB_select_4').val() == "percentage" ) {
			$('#NB_inp_3').val( (+NB_inp_1 * NB_inp_13 / 100).toFixed(2) );
		}

		$('#NB_inp_6').val( ( +NB_inp_4 / 52 / +NB_inp_5 ).toFixed(2) );

		var NB_inp_8 = $('#NB_inp_8').val().split(',').join('');

		$('#NB_inp_9').val(1.5);

		var NB_inp_6 = $('#NB_inp_6').val().split(',').join('');
		var NB_inp_7 = $('#NB_inp_7').val().split(',').join('');
		
		var NB_inp_9 = $('#NB_inp_9').val().split(',').join('');


		if ( $('#NB_select_4').val() == "regular" ) {
			if ( $('#NB_select_1').val() != "yes" ) {
				$('#NB_inp_10').val(0);
			} else {
				if ( $('#NB_select_2').val() == "yes" ) {
					$('#NB_inp_10').val( NB_inp_6 * NB_inp_8 * NB_inp_9 );
				} else {
					$('#NB_inp_10').val( NB_inp_7 * NB_inp_8 * NB_inp_9 );
				}
			}
		}
		if ( $('#NB_select_4').val() == "percentage" ) {
			if ( $('#NB_select_1').val() != "yes" ) {
				$('#NB_inp_10').val(0);
			} else {
				if ( $('#NB_select_2').val() == "yes" ) {
					$('#NB_inp_10').val( NB_inp_6 * NB_inp_8 * NB_inp_9 );
				} else {
					$('#NB_inp_10').val( NB_inp_7 * NB_inp_8 * NB_inp_9 );
				}
			}
		}

		var NB_inp_3 = $('#NB_inp_3').val();
		var NB_inp_10 = $('#NB_inp_10').val();

		$('#NB_inp_11').val( +NB_inp_3 + +NB_inp_10 );

	}
	// _NB


	// _YT
	calculate_YT();
	$('#YT_select_1, #YT_select_2, #YT_select_3, #YT_select_4').change(function(){
		calculate_YT();
	});
	$('#YT_inp_1, #YT_inp_2, #YT_inp_3, #YT_inp_4, #YT_inp_5, #YT_inp_6, #YT_inp_7, #YT_inp_8, #YT_inp_9, #YT_inp_10, #YT_inp_11, #YT_inp_12, #YT_inp_13, #YT_inp_14, #YT_inp_15').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculate_YT();
	});

	function calculate_YT() {

		if ( $('#YT_select_4').val() == "regular" ) {
			$('#YT_inp_2').parent().css({display: "flex"});
			$('#YT_inp_13').parent().css({display: "none"});
		}
		if ( $('#YT_select_4').val() == "irregular" ) {
			$('#YT_inp_1').val("795");
			$('#YT_inp_2').parent().css({display: "none"});
			$('#YT_inp_13').parent().css({display: "flex"});
		}

		var YT_inp_1 = $('#YT_inp_1').val().split(',').join('');
		var YT_inp_13 = $('#YT_inp_13').val().split(',').join('');
		var YT_inp_2 = $('#YT_inp_2').val().split(',').join('');
		var YT_inp_4 = $('#YT_inp_4').val().split(',').join('');
		var YT_inp_5 = $('#YT_inp_5').val().split(',').join('');

		if ( $('#YT_select_4').val() == "regular" ) {
			$('#YT_inp_3').val( (+YT_inp_1 / +YT_inp_2).toFixed(2) );
		}
		if ( $('#YT_select_4').val() == "irregular" ) {
			$('#YT_inp_3').val( (+YT_inp_1 * YT_inp_13 / 100).toFixed(2) );
		}

		$('#YT_inp_6').val( ( +YT_inp_4 / 52 / +YT_inp_5 ).toFixed(2) );

		var YT_inp_8 = $('#YT_inp_8').val().split(',').join('');

		if ( $('#YT_select_2').val() == "yes" ) {
			$('#YT_inp_9').val(1);
		} else {
			$('#YT_inp_9').val(1.5);
		}

		var YT_inp_6 = $('#YT_inp_6').val().split(',').join('');
		var YT_inp_7 = $('#YT_inp_7').val().split(',').join('');
		
		var YT_inp_9 = $('#YT_inp_9').val().split(',').join('');


		if ( $('#YT_select_4').val() == "regular" ) {
			if ( $('#YT_select_1').val() != "yes" ) {
				$('#YT_inp_10').val(0);
			} else {
				if ( $('#YT_select_2').val() == "yes" ) {
					$('#YT_inp_10').val( YT_inp_6 * YT_inp_8 * YT_inp_9 );
				} else {
					$('#YT_inp_10').val( YT_inp_7 * YT_inp_8 * YT_inp_9 );
				}
			}
		}
		if ( $('#YT_select_4').val() == "irregular" ) {
			if ( $('#YT_select_1').val() != "yes" ) {
				$('#YT_inp_10').val(0);
			} else {
				if ( $('#YT_select_2').val() == "yes" ) {
					$('#YT_inp_10').val( YT_inp_6 * YT_inp_8 * YT_inp_9 );
				} else {
					$('#YT_inp_10').val( YT_inp_7 * YT_inp_8 * YT_inp_9 );
				}
			}
		}

		var YT_inp_3 = $('#YT_inp_3').val();
		var YT_inp_10 = $('#YT_inp_10').val();

		$('#YT_inp_11').val( +YT_inp_3 + +YT_inp_10 );

	}
	// _YT

});