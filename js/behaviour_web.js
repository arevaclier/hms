/**
 * Created by arthur on 03/12/16.
 */
$(document).ready(function () {

    //Home page
    $('.lamp-group').click(function () {
        if($(this).hasClass("light-room-off")) {
            $(this).toggleClass('light-room-off light-room-on');
            $(this).find(".state").text("ON");
        }
        else {
            $(this).toggleClass('light-room-off light-room-on');
            $(this).find(".state").text("OFF");
        }
    })
    $('.switch').click(function () {
        if($(this).hasClass("switch-off")) {
            $(this).toggleClass("switch-on switch-off");
            $(this).find(".state").text("ON");
        }
        else {
            $(this).toggleClass("switch-on switch-off");
            $(this).find(".state").text("OFF");
        }
    });

    //Lights page

    //All on / all off buttons
    $('.all-button').click(function () {
        if($(this).hasClass("all-on-1")) {
            $('.room-1').removeClass("light-room-off");
            $('.room-1').addClass("light-room-on");
            $('.room-1-text').text("ON");
        }
        else if($(this).hasClass("all-off-1")) {
            $('.room-1').removeClass("light-room-on");
            $('.room-1').addClass("light-room-off");
            $('.room-1-text').text("OFF");
        }
        else if($(this).hasClass("all-on-2")) {
            $('.room-2').removeClass("light-room-off");
            $('.room-2').addClass("light-room-on");
            $('.room-2-text').text("ON");
        }
        else if($(this).hasClass("all-off-2")) {
            $('.room-2').removeClass("light-room-on");
            $('.room-2').addClass("light-room-off");
            $('.room-2-text').text("OFF");
        }
        else if($(this).hasClass("all-on-3")) {
            $('.room-3').removeClass("light-room-off");
            $('.room-3').addClass("light-room-on");
            $('.room-3-text').text("ON");
        }
        else if($(this).hasClass("all-off-3")) {
            $('.room-3').removeClass("light-room-on");
            $('.room-3').addClass("light-room-off");
            $('.room-3-text').text("OFF");
        }
    });

});