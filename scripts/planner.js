//PLAN OF ATTACK
var rightNow ; 
initCal();

//GET THE CURRENT MOMENT - MAKE LOOK PRETTY
function getDate(){
    var rightNow = moment().format('LLL')
    return rightNow;
}


//INITIALIZE THE CALENDAR
function initCal(){
theDate = getDate() ; 
$("#currentDay").append(theDate);

//FOR EACH HOUR IN THE DAY - MAKE A ROW
for ( i=0; i < 24 ; i++ ){
var displayTime = moment().hour(i).minute(0).second(0) //THIS CAN ACT AS A GOOD UUID-TYPE INDEX - THIS IS OUR EPOCH DATE
var nextTime = moment().hour(i+1).minute(0).second(0)

//console.log(moment(calTime).utc());

//MAKE TABLE ROW ELEMENT
var blockRow = $('<tr>')
blockRow.attr("data-id",displayTime);

//CONDITIONAL IF THE TIME IS IN THE PAST / PRESENT / FUTURE
if (moment().isBetween(displayTime,nextTime)===true){
    blockRow.addClass("present")
} else if (moment().isBefore(displayTime)){
    blockRow.addClass ("past")
} else {
    blockRow.addClass("future")
}

//MAKE THE TABLE DATA ELEMENT - DISPLAY TIME OF DAY
var blockTime = $('<td>'+ moment(displayTime).format('LT') + '</td>');
//blockHeader.addClass("time-block")

//MAKE TABLE DATA - DISPLAY WHAT IS HAPPENING AT THAT TIME
var blockContent = $('<td><textarea>'+'something'+'</textarea></td>');
//blockContent.addClass("time-block description")

//MAKE BUTTON FOR THE ROW
var blockButton=$('<button>');
//blockButton.attr("data-id"+i)
//blockButton.addClass("saveBtn");

//PUT IT ALL TOGETHER
blockRow.append(blockTime,blockContent,blockButton);
//MAKE STYLE FOR TIME   $("h1, h2, p").addClass("blue");
//SET INDEX FOR EACH NOW ROW MADE   $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
$('#timeline').append(blockRow);

};}



