$(document).ready(function() {

	var Tax_Rates_Eligible = [
		{
			Year: 2022,
			GrossUp: 38,
			Federal: 15.02,
			AB: 8.12,
			BC: 12,
			MB: 8,
			NB: 14,
			NL: 6.30,
			NS: 8.85,
			NT: 11.50,
			NU: 5.51,
			ON: 10.00,
			PE: 10.50,
			QC: 11.70,
			SK: 11,
			YT: 12.02
		},
		{
			Year: 2021,
			GrossUp: 38,
			Federal: 15.02,
			AB: 8.12,
			BC: 12,
			MB: 8,
			NB: 14,
			NL: 5.40,
			NS: 8.85,
			NT: 11.50,
			NU: 5.51,
			ON: 10.00,
			PE: 10.50,
			QC: 11.70,
			SK: 11,
			YT: 12.02
		},
		{
			Year: 2020,
			GrossUp: 38,
			Federal: 15.02,
			AB: 10,
			BC: 12,
			MB: 8,
			NB: 14,
			NL: 5.40,
			NS: 8.85,
			NT: 11.50,
			NU: 5.51,
			ON: 10.00,
			PE: 10.50,
			QC: 11.70,
			SK: 11,
			YT: 12.02
		}
	];

	var Tax_Rates_nonEligible = [
        {
            Year: 2022,
            GrossUp: 15,
            Federal: 9.03,
            AB: 2.18,
            BC: 1.96,
            MB: 0.78,
            NB: 2.75,
            NL: 3.20,
            NS: 2.99,
            NT: 6,
            NU: 2.61,
            ON: 2.99,
            PE: 1.3,
            QC: 3.42,
            SK: 2.11,
            YT: 0.67
        },
        {
            Year: 2021,
            GrossUp: 15,
            Federal: 9.03,
            AB: 2.18,
            BC: 1.96,
            MB: 0.78,
            NB: 2.75,
            NL: 3.50,
            NS: 2.99,
            NT: 6,
            NU: 2.61,
            ON: 2.99,
            PE: 1.96,
            QC: 4.01,
            SK: 1.70,
            YT: 0.67
        },
        {
            Year: 2020,
            GrossUp: 15,
            Federal: 9.03,
            AB: 2.18,
            BC: 1.96,
            MB: 0.78,
            NB: 2.75,
            NL: 3.50,
            NS: 2.99,
            NT: 6,
            NU: 2.61,
            ON: 2.99,
            PE: 2.74,
            QC: 4.77,
            SK: 3.36,
            YT: 2.30
        }
    ];



	$('input').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		calculation();
	});


	$('#calc_dividend').change(function(){

		if ( $('#calc_dividend').val() == "eligible" ) {
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

		var year = +$('#calc_year').val();
		var province = $('#calc_province').val();
	

		var inp_1 = $('#inp_1').val().split(',').join('');
		var inp_4 = $('#inp_4').val().split(',').join('');


		if ( $('#calc_dividend').val() == "eligible" ) {

			if ( province == "AB" ) {var province_rate = Tax_Rates_Eligible[year].AB;}
			if ( province == "BC" ) {var province_rate = Tax_Rates_Eligible[year].BC;}
			if ( province == "MB" ) {var province_rate = Tax_Rates_Eligible[year].MB;}
			if ( province == "NB" ) {var province_rate = Tax_Rates_Eligible[year].NB;}
			if ( province == "NL" ) {var province_rate = Tax_Rates_Eligible[year].NL;}
			if ( province == "NS" ) {var province_rate = Tax_Rates_Eligible[year].NS;}
			if ( province == "NT" ) {var province_rate = Tax_Rates_Eligible[year].NT;}
			if ( province == "NU" ) {var province_rate = Tax_Rates_Eligible[year].NU;}
			if ( province == "ON" ) {var province_rate = Tax_Rates_Eligible[year].ON;}
			if ( province == "PE" ) {var province_rate = Tax_Rates_Eligible[year].PE;}
			if ( province == "QC" ) {var province_rate = Tax_Rates_Eligible[year].QC;}
			if ( province == "SK" ) {var province_rate = Tax_Rates_Eligible[year].SK;}
			if ( province == "YT" ) {var province_rate = Tax_Rates_Eligible[year].YT;}
			
			var inp_2 = ((Tax_Rates_Eligible[year].GrossUp * inp_1 / 100) + +inp_1).toLocaleString("en");
			var inp_3 = (Tax_Rates_Eligible[year].Federal * inp_2.split(',').join('') / 100).toLocaleString("en")

			$('#inp_2').val( inp_2 );
			$('#inp_3').val( inp_3 );

			var inp_7 = inp_3;
			var inp_8 = inp_2.split(',').join('') * province_rate / 100;

		} else {

			if ( province == "AB" ) {var province_rate = Tax_Rates_nonEligible[year].AB;}
			if ( province == "BC" ) {var province_rate = Tax_Rates_nonEligible[year].BC;}
			if ( province == "MB" ) {var province_rate = Tax_Rates_nonEligible[year].MB;}
			if ( province == "NB" ) {var province_rate = Tax_Rates_nonEligible[year].NB;}
			if ( province == "NL" ) {var province_rate = Tax_Rates_nonEligible[year].NL;}
			if ( province == "NS" ) {var province_rate = Tax_Rates_nonEligible[year].NS;}
			if ( province == "NT" ) {var province_rate = Tax_Rates_nonEligible[year].NT;}
			if ( province == "NU" ) {var province_rate = Tax_Rates_nonEligible[year].NU;}
			if ( province == "ON" ) {var province_rate = Tax_Rates_nonEligible[year].ON;}
			if ( province == "PE" ) {var province_rate = Tax_Rates_nonEligible[year].PE;}
			if ( province == "QC" ) {var province_rate = Tax_Rates_nonEligible[year].QC;}
			if ( province == "SK" ) {var province_rate = Tax_Rates_nonEligible[year].SK;}
			if ( province == "YT" ) {var province_rate = Tax_Rates_nonEligible[year].YT;}

			var inp_5 = ((Tax_Rates_nonEligible[year].GrossUp * inp_4 / 100) + +inp_4).toLocaleString("en");
			var inp_6 = (Tax_Rates_nonEligible[year].Federal * inp_5.split(',').join('') / 100).toLocaleString("en")

			$('#inp_5').val( inp_5 );
			$('#inp_6').val( inp_6 );

			var inp_7 = inp_6;
			var inp_8 = inp_5.split(',').join('') * province_rate / 100;

		}

		$('#inp_7').val( inp_7.toLocaleString("en") );
		$('#inp_8').val( inp_8.toLocaleString("en") );

	}



	$('.calc__tip').hover(function(){
		$(this).next().css({display: "block"});
	}, function(){
		$(this).next().css({display: "none"});
	});




});