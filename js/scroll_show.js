$(function() {
	$(window).scroll(function () {
		var s = $(this).scrollTop();
		var m = $(window).height()-60;
		if(s > m) {
			$("#nav").fadeIn('slow');
		} else {
			$("#nav").fadeOut('slow');
		}
	});
});