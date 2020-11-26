$(document).ready(function() {

	$('.cases__card').each(function(){
		var card_id = $(this).attr('id').split("_")[1];
		//alert(card_id);
		var timer = 300 + (+card_id * 300);
		$(this).delay(timer).animate({opacity: "1"}, 100);
	});
	

	
});