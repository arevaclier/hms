/**
 * Created by arthur on 30/11/16.
 */

//Server address and api key
var address = "http://192.168.0.2/";
var apiKey = "api/oVB0IqYnK7Y7HpOpLj7foeAm7ZFkqCwnwDr-FIye/"
var hueServer = address + apiKey;

function getHSL(h, s) {
    h = Math.round(h * 360 / 65535);
    s = Math.round(s / 255 * 100);

    return [h,s];
}

$(document).ready(function() {

    /*----------------------------------------
        * ROOMS
        * The following code gets the lamps grouped by room and only allows to
        * turn the entire room on or off.
     */

    //Get all the rooms (returns numbers)
   var http = new XMLHttpRequest();
   http.open("GET", hueServer + "groups", false);
   http.send();

   var groups = JSON.parse(http.responseText);

   //Will stock the rooms' names and their current state (on/off)
   var groupNames = [];
   var states = [];

   //Get all rooms names and states
   for (i in groups) {
       http.open("GET", hueServer + "groups/" + i, false);
       http.send();
       var response = JSON.parse(http.responseText);

       //Add them to respective arrays
       groupNames.push(response.name);
       states.push(response.action.on);

   }

   //Initial run, sets the tiles according to the result of the REST call
   for(var i = 0; i < states.length; i++) {
       if(states[i] == true) {

           //Set the background to be on the "ON" state
           $('.lamp-group-id-' + (i+1)).addClass("light-room-on");

           //Set the text to be "ROOM: ON"
           $('.lamp-group-id-' + (i+1)).find('.group-lamp-text').html(groupNames[i] + ":<br/>ON");
       }
       else {

           //Set the background to the "OFF" state
           $('.lamp-group-id-' + (i+1)).addClass("light-room-off");

           //Set the text to be "ROOM: OFF"
           $('.lamp-group-id-' + (i+1)).find('.group-lamp-text').html(groupNames[i] + ":<br/>OFF");
       }
   }

   //Every time a tile is clicked (whichever room)
   $('.lamp-group').click(function () {

       //Check for the correct clicked room
       for (var i = 0; i < states.length; i++) {
           //If the tile has the correct ID,
           if($(this).hasClass('lamp-group-id-' + (i+1))) {

               //If the current state is "ON"
               if(states[i] == true) {

                   //Turn off the lights

                   http.open("PUT", hueServer + "groups/"+ (i+1) +"/action", false);
                   http.send(JSON.stringify({
                       "on":false
                   }));

                   //Update the state to "OFF"
                   states[i] = false;

                   //Set the tile to the "OFF" state and change the text accordingly
                   $(this).removeClass("light-room-on");
                   $(this).addClass("light-room-off");
                   $(this).find('.group-lamp-text').html(groupNames[i] + ":<br/>OFF");
               }
               else {

                   //Turn on the lights

                   http.open("PUT", hueServer + "groups/"+ (i+1) +"/action", false);
                   http.send(JSON.stringify({
                       "on":true
                   }));


                   //Update the state to "ON"
                   states[i] = true;

                   //Set the tile to the "ON" state and change the text accordingly
                   $(this).removeClass("light-room-off");
                   $(this).addClass("light-room-on");
                   $(this).find('.group-lamp-text').html(groupNames[i] + ":<br/>ON");
               }
           }
       }

   });
});