$(document).ready(function() {

/*INTRO SECTION*/

var notify = function(message) {
      var $message = $('<p style="display:none;">' + message + '</p>');

      $('.notifications').append($message);
      $message.slideDown(300, function() {
        window.setTimeout(function() {
          $message.slideUp(300, function() {
            $message.remove();
          });
        }, 2000);
      });
    };

var waypoints = $('#about-section').waypoint({
  handler: function(direction) {
    notify(this.element.id + ' hit')
  }
})

//Hides descriptions of buttons in intro.
	$('#aboutme').hide();
	$('#towork').hide();
	$('#at').hide();

//Hovering over buttons in intro page.

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



});