/* Agregar clase al hacer scroll */

$(function() {
    var header = $('header');
    var logo = $('#mainLogo');
    
    var heightThreshold = $("section.skills").offset().top + 40;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= heightThreshold ) {
            header.addClass('white-bg');
            logo.addClass('white-bg');
        } else {
            header.removeClass('white-bg');
            logo.removeClass('white-bg');
        }
    });
})