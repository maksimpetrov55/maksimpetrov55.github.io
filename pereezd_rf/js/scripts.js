$(document).ready(function() {

	$("#bodytype_height_2, #bodytype_length_2, #bodytype_roof_2").click(function(e){
		$(this).prevAll(".moving__select").removeClass("moving__select--pos3");
		$(this).prevAll(".moving__select").addClass("moving__select--pos2");
	});
	$("#bodytype_roof_3").click(function(e){
		$(this).prevAll(".moving__select").removeClass("moving__select--pos2");
		$(this).prevAll(".moving__select").addClass("moving__select--pos3");
	});
	$("#bodytype_height_1, #bodytype_length_1, #bodytype_roof_1").click(function(e){
		$(this).prevAll(".moving__select").removeClass("moving__select--pos2");
		$(this).prevAll(".moving__select").removeClass("moving__select--pos3");
	});

	$("#passengers_0").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
	});
	$("#passengers_1").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
		$(this).prevAll(".moving__select--pass").addClass("moving__select--pos2");
	});
	$("#passengers_2").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
		$(this).prevAll(".moving__select--pass").addClass("moving__select--pos3");
	});
	$("#passengers_3").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
		$(this).prevAll(".moving__select--pass").addClass("moving__select--pos4");
	});
	$("#passengers_4").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
		$(this).prevAll(".moving__select--pass").addClass("moving__select--pos5");
	});
	$("#passengers_5").click(function(e){
		$(this).prevAll(".moving__select--pass").removeClass("moving__select--pos2").removeClass("moving__select--pos3").removeClass("moving__select--pos4").removeClass("moving__select--pos5").removeClass("moving__select--pos6");
		$(this).prevAll(".moving__select--pass").addClass("moving__select--pos6");
	});

	$("#workers_0").click(function(e){
		$(this).prevAll(".moving__select--workers").removeClass("moving__select--pos2").removeClass("moving__select--pos3");
	});
	$("#workers_1").click(function(e){
		$(this).prevAll(".moving__select--workers").removeClass("moving__select--pos2").removeClass("moving__select--pos3");
		$(this).prevAll(".moving__select--workers").addClass("moving__select--pos2");
	});
	$("#workers_2").click(function(e){
		$(this).prevAll(".moving__select--workers").removeClass("moving__select--pos2").removeClass("moving__select--pos3");
		$(this).prevAll(".moving__select--workers").addClass("moving__select--pos3");
	});

	$(".moving__open").click(function(e){
		$(this).children(".moving__open__list").toggleClass("moving__open__list--show");
	});
	$(".moving__open__list__li").click(function(e){
		var selectText = $(this).html();
		$(this).parent().prevAll(".moving__open__selected").html(selectText);
		$(".moving__info__hours--span").html(selectText);
		sums();
	});
	$(".moving__open").mouseleave(function(e){
		$(this).children(".moving__open__list").removeClass("moving__open__list--show");
	});

	//показать/скрыть поле с комментарием к заказу

	$("#moving_textarea_btn").click(function(e){
		event.preventDefault();
		$(".moving__itog").toggleClass("moving__itog--nogap");
		$("#moving_textarea").toggleClass("moving__textarea--show");
		$("#moving_textarea").val("");
	});
	//показать/скрыть поле с комментарием к заказу

	//маска ввода телефона
	$("#moving_phone").mask("+7 (999) 999-99-99", {placeholder: "__________" });
	//маска ввода телефона

	//заполнение даты и времени
	var date = new Date();
	var today1 = date.getDate();
	var today2 = date.getMonth()+1;
	var today3 = date.getFullYear();
	if ( date.getHours() < 10 ) {var hours = "0" + date.getHours();} else {var hours = date.getHours();}

	if ( date.getMinutes() < 10 ) {var min = "0" + date.getMinutes();} else {var min = date.getMinutes();}

	$(".moving__input-date").val( today1 + "." + 0 + today2 + "." + today3 );
	$(".moving__info__date--span").html( today1 + "." + 0 + today2 + "." + today3 );
	$(".moving__input-time__hours").html(hours);
	$(".moving__input-time__min").html(min);
	$(".moving__info__time--span1").html(hours);
	$(".moving__info__time--span2").html(min);
	//$(".moving__input-time").html( hours + ":" + min );
	//заполнение даты и времени

	//проверка времени
	noTime();
	$(".moving__input-date").focusout(function(){
		noTime();
		$(".moving__info__date--span").html( $(".moving__input-date").val() );
		if (
			( $(".moving__input-date").val().split(".")[0] < today1 ) ||
			( $(".moving__input-date").val().split(".")[1] < ( 0 + today2 ) ) ||
			( $(".moving__input-date").val().split(".")[2] < today3 ) )
		{
			$(".moving__input-date").val( today1 + "." + 0 + today2 + "." + today3 );
		}
	});
	//alert( $(".moving__input-date").val().split(".")[2] );

	function noTime() {
		if ( ( $(".moving__input-date").val().split(".")[0] == today1 ) &&
			 ( $(".moving__input-date").val().split(".")[1] == ( 0 + today2 ) ) &&
			 ( $(".moving__input-date").val().split(".")[2] == today3 ) )
		{

			$(".moving__clock__hours__item--hide").removeClass("moving__clock__hours__item--hide");
			$(".moving__clock__min__item--hide").removeClass("moving__clock__min__item--hide");

			if ( $(".moving__input-time__hours").html() == hours ) {
				$(".moving__clock__hours__item").each(function(){
					if( $(this).html() < hours ) {
						$(this).addClass("moving__clock__hours__item--hide");
					}
				});
				$(".moving__clock__min__item").each(function(){
					if( $(this).html() < (+min + 10) ) {
						$(this).addClass("moving__clock__min__item--hide");
					}
				});
			} else {
				$(".moving__clock__hours__item").each(function(){
					if( $(this).html() < hours ) {
						$(this).addClass("moving__clock__hours__item--hide");
					}
				});
			}



		} else {
			if ( 
				(
					( $(".moving__input-date").val().split(".")[0] > today1 ) &&
					( $(".moving__input-date").val().split(".")[1] == ( 0 + today2 ) )
				) ||
				( $(".moving__input-date").val().split(".")[1] > ( 0 + today2 ) ) ||
				( $(".moving__input-date").val().split(".")[2] > today3 )
			) {
				$(".moving__clock__hours__item--hide").removeClass("moving__clock__hours__item--hide");
				$(".moving__clock__min__item--hide").removeClass("moving__clock__min__item--hide");
			} else {
				if (
					( $(".moving__input-date").val().split(".")[0] < today1 ) ||
					( $(".moving__input-date").val().split(".")[1] < ( 0 + today2 ) )
				)
				{
					$(".moving__clock__hours__item").addClass("moving__clock__hours__item--hide");
					$(".moving__clock__min__item").addClass("moving__clock__min__item--hide");
				}
			}
		}
	}
	//проверка времени

	//убрать Россия, Санкт-Петербург
	// $(".moving__address").on('change', '#suggest1', function() {
	// 	console.log("wtf");
	// });

	// var rep_str = "Россия, Санкт-Петербург, "
	// var rep_str2 = "Россия, Ленинградская область, "
	// var cut1 = $("#suggest1").val().replace(rep_str, "").replace(rep_str2, "");
	// $("#suggest1").val(cut1);

	// $(".moving").mouseup(function(){
	// 	setTimeout(function(){

	// 	},200)
	// });
	// $("#suggest1").change(function(){
	// 	document.elementFromPoint(350, 600).click();
	// });


	// $("#suggest1").focusin(function(){
	// 	var der = document.getElementById("suggest1");
	// 	$(der).change(function(){
	// 		console.log("hello");
	// 	});
	// });

	// $(".moving").mouseup(function(){
	// 	setTimeout(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut1 = $("#suggest1").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest1").val(cut1);
	// 		setTimeout(function(){
	// 			$("ymaps").addClass("ymaps--dnone");
	// 		},100)
	// 	},100)
	// });

	// $("#suggest1").change(function(){
	// 	setInterval(function(){
	// 		console.log(1);
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut1 = $("#suggest1").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest1").val(cut1);
	// 	},100)
	// });

	// $("#suggest2").change(function(){
	// 	setInterval(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut2 = $("#suggest2").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest2").val(cut2);
	// 	},100)
	// });
	// $("#suggest3").change(function(){
	// 	setInterval(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut3 = $("#suggest3").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest3").val(cut3);
	// 	},100)
	// });
	// $("#suggest4").change(function(){
	// 	setInterval(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut4 = $("#suggest4").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest4").val(cut4);
	// 	},100)
	// });
	// $("#suggest5").change(function(){
	// 	setInterval(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut5 = $("#suggest5").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest5").val(cut5);
	// 	},100)
	// });
	// $("#suggest6").change(function(){
	// 	setInterval(function(){
	// 		var rep_str = "Россия, Санкт-Петербург, "
	// 		var rep_str2 = "Россия, Ленинградская область, "
	// 		var cut6 = $("#suggest6").val().replace(rep_str, "").replace(rep_str2, "");
	// 		$("#suggest6").val(cut6);
	// 	},100)
	// });
	//убрать Россия, Санкт-Петербург

	//выбор часов и минут из окна
	$(".moving__input-time").click(function(){
		$(".moving__clock").removeClass("moving__clock--hide")
	});
	$(".moving__clock__hours__item").click(function(e){
		var clock_hours = $(this).html();
		$(".moving__input-time__hours").html(clock_hours);
		$(".moving__info__time--span1").html(clock_hours);
		noTime();
	});
	$(".moving__clock__min__item").click(function(e){
		var clock_min = $(this).html();
		$(".moving__input-time__min").html(clock_min);
		$(".moving__info__time--span2").html(clock_min);
	});
	$(".moving__clock").mouseleave(function(){
		$(".moving__clock").addClass("moving__clock--hide")
	});
	//выбор часов и минут из окна

	//кнопка продолжить. проверка заполненых полей
	$(".moving__btn-go").click(function(){

		var le1 = $("#moving_name").val().length;
		var le2 = $("#moving_phone").val().length;
		var le_allow2 = 0;
		var le_allow1 = 0;

		if ( le2 == 18 ){
			$("#moving_phone").css({border: "1px solid #dadada"});
			le_allow2 = 1;
		} else {
			$("#moving_phone").css({border: "1px solid red"});
			le_allow2 = 0;
		}

		if ( le1 > 0 ){
			$("#moving_name").css({border: "1px solid #dadada"});
			le_allow1 = 1;
		} else {
			$("#moving_name").css({border: "1px solid red"});
			le_allow1 = 0;
		}

		if ( (le_allow1 == 1 ) && ( le_allow2 == 1 ) ){
			$(".moving__blind").animate({width: "0"}, 300);
			$(".moving__btn-go").fadeOut(100);
		}

	});
	//кнопка продолжить. проверка заполненых полей

	//добавление полей адресов

	$("#address_add").click(function(){
		event.preventDefault();
		var len_inp1 = $("#suggest1").val().length;
		var len_inp2 = $("#suggest2").val().length;
		var len_inp3 = $("#suggest3").val().length;
		var len_inp4 = $("#suggest4").val().length;
		var len_inp5 = $("#suggest5").val().length;
		var len_inp6 = $("#suggest6").val().length;

		if ( (len_inp2 > 0) && (len_inp1 > 0) ) {
			$("#suggest3").parent(".moving__address").removeClass("moving__address--hide");
		}
		if ( len_inp3 > 0 ) {
			$("#suggest4").parent(".moving__address").removeClass("moving__address--hide");
		}
		if ( len_inp4 > 0 ) {
			$("#suggest5").parent(".moving__address").removeClass("moving__address--hide");
		}
		if ( len_inp5 > 0 ) {
			$("#suggest6").parent(".moving__address").removeClass("moving__address--hide");
		}
		if ( len_inp6 > 0 ) {
			$("#address_add").html("Достигнут лимит адресов");
		}

		if ( len_inp1 == 0 ) {
			$("#suggest1").addClass("moving__input--red");
			$("#suggest1").addClass("moving__input--shake");
			setTimeout(() => {
				$("#suggest1").removeClass("moving__input--red");
				$("#suggest1").removeClass("moving__input--shake");
			}, 500);
		}

		if ( len_inp2 == 0 ) {
			$("#suggest2").addClass("moving__input--red");
			$("#suggest2").addClass("moving__input--shake");
			setTimeout(() => {
				$("#suggest2").removeClass("moving__input--red");
				$("#suggest2").removeClass("moving__input--shake");
			}, 500);
		}
		// if ( len_inp3 == 0 ) {
		// 	$("#suggest3").addClass("moving__input--red");
		// 	$("#suggest3").addClass("moving__input--shake");
		// 	setTimeout(() => {
		// 		$("#suggest3").removeClass("moving__input--red");
		// 		$("#suggest3").removeClass("moving__input--shake");
		// 	}, 500);
		// }
		// if ( len_inp4 == 0 ) {
		// 	$("#suggest4").addClass("moving__input--red");
		// 	$("#suggest4").addClass("moving__input--shake");
		// 	setTimeout(() => {
		// 		$("#suggest4").removeClass("moving__input--red");
		// 		$("#suggest4").removeClass("moving__input--shake");
		// 	}, 500);
		// }
		// if ( len_inp5 == 0 ) {
		// 	$("#suggest5").addClass("moving__input--red");
		// 	$("#suggest5").addClass("moving__input--shake");
		// 	setTimeout(() => {
		// 		$("#suggest5").removeClass("moving__input--red");
		// 		$("#suggest5").removeClass("moving__input--shake");
		// 	}, 500);
		// }
		// if ( len_inp6 == 0 ) {
		// 	$("#suggest6").addClass("moving__input--red");
		// 	$("#suggest6").addClass("moving__input--shake");
		// 	setTimeout(() => {
		// 		$("#suggest6").removeClass("moving__input--red");
		// 		$("#suggest6").removeClass("moving__input--shake");
		// 	}, 500);
		// }
		
	});
	//добавление полей адресов

	//закрытие ненужных адресов
	$(".moving__address__close").click(function(e){
		$(this).parent(".moving__address").addClass("moving__address--hide");
		$(this).nextAll(".moving__input").val("");
	});
	//закрытие ненужных адресов

	//подключение подсказок адресов
	var myMap;

	ymaps.ready(init);
	ymaps.ready(init2);

	// $("#map_point_1").click(function(){
	// 	$(".moving__map").removeClass("moving__map--hide");
	// 	ymaps.ready(init2);
	// });

	$(".moving__map__close").click(function(){
		$(".moving__map").addClass("moving__map--hide");
	});

	function init2() {

		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center: [59.86, 30.31],
			zoom: 10,
			controls: ['smallMapDefaultSet']
		}, {
			searchControlProvider: 'yandex#search'
		});

		$("#map_point_1, #map_point_2, #map_point_3, #map_point_4, #map_point_5, #map_point_6").click(function(){
			myMap.geoObjects.removeAll();
			$(".moving__map").removeClass("moving__map--hide");
			var mapPoint1 = $("#suggest1").val();
			var mapPoint2 = $("#suggest2").val();
			var mapPoint3 = $("#suggest3").val();
			var mapPoint4 = $("#suggest4").val();
			var mapPoint5 = $("#suggest5").val();
			var mapPoint6 = $("#suggest6").val();

			// var mapPoint1 = "Россия, Санкт-Петербург, Тамбовская улица, 63";
			// var mapPoint2 = "Россия, Санкт-Петербург, Киевская улица, 5";
			var multiRoute = new ymaps.multiRouter.MultiRoute({   
				// Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
				referencePoints: [
					mapPoint1,
					mapPoint2,
					mapPoint3,
					mapPoint4,
					mapPoint5,
					mapPoint6
				]
			}, {
					// Автоматически устанавливать границы карты так,
					// чтобы маршрут был виден целиком.
					boundsAutoApply: true
			});

			
			myMap.geoObjects.add(multiRoute);
			// Добавление маршрута на карту.
		});

	}

	function init () {

		var suggestView1 = new ymaps.SuggestView('suggest1' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				],
				// provider: {
				// 	suggest: function (request, options) {
				// 	  return (suggestView1.state.get('open') ?
				// 		ymaps.suggest(request) : ymaps.vow.resolve([]))
				// 		.then(function (res) {
				// 		  suggestView1.events.fire('requestsuccess', {
				// 			target: suggestView1,
				// 		  })
						
				// 		  return res;
				// 		})
						
				// 	},
					
				// },
			}
		);

		//suggestView1.state.set('open', true);
		suggestView1.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr1--span").html( $("#suggest1").val() );
			var cut1 = $("#suggest1").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest1").val(cut1);
		});

		var suggestView2 = new ymaps.SuggestView('suggest2' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				]
			}
		);

		suggestView2.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr2--span").html( $("#suggest2").val() );
			var cut2 = $("#suggest2").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest2").val(cut2);
		});

		var suggestView3 = new ymaps.SuggestView('suggest3' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				]
			}
		);

		suggestView3.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr3").removeClass("moving__info__str--hide");
			$(".moving__info__addr3--span").html( $("#suggest3").val() );
			var cut3 = $("#suggest3").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest3").val(cut3);
		});

		var suggestView4 = new ymaps.SuggestView('suggest4' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				]
			}
		);

		suggestView4.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr4").removeClass("moving__info__str--hide");
			$(".moving__info__addr4--span").html( $("#suggest4").val() );
			var cut4 = $("#suggest4").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest4").val(cut4);
		});

		var suggestView5 = new ymaps.SuggestView('suggest5' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				]
			}
		);

		suggestView5.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr5").removeClass("moving__info__str--hide");
			$(".moving__info__addr5--span").html( $("#suggest5").val() );
			var cut5 = $("#suggest5").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest5").val(cut5);
		});

		var suggestView6 = new ymaps.SuggestView('suggest6' 
			,{
				results: 8,
				boundedBy:
				[
				[60.23, 29.44],
				[59.55, 31.52]
				]
			}
		);

		suggestView6.events.add('select', function (event) {
			console.log("!");
			var rep_str = "Россия, Санкт-Петербург, "
			var rep_str2 = "Россия, Ленинградская область, "
			$(".moving__info__addr6").removeClass("moving__info__str--hide");
			$(".moving__info__addr6--span").html( $("#suggest6").val() );
			var cut6 = $("#suggest6").val().replace(rep_str, "").replace(rep_str2, "");
			$("#suggest6").val(cut6);
		});




	}
	//подключение подсказок адресов

	//поиск
	$(function(){
		$('#expert_search').on('input', function(){
			var str = $(this).val().toLowerCase();
			if (str.length <= 0){
				$('ul#search-items li').show();
			} else {
				$('ul#search-items li').each(function(){
					if ($(this).text().toLowerCase().indexOf(str) < 0){
						$(this).hide();
					}
				});
			}
		});
	});
	//поиск


	// добавление в поля
	$("#moving_name").change(function(){
		$(".moving__info__name--span").html( $("#moving_name").val() );
	});
	$("#moving_phone").change(function(){
		$(".moving__info__phone--span").html( $("#moving_phone").val() );
	});

	function info(){

		var radio_info_1 = $("input[name='bodytype_height']:checked").val();
		var radio_info_2 = $("input[name='bodytype_length']:checked").val();
		var radio_info_3 = $("input[name='bodytype_roof']:checked").val();
		var radio_info_4 = $("input[name='passengers']:checked").val();
		var radio_info_5 = $("input[name='workers']:checked").val();
		
		if ( radio_info_1 == 1 ) {
			var radio_info_1_val = "Высокий";
		} else {
			if ( radio_info_1 == 2 ) {
				var radio_info_1_val = "Низкий";
			}
		}
		
		if ( radio_info_2 == 1 ) {
			var radio_info_2_val = "Длинный";
		} else {
			if ( radio_info_2 == 2 ) {
				var radio_info_2_val = "Короткий";
			}
		}

		if ( radio_info_3 == 1 ) {
			var radio_info_3_val = "Жесткий";
		} else {
			if ( radio_info_3 == 2 ) {
				var radio_info_3_val = "Тент";
			} else {
				if ( radio_info_3 == 3 ) {
					var radio_info_3_val = "Открытый";
				}
			}
		}

		var radio_info_5_hand = $("#moving_hand_workers").val();

		if ( radio_info_5_hand > 2 ) {
			var workers_dilema = radio_info_5_hand;
			$(".moving__select--workers").addClass("moving__select--gray");
		} else {
			var workers_dilema = radio_info_5;
			$(".moving__select--workers").removeClass("moving__select--gray");
		}

		


		$(".moving__info__type--span1").html( radio_info_1_val + "," );
		$(".moving__info__type--span2").html( radio_info_2_val + "," );
		$(".moving__info__type--span3").html( radio_info_3_val );
		$(".moving__info__pass--span").html( radio_info_4 );
		$(".moving__info__workers--span").html( workers_dilema );

	}
	info();

	$("input[name='workers']").change(function(){
		$("#moving_hand_workers").val( $("input[name='workers']:checked").val() );
		$(".moving__select--workers").removeClass("moving__select--gray");
		sums();
	});

	$(".moving__radio").click(function(){
		info();
		sums();
	});
	// добавление в поля

	$("#moving_hand_workers").change(function(){
		info();
		sums();
	});


	function sums() {

		var newDuration = $("#moving_duration").html();
		if ( newDuration == "1 час" ) {
			var newDuration_val = 1;
		} else {
			if ( newDuration == "2 часа" ) {
				var newDuration_val = 2;
			} else {
				var newDuration_val = 3;
			}
		}
		
		var newWorkers = $("#moving_hand_workers").val();
		var newWorkers_price = newWorkers * 1200

		var NewSkolko_1 = ( 890 * +newDuration_val ) + newWorkers_price;
		var NewSkolko_2 = NewSkolko_1 * 1.3;
		var NewSkolko_3 = NewSkolko_2 - NewSkolko_1;

		$(".moving__sums__itog").html( NewSkolko_1.toFixed(0) + " р.");
		$(".moving__sums__price").html( NewSkolko_2.toFixed(0) + " р." );
		$(".moving__sums__economy").html( NewSkolko_3.toFixed(0) + " р." );

	}

	sums();

	$("#addr_close_3").click(function(){
		$(".moving__info__addr3").addClass("moving__info__str--hide");
	});
	$("#addr_close_4").click(function(){
		$(".moving__info__addr4").addClass("moving__info__str--hide");
	});
	$("#addr_close_5").click(function(){
		$(".moving__info__addr5").addClass("moving__info__str--hide");
	});
	$("#addr_close_6").click(function(){
		$(".moving__info__addr6").addClass("moving__info__str--hide");
	});
});