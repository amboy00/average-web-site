$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 5000,
    pause_on_hover: true,
    animation_speed: 1300,
    navigation_arrows: true,
  }
});


// $('#myModal').foundation('reveal', 'open');

$('.wrapper').hide();

$('#continue').on('click', function(e) {
  e.preventDefault();
  $('.continue').hide();
  $('.wrapper').show();

  setTimeout( function() {
    $('#myModal').foundation('reveal', 'open');
  }, 2000)

});


// Navigation Scrollllllling
var scrollNotice = $('.scrollNotice'),
    threshold = 50,
    scrollPos = 0,
    opaqueState = false;

$(document).on('scroll', function() {
  scrollPos = $(this).scrollTop();

  if(scrollPos > threshold) {
    opaque(true);
  } else {
    opaque(false);
  }
});

function opaque(state) {
  if ( state && !opaqueState ) {
    scrollNotice.addClass('show');
    opaqueState = true;
  }
}
