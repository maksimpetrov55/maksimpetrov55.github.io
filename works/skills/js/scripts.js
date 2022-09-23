$(document).ready(function() {

	var calc_exp = +$('#calc_exp').val();
	var calc_exp_start = calc_exp;
	$('#calc_exp').change(function(){
		calc_exp = $(this).val();
		calc_exp_start = calc_exp;
		$('.calc__skills').find('.calc__input--small').val(1);
	});
	
	$('#calc_reset').click(function(){
		location.reload();
	});

	input_numbering();
	function input_numbering() {
		var number = -1;
		$('.calc__input--small').each(function(){
			number = number + $(this).index()
			//console.log( number );
			let this_id = "calc_input_" + number;
			$(this).attr("id", this_id);
		});
	}

	$('.calc__add').click(function(){
		$('.calc__skills').append(`
			<div class="calc__line">
				<input type="text" class="calc__input calc__input--text" value="- - -"><div class="calc__control"><div class="calc__minus">–</div><input type="text" class="calc__input calc__input--small" disabled data-score="0" value="1"><div class="calc__plus">+</div></div>
			</div>
		`);
		input_numbering();
	});

	$('.calc__skills').on("change", ".calc__input", function(){
		let value = $(this).val();
		if ( value < 1 ) {
			$(this).val(1);
		}
		//point_change( value );
	});


	$('.calc__skills').on("click", ".calc__minus",function(){
		let value = $(this).next().val();
		if ( value > 1 ) {
			$(this).next().val( +value - 1 );
		}
		let type = "minus";
		let number = "#" + $(this).next().attr("id");
		point_change( $(this).next().val(), value, type, number );
	});

	$('.calc__skills').on("click", ".calc__plus",function(){

		let value = $(this).prev().val();
		if ( value > 0 ) {
			$(this).prev().val( +value + 1 );
		}
		let type = "plus";
		let number = "#" + $(this).prev().attr("id");
		point_change( $(this).prev().val(), value, type, number );

		if ( +$('#calc_exp').val() >= +cost ) {

		} else {
			console.log("!!!");
		}
	});



	//$('.calc__skills').find('#calc_input_5').val(2);

	// var point = $('.calc__textarea').val().split("=")[0];
	// var cost = $('.calc__textarea').val().split("=")[1];

	var array = $('.calc__textarea').val().split(";");

	var array_length = array.length;
	var array_last = array[array_length-1].split("=")[0];

	console.log(array_last);

	var array_point = [];
	var array_cost = [];

	for( a = 0; a < array.length; a++) {
		array_point.push( array[a].split("=")[0] );
		array_cost.push( array[a].split("=")[1] );
	}

	console.log(
		array_point
	);

	console.log(
		array_cost
	);

	var cost = array_cost[0];

	function point_change( x, y, type, number ) {

		//console.log(type);

		

		if ( type == "plus" ) {
			for( i = 0; i < array_point.length; i++ ) {
				if ( y >= array_point[array_point.length-1] ) {
					cost = array_cost[array_point.length-1];
				}
				if ( y == array_point[i] ) {
					cost = array_cost[i];
				}
			}
		} else {
			for( i = 0; i < array_point.length; i++ ) {
				if ( x >= array_point[array_point.length-1] ) {
					cost = array_cost[array_point.length-1];
				}
				if ( y == array_point[i] ) {
					cost = array_cost[i-1];
				}
				if ( cost == undefined ) {
					cost = array_cost[0];
				}
			}
		}

		//console.log(x + "|" + cost);


		if ( type == "plus" ) {
			let calc_exp_let = +$('#calc_exp').val();
			var calc_exp_new = calc_exp_let - +cost;

			if ( calc_exp_new < 0 ) {
				calc_exp_new = calc_exp_new + +cost;
				let value = $('.calc__skills').find(number).val();
				$('.calc__skills').find(number).val( +value - 1 );
			} else {
				let score = +$('.calc__skills').find(number).attr("data-score") + +cost;
				$('.calc__skills').find(number).attr("data-score", score);
			}
		} else {
			let calc_exp_let = +$('#calc_exp').val();
			if ( calc_exp_let < calc_exp ) {
				var calc_exp_new = calc_exp_let + +cost;

				if ( calc_exp_new > 0 ) {
					let score = +$('.calc__skills').find(number).attr("data-score") - +cost;
					$('.calc__skills').find(number).attr("data-score", score);
				}
			} else {
				var calc_exp_new = calc_exp;
			}
		}

		$('#calc_exp').val( calc_exp_new );


	}


	$('#calc_itog').click(function(){
		$('.calc__block').css({display: "block"});

		$('.calc__step--result').css({display: "block"});
		$('.calc__result').append(`
			<div class="calc__string">
				<div class="calc__text calc__text--result">Стартовое количество опыта</div>
				<div class="calc__score">${calc_exp_start}</div>
			</div>

			<div class="calc__string">
				<div class="calc__text calc__text--result">Потрачено всего опыта</div>
				<div class="calc__score">${ +calc_exp_start - +$('#calc_exp').val() }</div>
			</div>
		`);

		let strings = $('.calc__skills').find(".calc__input--small").length;

		for( s = 0; s < strings; s++ ) {
			let name = $('.calc__skills').find(".calc__line:eq(" + s + ")").children().val();
			let score = $('.calc__skills').find("#calc_input_" + s).attr("data-score");
			let lvl = $('.calc__skills').find("#calc_input_" + s).val();
			$('.calc__result').append(`
				<div class="calc__string">
					<div class="calc__text calc__text--result">Потрачено опыта на "${name}" (уровень)</div>
					<div class="calc__score">${score} (${lvl})</div>
				</div>
			`);
		}

	});


});