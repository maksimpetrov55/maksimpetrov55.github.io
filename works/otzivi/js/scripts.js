$(document).ready(function() {



	$('.calc__table').on("click", ".calc__delete", function(){
		$(this).parent().parent().remove();
		calculation();
	});

	$('.calc__add').click(function(){
		correction();
		$('.drop').addClass("drop--show");
		$('.calc__black').addClass("calc__black--show");
	});

	$('.calc__black').click(function(){
		$('.drop').removeClass("drop--show");
		$('.calc__black').removeClass("calc__black--show");
	});


	$('.drop__item').each(function(){
		let drop_name = "drop__item--" + $(this).data("name");
		$(this).addClass(drop_name);
	});

	function correction() {
		$('.drop__item').each(function(){
			let drop_name = ".drop__item--" + $(this).data("name");
			let line_name = ".calc__line--" + $(this).data("name");
			if ( $(line_name).length > 0 ) {
				$(drop_name).css({display: "none"});
			} else {
				$(drop_name).css({display: "block"});
			}
		});
	}

	$('.drop__item').click(function(){
		$('.drop').removeClass("drop--show");
		$('.calc__black').removeClass("calc__black--show");

		let drop_price = $(this).data("price");
		let line_name = "calc__line--" + $(this).data("name");
		let line_img = $(this).data("name");
		let line_tip = $(this).data("tip");
		let line_place = $(this).data("tip");

		$(".calc__table").append(`
			<div data-place="${line_place}" class="calc__line calc__line--calc ${line_name}">
				<div class="calc__part">
					<div class="calc__delete"></div>
					<img src="img/${line_img}.png" alt="" class="calc__img">
					<div class="calc__tip">
						<div class="calc__sign">?</div>
						<div class="calc__fly">Размещение отзыва не сервисе ${line_tip} с гарантией публикации 1 мес*</div>
					</div>
				</div>
				<div class="calc__head730">
					<div class="calc__text">Кол-во отзывов</div>
					<div class="calc__text">Стоимость</div>
				</div>
				<div class="calc__between">
					<div class="calc__plusminus">
						<div class="calc__minus">–</div>
						<input class="calc__input" type="text" value="0">
						<div class="calc__plus">+</div>
					</div>
					<div class="calc__text calc__text--price">${drop_price} руб.</div>
				</div>
			</div>
		`);
		calculation();
	});

	calculation();
	function calculation() {
		
		var calc_itog = 0;

		$('.calc__line--calc').each(function(){
			
			let calc_price = $(this).find(".calc__text--price").text().split(" ")[0];
			
			//console.log(calc_price);
			
			calc_itog = +calc_itog + +calc_price;

			//console.log(calc_itog);
			$('.calc__result').text( calc_itog.toLocaleString("eu") + " руб" );

			let calc_filials = $('#calc_filial').val();

			var calc_place_ARR = [];
			var calc_value_ARR = [];
			var calc_data = "";

			$('.calc__line--calc').each(function(){
				let calc_place = $(this).data("place");
				calc_place_ARR.push(calc_place);
				console.log(calc_place);
				

				let calc_value = $(this).find(".calc__input").val();
				calc_value_ARR.push(calc_value);
				console.log(calc_value);
				

				calc_data = calc_data + calc_place + ": " + calc_value + " отзывов" + "<br>" + " \n";
				console.log(calc_data);
				
			});


			$('#form_data').val(
				"Филиалов: " + calc_filials + "<br>" + " \n" +
				calc_data +
				"Итого: " + calc_itog.toLocaleString("eu") + " руб"
			);

		});

	}



	$('.form__file').click(function(){
		$('#form_file').click();
	});


	$(function(){
		$("#form_phone").mask("(999) 999-99-99", {placeholder: "__________" });
	});

	$('.calc__table').on("click", ".calc__minus", function(){
		$(this).next().val( +$(this).next().val() - 1 );
		if ( $(this).next().val() < 0 ) {
			$(this).next().val( 0 );
		}
		calculation();
	});

	$('.calc__table').on("click", ".calc__plus", function(){
		$(this).prev().val( +$(this).prev().val() + 1 );
		calculation();
	});

	$('.calc__table').on("change", ".calc__input", function(){
		if ( $(this).val() < 0 ) {
			$(this).val( 0 );
		}
		if ( $(this).val() == "" ) {
			$(this).val( 0 );
		}
		calculation();
	});




});