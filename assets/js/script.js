console.log("I'm a JavaScript file linked to this page!");

var text9am = $('#9amText');
var btn9am = $('#9amBtn');

var text10am = $('#10amText');
var btn10am = $('#10amBtn');

var text11am = $('#11amText');
var btn11am = $('#11amBtn');

var text12pm = $('#12pmText');
var btn12pm = $('#12pmBtn');

var text1pm = $('#1pmText');
var btn1pm = $('#1pmBtn');

var text2pm = $('#2pmText');
var btn2pm = $('#2pmBtn');

var text3pm = $('#3pmText');
var btn3pm = $('#3pmBtn');

var text4pm = $('#4pmText');
var btn4pm = $('#4pmBtn');

var text5pm = $('#5pmText');
var btn5pm = $('#5pmBtn');

timeblocks = [text9am, text10am, text11am, text12pm, text1pm, text2pm, text3pm, text4pm, text5pm];

var now = moment();
// var now = {hour: function(){return 12;}}; // for testing purposes

for (i=0; i < timeblocks.length; i++){
    if (now.hour() == timeblocks[i].data("hour")) {
        console.log("NOW" + timeblocks[i]);
        timeblocks[i].addClass("present");
    } else if (now.hour() > timeblocks[i].data("hour")) {
        console.log("PAST" + timeblocks[i]);
        timeblocks[i].addClass("past");
    } else if (now.hour() < timeblocks[i].data("hour")) {
        console.log("FUTURE" + timeblocks[i]);
        timeblocks[i].addClass("future");
    }
}
