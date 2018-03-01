$(window).click(function() {
  if ($('#navigation').hasClass('show')) {
    $('#navigation').removeClass('show');
  }
})

$(window).scroll(function() {
  parallaxScroll('#homepage');
  parallaxScroll('#our-service');
  parallaxScroll('#contact');

  $('#navigation').find('a').each(function() {
    let id = $(this).attr('href');
    if ($(window).scrollTop() >= $(id).offset().top - $('nav').outerHeight(true) || $(window).scrollTop() + $(window).height() >= $(id).offset().top + $(id).outerHeight()) {
      $('#navigation').find('a').removeClass('active');
      $(this).addClass('active');
    }
  })
})

$('#navigation').find('a').click(function(e) {
  e.preventDefault();
  // $(window).off('scroll');
  $('#navigation').find('a').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(id).offset().top - $('#navigation').outerHeight()
  }, 1500)
})

$('button.navbar-toggle').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  if ($('#navigation').hasClass('show')) {
    $('#navigation').removeClass('show');
  } else {
    $('#navigation').addClass('show');
  }
})

function inVisibleRange(block) {
  return ($(window).scrollTop() <= $(block).offset().top + $(block).outerHeight() && $(window).scrollTop() >= $(block).offset().top - $(window).height())
}

function parallaxScroll(block) {
  if (inVisibleRange(block)) {
    $(block).css('background-position-y', ($(window).scrollTop() - $(block).offset().top) / 1.3 + 'px');
  }
}
