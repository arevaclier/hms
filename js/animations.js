/**
 * Created by arthur on 23/11/16.
 */

$(document).ready(function(){

    //Dropdown menu
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    //Hidden well
    $('.navigation-well').hide();

    $('.light-tile').click(function () {

       $('.switch-tile').toggle(200);
       $('.torrent-tile').toggle(200);
       $('.media-tile').toggle(200);
       $('.light-well').fadeToggle(200);
    });

    $('.switch-tile').click(function () {

        $('.light-tile').toggle(200);
        $('.torrent-tile').toggle(200);
        $('.media-tile').toggle(200);
        $('.switch-well').fadeToggle(200);
    });

    $('.torrent-tile').click(function () {
        $('.light-tile').toggle(200);
        $('.switch-tile').toggle(200);
        $('.media-tile').toggle(200);
        $('.torrent-well').fadeToggle(200);
    });

    $('.media-tile').click(function () {
        $('.light-tile').toggle(200);
        $('.torrent-tile').toggle(200);
        $('.switch-tile').toggle(200);
        $('.media-well').fadeToggle(200);
    });
});


