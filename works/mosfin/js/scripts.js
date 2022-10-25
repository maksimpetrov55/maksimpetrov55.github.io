$(document).ready(function() {


	$("#polzunok1").slider({
		animate: "slow",
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 3,
		slide : function(event, ui) {
			$("#result-polzunok1").val(ui.value);
            calculate();
		}
	});
	$( "#result-polzunok1" ).val($( "#polzunok1" ).slider( "value" ));
	
	$('#result-polzunok1').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok1" ).slider( "value", sliderInput );
	});


    $("#polzunok2").slider({
		animate: "slow",
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 5,
		slide : function(event, ui) {
			$("#result-polzunok2").val(ui.value);
            calculate();
		}
	});
	$( "#result-polzunok2" ).val($( "#polzunok2" ).slider( "value" ));
	
	$('#result-polzunok2').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok2" ).slider( "value", sliderInput );
	});


    $("#polzunok3").slider({
		animate: "slow",
		range: "min",
		value: 0,
		step: 1,
		min: 0,
		max: 150,
		slide : function(event, ui) {
			$("#result-polzunok3").val(ui.value);
            calculate();
		}
	});
	$( "#result-polzunok3" ).val($( "#polzunok3" ).slider( "value" ));
	
	$('#result-polzunok3').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok3" ).slider( "value", sliderInput );
	});


    $("#polzunok4").slider({
        //orientation: "vertical",
		animate: "slow",
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 2,
		slide : function(event, ui) {
			$("#result-polzunok4").val(ui.value);
            calculate();
		}
	});
	$( "#result-polzunok4" ).val($( "#polzunok4" ).slider( "value" ));
	
	$('#result-polzunok4').on("change", function(){
		var sliderInput = $(this).val();
		$( "#polzunok4" ).slider( "value", sliderInput );
	});


    $('.calc__people').change(function(){
        if ( $(this).val() == "" ) {
            $(this).val(0);
        }
    });

    // var calc_people_width = $('.calc__scale--people').width() / 6;
    // $('.calc__name--people').width( calc_people_width );

    $('.calc__checkbox').change(function(){
        calculate();
    });

    calculate();

    function calculate() {
        

        var calc_slider_1 = $('#result-polzunok1').val();        
        var calc_slider_2 = $('#result-polzunok2').val();    
        var calc_slider_3 = $('#result-polzunok3').val();
        var calc_slider_4 = $('#result-polzunok4').val();


        if ( $('#calc_check_1').is(":checked") ){ var calc_check_1 = $('#calc_check_1').val(); } else { var calc_check_1 = 0; }
        if ( $('#calc_check_2').is(":checked") ){ var calc_check_2 = $('#calc_check_2').val(); } else { var calc_check_2 = 0; }
        if ( $('#calc_check_3').is(":checked") ){ var calc_check_3 = $('#calc_check_3').val(); } else { var calc_check_3 = 0; }
        if ( $('#calc_check_4').is(":checked") ){ var calc_check_4 = $('#calc_check_4').val(); } else { var calc_check_4 = 0; }
        if ( $('#calc_check_5').is(":checked") ){ var calc_check_5 = $('#calc_check_5').val(); } else { var calc_check_5 = 0; }
        if ( $('#calc_check_6').is(":checked") ){ var calc_check_6 = $('#calc_check_6').val(); } else { var calc_check_6 = 0; }
        if ( $('#calc_check_7').is(":checked") ){ var calc_check_7 = $('#calc_check_7').val(); } else { var calc_check_7 = 0; }
        if ( $('#calc_check_8').is(":checked") ){ var calc_check_8 = $('#calc_check_8').val(); } else { var calc_check_8 = 0; }


        var calc_opions = 
        +calc_check_1 +
        +calc_check_2 +
        +calc_check_3 +
        +calc_check_4 +
        +calc_check_5 +
        +calc_check_6 +
        +calc_check_7 +
        +calc_check_8;

        // console.clear();
        // console.log(calc_slider_1);
        // console.log(calc_slider_2);
        // console.log(calc_slider_3);


        var calc_summ = 0;

        if ( calc_slider_1 == 1 ) {
            if ( calc_slider_2 == 1 ) { calc_summ = 4000 }
            if ( calc_slider_2 == 2 ) { calc_summ = 8000 }
            if ( calc_slider_2 == 3 ) { calc_summ = 12000 }
            if ( calc_slider_2 == 4 ) { calc_summ = 18000 }
            if ( calc_slider_2 == 5 ) { calc_summ = "Договорная" }
        }
        if ( calc_slider_1 == 2 ) {
            if ( calc_slider_2 == 1 ) { calc_summ = 6500 }
            if ( calc_slider_2 == 2 ) { calc_summ = 12000 }
            if ( calc_slider_2 == 3 ) { calc_summ = 16000 }
            if ( calc_slider_2 == 4 ) { calc_summ = 25000 }
            if ( calc_slider_2 == 5 ) { calc_summ = "Договорная" }
        }
        if ( calc_slider_1 == 3 ) {
            if ( calc_slider_2 == 1 ) { calc_summ = 7000 }
            if ( calc_slider_2 == 2 ) { calc_summ = 15000 }
            if ( calc_slider_2 == 3 ) { calc_summ = 20000 }
            if ( calc_slider_2 == 4 ) { calc_summ = 30000 }
            if ( calc_slider_2 == 5 ) { calc_summ = "Договорная" }
        }

        if ( calc_slider_4 == 1 ) { var calc_tarif = 1; }
        if ( calc_slider_4 == 2 ) { var calc_tarif = 1.5; }

        if ( calc_summ == "Договорная" ) {
            $('.calc__summ').html("Договорная");
            $('.calc__summ').addClass("calc__summ--bold");
        } else {

            calc_summ = (+calc_summ + (calc_slider_3 * 100) + calc_opions) * calc_tarif;

            $('.calc__summ').removeClass("calc__summ--bold");
            $('.calc__summ').html(`
                <span id="calc_summ">${calc_summ}</span> руб/мес
            `);
            
        }

    }


    $('.calc__name').click(function(){

        var calc_block = $(this).attr("data-block");
        var calc_position = $(this).attr("data-position");

        if ( calc_block == 1 ) {
            $('#result-polzunok1').val( calc_position );
            $('#result-polzunok1').change();
        }
        if ( calc_block == 2 ) {
            $('#result-polzunok2').val( calc_position );
            $('#result-polzunok2').change();
        }
        if ( calc_block == 3 ) {
            $('#result-polzunok3').val( calc_position );
            $('#result-polzunok3').change();
        }
        if ( calc_block == 4 ) {
            $('#result-polzunok4').val( calc_position );
            $('#result-polzunok4').change();
        }
    
        calculate();

    });


});