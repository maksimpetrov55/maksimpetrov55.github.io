$(document).ready(function() {

    function auto_H() {
        var H_param = $(".calc").height();
        alert(H_param);
    }
    auto_H();
    $(window).resize(function(){
        auto_H();
    });

});
