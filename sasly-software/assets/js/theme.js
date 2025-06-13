/*-----------------------------------------------------------------------------------
    
    Template Name: Sasly - Multipurpose Landing Page HTML Template
    URI: site.com 
    Description: Sasly is a flexible and professional Multipurpose HTML template, ideal for a variety of landing page needs including SaaS, software, fintech, Ai, E-learning, creative agencies, consulting services, software subscriptions, web applications, and digital marketing websites. Designed with all the essential elements to create an impactful landing page or corporate site, Sasly covers every detail to suit your business needs. We have included best practices of web development and you can create a great website layout based on Bootstrap or Grid 1320px.
    Author: Pixelfit
    Author URI: https://themeforest.net/user/pixelfit
    Version: 1.0 

    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';    //====== Sticky Header 
    
    $(document).ready(function () {
        function initStickyHeader(headerSelector) {
            const header = $(headerSelector);
            let lastScroll = 0;
            let isScrolled = false;
    
            $(window).on('scroll', function () {
                const currentScroll = $(this).scrollTop();
                
                // Add/remove scrolled class
                if (currentScroll > 100 && !isScrolled) {
                    header.addClass('scrolled');
                    isScrolled = true;
                } else if (currentScroll <= 100 && isScrolled) {
                    header.removeClass('scrolled');
                    isScrolled = false;
                }

                // Handle transparency
                if (currentScroll <= 100) {
                    header.css('background-color', 'transparent');
                } else {
                    header.css('background-color', '#ffffff');
                }

                lastScroll = currentScroll;
            });
        }
        initStickyHeader('.header-area');

        // Mobile header menu toggle
        function initMobileHeaderMenu() {
            var $navMenu = $('.sasly-nav-menu');
            var $toggler = $('.navbar-toggler');
            var $close = $('.navbar-close');
            var $overlay = $('.offcanvas__overlay');

            function openMenu() {
                $navMenu.addClass('active');
                $overlay.addClass('active');
                $('body').addClass('mobile-menu-open');
            }
            function closeMenu() {
                $navMenu.removeClass('active');
                $overlay.removeClass('active');
                $('body').removeClass('mobile-menu-open');
            }

            $toggler.on('click', function () {
                openMenu();
            });
            $close.on('click', function () {
                closeMenu();
            });
            $overlay.on('click', function () {
                closeMenu();
            });
        }
        initMobileHeaderMenu();

        // Mobile header menu logic (new)
        function initCustomMobileHeader() {
            var $menuToggle = $('.mobile-menu-toggle');
            var $menu = $('.mobile-nav-menu');
            var $close = $('.mobile-menu-close');
            var $overlay = $('.mobile-menu-overlay');

            $menuToggle.on('click', function () {
                $menu.addClass('active');
                $overlay.addClass('active');
                $('body').addClass('mobile-menu-open');
            });
            $close.on('click', function () {
                $menu.removeClass('active');
                $overlay.removeClass('active');
                $('body').removeClass('mobile-menu-open');
            });
            $overlay.on('click', function () {
                $menu.removeClass('active');
                $overlay.removeClass('active');
                $('body').removeClass('mobile-menu-open');
            });
        }
        initCustomMobileHeader();
    });

    //===== Slick slider js

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                        dots: true
                    }
                }
            ]
        });
    }

    if ($('.company-slider').length) {
        $('.company-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 8,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

})(window.jQuery);