/**
 * Created by arthur on 23/11/16.
 */

$(document).ready(function(){

    //Dropdown menu
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    //Tiles height
    $(window).resize(function() {
        $('.dash-unit').each(function () {
            $(this).height($(this).width());
        });
    });

    $('.dash-unit').each(function () {
        $(this).height($(this).width());
    });

    //Hidden well
    $('.navigation-well').hide();

    $('.light-tile').click(function () {
        $('.switch-tile').toggle(400);
       $('.torrent-tile').toggle(400);
       $('.media-tile').toggle(400);
       $('.light-well').toggle(400);
    });

    $('.switch-tile').click(function () {
        $('.light-tile').toggle(400);
        $('.torrent-tile').toggle(400);
        $('.media-tile').toggle(400);
        $('.switch-well').toggle(400);
    });

    $('.torrent-tile').click(function () {
        $('.switch-tile').toggle(400);
        $('.light-tile').toggle(400);
        $('.media-tile').toggle(400);
        $('.torrent-well').toggle(400);
    });

    $('.media-tile').click(function () {
        $('.switch-tile').toggle(400);
        $('.torrent-tile').toggle(400);
        $('.light-tile').toggle(400);
        $('.media-well').toggle(400);
    });
});


