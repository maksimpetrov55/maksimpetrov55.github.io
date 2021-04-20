$(document).ready(function() {


	$('.select__current').click(function(){
		$('.black').toggleClass("black--open");
		$(this).toggleClass("select__current--open");
		$(this).next().toggleClass("select__list--open");
	});
	$('.select').on("click",".select__li",function(){
		let select_li = $(this).text();
		$(this).parent().prev().text(select_li);
		select_close();
	});
	$('.black').click(function(){
		select_close();
	});
	function select_close(){
		$(".select__list--open").removeClass("select__list--open");
		$(".select__current--open").removeClass("select__current--open");
		$('.black').toggleClass("black--open");
	}



	$('.select__list--upakovka').empty();
	for ( let i = 0; i < array_upakovka.length; i++ ) {
		let upakovka_name = array_upakovka[i].name;
		$('.select__list--upakovka').append(`<div class="select__li">${upakovka_name}</div>`);
	}

	$('.select__list--kromka').empty();
	for ( let i = 0; i < array_kromka.length; i++ ) {
		let kromka_name = array_kromka[i].name;
		$('.select__list--kromka').append(`<div class="select__li">${kromka_name}</div>`);
	}

	$('.select__list--osnova').empty();
	for ( let i = 0; i < array_osnova.length; i++ ) {
		let osnova_name = array_osnova[i].name;
		$('.select__list--osnova').append(`<div class="select__li">${osnova_name}</div>`);
	}
	
	$('.select__list--plenka').empty();
	for ( let i = 0; i < array_plenka.length; i++ ) {
		let plenka_name = array_plenka[i].name;
		$('.select__list--plenka').append(`<div class="select__li">${plenka_name}</div>`);
	}

	$('.select__list--obratn').empty();
	for ( let i = 0; i < array_plenka.length; i++ ) {
		let plenka_name = array_plenka[i].name;
		$('.select__list--obratn').append(`<div class="select__li">${plenka_name}</div>`);
	}

	$('.select__list--frez').empty();
	for ( let i = 0; i < array_frez.length; i++ ) {
		let frez_name = array_frez[i].name;
		$('.select__list--frez').append(`<div class="select__li">${frez_name}</div>`);
	}



	$('.select__list--rType').empty();
	for ( let i = 0; i < array_rType.length; i++ ) {
		let rType_name = array_rType[i].name;
		$('.select__list--rType').append(`<div class="select__li">${rType_name}</div>`);
	}
	$('.select__list--rKromka').empty();
	for ( let i = 0; i < array_rKromka.length; i++ ) {
		let rKromka_name = array_rKromka[i].name;
		$('.select__list--rKromka').append(`<div class="select__li">${rKromka_name}</div>`);
	}
	$('.select__list--rPlenka').empty();
	for ( let i = 0; i < array_plenka.length; i++ ) {
		let rPlenka_name = array_plenka[i].name;
		$('.select__list--rPlenka').append(`<div class="select__li">${rPlenka_name}</div>`);
	}
	$('.select__list--rFrez').empty();
	for ( let i = 0; i < array_frez.length; i++ ) {
		let rFrez_name = array_frez[i].name;
		$('.select__list--rFrez').append(`<div class="select__li">${rFrez_name}</div>`);
	}

	$('.select__list--kType').empty();
	for ( let i = 0; i < array_kType.length; i++ ) {
		let kType_name = array_kType[i].name;
		$('.select__list--kType').append(`<div class="select__li">${kType_name}</div>`);
	}
	$('.select__list--kPlenka').empty();
	for ( let i = 0; i < array_plenka.length; i++ ) {
		let kPlenka_name = array_plenka[i].name;
		$('.select__list--kPlenka').append(`<div class="select__li">${kPlenka_name}</div>`);
	}


	$('.calc__add--1').click(function(){add_line_1();});
	$('.calc__remove--1').click(function(){remove_line_1();});
	function add_line_1() {
		let state = $('.calc__line--open').length;
		$('.calc__line:eq(' + state + ')').addClass("calc__line--open");
	}
	function remove_line_1() {
		let state = $('.calc__line--open').length;
		$('.calc__line:eq(' + (state - 1) + ')').removeClass("calc__line--open");
	}
	
	$('.calc__add--2').click(function(){add_line_2();});
	$('.calc__remove--2').click(function(){remove_line_2();});
	function add_line_2() {
		let state = $('.calc__radius--open').length;
		$('.calc__radius:eq(' + state + ')').addClass("calc__radius--open");
	}
	function remove_line_2() {
		let state = $('.calc__radius--open').length;
		$('.calc__radius:eq(' + (state - 1) + ')').removeClass("calc__radius--open");
	}

	$('.calc__add--3').click(function(){add_line_3();});
	$('.calc__remove--3').click(function(){remove_line_3();});
	function add_line_3() {
		let state = $('.calc__karniz--open').length;
		$('.calc__karniz:eq(' + state + ')').addClass("calc__karniz--open");
	}
	function remove_line_3() {
		let state = $('.calc__karniz--open').length;
		$('.calc__karniz:eq(' + (state - 1) + ')').removeClass("calc__karniz--open");
	}





	// $(".select__list--upakovka").on("click",".select__li",function(e){
    //     console.log( "upakovka_Value: " + array_upakovka.find(a1 => a1.name === $(this).text() ).value );
    //     // statusValue = statusArray.find(a1 => a1.name === $(this).text() ).value;
    // });
	// $(".select__list--kromka").on("click",".select__li",function(e){
    //     console.log( "kromka_Value: " + array_kromka.find(a1 => a1.name === $(this).text() ).value );
    //     // statusValue = statusArray.find(a1 => a1.name === $(this).text() ).value;
    // });
	// $(".select__list--osnova").on("click",".select__li",function(e){
    //     console.log( "osnova_list: " + array_osnova.find(a1 => a1.name === $(this).text() ).value );
    //     // osnova_value = array_osnova.find(a1 => a1.name === $(this).text() ).value;
    // });



	// $('.calc__line input').on("change",function(){
	// 	alert("hello");
	// });
	// $('.calc__line .select__li').on("click",function(){
	// 	setTimeout(function(){
	// 		alert( $('.select__current--osnova').text() );
	// 	},100);
	// });


	var total = 0;
	function calculate() {
		$('.calc__line').each(function(){
			let osnova_value = +array_osnova.find(a1 => a1.name === $(this).find(".select__current--osnova").text() ).value;
			let plenka_category = +array_plenka.find(a2 => a2.name === $(this).find(".select__current--plenka").text() ).category;
			let frez_value = +array_frez.find(a3 => a3.name === $(this).find(".select__current--frez").text() ).value;
			let plenka_obratn = +array_plenka.find(a4 => a4.name === $(this).find(".select__current--obratn").text() ).obratn;

			// console.log(osnova_value);
			// console.log(plenka_category);

			if ( osnova_value == 32 ){
				if ( plenka_category == 0 ) {var price = 3400;}
				if ( plenka_category == 1 ) {var price = 3400;}
				if ( plenka_category == 2 ) {var price = 3600;}
				if ( plenka_category == 3 ) {var price = 3700;}
				if ( plenka_category == 4 ) {var price = 3800;}
			}
			if ( osnova_value == 16 ){
				if ( plenka_category == 0 ) {var price = 2600;}
				if ( plenka_category == 1 ) {var price = 2600;}
				if ( plenka_category == 2 ) {var price = 2800;}
				if ( plenka_category == 3 ) {var price = 2900;}
				if ( plenka_category == 4 ) {var price = 3100;}
			}
			if ( osnova_value <= 10 ){
				if ( plenka_category == 0 ) {var price = 2400;}
				if ( plenka_category == 1 ) {var price = 2400;}
				if ( plenka_category == 2 ) {var price = 2600;}
				if ( plenka_category == 3 ) {var price = 2700;}
				if ( plenka_category == 4 ) {var price = 2900;}
			}

			let line_height = $(this).find(".calc__input--height").val();
			let line_width = $(this).find(".calc__input--width").val();
			let line_square = (+line_height * +line_width) / 1000000;
			let line_amount = $(this).find(".calc__input--amount").val();
			

			$(this).find('.calc__input--m2price').val( (+line_square * +line_amount).toFixed(2) );
			$(this).find('.calc__input--summ').val( (( +plenka_obratn * +line_square ) + ( +frez_value * +line_square ) + (+line_square * +line_amount * +price)).toFixed(2) );
		});
		
		let i = 0;
		$('.calc__total--1').text(0);
		while( i < $('.calc__line').length ){
			var start_1 = +$('.calc__total--1').text();
			var total_1 = $('.calc__input--summ:eq(' + i + ')').val()
			$('.calc__total--1').text( (+start_1 + +total_1).toFixed(2) );
			i++;
		}


		$('.calc__radius').each(function(){
			let r_type_value = +array_rType.find(r1 => r1.name === $(this).find(".select__current--rType").text() ).value;
			let r_plenka_value = +array_plenka.find(r2 => r2.name === $(this).find(".select__current--rPlenka").text() ).obratn;

			let line_height = $(this).find(".calc__input--rHeight").val();
			$(this).find('.calc__input--rM2price').val( ( (+line_height * 524) / 1000000 ).toFixed(2) );
			$(this).find('.calc__input--rSumm').val( ( ((+line_height * 524) / 1000000) * 7000 ).toFixed(2) );
		});

		let q = 0;
		$('.calc__total--2').text(0);
		while( q < $('.calc__radius').length ){
			var start_2 = +$('.calc__total--2').text();
			var total_2 = $('.calc__input--rSumm:eq(' + q + ')').val()
			$('.calc__total--2').text( (+start_2 + +total_2).toFixed(2) );
			q++;
		}


		$('.calc__karniz').each(function(){
			let k_type_value = +array_kType.find(r1 => r1.name === $(this).find(".select__current--kType").text() ).value;
			let k_plenka_value = +array_plenka.find(r2 => r2.name === $(this).find(".select__current--kPlenka").text() ).obratn;

			let line_length = $(this).find(".calc__input--kLength").val();
			let line_amount = $(this).find(".calc__input--kAmount").val();

			$(this).find('.calc__input--kM2price').val( ( (+line_length * 60) / 1000000 * +line_amount ).toFixed(2) );
			$(this).find('.calc__input--kSumm').val( ( (+line_length / 2750) * +line_amount * 800 ).toFixed(2) );
		});

		let u = 0;
		$('.calc__total--3').text(0);
		while( u < $('.calc__karniz').length ){
			var start_3 = +$('.calc__total--3').text();
			var total_3 = $('.calc__input--kSumm:eq(' + u + ')').val()
			$('.calc__total--3').text( (+start_3 + +total_3).toFixed(2) );
			u++;
		}

	}

	$('.calc__calculate').click(function(){
		calculate();
	});









	

	$('.select').each(function(){
		let select_first = $(this).find(".select__li:eq(0)").text();
		$(this).find(".select__current").text(select_first);
	});
});