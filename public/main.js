(function ($) {
    $(function () {
        var $menu = $('.kss-menu'),
            $menuItem = $menu.find('.kss-menu-item'),
            ref = $menu.data('kss-ref');
        
        // Syntax hightlignting with Rainbow.js
        $('code.html').attr('data-language', 'html');
        $('code.css').attr('data-language', 'css');
        $('code.less, code.scss').attr('data-language', 'generic');

        $(document).ready(function() {

            // Activate current page item and hide other sub menus
            setActiveEntry($menuItem.eq(ref));
            // $menuItem.eq(ref).addClass('kss-active');
            // $('.kss-nav .kss-menu-item ul').hide(0);
            // $('.kss-nav .kss-menu-item.kss-active ul').show(0);

            // Smoothscroll            
            $('.kss-nav a').click( function() {
                var speed = 300;

                var page = $(this).attr('href'),
                    idx = page.indexOf("#");

                if(idx > -1)  {
                    var hash = page.substr(page.indexOf("#"), page.length - page.indexOf("#"));
                    hash = hash.replace(/\./ig, '\\.');
                    $('html, body').animate( { 
                        scrollTop: $(hash).offset().top 
                    }, speed );
                    return false;
                }
                else {
                    var href = $(this).attr('href');
                    setActiveEntry($(this).parents('li'));
                    $('.kss-content').load(href + ' .kss-content', function() {
                        $('html, body').animate( { 
                            scrollTop: 0 
                        }, 100 );
                    });
                    return false;
                }
            });
        });

        function setActiveEntry($entry) {
            $('.kss-nav .kss-menu-item').removeClass('kss-active');
            $entry.addClass('kss-active');
            $('.kss-nav .kss-menu-item ul').hide(0);
            $('.kss-nav .kss-menu-item.kss-active ul').show(0);
        }
    });
}(jQuery));