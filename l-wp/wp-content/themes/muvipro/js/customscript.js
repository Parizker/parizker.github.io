/**
 * Copyright (c) 2016 Gian MR
 * Gian MR Theme Custom Javascript
 *
 * @package Muvipro
 */

(function(sidr) {
    "use strict"

    sidr.new('#gmr-topnavresponsive-menu', {
        name: 'menus',
        source: '.gmr-logomobile, .close-topnavmenu-wrap, .gmr-mainmenu, .gmr-secondmenu, .gmr-topnavmenu',
        displace: false,
        onOpen: function(name) {
            // Re-name font Icons to correct classnames and support menu icon plugins.
            var elems = document.querySelectorAll("#menus [class*='sidr-class-icon_'], #menus [class*='sidr-class-_mi']"),
                i;
            for (i = 0; i < elems.length; i++) {
                var elm = elems[i];
                if (elm.className) {
                    elm.className = elm.className.replace(/sidr-class-/g, '');
                }
            }
        }
    });

    window.onresize = function() {
        sidr.close('menus');
    };

    var closemenu = document.querySelector('#sidr-id-close-topnavmenu-button');
    if (closemenu !== null) {
        closemenu.addEventListener(
            'click',
            function(e) {
                e.preventDefault();
                sidr.close('menus');
            }
        );
    }

    /* $( '.sidr-inner li' ).each( */
    var elmTag = document.querySelectorAll('.sidr-inner li'),
        i;
    for (i = 0; i < elmTag.length; i++) {
        if (elmTag[i].querySelectorAll('ul').length > 0) {
            var elm = elmTag[i].querySelectorAll('a');
            if (elm !== null) {
                elm[0].innerHTML += '<span class="sub-toggle"><span class="gmr-icon-down"></span></span>';
            }
        }
    }

    /* $( '.sidr-inner .sub-toggle' ).click( */
    var elmTag = document.querySelectorAll('.sidr-inner .sub-toggle'),
        i;
    for (i = 0; i < elmTag.length; i++) {
        elmTag[i].addEventListener(
            'click',
            function(e) {
                e.preventDefault();
                var t = this;
                t.classList.toggle('is-open');
                if (t.classList.contains('is-open')) {
                    var txt = '<span class="gmr-icon-up"></span>';
                } else {
                    var txt = '<span class="gmr-icon-down"></span>';
                }
                t.innerHTML = txt;
                /* console.log (t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling); */
                var container = t.parentNode.parentNode.querySelectorAll('a')[0].nextElementSibling;
                if (!container.classList.contains('active')) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            }
        );
    }

})(window.sidr);

/* Click Dropdown Search */
(function() {
    "use strict";

    var btn = document.getElementById('search-menu-button-top');

    // Close the dropdown menu if the user clicks outside of it
    if (btn) {
        btn.addEventListener(
            'click',
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                var dropdowns = document.querySelector('.topsearchform');
                var closebtn = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"/></g></svg>';
                var searchbtn = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17z"/><path d="M26.657 14.343A7.975 7.975 0 0 0 21 12c-2.21 0-4.21.895-5.657 2.343" stroke-linecap="round"/><path d="M33.222 33.222l8.485 8.485" stroke-linecap="round"/></g></svg>';
                dropdowns.classList.toggle('open');
                if (dropdowns.classList.contains('open')) {
                    btn.innerHTML = closebtn;
                } else {
                    btn.innerHTML = searchbtn;
                }
                var getid = document.getElementById('search-topsearchform-container');
                document.addEventListener(
                    'click',
                    function(e) {
                        if (getid !== e.target && !getid.contains(e.target)) {
                            if (dropdowns.classList.contains('open')) {
                                dropdowns.classList.remove('open');
                                btn.innerHTML = searchbtn;
                            }
                        }
                    }
                );
            }
        );
    }

})();

/* Back to top */
(function() {
    "use strict";

    window.addEventListener(
        'scroll',
        function() {

            var elmontop = document.querySelector('.gmr-ontop');
            if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
                if (elmontop !== null) {
                    elmontop.style.display = 'block';
                    document.querySelector('.gmr-ontop').addEventListener(
                        'click',
                        function(e) {
                            e.preventDefault();
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            });
                        }
                    );
                }
            } else {
                if (elmontop !== null) {
                    elmontop.style.display = 'none';
                }
            }

        });
})();

/* Popup */
(function() {
    "use strict";

    var ms = document.querySelectorAll('[data-modal]');

    ms.forEach(function(t) {
        t.addEventListener('click', function(e) {
            e.preventDefault();

            var m = document.getElementById(t.dataset.modal);
            m.style.display = "block";

            var xs = m.querySelectorAll('.close-modal');
            xs.forEach(function(x) {
                x.addEventListener('click', function(e) {
                    e.preventDefault();
                    m.style.display = "none";
                });
            });
        });
    });

})();

/* Light off player */
(function() {
    "use strict";

    var btn = document.getElementById('gmr-button-light');
    var lightoff = document.getElementById('lightoff');

    // Close the dropdown menu if the user clicks outside of it
    if (btn) {
        btn.addEventListener(
            'click',
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                var elme = document.querySelector('.player-wrap');
                if (elme !== null) {
                    elme.classList.add('relative-video');
                }
                lightoff.style.display = 'block';
            }
        );
    }
    if (lightoff) {
        lightoff.addEventListener(
            'click',
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                var elme = document.querySelector('.player-wrap');
                if (elme !== null) {
                    elme.classList.remove('relative-video');
                }
                lightoff.style.display = 'none';
            }
        );
    }

})();

/* Mediabox */
(function() {
    "use strict";
    MediaBox('.gmr-trailer-popup');
})();



