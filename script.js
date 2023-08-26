(function($) {
    "use strict"; // Start of use strict

    // Hamburguer menu
    $('.ud-main-menu__hamberger').click(function() {
        $('.ud-main-menu__overlay').toggleClass('ud-main-menu__overlay--active' );
        $('.ud-main-menu__nav').toggleClass('ud-main-menu__nav--active');
    });

    // Close menu.
    $('.ud-main-menu__overlay').click(function() {
        $(this).removeClass('ud-main-menu__overlay--active');
        $('.ud-main-menu__nav').removeClass('ud-main-menu__nav--active');
    } );

    $('.ud-main-menu__nav li').click(function() {
        // Check if this has a sub menu class .ud-main-menu__nav__sub-menu
        if ( $(this).find('.ud-main-menu__nav__sub-menu').length ) {
            $(this).find('.ud-main-menu__nav__sub-menu').toggleClass('ud-main-menu__nav__sub-menu--active');
        }
    });

})(jQuery); // End of use strict