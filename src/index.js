import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'magnific-popup/dist/magnific-popup.css';
import '@/scss/index.scss';

import lightbox from 'lightbox2';
import mixitup from 'mixitup';
import 'owl.carousel';
import 'magnific-popup';

function toggleNavBackgroundColor() {
  const $stickyNav = $('.sticky-nav');
  $(window).scrollTop() >= 50 ?
    $stickyNav.addClass('scrolled') :
    $stickyNav.removeClass('scrolled');
}

function closeModalMenu() {
  $('.main-nav').removeClass('opened');
  $('body').removeClass('disable-scroll');
}

function scrollToTarget() {
  let targetId = $(this).attr('href');
  let targetTop = $(targetId).offset().top;
  if ($(window).width() < 901) {
    closeModalMenu();
  }
  $('html, body').animate({
    scrollTop: targetTop - 70
  }, 800);
  return false;
}

function scrollToAboutSection() {
  let offset = $('#about').offset().top;
  $('html, body').animate({
    scrollTop: offset - 70
  });
  return false;
}

function setActiveLink() {
  let targets = $('header, section');
  let windowScroll = $(window).scrollTop();
  targets.each(function(index, target) {
    let targetTop = $(target).offset().top - 150;
    let targetBottom = targetTop + $(target).height();
    let targetId = $(target).attr('id');
    if (windowScroll > targetTop && windowScroll < targetBottom) {
      $('.main-nav__link.active').removeClass('active');
      $(`[href="#${targetId}"]`).addClass('active');
    }
  });
}

toggleNavBackgroundColor();
setActiveLink();

$(window).on('scroll', toggleNavBackgroundColor);

$(window).on('scroll', setActiveLink);

$('.main-nav__link').on('click', scrollToTarget);

$('.menu-trigger').on('click', function() {
  $('.main-nav').addClass('opened');
  $('body').addClass('disable-scroll');
});

$(document).on('keyup', function(e) {
  if (e.keyCode === 27) {
    closeModalMenu();
  }
});

$(document).on('click', '.main-nav.opened', function(e) {
  let target = e.target;
  if (
    $(target).hasClass('main-nav') ||
    $(target).hasClass('main-nav__list') ||
    $(target).closest('.main-nav__close').length > 0
  )
    closeModalMenu();
});

$('.header__arrow').on('click', scrollToAboutSection);

mixitup($('.works__container'), {
  animation: {
    duration: 300
  }
});

lightbox.option({
  fadeDuration: 500
});

$('.owl-carousel').owlCarousel({
  items: 1
});

$('.video__link').magnificPopup({
  disableOn: 620,
  type: 'iframe'
});

