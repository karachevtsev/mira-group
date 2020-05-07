$(document).ready(function () {
  $('.js-main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true
  })
  const header = $('.js-header')
  const headerOffset = header.offset()
  const headerHeight = header.innerHeight()
  const section = $('.hero')
  $(window).scroll(function () {
    if ($(window).scrollTop() > headerOffset.top) {
      header.addClass('fixed-top')
      section.css('padding-top', headerHeight)
    } else {
      header.removeClass('fixed-top')
      section.css('padding-top', 0)
    }
  })
  const form = $('#form')
  const submitBtn = $('#submit')
  const modal = $('#modal')
  form.validate({
    rules: {
      phone: {
        required: true,
        digits: true
      }
    },
    submitHandler: function (form) {
      submitBtn.prop('disabled', true).addClass('is-loading')
      $.ajax({
        type: form.method,
        url: form.action,
        data: $(form).serialize(),
        success: function () {
          $(form).trigger('reset')
          modal.modal('show')
          submitBtn.prop('disabled', false).removeClass('is-loading')
        },
        error: function () {
          modal.find('.modal-message').html('Ошибочка! Что-то пошло не так!')
          modal.modal('show')
          submitBtn.prop('disabled', false).removeClass('is-loading')
        }
      })
    }
  })
  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {
    $('body').on('mousewheel', function (event) {
      event.preventDefault()
      const wheelDelta = event.wheelDelta
      const csp = window.pageYOffset
      window.scrollTo(0, csp - wheelDelta)
    })
  }
  $('.js-scroll-to').on('click', function (event) {
    event.preventDefault()
    const hash = $(this).attr('href').split('#')[1]
    const aTag = $('a[name=' + `${hash}` + '],[id=' + `${hash}` + ']')
    const menu = $('.navbar-collapse')
    if (aTag.length) {
      $('html, body').animate({ scrollTop: aTag.offset().top }, 500, function () {
        location.hash = hash
      })
    }
    if (menu.hasClass('show')) {
      menu.removeClass('show')
    }
  })
  $(window).on('load', function () {
    $('.loader').fadeOut()
    $('.spinner-border').delay(200).fadeOut('slow')
  })
  function intermediate (f, ms = 100) {
    let t
    return (...a) => {
      clearTimeout(t)
      t = setTimeout(() => {
        f(...a)
      }, ms)
    }
  }
  $('.js-footer-date').text(new Date().getFullYear())
  const toTop = $('.js-to-top')
  toTop.hide().on('click', function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 300)
  })
  function h () {
    $(document).scrollTop() >= 250 ? toTop.fadeIn() : toTop.fadeOut()
  }
  $(window).on('scroll', intermediate(h))
  h()
})
