//PLAN OF ATTACK
var rightNow;
var calendarStorage = JSON.parse(localStorage.getItem('calendarStorage'));
var eventTimeID ;
var eventInfo ; 
initCal();



//GET THE CURRENT MOMENT - MAKE LOOK PRETTY
function getDate() {
    var rightNow = moment().format('LLL')
    return rightNow;
}

//INITIALIZE THE CALENDAR
function initCal() {
    theDate = getDate();
    $("#currentDay").append(theDate);

    //FOR EACH HOUR IN THE DAY - MAKE A ROW
    //ADJUSTED TIME - DOING 7 TO 7
    for (i = 7; i < 20; i++) {
        var displayTime = moment().hour(i).minute(0).second(0) //THIS CAN ACT AS A GOOD UUID-TYPE INDEX - THIS IS OUR EPOCH DATE
        var nextTime = moment().hour(i + 1).minute(0).second(0)

        //console.log(moment(calTime).utc());

        //MAKE TABLE ROW ELEMENT
        var row = $("<div>").addClass("row").attr("data-id",i).css("width", "100%");


        //MAKE THE TABLE DATA ELEMENT - DISPLAY TIME OF DAY
        var blockTime = $("<div>").attr("data-id",i).addClass("col-md-2 hour").text(moment(displayTime).format("LT"));

        //MAKE TABLE DATA - DISPLAY WHAT IS HAPPENING AT THAT TIME
        var blockContent = $("<input>").addClass("col-md-8 description");
        blockContent.attr("id", i, "placeholder", "Enter an event here...")

        //CONDITIONAL IF THE TIME IS IN THE PAST / PRESENT / FUTURE
        if (moment().isBetween(displayTime, nextTime) === true) {
            blockContent.addClass("present")
        } else if (moment().isBefore(displayTime)) {
            blockContent.addClass("future")
        } else {
            blockContent.addClass("past")
        }

        //MAKE BUTTON FOR THE ROW
        var saveButton = $("<button>").addClass("col-md-2 saveBtn").attr("data-id",i).text("Save");


        //PUT THE ROW TOGETHER AND APPEND TO THE CALENDAR ELEMENT
        row.append(blockTime).append(blockContent).append(saveButton);
        $('#calendar').append(row);
    };
}


//SAVE DATA //
$('.saveBtn').on("click", function (e) {
    eventTimeID = this.getAttribute("data-id");
    //var eventTimeID = this.getAttribute("data-id");
    var findEventTimeID = "#" + eventTimeID;
    eventInfo = $(findEventTimeID).val()
    //var eventInfo = $(findEventTimeID).val()
    console.log("Event Time ID :", eventTimeID);
    console.log("Event Info :", $(findEventTimeID).val())

})

function setStorage(eventTimeID, eventInfo) {
    storage[eventTimeID] = eventInfo;
    localStorage.setItem('storage', JSON.stringify(storage));
}