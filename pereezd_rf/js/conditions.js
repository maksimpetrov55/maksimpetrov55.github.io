

$(document).ready(function(){



    //подбор авто
	$(".moving__radio").click(function(){
        var radio_1 = $("input[name='bodytype_height']:checked").val();
        var radio_2 = $("input[name='bodytype_length']:checked").val();
        var radio_3 = $("input[name='bodytype_roof']:checked").val();
        var radio_4 = $("input[name='passengers']:checked").val();
        var radio_5 = $("input[name='workers']:checked").val();

        console.clear()
        console.log( radio_1 );
        console.log( radio_2 );
        console.log( radio_3 );
        console.log( radio_4 );
        console.log( radio_5 );

        if (radio_1 == 1 && 
            radio_2 == 1 &&
            radio_3 == 1 &&
            (
                ( radio_4 <= 2 && radio_5 == 0 ) ||
                ( radio_4 <= 2 && radio_5 == 1 ) ||
                ( radio_4 <= 1 && radio_5 == 2 )
            )

            ) {
                $(".moving__car-result__name").html("Фургон 4 метра");
            } else {
                if (radio_1 == 1 && 
                    radio_2 == 1 &&
                    radio_3 == 2 &&
                    (
                        ( radio_4 <= 5 && radio_5 == 0 ) ||
                        ( radio_4 <= 5 && radio_5 == 1 ) ||
                        ( radio_4 <= 4 && radio_5 == 2 )
                    )

                    ) {
                        $(".moving__car-result__name").html("Тент Фермер LUX 4 метра");
                    } else {

                        if (radio_1 == 2 && 
                            radio_2 == 1 &&
                            radio_3 == 2 &&
                            (
                                ( radio_4 <= 2 && radio_5 == 0 ) ||
                                ( radio_4 <= 2 && radio_5 == 1 ) ||
                                ( radio_4 <= 1 && radio_5 == 2 )
                            )
                
                            ) {
                                $(".moving__car-result__name").html("Тент 4 метра");
                            } else {

                                if (radio_1 == 2 && 
                                    radio_2 == 1 &&
                                    radio_3 == 3 &&
                                    (
                                        ( radio_4 <= 2 && radio_5 == 0 ) ||
                                        ( radio_4 <= 2 && radio_5 == 1 ) ||
                                        ( radio_4 <= 1 && radio_5 == 2 )
                                    )
                        
                                    ) {
                                        $(".moving__car-result__name").html("Газель Бортовая 4 метра");
                                    } else {

                                        if (radio_1 == 1 && 
                                            radio_2 == 2 &&
                                            radio_3 == 1 &&
                                            (
                                                ( radio_4 <= 2 && radio_5 == 0 ) ||
                                                ( radio_4 <= 2 && radio_5 == 1 ) ||
                                                ( radio_4 <= 1 && radio_5 == 2 )
                                            )
                                
                                            ) {
                                                $(".moving__car-result__name").html("Фургон 3 метра");
                                            } else {

                                                if (radio_1 == 1 && 
                                                    radio_2 == 2 &&
                                                    radio_3 == 2 &&
                                                    (
                                                        ( radio_4 <= 2 && radio_5 == 0 ) ||
                                                        ( radio_4 <= 2 && radio_5 == 1 ) ||
                                                        ( radio_4 <= 1 && radio_5 == 2 )
                                                    )
                                        
                                                    ) {
                                                        $(".moving__car-result__name").html("Евротент 3 метра");
                                                    } else {

                                                        if (radio_1 == 1 && 
                                                            radio_2 == 2 &&
                                                            radio_3 == 2 &&
                                                            (
                                                                ( radio_4 >= 3 && radio_5 == 0 ) ||
                                                                ( radio_4 >= 3 && radio_5 == 1 ) ||
                                                                ( radio_4 >= 2 && radio_4 <= 4 && radio_5 == 2 )
                                                            )
                                                
                                                            ) {
                                                                $(".moving__car-result__name").html("Евротент Фермер");
                                                            } else {

                                                                if (radio_1 == 2 && 
                                                                    radio_2 == 2 &&
                                                                    radio_3 == 1 &&
                                                                    (
                                                                        ( radio_4 == 0 && radio_5 == 0 ) ||
                                                                        ( radio_4 == 0 && radio_5 == 1 )
                                                                    )
                                                        
                                                                    ) {
                                                                        $(".moving__car-result__name").html("Каблук 1.7 метра");
                                                                    } else {

                                                                        if (radio_1 == 2 && 
                                                                            radio_2 == 2 &&
                                                                            radio_3 == 2 &&
                                                                            (
                                                                                ( radio_4 <= 2 && radio_5 == 0 ) ||
                                                                                ( radio_4 <= 2 && radio_5 == 1 ) ||
                                                                                ( radio_4 <= 1 && radio_5 == 2 )
                                                                            )
                                                                
                                                                            ) {
                                                                                $(".moving__car-result__name").html("Тент 3 метра");
                                                                            } else {

                                                                                if (radio_1 == 2 && 
                                                                                    radio_2 == 2 &&
                                                                                    radio_3 == 2 &&
                                                                                    (
                                                                                        ( radio_4 >= 3 && radio_5 == 0 ) ||
                                                                                        ( radio_4 >= 3 && radio_5 == 1 ) ||
                                                                                        ( radio_4 >= 2 && radio_4 <= 4 && radio_5 == 2 )
                                                                                    )
                                                                        
                                                                                    ) {
                                                                                        $(".moving__car-result__name").html("Тент Фермер");
                                                                                    } else {

                                                                                        if (radio_1 == 2 && 
                                                                                            radio_2 == 2 &&
                                                                                            radio_3 == 3 &&
                                                                                            (
                                                                                                ( radio_4 <= 2 && radio_5 == 0 ) ||
                                                                                                ( radio_4 <= 2 && radio_5 == 1 ) ||
                                                                                                ( radio_4 <= 1 && radio_5 == 2 )
                                                                                            )
                                                                                
                                                                                            ) {
                                                                                                $(".moving__car-result__name").html("Газель Бортовая 3 метра");
                                                                                            } else {

                                                                                                $(".moving__car-result__name").html("Подходящих машин нет");

                                                                                            }

                                                                                    }

                                                                            }

                                                                    }

                                                            }

                                                    }

                                            }

                                    }

                            }

                    }
            }



    price_calc();

    });
    //подбор авто


    price_calc();

    function price_calc(){
        
        var duration_line = $("#moving_duration").html();
        if ( duration_line == "1 час" ) {
            var duration_dig = 1;
        } else {
            if ( duration_line == "2 часа" ) {
                var duration_dig = 2;
            } else {
                var duration_dig = 3;
            }
        }

        var workers_qua = $("input[name='workers']:checked").val();
        var workers_price = workers_qua * 1200
        // var workers_price = workers_qua * 300 * duration_dig;
        // if ( workers_price > 0 && workers_price <= 1200 ) {
        //     workers_price = 1200;
        // }

        if ( $(".moving__car-result__name").html() != "Подходящих машин нет" ) {
            var skolko1 = ( 890 * +duration_dig ) + workers_price;
            var skolko2 = skolko1 * 1.3;
            var skolko3 = skolko2 - skolko1;
            $(".moving__itog__result__price").html( skolko1.toFixed(0) + " р.");
            $(".moving__itog__sale__price").html( skolko2.toFixed(0) + " р." );
            $(".moving__itog__economy__price").html( skolko3.toFixed(0) + " р." );
            //$(".moving__itog__result__price").html( workers_price + " р.");
        } else {
            $(".moving__itog__sale__price").html("0 р.");
            $(".moving__itog__economy__price").html("0 р.");
            $(".moving__itog__result__price").html("0 р.");
        }

    }

    $(".moving__open__list__li").click(function(){
        var expert_show = $(".moving__expert").css("display");
        if ( expert_show == "none" ) {
            price_calc();
        } else {
            expert_recalc();
        }
    });

    $(".moving__expert__carlabel").click(function(e){
        var expert_car = $(this).html();
        $(".moving__expert__name").html(expert_car);
    });

    $(".moving__car-result__expert").click(function(e){
        event.preventDefault();
        $(".moving__params").addClass("dnone");
        $(".moving__car-result").addClass("dnone");
        $(".moving__expert").removeClass("dnone");

        expert_recalc();

    });

    $(".moving__expert__return").click(function(){
        event.preventDefault();
        $(".moving__params").removeClass("dnone");
        $(".moving__car-result").removeClass("dnone");
        $(".moving__expert").addClass("dnone");

        price_calc();

    });

    // var expert_show = $(".moving__expert").css("display");
    // if ( expert_show == "none" ) {
    //     alert("1");
    // }

    $(".moving__expert__radio").change(function(){
        expert_recalc();
    });
    $(".moving__expert__carlabel").click(function(){
        expert_recalc();
    });

    function expert_recalc(){

        var duration_line = $("#moving_duration").html();
        if ( duration_line == "1 час" ) {
            var duration_dig = 1;
        } else {
            if ( duration_line == "2 часа" ) {
                var duration_dig = 2;
            } else {
                var duration_dig = 3;
            }
        }

        var expert_workers_qua = $("input[name='expert_workers']:checked").val();
        var expert_workers_price = expert_workers_qua * 1200
        // var expert_workers_price = expert_workers_qua * 300 * duration_dig;
        // if ( expert_workers_price > 0 && expert_workers_price <= 1200 ) {
        //     expert_workers_price = 1200;
        // }

        if ( $(".moving__expert__name").html() != "Пока не выбрано" ) {
            var expert_skolko1 = ( 890 * +duration_dig ) + expert_workers_price;
            var expert_skolko2 = expert_skolko1 * 1.3;
            var expert_skolko3 = expert_skolko2 - expert_skolko1;
            $(".moving__itog__result__price").html( expert_skolko1.toFixed(0) + " р.");
            $(".moving__itog__sale__price").html( expert_skolko2.toFixed(0) + " р." );
            $(".moving__itog__economy__price").html( expert_skolko3.toFixed(0) + " р." );
            //$(".moving__itog__result__price").html( workers_price + " р.");
        } else {
            $(".moving__itog__sale__price").html("0 р.");
            $(".moving__itog__economy__price").html("0 р.");
            $(".moving__itog__result__price").html("0 р.");
        }

    }

});