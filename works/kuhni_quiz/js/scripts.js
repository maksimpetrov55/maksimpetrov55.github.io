$(document).ready(function() {

    var quiz_sides = "";
    var quiz_answer_3 = "";

    $('input[name=quiz_1]').change(function(){
        $('.quiz__buttons--1').find(".quiz__next--disabled").removeClass("quiz__next--disabled");
        $('.quiz__buttons--1').find(".quiz__note").fadeOut(0);
        let quiz_1_value = $('input[name=quiz_1]:checked').val();
        if ( quiz_1_value == "Прямая" ){
            quiz_sides = "A";
            $('.quiz__image').css({display: "none"});
            $('.quiz__image--1').css({display: "block"});
            $('.quiz__line--B').css({display: "none"});
            $('.quiz__line--C').css({display: "none"});
        }
        if ( quiz_1_value == "Угловая" ){
            quiz_sides = "AB";
            $('.quiz__image').css({display: "none"});
            $('.quiz__image--2').css({display: "block"});
            $('.quiz__line--B').css({display: "flex"});
            $('.quiz__line--C').css({display: "none"});
        }
        if ( quiz_1_value == "П-образная" ){
            quiz_sides = "ABC";
            $('.quiz__image').css({display: "none"});
            $('.quiz__image--3').css({display: "block"});
            $('.quiz__line--B').css({display: "flex"});
            $('.quiz__line--C').css({display: "flex"});
        }
        if ( quiz_1_value == "С островом" ){
            quiz_sides = "AB";
            $('.quiz__image').css({display: "none"});
            $('.quiz__image--4').css({display: "block"});
            $('.quiz__line--B').css({display: "flex"});
            $('.quiz__line--C').css({display: "none"});
        }
        if ( quiz_1_value == "Другая" ){
            quiz_sides = "";
            $('#quiz_2_2').prop("checked", true);
        } else {
            $('#quiz_2_2').prop("checked", false);
        }
    });

    $('input[name=quiz_2]').change(function(){
        $('.quiz__buttons--2').find(".quiz__next--disabled").removeClass("quiz__next--disabled");
        $('.quiz__buttons--2').find(".quiz__note").fadeOut(0);
    });

    $('.quiz__input').click(function(){
        $('#quiz_2_1').prop("checked", true);
    });

    $('input[name=quiz_3]').change(function(){
        $('.quiz__buttons--3').find(".quiz__next--disabled").removeClass("quiz__next--disabled");
        $('.quiz__buttons--3').find(".quiz__note").fadeOut(0);
    });

    $('input[name=quiz_3]').click(function(){
        quiz_answer_3 = "";
        if ( $(this).val() == "Ничего" ) {
            $('input[name=quiz_3]').prop("checked", false);
            $('#quiz_3_6').prop("checked", true);
            quiz_answer_3 = $(this).val()
        } else {
            $('#quiz_3_6').prop("checked", false);
            $('input[name=quiz_3]:checked').each(function(){
                quiz_answer_3 = quiz_answer_3 + $(this).val() + "; ";
            });
        }
    });

    $('input[name=quiz_4]').change(function(){
        $('.quiz__buttons--4').find(".quiz__next--disabled").removeClass("quiz__next--disabled");
        $('.quiz__buttons--4').find(".quiz__note").fadeOut(0);
    });

    $('input[name=quiz_5]').change(function(){
        $('.quiz__buttons--5').find(".quiz__next--disabled").removeClass("quiz__next--disabled");
        $('.quiz__buttons--5').find(".quiz__note").fadeOut(0);
    });



	$('.quiz__next').click(function(){

        if ( $(this).hasClass('quiz__next--disabled') ){
            $(this).prev().prev().fadeIn(300);
            setTimeout(() => {
                $(this).prev().prev().fadeOut(300);
            }, 2000);
        } else {
            $(this).prev().prev().fadeOut(0);

            let quiz_current_step = $('.quiz__step--show').attr("data-step");

            if ( $('input[name=quiz_1]:checked').val() == "Другая" && quiz_current_step == 1 ) {
                let quiz_current_id = "#quiz_step_" + quiz_current_step;
                let quiz_current_next = "#quiz_step_" + (+quiz_current_step + 2);
                $(quiz_current_id).removeClass("quiz__step--show");
                $(quiz_current_next).addClass("quiz__step--show");
            } else {
                let quiz_current_id = "#quiz_step_" + quiz_current_step;
                let quiz_current_next = "#quiz_step_" + (+quiz_current_step + 1);
                $(quiz_current_id).removeClass("quiz__step--show");
                $(quiz_current_next).addClass("quiz__step--show");
            }

            let quiz_bar = ( $('.quiz__step--show').attr("data-step") * 20);
            if ( quiz_bar == 100 ){
                $('.quiz__bar').css({width: "calc(" + quiz_bar + "% - 10px)"});
            } else {
                $('.quiz__bar').css({width: quiz_bar + "%"});
            }
            
            $('.quiz__progress p').text( "Расчет пройден на " + quiz_bar + "%" )
    
            $('.quiz__back').css({display: "block"});
            
            // $(quiz_current_id).fadeOut(300);
            // $(quiz_current_next).delay(300).fadeIn(300);

        }

    });



    $('.quiz__back').click(function(){

        let quiz_current_step = $('.quiz__step--show').attr("data-step");
        // let quiz_current_id = "#quiz_step_" + quiz_current_step;
        // let quiz_current_next = "#quiz_step_" + (+quiz_current_step - 1);


        if ( $('input[name=quiz_1]:checked').val() == "Другая" && quiz_current_step == 3 ) {
            let quiz_current_id = "#quiz_step_" + quiz_current_step;
            let quiz_current_next = "#quiz_step_" + (+quiz_current_step - 2);
            $(quiz_current_id).removeClass("quiz__step--show");
            $(quiz_current_next).addClass("quiz__step--show");
        } else {
            let quiz_current_id = "#quiz_step_" + quiz_current_step;
            let quiz_current_next = "#quiz_step_" + (+quiz_current_step - 1);
            $(quiz_current_id).removeClass("quiz__step--show");
            $(quiz_current_next).addClass("quiz__step--show");
        }

        let quiz_bar = ( $('.quiz__step--show').attr("data-step") * 20);
        if ( quiz_bar == 100 ){
            $('.quiz__bar').css({width: "calc(" + quiz_bar + "% - 10px)"});
        } else {
            $('.quiz__bar').css({width: quiz_bar + "%"});
        }
        
        $('.quiz__progress p').text( "Расчет пройден на " + quiz_bar + "%" )

        if ( quiz_current_step < 3 ) {
            $('.quiz__back').css({display: "none"});
        }

        // $(quiz_current_id).removeClass("quiz__step--show");
        // $(quiz_current_next).addClass("quiz__step--show");
        // $(quiz_current_id).fadeOut(300);
        // $(quiz_current_next).delay(300).fadeIn(300);

    });


    $('.quiz__complete').click(function(){

        if ( $(this).hasClass('quiz__next--disabled') ){
            $(this).prev().prev().fadeIn(300);
            setTimeout(() => {
                $(this).prev().prev().fadeOut(300);
            }, 2000);
        } else {

            $('.quiz__step--show').removeClass("quiz__step--show");
            $('.quiz__step--final').addClass("quiz__step--show");

            $('.quiz__right').css({display: "none"});
            $('.quiz__left').css({margin: "0"});

            if ( $('input[name=quiz_2]:checked').val() == "Размеры" ) {
                if ( quiz_sides == "A" ) {
                    var quiz_answer_2 = "Размеры: " + 
                    "A[" + $('#quiz_size_A').val() + "] ";
                }
                if ( quiz_sides == "AB" ) {
                    var quiz_answer_2 = "Размеры: " + 
                    "A[" + $('#quiz_size_A').val() + "] " +
                    "B[" + $('#quiz_size_B').val() + "] ";
                }
                if ( quiz_sides == "ABC" ) {
                    var quiz_answer_2 = "Размеры: " + 
                    "A[" + $('#quiz_size_A').val() + "] " +
                    "B[" + $('#quiz_size_B').val() + "] " +
                    "C[" + $('#quiz_size_C').val() + "] ";
                }
            } else {
                var quiz_answer_2 = $('input[name=quiz_2]:checked').val();
            }
    
            console.log(
                "Ответ 1: " + $('input[name=quiz_1]:checked').val() + "\n" +
                "Ответ 2: " + quiz_answer_2 + "\n" +
                "Ответ 3: " + quiz_answer_3 + "\n" +
                "Ответ 4: " + $('input[name=quiz_4]:checked').val() + "\n" +
                "Ответ 5: " + $('input[name=quiz_5]:checked').val()
            );

        }

        

    });


    scaling();

    $(window).resize(function(){

        scaling();

    });

    function scaling() {
        let window_width = $(window).width();
        let scale_rate = window_width / 1160 * 0.9;
        if ( window_width > 1200 ) {
            $('.quiz__body').css({transform: "scale(" + scale_rate + ")"});
            let quiz_height = $('.quiz__body').height();
            //alert(quiz_height * scale_rate); 
            $('.quiz').css({minHeight: (quiz_height * scale_rate) });
        } else {
            $('.quiz__body').css({transform: "scale(1)"});
            $('.quiz').css({minHeight: "auto" });
        }

    }


});