$(document).ready(function() {

	$('.product').hover(function() {
		$(this).find('.overlay').stop(true, true).fadeIn(200);
	}, function() {
		$(this).find('.overlay').stop(true, true).fadeOut(200);
	});

});