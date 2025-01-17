/*
    Phantom by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: [ '1281px', '1680px' ],
        large: [ '981px', '1280px' ],
        medium: [ '737px', '980px' ],
        small: [ '481px', '736px' ],
        xsmall: [ '361px', '480px' ],
        xxsmall: [ null, '360px' ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Touch detection.
    if (browser.mobile)
        $body.addClass('is-touch');

    // Auto-resizing textareas.
    $('form textarea').each(function() {
        var $this = $(this),
            $wrapper = $('<div class="textarea-wrapper"></div>');

        $this.wrap($wrapper)
            .attr('rows', 1)
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .on('input', function() {
                $this.css('height', 'auto').css('height', $this.prop('scrollHeight') + 'px');
            }).trigger('input');
    });

    // Menu.
    var $menu = $('#menu');

    $menu.wrapInner('<div class="inner"></div>');

    $menu._locked = false;

    $menu._lock = function() {
        if ($menu._locked) return false;
        $menu._locked = true;
        setTimeout(() => $menu._locked = false, 350);
        return true;
    };

    $menu._show = function() {
        if ($menu._lock()) $body.addClass('is-menu-visible');
    };

    $menu._hide = function() {
        if ($menu._lock()) $body.removeClass('is-menu-visible');
    };

    $menu._toggle = function() {
        if ($menu._lock()) $body.toggleClass('is-menu-visible');
    };

    $menu.appendTo($body)
        .on('click', event => event.stopPropagation())
        .on('click', 'a', function(event) {
            var href = $(this).attr('href');
            event.preventDefault();
            event.stopPropagation();
            $menu._hide();
            if (href !== '#menu') setTimeout(() => window.location.href = href, 350);
        })
        .append('<a class="close" href="#menu">Close</a>');

    $body.on('click', 'a[href="#menu"]', function(event) {
        event.preventDefault();
        $menu._toggle();
    }).on('click', () => $menu._hide())
    .on('keydown', event => { if (event.keyCode === 27) $menu._hide(); });

})(jQuery);

// Hamburger toggle function
document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('#top-menu ul');
    menu.classList.toggle('show'); // Toggle the menu visibility
});
