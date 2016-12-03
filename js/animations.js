/**
 * Created by arthur on 23/11/16.
 */

$(document).ready(function(){

    //Home page

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

    //Lights page

    $('.huepicker').hide();

    $('.hide-lights-1').click(function () {
        $('.lights-id-1').toggle();
        $(this).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    });

    $('.hide-lights-2').click(function () {
        $('.lights-id-2').toggle();
        $(this).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    });

    $('.hide-lights-3').click(function () {
        $('.lights-id-3').toggle();
        $(this).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    });

    $(".expand-tile").click(function () {
        $('.lamp-group').toggle();
        $('.expand-tile').toggle();
        $(this).toggle();
        $(this).prev().toggle();
        $(this).find(".glyphicon").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        $('.room').toggle();
        $('.room-hr').toggle();
        $('.huepicker').toggle();


    });
});


