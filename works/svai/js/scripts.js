$(document).ready(function() {

    calculate();

    $('.calc__select').change(function(){
        calculate();
    });

    function calculate() {

        var calc_nadejnost = 1.7;
        
        var calc_select_1 = $('#calc_select_1').val();
        var calc_select_2 = $('#calc_select_2').val();
        var calc_select_3 = $('#calc_select_3').val();
        var calc_select_4 = $('#calc_select_4').val();
        var calc_select_5 = $('#calc_select_5').val();
        var calc_select_6 = $('#calc_select_6').val();

        if ( calc_select_5 == 1 ) { var calc_resistance = 2.0 } // Пылеватые породы
        if ( calc_select_5 == 2 ) { var calc_resistance = 3.5 } // Рыхлая почва с большим содержанием песка и глины
        if ( calc_select_5 == 3 ) { var calc_resistance = 4.0 } // Песок мелкой фракции, гравий с глинистыми включениями
        if ( calc_select_5 == 4 ) { var calc_resistance = 4.5 } // Галька с некоторым содержанием глины
        if ( calc_select_5 == 5 ) { var calc_resistance = 5.0 } // Песок средней фракции
        if ( calc_select_5 == 6 ) { var calc_resistance = 6.0 } // Глина, песок крупной фракции
        
        if ( calc_select_6 == 1 ) { var calc_plotnost = 40 } // Каркасные стены
        if ( calc_select_6 == 2 ) { var calc_plotnost = 80 } // Стены из бревен

        var calc_wall_square = ((calc_select_1 * calc_select_3) + (calc_select_2 * calc_select_3)) * 2;
        var calc_wall_mass = calc_wall_square * calc_plotnost;
        var calc_elem_mass = calc_select_1 * calc_select_2 * 350;
        var calc_full_mass = calc_wall_mass + calc_elem_mass;

        var calc_pressure = calc_resistance * 706 / calc_nadejnost;

        var calc_col_amount = calc_full_mass * calc_nadejnost / calc_pressure;

        if ( calc_select_4 == "1" ) { var calc_col_diameter = 108 } // Дом
        if ( calc_select_4 == "2" ) { var calc_col_diameter = 89 } // Баня
        if ( calc_select_4 == "3" ) { var calc_col_diameter = 57 } // Беседка

        
        var calc_col_length = 2;


        $('#calc_wall_square').text( calc_wall_square.toFixed(0) + " м2" );
        $('#calc_wall_mass').text( calc_wall_mass.toFixed(0) + " кг" );
        $('#calc_elem_mass').text( calc_elem_mass.toFixed(0) + " кг" );
        $('#calc_full_mass').text( calc_full_mass.toFixed(0) + " кг" );
        $('#calc_pressure').text( calc_pressure.toFixed(0) + " кг" );
        $('#calc_col_amount').text( calc_col_amount.toFixed(0) + " шт" );
        $('#calc_col_diameter').text( calc_col_diameter.toFixed(0) + " мм" );
        $('#calc_col_length').text( calc_col_length.toFixed(0) + " м" );


        $('#calc_data').val(
            "Площадь стен: " + calc_wall_square.toFixed(0) + " м2" + "; " + "\n" + 
            "Масса стен: " + calc_wall_mass.toFixed(0) + " кг" + "; " + "\n" + 
            "Масса дополнительных элементов: " + calc_elem_mass.toFixed(0) + " кг" + "; " + "\n" + 
            "Общая масса: " + calc_full_mass.toFixed(0) + " кг" + "; " + "\n" + 
            "Максимальная нагрузка на основную опорную точку загубленной в грунт сваи: " + calc_pressure.toFixed(0) + " кг" + "; " + "\n" + 
            "Количество свай: " + calc_col_amount.toFixed(0) + " шт" + "; " + "\n" + 
            "Диаметр свай: " + calc_col_diameter.toFixed(0) + " мм" + "; " + "\n" + 
            "Длина свай: " + calc_col_length.toFixed(0) + " м" + "; " 
        );

    }

});