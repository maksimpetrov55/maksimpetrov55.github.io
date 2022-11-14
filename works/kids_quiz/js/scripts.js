$(document).ready(function() {

    // $('.quiz__img').each(function(){
    //     let img_width = $(this).width();
    //     let body_width = $('.quiz__body').width();
    //     let img_new = (img_width * 2);
    //     if ( img_new < body_width ) {
    //         $(this).css({width: img_new});
    //     }
    //     if ( img_new < 300 ) {
    //         $(this).css({width: "300"});
    //     }
    // });


    $('.quiz__back, .quiz__next, .quiz__confirm').click(function(){
        img_size();
        // setTimeout(() => {
        //     $('.quiz__answer').addClass("quiz__answer--show");
        // }, 300);
    });

    function img_size() {
        setTimeout(() => {
            $('.quiz__answer').each(function(){
                
                var answer_width = $(this).width();
                var answer_height = $(this).height();
                
                console.log(
                    answer_width + " x " + answer_height
                );
        
                if ( answer_width > answer_height ) {
                    $(this).css({width: "80%"});
                    $(this).css({height: "auto"});
                }
                if ( answer_width < answer_height ) {
                    $(this).css({height: "80%"});
                    $(this).css({width: "auto"});
                }
        
            });
            
        }, 200);
    }

    



    $('.quiz__confirm').click(function(){
        quiz_start();
    });

    $('.quiz__buttons').each(function(){
        if ( $(this).attr("data-step") != "1" ) {
            $(this).find(".quiz__back").addClass("quiz__back--active");
        }
        if ( $(this).attr("data-step") != "3" ) {
            $(this).find(".quiz__next").addClass("quiz__next--active");
        }
        if ( $(this).attr("data-step") == "3" ) {
            $(this).find(".quiz__next").addClass("quiz__next--finish");
            $(this).find(".quiz__next").text("Завершить");
        }
    });

    $('.quiz__back--active').click(function(){
        $(this).parent().parent().addClass("quiz__step--hidden");
        $(this).parent().parent().prev().removeClass("quiz__step--hidden");
    });

    $('.quiz__next--active').click(function(){
        if ( $(this).parent().prev().prev().find(".quiz__radio:checked").val() != undefined ) {
            $(this).parent().prev().removeClass("quiz__note--show");
            $(this).parent().parent().addClass("quiz__step--hidden");
            $(this).parent().parent().next().removeClass("quiz__step--hidden");
        } else {
            $(this).parent().prev().addClass("quiz__note--show");
        }

    });

    $('.quiz__next--finish').click(function(){
        $(".quiz__block").css({display: "none"});
        $('.quiz__step--result').removeClass("quiz__step--hidden");
        calculation();
    });

    $('.quiz__repeat').click(function(){
        $('.quiz__radio').each(function(){
            $(this).prop('checked', false);
        });
        $('.quiz__step').addClass("quiz__step--hidden");
        $(".quiz__step--age").removeClass("quiz__step--hidden");
    });



    function quiz_start() {

        let quiz_age = $('#quiz_age').val();
        let quiz_block = "#quiz_block_" + quiz_age;

        $('.quiz__step--age').addClass("quiz__step--hidden");
        $(quiz_block).css({display: "block"});

        $(quiz_block).children().eq(0).removeClass("quiz__step--hidden");

    }

    function calculation() {

        let quiz_age = $('#quiz_age').val();
        let quiz_block = "#quiz_block_" + quiz_age;

        let quiz_score = 0;

        $(quiz_block).find(".quiz__step").each(function(){
            quiz_score = quiz_score + +$(this).find(".quiz__choice").find(".quiz__radio:checked").val();
        });

        $('.quiz__itog').text(quiz_score);

    }

});