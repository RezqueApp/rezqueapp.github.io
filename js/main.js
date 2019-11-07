/**
 * Main JS - GLobat init for template
 *
 * @author We Both
 * @version 1.0
 */

$(function () {
  'use strict';

  /* 1. Mobile Nav Offcanvas Toggle:  */
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });


  /* 2. Dropdown Menu */
	// Variable
	var $dropdown = $('.nav--has-sub-menu [data-toggle="dropdown"]');
	// Methods
	function initSubmenu($this) {
        if (!$this.next().hasClass('show')) {
            $this.parents('.dropdown-menu').first().find('.show').removeClass("show");
        }

        var $submenu = $this.next(".dropdown-menu");

        $submenu.toggleClass('show');
        $submenu.parent().toggleClass('show');
	}
	// Events
	$dropdown.on('click', function() {
		initSubmenu($(this));
		return false;
	});


  /* 3. Smooth Scroll Anchor */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });


  /* 4. Search Bar Toggle */
  var $searchBtn = $('.btn-search-toggle');
  var $searchBar = $('.search-bar');

  $searchBtn.click(function(){
    $searchBar.animate({
      width: "toggle"
    });
  });

});
