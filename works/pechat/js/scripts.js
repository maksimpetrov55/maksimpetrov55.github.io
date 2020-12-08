$(document).ready(function() {

	$('.calc__border').click(function(){
		var calc_item = $(this).prev(".calc__item").val();
		//console.log(calc_item);

		if ( calc_item == 1 ) {
			$('.calc__line--typeof').removeClass("calc__line--hide");
			$('.calc__label--typeof').removeClass("calc__label--hide");
			$('.calc__picture--show').removeClass("calc__picture--show");
			$('#calc_image_1').addClass("calc__picture--show");
			// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
			//$('.calc__slider2').addClass("calc__slider2--hide");
		} else {
			if ( calc_item == 2 ) {
				$('.calc__line--typeof').removeClass("calc__line--hide");
				$('.calc__label--typeof').removeClass("calc__label--hide");
				$('.calc__slider2').removeClass("calc__slider2--hide");
				$('.calc__picture--show').removeClass("calc__picture--show");
				$('#calc_image_2').addClass("calc__picture--show");
				// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
				// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3').addClass("calc__label--hide");
				$('#calc_material_4').prop("checked", true);
			} else {
				if ( calc_item == 3 ) {
					$('.calc__line--typeof').removeClass("calc__line--hide");
					$('.calc__label--typeof').removeClass("calc__label--hide");
					$('.calc__slider2').removeClass("calc__slider2--hide");
					$('.calc__picture--show').removeClass("calc__picture--show");
					$('#calc_image_3').addClass("calc__picture--show");
					// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
				} else {
					$('.calc__line--typeof').addClass("calc__line--hide");
					$('.calc__label--typeof').addClass("calc__label--hide");
					$('.calc__slider2').removeClass("calc__slider2--hide");
					$('.calc__picture--show').removeClass("calc__picture--show");
					$('#calc_image_4').addClass("calc__picture--show");
					// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
					// $('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3').addClass("calc__label--hide");
					$('#calc_material_4').prop("checked", true);
				}
			}
		}

	});


	$("#polzunok1").slider({
		animate: "slow",
		orientation: "vertical",
		range: "min",
		value: 100,
		step: 1,
		min: 10,
		max: 457,
		slide : function(event, ui) {
			$("#result-polzunok1").val(ui.value);
			calculation();
		}
	});
	$( "#result-polzunok1" ).val($( "#polzunok1" ).slider( "value" ));
	
	$('#result-polzunok1').on("change", function(){
		let sliderInput = $(this).val();
		$( "#polzunok1" ).slider( "value", sliderInput );
		calculation();
	});

	$("#polzunok2").slider({
		animate: "slow",
		range: "min",
		value: 100,
		step: 1,
		min: 10,
		max: 302,
		slide : function(event, ui) {
			$("#result-polzunok2").val(ui.value);
			calculation();
		}
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


		var calc_sz1 = Math.floor(457 / +calc_height);
		var calc_sz2 = Math.floor(302 / +calc_width);
		var calc_sz3 = Math.floor(302 / +calc_height);
		var calc_sz4 = Math.floor(457 / +calc_width);

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
			var calc_x1 = 1.12;
		}

		var calc_sale = 0.85;

		if ( +calc_shtuk_fin >= 0 ) {
			var calc_base = 0;
			var calc_set = 300;
			var calc_rate = 20;
		}
		if ( +calc_shtuk_fin >= 5 ) {
			var calc_base = 5;
			var calc_set = 200;
			var calc_rate = 10;
		}
		if ( +calc_shtuk_fin >= 10 ) {
			var calc_base = 10;
			var calc_set = 150;
			var calc_rate = 2.9;
		}
		if ( +calc_shtuk_fin >= 20 ) {
			var calc_base = 20;
			var calc_set = 121;
			var calc_rate = 0.829;
		}
		if ( +calc_shtuk_fin >= 40 ) {
			var calc_base = 40;
			var calc_set = 104.5;
			var calc_rate = 0.325;
		}
		if ( +calc_shtuk_fin >= 60 ) {
			var calc_base = 60;
			var calc_set = 98;
			var calc_rate = 0.325;
		}
		if ( +calc_shtuk_fin >= 80 ) {
			var calc_base = 80;
			var calc_set = 93.6;
			var calc_rate = 0.219;
		}
		if ( +calc_shtuk_fin >= 100 ) {
			var calc_base = 100;
			var calc_set = 70;
			var calc_rate = 0.0225;
		}
		if ( +calc_shtuk_fin >= 260 ) {
			var calc_base = 260;
			var calc_set = 66.5;
			var calc_rate = 0.0095;
		}
		if ( +calc_shtuk_fin >= 500 ) {
			var calc_base = 500;
			var calc_set = 58.8;
			var calc_rate = 0.0134;
		}
		if ( +calc_shtuk_fin >= 1000 ) {
			var calc_base = 1000;
			var calc_set = 47.1;
			var calc_rate = 0.0015;
		}
		if ( +calc_shtuk_fin >= 1700 ) {
			var calc_base = 1700;
			var calc_set = 46.1;
			var calc_rate = 0.00003;
		}

		console.log("calc_base " + calc_base);
		console.log("calc_set " + calc_set);
		console.log("calc_rate " + calc_rate);

		var calc_preresult = +calc_shtuk_fin * ( +calc_set - ( +calc_rate * ( +calc_shtuk_fin - +calc_base ) ) );

		var calc_result = ( +calc_preresult * +calc_x1 * +calc_x2 * +calc_x3 * +calc_sale) + +calc_vid_sum;

		if ( calc_result <= 3000 ) {
			$('.calc__alert').addClass("calc__alert--show");
			$('.calc__price').removeClass("calc__price--margin");
		} else {
			$('.calc__alert').removeClass("calc__alert--show");
			$('.calc__price').addClass("calc__price--margin");
		}

		// (calc_base * calc_set) + ( (+calc_shtuk_fin - calc_base) * (calc_set - (calc_rate * (+calc_shtuk_fin - calc_base)))



		

		// if ( +calc_shtuk_fin < 100 ) {
		// 	var calc_base = 5880;
		// 	var calc_rate = 0.272;
		// 	var calc_one =  ( 98 - (+calc_shtuk_fin - 60) * +calc_rate);
		// } else {
		// 	if ( +calc_shtuk_fin < 260 ) {
		// 		var calc_base = 7000;
		// 		var calc_rate = 0.0225;
		// 		var calc_one =  ( 70 - (+calc_shtuk_fin - 100) * +calc_rate);
		// 	} else {
		// 		if ( +calc_shtuk_fin < 500 ) {
		// 			var calc_base = 7000;
		// 			var calc_rate = 0.0095;
		// 			var calc_one =  ( 66.5 - (+calc_shtuk_fin - 100) * +calc_rate);
		// 		} else {
		// 			if ( +calc_shtuk_fin < 1000 ) {
		// 				var calc_base = 7000;
		// 				var calc_rate = 0.0134;
		// 				var calc_one =  ( 61 - (+calc_shtuk_fin - 100) * +calc_rate);
		// 			} else {
		// 				if ( +calc_shtuk_fin < 1700 ) {
		// 					var calc_base = 7000;
		// 					var calc_rate = 0.0011;
		// 					var calc_one =  ( 46 - (+calc_shtuk_fin - 100) * +calc_rate);
		// 				} else {
		// 					var calc_base = 7000;
		// 					var calc_rate = 0.00003;
		// 					var calc_one =  ( 44.5 - (+calc_shtuk_fin - 100) * +calc_rate);
		// 				}
		// 			}
		// 		}
				
		// 	}
		// }




		//var calc_result = ((+calc_base + ( +calc_shtuk_fin - 100 ) * +calc_one) * +calc_x1 * +calc_x2 * +calc_x3 * +calc_sale) + +calc_vid_sum;
		//console.log(calc_one);

		$('#calc_itog').val( calc_result.toFixed(0) + " руб" );

		var calc_price = calc_result / calc_shtuk;
		$('.calc__price').text( calc_price.toFixed(1) + " руб/шт" );








		// if ( calc_form == 1 ) {
		// 	var calc_size = +$( "#result-polzunok1" ).val();
		// 	console.log(calc_size);
		// } else {
		// 	var calc_size = (+$( "#result-polzunok1" ).val() + +$( "#result-polzunok2" ).val()) / 2;
		// 	console.log(calc_size);
		// }

		// if ( calc_form == 3 ) {
		// 	var calc_k3 = 1.2;
		// } else {
		// 	var calc_k3 = 1;
		// }

		// if ( calc_material == 4 ) {
		// 	var calc_k1 = 1;
		// 	var calc_k4 = 0.45;

		// 	if ( calc_shtuk < 1000 ) { var calc_k5 = 0.82 } else {
		// 		if ( calc_shtuk < 2000 ) { var calc_k5 = 0.72 } else {
		// 			if ( calc_shtuk < 3000 ) { var calc_k5 = 0.62 } else {
		// 				if ( calc_shtuk < 4000 ) { var calc_k5 = 0.6 } else {
		// 					if ( calc_shtuk < 5000 ) { var calc_k5 = 0.58 } else {
		// 						if ( calc_shtuk < 6000 ) { var calc_k5 = 0.54 } else {
		// 							if ( calc_shtuk < 7000 ) { var calc_k5 = 0.5 } else {
		// 								if ( calc_shtuk < 8000 ) { var calc_k5 = 0.48 } else {
		// 									if ( calc_shtuk < 9000 ) { var calc_k5 = 0.46 } else {
		// 										if ( calc_shtuk < 10000 ) { var calc_k5 = 0.45 } else {
		// 											if ( calc_shtuk < 11000 ) { var calc_k5 = 0.44 } else {
		// 												if ( calc_shtuk < 13000 ) { var calc_k5 = 0.43 } else {
		// 													if ( calc_shtuk < 15000 ) { var calc_k5 = 0.42 } else {
		// 														if ( calc_shtuk < 20000 ) { var calc_k5 = 0.41 } else {
		// 															var calc_k5 = 0.40;
		// 														}
		// 													}
		// 												}
		// 											}
		// 										}
		// 									}
		// 								}
		// 							}
		// 						}
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}

		// } else {
		// 	var calc_k1 = 1.4;
		// 	var calc_k4 = 1;
		// 	var calc_k5 = 1;
		// }
		
		// if ( calc_lamination == 1 ) {
		// 	var calc_k2 = 1;
		// } else {
		// 	if ( calc_form == 4 ) {
		// 		var calc_k2 = 1.35;
		// 	} else {
		// 		var calc_k2 = 1.2;
		// 	}
			
			
		// }

 
		// var calc_result = ((( 4 + ( 0.039 * +calc_size ) ) * +calc_size * +calc_shtuk / 100 ) * +calc_k1 * +calc_k2 * +calc_k3 * +calc_k4 * +calc_k5 ) + +calc_vid_sum;

		// $('#calc_itog').val( calc_result.toFixed(0) + " руб" );

		// var calc_price = calc_result / calc_shtuk;

		// $('.calc__price').text( calc_price.toFixed(1) + " руб/шт" );

	};


});