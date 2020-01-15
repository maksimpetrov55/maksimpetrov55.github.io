$(document).ready(function() {

	// $(".calc__section__flex__block").mouseenter(function(){
	// 	$(this).css({transform: "translateY(-3px)"});
	// });
	// $(".calc__section__flex__block").mouseleave(function(){
	// 	$(this).css({transform: "translateY(0px)"});
	// });




	$("#material_1").click(function(){
		$(".calc__section__flex--kamen2, .calc__section__flex--kamen3, .calc__section__flex--kamen4, .calc__section__flex--kamen5, .calc__section__flex--kamen6, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen1").css({display: "flex"});
	});
	$("#material_2").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen3, .calc__section__flex--kamen4, .calc__section__flex--kamen5, .calc__section__flex--kamen6, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen2").css({display: "flex"});
	});
	$("#material_3").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen2, .calc__section__flex--kamen4, .calc__section__flex--kamen5, .calc__section__flex--kamen6, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen3").css({display: "flex"});
	});
	$("#material_4").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen2, .calc__section__flex--kamen3, .calc__section__flex--kamen5, .calc__section__flex--kamen6, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen4").css({display: "flex"});
	});
	$("#material_5").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen2, .calc__section__flex--kamen3, .calc__section__flex--kamen4, .calc__section__flex--kamen6, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen5").css({display: "flex"});
	});
	$("#material_6").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen2, .calc__section__flex--kamen3, .calc__section__flex--kamen4, .calc__section__flex--kamen5, .calc__section__flex--kamen7").fadeOut(0);
		$(".calc__section__flex--kamen6").css({display: "flex"});
	});
	$("#material_7").click(function(){
		$(".calc__section__flex--kamen1, .calc__section__flex--kamen2, .calc__section__flex--kamen3, .calc__section__flex--kamen4, .calc__section__flex--kamen5, .calc__section__flex--kamen6").fadeOut(0);
		$(".calc__section__flex--kamen7").css({display: "flex"});
	});


	$("#type_1").click(function(){
		$(".calc__section__sizes--2, .calc__section__sizes--3, .calc__section__half__right__block--2, .calc__section__half__right__block--3").fadeOut(0);
		$(".calc__section__sizes--1, .calc__section__half__right__block--1").css({display: "flex"});
	});
	$("#type_2").click(function(){
		$(".calc__section__sizes--1, .calc__section__sizes--3, .calc__section__half__right__block--1, .calc__section__half__right__block--3").fadeOut(0);
		$(".calc__section__sizes--2, .calc__section__half__right__block--2").css({display: "flex"});
	});
	$("#type_3").click(function(){
		$(".calc__section__sizes--1, .calc__section__sizes--2, .calc__section__half__right__block--1, .calc__section__half__right__block--2").fadeOut(0);
		$(".calc__section__sizes--3, .calc__section__half__right__block--3").css({display: "flex"});
	});


	
	$("input[name=kamen-1]").change(function(){
		var vvv = $('input[name=kamen-1]:checked').val();
		console.log(vvv);
	});






	$(".calc__section__btn").click(function(){

		if ( $("#material_1").is(':checked') ) { 
			//var material = 1;
			var kamen_price = $("input[name=kamen-1]:checked").val();
		}

		if ( $("#material_2").is(':checked') ) { 
			//var material = 2;
			var kamen_price = $("input[name=kamen-2]:checked").val();
		}

		if ( $("#material_3").is(':checked') ) { 
			//var material = 3;
			var kamen_price = $("input[name=kamen-3]:checked").val();
		}

		if ( $("#material_4").is(':checked') ) { 
			//var material = 4;
			var kamen_price = $("input[name=kamen-4]:checked").val();
		}

		if ( $("#material_5").is(':checked') ) { 
			//var material = 5;
			var kamen_price = $("input[name=kamen-5]:checked").val();
		}

		if ( $("#material_6").is(':checked') ) { 
			//var material = 6;
			var kamen_price = $("input[name=kamen-6]:checked").val();
		}

		if ( $("#material_7").is(':checked') ) { 
			//var material = 7;
			var kamen_price = $("input[name=kamen-7]:checked").val();
		}

	
		if ( $("#type_1").is(':checked') ) { 
			var stol_A = $("#input_stol-1_1").val();
			var stol_B = $("#input_stol-1_2").val();
			var stol_C = 0;
			var stol_D = 0;
			var stol_E = 0;
			var stol_F = 0;
		}
		if ( $("#type_2").is(':checked') ) { 
			var stol_A = $("#input_stol-2_1").val();
			var stol_B = $("#input_stol-2_2").val();
			var stol_C = $("#input_stol-2_3").val();
			var stol_D = $("#input_stol-2_4").val();
			var stol_E = 0;
			var stol_F = 0;
		}
		if ( $("#type_3").is(':checked') ) { 
			var stol_A = $("#input_stol-3_1").val();
			var stol_B = $("#input_stol-3_2").val();
			var stol_C = $("#input_stol-3_3").val();
			var stol_D = $("#input_stol-3_4").val();
			var stol_E = $("#input_stol-3_5").val();
			var stol_F = $("#input_stol-3_6").val();
		}


		var profile_price = $("input[name=profile]:checked").val();
		var plintus_price = $("input[name=plintus]:checked").val();


		var itog = +kamen_price * ( +stol_A/1000 + +stol_B/1000 + +stol_C/1000 + +stol_D/1000 + +stol_E/1000 + +stol_F/1000 ) + +profile_price + +plintus_price;
		$(".calc__section__itogo-value").html( itog.toFixed(2) + " руб.");
	});



	$("#walls-1_1").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-1_1").css({display: "block"});} else {$(".calc__section__half__right__block__border-1_1").css({display: "none"});}
	});
	$("#walls-1_2").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-1_2").css({display: "block"});} else {$(".calc__section__half__right__block__border-1_2").css({display: "none"});}
	});
	$("#walls-1_3").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-1_3").css({display: "block"});} else {$(".calc__section__half__right__block__border-1_3").css({display: "none"});}
	});

	$("#walls-2_1").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-2_1").css({display: "block"});} else {$(".calc__section__half__right__block__border-2_1").css({display: "none"});}
	});
	$("#walls-2_2").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-2_2").css({display: "block"});} else {$(".calc__section__half__right__block__border-2_2").css({display: "none"});}
	});
	$("#walls-2_3").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-2_3").css({display: "block"});} else {$(".calc__section__half__right__block__border-2_3").css({display: "none"});}
	});
	$("#walls-2_4").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-2_4").css({display: "block"});} else {$(".calc__section__half__right__block__border-2_4").css({display: "none"});}
	});

	$("#walls-3_1").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-3_1").css({display: "block"});} else {$(".calc__section__half__right__block__border-3_1").css({display: "none"});}
	});
	$("#walls-3_2").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-3_2").css({display: "block"});} else {$(".calc__section__half__right__block__border-3_2").css({display: "none"});}
	});
	$("#walls-3_3").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-3_3").css({display: "block"});} else {$(".calc__section__half__right__block__border-3_3").css({display: "none"});}
	});
	$("#walls-3_4").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-3_4").css({display: "block"});} else {$(".calc__section__half__right__block__border-3_4").css({display: "none"});}
	});
	$("#walls-3_5").change(function(){
		if ($(this).is(':checked')) {$(".calc__section__half__right__block__border-3_5").css({display: "block"});} else {$(".calc__section__half__right__block__border-3_5").css({display: "none"});}
	});


});