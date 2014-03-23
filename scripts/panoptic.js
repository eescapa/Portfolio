$(document).ready(function () {

	/* Make nav stick to top */
	var stickyTop = $('nav').offset().top; // returns number 

	
	$(window).scroll(function(){ // scroll event
 
		if($(document).width() > 567){  
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
		} else if ($(document).width() < 567) {
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
	
	/* Make all links in footer open in new window */
	$('footer').find('a').attr('target','_blank');

});

