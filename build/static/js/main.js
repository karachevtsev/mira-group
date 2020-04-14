"use strict";

$(document).ready(function () {
  $('.js-main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true
  });
  var header = $('.js-header');
  var headerOffset = header.offset();
  var headerHeight = header.innerHeight();
  var section = $('.hero');
  $(window).scroll(function () {
    if ($(window).scrollTop() > headerOffset.top) {
      header.addClass('fixed-top');
      section.css('padding-top', headerHeight);
    } else {
      header.removeClass('fixed-top');
      section.css('padding-top', 0);
    }
  });
});