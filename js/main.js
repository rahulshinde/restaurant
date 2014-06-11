var fixmeTop = $('.nav-fixed').offset().top; // Get initial position
$(window).scroll(function() {            // Assign scroll event listener
    var currentScroll = $(window).scrollTop(); // Get current position
    if (currentScroll >= fixmeTop) { // Make it fixed if you've scrolled to it
        $('.nav-fixed').css({
            position: 'fixed',
            top: '0',
            right: '0'
        });
    } else {                       // Make it static if you scroll above
        $('.nav-fixed').css({
            position: 'static'
        });
    }
});