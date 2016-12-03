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

    //Well
    $('.huepicker').hide();

    //Show / hide lights in a room
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

    //Open / close the color picker
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

    //Color picker
    $('#inlinecolors').minicolors({
        inline: true,
        theme: 'bootstrap'
    });

    //Close color picker
    $('.light-control').click(function () {
        $('.lamp-group').show();
        $('.expand-tile').show();
        $('.room').show();
        $('.room-hr').show();
        $('.huepicker').hide();
        var chevron = $('.expand-tile').find('.glyphicon-chevron-up');
        chevron.removeClass('glyphicon-chevron-up');
        chevron.addClass('glyphicon-chevron-down');
    });

    //Brightness slider
    $("#brightness").slider();
    $("#brightness").on("slide", function(slideEvt) {
        $("#brightness-value").text(slideEvt.value);
    });
});


