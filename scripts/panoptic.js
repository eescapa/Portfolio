$(document).ready(function () {

	/* Make nav stick to top */
	var stickyTop = $('nav').offset().top; // returns number 

	
	$(window).scroll(function(){ // scroll event
 
		if($(document).width() > 645){  
			$navWidth = $('nav').width();
			var windowTop = $(window).scrollTop(); // returns number
			
			//if nav top is touching the top of the window, make nav stick to it
			if (stickyTop < windowTop) {
				$('nav').removeClass('nav_static');
				$('nav').width($navWidth);
				$('nav').addClass('nav_fixed');
				
				/* .nav_fixed { position:fixed; top: 0; width: $navWidth } */
			}
			else {
				$('nav').removeClass('nav_fixed');
				$('nav').css('width', '');
				$('nav').addClass('nav_static');
				
				/* .nav_static { position:static; top:auto; width:25% } */
			}
			
		//if in Responsive state	
		} else if ($(document).width() < 645) {
			$('nav').removeClass('nav_fixed');
			$('nav').css('width', '');
			$('nav').removeClass('nav_static');
			//Let responsive.css handle nav's style
		}
	});
	
	
	/* If window's been resized (ie. tablet orientation changed) trigger scroll 1 px */
	$(window).resize(function() {
		$(window).scrollTop($(window).scrollTop()+1);
		$(window).scrollTop($(window).scrollTop()-1);
	});
	
	
	/* OnClickListeners for section content */
	$('#appProjBtn').click(function() {
		$('div#appProjDiv').slideToggle('slow');
		$('div#graphicsBtn').hide();
		$('div#resumeDiv').hide();
	});
	
	$('#graphicsBtn').click(function() {
		$('div#appProjDiv').hide();
		$('div#graphicsDiv').slideToggle('slow');
		$('div#resumeDiv').hide();
	});
	
	$('#resumeBtn').click(function() {
		$('div#appProjDiv').hide();
		$('div#graphicsDiv').hide();
		$('div#resumeDiv').slideToggle('slow');
	});
	
	/* Make all links in footer open in new window */
	$('footer').find('a').attr('target','_blank');

});

