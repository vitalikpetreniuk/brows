var $ = jQuery;
$(document).ready(function() {
  initFixedHeader();
  initMobileNav();
  initAnchorMenu();
  initSlickSlider();
  initGallerySlider();
  initSlickSlider2();
  initSlickSlider3();
  initSlickSlider4();
  initSlickSlider5();
  initSlickSlider6();
  initSlickSlider7();
  initAccordion();
});

function initFixedHeader() {
  window.onscroll = function() {myFunction()};
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      $('#header').addClass("sticky");
    } else {
      $('#header').removeClass("sticky");
    }
    if (window.pageYOffset > sticky) {
      $('.navigation-page').addClass("sticky");
    } else {
      $('.navigation-page').removeClass("sticky");
    }
  }
}
function initMobileNav(){
  $('.mob-btn').on('click', function(){
    $(this).closest('#nav').toggleClass('active');
    $('body').toggleClass('open-nav');
    return false;
  });
};
function initAnchorMenu() {
  $(".navigation-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
     top = $(id).offset().top - 185;
      if($(this).parent().hasClass('active')){
       return false;
     }
     $('.navigation-menu li').removeClass('active');
     $(this).parent().addClass('active');
    $('body,html').animate({scrollTop: top}, 1000);
  });
  $(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
    var top  = $(el).offset().top - 185;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }
    })
  });
}
function initSlickSlider() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
}
function initGallerySlider() {
  const $buttons = $('.slider-nav > li').click(function() {
    $slick.slick('slickGoTo', $buttons.index(this));
  });
  const $slick = $('.slider-for')
    .on('init beforeChange', function(e, slick, currSlide, nextSlide) {
      $buttons
        .removeClass('active')
        .eq(e.type === 'init' ? slick.currentSlide : nextSlide)
        .addClass('active');
    })
    .slick({
      infinite: false,
      speed: 300,
      arrows: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true
          }
        }
      ]
    });
}
function initSlickSlider2() {
  $('.clients-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false
  });
}
function initSlickSlider3() {
  $('.clients-slider-large').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
function initSlickSlider4() {
  $('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
function initSlickSlider5() {
  $('.academy-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });
}
function initSlickSlider6() {
  $('.slider-text-block').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
}
function initSlickSlider7() {
  $('.reviews-slider-rating').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
function initAccordion(){
  $('.accordion .opener').on('click', function() {
    if($(this).closest('li').hasClass('active')){
      $(this).closest('li').removeClass('active');
      $(this).closest('li').find('.accordion-slide').slideUp();
    } else {
      $(this).closest('.accordion').find('.accordion-slide').slideUp();
      $(this).closest('.accordion').find('li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('li').find('.accordion-slide').slideDown();
    }
    return false;
  });
  $('.accordion-mobile-opener').on('click', function() {
    $(this).closest('.accordion-mobile > li').toggleClass('open');
    $(this).siblings('.accordion-mobile-slide').slideToggle();
    return false;
  });
}