$(document).ready(function() {

	for ( w = 0; w < arr_patterns.length; w++ ) {
		let name = arr_patterns[w].name;
		$('#calc_pattern').append(`<option value="${w}">${name}</option>`);
	}


	$('#calc_pattern').change(function(){
		let pattern = $(this).val();
		create(pattern);
		code();
	});

	create(0);

	function create(c){
		$('.calc__skills').empty();
		let exp = arr_patterns[c].exp;
		let set = arr_patterns[c].set;
		let skills = arr_patterns[c].skills;
		let lines = skills.split("|");

		for (l = 0; l < lines.length; l++){
			let line_name = lines[l];
			$('.calc__skills').append(`
				<div class="calc__line"><div class="calc__del">✕</div><input type="text" class="calc__input calc__input--text" value="${line_name}"><div class="calc__control"><div class="calc__minus">–</div><input type="text" class="calc__input calc__input--small" disabled data-score="0" value="1"><div class="calc__plus">+</div></div></div>
			`);
		}

		$('#calc_exp').val(exp);
		calc_exp_start = $('#calc_exp').val();
		$('.calc__textarea').val(set);

	}


	var calc_exp = +$('#calc_exp').val();
	var calc_exp_start = calc_exp;
	$('#calc_exp').change(function(){
		calc_exp = $(this).val();
		calc_exp_start = calc_exp;
		$('.calc__skills').find('.calc__input--small').val(1);
		code();
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
			<div class="calc__line"><div class="calc__del">✕</div>
				<input type="text" class="calc__input calc__input--text" value="- - -"><div class="calc__control"><div class="calc__minus">–</div><input type="text" class="calc__input calc__input--small" disabled data-score="0" value="1"><div class="calc__plus">+</div></div>
			</div>
		`);
		input_numbering();
		code();
	});

	$('.calc__skills').on("change", ".calc__input", function(){
		let value = $(this).val();
		if ( value < 1 ) {
			$(this).val(1);
		}
		//point_change( value );
		code();
	});


	$('.calc__skills').on("click", ".calc__minus",function(){
		let value = $(this).next().val();
		if ( value > 1 ) {
			$(this).next().val( +value - 1 );
		}
		let type = "minus";
		let number = "#" + $(this).next().attr("id");
		point_change( $(this).next().val(), value, type, number );
		code();
	});

	$('.calc__skills').on("click", ".calc__plus",function(){
		let value = $(this).prev().val();
		if ( value > 0 ) {
			$(this).prev().val( +value + 1 );
		}
		let type = "plus";
		let number = "#" + $(this).prev().attr("id");
		point_change( $(this).prev().val(), value, type, number );
		code();
	});

	$('#calc_grad').change(function(){
		grad();
		code();
	});

	var array_point = [];
	var array_cost = [];

	grad();
	function grad() {
		// var point = $('.calc__textarea').val().split("=")[0];
		// var cost = $('.calc__textarea').val().split("=")[1];

		var array_grad = $('.calc__textarea').val().split(";");

		//var array_length = array_grad.length;
		//var array_last = array[array_length-1].split("=")[0];

		

		for( a = 0; a < array_grad.length; a++) {
			array_point.push( array_grad[a].split("=")[0] );
			array_cost.push( array_grad[a].split("=")[1] );
		}

		console.log(array_point);
		console.log(array_cost);
		var cost = array_cost[0];
	}
	

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
			let name = $('.calc__skills').find(".calc__line:eq(" + s + ")").children().next().val();
			//console.log(name);
			let score = $('.calc__skills').find("#calc_input_" + s).attr("data-score");
			console.log(score);
			let lvl = $('.calc__skills').find("#calc_input_" + s).val();
			$('.calc__result').append(`
				<div class="calc__string">
					<div class="calc__text calc__text--result">Потрачено опыта на "${name}" (уровень)</div>
					<div class="calc__score">${score} (${lvl})</div>
				</div>
			`);
		}

		code();

	});



	$('.calc__skills').on("click", ".calc__del",function(){
		$(this).parent().remove();
		code();
	});




	if ( localStorage.getItem('code') ) {

		interpretation( localStorage.getItem('code') );

    }



	function interpretation(insert) {
		let read_full = insert;
		let read_array = read_full.split("&");
		let read_pattern = read_array[0];
		let read_exp = read_array[1];
		let read_names = read_array[2].split("|");
		let read_values = read_array[3].split("|");
		let read_score = read_array[4].split("|");
		let read_grad = read_array[5];

		$('#calc_pattern').val(read_pattern);
		$('#calc_exp').val(read_exp);
		calc_exp_start = $('#calc_exp').val();
		$('#calc_grad').val(read_grad);

		$('.calc__skills').empty();
		for( r = 0; r < read_names.length; r++ ){
			let line_name = read_names[r];
			let line_value = read_values[r];
			let line_score = read_score[r];
			$('.calc__skills').append(`
				<div class="calc__line"><div class="calc__del">✕</div><input type="text" class="calc__input calc__input--text" value="${line_name}"><div class="calc__control"><div class="calc__minus">–</div><input type="text" class="calc__input calc__input--small" disabled data-score="${line_score}" value="${line_value}"><div class="calc__plus">+</div></div></div>
			`);
		}

		input_numbering();
		//console.log("read_full " + read_full);
	}



	code();
	function code() {
		//console.log( "code" );

		let part_pattern = $('#calc_pattern').val();
		let part_exp = $('#calc_exp').val();
		let part_names = "";
		let part_values = "";
		let part_score = "";
		let part_qua = $('.calc__skills').find(".calc__input--small").length;
		for (n = 0; n < part_qua; n++) {

			if ( n != (part_qua - 1) ){
				part_names = part_names + $('.calc__skills').find(".calc__input--text").eq(n).val() + "|";
				part_values = part_values + $('.calc__skills').find(".calc__input--small").eq(n).val() + "|";
				part_score = part_score + $('.calc__skills').find(".calc__input--small").eq(n).attr("data-score") + "|";
			} else {
				part_names = part_names + $('.calc__skills').find(".calc__input--text").eq(n).val();
				part_values = part_values + $('.calc__skills').find(".calc__input--small").eq(n).val();
				part_score = part_score + $('.calc__skills').find(".calc__input--small").eq(n).attr("data-score");
			}
			
		}
		let part_grad = $('#calc_grad').val();

		let full_code = 
		part_pattern + "&" +		
		part_exp + "&" +
		part_names + "&" +
		part_values + "&" +
		part_score + "&" +
		part_grad;

		$('#calc_code').val( full_code );

		localStorage.setItem('code', full_code);
		//console.log("write " + localStorage.getItem('code') );
	}



	$('#calc_reset').click(function(){
		localStorage.setItem('code', "");
		create( $('#calc_pattern').val() );
		input_numbering();
		code();
		if ( location.hash != "" ) {
			location.href = location.href.split("#")[0];
		} else {
			location.reload();
		}

	});


	$('#calc_code').change(function(){
		interpretation( $(this).val() );
	});


	if ( location.hash != "" ) {
		$('#calc_pattern').val( +location.hash.split("#")[1] - 1 );
		$('#calc_pattern').trigger("change");
		input_numbering();
		code();
	}
	

});