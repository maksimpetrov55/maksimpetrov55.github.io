

    $(document).ready(function() {


        $(".price-btn1").css({
            "background" : "#FFE95D"
        });

        $(".price-btn1").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn2").css({"background" : "#ffc140"});
            $(".price-btn3").css({"background" : "#ffc140"});
            $(".price-btn4").css({"background" : "#ffc140"});
            $(".price-btn5").css({"background" : "#ffc140"});
            $(".price-btn6").css({"background" : "#ffc140"});

            $(".price__scroll__body1").show();
            $(".price__scroll__body2").hide();
            $(".price__scroll__body3").hide();
            $(".price__scroll__body4").hide();
            $(".price__scroll__body5").hide();
            $(".price__scroll__body6").hide();
        });

        $(".price-btn2").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn1").css({"background" : "#ffc140"});
            $(".price-btn3").css({"background" : "#ffc140"});
            $(".price-btn4").css({"background" : "#ffc140"});
            $(".price-btn5").css({"background" : "#ffc140"});
            $(".price-btn6").css({"background" : "#ffc140"});

            $(".price__scroll__body1").hide();
            $(".price__scroll__body2").show();
            $(".price__scroll__body3").hide();
            $(".price__scroll__body4").hide();
            $(".price__scroll__body5").hide();
            $(".price__scroll__body6").hide();
        });

        $(".price-btn3").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn1").css({"background" : "#ffc140"});
            $(".price-btn2").css({"background" : "#ffc140"});
            $(".price-btn4").css({"background" : "#ffc140"});
            $(".price-btn5").css({"background" : "#ffc140"});
            $(".price-btn6").css({"background" : "#ffc140"});

            $(".price__scroll__body1").hide();
            $(".price__scroll__body2").hide();
            $(".price__scroll__body3").show();
            $(".price__scroll__body4").hide();
            $(".price__scroll__body5").hide();
            $(".price__scroll__body6").hide();
        });

        $(".price-btn4").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn1").css({"background" : "#ffc140"});
            $(".price-btn2").css({"background" : "#ffc140"});
            $(".price-btn3").css({"background" : "#ffc140"});
            $(".price-btn5").css({"background" : "#ffc140"});
            $(".price-btn6").css({"background" : "#ffc140"});

            $(".price__scroll__body1").hide();
            $(".price__scroll__body2").hide();
            $(".price__scroll__body3").hide();
            $(".price__scroll__body4").show();
            $(".price__scroll__body5").hide();
            $(".price__scroll__body6").hide();
        });

        $(".price-btn5").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn1").css({"background" : "#ffc140"});
            $(".price-btn2").css({"background" : "#ffc140"});
            $(".price-btn3").css({"background" : "#ffc140"});
            $(".price-btn4").css({"background" : "#ffc140"});
            $(".price-btn6").css({"background" : "#ffc140"});

            $(".price__scroll__body1").hide();
            $(".price__scroll__body2").hide();
            $(".price__scroll__body3").hide();
            $(".price__scroll__body4").hide();
            $(".price__scroll__body5").show();
            $(".price__scroll__body6").hide();
        });

        $(".price-btn6").click(function(){
            $(this).css({"background" : "#FFE95D"});
            $(".price-btn1").css({"background" : "#ffc140"});
            $(".price-btn2").css({"background" : "#ffc140"});
            $(".price-btn3").css({"background" : "#ffc140"});
            $(".price-btn4").css({"background" : "#ffc140"});
            $(".price-btn5").css({"background" : "#ffc140"});

            $(".price__scroll__body1").hide();
            $(".price__scroll__body2").hide();
            $(".price__scroll__body3").hide();
            $(".price__scroll__body4").hide();
            $(".price__scroll__body5").hide();
            $(".price__scroll__body6").show();
        });

    });
