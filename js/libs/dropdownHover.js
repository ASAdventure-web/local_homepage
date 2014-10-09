/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies?: Twitter Bootstrap's Dropdown plugin
 *
 * A simple plugin to enable twitter bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * No license, do what you want. I'd love credit or a shoutout, though.
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */
;(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
			
            var $this = $(this).parent(),
                defaults = {
                    delay: 500,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                settings = $.extend(true, {}, defaults, options, data),
                timeout;

            // jQuery hoverIntent plugin instead of normal hover
			$this.hoverIntent({ sensitivity: 7, interval: 0, timeout: 0,
			over:function(){
				
				$allDropdowns.removeClass('open');
					
				if(settings.instantlyCloseOthers === true)
                	$allDropdowns.removeClass('open');

            	$(this).addClass('open');	
				window.clearTimeout(timeout);
                

            },
			out:function(){
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
					
                }, settings.delay);
            }
 			});
        });
    };


    $(document).ready(function() {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
		$('[data-hover="dropdown"]').dropdownHover();
		
		$('.nav').mouseout(function(){
			setTimeout(checkMenuSelected,200);
		});
		
    });
	
	function checkMenuSelected(){
		if(!$('.original').hasClass('open') && $('.dropdown .open').length == 0){
			$('.original').addClass('open');
		}
	}
	
})(jQuery, this);