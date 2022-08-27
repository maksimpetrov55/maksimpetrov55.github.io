$(document).ready(function() {

    var products = [
        {id:'001',   title:'Nike Air Jordan 1',   price:'7000',    count:'0'},
        {id:'002',   title:'Sony Dualsense',      price:'5500',    count:'0'},
        {id:'003',   title:'Sony wh-1000xm5',     price:'35000',   count:'0'},
        {id:'004',   title:'Apple Watch',         price:'32000',   count:'0'},
        {id:'005',   title:'Microsoft Gamepad',   price:'5000',    count:'0'},
        {id:'006',   title:'Apple AirPods Max',   price:'65000',   count:'0'},
        {id:'007',   title:'Huawei Watch GT',     price:'25000',   count:'0'},
        {id:'008',   title:'Converse All Stars',  price:'9000',    count:'0'}
    ]



    if ( localStorage.getItem('cart') ) {
        var gs_out = GETsaving( localStorage.getItem('cart') );
        // console.log( gs_out );
        // console.log( gs_out.length );
        for (g = 0; g < gs_out.length; g++) {
            var gs_split_id = gs_out[g].split("*")[0];
            var gs_split_count = gs_out[g].split("*")[1];
            for (a = 0; a < products.length; a++) {
                if ( gs_split_id == products[a].id ) {
                    products[a].count = gs_split_count;
                }
            }
        }
    }
    
    function GETsaving(gs_income){
        var gs_array = gs_income.split("|");
        gs_array.pop();
        return gs_array;
    }

    //var test_str = "002*2|003*4|004*3|006*2|";

    console.log( products );





    for (p = 0; p < products.length; p++) {
        $('.content__title:eq(' + p + ')').text( products[p].title );
        $('.content__buy:eq(' + p + ')').attr( "data-id", products[p].id ).attr( "data-numb", p );
        $('.content__buy:eq(' + p + ')').html( '<span class="content__buy--span"></span>' + (+products[p].price).toLocaleString("en") + " ₽" ); // 
    }

    $('.content__buy').click(function(){
        // let thisId = $(this).attr("data-id");
        // for (b = 0; b < products.length; b++) {
        //     if ( thisId == products[b].id ) {
        //         products[b].count = +products[b].count + 1;
        //         //alert(products[b].count);
        //     }
        // }
        let thisNumb = $(this).attr("data-numb");
        products[thisNumb].count = +products[thisNumb].count + 1;
        //alert(products[thisNumb].count);
        saving();
        create(thisNumb);
        calculation();

        $(this).parent().append(`<div class="content__add">📦</div>`);
        //$(this).parent().find(".content__add").addClass("content__add--show");
        // setTimeout(() => {
        //     $(".content__add").remove();
        // }, 10000);



        clearInterval(int);
        timer(3);
    });

    var int;
    function timer(sec) {
        //$('.seconds').text(sec);
        int = setInterval(function() {
            if (sec > 0) {
                sec--;
                //$('.seconds').text(sec);
            } else {
                clearInterval(int);
                $(".content__add").remove();
            }
        }, 1000);
    }

    function saving() {
        var saving_string = "";
        for (s = 0; s < products.length; s++) {
            if ( products[s].count > 0 ) {
                saving_string = saving_string + products[s].id + "*" + products[s].count + "|"
            }
        }
        console.log(saving_string);
        localStorage.setItem('cart', saving_string);
    }


    function create(create_in) {
        let create_count = +products[create_in].count;
        let create_price = +products[create_in].price;
        //if ( products[create_in].count <= 1 ) {
        if ( $('.cart__list').find(".cart__block--" + create_in).length < 1 ) {
            let create_title = products[create_in].title;
            $('.cart__list').append(`<div data-numb="${create_in}" class="cart__block cart__block--product cart__block--${create_in}">
                <div class="cart__title">${create_title}</div>
                <div class="cart__flex">
                    <div class="cart__quant">
                        <div class="cart__minus">–</div>
                        <div class="cart__count"></div>
                        <div class="cart__plus">+</div>
                    </div>
                    <div class="cart__price"></div>
                </div>
                <div class="cart__del">✖</div>
            </div>`);
        }
        $('.cart').find(".cart__block--" + create_in).find(".cart__count").text(create_count);
        $('.cart').find(".cart__block--" + create_in).find(".cart__price").attr( "data-price", create_price );
        $('.cart').find(".cart__block--" + create_in).find(".cart__price").text( (create_price * create_count).toLocaleString("en") + " ₽" );
        
    }

    // alert( products[0].count );
    //create(7);

    for (n = 0; n < products.length; n++) {
        if ( products[n].count != "0" ) {
            create(n);
        }
    }

    // if ( $('.cart__list').find(".cart__block--empty11").length ) {
    //     alert( $('.cart__list').find(".cart__block--empty").length );
    // } else {
    //     alert( $('.cart__list').find(".cart__block--empty11").length );
    // }


    calculation();
    function calculation() {

        let amount = 0;
        let sum = 0;
        $('.cart__list').find(".cart__block--product").each(function(){
            sum = +sum + ($(this).find(".cart__price").attr( "data-price" ) * $(this).find(".cart__count").text());
            amount = +amount + +$(this).find(".cart__count").text();
        });
        if ( sum > 0 ) {
            $('.cart__block--empty').css({display: "none"});
        } else {
            $('.cart__block--empty').css({display: "block"});
        }
        if ( amount > 0 ) {
            $('.fly__count').css({display: "flex"});
            $('.fly').addClass("fly--full");
        } else {
            $('.fly__count').css({display: "none"});
            $('.fly').removeClass("fly--full");
        }
        $('.fly__count').text(amount);

        console.log(amount);
        console.log(sum);
        $('.cart__itog').text( (+sum).toLocaleString("en") + " ₽" );

    }






    $("input[name=content_filter]").change(function(){
        let value = $("input[name=content_filter]:checked").val();
        if ( value == 1 ) {
            $(".content__box").removeClass("content__box--hidden");
        } else {
            $(".content__box").addClass("content__box--hidden");
            $(".content__box--" + value).removeClass("content__box--hidden");
        }
    });

    $('.fly').click(function(){
        $('.black').addClass("black--show");
    });

    $('.cart__close, .area').click(function(){
        $('.black').removeClass("black--show");
    });


    $('.cart').on("click",".cart__minus" ,function(){
        let count = $(this).next().text();
        let number = $(this).parent().parent().parent().attr("data-numb");
        if ( count > 1 ) {
            $(this).next().text( +count - 1);
            products[number].count = +products[number].count - 1;
        } else {
            $(this).next().text( 1 );
            products[number].count = 1;
        }
        count = $(this).next().text();
        $(this).parent().next().text( (products[number].price * count).toLocaleString("en") + " ₽" )

        saving();
        calculation();
        console.log( products );
    });

    $('.cart').on("click",".cart__plus" ,function(){
        let count = $(this).prev().text();
        let number = $(this).parent().parent().parent().attr("data-numb");
        if ( count > 99 ) {
            $(this).prev().text( 99 );
            products[number].count = 99;
        } else {
            $(this).prev().text( +count + 1);
            products[number].count = +products[number].count + 1;
        }
        count = $(this).prev().text();
        $(this).parent().next().text( (products[number].price * count).toLocaleString("en") + " ₽" )

        saving();
        calculation();
        console.log( products );
    });


    $('.cart').on("click",".cart__del" ,function(){

        let number = $(this).parent().attr("data-numb");
        products[number].count = 0;
        $(this).prev().find(".cart__price").text(0);
        $(this).parent().remove();
        
        saving();
        calculation();
        console.log( products );
    });


    function toCart() {

        // products[0].count = +products[0].count + 1;
        // console.log( products[0].count );

        $('.cart').append(`
            
        `);

    }

});