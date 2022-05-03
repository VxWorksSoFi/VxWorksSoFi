"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('body').addClass('overflow');
      }
    });
  } // smoth scroll


  $('.scroll-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  }); //accordeon

  $(function () {
    $('.accordion__item h3').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $('.accordion__content').slideUp(400);
        $('.accordion__item h3').removeClass('active');
      }

      $this.toggleClass('active');
      $this.next().slideToggle();
    });
  }); //animation

  AOS.init();
});