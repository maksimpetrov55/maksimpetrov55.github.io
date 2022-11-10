$(document).ready(function() {

    $('.calc__black, .calc__close, .calc__link').click(function(){
        $('.calc').addClass("calc--none");
        $('.calc__black').fadeOut(200);
    });

    $('.go').click(function(){
        $('.calc').removeClass("calc--none");
        $('.calc__black').fadeIn(200);
    });

	$('.calc__btn').click(function(){
        $('.calc__step--first').addClass('calc__step--none');
        $('.calc__step--1').removeClass('calc__step--none');
        $('.calc__control--none').removeClass("calc__control--none");
        $('.calc__count').text(1);
        steps();
    });



    $('.calc__radio').change(function(){
        steps();
    });


    function steps() {
        let calc_count = $('.calc__count').text();
        let calc_div = $('.calc__step--' + calc_count);
        let calc_radio = $('.calc__step--' + calc_count).find(".calc__radio:checked").val();
        let calc_true = $('.calc__step--' + calc_count).find(".calc__radio--right");

        if ( calc_count == 1 ) {
            $('.calc__back').attr("disabled", true);
        } else {
            $('.calc__back').attr("disabled", false);
        }
        
        if ( calc_radio == undefined ) {
            $('.calc__next').attr("disabled", true);
        } else {
            $('.calc__next').attr("disabled", false);
            if ( calc_radio != 1 ) {
                $('.calc__step--' + calc_count).find(".calc__radio--right").next().addClass("calc__label--glow");
            } else {
                calc_true.removeClass("calc__label--glow");
            }
        }


        //console.log(calc_radio);
    }

    $('.calc__back').click(function(){

        let calc_count = $('.calc__count').text();
        $('.calc__count').text( +calc_count - 1 );
        calc_count = $('.calc__count').text();

        steps();

        $('.calc__step').addClass('calc__step--none');
        $('.calc__step--' + calc_count).removeClass('calc__step--none');

    });

    $('.calc__next').click(function(){

        let calc_count = $('.calc__count').text();
        
        if ( calc_count != 12 ) {
            let calc_count = $('.calc__count').text();
            $('.calc__count').text( +calc_count + 1 );
            calc_count = $('.calc__count').text();
    
            steps();
    
            $('.calc__step').addClass('calc__step--none');
            $('.calc__step--' + calc_count).removeClass('calc__step--none');

        } else {
            $('.calc__step').addClass('calc__step--none');
            $('.calc__step--final').removeClass('calc__step--none');
            $('.calc__control').addClass("calc__control--none");

            var calc_itog = 0;
            var array_wrong = [];
            var array_right = [];
            var array_numb = [];
            $('.calc__radio:checked').each(function(){
                calc_itog = +calc_itog + +$(this).val();

                if ( $(this).val() != 1 ) {
                    array_wrong.push( $(this).next().text() );
                    array_right.push($(this).parent().find(".calc__radio--right").next().text() );
                    array_numb.push( $(this).attr("name").split("calc_choice_")[1] );
                }
            });
            console.log(calc_itog);
            console.log(array_wrong);
            console.log(array_right);
            $('.calc__mistakes').empty();

            // for (i = 0; i < array_right.length; i++) {
            //     $('.calc__mistakes').append(`
            //         <div class="calc__line">
            //             <div class="calc__numb">#${array_numb[i]}</div>
            //             <div class="calc__wrong">${array_wrong[i]}</div>
            //             <div class="calc__correct">${array_right[i]}</div>
            //         </div>
            //     `);
            // }

            if ( calc_itog == 12 ) {
                $('.calc__itog').text( "12 / 12" );
                $('.calc__title--final').html(`Ого, отличный результат!<br><br>Чтобы не останавливаться на достигнутом, вы&nbsp;можете:`);
            } else {
                $('.calc__itog').text( calc_itog + " / 12" );
                $('.calc__title--final').html(`Поздравляю, ваш английский стал ещё немного&nbsp;лучше!<br><br>А чтобы добиться ощутимого прогресса, вы&nbsp;можете:`);
            }
        }


    });

    $('.calc__again').click(function(){
        $('.calc__count').text( 1 );
        $('.calc__step').addClass('calc__step--none');
        $('.calc__step--1').removeClass('calc__step--none');
        $('.calc__control--none').removeClass("calc__control--none");
    });


});