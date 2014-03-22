$(document).ready(function () {


	/* Toggle slide down when nav h3 clicked */
	$mainNav = $('nav h3');
	
	$mainNav.click(function() {
		$('ul.subNav li').slideToggle('slow');
	});


});