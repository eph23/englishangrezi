$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });
});



$('.hero-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  touchDrag: true,
  mouseDrag: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
$('.carousel-testimonial').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})