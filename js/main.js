(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});





    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Video controls on hover and click
    document.querySelectorAll('.card').forEach(card => {
        const video = card.querySelector('.portfolio-video');
        
        if (video) {
            // Play the video when hovering
            card.addEventListener('mouseenter', function() {
                video.play();
            });

            card.addEventListener('mouseleave', function() {
                video.pause();
                video.currentTime = 0; // Reset video when not hovering
            });
        }

        // Flip the card when clicked
        card.addEventListener('click', function() {
            card.classList.toggle('flip');
        });
    });

    // Handle the download and GitHub links
    document.querySelectorAll('.card-back .btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the card flip when clicking icons

            const target = button.getAttribute('data-target');
            if (target === 'apk') {
                const apkLink = button.getAttribute('data-apk-link');
                window.open(apkLink,'_blank'); // Handle APK download for this specific card
            } else if (target === 'github') {
                const githubLink = button.getAttribute('data-github-link');
                window.open(githubLink, '_blank'); // Open GitHub link in a new tab for this specific card
            }
        });
    });


})(jQuery);

