function anchorWithoutHashUrl(element){
    'use strict'

    $(element).click(function(e){
        e = e ? e : event;

        e.preventDefault();

        var position = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(position).offset().top
        }, 1000);

        $(window).on('hashchange', function(e){
            e = e ? e : event;
            history.replaceState ("", document.title, e.originalEvent.oldURL);
        });
    });
};