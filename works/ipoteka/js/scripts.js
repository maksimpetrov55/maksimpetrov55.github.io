$(document).ready(function() {

	$("#polzunok").slider({
		animate: "slow",
		range: "min",
		value: 3000000,
		step: 100000,
		min: 1000000,
		max: 30000000,
		slide : function(event, ui) {
			$("#result-polzunok").val(ui.value);
			setvalue();
			calculation();
		}
	});
	$( "#result-polzunok" ).val($( "#polzunok" ).slider( "value" ));
	
	$('#result-polzunok').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok" ).slider( "value", sliderInput );
		setvalue();
		calculation();
	});

	function setvalue() {

		var pol_1_val = $('#result-polzunok').val();

		var pol_2_min = pol_1_val * 0.1;
		var pol_2_max = pol_1_val;
		var pol_2_cur = pol_1_val * 0.3;

		$("#polzunok2").slider({
			animate: "slow",
			range: "min",
			value: pol_2_cur,
			step: 100000,
			min: pol_2_min,
			max: pol_2_max,
			slide : function(event, ui) {
				$("#result-polzunok2").val(ui.value);
				calculation();
			}
		});
		$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));
		
		$('#result-polzunok2').on("change", function(){
			var sliderInput = $(this).val();
			$( "#polzunok2" ).slider( "value", sliderInput );
			calculation();
		});
	}

	setvalue();

	$('#calc_time').on("input", function(){
		if ( $(this).val() > 30 ) {
			$(this).val( 30 );
			calculation();
		} else {
			if ( $(this).val() < 1 ) {
				$(this).val( 1 );
				calculation();
			} else {
				calculation();
			}
		}
	});
	$('#calc_rate').on("input", function(){
		if ( $(this).val() < 1 ) {
			$(this).val( 1 );
			calculation();
		} else {
			if ( $(this).val() > 99 ) {
				$(this).val( 99 );
				calculation();
			} else {
				calculation();
			}
		}
	});

	function calculation() {

		console.log("--");

		var pol_1_val = $('#result-polzunok').val();
		var pol_2_val = $('#result-polzunok2').val();

		var calc_rate = $('#calc_rate').val();
		var calc_time = $('#calc_time').val();

		$('#calc_percent').text( (pol_2_val / pol_1_val * 100).toFixed(1) + "%" );

		var calc_amount_3 = pol_1_val - pol_2_val;
		var calc_amount_1 = ( calc_amount_3 * (calc_rate/100/12) ) / ( 1 - (1 + (calc_rate/100/12)) ** (-1 * 12 * calc_time ) );
		var calc_amount_2 = calc_amount_1 * 2;

		$('#calc_amount_3').text( (+calc_amount_3.toFixed(0)).toLocaleString("ru") + " руб.");
		$('#calc_amount_1').text( (+calc_amount_1.toFixed(0)).toLocaleString("ru") + " руб.");
		$('#calc_amount_2').text( (+calc_amount_2.toFixed(0)).toLocaleString("ru") + " руб.");

	}

	calculation();

	// function discharge(){
	// 	$('#result-polzunok').val(String($('input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	// }
	// discharge();
	// $('input').on("input", function(){
	// 	discharge();
	// });

	$('#result-polzunok').on("focus", function(){
		console.log("222");
	});
	



});