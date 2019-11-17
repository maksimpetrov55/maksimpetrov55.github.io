$(document).ready(function() {

	var date = new Date();
	var today1 = date.getDate();
	var today2 = date.getMonth()+1;
	var today3 = date.getFullYear();
	$("#startDate").val( today1 + "." + today2 + "." + today3 );

});


var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('map', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center: [55.76, 37.64], // Москва
		zoom: 10,
		controls: ['smallMapDefaultSet']
	}, {
		searchControlProvider: 'yandex#search'
	});

/*     myRectangle = new ymaps.Rectangle([
        // Задаем координаты диагональных углов прямоугольника.
        [55.5, 37.5],
        [55.6, 37.6]
    ], {
        //Свойства
        hintContent: 'Меня перетаскивать нельзя!',
        balloonContent: 'Прямоугольник 1'
    }, {
        // Опции.
        // Цвет и прозрачность заливки.
        fillColor: '#7df9ff33',
        // Дополнительная прозрачность заливки..
        // Итоговая прозрачность будет не #33(0.2), а 0.1(0.2*0.5).
        fillOpacity: 0.5,
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Прозрачность обводки.
        strokeOpacity: 0.5,
        // Ширина линии.
        strokeWidth: 2,
        // Радиус скругления углов.
        // Данная опция принимается только прямоугольником.
        borderRadius: 6
	});
	
	myMap.geoObjects.add(myRectangle); */



	var suggestView1 = new ymaps.SuggestView('suggest1' 
 		,{
			results: 8
			/*boundedBy:
			[
			[55.66, 37.60],
			[55.71, 37.69]
			]*/
		}
	);
}


function setCenter () {
	myMap.setCenter([57.767265, 40.925358]);
	myMap.setZoom(15);
}

function search() {

	var citySelect = $("#citySelect").val();
	$("#suggest1").val(citySelect);

	ymaps.geocode( citySelect , {
		results: 1
	}).then(function (res) {
		var firstGeoObject = res.geoObjects.get(0),
			coords = firstGeoObject.geometry.getCoordinates(),
			bounds = firstGeoObject.properties.get('boundedBy');
			/* console.log(coords[0]); */

		firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
		firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

		myMap.geoObjects.add(firstGeoObject);
		myMap.setBounds(bounds, {
			checkZoomRange: true
		});
	});
}

function search2() {

	myMap.geoObjects.removeAll();

	

	var addressSelect = $("#suggest1").val();
	ymaps.geocode( addressSelect , {
		results: 1
	}).then(function (res) {
		var firstGeoObject = res.geoObjects.get(0),
			coords = firstGeoObject.geometry.getCoordinates(),
			bounds = firstGeoObject.properties.get('boundedBy');

		firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
		firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

		myMap.geoObjects.add(firstGeoObject);
		myMap.setBounds(bounds, {
			checkZoomRange: true
		});
	});
}

$(document).ready(function() {

	function print() {

		var printAddress = $("#suggest1").val();
		var printFlat = $("#flat").val();
		var printWorkers = $("#workers").val();
		var printDate = $("#startDate").val();
		var printTime = $("#startTime").val();
		var printHours = $("#workTime").val();

		$(".newCalc__body2__right__check__address").html( "Ваш адрес: " + printAddress );
		$(".newCalc__body2__right__check__flat").html( "Номер квартиры: " + printFlat );
		$(".newCalc__body2__right__check__workers").html( "Количество грузчиков: " + printWorkers );
		$(".newCalc__body2__right__check__date").html( "Дата заказа: " + printDate );
		$(".newCalc__body2__right__check__time").html( "Время начала работы: " + printTime );
		$(".newCalc__body2__right__check__hours").html( "Количество часов: " + printHours );
/* 		$(".newCalc__body2__right__check__note").html( 
			"Стоимость указанная в калькуляторе является приоритетным! Возможно уменьшение или увлечение после звонка Вам менеджера. Спасибо!"); */

	}

	$("#startDate").blur(function(){
		print();
	});
	$("#flat, #workers, #startDate, #startTime, #workTime").change(function(){
		print();
	});

	$("#suggest1").focusout(function() {
		setTimeout(function(){
			search2();
			print();
		},200);
	});

	$("#suggest1").focusin(function() {
		$(document).keypress(function(e) {
			if(e.which == 13) {
				setTimeout(function(){
					search2();
					print();
				},200);
			}
		});
	});
});


