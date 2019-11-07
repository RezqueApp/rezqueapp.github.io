/**
 * Multiselect JS Init
 *
 * @author We Both
 * @version 1.0
 * @requires
 *
 */
$(function () {
  'use strict';

  $('.popup-iframe').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'popup--fade',
    closeBtnInside: false,
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
    fixedContentPos: false
  });

  $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'popup--no-margins popup--with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });


});
