$(document).ready(function () {
    if ($(window).width() > 800) {
        $('.links').css('transform', `translateX(${$('.nav-sign-up').outerWidth() + 4}px)`);

        $(document).scroll(function () {
            const height = $(this).scrollTop();
            if (height > 400) {
                $('.links').css('transform', 'translateX(0)');
                $('.nav-sign-up').css('opacity', 1);
            } else {
                $('.links').on('transitionend', function () {
                    $('.nav-sign-up').css('opacity', 0);
                });
                $('.links').off('transitionend');
                $('.links').css('transform', `translateX(${$('.nav-sign-up').outerWidth() + 4}px)`);
            }
        });
    } else {
        $('.nav-sign-up').css('opacity', 1);
    }
});