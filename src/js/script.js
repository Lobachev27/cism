/*Хедер*/

$(document).ready(function() {
  $('.header__burger').click(function(){
    $('.main').addClass('hidden');
    $('.header').addClass('hidden');
    $('.header-mobile').addClass('open');
    $('body').addClass('ov-hid');
  });
  $('.header__close').click(function(){
    $('.main').removeClass('hidden');
    $('.header').removeClass('hidden');
    $('.header-mobile').removeClass('open');
    $('body').removeClass('ov-hid');
  });

  $(window).resize(function() {
    if ($(window).width() >= '992'){
      $('.main').removeClass('hidden');
      $('.header').removeClass('hidden');
      $('.header-mobile').removeClass('open');
      $('body').removeClass('ov-hid');
    }
  });
});

/*Слайдер*/

$(document).ready(function() {
  var swiperMain = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 991 && swiperMain == undefined) {
      swiperMain = new Swiper('.main > .swiper-container', {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: 'vertical',
        effect: 'fade',
        speed: 1000,
        grabCursor: false,
        mousewheel: true,
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
          el: ".main > .swiper-container .swiper-pagination",
          clickable: true
        },
      });
    } else if (screenWidth < 992 && swiperMain != undefined) {
      swiperMain.destroy();
      swiperMain = undefined;
      $('.main > .swiper-container .swiper-wrapper').removeAttr('style');
      $('.main > .swiper-container .swiper-slide').removeAttr('style');
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });
});

/*Слайдер профилактика 2.0*/

$(document).ready(function() {
  var swiperPrevention = undefined;
  function initSwiper() {
    swiperPrevention = new Swiper('.prevention__slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
      grabCursor: false,
      autoHeight: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.prevention__slider .swiper-button-next',
        prevEl: '.prevention__slider .swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 120
        }
      }
    });
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });
});

/*Слайдер профилактика 2.0 нижний*/

$(document).ready(function() {
  var swiperPrevention2 = undefined;
  function initSwiper() {
    swiperPrevention2 = new Swiper('.prevention__box .swiper-container', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
      grabCursor: false,
      autoHeight: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.prevention__box .swiper-button-next',
        prevEl: '.prevention__box .swiper-button-prev'
      },
    });
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });
});

/*Слайдер новости*/

$(document).ready(function() {
  var swiperNews = undefined;
  function initSwiper() {
    swiperNews = new Swiper('.news__slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      /*slidesPerColumn: 3,
      slidesPerColumnFill: 'column',*/
      spaceBetween: 30,
      grabCursor: false,
      autoHeight: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.news__slider .swiper-button-next',
        prevEl: '.news__slider .swiper-button-prev'
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
        }
      },
      on: {
        init() {
          updateClasses(this);
        },
        slideChange() {
          updateClasses(this);
        },
      },
    });
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

  function updateClasses({ $el, slides, activeIndex }) {
    $el.find('.swiper-slide-prev-prev').removeClass('swiper-slide-prev-prev');
    slides.eq(activeIndex).prev().prev().addClass('swiper-slide-prev-prev');
  }
});

/*Анимация набора текста*/

$(document).ready(function() {
  $(".intro__title-text").typed({
    strings: ["Разрабатываем методические рекомендации для родителей и педагогов", "Анализируем <span>поведение</span> <span>детей</span> и <span>подростков</span> в социальных сетях <span class='intro__title-arrow'></span>"],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 60,
    backDelay: 2000,
    loop: false,
    cursorChar: "|",
    contentType: 'html'
  });
});

/*Анимация на первом слайде на десктопе*/

/*
$(document).ready(function() {
  var canvasDiv = document.getElementById('introAnimation');
  var options = {
    particleColor: '#737373',
    background: '#F8F8F8',
    interactive: true,
    speed: 'medium',
    density: 'medium'
  };
  var particleCanvas = new ParticleNetwork(canvasDiv, options);
});*/

$(document).ready(function() {
  particlesJS("introAnimation", {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#737373"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#737373"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#737373",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

/*Размытие при скролле на мобиле*/

$(document).ready(function() {

  var screenWidth = $(window).width();
  let didScroll = false;
  let scrollTimeout = null;

  $(document).scroll(function(){
    didScroll = true;
    if (screenWidth < 992) {
      $('.main-page').css({'webkit-filter':'blur(3px)', 'filter':'blur(3px)'});

      scrollTimeout = setTimeout(() => {
        if (didScroll) {
            didScroll = false;
            clearTimeout(scrollTimeout);
        } else {
            $('.main-page').css({'webkit-filter':'blur(0)', 'filter':'blur(0)'});
        }
      }, 1000);
    };
  });
});