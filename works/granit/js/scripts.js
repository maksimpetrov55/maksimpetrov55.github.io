$(document).ready(function() {



    $('#calc_stele_form').change(function(){
        let name = "img/form/" + $('#calc_stele_form').val() + ".jpg";
        console.log( name );
        $('.calc__img').attr("src", name);
    });


    $('.calc__button').click(function(){

        var arr_form_name = $('#calc_stele').val();
    
        if ( arr_form_name == "80*40*5" ) {
            var array_form = arr_form_80_40_5;
        }
        if ( arr_form_name == "100*50*5" || arr_form_name == "100*60*5" ) {
            var array_form = arr_form_100_50_5;
        }
        if ( arr_form_name == "100*50*8" || arr_form_name == "100*60*8" || arr_form_name == "120*60*8" ) {
            var array_form = arr_form_100_50_8;
        }
    
        for(a = 0; a < array_form.length; a++) {
            if ( $('#calc_stele_form').val() == array_form[a].type ){
                var arr_form_value = array_form[a].value;
            }
        }

        var calc_granit = $('#calc_granit').val();

        var calc_stele_x = $('#calc_stele').val().split("*")[0];
        var calc_stele_y = $('#calc_stele').val().split("*")[1];
        var calc_stele_z = $('#calc_stele').val().split("*")[2];

        for(s = 0; s < arr_stele.length; s++) {
            if ( calc_stele_z == arr_stele[s][0] ){
                var arr_stele_value = arr_stele[s][calc_granit];
            }
        }

        var calc_tumb_x = $('#calc_tumb_x').val();
        var calc_tumb_y = $('#calc_tumb_y').val();
        var calc_tumb_z = $('#calc_tumb_z').val();

        for(t = 0; t < arr_tumb.length; t++) {
            if ( calc_tumb_z == arr_tumb[t][0] ){
                var arr_tumb_value = arr_tumb[t][calc_granit];
            }
        }

        var calc_garden_x = $('#calc_garden_x').val();
        var calc_garden_y = $('#calc_garden_y').val();
        var calc_garden_z = $('#calc_garden_z').val();

        for(g = 0; g < arr_garden.length; g++) {
            if ( calc_garden_z == arr_garden[g][0] ){
                var arr_garden_value = arr_garden[g][calc_granit];
            }
        }

        var calc_plate_x = $('#calc_plate_x').val();
        var calc_plate_y = $('#calc_plate_y').val();
        var calc_plate_z = $('#calc_plate_z').val();

        for(p = 0; p < arr_plate.length; p++) {
            if ( calc_plate_z == arr_plate[p][0] ){
                var arr_plate_value = arr_plate[p][calc_granit];
            }
        }

  
        
        var calc_result_1 = ( calc_stele_x * calc_stele_y / 10000 * arr_stele_value );
        var calc_result_2 = +arr_form_value;
        var calc_result_3 = ( calc_tumb_x * calc_tumb_y * calc_tumb_z / 1000000 * arr_tumb_value );
        var calc_result_4 = ( calc_garden_x * calc_garden_y * calc_garden_z.split("*")[0] / 10000 * arr_garden_value );
        var calc_result_5 = ( calc_plate_x * calc_plate_y / 10000 * arr_plate_value );
        
        $('#calc_result_1').text( calc_result_1.toFixed(1) + " $" );
        $('#calc_result_2').text( calc_result_2.toFixed(1) + " $" );
        $('#calc_result_3').text( calc_result_3.toFixed(1) + " $" );
        $('#calc_result_4').text( calc_result_4.toFixed(1) + " $" );
        $('#calc_result_5').text( calc_result_5.toFixed(1) + " $" );
        $('#calc_result_6').text( (+calc_result_1 + +calc_result_2 + +calc_result_3 + +calc_result_4 + +calc_result_5).toFixed(1) + " $" );


    });

});