$(document).ready(function() {

	var today = new Date();
	var time = new Date( today.getTime() + (24 * 3600 * 1000 * 2 ) );

	var timeD = time.getDate();
	var timeM = time.getMonth() + 1;
	var timeY = time.getFullYear();

	if ( timeM < 10 ) {timeM = "0" + timeM;}
	if ( timeD < 10 ) {timeD = "0" + timeD;}

	$('#inp1').val( timeY + "-" + timeM + "-" + timeD );

	var inp1 = $('#inp1').val();
	var date_check = new Date(inp1);
	var date_90 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (90 + 1) ) ));
	var date_180 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (180 + 1) ) ));

	var date_90_value = new Date(date_90);
	var date_180_value = new Date(date_180);

	if ( inp1 != "" ){
		$('.calc__date--90').text( date_90_value.getDate() + "." + (date_90_value.getMonth() + 1) + "." + date_90_value.getFullYear() );
		$('.calc__date--180').text( date_180_value.getDate() + "." + (date_180_value.getMonth() + 1) + "." + date_180_value.getFullYear() );
	}



	$('input').change(function(){

		var inp1 = $('#inp1').val();

		var date_check = new Date(inp1);
		var date_90 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (90 + 1) ) ));
		var date_180 = Math.ceil(Math.abs(date_check.getTime() - (24 * 3600 * 1000 * (180 + 1) ) ));

		console.log( new Date(date_90) );
		console.log( new Date(date_180) );

		var date_90_value = new Date(date_90);
		var date_180_value = new Date(date_180);

		if ( inp1 != "" ){
			$('.calc__date--90').text( date_90_value.getDate() + "." + (date_90_value.getMonth() + 1) + "." + date_90_value.getFullYear() );
			$('.calc__date--180').text( date_180_value.getDate() + "." + (date_180_value.getMonth() + 1) + "." + date_180_value.getFullYear() );
		}

		var inp2 = $('#inp2').val();
		var inp3 = $('#inp3').val();
		var inp4 = $('#inp4').val();
		var inp5 = $('#inp5').val();


		$('.calc__line--date').each(function(){

			let value1 = $(this).find(".calc__input--date1").val();
			let value2 = $(this).find(".calc__input--date2").val();
			let count = $(this).find(".calc__count");

			
			let date1 = new Date(value1);
			let date2 = new Date(value2);
			
			if ( date1 > date_check.getTime() ) {
				date1 = new Date(inp1);
				$(this).find(".calc__input--date1").val( inp1 );
			}

			if ( date2 > date_check.getTime() ) {
				date2 = new Date(inp1);
				$(this).find(".calc__input--date2").val( inp1 );
			}

			if ( value1 != "" && value2 != "" ) {
				let date_calculation = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1;
				count.text( date_calculation );
			}

			if ( date1.getTime() < date_180_value.getTime() ) {
				var date_start = date_180_value.getTime();
				var date_cut = Math.ceil( Math.abs(date2.getTime() - date_start ) / (1000 * 3600 * 24)) + 1;
				var date_calculation = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1;
				$('.calc__diff').text( date_calculation - date_cut );
				$('.calc__mark').text( 1 );
				console.log( $('.calc__diff').text() );
			}

		});


		var count_summ = 0;

		$(".calc__count").each(function(){
			count_summ = count_summ + +$(this).text();
		});

		if ( $('.calc__mark').text() == 1 ) {
			count_summ = count_summ - +$('.calc__diff').text();
		}

		console.log(count_summ);

		var count_itog = 90 - +count_summ;

		if ( count_itog >= 0 ) {
			$('.calc__result').text( "Ваш возможный срок пребывания (дней) — " + count_itog );
		} else {
			$('.calc__result').text( "Ваш возможный срок пребывания (дней) — " + 0 );
		}

	});

});