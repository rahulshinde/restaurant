//waypoints for .nav-up
$(function(){
    $('#menu-nav').waypoint(function(direction) {
        console.log(direction); 
        $('#nav-up').toggleClass('is-visible');
    }, {
        offset: function() {
            return $(this).height() * -1;
        }
    });
});


// smooth scroll js
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});