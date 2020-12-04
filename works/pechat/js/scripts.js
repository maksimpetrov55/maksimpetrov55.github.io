$(document).ready(function() {

	$('.calc__border').click(function(){
		var calc_item = $(this).prev(".calc__item").val();
		//console.log(calc_item);

		if ( calc_item == 1 ) {
			$('.calc__line--typeof').removeClass("calc__line--hide");
			$('.calc__label--typeof').removeClass("calc__label--hide");
			$('.calc__picture--show').removeClass("calc__picture--show");
			$('#calc_image_1').addClass("calc__picture--show");
			$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
			$('.calc__slider2').addClass("calc__slider2--hide");
		} else {
			if ( calc_item == 2 ) {
				$('.calc__line--typeof').removeClass("calc__line--hide");
				$('.calc__label--typeof').removeClass("calc__label--hide");
				$('.calc__slider2').removeClass("calc__slider2--hide");
				$('.calc__picture--show').removeClass("calc__picture--show");
				$('#calc_image_2').addClass("calc__picture--show");
				$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3, #calc_label_material_4').removeClass("calc__label--hide");
				$('#calc_label_material_1, #calc_label_material_2, #calc_label_material_3').addClass("calc__label--hide");
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


	$("#polzunok1").slider({
		animate: "slow",
		orientation: "vertical",
		range: "min",
		value: 100,
		step: 10,
		min: 10,
		max: 450,
		slide : function(event, ui) {
			$("#result-polzunok1").val(ui.value);
			calculation();
		}
	});
	$( "#result-polzunok1" ).val($( "#polzunok1" ).slider( "value" ));
	
	$('#result-polzunok1').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok1" ).slider( "value", sliderInput );
		calculation();
	});

	$("#polzunok2").slider({
		animate: "slow",
		range: "min",
		value: 300,
		step: 10,
		min: 10,
		max: 450,
		slide : function(event, ui) {
			$("#result-polzunok2").val(ui.value);
			calculation();
		}
	});
	$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));
	
	$('#result-polzunok1').on("change", function(){
		var sliderInput = $(this).val();
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
		

		if ( calc_form == 1 ) {
			var calc_size = +$( "#result-polzunok1" ).val();
			console.log(calc_size);
		} else {
			var calc_size = (+$( "#result-polzunok1" ).val() + +$( "#result-polzunok2" ).val()) / 2;
			console.log(calc_size);
		}

		if ( calc_form == 3 ) {
			var calc_k3 = 1.2;
		} else {
			var calc_k3 = 1;
		}

		if ( calc_material == 4 ) {
			var calc_k1 = 1;
			var calc_k4 = 0.45;

			if ( calc_shtuk < 1000 ) { var calc_k5 = 0.82 } else {
				if ( calc_shtuk < 2000 ) { var calc_k5 = 0.72 } else {
					if ( calc_shtuk < 3000 ) { var calc_k5 = 0.62 } else {
						if ( calc_shtuk < 4000 ) { var calc_k5 = 0.6 } else {
							if ( calc_shtuk < 5000 ) { var calc_k5 = 0.58 } else {
								if ( calc_shtuk < 6000 ) { var calc_k5 = 0.54 } else {
									if ( calc_shtuk < 7000 ) { var calc_k5 = 0.5 } else {
										if ( calc_shtuk < 8000 ) { var calc_k5 = 0.48 } else {
											if ( calc_shtuk < 9000 ) { var calc_k5 = 0.46 } else {
												if ( calc_shtuk < 10000 ) { var calc_k5 = 0.45 } else {
													if ( calc_shtuk < 11000 ) { var calc_k5 = 0.44 } else {
														if ( calc_shtuk < 13000 ) { var calc_k5 = 0.43 } else {
															if ( calc_shtuk < 15000 ) { var calc_k5 = 0.42 } else {
																if ( calc_shtuk < 20000 ) { var calc_k5 = 0.41 } else {
																	var calc_k5 = 0.40;
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
					}
				}
			}

		} else {
			var calc_k1 = 1.4;
			var calc_k4 = 1;
			var calc_k5 = 1;
		}
		
		if ( calc_lamination == 1 ) {
			var calc_k2 = 1;
		} else {
			if ( calc_form == 4 ) {
				var calc_k2 = 1.35;
			} else {
				var calc_k2 = 1.2;
			}
			
			
		}

 
		var calc_result = ((( 4 + ( 0.039 * +calc_size ) ) * +calc_size * +calc_shtuk / 100 ) * +calc_k1 * +calc_k2 * +calc_k3 * +calc_k4 * +calc_k5 ) + +calc_vid_sum;

		$('#calc_itog').val( calc_result.toFixed(0) );

	};


});