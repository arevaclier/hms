/**
 * Created by arthur on 03/12/16.
 */
$(document).ready(function () {
    $('.lamp-group').click(function () {
        if($(this).hasClass("light-room-off")) {
            $(this).addClass("light-room-on");
            $(this).removeClass("light-room-off");
            $(this).find(".state").text("ON");
        }
        else {
            $(this).addClass("light-room-off");
            $(this).removeClass("light-room-on");
            $(this).find(".state").text("OFF");
        }
    })

});