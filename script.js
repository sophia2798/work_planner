console.log("linked")


// Create variable to store schedule data for local storage
var storedSchedule = [{9: "nine"},{10: ""},{11: ""},{12: ""},{1: ""},{2: "two"},{3: ""},{4: ""},{5: ""},];
localStorage.setItem("schedule", JSON.stringify(storedSchedule));

// Display each hour's schedule content in the text area
var fetchedSchedule = JSON.parse(localStorage.getItem("schedule"));
    // console.log(fetchedSchedule)
// Define hours variable to translate each iterator to an hour value on a 12 hour clock
var hours = [9,10,11,12,1,2,3,4,5];
for (var i=0; i<storedSchedule.length; i++) {
    currentKey = hours[i];
    content = fetchedSchedule[i][currentKey];
        // console.log(fetchedSchedule[i][currentKey]);
    $("#input"+currentKey).val(content);
}

// Click event for "Save" button that will store the related input value to the local storage
$(".saveBtn").on("click", function() {
        console.log($(this).parent().siblings(".input-info").children("input").val());
    var relatedInput = $(this).parent().siblings(".input-info").children("input").val();
    var value = $(this).attr("value");
    console.log(value)
    // Related key:value -> set value to be the entered input
    storedSchedule[value][hours[value]] = relatedInput;
    console.log(storedSchedule[value][hours[value]]);
    localStorage.setItem("schedule", JSON.stringify(storedSchedule));
})