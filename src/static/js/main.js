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
        type: 'POST',
        url: 'email.php',
        data: $(form).serialize(),
        success: function () {
          modal.modal('show')
          $(this).find('input').val('')
          $(this).trigger('reset')
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
})
