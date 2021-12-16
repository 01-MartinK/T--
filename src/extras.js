// GET ARRAY AND REMOVE A SINGLE REQUESTED ITEM
function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele.nimi != value; 
    });
}

// GET CURRENT HOUR
function getCurrentHour(){
    const d = new Date();
    return d.getHours();
}

// GET CURRENT TIME IN MILLISECONDS
function getCurrentTime(){
    const d = new Date();
    return d.getTime();
}

// CURRENT TIKING TIME
var span = document.getElementById('#live-clock');

window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  var date = new Date()
  document.querySelector("#live-clock").innerHTML = date.getDay()+"."+date.getMonth()+"."+date.getUTCFullYear()+" | "+display;
  setTimeout(displayClock, 1000); 
}