$(document).ready(function() {

	$('#calc_rooms').prev().click(function(){
		
		if ( $('#calc_rooms').val() == "С" ) {
			$('#calc_studio').prop('checked', false);
			$('#calc_rooms').val( 1 );
		}

		$('#calc_rooms').val( +$('#calc_rooms').val() - 1 );
		if ( $('#calc_rooms').val() < 1 ) {
			$('#calc_rooms').val( 1 );
		}
		if ( $('#calc_rooms').val() > 5 ) {
			$('#calc_rooms').val( 5 );
		}
	});

	$('#calc_rooms').next().click(function(){
		
		if ( $('#calc_rooms').val() == "С" ) {
			$('#calc_studio').prop('checked', false);
			$('#calc_rooms').val( 1 );
		}

		$('#calc_rooms').val( +$('#calc_rooms').val() + 1 );
		if ( $('#calc_rooms').val() < 1 ) {
			$('#calc_rooms').val( 1 );
		}
		if ( $('#calc_rooms').val() > 5 ) {
			$('#calc_rooms').val( 5 );
		}
	});

	$('#calc_rooms').change(function(){

		$('#calc_studio').prop('checked', false);

		if ( $(this).val() != 1 && +$(this).val() != "2" && $(this).val() != 3 && $(this).val() != 4 && $(this).val() != 5 ) {
			$(this).val( 1 );
		}

		if ( $(this).val() < 1 ) {
			$(this).val( 1 );
		}
		if ( $(this).val() > 5 ) {
			$(this).val( 5 );
		}
		
	});

	$('#calc_studio').change(function(){
		if ( $(this).is(":checked") ) {
			$('#calc_rooms').val ( "С" );
		} else {
			$('#calc_rooms').val ( 1 );
		}
	});

	$('#calc_square').prev().click(function(){
		$('#calc_square').val( +$('#calc_square').val() - 1 );
		if ( $('#calc_square').val() < 15 ) {
			$('#calc_square').val( 15 );
		}
		if ( $('#calc_square').val() > 200 ) {
			$('#calc_square').val( 200 );
		}
	});

	$('#calc_square').next().click(function(){
		$('#calc_square').val( +$('#calc_square').val() + 1 );
		if ( $('#calc_square').val() < 15 ) {
			$('#calc_square').val( 15 );
		}
		if ( $('#calc_square').val() > 200 ) {
			$('#calc_square').val( 200 );
		}
	});

	$('#calc_square').change(function(){
		if ( $(this).val() < 15 ) {
			$(this).val( 15 );
		}
		if ( $(this).val() > 200 ) {
			$(this).val( 200 );
		}
	});



	$('.card__img--111').css({display: "block"});
	$('.card__img--211').css({display: "block"});
	$('.card__img--311').css({display: "block"});

	$('.card__select--1').change(function(){
		let card_select_1_1 = $('#card_select_1_1').val();
		let card_select_1_2 = $('#card_select_1_2').val();
		$('.card__img--1').css({display: "none"});
		let card_img = ".card__img--1" + card_select_1_1 + card_select_1_2;
		$(card_img).css({display: "block"});
	});

	$('.card__select--2').change(function(){
		let card_select_2_1 = $('#card_select_2_1').val();
		let card_select_2_2 = $('#card_select_2_2').val();
		$('.card__img--2').css({display: "none"});
		let card_img = ".card__img--2" + card_select_2_1 + card_select_2_2;
		$(card_img).css({display: "block"});
	});

	$('.card__select--3').change(function(){
		let card_select_3_1 = $('#card_select_3_1').val();
		let card_select_3_2 = $('#card_select_3_2').val();
		$('.card__img--3').css({display: "none"});
		let card_img = ".card__img--3" + card_select_3_1 + card_select_3_2;
		$(card_img).css({display: "block"});
	});




	$('.option__minus').click(function(){
		$(this).next().val( +$(this).next().val() - 1 );
		if ( $(this).next().val() < $(this).next().data("min") ) {
			$(this).next().val( $(this).next().data("min") );
		}

		let option_price = $(this).next().data("price");
		let option_itog = $(this).next().val() * option_price;
		
		$(this).parent().parent().find(".option__itog").text(option_itog);
		$(this).parent().parent().find(".option__price").text( option_itog.toLocaleString("ru") + " ₽" );
	});

	$('.option__plus').click(function(){
		$(this).prev().val( +$(this).prev().val() + 1 );
		if ( $(this).prev().val() > $(this).prev().data("max") ) {
			$(this).prev().val( $(this).prev().data("max") );
		}

		let option_price = $(this).prev().data("price");
		let option_itog = $(this).prev().val() * option_price;
		
		$(this).parent().parent().find(".option__itog").text(option_itog);
		$(this).parent().parent().find(".option__price").text( option_itog.toLocaleString("ru") + " ₽" );
	});




	$('.option__checkbox').change(function(){
		if ( $(this).is(":checked") ) {
			$(this).parent().find(".option__price").addClass("option__price--bold");
			$(this).parent().find(".option__switch").css({display: "flex"});
			$(this).parent().find(".option__unit").text( "всего" );

			$(this).parent().find(".option__itog").text( $(this).parent().find(".option__itog").data("default") );
			$(this).parent().find(".option__value").val( 1 );
		} else {
			$(this).parent().find(".option__price").removeClass("option__price--bold");
			$(this).parent().find(".option__switch").css({display: "none"});
			$(this).parent().find(".option__unit").text( $(this).parent().find(".option__unit").data("default") );

			$(this).parent().find(".option__price").text( $(this).parent().find(".option__price").data("default") );
			$(this).parent().find(".option__itog").text( 0 );
			$(this).parent().find(".option__value").val( 1 );
		}
	});

	$('.option__value').change(function(){
		if ( $(this).val() < $(this).data("min") ){
			$(this).val( $(this).data("min") );
		}
		if ( $(this).val() > $(this).data("max") ){
			$(this).val( $(this).data("max") );
		}
		let option_price = $(this).data("price");
		let option_itog = $(this).val() * option_price;
		
		$(this).parent().parent().find(".option__itog").text(option_itog);
		$(this).parent().parent().find(".option__price").text( option_itog.toLocaleString("ru") + " ₽" );
	});


	$('.option__checkbox--window').change(function(){
		if ( $(this).is(":checked") ) {
			$('.option__windows').css({display: "flex"});
		} else {
			$('.option__windows').css({display: "none"});
		}
	});

	$('.option__value--window').change(function(){
		let option_value_7  = $('#option_value_7').val() * $('#option_value_7').data("price");
		let option_value_8  = $('#option_value_8').val() * $('#option_value_8').data("price");
		let option_value_9  = $('#option_value_9').val() * $('#option_value_9').data("price");
		let option_value_10 = $('#option_value_10').val() * $('#option_value_10').data("price");
		let option_value_11 = $('#option_value_11').val() * $('#option_value_11').data("price");

		let option_value_sum = +option_value_7 + +option_value_8 + +option_value_9 + +option_value_10 + +option_value_11;

		$('.option__itog--window').text( option_value_sum );
		$('.option__price--window').text( option_value_sum.toLocaleString("ru") + " ₽" );
	});


	$('.option__minus--window').click(function(){
		let option_value_7  = $('#option_value_7').val() * $('#option_value_7').data("price");
		let option_value_8  = $('#option_value_8').val() * $('#option_value_8').data("price");
		let option_value_9  = $('#option_value_9').val() * $('#option_value_9').data("price");
		let option_value_10 = $('#option_value_10').val() * $('#option_value_10').data("price");
		let option_value_11 = $('#option_value_11').val() * $('#option_value_11').data("price");

		let option_value_sum = +option_value_7 + +option_value_8 + +option_value_9 + +option_value_10 + +option_value_11;

		$('.option__itog--window').text( option_value_sum );
		$('.option__price--window').text( option_value_sum.toLocaleString("ru") + " ₽" );
	});


	$('.option__plus--window').click(function(){
		
		let option_value_7  = $('#option_value_7').val() * $('#option_value_7').data("price");
		let option_value_8  = $('#option_value_8').val() * $('#option_value_8').data("price");
		let option_value_9  = $('#option_value_9').val() * $('#option_value_9').data("price");
		let option_value_10 = $('#option_value_10').val() * $('#option_value_10').data("price");
		let option_value_11 = $('#option_value_11').val() * $('#option_value_11').data("price");

		let option_value_sum = +option_value_7 + +option_value_8 + +option_value_9 + +option_value_10 + +option_value_11;

		$('.option__itog--window').text( option_value_sum );
		$('.option__price--window').text( option_value_sum.toLocaleString("ru") + " ₽" );

	});


	$('input[name=calc_capital]').change(function(){

		var calc_square = $('#calc_square').val();

		var calc_capital_1 = "";
		var calc_capital_2 = "";
		var calc_capital_3 = "";

		calc_capital_1_price = 0;
		calc_capital_2_price = 0;
		calc_capital_3_price = 0;

		if ( $('#calc_capital_1').is(":checked") ) {
			var calc_capital_1 = '<div class="table__li table__li--100">Разводка электро- и слаботочной проводки</div>';
			var calc_capital_1_price = calc_square * $('#calc_capital_1').val();
		}
		if ( $('#calc_capital_2').is(":checked") ) {
			var calc_capital_2 = '<div class="table__li table__li--100">Черновая стяжка пола (до 100 мм)</div>';
			var calc_capital_2_price = calc_square * $('#calc_capital_2').val();
		}
		if ( $('#calc_capital_3').is(":checked") ) {
			var calc_capital_3 = '<div class="table__li table__li--100">Возведение внутренних стен (газобетонные блоки)</div>';
			var calc_capital_3_price = calc_square * $('#calc_capital_3').val();
		}

		$('#table_info_2').empty();
		$('#table_info_2').append(`${calc_capital_1 + calc_capital_2 + calc_capital_3}`);
		$('#table_price_2').text( (+calc_capital_1_price + +calc_capital_2_price + +calc_capital_3_price).toLocaleString("ru") + " ₽" );

		$('#calc_sum_1').text(+calc_capital_1_price + +calc_capital_2_price + +calc_capital_3_price);
		calculation();
	});


	$('input[name=card_style]').change(function(){
		if ( $('input[name=card_style]:checked').val() == 1 ) {
			$('#table_title_1').text("Базовый ремонт в скандинавском стиле");
		}
		if ( $('input[name=card_style]:checked').val() == 2 ) {
			$('#table_title_1').text("Базовый ремонт в классическом стиле");
		}
		if ( $('input[name=card_style]:checked').val() == 3 ) {
			$('#table_title_1').text("Базовый ремонт в эко-стиле");
		}

		var calc_style = $('input[name=card_style]:checked');
		
		var calc_style_walls = calc_style.prev().find(".card__select:eq(0) option:selected").text();
		var calc_style_color = calc_style.prev().find(".card__select:eq(1) option:selected").text();
		var calc_style_floor = calc_style.prev().find(".card__select:eq(2) option:selected").text();

		$('#table_info_1').empty();
		$('#table_info_1').append(`
			<div class="table__li table__li--100">Цвет стен: ${calc_style_walls}</div>
			<div class="table__li table__li--100">Цвет пола: ${calc_style_color}</div>
			<div class="table__li table__li--100">Тип напольного покрытия: ${calc_style_floor}</div>
		`);
		calculation();
	});

	$('#card_select_1_1, #card_select_1_2, #card_select_1_3, #card_select_2_1, #card_select_2_2, #card_select_2_3, #card_select_3_1, #card_select_3_2, #card_select_3_3').change(function(){
		var calc_style = $('input[name=card_style]:checked');
		
		var calc_style_walls = calc_style.prev().find(".card__select:eq(0) option:selected").text();
		var calc_style_color = calc_style.prev().find(".card__select:eq(1) option:selected").text();
		var calc_style_floor = calc_style.prev().find(".card__select:eq(2) option:selected").text();

		$('#table_info_1').empty();
		$('#table_info_1').append(`
			<div class="table__li table__li--100">Цвет стен: ${calc_style_walls}</div>
			<div class="table__li table__li--100">Цвет пола: ${calc_style_color}</div>
			<div class="table__li table__li--100">Тип напольного покрытия: ${calc_style_floor}</div>
		`);
		calculation();
	});


	$('input[name=option_check]').change(function(){
		$('#table_info_3').empty();
		$('input[name=option_check]:checked').each(function(){
			$('#table_info_3').append(`
			<div class="table__li">${$(this).data("name")}</div>
			`);
		});
		options();
		calculation();
	});

	$('.option__minus, .option__plus').click(function(){
		options();
		calculation();
	});

	function options() {
		var options_sum = 0;

		$('input[name=option_check]:checked').each(function(){
			options_sum = +options_sum + +$(this).parent().find(".option__itog").text();
		});

		$('#calc_sum_2').text(options_sum);
		$('#table_price_3').text( options_sum.toLocaleString("ru") + " ₽" );
		calculation();
	}

	$('.calc__minus').click(function(){
		calculation();
	});
	$('.calc__plus').click(function(){
		calculation();
	});
	$('#calc_square').change(function(){
		calculation();
	});
	$('#calc_rooms').change(function(){
		calculation();
	});
	$('#calc_studio').change(function(){
		calculation();
	});

	calculation();
	function calculation() {

		var calc_square = $('#calc_square').val();
		var calc_rooms = $('#calc_rooms').val();
		if ( calc_rooms == "С" ) {
			calc_rooms = 0;
		}
		var calc_price = $('#calc_city option:selected').data("price");

		var calc_base = 170000;

		var calc_sum_1 = $('#calc_sum_1').text();
		var calc_sum_2 = $('#calc_sum_2').text();

		$('#table_price_1').text( (+calc_base + (+calc_square * 16000) + (+calc_rooms * 80000)).toLocaleString("ru") + " ₽" );

		var calc_itog = +calc_base + (+calc_square * 16000) + (+calc_rooms * 80000) + +calc_sum_1 + +calc_sum_2;

		$('.table__result').text( calc_itog.toLocaleString("ru") + " ₽" );

	}

});