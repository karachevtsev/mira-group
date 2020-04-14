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
})
