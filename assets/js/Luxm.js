// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function ($) {
  //primary navigation slide-in effect
  console.log('window.width', $(window).height())
  var headerHeight = $('.masthead').height(),
    bannerHeight = $('.intro-header .container').height();
  $(window).on('scroll',
    function (event) {
      // console.log('eventdata', event.data.previousTop)
      // console.log(headerHeight,bannerHeight)
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && $('.masthead').hasClass('is-fixed')) {
          $('.masthead').addClass('is-visible');
        } else {
          $('.masthead').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.masthead').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.masthead').hasClass('is-fixed')) $('.masthead').addClass('is-fixed');
      }
      this.previousTop = currentTop;
    });
});