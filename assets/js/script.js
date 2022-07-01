// target all buttons and text areas
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

// target the day paragraph in the header
var currentDay = $('#currentDay');


//create arrays of textareas and buttons so we don't have to do a bunch of manual stuff
timeblocks = [text9am, text10am, text11am, text12pm, text1pm, text2pm, text3pm, text4pm, text5pm];
saveButtons = [btn9am, btn10am, btn11am, btn12pm, btn1pm, btn2pm, btn3pm, btn4pm, btn5pm];

// create a moment for the current date and time
var now = moment();

// var now = {hour: function(){return 11;}}; // for testing purposes

// apply formatting to textareas
for (i=0; i < timeblocks.length; i++){
    if (now.hour() == timeblocks[i].data("hour")) {
        timeblocks[i].addClass("present");
    } else if (now.hour() > timeblocks[i].data("hour")) {
        timeblocks[i].addClass("past");
    } else if (now.hour() < timeblocks[i].data("hour")) {
        timeblocks[i].addClass("future");
    }
}

//add click listeners to save buttons
for (i=0; i < saveButtons.length; i++) {
    saveButtons[i].click(saveToLocal);
}
 
// save events to localstorage
function saveToLocal(e) {
    console.log(e.currentTarget.parentElement.previousElementSibling);
    localStorage.setItem(e.currentTarget.parentElement.previousElementSibling.id, e.currentTarget.parentElement.previousElementSibling.value);
}

// Display the current day and populate the timeblocks from localStorage, if they exist
function init() {
    currentDay.text(now.format('dddd, MMMM Do YYYY'));
    text9am.val(localStorage.getItem("9amText"));
    text10am.val(localStorage.getItem("10amText"));
    text11am.val(localStorage.getItem("11amText"));
    text12pm.val(localStorage.getItem("12pmText"));
    text1pm.val(localStorage.getItem("1pmText"));
    text2pm.val(localStorage.getItem("2pmText"));
    text3pm.val(localStorage.getItem("3pmText"));
    text4pm.val(localStorage.getItem("4pmText"));
    text5pm.val(localStorage.getItem("5pmText"));
}

// run this when the page loads
init();