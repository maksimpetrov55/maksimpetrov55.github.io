$(document).ready(function(){
	
	$(".tech").click();

	$(".calc-btn, .tech").click(function(){
		$(".blackcat").css({display: "block"});
		$(".calc-wrap").css({display: "block"});
	});

	$(".calc__close").click(function(){
		$(".calc-wrap, .blackcat").fadeOut(300);
	});

	$("#choice__flat").click(function(){
		$(".calc__choice__block--active").removeClass("calc__choice__block--active");
		$(this).addClass("calc__choice__block--active");
		$(".calc__left__flat, .calc__left__house, .calc__left__office").css({display: "none"});
		$(".calc__left__flat").css({display: "block"});
	});

	$("#choice__house").click(function(){
		$(".calc__choice__block--active").removeClass("calc__choice__block--active");
		$(this).addClass("calc__choice__block--active");
		$(".calc__left__flat, .calc__left__house, .calc__left__office").css({display: "none"});
		$(".calc__left__house").css({display: "block"});
	});

	$("#choice__office").click(function(){
		$(".calc__choice__block--active").removeClass("calc__choice__block--active");
		$(this).addClass("calc__choice__block--active");
		$(".calc__left__flat, .calc__left__house, .calc__left__office").css({display: "none"});
		$(".calc__left__office").css({display: "block"});
	});

	$(".g-btn").click(function(){
		$(".g-instruction__list").css({display: "none"});
		$(".g-results, .g-services, .g-materials").css({display: "block"});
	});



	$(".g-btn__flat").click(function(){
		calculate_flat();
	});
	$(".g-btn__house").click(function(){
		calculate_house();
	});
	$(".g-btn__office").click(function(){
		calculate_office();
	});


	function calculate_flat() {

		var f1 = $('input[name=flat_material]:checked').val();

		var f2 = $("#flat_kvadrati").val();
		var f3 = $("#flat_vikluchateli").val();
		var f4 = $("#flat_rozetki220").val();
		var f5 = $("#flat_rozetkitv").val();
		var f6 = $("#flat_rozetkiphone").val();
		var f7 = $("#flat_lustra").val();
		var f8 = $("#flat_tochsvet").val();

		var f9 = $('input[name=flat_shitok]:checked').val();
		var f10 = $('input[name="flat_zvonok"]:checked').val();
		var f11 = $('input[name="flat_domofon"]:checked').val();

		if ( f2 < 50 ) {
			var ff2 = 0.03;
		} else {
			if ( f2 < 70 ) {
				var ff2 = 0.05;
			} else {
				if ( f2 < 100 ) {
					var ff2 = 0.07;
				} else {
					if ( f2 >= 100 ) {
						var ff2 = 0.1;
					}
				}
			}
		}

		if ( f1 == "flat_kirpich" ) {
			var ff3 = 910;
			var ff4 = 910;
			var ff5 = 910;
			var ff6 = 910;
		} else {
			if ( f1 == "flat_beton" ) {
				var ff3 = 910;
				var ff4 = 910;
				var ff5 = 910;
				var ff6 = 910;
			} else {
				if ( f1 == "flat_bloki" ) {
					var ff3 = 650;
					var ff4 = 650;
					var ff5 = 650;
					var ff6 = 650;
				}
			}
		}

		var ff7 = 650;
		var ff8 = 325;

		if ( f9 == "flat_shitok_inside" ) {
			var ff9 = 9100;
			var fff9 = 150;
		} else {
			if ( f9 == "flat_shitok_podezd" ) {
				var ff9 = 3900;
				var fff9 = 100;
			}
		}
		
		if ( f10 == "flat_zvonok" ) {
			var ff10 = 325;
		} else {
			var ff10 = 0;
		}

		if ( f11 == "flat_domofon" ) {
			var ff11 = 650;
		} else {
			var ff11 = 0;
		}

		if ( f3 > 0 ) { var fff3 = 100; } else { var fff3 = 0; }
		if ( f4 > 0 ) { var fff4 = 230; } else { var fff4 = 0; }
		if ( f5 > 0 ) { var fff5 = 45; } else { var fff5 = 0; }
		if ( f6 > 0 ) { var fff6 = 20; } else { var fff6 = 0; }
		if ( f7 > 0 ) { var fff7 = 10; } else { var fff7 = 0; }
		if ( f8 > 0 ) { var fff8 = 20; } else { var fff8 = 0; }

		var flat_itog_work = ( +f3 * +ff3 ) + ( +f4 * +ff4 ) + ( +f5 * +ff5 ) + ( +f6 * +ff6) + ( +f7 * +ff7 ) + ( +f8 * +ff8 ) + +ff9 + +ff10 + +ff11;
		var flat_itog_material = ( +f2 * +fff3 ) + ( +f2 * +fff4 ) + ( +f2 * +fff5 ) + ( +f2 * +fff6 ) + ( +f2 * +fff7 ) + ( +f2 * +fff8 ) + ( +f2 * +fff9 );

		var flat_result_1 = +flat_itog_work * +ff2;
		var flat_result_2 = +flat_itog_work * ( 1 - +ff2 );
		var flat_result_3 = +flat_itog_material;
		var flat_result_4 = (+flat_itog_work * ( 1 - +ff2 )) + +flat_itog_material;

		$(".g-results__skidka").html( flat_result_1.toFixed(2) );
		$(".g-results__raboti").html( flat_result_2.toFixed(2) );
		$(".g-results__materials").html( flat_result_3.toFixed(2) );
		$(".g-results__itogo").html( flat_result_4.toFixed(2) );


		$("#g-form_var1" ).val( f1 );			// Тип
		$("#g-form_var2" ).val( f2 );			// Квадратура
		$("#g-form_var3" ).val( f3 );			// Выключатели
		$("#g-form_var4" ).val( f4 );			// Розетки (220 V)
		$("#g-form_var5" ).val( f5 );			// Розетки ТВ
		$("#g-form_var6" ).val( f6 );			// Розетки телефон, интернет
		$("#g-form_var7" ).val( f7 );			// Люстра, светильник, бра
		$("#g-form_var8" ).val( f8 );			// Точечный свет
		$("#g-form_var9" ).val( f9 );			// Щиток
		$("#g-form_var10").val( f10 );			// Звонок
		$("#g-form_var11").val( f11 );			// Домофон
		$("#g-form_var12").val( "" );			// Заземление
		$("#g-form_var13").val( flat_result_2.toFixed(2) );			// Стоимость работ со скидкой
		$("#g-form_var14").val( flat_result_3.toFixed(2) );			// Стоимость материалов

	}

	function calculate_house() {

		var h1 = $('input[name=house_material]:checked').val();

		var h2 = $("#house_kvadrati").val();
		var h3 = $("#house_vikluchateli").val();
		var h4 = $("#house_rozetki220").val();
		var h5 = $("#house_rozetkitv").val();
		var h6 = $("#house_rozetkiphone").val();
		var h7 = $("#house_lustra").val();
		var h8 = $("#house_tochsvet").val();

		var h9 = $('input[name=house_shitok]:checked').val();

		var h10 = $('input[name="house_zvonok"]:checked').val();

		var h11 = $('input[name="house_zazemlenie"]:checked').val();

		if ( h2 < 50 ) {
			var hh2 = 0.03;
		} else {
			if ( h2 < 70 ) {
				var hh2 = 0.05;
			} else {
				if ( h2 < 100 ) {
					var hh2 = 0.07;
				} else {
					if ( h2 >= 100 ) {
						var hh2 = 0.1;
					}
				}
			}
		}

		if ( h1 == "house_derevo" ) {
			var hh3 = 910;
			var hh4 = 910;
			var hh5 = 910;
			var hh6 = 910;
		} else {
			if ( h1 == "house_karkas" ) {
				var hh3 = 650;
				var hh4 = 650;
				var hh5 = 650;
				var hh6 = 650;
			} else {
				if ( h1 == "house_bloki" ) {
					var hh3 = 650;
					var hh4 = 650;
					var hh5 = 650;
					var hh6 = 650;
				} else {
					if ( h1 == "house_kirpich" ) {
						var hh3 = 910;
						var hh4 = 910;
						var hh5 = 910;
						var hh6 = 910;
					}
				}
			}
		}

		var hh7 = 650;
		var hh8 = 325;

		if ( h9 == "house_shitok_inside" ) {
			var hh9 = 9100;
			var hhh9 = 150;
		} else {
			if ( h9 == "house_shitok_ulitsa" ) {
				var hh9 = 5200;
				var hhh9 = 150;
			}
		}

		if ( h10 == "house_zvonok" ) {
			var hh10 = 325;
		} else {
			var hh10 = 0;
		}

		if ( h11 == "house_zazemlenie" ) {
			var hh11 = 10400;
			var hhh11 = 100;
		} else {
			var hh11 = 0;
			var hhh11 = 0;
		}

		if ( h3 > 0 ) { var hhh3 = 100;} else { var hhh3 = 0; }
		if ( h4 > 0 ) { var hhh4 = 230;} else { var hhh4 = 0; }
		if ( h5 > 0 ) { var hhh5 = 45; } else { var hhh5 = 0; }
		if ( h6 > 0 ) { var hhh6 = 20; } else { var hhh6 = 0; }
		if ( h7 > 0 ) { var hhh7 = 10; } else { var hhh7 = 0; }
		if ( h8 > 0 ) { var hhh8 = 20; } else { var hhh8 = 0; }

		var house_itog_work = ( +h3 * +hh3 ) + ( +h4 * +hh4 ) + ( +h5 * +hh5 ) + ( +h6 * +hh6) + ( +h7 * +hh7 ) + ( +h8 * +hh8 ) + +hh9 + +hh10 + +hh11;
		var house_itog_material = ( +h2 * +hhh3 ) + ( +h2 * +hhh4 ) + ( +h2 * +hhh5 ) + ( +h2 * +hhh6 ) + ( +h2 * +hhh7 ) + ( +h2 * +hhh8 ) + ( +h2 * +hhh9 ) + ( +h2 * +hhh11 );

		var house_result_1 = +house_itog_work * +hh2;
		var house_result_2 = +house_itog_work * ( 1 - +hh2 );
		var house_result_3 = +house_itog_material;
		var house_result_4 = (+house_itog_work * ( 1 - +hh2 )) + +house_itog_material;

		$(".g-results__skidka").html( house_result_1.toFixed(2) );
		$(".g-results__raboti").html( house_result_2.toFixed(2) );
		$(".g-results__materials").html( house_result_3.toFixed(2) );
		$(".g-results__itogo").html( house_result_4.toFixed(2) );


		$("#g-form_var1" ).val( h1 );			// Тип
		$("#g-form_var2" ).val( h2 );			// Квадратура
		$("#g-form_var3" ).val( h3 );			// Выключатели
		$("#g-form_var4" ).val( h4 );			// Розетки (220 V)
		$("#g-form_var5" ).val( h5 );			// Розетки ТВ
		$("#g-form_var6" ).val( h6 );			// Розетки телефон, интернет
		$("#g-form_var7" ).val( h7 );			// Люстра, светильник, бра
		$("#g-form_var8" ).val( h8 );			// Точечный свет
		$("#g-form_var9" ).val( h9 );			// Щиток
		$("#g-form_var10").val( h10 );			// Звонок
		$("#g-form_var11").val( "" );			// Домофон
		$("#g-form_var12").val( h11 );			// Заземление
		$("#g-form_var13").val( house_result_2.toFixed(2) );			// Стоимость работ со скидкой
		$("#g-form_var14").val( house_result_3.toFixed(2) );			// Стоимость материалов

	}

	function calculate_office() {

		var o1 = $('input[name=office_material]:checked').val();

		var o2 = $("#office_kvadrati").val();
		var o3 = $("#office_vikluchateli").val();
		var o4 = $("#office_rozetki220").val();
		var o5 = $("#office_rozetkitv").val();
		var o6 = $("#office_rozetkiphone").val();
		var o7 = $("#office_lustra").val();
		var o8 = $("#office_tochsvet").val();

		var o9 = $('input[name=office_shitok]:checked').val();

		var o10 = $('input[name="office_zvonok"]:checked').val();

		if ( o2 < 50 ) {
			var oo2 = 0.03;
		} else {
			if ( o2 < 70 ) {
				var oo2 = 0.05;
			} else {
				if ( o2 < 100 ) {
					var oo2 = 0.07;
				} else {
					if ( o2 >= 100 ) {
						var oo2 = 0.1;
					}
				}
			}
		}

		if ( o1 == "office_beton" ) {
			var oo3 = 910;
			var oo4 = 910;
			var oo5 = 910;
			var oo6 = 910;
		} else {
			if ( o1 == "office_kirpich" ) {
				var oo3 = 910;
				var oo4 = 910;
				var oo5 = 910;
				var oo6 = 910;
			} else {
				if ( o1 == "office_bloki" ) {
					var oo3 = 650;
					var oo4 = 650;
					var oo5 = 650;
					var oo6 = 650;
				} else {
					if ( o1 == "office_gipsokarton" ) {
						var oo3 = 520;
						var oo4 = 520;
						var oo5 = 520;
						var oo6 = 520;
					}
				}
			}
		}
	
		var oo7 = 650;
		var oo8 = 325;
	
		if ( o9 == "office_shitok_inside" ) {
			var oo9 = 9100;
			var ooo9 = 150;
		} else {
			if ( o9 == "office_shitok_podezd" ) {
				var oo9 = 3900;
				var ooo9 = 100;
			}
		}
	
		if ( o10 == "office_zvonok" ) {
			var oo10 = 325;
		} else {
			var oo10 = 0;
		}
	
		if ( o3 > 0 ) { var ooo3 = 100;} else { var ooo3 = 0; }
		if ( o4 > 0 ) { var ooo4 = 230;} else { var ooo4 = 0; }
		if ( o5 > 0 ) { var ooo5 = 45; } else { var ooo5 = 0; }
		if ( o6 > 0 ) { var ooo6 = 20; } else { var ooo6 = 0; }
		if ( o7 > 0 ) { var ooo7 = 10; } else { var ooo7 = 0; }
		if ( o8 > 0 ) { var ooo8 = 20; } else { var ooo8 = 0; }

		var office_itog_work = ( +o3 * +oo3 ) + ( +o4 * +oo4 ) + ( +o5 * +oo5 ) + ( +o6 * +oo6) + ( +o7 * +oo7 ) + ( +o8 * +oo8 ) + +oo9 + +oo10;
		var office_itog_material = ( +o2 * +ooo3 ) + ( +o2 * +ooo4 ) + ( +o2 * +ooo5 ) + ( +o2 * +ooo6 ) + ( +o2 * +ooo7 ) + ( +o2 * +ooo8 ) + ( +o2 * +ooo9 );

		var office_result_1 = +office_itog_work * +oo2;
		var office_result_2 = +office_itog_work * ( 1 - +oo2 );
		var office_result_3 = +office_itog_material;
		var office_result_4 = (+office_itog_work * ( 1 - +oo2 )) + +office_itog_material;

		$(".g-results__skidka").html( office_result_1.toFixed(2) );
		$(".g-results__raboti").html( office_result_2.toFixed(2) );
		$(".g-results__materials").html( office_result_3.toFixed(2) );
		$(".g-results__itogo").html( office_result_4.toFixed(2) );


		$("#g-form_var1" ).val( o1 );			// Тип
		$("#g-form_var2" ).val( o2 );			// Квадратура
		$("#g-form_var3" ).val( o3 );			// Выключатели
		$("#g-form_var4" ).val( o4 );			// Розетки (220 V)
		$("#g-form_var5" ).val( o5 );			// Розетки ТВ
		$("#g-form_var6" ).val( o6 );			// Розетки телефон, интернет
		$("#g-form_var7" ).val( o7 );			// Люстра, светильник, бра
		$("#g-form_var8" ).val( o8 );			// Точечный свет
		$("#g-form_var9" ).val( o9 );			// Щиток
		$("#g-form_var10").val( o10 );			// Звонок
		$("#g-form_var11").val( "" );			// Домофон
		$("#g-form_var12").val( "" );			// Заземление
		$("#g-form_var13").val( office_result_2.toFixed(2) );			// Стоимость работ со скидкой
		$("#g-form_var14").val( office_result_3.toFixed(2) );			// Стоимость материалов

	}



	$(".g-form__btn").click(function(){
		$("#calc_form").submit();
	});

});