$(document).ready(function() {

	//открытие списка
	$(".calc__select").click(function(){
		$(".calc__select-list").toggleClass("calc__select-list--hide");
	});

	$(".calc__select-list__item").click(function(e){
		var calc__select_value = $(this).html();
		$(".calc__select").html(calc__select_value);
		$(".calc__select-list").toggleClass("calc__select-list--hide");
		calculation();
	});
	//открытие списка

	//слайдер
	$("input[name='calc_workers']").click(function(e){
		var workers_width = $(".calc__sausage").width();
		var workers_value = $(this).val();
		//var workers_position = ( +workers_width / 8 ) * ( +workers_value - 1 );
		var workers_position = ( +workers_value - 1 ) * 12.5 + "%";
		$("#workers_select").animate({left: workers_position}, 300)
		//calculation();
	});

	$("input[name='calc_worktime']").click(function(e){
		var workers_width = $(".calc__sausage").width();
		var workers_value = $(this).val();
		//var workers_position = ( +workers_width / 8 ) * ( +workers_value - 1 );
		var workers_position = ( +workers_value - 1 ) * 12.5 + "%";
		$("#worktime_select").animate({left: workers_position}, 300)
		//calculation();
	});
	//слайдер

	//маска ввода телефона
	$("#calc_phone").mask("+7 (999) 999-99-99", {placeholder: "__________" });
	//маска ввода телефона

	//заполнение даты и времени
	var date = new Date();
	var today1 = date.getDate();
	var today2 = date.getMonth()+1;
	var today3 = date.getFullYear();

	if ( date.getDate() < 10 ) {var today1 = "0" + date.getDate();} else {var today1 = date.getDate();}
	if ( ( date.getMonth()+1 ) < 10 ) {var today2 = "0" + (date.getMonth()+1);} else {var today2 = (date.getMonth()+1);}

	if ( date.getHours() < 10 ) {var hours = "0" + date.getHours();} else {var hours = date.getHours();}
	if ( date.getMinutes() < 10 ) {var min = "0" + date.getMinutes();} else {var min = date.getMinutes();}

	$("#calc_date").val( today1 + "." + today2 + "." + today3 );
	$(".calc__info-date--span").html( today1 + "." + today2 + "." + today3 );
	$(".calc__input-time__hours").html(hours);
	$(".calc__input-time__min").html(min);

	$(".calc__info-time--span1").html( hours );
	$(".calc__info-time--span2").html( min );

	$("#form_time").val( hours + ":" + min );

	$("#calc_date").focusout(function(){
		var calc_date_transf = $("#calc_date").val();
		$(".calc__info-date--span").html(calc_date_transf);
		theTime();
		if (
			( $("#calc_date").val().split(".")[0] < today1 ) ||
			( $("#calc_date").val().split(".")[1] < today2 ) ||
			( $("#calc_date").val().split(".")[2] < today3 ) )
		{
			$("#calc_date").val( today1 + "." + today2 + "." + today3 );
		}
	});
	//заполнение даты и времени

	//скрытие часов минут
	function theTime() {

		// console.log( $("#calc_date").val().split(".")[0] );
		// console.log( $("#calc_date").val().split(".")[1] );
		// console.log( $("#calc_date").val().split(".")[2] );

		if ( ( $("#calc_date").val().split(".")[0] == today1 ) &&
			 ( $("#calc_date").val().split(".")[1] == today2 ) &&
			 ( $("#calc_date").val().split(".")[2] == today3 ) )
		{

			$(".calc__clock__hours__item--hide").removeClass("calc__clock__hours__item--hide");
			$(".calc__clock__min__item--hide").removeClass("calc__clock__min__item--hide");

			if ( $(".calc__input-time__hours").html() == hours ) {
				$(".calc__clock__hours__item").each(function(){
					if( $(this).html() < hours ) {
						$(this).addClass("calc__clock__hours__item--hide");
					}
				});
				$(".calc__clock__min__item").each(function(){
					if( $(this).html() < (+min + 10) ) {
						$(this).addClass("calc__clock__min__item--hide");
					}
				});
			} else {
				$(".calc__clock__hours__item").each(function(){
					if( $(this).html() < hours ) {
						$(this).addClass("calc__clock__hours__item--hide");
					}
				});
			}



		} else {
			if ( 
				(
					( $("#calc_date").val().split(".")[0] > today1 ) &&
					( $("#calc_date").val().split(".")[1] == today2 )
				) ||
				( $("#calc_date").val().split(".")[1] > today2 ) ||
				( $("#calc_date").val().split(".")[2] > today3 )
			) {
				$(".calc__clock__hours__item--hide").removeClass("calc__clock__hours__item--hide");
				$(".calc__clock__min__item--hide").removeClass("calc__clock__min__item--hide");
			} else {
				if (
					( $("#calc_date").val().split(".")[0] < today1 ) ||
					( $("#calc_date").val().split(".")[1] < today2 )
				)
				{
					$(".calc__clock__hours__item").addClass("calc__clock__hours__item--hide");
					$(".calc__clock__min__item").addClass("calc__clock__min__item--hide");
				}
			}
		}
	}
	//скрытие часов минут

	theTime();




	//выбор часов и минут из окна
	$("#calc_time").click(function(){
		$(".calc__clock").removeClass("calc__clock--hide");
	});

	$(".calc__clock__hours__item").click(function(e){
		var clock_hours = $(this).html();
		$(".calc__input-time__hours").html(clock_hours);
		$(".calc__info-time--span1").html(clock_hours);
		theTime();
		$("#form_time").val( $(".calc__info-time--span1").html() + ":" + $(".calc__info-time--span2").html() );
	});
	$(".calc__clock__min__item").click(function(e){
		var clock_min = $(this).html();
		$(".calc__input-time__min").html(clock_min);
		$(".calc__info-time--span2").html(clock_min);
		$("#form_time").val( $(".calc__info-time--span1").html() + ":" + $(".calc__info-time--span2").html() );
	});
	$(".calc__clock").mouseleave(function(){
		$(".calc__clock").addClass("calc__clock--hide");
	});
	//выбор часов и минут из окна

	//показать комментарий
	$("#calc_comment_link").click(function(){
		event.preventDefault();
		$("#calc_comment").toggleClass("calc__input--hide");
	});
	//показать комментарий

	//расчет
	function calculation() {

		var calc_Workers = $("input[name='calc_workers']:checked").val();
		var calc_Worktime = $("input[name='calc_worktime']:checked").val();

		var calc_Workers_Hand = $("#workers_hand_input").val();
		var calc_Worktime_Hand = $("#worktime_hand_input").val();

		var calc_worker_type = $(".calc__select").html();

		if ( calc_Workers_Hand <= 8 ) {
			$("#workers_hand_input").val( calc_Workers );
		}
		if ( calc_Worktime_Hand <= 8 ) {
			$("#worktime_hand_input").val( calc_Worktime );
		}

		if ( calc_Workers_Hand > 8 ) {
			$("#workers_hand_input").addClass("calc__input--focus");
			$("#workers_select").addClass("calc__sausage__select--gray");
		} else {
			$("#workers_hand_input").removeClass("calc__input--focus");
			$("#workers_select").removeClass("calc__sausage__select--gray");
		}
		
		if ( calc_Worktime_Hand > 8 ) {
			$("#worktime_hand_input").addClass("calc__input--focus");
			$("#worktime_select").addClass("calc__sausage__select--gray");
		} else {
			$("#worktime_hand_input").removeClass("calc__input--focus");
			$("#worktime_select").removeClass("calc__sausage__select--gray");
		}

		calc_Workers_Hand = $("#workers_hand_input").val();
		calc_Worktime_Hand = $("#worktime_hand_input").val();



		if ( calc_worker_type == "Такелажник" ) {
			var calc_workers_price = 500 * calc_Worktime_Hand;
			if ( calc_workers_price < 2000 ) {
				calc_workers_price = 2000;
			}
		} else {
			if ( calc_Worktime_Hand <= 3 ) {
				var calc_workers_price = 1000;
			} else {
				if ( calc_Worktime_Hand == 4 ) {
					var calc_workers_price = 1200;
				} else {
					if ( calc_Worktime_Hand >= 5 ) {
						var calc_workers_price = 1200 + ( 250 * ( calc_Worktime_Hand - 4 ) );
					}
				}
			}
		}


		$(".calc__info-type--span").html(calc_worker_type);
		$(".calc__info-workers--span").html(calc_Workers_Hand);
		$(".calc__info-worktime--span").html(calc_Worktime_Hand);


		var calc_result = calc_workers_price * calc_Workers_Hand;
		var calc_price = calc_result * 1.3;
		var calc_economy = calc_price - calc_result;

		$(".calc__sums-itog--span").html( calc_result + " руб." );
		$(".calc__sums-price--span").html( calc_price + " руб." );
		$(".calc__sums-economy--span").html( calc_economy + " руб." );
	}

	$("input[name='calc_workers']").change(function(){
		$("#workers_hand_input").val( $("input[name='calc_workers']:checked").val() );
		calculation();
	});
	$("input[name='calc_worktime']").change(function(){
		$("#worktime_hand_input").val( $("input[name='calc_worktime']:checked").val() );
		calculation();
	});
	$("#workers_hand_input").change(function(){
		calculation();
	});
	$("#worktime_hand_input").change(function(){
		calculation();
	});

	$("#calc_name").change(function(){
		$(".calc__info-name--span").html( $("#calc_name").val() );
	});
	$("#calc_phone").change(function(){
		$(".calc__info-phone--span").html( $("#calc_phone").val() );
	});

	calculation();
	//расчет


	//список городов
	$("#citySelect").focusin(function(){
		$(".calc__cities").removeClass("calc__cities--hide");
	});
	$(".calc__cities__item").click(function(e){
		var calc_city = $(this).html();
		$("#citySelect").val(calc_city);
		$(".calc__cities").addClass("calc__cities--hide");
		//$("#suggest").val( $("#citySelect").val() + " " );
		$("#suggest").prop('disabled', false);
	});
	//список городов

	$("#citySelect").click(function(){
		$("#suggest").val("");
		$("#suggest").prop('disabled', true);
	});

	//КАРТА 2

	$(".calc__map__close").click(function(){
		$(".calc__map").addClass("calc__map--hide");
	});

	$("#map_open_1").click(function(){
		if ( $("#citySelect").val() != "" ) {
			$("#citySelect").removeClass("calc__input--error");
			search();
			setTimeout(function(){
				$(".calc__map").removeClass("calc__map--hide");
			},200)
		} else {
			$("#citySelect").addClass("calc__input--error");
			setTimeout(function(){
				$("#citySelect").removeClass("calc__input--error");
			},2000)
		}
	});
	$("#map_open_2").click(function(){
		if ( $("#citySelect").val() != "" ) {
			$("#citySelect").removeClass("calc__input--error");
			search2();
			setTimeout(function(){
				$(".calc__map").removeClass("calc__map--hide");
			},200)
		} else {
			$("#citySelect").addClass("calc__input--error");
			setTimeout(function(){
				$("#citySelect").removeClass("calc__input--error");
			},2000)
		}
	});

	var myMap;

	ymaps.ready(mapCre);
	
	function mapCre() {
		myMap = new ymaps.Map('map', {
			center: [55.76, 37.64], // Москва
			zoom: 2,
			controls: ['smallMapDefaultSet']
		}, {
			searchControlProvider: 'yandex#search'
		});

		// search();

		var suggestView = new ymaps.SuggestView('suggest', { 
			provider: {
				suggest:(function(request, options){

					return ymaps.suggest(document.getElementById('citySelect').value +", " + request);

				})}
			}
		);

		suggestView.events.add('select', function (event) {
			var cityCutval_1 = "Россия, ";
			var cityCutval_2 = $("#citySelect").val() + ", ";
			//var replace_2 = "Россия, Ленинградская область, "
			var cityCut = $("#suggest").val().replace(cityCutval_1, "").replace(cityCutval_2, "");
			$("#suggest").val(cityCut);

			$(".calc__info-addr--span").html( $("#citySelect").val() + ", " + $("#suggest").val() );
		});

		// $("#suggest").click(function(){

		// 	var bnds0 = $(".temp-val--1").html();
		// 	var bnds2 = $(".temp-val--2").html();
		// 	var bnds3 = $(".temp-val--3").html();
		// 	var bnds4 = $(".temp-val--4").html();
	
		// 	var suggestInput2 = new ymaps.SuggestView('suggest' ,
		// 	{
		// 		results: 8,
		// 		boundedBy:
		// 		[
		// 			[bnds0, bnds2],
		// 			[bnds3, bnds4]
		// 		]
		// 	}
		// 	);



		// });

	}

	// $("#suggest").focusout(function(){
	// 	$(".calc__info-addr--span").html( $("#suggest").val() );
	// });

	function search() {
		myMap.geoObjects.removeAll();

		var citySelect = $("#citySelect").val();

		ymaps.geocode( citySelect , {
			results: 1
		}).then(function (res) {
			var firstGeoObject = res.geoObjects.get(0),
				coords = firstGeoObject.geometry.getCoordinates(),
				bounds = firstGeoObject.properties.get('boundedBy');
				//console.log(coords[0]);
				//alert(bounds);
				// $(".temp-val--1").html(bounds[0][0]);
				// $(".temp-val--2").html(bounds[0][1]);
				// $(".temp-val--3").html(bounds[1][0]);
				// $(".temp-val--4").html(bounds[1][1]);

			firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
			firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

			myMap.geoObjects.add(firstGeoObject);
			myMap.setCenter(coords);
			myMap.setZoom(7);
			// myMap.setBounds(bounds, {
			// 	checkZoomRange: true
			// });
		});

	}

	function search2() {
	
		myMap.geoObjects.removeAll();

		var addressSelect = $("#citySelect").val() + ", " + $("#suggest").val();

		ymaps.geocode( addressSelect , {
			results: 1
		}).then(function (res) {
			var firstGeoObject = res.geoObjects.get(0),
				coords = firstGeoObject.geometry.getCoordinates(),
				bounds = firstGeoObject.properties.get('boundedBy');
	
			firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
			firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
	
			myMap.geoObjects.add(firstGeoObject);
			myMap.setCenter(coords);
			myMap.setZoom(18);
			// myMap.setBounds(bounds, {
			// 	checkZoomRange: true
			// });
		});
	}




	// function search() {
	
	// 	var citySelect = $("#citySelect").val();
	// 	$("#suggest").val(citySelect);
	
	// 	ymaps.geocode( citySelect , {
	// 		results: 1
	// 	}).then(function (res) {
	// 		var firstGeoObject = res.geoObjects.get(0),
	// 			coords = firstGeoObject.geometry.getCoordinates(),
	// 			bounds = firstGeoObject.properties.get('boundedBy');
	// 			/* console.log(coords[0]); */
	
	// 		firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
	// 		firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
	
	// 		myMap.geoObjects.add(firstGeoObject);
	// 		myMap.setBounds(bounds, {
	// 			checkZoomRange: true
	// 		});
	// 	});
	// }
	
	// function search2() {
	
	// 	myMap.geoObjects.removeAll();
	
	
	// 	var addressSelect = $("#suggest").val();
	// 	ymaps.geocode( addressSelect , {
	// 		results: 1
	// 	}).then(function (res) {
	// 		var firstGeoObject = res.geoObjects.get(0),
	// 			coords = firstGeoObject.geometry.getCoordinates(),
	// 			bounds = firstGeoObject.properties.get('boundedBy');
	
	// 		firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
	// 		firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
	
	// 		myMap.geoObjects.add(firstGeoObject);
	// 		myMap.setBounds(bounds, {
	// 			checkZoomRange: true
	// 		});
	// 	});
	// }


	//КАРТА 2









	//карта
	// var myMap;

	// ymaps.ready(goMap);
	// ymaps.ready(goMap2);

	// $(".calc__map__close").click(function(){
	// 	$(".calc__map").addClass("calc__map--hide");
	// });

	// function goMap2() {

	// 	myMap = new ymaps.Map('map', {
	// 		center: [59.86, 30.31],
	// 		zoom: 10,
	// 		controls: ['smallMapDefaultSet']
	// 	}, {
	// 		searchControlProvider: 'yandex#search'
	// 	});

	// 	$("#map_open_1, #map_open_2").click(function(){
	// 		myMap.geoObjects.removeAll();
	// 		$(".calc__map").removeClass("calc__map--hide");
	// 		var map_way1 = $("#calc_sugest1").val();
	// 		var map_way2 = $("#suggest").val();

	// 		var calc_trip = new ymaps.multiRouter.MultiRoute({   
	// 			referencePoints: [
	// 				map_way1,
	// 				map_way2
	// 			]
	// 		}, {
	// 				// Автоматически устанавливать границы карты так,
	// 				// чтобы маршрут был виден целиком.
	// 				boundsAutoApply: true
	// 		});

			
	// 		myMap.geoObjects.add(calc_trip);
	// 		// Добавление маршрута на карту.
	// 	});

	// }

	// function goMap () {

	// 	var suggestInput1 = new ymaps.SuggestView('calc_sugest1' 
	// 		,{
	// 			results: 8,
	// 			boundedBy:
	// 			[
	// 			[60.23, 29.44],
	// 			[59.55, 31.52]
	// 			],
	// 		}
	// 	);

	// 	suggestInput1.events.add('select', function (event) {
	// 		var replace_1 = "Россия, Санкт-Петербург, "
	// 		var replace_2 = "Россия, Ленинградская область, "
	// 		var strcut1 = $("#calc_sugest1").val().replace(replace_1, "").replace(replace_2, "");
	// 		$("#calc_sugest1").val(strcut1);

	// 		var calc_address_1 = $("#calc_sugest1").val();
	// 		$(".calc__info-addr--span").html(" ");
	// 		$(".calc__info-addr--span1").html(calc_address_1);

	// 	});

	// 	var suggestInput2 = new ymaps.SuggestView('suggest' 
	// 		,{
	// 			results: 8,
	// 			boundedBy:
	// 			[
	// 			[60.23, 29.44],
	// 			[59.55, 31.52]
	// 			]
	// 		}
	// 	);

	// 	suggestInput2.events.add('select', function (event) {
	// 		var replace_1 = "Россия, Санкт-Петербург, "
	// 		var replace_2 = "Россия, Ленинградская область, "
	// 		var strcut2 = $("#suggest").val().replace(replace_1, "").replace(replace_2, "");
	// 		$("#suggest").val(strcut2);

	// 		var calc_address_2 = $("#suggest").val();
	// 		$(".calc__info-addr--span").html(" ► ");
	// 		$(".calc__info-addr--span2").html(calc_address_2);
			
	// 	});

	// }
	//карта

	

	//кнопка продолжить. проверка заполненых полей
	$(".calc__gobtn").click(function(){

		var length1 = $("#calc_name").val().length;
		var length2 = $("#calc_phone").val().length;

		var length1_param = 0;
		var length2_param = 0;

		if ( length2 == 18 ){
			$("#calc_phone").css({border: "1px solid #b8b7b7"});
			length2_param = 1;
		} else {
			$("#calc_phone").css({border: "1px solid red"});
			setTimeout(function(){
				$("#calc_phone").css({border: "1px solid #b8b7b7"});
			},2000)
			length2_param = 0;
		}

		if ( length1 > 0 ){
			$("#calc_name").css({border: "1px solid #b8b7b7"});
			length1_param = 1;
		} else {
			$("#calc_name").css({border: "1px solid red"});
			setTimeout(function(){
				$("#calc_name").css({border: "1px solid #b8b7b7"});
			},2000)
			length1_param = 0;
		}

		if ( (length1_param == 1 ) && ( length2_param == 1 ) ){
			$(".calc__blind").fadeOut(400);
			$(".calc__gobtn").fadeOut(100);
		}

	});
	//кнопка продолжить. проверка заполненых полей

});