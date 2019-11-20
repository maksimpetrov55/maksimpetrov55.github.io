$(document).ready(function() {

	$(".wa-btn__link").mouseover(function(){
		$(".wa-btn__note").addClass('wa-btn__note--animation');
	});
	$(".wa-btn__link").mouseleave(function(){
		$(".wa-btn__note").removeClass('wa-btn__note--animation');
	});

});