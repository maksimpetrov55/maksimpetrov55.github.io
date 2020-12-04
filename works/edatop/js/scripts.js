$(document).ready(function() {

	$(function() {
		(function cropTitle() {
		  $(".rations__cut").each(function() {
			var $title = $(this).find("p");
			while ($title.height() > $(this).height()) {
			  $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
			}
		  });
		})();
	});

});