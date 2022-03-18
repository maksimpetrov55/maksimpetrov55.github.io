$(document).ready(function() {

	var rates = [
		{province: "AB", rateType: "GST", 		PST_QST: "0", 		GST: "5", HST: "0", 	total: "5"},
		{province: "BC", rateType: "GST+PST", 	PST_QST: "7", 		GST: "5", HST: "0", 	total: "12"},
		{province: "MB", rateType: "GST+PST", 	PST_QST: "7", 		GST: "5", HST: "0", 	total: "12"},
		{province: "NB", rateType: "HST", 		PST_QST: "0", 		GST: "0", HST: "15", 	total: "15"},
		{province: "NL", rateType: "HST", 		PST_QST: "0", 		GST: "0", HST: "15", 	total: "15"},
		{province: "NS", rateType: "GST", 		PST_QST: "0", 		GST: "5", HST: "0", 	total: "5"},
		{province: "NT", rateType: "HST", 		PST_QST: "0", 		GST: "0", HST: "15", 	total: "15"},
		{province: "NU", rateType: "GST", 		PST_QST: "0", 		GST: "5", HST: "0", 	total: "5"},
		{province: "ON", rateType: "HST", 		PST_QST: "0", 		GST: "0", HST: "13", 	total: "13"},
		{province: "PE", rateType: "HST", 		PST_QST: "0", 		GST: "0", HST: "15", 	total: "15"},
		{province: "QC", rateType: "GST+QST", 	PST_QST: "9.98", 	GST: "5", HST: "0", 	total: "14.98"},
		{province: "SK", rateType: "GST+PST", 	PST_QST: "6", 		GST: "5", HST: "0", 	total: "11"},
		{province: "YT", rateType: "GST", 		PST_QST: "0", 		GST: "5", HST: "0", 	total: "5"}
	]





	$('input').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculation();
	});


	$('#calc_based').change(function(){

		if ( $('#calc_based').val() == "gross" ) {
			$('#block_3').css({display: "block"});
			$('#block_4').css({display: "none"});
		} else {
			$('#block_3').css({display: "none"});
			$('#block_4').css({display: "block"});
		}

	});


	$('input[name=calc_choice]').change(function(){

		if ( $('input[name=calc_choice]:checked').val() == 1 ) {
			$('#block_1').css({display: "block"});
			$('#block_2').css({display: "none"});
		} else {
			$('#block_1').css({display: "none"});
			$('#block_2').css({display: "block"});
		}

	});
	

	$('.calc__select').change(function(){
		calculation();
	});

	calculation();

	function calculation() {


		var province = $('#calc_province').val();
	

		var inp_1 = $('#inp_1').val().split(',').join('');

		var inp_2 = inp_1 * (rates[province].GST / 100) / (1 + (rates[province].total / 100));
		var inp_3 = inp_1 * (rates[province].PST_QST / 100) / (1 + (rates[province].total / 100));
		var inp_4 = inp_1 * (rates[province].HST / 100) / (1 + (rates[province].total / 100));
		var inp_5 = +inp_1 - +inp_2 - +inp_3 - +inp_4;

		$('#inp_2').val( inp_2.toLocaleString("en") );
		$('#inp_3').val( inp_3.toLocaleString("en") );
		$('#inp_4').val( inp_4.toLocaleString("en") );
		$('#inp_5').val( inp_5.toLocaleString("en") );


		var inp_6 = $('#inp_6').val().split(',').join('');

		var inp_7 = inp_6 * (rates[province].GST / 100);
		var inp_8 = inp_6 * (rates[province].PST_QST / 100);
		var inp_9 = inp_6 * (rates[province].HST / 100);
		var inp_10 = +inp_6 + +inp_7 + +inp_8 + +inp_9;

		$('#inp_7').val( inp_7.toLocaleString("en") );
		$('#inp_8').val( inp_8.toLocaleString("en") );
		$('#inp_9').val( inp_9.toLocaleString("en") );
		$('#inp_10').val( inp_10.toLocaleString("en") );



		var calc_supplies = $('#calc_supplies').val();
		var calc_small = $('#calc_small').val();
		var calc_provide = $('#calc_provide').val();

		if ( calc_supplies == "yes" && calc_small == "no" ) {
			$('#calc_text_1').text( "Yes, you have to register for a GST/HST account with CRA - DO IT ASAP!" );
		} else {
			if ( calc_provide == "exempt" ) {
				$('#calc_text_1').text( "You cannot register if you provide exempt supplies!" );
			} else {
				$('#calc_text_1').text( "No, but you can voluntarily register for the GST/HST account!" );
			}
		}

		if ( calc_small == "yes" ) {
			$('#calc_text_2').text("It may be beneficial because you can claim input tax credits (ITCs) for the amount of GST/HST paid on business expenses which can exceed the GST/HST collected and result in a refund.");
		} else {
			if ( calc_provide == "zero" ) {
				$('#calc_text_2').text("Yes, registration is recommended because you will be able to refund the GST/HST you pay on business expenses!");
			} else {
				$('#calc_text_2').text("");
			}
		}


	}



	$('.calc__tip').hover(function(){
		$(this).next().css({display: "block"});
	}, function(){
		$(this).next().css({display: "none"});
	});

	

	$('.calc__plus').click(function(){
		if ( $(this).text() == "+" ) {
			$(this).text("–");
		} else {
			$(this).text("+");
		}
		$(this).parent().next().toggleClass("calc__info--open");
	});


});