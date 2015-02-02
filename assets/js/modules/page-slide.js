$(document).ready(function() {
	
	/**
	 * Set up the page slider.
	 */

	var body_height = $('body').css('height');
	//$('body, html').css('height', 'auto');

	// Set the .page width to the browsers width.
	$('.page-slide .page, .super-slide-intro').css('width', $('body').css('width'));

	// Set the .slide-wrappers width to the sum total of .page * the browsers width.
	var wrapper_width = $('.page').length * $('body').css('width').replace('px', '');
	$('.page-slide .slide-wrapper').css('width', wrapper_width + 'px');

	// Set the page hero height to that of the browser.
	$('.page-slide .page .hero, .page-slide .slide-images').css('height', body_height);

	/**
	 * Bind the click events to the header to slide the slide wrapper.
	 */
	$('header ul li > a').hover(function(e) {
		e.preventDefault();

		// Change the active class.
		$('header ul li.active').removeClass('active');
		$(this).parent('li').addClass('active');

		// Calculate the page margin.
		var page = $(this).parent('li').attr('id');
		var index = $('.page#page-' + page).index();
		var margin = ($('body').css('width').replace('px', '') * index) * -1;
			if(!isFinite(margin)) margin = 0;

		// Do the animation.
		$('.page-slide .slide-wrapper').css('height', $('.page#page-' + page).innerHeight());
		$('.page-slide .slide-wrapper').stop(true, false).animate({
			'margin-left': margin + 'px',
		}, 300);

		// Animate the hero background.
		if(!$('.page-slide .slide-images li#image-' + page).hasClass('active')) {
			$('.page-slide .slide-images li').not('.active').css('z-index', '1');
			$('.page-slide .slide-images li#image-' + page).css('z-index', '98').stop(true, false).animate({
				'opacity':1
			});
			$('.page-slide .slide-images li.active').stop(true, false).animate({
				'opacity': 0
			}, 300, function() {
				$('.page-slide .slide-images li.active').removeClass('active');
				$('.page-slide .slide-images li#image-' + page).addClass('active');
			});
		}

	});

	console.log($('.page:first').css('height'));
	$('body, .slide-wrapper').css('height', $('.page:first').css('height'));

});