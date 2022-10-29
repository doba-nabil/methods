$('.type').change(function () {
    if ($('.type').val() == 'house') {
        $('.company-div').hide(300);
        $('.flate-div').hide(300);
        $('.house-div').show(300);
    } else if ($('.type').val() == 'flate') {
        $('.company-div').hide(300);
        $('.house-div').hide(300);
        $('.flate-div').show(300);
    } else if ($('.type').val() == 'company') {
        $('.house-div').hide(300);
        $('.flate-div').hide(300);
        $('.company-div').show(300);
    } else {
        $('.house-div').hide(300);
        $('.flate-div').hide(300);
        $('.company-div').hide(300);
    }
});

if ($('.type').val() == 'house') {
    $('.company-div').hide(1);
    $('.flate-div').hide(1);
    $('.house-div').show(1);
} else if ($('.type').val() == 'flate') {
    $('.company-div').hide(1);
    $('.house-div').hide(1);
    $('.flate-div').show(1);
} else if ($('.type').val() == 'company') {
    $('.house-div').hide(1);
    $('.flate-div').hide(1);
    $('.company-div').show(1);
} else {
    $('.house-div').hide(1);
    $('.flate-div').hide(1);
    $('.company-div').hide(1);
}


$(".member").click(function () {
    if ($(this).is(":checked")) {
        $('.email-div').hide(300);
        $('.login-div').show(300);
    } else {
        $('.login-div').hide(300);
        $('.email-div').show(300);
    }
});

if ($(".member").is(":checked")) {
    $('.email-div').hide(1);
    $('.login-div').show(1);
} else {
    $('.login-div').hide(1);
    $('.email-div').show(1);
}


AOS.init({
    duration: 800,
    easing: 'slide'
});
// $(function () {
//     $('.ul-cart').hover(function () {
//         $('.shopping-cart').addClass('open');
//     });
//     $('.ul-cart').mouseout(function () {
//         $('.shopping-cart').removeClass('open');
//     });
//     $('.shopping-cart').hover(function () {
//         $(this).addClass('open');
//     });
//     $('.shopping-cart').mouseout(function () {
//         $(this).removeClass('open');
//     });
//
//     // $('.close-cart').click(function () {
//     //     $('.collapsed-cart').removeClass('open');
//     //     $('.shopping-cart').removeClass('open');
//     //     $('body').css('overflow', 'auto');
//     // });
// });
// $(function () {
//     // var $first_height = $('.close-cart');
//     // var $second_height = $('.proceed');
//     var $main_height = $('#cart');
//     var $window = $(window).on('resize', function () {
//         var height = $(this).height());
//         $main_height.height(height);
//     }).trigger('resize');
// });

(function ($) {

    "use strict";

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll',
        horizontalOffset: 0,
        verticalOffset: 0
    });

    // Scrollax
    $.Scrollax();


    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    var carousel = function () {
        var items = $('.slider-item');
        $('.home-slider').owlCarousel({
            loop: items.length > 1 ? true : false,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });
        $('.description-slider').owlCarousel({
            loop: false,
            autoplay: false,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            dots: true,
            navText: ["<span class='ion-md-arrow-dropleft'></span>", "<span class='ion-md-arrow-dropright'></span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true
                }
            }
        });
        $('.products-slider').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-dropleft'></span>", "<span class='ion-md-arrow-dropright'></span>"],
            responsive: {
                0: {
                    nav: false,
                    items: 1,
                },
                600: {
                    nav: false,
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
        $('.courses-slider').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-dropleft'></span>", "<span class='ion-md-arrow-dropright'></span>"],
            responsive: {
                0: {
                    nav: false,
                    items: 2,
                },
                600: {
                    nav: false,
                    items: 3,
                },
                1000: {
                    items: 4,
                }
            }
        });
        $('.opinion-slider').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-dropleft'></span>", "<span class='ion-md-arrow-dropright'></span>"],
            responsive: {
                0: {
                    nav: false,
                    items: 1,
                },
                600: {
                    nav: false,
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
        $('.team-slider').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-dropleft'></span>", "<span class='ion-md-arrow-dropright'></span>"],
            responsive: {
                0: {
                    nav: false,
                    items: 1,
                },
                600: {
                    nav: false,
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            }
        });

    };
    carousel();

    $('nav .dropdown').hover(function () {
        var $this = $(this);
        // 	 timer;
        // clearTimeout(timer);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').addClass('show');
    }, function () {
        var $this = $(this);
        // timer;
        // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
        // }, 100);
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();


    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, {offset: '95%'});

    }
    counter();

    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '95%'});
    };
    contentWayPoint();


    // navigation
    var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();

            var hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });


            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
        $('body').on('activate.bs.scrollspy', function () {
            console.log('nice');
        })
    };
    OnePageNav();


    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    $('.appointment_date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });

    $('.appointment_time').timepicker();


})(jQuery);

owl.on('changed.owl.carousel', function (event) {
    $(".owl-item video").each(function (index, value) {
        this.pause();
        this.currentTime = 0;

    });
    $(".owl-item.active video").each(function (index, value) {
        this.play();
    });
});

