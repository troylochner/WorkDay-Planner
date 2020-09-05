   
//PLAN OF ATTACK
initCal();

//FUNCTION - GET DATE
function getDate(){
var fullDate = new Date()
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
var currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
return currentDate;
}

function makeDailyTimes(){
var timeBlock =['00.00','01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'];
return timeBlock
}

function initCal(){
timeBlock = makeDailyTimes() ;
console.log("initCal -> timeBlock", timeBlock)
theDate = getDate() ; 
$("#currentDay").append(theDate);
console.log("initCal -> theDate", theDate);


for ( i=0; i < timeBlock.length ; i++ ){
console.log(timeBlock[i]);

var blockRow = $('<tr>')
//ADJUST OUT OF WORK HOUR ROWS"
if ( timeBlock[i]< 8 || timeBlock[i] > 18){
blockRow.addClass("hour row past");
} else {
blockRow.addClass("hour row");
}

//FORMAT EACH ROW ON ITS OWN
var blockHeader = $('<td>'+ timeBlock[i]+ '</td>');
blockHeader.addClass("time-block")
var blockContent = $('<td><textarea>'+'something'+'</textarea></td>');
blockContent.addClass("time-block description")
var blockButton=$('<button>');
blockButton.attr("data-id"+i)
blockButton.addClass("saveBtn");

//<input type="text" id="myText" value="Some text...">




blockRow.append(blockHeader,blockContent,blockButton);
//MAKE STYLE FOR TIME   $("h1, h2, p").addClass("blue");
//SET INDEX FOR EACH NOW ROW MADE   $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
$('#timeline').append(blockRow);
};}



