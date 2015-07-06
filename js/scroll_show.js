$(function() {
	$(window).scroll(function () {
		var s = $(this).scrollTop();
		var m = $(window).height()-65;
		if(s > m) {
			$("#nav").fadeIn('slow');
		} else {
			$("#nav").fadeOut('slow');
		}
	});
});