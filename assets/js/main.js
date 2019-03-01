/*
  Spectral by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  */

(function($) {

  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#page-wrapper'),
    $banner = $('#banner'),
    $header = $('#header');

  // Breakpoints.
  breakpoints({
    xlarge:   [ '1281px',  '1680px' ],
    large:    [ '981px',   '1280px' ],
    medium:   [ '737px',   '980px'  ],
    small:    [ '481px',   '736px'  ],
    xsmall:   [ null,      '480px'  ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Mobile?
  if (browser.mobile)
    $body.addClass('is-mobile');
  else {

    breakpoints.on('>medium', function() {
      $body.removeClass('is-mobile');
    });

    breakpoints.on('<=medium', function() {
      $body.addClass('is-mobile');
    });

  }

  // Scrolly.
  $('.scrolly')
    .scrolly({
      speed: 1500,
      offset: $header.outerHeight()
    });

  function isEmpty(str) {
    return !$.trim(str);
  }

  // Contact Form
    $('#contact-form').submit( function (e) {
      e.preventDefault();

      var complete = true;
      if (isEmpty($('#name').val())) {
        complete = false;
        $('#name').addClass('error animated shake')
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated shake');
          });
      } else {
        $('#name').removeClass('error');
      }

      if (isEmpty($('#email').val())) {
        complete = false;
        $('#email').addClass('error animated shake')
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated shake');
          });
      } else {
        $('#email').removeClass('error');
      }

      if (isEmpty($('#message').val())) {
        complete = false;
        $('#message').addClass('error animated shake')
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated shake');
          });
      } else {
        $('#message').removeClass('error');
      }

      if (complete) {
        $('#submit').addClass('disabled');
        $.post('https://wt-edbc2c30266f4c42a8912ea7d10e7bb3-0.sandbox.auth0-extend.com/contact-form', {
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#message').val()
        }, function (data) {
          $('#submit').removeClass('disabled');
          if (data && data.msg === 'ok') {
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');

            $('#snackbar').text('Contact Submitted! I\'ll get back to you soon!');
            $('#snackbar').addClass('success show');
            setTimeout( function () {
              $('#snackbar').removeClass('success show');
            }, 3000);
          } else {
            $('#snackbar').text('Oh no! Something went wrong!');
            $('#snackbar').addClass('error show');
            setTimeout( function () {
              $('#snackbar').removeClass('error show');
            }, 3000);
          }
        });
      }
  });

})(jQuery);

