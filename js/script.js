function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

// ----------------------------------------------

$(window).resize(function(event) {
  mainblock();
});

function mainblock() {
  let h = $(window).outerHeight();
  $('.mainblock').css('min-height', h);
}
mainblock();

$(window).scroll(function(event) {
  let s = 0 - $(this).scrollTop() / 2;
  $('.mainblock__image').css('transform', `translate3d(0, ${s}px, 0)`)
})

// ----------------------------------------------

$(document).ready(function() {
  $('.information__image-slider_photos').slick({
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 5,
    // responsive: [{
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'easeOutBounce',
  });
});
