$(document).ready(function() {

	$('input[name=calc_type]').change(function(){
		let calc_type = $('input[name=calc_type]:checked').next().text();
		if ( calc_type == "Настенный / бытовой" ) {
			$('.calc__variant--show').removeClass("calc__variant--show");
			$('#calc_variant_1').addClass("calc__variant--show");
			$('#calc_power_1').prop('checked', true);
		}
		if ( calc_type == "Кассетный" ) {
			$('.calc__variant--show').removeClass("calc__variant--show");
			$('#calc_variant_2').addClass("calc__variant--show");
			$('#calc_power_5').prop('checked', true);
		}
		if ( calc_type == "Канальный" ) {
			$('.calc__variant--show').removeClass("calc__variant--show");
			$('#calc_variant_3').addClass("calc__variant--show");
			$('#calc_power_10').prop('checked', true);
		}
	});



	$("#polzunok").slider({
		animate: "slow",
		range: "min",
		value: 10,
		step: 1,
		min: 1,
		max: 50,
		slide : function(event, ui) {
			$("#result-polzunok").val(ui.value);
			// calculation();
		}
	});
	$( "#result-polzunok" ).val($( "#polzunok" ).slider( "value" ));

	$("#polzunok2").slider({
		animate: "slow",
		range: "min",
		value: 3,
		step: 1,
		min: 1,
		max: 5,
		slide : function(event, ui) {
			$("#result-polzunok2").val(ui.value);
			// calculation();
		}
	});
	$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));


	$('.calc__btn').click(function(){
		calculation();
	});


	function calculation() {

		let calc_base = $('input[name=calc_type]:checked').val();
		let calc_compressor = $('input[name=calc_compressor]:checked').val();

		let calc_power = $('input[name=calc_power]:checked').val();
		let calc_power_name = $('input[name=calc_power]:checked').next().text();

		let calc_length = $('#result-polzunok').val();
		let calc_dots = $('#result-polzunok2').val();

		if ( calc_compressor == "onoff" ) {
			if ( calc_power_name == "9000 Btu" ) {var calc_length_price = 250;}
			if ( calc_power_name == "12000 Btu" ){var calc_length_price = 270;}
			if ( calc_power_name == "18000 Btu" ){var calc_length_price = 300;}
			if ( calc_power_name == "24000 Btu" ){var calc_length_price = 320;}
			if ( calc_power_name == "36000 Btu" ){var calc_length_price = 400;}
			if ( calc_power_name == "48000 Btu" ){var calc_length_price = 420;}
			if ( calc_power_name == "60000 Btu" ){var calc_length_price = 450;}
		} else {
			if ( calc_power_name == "9000 Btu" ) {var calc_length_price = 250;}
			if ( calc_power_name == "12000 Btu" ){var calc_length_price = 250;}
			if ( calc_power_name == "18000 Btu" ){var calc_length_price = 270;}
			if ( calc_power_name == "24000 Btu" ){var calc_length_price = 300;}
			if ( calc_power_name == "36000 Btu" ){var calc_length_price = 320;}
			if ( calc_power_name == "48000 Btu" ){var calc_length_price = 380;}
			if ( calc_power_name == "60000 Btu" ){var calc_length_price = 400;}
		}

		console.clear();
		console.log(calc_base);
		console.log(calc_compressor);
		console.log(calc_power);
		console.log(calc_power_name);
		console.log(calc_length);
		console.log(calc_length_price);
		console.log(calc_dots);

		let calc_summ = +calc_base + +calc_power + (+calc_length * +calc_length_price) + (+calc_dots * 100);

		$('.calc__itog').addClass("calc__itog--show");
		$('.calc__summ').text( calc_summ.toFixed(0) + " руб." );

	}

});