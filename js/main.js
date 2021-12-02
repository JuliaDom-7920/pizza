$(document).ready(function () {

    // Scroll
    $(window).scroll(function() {
        if($(window).width() < '1024') {
            $('header').css('background-color', '#0c0c0c');
        }
        else if(pageYOffset > 100 && $(window).width() > '1024') {
            $('header').css('background-color', '#0c0c0c');
        }
        else {
            $('header').css('background-color', 'transparent');
        }
    });

    // Drop-down menu 
    $('li.menu__item:last-child').hover(
        function () {
            $('.drop-down').slideDown(200);
            $('.drop-down').css('display', 'block');
        },
        function () {
            $('.drop-down').slideUp(300).delay(200);
        }
    );

    // Mobile menu 
    $('.menu__mobile-btn').click(function() {
        $('.menu-toggle').toggleClass('is-active');
        $('.menu__bottom').slideToggle();
        $('.menu__bottom').css('display', 'flex');
    });
});