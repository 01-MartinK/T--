// SERVICE WORKER INITIALIZATION
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("src/workers/sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error)
    });
}

// INITIALIZATION
const doc = document;

//SIMPLE DATA REFRESHING
doc.querySelector("#first-time-markin").innerHTML = "Kell "+(getCurrentHour()+1)+".00"
doc.querySelector("#second-time-markin").innerHTML = "Kell "+(getCurrentHour()+2)+".00"
doc.querySelector("#third-time-markin").innerHTML = "Kell "+(getCurrentHour()+3)+".00"

addEventListener("getCurrentPrice", refresh_data, getCurrentPrice)
// UPDATES STOCK PRICE
function refresh_data(){
    const current_price = doc.querySelector("#current-price")
    const next_price = doc.querySelector("#next-price")
    const next_next_price = doc.querySelector("#next-next-price")
    const next_next_next_price = doc.querySelector("#next-next-next-price")
    const average_price = doc.querySelector("#avg-price")

    // PRICE UPDATE AND SET
    current_price.innerHTML = getHourPrice(getCurrentHour()-1)+" / MWh"
    next_price.innerHTML = getHourPrice(getCurrentHour())+" / MWh"
    next_next_price.innerHTML = getHourPrice(getCurrentHour()+1)+" / MWh"
    next_next_next_price.innerHTML = getHourPrice(getCurrentHour()+2)+" / MWh"
    average_price.innerHTML = (Math.round((borsiElektriKeskmineHind + Number.EPSILON) * 100) / 100)+" / MWh"

    // COLORIZATION
    var item_list = ["#current-price","#next-price","#next-next-price","#next-next-next-price"]
    for(let i = 0; i<item_list.length;i++){
        if (getHourPrice(getCurrentHour()+i-1) > getHourPrice(getCurrentHour()+i-2)){
            
            doc.querySelector(item_list[i]).innerHTML += '<i class="small material-icons">arrow_drop_up</i>'
        }else{
            
            doc.querySelector(item_list[i]).innerHTML += '<i class="small material-icons">arrow_drop_down</i>'
        }
        
        if (getHourPrice(getCurrentHour()+i-1) > borsiElektriKeskmineHind){
            doc.querySelector(item_list[i]).className = "hind-kallim"
        }else{
            doc.querySelector(item_list[i]).className = "hind-odavam"
        }
    
    }
}
