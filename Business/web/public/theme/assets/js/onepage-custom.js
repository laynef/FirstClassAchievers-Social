/* 
 One page custom file
 */


var $ = $.noConflict();
$(function () {
    "use strict";
// site preloader
    //sticky header
    $(window).on("resize",function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });
       //preloader
    $(window).preloader({
        delay: 500
    });
//auto close navbar-collapse on click a
            $('a.nav-link').on('click', function () {
                $('.navbar-toggler:visible').click();
            });
//sticky header on scroll
        $(".sticky-header").sticky({topSpacing: 0});
    //parallax
    //back to top
    //Check to see if the window is top if not then display button
    $(window).on("scroll",function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on("click",function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    //testimonial slider
        $('.testi-slider').flexslider({
            smoothHeight: true,
            controlNav: true,
            directionNav: false,
            animation: "slide"
        });
     $(function () {
                "use strict";
                $('.datepicker').datepicker({
                    startDate: '0',
                    autoclose: true
                });
                $('.clockpicker').clockpicker({
                    placement: 'bottom',
                    align: 'left',
                    autoclose: true,
                    'default': 'now'
                });
            });
            
//Auto Close Responsive Navbar on Click






///smooth sscroll

    $('.scroll-to a[href*="#"]:not([href="#"])').on("click",function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top -57
                }, 600);
                return false;
            }
        }
    });

//menu filter
                if ($('.menu-filter-items').length) {
                    var $galleryFilter = $('.menu-filter-items').isotope({
                        itemSelector: '.menu-item',
                        masonry: {
                            columnWidth: '.menu-item'
                        }
                    });
                    $('.menu-filter-list').on('click', 'li', function () {
                        var filterValue = $(this).attr('data-filter');
                        $('.menu-filter-list').find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $galleryFilter.isotope({filter: filterValue});
                    });

                    $galleryFilter.imagesLoaded().progress(function () {
                        $galleryFilter.isotope('layout');
                    });
                }
});