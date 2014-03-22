$(document).ready(function () {

	/* Make nav stick to top */
	var stickyTop = $('nav').offset().top; // returns number 
 
	$(window).scroll(function(){ // scroll event  
	
		/* Only call when non-Responsive */
		if($(document).width() > 567){ 
		
			$navWidth = $('nav').width();
			var windowTop = $(window).scrollTop(); // returns number
			
			//if nav top is touching the top of the window, make nav stick to it
			if (stickyTop < windowTop) {
				$('nav').css({ position: 'fixed', top: 0, width: $navWidth });
			}
			else {
				$('nav').css({ position: 'static', width:'25%' });
			}
		}		
	});

});

