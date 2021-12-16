function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele.nimi != value; 
    });
}

function getCurrentHour(){
    const d = new Date();
    return d.getDay();
}

function getCurrentTime(){
    const d = new Date();
    return d.getTime();
}