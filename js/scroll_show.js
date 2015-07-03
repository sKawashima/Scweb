$(function() {
	$(window).scroll(function () {
		var s = $(this).scrollTop();
		var m = $(window).height()-49;
		if(s > m) {
			$("#nav").fadeIn('slow');
		} else if(s < m) {
			$("#nav").fadeOut('slow');
		}
	});
});