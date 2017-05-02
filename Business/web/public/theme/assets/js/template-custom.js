var $ = $.noConflict();
$(function () {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
    //nav hover dropdown

    //preloader
    $(window).preloader({
        delay: 500
    });
//sticky header
    $(window).on("resize", function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });

//sticky header on scroll
    $(".sticky-header").sticky({topSpacing: 0});
    //hero text fade flexslider
    $('.gallery-slider').flexslider({
        controlNav: false,
        directionNav: true,
        slideshowSpeed: 5000
    });
//testimonial slider
    $('.testi-slider').flexslider({
        smoothHeight: true,
        controlNav: true,
        directionNav: false,
        animation: "slide"
    });

    $(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });

    //back to top
    //Check to see if the window is top if not then display button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on("click", function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});


