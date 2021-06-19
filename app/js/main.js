$(document).ready(function(){
    $('[data-submenu]').slideUp();
    $('[data-navlink]').click(function(){
        var id = $(this).attr('data-navlink');
        $('[data-submenu="'+id+'"]').slideToggle(200);
    });

    $('[data-hamburger]').click(function(){
        var id = $(this).attr('data-hamburger');
        $('[data-mobile-nav="'+id+'"]').toggleClass('active');
    });
});