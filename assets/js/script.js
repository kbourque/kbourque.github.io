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

	var hovericon = function (pic, text) {
		$(pic).hover(

		function() {
			$(text).fadeIn();
			$(this).css('opacity', '0.97');
		},

		function() {
			$(text).fadeOut();
			$(this).css('opacity', '1');
		});
	}

	hovericon('#mainicon1', '#aboutme');
	hovericon('#mainicon2', '#towork');
	hovericon('#mainicon3', '#at');

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

/** WORK SECTION **/

var showtext = function (pic,text) {
	$(pic).hover(

	function(){
		$(text).fadeTo(800, 1, function() {});
  	},
  	function(){
  		$(text).fadeTo(800, 0, function() {});
  	}

	);
}

showtext('#gitletpic', '#gittext');
showtext('#redimg', '#redtext');
showtext('#dbimg', '#dbtext');
showtext('#kband', '#kbtext');

/** SKILLS SECTION **/
	
	/* COMMENTED CODE WILL IMPLEMENT LATER: LI SECTION RESPONSE WHEN YOU HOVER */

	// $('.progskills').hover(
	// 	function() {
	// 		$(this).animate({
	// 			// -webkit-box-shadow: 32px 22px 5px 0px rgba(0,0,0,0.75),
	// 			// -moz-box-shadow: 32px 22px 5px 0px rgba(0,0,0,0.75),
	// 			"box-shadow": 32px 22px 5px 0px rgba(0,0,0,0.75),
	// 		}, 5000)
	// 	},
	// 	$(this).hide()
	// 	);


});