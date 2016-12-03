/**
 * Created by arthur on 03/12/16.
 */
$(document).ready(function () {
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

});