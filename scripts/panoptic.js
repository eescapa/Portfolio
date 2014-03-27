$(document).ready(function () {

	/*** OnClickListeners for buttons in <nav> and <section>'s nav bar ***/
	$('.appProjBtn').click({'sectionName':'appProj'}, activateSection);
	$('.graphicsBtn').click({'sectionName':'graphics'}, activateSection);
	$('.resumeBtn').click({'sectionName':'resume'}, activateSection);
	
	/*** Make all links in <footer> open in new window ***/
	$('footer').find('a').attr('target','_blank');


	/*** If window's been resized (ie. tablet orientation changed)
		* Scroll to the top of <section> ***/
	$(window).resize(function() {
		var new_position = $('section').offset();
		window.scrollTo(new_position.left, new_position.top - 1);
	});
	
	
	/*** Make <nav> stick to top ***/
	var stickyTop = $('nav').offset().top; //returns coordinates for the top of <nav>
	
	/** Scroll event listener to format <nav> **/
	$(window).scroll(function(){

 		/** If in Responsive Mode, remove all nav_ classes **/
 		if ($(document).width() < 645) {
			$('nav').removeClass('nav_fixed');
			$('nav').css('width', ''); //reset
			$('nav').removeClass('nav_static');
			//And let responsive.css handle rest of <nav>'s style
		}
 		
 		/** If in Desktop Mode, make <nav> fixed **/
		else {  
			$navWidth = $('nav').width();
			var windowTop = $(window).scrollTop(); // returns number
			
			/* if top of <nav> is below the top of the window, make <nav> the following:
				* .nav_static { position:static; top:auto; width:25% } */
			if (stickyTop > windowTop) {
				$('nav').removeClass('nav_fixed');
				$('nav').css('width', ''); //reset
				$('nav').addClass('nav_static');
			}
			
			/* if top of <nav> is touching/above the top of window, make nav the following:
				* .nav_fixed { position:fixed; top: 0; width: $navWidth } */
			else {
				$('nav').removeClass('nav_static');
				$('nav').width($navWidth);
				$('nav').addClass('nav_fixed');
			}
		}
		
	});
});

/*** Action for buttons in <nav> and <section>'s nav bar ***/
function activateSection(event) {
	/* Hide all section-divs inside <section> */
	$('div.sectionDiv').hide();

	/* Toggle/Show this section-div */
	var sectionId = event.data.sectionName + 'Div';
	$(document.getElementById(sectionId)).slideToggle('slow');
	
	/* scroll to <section>'s nav bar */
	var new_position = $('#sectionNavBar').offset();
	window.scrollTo(new_position.left,new_position.top);
}