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
  var form = $('#form');
  var submitBtn = $('#submit');
  var modal = $('#modal');
  form.validate({
    rules: {
      phone: {
        required: true,
        digits: true
      }
    },
    submitHandler: function submitHandler(form) {
      submitBtn.prop('disabled', true).addClass('is-loading');
      $.ajax({
        type: form.method,
        url: form.action,
        data: $(form).serialize(),
        success: function success() {
          $(form).trigger('reset');
          modal.modal('show');
          submitBtn.prop('disabled', false).removeClass('is-loading');
        },
        error: function error() {
          modal.find('.modal-message').html('Ошибочка! Что-то пошло не так!');
          modal.modal('show');
          submitBtn.prop('disabled', false).removeClass('is-loading');
        }
      });
    }
  });

  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {
    $('body').on('mousewheel', function (event) {
      event.preventDefault();
      var wheelDelta = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wheelDelta);
    });
  }
});