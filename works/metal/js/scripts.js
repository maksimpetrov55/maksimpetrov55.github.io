$(document).ready(function() {

	$('input[name=prokat_type]').on("change", function(){
		let this_value = +$(this).val() - 1;
		console.log(this_value);
		$('.calc__section').addClass("calc__section--hidden");
		$('.calc__section:eq(' + this_value + ')').removeClass("calc__section--hidden");
	});

	$('#calc_material').empty();
	let materialList = document.querySelector('#calc_material');

	for ( let i = 0; i < 62; i++ ) {
		let materialOption = document.createElement('option');
		materialOption.innerHTML = a_stal[i].name;
		materialOption.className = "calc__option";
		materialList.appendChild( materialOption );
	}
	var material_value = 7760;
	$('#type_value').text(material_value);

	$('#calc_select').on("change", function(){
		if ( $(this).val() == "Сталь" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');
		
			for ( let i = 0; i < a_stal.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_stal[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 7760;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Чугун" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');
		
			for ( let i = 0; i < a_chugun.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_chugun[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 6800;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Аллюминий" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');
		
			for ( let i = 0; i < a_allum.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_allum[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 2470;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Бронза" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');
		
			for ( let i = 0; i < a_bronze.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_bronze[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 8200;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Латунь" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');

			for ( let i = 0; i < a_latun.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_latun[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 8400;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Медь" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');

			for ( let i = 0; i < a_med.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_med[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 8940;
			$('#type_value').text(material_value);
		}
		if ( $(this).val() == "Титан" ) {
			$('#calc_material').empty();
			let materialList = document.querySelector('#calc_material');

			for ( let i = 0; i < a_titan.length; i++ ) {
				let materialOption = document.createElement('option');
				materialOption.innerHTML = a_titan[i].name;
				materialOption.className = "calc__option";
				materialList.appendChild( materialOption );
			}
			var material_value = 4510;
			$('#type_value').text(material_value);
		}
	});

	$('#calc_material').on("change", function(){

		if ( $("#calc_select").val() == "Сталь" ) {
			
			type_ID = a_stal.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_stal.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Чугун" ) {

			type_ID = a_chugun.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_chugun.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Аллюминий" ) {
			
			type_ID = a_allum.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_allum.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Бронза" ) {
			
			type_ID = a_bronze.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_bronze.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Латунь" ) {
			
			type_ID = a_latun.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_latun.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Медь" ) {
			
			type_ID = a_med.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_med.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}
		if ( $("#calc_select").val() == "Титан" ) {
			
			type_ID = a_titan.find( i2 => i2.name === $(this).val() ).id;
			type_Value = a_titan.find( n2 => n2.name === $(this).val() ).value;
			
			$('#type_value').text(type_Value);

		}

	});

	$('.calc__input--dlina').on("change", function(){
		$(this).parent().parent().find(".calc__input--massa").val("");
	});
	$('.calc__input--massa').on("change", function(){
		$(this).parent().parent().find(".calc__input--dlina").val("");
	});

	$('.calc__button').click(function(){
		calculation();
	});

	function calculation() {
		var calc_type = $('input[name=prokat_type]:checked').val();
		var p = +$('#type_value').text();
		
		if ( calc_type == 1 ) {
			
			var h1 = +$('#type_1_visota').val() / 1000;
			var w1 = +$('#type_1_shirina').val() / 1000;
			var t1 = +$('#type_1_tolshina').val() / 1000;
			var q1 = +$('#type_1_kolvo').val();
			var result_1 = (h1 * w1 * t1) * p * q1; 
			$('#type_1_massa').val( result_1.toFixed(3) ) ;

		}
		if ( calc_type == 2 ) {
			if ( $('#type_2_dlina').val() != "" ) {
				var l2 = +$('#type_2_dlina').val();
				var d2 = +$('#type_2_diametr').val() / 1000;
				var t2 = +$('#type_2_tolshina').val() / 1000;
				var result_2 = 3.141592 * ( ((d2/2) ** 2) - ((d2/2 - t2) ** 2) ) * l2 * p;
				$('#type_2_massa').val( result_2.toFixed(3) ) ;
			} else {
				var m2 = +$('#type_2_massa').val();
				var d2 = +$('#type_2_diametr').val() / 1000;
				var t2 = +$('#type_2_tolshina').val() / 1000;
				var result_2 = m2 / ( 3.141592 * ( ((d2/2) ** 2) - ((d2/2 - t2) ** 2) ) * p );
				$('#type_2_dlina').val( result_2.toFixed(3) ) ;
			}
		}
		if ( calc_type == 3 ) {
			if ( $('#type_3_dlina').val() != "" ) {
				var l3 = +$('#type_3_dlina').val();
				var d3 = +$('#type_3_diametr').val() / 1000;
				var result_3 = 3.141592 * ( (d3/2) ** 2) * l3 * p;
				$('#type_3_massa').val( result_3.toFixed(3) ) ;
			} else {
				var m3 = +$('#type_3_massa').val();
				var d3 = +$('#type_3_diametr').val() / 1000;
				var result_3 = m3 / ( 3.141592 * ( (d3/2) ** 2) * p );
				$('#type_3_dlina').val( result_3.toFixed(3) ) ;
			}
		}
		if ( calc_type == 4 ) {
			if ( $('#type_4_dlina').val() != "" ) {
				var l4 = +$('#type_4_dlina').val();
				var t4 = +$('#type_4_tolshina').val() / 1000;
				var h4 = +$('#type_4_visota').val() / 1000;
				var w4 = +$('#type_4_shirina').val() / 1000;
				var result_4 = ( (h4 * w4) - ((h4-t4) * (w4-t4)) ) * l4 * p;
				$('#type_4_massa').val( result_4.toFixed(3) ) ;
			} else {
				var m4 = +$('#type_4_massa').val();
				var h4 = +$('#type_4_visota').val() / 1000;
				var w4 = +$('#type_4_shirina').val() / 1000;
				var result_4 = 
				$('#type_4_dlina').val( result_4.toFixed(3) ) ;
			}
		}
		if ( calc_type == 5 ) {
			if ( $('#type_5_dlina').val() != "" ) {
				var l5 = +$('#type_5_dlina').val();
				var h5 = +$('#type_5_visota').val() / 1000;
				var result_5 = (h5 ** 2) * l5 * p; 
				$('#type_5_massa').val( result_5.toFixed(3) ) ;
			} else {
				var m5 = +$('#type_5_massa').val();
				var h5 = +$('#type_5_visota').val() / 1000;
				var result_5 = m5 / ((h5 ** 2) * p); 
				$('#type_5_dlina').val( result_5.toFixed(3) ) ;
			}
		}
		if ( calc_type == 6 ) {
			if ( $('#type_6_dlina').val() != "" ) {
				var l6 = +$('#type_6_dlina').val();
				var d6 = +$('#type_6_diametr').val() / 1000;
				var result_6 = (0.866 * (d6 ** 2)) * l6 * p;
				$('#type_6_massa').val( result_6.toFixed(3) ) ;
			} else {
				var m6 = +$('#type_6_massa').val();
				var d6 = +$('#type_6_diametr').val() / 1000;
				var result_6 = m6 / ((0.866 * (d6 ** 2)) * p);
				$('#type_6_dlina').val( result_6.toFixed(3) );
			}
		}

	}

});