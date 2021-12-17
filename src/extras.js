// GET ARRAY AND REMOVE A SINGLE REQUESTED ITEM
function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele.nimi != value; 
    });
}

// GET AVG OF ARRAY OR INT OF FLOAT OR DOUBLE
function avg(list = []){
    let b = 0
    for(let i = 0;i<list.length;i++){
        b += list[i].price
    }
    b = b/list.length
    return b
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

// GET CURRENT DAY
function getCurrentDay(){
    const d = new Date();
    return String(d.getDate());
}

// GET CURRENT MONTH
function getCurrentMonth(){
    const d = new Date();
    return String(d.getMonth()+1);
}

// GET CURRENT YEAR
function getCurrentYear(){
    const d = new Date();
    return String(d.getUTCFullYear());
}
