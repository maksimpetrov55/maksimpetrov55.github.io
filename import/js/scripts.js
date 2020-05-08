$(document).ready(function() {

    $(".calc__input").on('input', function () {

        calculation();

    });

    calculation();

    function calculation() {

        var euroCourse = $("#inp_euro").val();
        var zakupEuro = $("#inp_e_zakup").val();


        $("#inp_r_zakup").val( (euroCourse * zakupEuro).toLocaleString("en") + " ₽" );

        var salePerc = $("#inp_sale").val();
        $("#inp_e_sale").val( zakupEuro * salePerc / 100 );
        var sale = $("#inp_e_sale").val();
        $("#inp_r_sale").val( (sale * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_zakupsale1").val( zakupEuro - sale );
        var eZakupsale1 = $("#inp_e_zakupsale1").val();
        $("#inp_r_zakupsale1").val( (eZakupsale1 * euroCourse).toLocaleString("en") + " ₽" );

        var poshPerc = $("#inp_posh").val();
        $("#inp_e_posh").val( eZakupsale1 * poshPerc / 100 );
        var ePosh = $("#inp_e_posh").val();
        $("#inp_r_posh").val( (ePosh * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_led").val( 5000 );
        var eLed = $("#inp_e_led").val();
        $("#inp_r_led").val( (eLed * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_price1").val( +eLed + +ePosh + +eZakupsale1 );
        var ePrice1 = $("#inp_e_price1").val();
        $("#inp_r_price1").val( (+ePrice1 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_nds").val( ePrice1 * 0.2 );
        var eNds = $("#inp_e_nds").val();
        $("#inp_r_nds").val( (+eNds * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_price1nds").val( +ePrice1 + +eNds );
        var ePrice1Nds = $("#inp_e_price1nds").val();
        $("#inp_r_price1nds").val( (ePrice1Nds * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_rmrs").val( 5000 );
        var eRmrs = $("#inp_e_rmrs").val();
        $("#inp_r_rmrs").val( (+eRmrs * +euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_certif").val( 5000 );
        var eCertif = $("#inp_e_certif").val();
        $("#inp_r_certif").val( (+eCertif * +euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_broker").val( 500 );
        var eBroker = $("#inp_e_broker").val();
        $("#inp_r_broker").val( (+eBroker * +euroCourse).toLocaleString("en") + " ₽" );
        
        $("#inp_e_fullprice1").val( +ePrice1Nds + +eRmrs + +eCertif + +eBroker );
        var eFullPrice1 = $("#inp_e_fullprice1").val();
        $("#inp_r_fullprice1").val( (eFullPrice1 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_fullprice1dop").val( eFullPrice1 - eZakupsale1 );
        var eFullprice1dop = $("#inp_e_fullprice1dop").val();
        $("#inp_r_fullprice1dop").val( (eFullprice1dop * euroCourse).toLocaleString("en") + " ₽" );

        var eDelivery = $("#inp_e_delivery").val();
        $("#inp_r_delivery").val( (eDelivery * euroCourse).toLocaleString("en") + " ₽" );

        var eUchastie = $("#inp_e_uchastie").val();
        $("#inp_r_uchastie").val( (eUchastie * euroCourse).toLocaleString("en") + " ₽" );

        var eBank = $("#inp_e_bank").val();
        $("#inp_r_bank").val( (eBank * euroCourse).toLocaleString("en") + " ₽" );

        var ePercent = $("#inp_e_percent").val();
        $("#inp_r_percent").val( (ePercent * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_fullprice2dop").val( +eDelivery + +eUchastie + +eBank + +ePercent );
        var eFullprice2dop = $("#inp_e_fullprice2dop").val();
        $("#inp_r_fullprice2dop").val( (eFullprice2dop * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_fullprice2").val( +eFullprice2dop + +eFullPrice1 );
        var eFullprice2 = $("#inp_e_fullprice2").val();
        $("#inp_r_fullprice2").val( (eFullprice2 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_up25").val( eFullprice2 * 1.25 );
        var eUp25 = $("#inp_e_up25").val();
        $("#inp_r_up25").val( (eFullprice2 * 1.25 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_up50").val( eFullprice2 * 1.5 );
        var eUp50 = $("#inp_e_up50").val();
        $("#inp_r_up50").val( (eFullprice2 * 1.5 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_up100").val( eFullprice2 * 2 );
        var eUp100 = $("#inp_e_up100").val();
        $("#inp_r_up100").val( (eFullprice2 * 2 * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_margin25").val( eUp25 - eFullprice2 );
        $("#inp_r_margin25").val( ((eUp25 - eFullprice2) * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_margin50").val( eUp50 - eFullprice2 );
        $("#inp_r_margin50").val( ((eUp50 - eFullprice2) * euroCourse).toLocaleString("en") + " ₽" );

        $("#inp_e_margin100").val( eUp100 - eFullprice2 );
        $("#inp_r_margin100").val( ((eUp100 - eFullprice2) * euroCourse).toLocaleString("en") + " ₽" );




    }

});







// var inp_r_zakup = $("#inp_r_zakup").val();
// var inp_e_sale1 = $("#inp_e_sale1").val();
// var inp_r_sale1 = $("#inp_r_sale1").val();
// var inp_e_zakupsale1 = $("#inp_e_zakupsale1").val();
// var inp_r_zakupsale1 = $("#inp_r_zakupsale1").val();
// var inp_e_sale10 = $("#inp_e_sale10").val();
// var inp_r_sale10 = $("#inp_r_sale10").val();
// var inp_e_led = $("#inp_e_led").val();
// var inp_r_led = $("#inp_r_led").val();
// var inp_e_price1 = $("#inp_e_price1").val();
// var inp_r_price1 = $("#inp_r_price1").val();
// var inp_e_nds = $("#inp_e_nds").val();
// var inp_r_nds = $("#inp_r_nds").val();
// var inp_e_price1nds = $("#inp_e_price1nds").val();
// var inp_r_price1nds = $("#inp_r_price1nds").val();
// var inp_e_rmrs = $("#inp_e_rmrs").val();
// var inp_r_rmrs = $("#inp_r_rmrs").val();
// var inp_e_certif = $("#inp_e_certif").val();
// var inp_r_certif = $("#inp_r_certif").val();
// var inp_e_broker = $("#inp_e_broker").val();
// var inp_r_broker = $("#inp_r_broker").val();
// var inp_e_fullprice1 = $("#inp_e_fullprice1").val();
// var inp_r_fullprice1 = $("#inp_r_fullprice1").val();
// var inp_e_fullprice1dop = $("#inp_e_fullprice1dop").val();
// var inp_r_fullprice1dop = $("#inp_r_fullprice1dop").val();
// var inp_e_delivery = $("#inp_e_delivery").val();
// var inp_r_delivery = $("#inp_r_delivery").val();
// var inp_e_uchastie  = $("#inp_e_uchastie ").val();
// var inp_r_uchastie  = $("#inp_r_uchastie ").val();
// var inp_e_bank = $("#inp_e_bank").val();
// var inp_r_bank = $("#inp_r_bank").val();
// var inp_e_percent = $("#inp_e_percent").val();
// var inp_r_percent = $("#inp_r_percent").val();
// var inp_e_fullprice2dop = $("#inp_e_fullprice2dop").val();
// var inp_r_fullprice2dop = $("#inp_r_fullprice2dop").val();
// var inp_e_fullprice2 = $("#inp_e_fullprice2").val();
// var inp_r_fullprice2 = $("#inp_r_fullprice2").val();
// var inp_e_up25 = $("#inp_e_up25").val();
// var inp_r_up25 = $("#inp_r_up25").val();
// var inp_e_margin25 = $("#inp_e_margin25").val();
// var inp_r_margin25 = $("#inp_r_margin25").val();
// var inp_e_up50 = $("#inp_e_up50").val();
// var inp_r_up50 = $("#inp_r_up50").val();
// var inp_e_margin50 = $("#inp_e_margin50").val();
// var inp_r_margin50 = $("#inp_r_margin50").val();
// var inp_e_up75 = $("#inp_e_up75").val();
// var inp_r_up75 = $("#inp_r_up75").val();
// var inp_e_margin75 = $("#inp_e_margin75").val();
// var inp_r_margin75 = $("#inp_r_margin75").val();