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
    });

    //===== Slick slider js

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
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