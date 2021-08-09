var gazArray = [
	{id: 1, name: "Азот (N2)", ppm: "1", mg: "1.1621149891505", ob: "0.0001", nkpr: "0"},
	{id: 2, name: "Аммиак (NH3)", ppm: "1", mg: "0.62226202661208", ob: "0.0001", nkpr: "0.00066666666666667"},
	{id: 3, name: "Ацетилен (C2H2)", ppm: "1", mg: "1.0801639099284", ob: "0.0001", nkpr: "0.0043478260869565"},
	{id: 4, name: "Ацетон (C3H6O)", ppm: "1", mg: "2.409398567042", ob: "0.0001", nkpr: "0.004"},
	{id: 5, name: "Бензол (C6H6)", ppm: "1", mg: "3.2403257932446", ob: "0.0001", nkpr: "0.0083333333333333"},
	{id: 6, name: "Бром (Br2)", ppm: "1", mg: "3.3147483316274", ob: "0.0001", nkpr: "0"},
	{id: 7, name: "Бутан (C4H10)", ppm: "1", mg: "2.4110579324463", ob: "0.0001", nkpr: "0.0071428571428571"},
	{id: 8, name: "Винилхлорид (C2H3Cl)", ppm: "1", mg: "2.5926754759468", ob: "0.0001", nkpr: "0.0027777777777778"},
	{id: 9, name: "Водород (H2)", ppm: "1", mg: "0.08362703828045", ob: "0.0001", nkpr: "0.0025"},
	{id: 10, name: "Гексан (C6H14)", ppm: "1", mg: "3.5751027635619", ob: "0.0001", nkpr: "0.01"},
	{id: 11, name: "Гелий (He)", ppm: "1", mg: "0.16604439918117", ob: "0.0001", nkpr: "0"},
	{id: 12, name: "Диоксид азота (NO2)", ppm: "1", mg: "1.9084983776868", ob: "0.0001", nkpr: "0"},
	{id: 13, name: "Диоксид углерода (CO2)", ppm: "1", mg: "1.8257167860798", ob: "0.0001", nkpr: "0"},
	{id: 14, name: "Изобутан ((CH3)3CH)", ppm: "1", mg: "2.4110579324463", ob: "0.0001", nkpr: "0.0076923076923077"},
	{id: 15, name: "Кислород (O2)", ppm: "1", mg: "0.6637059221085", ob: "0.0001", nkpr: "0"},
	{id: 16, name: "Метан (CH4)", ppm: "1", mg: "0.66540552712385", ob: "0.0001", nkpr: "0.0022727272727273"},
	{id: 17, name: "Метанол (CH3OH)", ppm: "1", mg: "1.3291516888434", ob: "0.0001", nkpr: "0.0018181818181818"},
	{id: 18, name: "Метантиол-Метилмеркаптан (CH3SH)", ppm: "1", mg: "1.9956980296827", ob: "0.0001", nkpr: "0.0025641025641026"},
	{id: 19, name: "Метиламин (CH3NH2)", ppm: "1", mg: "1.2883769324463", ob: "0.0001", nkpr: "0.0023809523809524"},
	{id: 20, name: "Озон (O3)", ppm: "1", mg: "1.9911555168884", ob: "0.0001", nkpr: "0"},
	{id: 21, name: "Оксид азота (NO)", ppm: "1", mg: "1.2447771064483", ob: "0.0001", nkpr: "0"},
	{id: 22, name: "Оксид серы (SO2)", ppm: "1", mg: "2.657224790174", ob: "0.0001", nkpr: "0"},
	{id: 23, name: "Оксид углерода (CO)", ppm: "1", mg: "1.1619706243603", ob: "0.0001", nkpr: "0.00091743119266055"},
	{id: 24, name: "Октан (C8H18)", ppm: "1", mg: "4.7386705271238", ob: "0.0001", nkpr: "0.0125"},
	{id: 25, name: "Пентан (C5H12)", ppm: "1", mg: "2.9930803480041", ob: "0.0001", nkpr: "0.0071428571428571"},
	{id: 26, name: "Пропан (C3H8)", ppm: "1", mg: "1.8294503582395", ob: "0.0001", nkpr: "0.0058823529411765"},
	{id: 27, name: "Сероводород (H2S)", ppm: "1", mg: "1.4138622927329", ob: "0.0001", nkpr: "0.0025"},
	{id: 28, name: "Синильная кислота (HCN)", ppm: "1", mg: "1.12112119652", ob: "0.0001", nkpr: "0.0018518518518519"},
	{id: 29, name: "Стирол (C8H8)", ppm: "1", mg: "4.3205726714432", ob: "0.0001", nkpr: "0.0090909090909091"},
	{id: 30, name: "Толуилендиизоцианат (C9H6N2O2)", ppm: "1", mg: "7.2265363357216", ob: "0.0001", nkpr: "0.011111111111111"},
	{id: 31, name: "Толуол (C6H5CH3)", ppm: "1", mg: "3.8223482088025", ob: "0.0001", nkpr: "0.0090909090909091"},
	{id: 32, name: "Фенол (C6H5OH)", ppm: "1", mg: "3.9040719549642", ob: "0.0001", nkpr: "0.0076923076923077"},
	{id: 33, name: "Формальдегид (CH2O)", ppm: "1", mg: "1.2457685772774", ob: "0.0001", nkpr: "0.0014285714285714"},
	{id: 34, name: "Фосфин (PH3)", ppm: "1", mg: "1.4103568833163", ob: "0.0001", nkpr: "0"},
	{id: 35, name: "Фтор (F2)", ppm: "1", mg: "0.78813219242579", ob: "0.0001", nkpr: "0"},
	{id: 36, name: "Фтороводород (HF)", ppm: "1", mg: "0.83009754350051", ob: "0.0001", nkpr: "0"},
	{id: 37, name: "Фурфуриловый спирт (C5H6O2)", ppm: "1", mg: "4.069593654043", ob: "0.0001", nkpr: "0.0055555555555556"},
	{id: 38, name: "Хлор (Cl2)", ppm: "1", mg: "1.4704466530194", ob: "0.0001", nkpr: "0"},
	{id: 39, name: "Хлороводород (HCl)", ppm: "1", mg: "1.5125364564995", ob: "0.0001", nkpr: "0"},
	{id: 40, name: "Циклогексан (C6H12)", ppm: "1", mg: "3.4913379979529", ob: "0.0001", nkpr: "0.0076335877862595"},
	{id: 41, name: "Циклогексанон (C6H10O)", ppm: "1", mg: "4.0714189559877", ob: "0.0001", nkpr: "0.0083333333333333"},
	{id: 42, name: "Этан (C2H6)", ppm: "1", mg: "1.2474279426817", ob: "0.0001", nkpr: "0.004"},
	{id: 43, name: "Этанол (C2H5OH)", ppm: "1", mg: "1.9111326202661", ob: "0.0001", nkpr: "0.0032258064516129"},
	{id: 44, name: "Этантиол-этилмеркаптан (С2H5SH)", ppm: "1", mg: "2.5775769101331", ob: "0.0001", nkpr: "0.0035714285714286"},
	{id: 45, name: "Этилацетат (C4H8O2)", ppm: "1", mg: "3.6550012077789", ob: "0.0001", nkpr: "0.005"},
	{id: 46, name: "Этилбензол-Ксилол (C8H10)", ppm: "1", mg: "4.4043706243603", ob: "0.0001", nkpr: "0.01"},
	{id: 47, name: "Этилен (C2H4)", ppm: "1", mg: "1.1636299897646", ob: "0.0001", nkpr: "0.0043478260869565"}
]


$(document).ready(function() {


	for (let i = 0; i < gazArray.length; i++) {
		$("#calc_gaz").append(`<option value="${i}">${gazArray[i].name}</option>`);
	}
	
	$('.calc__btn--calc').click(function(){
		calculate();
	});



	function calculate() {

		var calc_gaz = $('#calc_gaz').val();
		var calc_unit = $('input[name=calc_unit]:checked').val();
		var calc_value = $('#calc_value').val();

		if ( calc_unit == 1 ) {
			var calc_table_1 = +gazArray[calc_gaz].ppm * calc_value;
			var calc_table_2 = +gazArray[calc_gaz].mg * calc_value;
			var calc_table_3 = +gazArray[calc_gaz].ob * calc_value;
			var calc_table_4 = +gazArray[calc_gaz].nkpr * calc_value;

			$('#calcTable_val_1').text( (+calc_table_1).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_2').text( (+calc_table_2).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_3').text( (+calc_table_3).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_4').text( (+calc_table_4).toLocaleString("ru", {maximumFractionDigits : 5}) );
		}
		
		if ( calc_unit == 2 ) {
			var calc_table_1 = calc_value / +gazArray[calc_gaz].mg;
			var calc_table_2 = calc_value;
			var calc_table_3 = +gazArray[calc_gaz].ob * calc_table_1;
			var calc_table_4 = +gazArray[calc_gaz].nkpr * calc_table_1;

			$('#calcTable_val_1').text( (+calc_table_1).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_2').text( (+calc_table_2).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_3').text( (+calc_table_3).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_4').text( (+calc_table_4).toLocaleString("ru", {maximumFractionDigits : 5}) );
		}

		if ( calc_unit == 3 ) {
			var calc_table_1 = calc_value / +gazArray[calc_gaz].ob;
			var calc_table_2 = calc_table_1 * gazArray[calc_gaz].mg;
			var calc_table_3 = calc_value;
			var calc_table_4 = +gazArray[calc_gaz].nkpr * calc_table_1;

			$('#calcTable_val_1').text( (+calc_table_1).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_2').text( (+calc_table_2).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_3').text( (+calc_table_3).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_4').text( (+calc_table_4).toLocaleString("ru", {maximumFractionDigits : 5}) );
		}

		if ( calc_unit == 4 ) {
			var calc_table_1 = calc_value / +gazArray[calc_gaz].nkpr;
			var calc_table_2 = calc_table_1 * gazArray[calc_gaz].mg;
			var calc_table_3 = calc_table_1 * gazArray[calc_gaz].ob;
			var calc_table_4 = calc_value;

			$('#calcTable_val_1').text( (+calc_table_1).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_2').text( (+calc_table_2).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_3').text( (+calc_table_3).toLocaleString("ru", {maximumFractionDigits : 5}) );
			$('#calcTable_val_4').text( (+calc_table_4).toLocaleString("ru", {maximumFractionDigits : 5}) );
		}
		

	}

});