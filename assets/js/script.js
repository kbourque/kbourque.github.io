$(document).ready(function() {

/** INTRO SECTION **/

// var waypoints = $('#about-section').waypoint({
//   handler: function(direction) {
//     alert('Top of notify element hit top of viewport.');
//   }
// })

/* Hides descriptions of buttons in intro. */
	$('#aboutme').hide();
	$('#towork').hide();
	$('#at').hide();

/* Hovering over buttons in intro page. */

	$('#mainicon1').hover(

		function() {
			$('#aboutme').fadeIn();
			$(this).css('opacity', '0.97');
		},

		function() {
			$('#aboutme').fadeOut();
			$(this).css('opacity', '1');
		});

	$('#mainicon2').hover(

		
		function() {
			$('#towork').fadeIn();
			$(this).css('opacity', '0.97');
		},

		function() {
			$('#towork').fadeOut();
			$(this).css('opacity', '1');
		});

	$('#mainicon3').hover(

		
		function() {
			$('#at').fadeIn();
			$(this).css('opacity', '0.97');
		},

		function() {
			$('#at').fadeOut();
			$(this).css('opacity', '1');
		});
/* Clicking buttons brings to respective div. */

	$('#mainicon1').click(function() {
			$(window).scrollTo('#about-section', 800);
		}
	);

	$('#mainicon2').click(function() {
			$(window).scrollTo('#work-section', 800);
		}
	);

	$('#mainicon3').click(function() {
			$(window).scrollTo('#contact-section', 800);
		}
	);


});