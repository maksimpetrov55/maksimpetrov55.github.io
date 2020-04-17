$(document).ready(function() {

	$( 'body' ).append('<div class="print"><div class="print__phone">+7 (812) 981-80-50</div><div class="print__phone">+7 (904) 607-80-41</div><div class="print__title">Сметный расчет штукатурных работ от "MS-Строй"<br><span class="print__title__date" id="print_date">######</span></div><div class="print__flex print__flex__border"><div class="print__text">Тип объекта:</div><div id="print_1" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Местоположение:</div><div id="print_2" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Высота потолка:</div><div id="print_3" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Площадь штукатурки стен машинным способом гипсовой смесью:</div><div id="print_4" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Площадь штукатурки стен машинным способом ЦПС (для влажных помещений):</div><div id="print_5" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Площадь штукатурки откосов, колонн, выступов шириной менее 50 см:</div><div id="print_6" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Площадь штукатурки потолка:</div><div id="print_7" class=" print__text__out">####.#</div></div><div class="print__flex print__flex__border"><div class="print__text">Площадь монтажа штукатурной стеклотканевой сетки:</div><div id="print_8" class=" print__text__out">####.#</div></div><div class="b-sp-20"></div><div class="b-sp-20"></div><div class="print__flex"><div class="print__text--itog m-r-20">Стоимость штукатурных работ:</div><div id="print_9" class="print__text--itog print__text__out--itog">####.#</div></div><div class="b-sp-20"></div><div class="print__flex"><div class="print__text--itog m-r-20">Примерная стоимость материалов:</div><div id="print_10" class="print__text--itog print__text__out--itog">####.#</div></div><div class="b-sp-20"></div><div class="print__flex"><div class="print__text--itog m-r-20">Итого полная стоимость:</div><div id="print_11" class="print__text--itog print__text__out--itog">####.#</div></div></div>');
	$( ".print" ).css("display", "none");

	var d = new Date();
	var mth = ("0" + ((new Date()).getMonth()+1)).slice(-2)
	var day = ("0" + ((new Date()).getDate())).slice(-2)
	var strDate = day + "." + mth + "." + d.getFullYear();
	$("#print_date").text(strDate);



	// i1 = $('#input1').val( 2 );		// переменнаяя Высота потолков
	// i2 = $('#input2').val( 120 );	// переменнаяя Штукатурка стен машинным способом гипсовой смесью
	// i3 = $('#input3').val( 30 );		// переменнаяя Штукатурка стен машинным способом цементно-песчаной смесью ЦПС
	// i4 = $('#input4').val( 10 );		// переменнаяя Штукатурка откосов, колонн, выступов шириной менее 50 см
	// i5 = $('#input5').val( 20 );		// переменнаяя Штукатурка потолка
	// i6 = $('#input6').val( 20 );		// переменнаяя Монтаж штукатурной стеклотканевой сетки

	calculate();

	$('.calc__input__in').keyup(calculate);
	$('.calc__input__radio').click(calculate);


	function calculate(){	

		r1	= $('input[name=1]:checked').val();	// переменнаяя выбора объекта
		r2	= $('input[name=2]:checked').val();	// переменнаяя выбора местоположения
		r3	= $('input[name=3]:checked').val();	// переменнаяя выбора просчета материалов

		i1 = $('#input1').val();	// переменнаяя Высота потолков
		i2 = $('#input2').val();	// переменнаяя Штукатурка стен машинным способом гипсовой смесью
		i3 = $('#input3').val();	// переменнаяя Штукатурка стен машинным способом цементно-песчаной смесью ЦПС
		i4 = $('#input4').val();	// переменнаяя Штукатурка откосов, колонн, выступов шириной менее 50 см
		i5 = $('#input5').val();	// переменнаяя Штукатурка потолка
		i6 = $('#input6').val();	// переменнаяя Монтаж штукатурной стеклотканевой сетки

		if ( i2 != "" ) { 
			$('#input4').prop('disabled',false);
			$('#input5').prop('disabled',false);
			$('#input6').prop('disabled',false);
		 } else {
			$('#input4').prop('disabled',true);
			$('#input5').prop('disabled',true);
			$('#input6').prop('disabled',true);
		 }

		base = 230;

		s1 = +i2 + +i3;

		if ( r2 == 1 ) { s_min = 100 } else { s_min = 150 };

		if ( s1 < s_min ) { s2 = s_min } else { s2 = s1 };

		if ( (r2 == 2) && (s2 <= 300) ) { obl = 10 } else { obl = 0 };

		if ( i1 > 3 ) { h = 20 } else { h = 0 };

		if ( r1 == 2 ) { fond = 100 } else { fond = 0 };

		if ( s2 >= 200 ) {
			k1 = 0 
		} else {
			if (s2 >= 150 ) {
				k1 = 10
			} else {
				if (s2 >= 120) {
					k1 = 20
				} else {
					if (s2 > 100) {
						k1 = 40
					} else {
						k1 = 50
					}
				}
			}
		}
		
		k3 = 50; // ЦПС

		k4 = 350; // Откосы

		k5 = 400; // потолок

		k6 = 50; // Сетка

		if ( r2 == 1 ) { minimal = 28000 } else { minimal = 39000 };

		itog1 = +s2 * (+base + +k1) + (+i3 * +k3) + (+i4 * +k4) + (+i5 * +k5) + (+i6 * +k6) + (+s2 * +h) + (+s2 * +obl) + (+s2 * +fond);

		if (itog1 > minimal ) { result1 = itog1 } else { result1 = minimal };

		if ( r1 == 1 ) { materials = ((+s2 + +i4 + +i5) * 230) } else { materials = ((+s2 + +i4 + +i5) * 250) }

		if ( r3 == 1 ) { result2 = materials } else { result2 = 0 }

		result3 = +result1 + +result2


		$( "#result1" ).text( result1.toLocaleString('ru') + " " + "руб." );
		$( "#result2" ).text( result2.toLocaleString('ru') + " " + "руб." );
		$( "#result3" ).text( result3.toLocaleString('ru') + " " + "руб." );
		
		if ( r1 == 1 ) { p1 = "Новостройка" } else { p1 = "Вторичное жилье" };

		if ( r2 == 1 ) { p2 = "Санкт-Петербург" } else { p2 = "Ленинградская область" };

	}




	$( "#go-print" ).click(function(){

		// $( "body *" ).css("display", "none");
		// $( ".print" ).css("display", "block");
		// $( ".print *" ).css("display", "block");
		// $( ".print__flex" ).css("display", "flex");

		if( i1 == "" ) { i1 = 0 };
		if( i2 == "" ) { i2 = 0 };
		if( i3 == "" ) { i3 = 0 };
		if( i4 == "" ) { i4 = 0 };
		if( i5 == "" ) { i5 = 0 };
		if( i6 == "" ) { i6 = 0 };

		$( "#print_1" ).text(p1);
		$( "#print_2" ).text(p2);
		$( "#print_3" ).text(i1 + " м");
		$( "#print_4" ).text(i2 + " м2");
		$( "#print_5" ).text(i3 + " м2");
		$( "#print_6" ).text(i4 + " м.п.");
		$( "#print_7" ).text(i5 + " м2");
		$( "#print_8" ).text(i6 + " м2");
		$( "#print_9" ).text(result1.toLocaleString('ru') + " руб.");
		$( "#print_10" ).text(result2.toLocaleString('ru') + " руб.");
		$( "#print_11" ).text(result3.toLocaleString('ru') + " руб.");

		window.print();
		// location.reload();

	});
	
});



	// $("#make-log").click(function(){
	// 	console.log("––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");


	// 	console.log("r1 = " + r1);
	// 	console.log("r2 = " + r2);
	// 	console.log("s_min = " + s_min);
	// 	console.log("s1 = " + s1);
	// 	console.log("s2 = " + s2);
	// 	console.log("obl = " + obl);
	// 	console.log("h = " + h);
	// 	console.log("fond = " + fond);
	// 	console.log("k1 = " + k1);
	// 	console.log("minimal = " + minimal);
	// 	console.log("itog1 = " + itog1);
	// 	console.log("result1 = " + result1);
	// 	console.log("materials = " + materials);
	// 	console.log("result2 = " + result2);
	// 	console.log("result3 = " + result3);

	// 	console.log("––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
	// });



	// $( "#result2" ).val( square + " Тест переменной" );



