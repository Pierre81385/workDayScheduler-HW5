var timeBlocks = $(".container");

//function to get date and time

var date = moment().format("MMM Do YY");
console.log(date);

var time = moment().format("h:mm");
console.log(time);

$("#currentDay").text(date);

//Function to save notes

//var notesArray = [];

function saveNotes() {
  $("input").each(function () {
    var notes = $(this).val();

    var key = $(this).data();
    console.log(key);
    //console.log(notesArray);
    if (notes != "") {
      //notesArray.push(notes);

      localStorage.setItem(JSON.stringify(key), notes);
    }
  });
}

$("input").each(function () {
  var savedKey = $(this).data();
  var savedNote = localStorage.getItem(JSON.stringify(savedKey));
  console.log(savedNote);
  $(this).val(savedNote);
});

//event listener
var saveButton = $(".saveBtn");
saveButton.on("click", saveNotes);

//function to change color

$(".hour").each(function () {
  var hour = $(this).data();
  console.log(hour);
  console.log(moment().hour());

  if (hour < moment().hour()) {
    $(this).css("background-color", "red");
  } else if (hour == moment().hour()) {
    $(this).css("background-color", "grey");
  } else {
    $(this).css("background-color", "green");
  }
});
