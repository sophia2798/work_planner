console.log("linked")

// Define hours variable to translate each iterator to an hour value on a 12 hour clock
var hours = [9,10,11,12,1,2,3,4,5];

// Pull information from local storage and display on screen
if (localStorage !== null) {
    for (var i=0; i<hours.length; i++) {
    currentKey = hours[i];
    var content = localStorage.getItem(currentKey);
        // console.log(fetchedSchedule[i][currentKey]);
    $("#input"+currentKey).val(content);
};
};

// Click event for "Save" button that will store the related input value to the local storage
$(".saveBtn").on("click", function() {
        // console.log($(this).parent().siblings(".input-info").children("textarea").val());
    event.preventDefault();
    var relatedInput = $(this).parent().siblings(".input-info").children("textarea").val();
    var time = hours[$(this).attr("value")];
    localStorage.setItem(time, relatedInput);
});

// Highlight textareas depending on whether the time is in the past, present, or future
var currentHour = moment().startOf("hour");

for (var j=9;j<18;j++) {
    var test = j;
    var convert = moment(test, "hh").format("h");
    if (currentHour.isAfter(moment(test,'h'))) {
        $("#input"+ convert).attr("class","past")
    }
    else if (currentHour.isSame(moment(test,'h'))) {
        $("#input"+convert).attr("class","present")
    }
    else if (currentHour.isBefore(moment(test,'h'))) {
        $("#input"+convert).attr("class","future")
    }
}

// Display current day in currentDay <p> tag in header of HTML
$("#currentDay").text(moment().format('MMMM Do, YYYY'));