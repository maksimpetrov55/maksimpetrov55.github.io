$(document).ready(function() {

	var calc_glass_name = 0;
	var calc_glass_name = 0;
	var calc_glass_value = 0;
	var calc_glass_type = 0;
	var calc_glass_thin = 2;


	$('.calc__select').click(function(){
		$(this).toggleClass("calc__select--open");
		$(".calc__list").toggleClass("calc__list--open");
	});

	$('.calc__li').click(function(e){
		var calc_select_text = $(this).text();
		$('.calc__current').text( calc_select_text );
	});


	$('#calc_checkbox_1').click(function(e){
		if ( $(this).is(':checked') ) {
			$('#calc_section_1').removeClass("calc__section--hide");
		} else {
			$('#calc_section_1').addClass("calc__section--hide");
			$('input[name=calc_obrabotka]').prop("checked", false);
		}
	});

	$('#calc_checkbox_2').click(function(e){
		if ( $(this).is(':checked') ) {
			$('#calc_section_2').removeClass("calc__section--hide");
		} else {
			$('#calc_section_2').addClass("calc__section--hide");
			$('#calc_hole_sz').val(3);
			$('#calc_hole_amount').val(0);
		}
	});

	$('#calc_checkbox_3').click(function(e){
		if ( $(this).is(':checked') ) {
			$('#calc_section_3').removeClass("calc__section--hide");
		} else {
			$('#calc_section_3').addClass("calc__section--hide");
			$('#calc_hole_outer').val(0);
			$('#calc_hole_inner').val(0);
		}
	});

	$('#calc_checkbox_4').click(function(e){
		if ( $(this).is(':checked') ) {
			$('#calc_section_4').removeClass("calc__section--hide");
		} else {
			$('#calc_section_4').addClass("calc__section--hide");
			$('input[name=calc_facet]').prop("checked", false);
			//$('#calc_facet_width').val(10);
		}
	});
	
	// $('#calc_checkbox_5').click(function(e){
	// 	if ( $(this).is(':checked') ) {
	// 		$('#calc_section_5').removeClass("calc__section--hide");
	// 	} else {
	// 		$('#calc_section_5').addClass("calc__section--hide");
	// 	}
	// });

	$('#calc_checkbox_6').click(function(e){
		if ( $(this).is(':checked') ) {
			$('#calc_section_6').removeClass("calc__section--hide");
		} else {
			$('#calc_section_6').addClass("calc__section--hide");
		}
	});




	$('#calc_hole_sz').on("input", function(){
		setTimeout(() => {
			if( $(this).val() < 3 ) {
				$(this).val( 3 );
			}
			if( $(this).val() > 90 ) {
				$(this).val( 90 );
			}
		}, 300);
	});

	$('#calc_facet_width').on("input", function(){
		setTimeout(() => {
			if( $(this).val() < 10 ) {
				$(this).val( 10 );
			}
			if( $(this).val() > 35 ) {
				$(this).val( 35 );
			}
		}, 300);
	});

	$('#calc_glass_list').empty();
	let glassList = document.querySelector('#calc_glass_list');

	for ( let i = 0; i < glassArr.length; i++ ) {
		let glassDiv = document.createElement('div');
		glassDiv.innerHTML = glassArr[i].name;
		glassDiv.className = "calc__li";
		glassList.appendChild( glassDiv );
	}

    $('.calc__list').on("click",".calc__li",function(e){
        // setTimeout(() => {
        //     $('.calc__close').removeClass("calc__close--show"); 
        // }, 100);
        $(this).parent(".calc__list").prev(".calc__current").text( $(this).text() );
		// $(this).parent(".calc__list").prev().prev(".calc__street").val( $(this).text() );
		calc_glass_name = $(this).text();

	});
	
	$("#calc_glass_list").on("click",".calc__li",function(e){ 
		calc_glass_value = glassArr.find(n1 => n1.name === $(this).text() ).value; 
		calc_glass_type = glassArr.find(g1 => g1.name === $(this).text() ).type; 
		calc_glass_thin = glassArr.find(t1 => t1.name === $(this).text() ).thin; 
	});

	$('input').on("input", function(){
		calculation();
	});
	$(".calc__list").on("click", ".calc__li", function(){
		calculation();
	});


	function calculation() {

		console.clear();
		console.log( "––––––---------------------------------------------" );
		console.log( "calc_glass_name: " + calc_glass_name);
		console.log( "calc_glass_value: " + calc_glass_value);
		console.log( "calc_glass_thin: " + calc_glass_thin);

		var calc_form = 0;
		calc_form = $('input[name=calc_form]:checked').val();
		console.log( "calc_form: " + calc_form);

		// if ( $('#calc_zakalka').is(':checked') ) {
		// 	var calc_zakalka = 1;
		// } else {
		// 	var calc_zakalka = 0;
		// }

		//$('#calc_zakalka').prop("checked", false);

		//console.log( "calc_zakalka: " + calc_zakalka);

		if ( (calc_glass_thin == "2") || (calc_glass_thin == "15") || (calc_glass_thin == "19") || (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
			$('.calc__zakalka').addClass("calc__zakalka--hide");
			$('#calc_zakalka').prop("checked", false);
		} else {
			if	(
				( calc_glass_type == "Зеркало серебро") ||
				( calc_glass_type == "Зеркало бронза") ||
				( calc_glass_type == "Зеркало графит") ||
				( calc_glass_type == "Зеркало золото") ||
				( calc_glass_type == "Зеркало осветленное") ||
				( calc_glass_type == "Зеркало состаренное") 
				) {
					$('.calc__zakalka').addClass("calc__zakalka--hide");
					$('#calc_zakalka').prop("checked", false);
				} else {
					$('.calc__zakalka').removeClass("calc__zakalka--hide");
				}
		}



		// if ( calc_glass_thin == "2" ) {
		// 	$('#calc_label_1, #calc_label_2, #calc_label_3, #calc_label_4, #calc_label_5, #calc_label_6').addClass("calc__label--hide");
		// } else {
		// 	$('#calc_label_1, #calc_label_2, #calc_label_3, #calc_label_4, #calc_label_5, #calc_label_6').removeClass("calc__label--hide");
		// }

		// if ( (calc_glass_thin == "0") || (calc_glass_thin == "2") ) {
		// 	$('.calc__label--obrabotka').addClass("calc__label--hide");
		// } else {
		// 	$('.calc__label--obrabotka').removeClass("calc__label--hide");
		// }

		// if ( (calc_glass_thin == "15") || (calc_glass_thin == "19") || (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
		// 	$('#calc_label_5').addClass("calc__label--hide");
		// 	$('#calc_label_6').addClass("calc__label--hide");
		// } else {
		// 	$('#calc_label_5').removeClass("calc__label--hide");
		// 	$('#calc_label_6').removeClass("calc__label--hide");
		// }

		var calc_width = $('#calc_width').val();
		var calc_height = $('#calc_height').val();

		if ( calc_form != 1 ) {
			calc_width = +$('#calc_width').val() + 100;
			calc_height = +$('#calc_height').val() + 100;
		}

		console.log("calc_width: " + calc_width);
		console.log("calc_height: " + calc_height);

		var calc_square = (+calc_width * +calc_height) / 1000000;

		console.log( "calc_square: " + calc_square);

		
		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		var calc_obrabotka = 0;


		if ( calc_form <= 6 ) {
			if ( $('input[name=calc_obrabotka]:checked').val() == 2 ) {
				calc_obrabotka = obrabotka_3_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			}
			if ( $('input[name=calc_obrabotka]:checked').val() == 3 ) {
				calc_obrabotka = obrabotka_1_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			}
		} else {
			if ( $('input[name=calc_obrabotka]:checked').val() == 2 ) {
				calc_obrabotka = obrabotka_4_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			}
			if ( $('input[name=calc_obrabotka]:checked').val() == 3 ) {
				calc_obrabotka = obrabotka_2_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			}
		}
		


		// if ( $('input[name=calc_obrabotka]:checked').val() == 1 ) {
		// 	calc_obrabotka = obrabotka_1_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
		// }
		// if ( $('input[name=calc_obrabotka]:checked').val() == 2 ) {
		// 	calc_obrabotka = obrabotka_2_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
		// }
		// if ( $('input[name=calc_obrabotka]:checked').val() == 3 ) {
		// 	calc_obrabotka = obrabotka_3_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
		// }
		// if ( $('input[name=calc_obrabotka]:checked').val() == 4 ) {
		// 	calc_obrabotka = obrabotka_4_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
		// }

		// if ( $('input[name=calc_obrabotka]:checked').val() == 5 ) {
		// 	calc_obrabotka = obrabotka_5_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			
		// }
		// if ( $('input[name=calc_obrabotka]:checked').val() == 6 ) {
		// 	calc_obrabotka = obrabotka_6_Arr.find(o1 => o1.thin == calc_glass_thin ).value;
			
		// }

		if ( $('#calc_zakalka').is(':checked') ) {
			var calc_zakalka = zakalka_Arr.find(z1 => z1.thin == calc_glass_thin ).value;
		} else {
			var calc_zakalka = 0
		}

		var calc_obrabotka_itog = calc_square * calc_obrabotka * 4;

		console.log("calc_obrabotka: " + calc_obrabotka);
		console.log("calc_obrabotka_itog: " + calc_obrabotka_itog);

		console.log("calc_zakalka: " + calc_zakalka);


		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		var calc_hole_sz = $('#calc_hole_sz').val();
		var calc_hole_amount = $('#calc_hole_amount').val();
		var calc_outer_amount = $('#calc_hole_outer').val();
		var calc_inner_amount = $('#calc_hole_inner').val();


		if ( calc_hole_sz > 0 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_hole_price = hole_1_Arr.find(h1 => h1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_hole_price = hole_1_Arr.find(h1 => h1.thin == calc_glass_thin ).value;
			}
		}
		if ( calc_hole_sz > 12 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_hole_price = hole_2_Arr.find(h1 => h1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_hole_price = hole_2_Arr.find(h1 => h1.thin == calc_glass_thin ).value;
			}
		}
		if ( calc_hole_sz > 30 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_hole_price = hole_3_Arr.find(h1 => h1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_hole_price = hole_3_Arr.find(h1 => h1.thin == calc_glass_thin ).value;
			}
			
			
		}
		if ( calc_hole_sz > 70 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_hole_price = hole_4_Arr.find(h1 => h1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_hole_price = hole_4_Arr.find(h1 => h1.thin == calc_glass_thin ).value;
			}
		}


		console.log("calc_hole_price: " + calc_hole_price);


		if ( calc_outer_amount > 0 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_outer_price = calc_outer_Arr.find(x1 => x1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_outer_price = calc_outer_Arr.find(x1 => x1.thin == calc_glass_thin ).value;
			}
		} else {
			var calc_outer_price = 0;
		}

		if ( calc_inner_amount > 0 ) {
			if ( (calc_glass_thin == "4+4") || (calc_glass_thin == "5+5") || (calc_glass_thin == "6+6") ) {
				var calc_inner_price = calc_inner_Arr.find(v1 => v1.thin == calc_glass_thin ).value * 2;
			} else {
				var calc_inner_price = calc_inner_Arr.find(v1 => v1.thin == calc_glass_thin ).value;
			}
		} else {
			var calc_inner_price = 0;
		}

		console.log("calc_outer_price: " + calc_outer_price);
		console.log("calc_outer_summ: " + ( calc_outer_amount * calc_outer_price ));
		
		console.log("calc_inner_price: " + calc_inner_price);
		console.log("calc_inner_summ: " + ( calc_inner_amount * calc_inner_price ));
		


		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		if ( calc_form == 0 || calc_form == 7 || calc_form == 8 || calc_form == 15 ) {
			$('#calc_facet_wrap').addClass("calc__section--hide");
			$('input[name=calc_section_4]').prop("checked", false);
			$('input[name=calc_facet]').prop("checked", false);
		} else {
			$('#calc_facet_wrap').removeClass("calc__section--hide");
		}


		var calc_facet = $('input[name=calc_facet]:checked').val();
		//var calc_facet_width = $('#calc_facet_width').val();
		var calc_facet_price = 0;

		if ( calc_form <= 6 ){
			if ( calc_facet == 1 ) { calc_facet_price = 260 }
			if ( calc_facet == 2 ) { calc_facet_price = 320 }
			if ( calc_facet == 3 ) { calc_facet_price = 440 }
			if ( calc_facet == 4 ) { calc_facet_price = 600 }
		} else {
			if ( calc_facet == 1 ) { calc_facet_price = 660  }
			if ( calc_facet == 2 ) { calc_facet_price = 840  }
			if ( calc_facet == 3 ) { calc_facet_price = 1120 }
			if ( calc_facet == 4 ) { calc_facet_price = 1400 }
		}

		// if ( calc_facet == 1 ) {
		// 	if ( calc_facet_width > 0 )  { calc_facet_price = 260 }
		// 	if ( calc_facet_width > 15 ) { calc_facet_price = 320 }
		// 	if ( calc_facet_width > 20 ) { calc_facet_price = 440 }
		// 	if ( calc_facet_width > 30 ) { calc_facet_price = 600 }
		// }
		// if ( calc_facet == 2 ) {
		// 	if ( calc_facet_width > 0 )  { calc_facet_price = 660 }
		// 	if ( calc_facet_width > 15 ) { calc_facet_price = 840 }
		// 	if ( calc_facet_width > 20 ) { calc_facet_price = 1120 }
		// 	if ( calc_facet_width > 30 ) { calc_facet_price = 1400 }
		// }
		
		console.log("calc_facet_price: " + calc_facet_price);



		if ( calc_square >= 4 ) {
			var calc_facet_itog = calc_facet_price * 1.6 * calc_square * 4;
		} else {
			if ( (calc_width >= 3000) || (calc_height > 3000) ) {
				var calc_facet_itog = calc_facet_price * 1.4 * calc_square * 4;
			} else {
				if ( (calc_width >= 2500) || (calc_height > 2500) ) {
					var calc_facet_itog = calc_facet_price * 1.3 * calc_square * 4;
				} else {
					var calc_facet_itog = calc_facet_price * calc_square * 4;
				}
			}
		}

		if ( $('#calc_checkbox_4').is(':checked') ) {
			if ( calc_facet_itog < 400 ) {
				calc_facet_itog = 400;
			}
		}

		console.log("calc_facet_itog: " + calc_facet_itog);


		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		if	(
			( calc_glass_type == "Зеркало серебро") ||
			( calc_glass_type == "Зеркало бронза") ||
			( calc_glass_type == "Зеркало графит") ||
			( calc_glass_type == "Зеркало золото") ||
			( calc_glass_type == "Зеркало осветленное") ||
			( calc_glass_type == "Зеркало состаренное") 
			) 
		{
			$('#calc_plenka_wrap').removeClass("calc__section--hide");
		} else {
			$('#calc_plenka_wrap').addClass("calc__section--hide");
			$('input[name=calc_section_5]').prop("checked", false);
		}


		//var calc_plenka = $('#calc_plenka').val();

		if ( $('#calc_checkbox_5').is(':checked') ) {
			var calc_plenka_itog = calc_square * 450;
		} else {
			var calc_plenka_itog = 0;
		}
		

		console.log("calc_plenka_itog: "+ calc_plenka_itog);


		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		if	(
			( calc_glass_type == "Зеркало серебро") ||
			( calc_glass_type == "Зеркало бронза") ||
			( calc_glass_type == "Зеркало графит") ||
			( calc_glass_type == "Зеркало золото") ||
			( calc_glass_type == "Зеркало осветленное") ||
			( calc_glass_type == "Зеркало состаренное") 
			) 
		{
			$('#calc_kraska_wrap').addClass("calc__section--hide");
			$('input[name=calc_section_6]').prop("checked", false);
		} else {
			$('#calc_kraska_wrap').removeClass("calc__section--hide");
		}

		if ( $('#calc_checkbox_6').is(':checked') ) {
			var calc_kraska_itog = calc_square * 4250;
			if ( calc_kraska_itog < 1000 ) {
				calc_kraska_itog = 1000;
			}
		} else {
			var calc_kraska_itog = 0;
		}

		console.log("calc_kraska_itog: "+ calc_kraska_itog);


		// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––


		var calc_quantity = $('#calc_quantity').val();

		var calc_itog = +calc_quantity * +calc_square * ( +calc_glass_value + +calc_zakalka ) + calc_obrabotka_itog + ( +calc_hole_amount * +calc_hole_price ) + (+calc_outer_amount * +calc_outer_price) + (+calc_inner_amount * +calc_inner_price) + +calc_plenka_itog + +calc_facet_itog + +calc_kraska_itog;
		
		if ( calc_itog < 500 ) {
			calc_itog = 500;
		}
		
		$('#calc_itog').text( calc_itog.toFixed(2) + " руб." );

	}



});