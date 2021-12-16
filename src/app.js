for (let i = 0;i<5;i++){
    console.log("test")
}

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
doc.querySelector("#current-time").innerHTML = "Kell "+(getCurrentHour()-1)+".00"
doc.querySelector("#first-time-markin").innerHTML = "Kell "+(getCurrentHour()+1)+".00"
doc.querySelector("#second-time-markin").innerHTML = "Kell "+(getCurrentHour()+2)+".00"
doc.querySelector("#third-time-markin").innerHTML = "Kell "+(getCurrentHour()+3)+".00"

//EVENT LISTENERS
function getKoguKoduElektriKulu(){
    let kulu = 0;
    kodu_masinad.forEach(function(appliance){
        kulu += appliance.kulu;
    })
    return kulu;
}

// FULL USAGE MULTIPLIED BY THE PRICE
function getKoguKoduElektriHind(elektri_kulu){
    return elektri_kulu * borsiElektriHind;
}

addEventListener("getCurrentPrice", refresh_data, getCurrentPrice)
// UPDATES STOCK PRICE
function refresh_data(){
    const last_price = doc.querySelector("#last-price")
    const current_price = doc.querySelector("#current-price")
    const next_price = doc.querySelector("#next-price")
    const next_next_price = doc.querySelector("#next-next-price")
    const next_next_next_price = doc.querySelector("#next-next-next-price")

    // PRICE UPDATE AND SET
    last_price.innerHTML = getHourPrice(getCurrentHour()-2)+" / MWh"
    current_price.innerHTML = getHourPrice(getCurrentHour()-1)+" / MWh"
    next_price.innerHTML = getHourPrice(getCurrentHour())+" / MWh"
    next_next_price.innerHTML = getHourPrice(getCurrentHour()+1)+" / MWh"
    next_next_next_price.innerHTML = getHourPrice(getCurrentHour()+2)+" / MWh"

    // COLORIZATION
    var item_list = ["#last-price","#current-price","#next-price","#next-next-price","#next-next-next-price"]
    for(let i = 0; i<item_list.length;i++){
        if (getHourPrice(getCurrentHour()+i-2) > getHourPrice(getCurrentHour()+i-3)){
            doc.querySelector(item_list[i]).className = "hind-kallim"
            doc.querySelector(item_list[i]).innerHTML += '<i class="small material-icons">arrow_drop_up</i>'
        }else{
            doc.querySelector(item_list[i]).className = "hind-odavam"
            doc.querySelector(item_list[i]).innerHTML += '<i class="small material-icons">arrow_drop_down</i>'
        }     
    }
}

