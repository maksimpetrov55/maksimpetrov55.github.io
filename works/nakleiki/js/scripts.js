$(document).ready(function() {

	function form() {
		$('.form').toggleClass("form--hide");
	}

	$('.header__btn').click(function(){
		$('.form__input--order').val("");
		form();
	});
	$('.header__contact').click(function(){
		$('.form__input--order').val("");
		form();
	});
	$('.form__close').click(function(){
		form();
		$('.form__input--order').val("");
	});



	$('.single-item').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		//dotsClass: 'dots',
		prevArrow: "<div class='arrow prev'></div>",
		nextArrow: "<div class='arrow next'></div>",
		responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});

























	$('.calc__border').click(function(){
		var calc_item = $(this).prev(".calc__item").val();
		//console.log(calc_item);

		if ( calc_item == 1 ) {
			$('.calc__line--typeof').removeClass("calc__line--hide");
			$('.calc__label--typeof').removeClass("calc__label--hide");
			$('.calc__picture--show').removeClass("calc__picture--show");
			$('#calc_image_1').addClass("calc__picture--show");
			$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
			//$('.calc__slider2').addClass("calc__slider2--hide");
		} else {
			if ( calc_item == 2 ) {
				$('.calc__line--typeof').removeClass("calc__line--hide");
				$('.calc__label--typeof').removeClass("calc__label--hide");
				$('.calc__slider2').removeClass("calc__slider2--hide");
				$('.calc__picture--show').removeClass("calc__picture--show");
				$('#calc_image_2').addClass("calc__picture--show");
				$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
				//$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3').addClass("calc__label--hide");
				$('#calc_material_4').prop("checked", true);
			} else {
				if ( calc_item == 3 ) {
					$('.calc__line--typeof').removeClass("calc__line--hide");
					$('.calc__label--typeof').removeClass("calc__label--hide");
					$('.calc__slider2').removeClass("calc__slider2--hide");
					$('.calc__picture--show').removeClass("calc__picture--show");
					$('#calc_image_3').addClass("calc__picture--show");
					$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
				} else {
					$('.calc__line--typeof').addClass("calc__line--hide");
					$('.calc__label--typeof').addClass("calc__label--hide");
					$('.calc__slider2').removeClass("calc__slider2--hide");
					$('.calc__picture--show').removeClass("calc__picture--show");
					$('#calc_image_4').addClass("calc__picture--show");
					$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
					$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3').addClass("calc__label--hide");
					$('#calc_material_4').prop("checked", true);
				}
			}
		}

	});

	calc_resize();

	$('input[name=calc_radio_form]').on("change", function(){
		calc_resize();
	});

	function calc_resize(){

		var calc_form = $('input[name=calc_radio_form]:checked').val();

		if ( calc_form == 4 ) {
			$("#polzunok1").slider({
				animate: "slow",
				orientation: "vertical",
				range: "min",
				value: 50,
				step: 1,
				min: 10,
				max: 490,
				slide : function(event, ui) {
					$("#result-polzunok1").val(ui.value);
					calculation();
				}
			});
			$("#polzunok2").slider({
				animate: "slow",
				range: "min",
				value: 50,
				step: 1,
				min: 10,
				max: 320,
				slide : function(event, ui) {
					$("#result-polzunok2").val(ui.value);
					calculation();
				}
			});
		} else {
			$("#polzunok1").slider({
				animate: "slow",
				orientation: "vertical",
				range: "min",
				value: 50,
				step: 1,
				min: 10,
				max: 457,
				slide : function(event, ui) {
					$("#result-polzunok1").val(ui.value);
					calculation();
				}
			});
			$("#polzunok2").slider({
				animate: "slow",
				range: "min",
				value: 50,
				step: 1,
				min: 10,
				max: 302,
				slide : function(event, ui) {
					$("#result-polzunok2").val(ui.value);
					calculation();
				}
			});
		}

	}



	$( "#result-polzunok1" ).val($( "#polzunok1" ).slider( "value" ));
	
	$('#result-polzunok1').on("change", function(){
		let sliderInput = $(this).val();
		$( "#polzunok1" ).slider( "value", sliderInput );
		calculation();
	});

	$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));
	
	$('#result-polzunok2').on("change", function(){
		let sliderInput = $(this).val();
		$( "#polzunok2" ).slider( "value", sliderInput );
		calculation();
	});
	






	$('.calc__input, .calc__slidervalue1, .calc__slidervalue2').on("change", function(){
		calculation();
	});

	$('#calc_vid').on("change", function(){
		var calc_vid_check = $(this).val();
		if ( calc_vid_check > 10 ) {
			$('#calc_vid').val(10);
		}
		calculation();
	});

	$('#result-polzunok1').on("change", function(){
		var calc_vid_check = $(this).val();
		if ( calc_vid_check > 457 ) {
			$('#result-polzunok1').val(457);
		}
		calculation();
	});

	$('#result-polzunok2').on("change", function(){
		var calc_vid_check = $(this).val();
		if ( calc_vid_check > 302 ) {
			$('#result-polzunok2').val(302);
		}
		calculation();
	});

	// $('#calc_shtuk').on("change", function(){
	// 	var calc_shtuk_check = $(this).val();
	// 	if ( calc_shtuk_check < 5 ) {
	// 		$('#calc_shtuk').val(5);
	// 	}
	// 	calculation();
	// });

	$('.calc__radio, .calc__item').click(function(){
		calculation();
	});

	calculation();


	function calculation() {

		console.clear();
		
		//alert("hello");

		var calc_shtuk = $('#calc_shtuk').val();
		var calc_vid = $('#calc_vid').val();

		var calc_vid_sum = (+calc_vid - 1) * 300;

		var calc_form = $('input[name=calc_radio_form]:checked').val();
		var calc_material = $('input[name=calc_radio_material]:checked').val();
		var calc_lamination = $('input[name=calc_radio_lamination]:checked').val();
		
		console.log("calc_form " + calc_form);
		console.log("calc_material " + calc_material);
		console.log("calc_lamination " + calc_lamination);


		
		var calc_height = $( "#result-polzunok1" ).val();
		var calc_width = $( "#result-polzunok2" ).val();


		if ( calc_form == 4 ) {
			var calc_sz1 = Math.floor(490 / +calc_height);
			var calc_sz2 = Math.floor(320 / +calc_width);
			var calc_sz3 = Math.floor(320 / +calc_height);
			var calc_sz4 = Math.floor(490 / +calc_width);
		} else {
			var calc_sz1 = Math.floor(457 / +calc_height);
			var calc_sz2 = Math.floor(302 / +calc_width);
			var calc_sz3 = Math.floor(302 / +calc_height);
			var calc_sz4 = Math.floor(457 / +calc_width);
		}


		var calc_merge1 = calc_sz1 * calc_sz2;
		var calc_merge2 = calc_sz3 * calc_sz4;

		if ( calc_merge1 > calc_merge2 ) {
			var calc_onlist = calc_merge1;
		} else {
			var calc_onlist = calc_merge2;
		}

		console.log(calc_onlist);

		var calc_shtuk_fin = +calc_shtuk / +calc_onlist;

		if ( calc_shtuk_fin < 1 ) {
			var calc_shtuk_fin = 1;
		}

		console.log(calc_shtuk_fin);


		if ( calc_form == 3 ) {
			var calc_x3 = 1.1;
		} else {
			var calc_x3 = 1;
		}

		if ( calc_material == 4 ) {
			var calc_x2 = 1;
		} else {
			var calc_x2 = 1.4;
		}

		if ( calc_lamination == 1 ) {
			var calc_x1 = 1;
		} else {
			if ( calc_form == 4 ) {
				var calc_x1 = 1.2;
			} else {
				var calc_x1 = 1.15;
			}
		}

		if ( +calc_shtuk_fin >= 0 ) 	{ var calc_base = 0; 		var calc_set = 300;		var calc_rate = 20; }
		if ( +calc_shtuk_fin >= 5 ) 	{ var calc_base = 5; 		var calc_set = 200;		var calc_rate = 10; }
		if ( +calc_shtuk_fin >= 10 ) 	{ var calc_base = 10; 		var calc_set = 150;		var calc_rate = 2.9; }
		if ( +calc_shtuk_fin >= 20 ) 	{ var calc_base = 20; 		var calc_set = 121;		var calc_rate = 0.829; }
		if ( +calc_shtuk_fin >= 40 ) 	{ var calc_base = 40; 		var calc_set = 104.5;	var calc_rate = 0.325; }
		if ( +calc_shtuk_fin >= 60 ) 	{ var calc_base = 60; 		var calc_set = 98;		var calc_rate = 0.325; }
		if ( +calc_shtuk_fin >= 80 ) 	{ var calc_base = 80; 		var calc_set = 93.6;	var calc_rate = 0.219; }
		if ( +calc_shtuk_fin >= 100 ) 	{ var calc_base = 100; 		var calc_set = 70;		var calc_rate = 0.0225; }
		if ( +calc_shtuk_fin >= 260 ) 	{ var calc_base = 260; 		var calc_set = 66.5;	var calc_rate = 0.0095; }
		if ( +calc_shtuk_fin >= 500 ) 	{ var calc_base = 500; 		var calc_set = 58.8;	var calc_rate = 0.0134; }
		if ( +calc_shtuk_fin >= 1000 ) 	{ var calc_base = 1000; 	var calc_set = 47.1;	var calc_rate = 0.0015; }
		if ( +calc_shtuk_fin >= 1700 ) 	{ var calc_base = 1700; 	var calc_set = 46.1;	var calc_rate = 0.00003; }

		if ( +calc_shtuk_fin >= 1 ) 	{ var calc_base4 = 1; 		var calc_set4 = 360.00; var calc_rate4 = 155.000; }
		if ( +calc_shtuk_fin >= 2 ) 	{ var calc_base4 = 2; 		var calc_set4 = 205.00; var calc_rate4 = 51.6667; }
		if ( +calc_shtuk_fin >= 3 ) 	{ var calc_base4 = 3; 		var calc_set4 = 153.33; var calc_rate4 = 25.8333; }
		if ( +calc_shtuk_fin >= 4 ) 	{ var calc_base4 = 4; 		var calc_set4 = 127.50; var calc_rate4 = 15.5000; }
		if ( +calc_shtuk_fin >= 5 ) 	{ var calc_base4 = 5; 		var calc_set4 = 112.00; var calc_rate4 = 6.40000; }
		if ( +calc_shtuk_fin >= 10 ) 	{ var calc_base4 = 10; 		var calc_set4 = 80.00; var calc_rate4 = 1.85000; }
		if ( +calc_shtuk_fin >= 20 ) 	{ var calc_base4 = 20; 		var calc_set4 = 61.50; var calc_rate4 = 0.78333; }
		if ( +calc_shtuk_fin >= 30 ) 	{ var calc_base4 = 30; 		var calc_set4 = 53.67; var calc_rate4 = 0.36667; }
		if ( +calc_shtuk_fin >= 40 ) 	{ var calc_base4 = 40; 		var calc_set4 = 50.00; var calc_rate4 = 0.25000; }
		if ( +calc_shtuk_fin >= 60 ) 	{ var calc_base4 = 60; 		var calc_set4 = 45.00; var calc_rate4 = 0.17500; }
		if ( +calc_shtuk_fin >= 80 ) 	{ var calc_base4 = 80; 		var calc_set4 = 41.50; var calc_rate4 = 0.15500; }
		if ( +calc_shtuk_fin >= 100 ) 	{ var calc_base4 = 100;		var calc_set4 = 38.40; var calc_rate4 = 0.02267; }
		if ( +calc_shtuk_fin >= 150 ) 	{ var calc_base4 = 150;		var calc_set4 = 37.27; var calc_rate4 = 0.01233; }
		if ( +calc_shtuk_fin >= 200 ) 	{ var calc_base4 = 200;		var calc_set4 = 36.65; var calc_rate4 = 0.00817; }
		if ( +calc_shtuk_fin >= 300 ) 	{ var calc_base4 = 300;		var calc_set4 = 35.83; var calc_rate4 = 0.00808; }
		if ( +calc_shtuk_fin >= 400 ) 	{ var calc_base4 = 400;		var calc_set4 = 35.03; var calc_rate4 = 0.01265; }
		if ( +calc_shtuk_fin >= 500 ) 	{ var calc_base4 = 500;		var calc_set4 = 33.76; var calc_rate4 = 0.01294; }
		if ( +calc_shtuk_fin >= 1000 )	{ var calc_base4 = 1000; 	var calc_set4 = 27.29; var calc_rate4 = 0.00132; }
		if ( +calc_shtuk_fin >= 2000 )	{ var calc_base4 = 2000; 	var calc_set4 = 25.97; var calc_rate4 = 0.00005; }
		if ( +calc_shtuk_fin >= 4000 )	{ var calc_base4 = 4000; 	var calc_set4 = 25.87; var calc_rate4 = 0.00005; }


		console.log("calc_base " + calc_base);
		console.log("calc_set " + calc_set);
		console.log("calc_rate " + calc_rate);

		var calc_sale = 0.95; // Коэффициент скидки

		if ( calc_form == 4 ) {
			var calc_sale = 1; // Коэффициент скидки
			var calc_preresult = +calc_shtuk_fin * ( +calc_set4 - ( +calc_rate4 * ( +calc_shtuk_fin - +calc_base4 ) ) );
		} else {
			var calc_sale = 0.95; // Коэффициент скидки
			var calc_preresult = +calc_shtuk_fin * ( +calc_set - ( +calc_rate * ( +calc_shtuk_fin - +calc_base ) ) );
		}

		var calc_result = ( +calc_preresult * +calc_x1 * +calc_x2 * +calc_x3 * +calc_sale) + +calc_vid_sum;

		if ( calc_result <= 3000 ) {
			$('.calc__alert').addClass("calc__alert--show");
			$('.calc__price').removeClass("calc__price--margin");
		} else {
			$('.calc__alert').removeClass("calc__alert--show");
			$('.calc__price').addClass("calc__price--margin");
		}


		$('#calc_itog').val( calc_result.toFixed(0) + " руб" );

		var calc_price = calc_result / calc_shtuk;
		$('.calc__price').text( calc_price.toFixed(1) + " руб/шт" );


		if ( calc_material == 4) {
			var calc_material_name = "Бумажная самоклейка";
		}
		if ( calc_material == 1) {
			var calc_material_name = "Виниловая пленка";
		}
		if ( calc_material == 3) {
			var calc_material_name = "Прозрачная пленка";
		}

		if ( calc_lamination == 1) {
			var calc_lamination_name = "Без ламинации";
		}
		if ( calc_lamination == 2) {
			var calc_lamination_name = "Глянцевая";
		}
		if ( calc_lamination == 3) {
			var calc_lamination_name = "Матовая";
		}


		$('.form__input--order').val( 
			" | Ширина: " + calc_height + 
			" | Высота: " + calc_width + 
			" | Штук: " + calc_shtuk + 
			" | Виды: " + calc_vid +
			" | Форма наклеек: " + calc_form +
			" | Материал: " + calc_material_name +
			" | Ламинация: " + calc_lamination_name +
			" | Итого сумма: " + calc_result.toFixed(0) + " |"
		);



	};

	$('.calc__btn').click(function(){
		calculation();
		form();
	});


});