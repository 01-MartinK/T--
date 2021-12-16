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