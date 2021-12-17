const UI = new UIManager();
const LS = new storageManager();

const elektrikulu_text = document.querySelector("#elektri-kulu")
const elektrikulu_raha = document.querySelector("#elektri-hind")
const avg_hind = document.querySelector("#avg-hind")

let kodu_masinad = []
// ADD TWO SIMPLE DEVICES

const device_creation_button = document.querySelector("#submit-device-creation")
device_creation_button.addEventListener('click',CreateDevice)


// CREATE DEVICE
function CreateDevice(){
    const name = document.querySelector("#device-name-input").value
    const kulu = document.querySelector("#device-cost-input").value

    if (name !== "" && kulu !== null){
        AddDeviceToList(name,parseInt(kulu))
        UI.updateDeviceList(kodu_masinad)
    }else{
        console.log("error")
    }
}


// DELETE DEVICE
function deleteDevice(item){
    const device_cont = document.querySelector(".seadmed")
    device_cont.removeChild(item.parentElement);
    kodu_masinad = arrayRemove(kodu_masinad, item.id);
    refreshData()
    LS.saveAttributes(kodu_masinad)
}

// ADD DEVICE TO LIST
function AddDeviceToList(name,kulu=0){
    const b = new Seade(name,kulu)
    kodu_masinad.push(b)
    refreshData()
    LS.saveAttributes(kodu_masinad)
}


refreshData()
function refreshData(){
    elektrikulu_text.innerHTML = getKoguKoduElektriKulu()+" kWh"
    elektrikulu_raha.innerHTML = getKoguKoduElektriHind(getKoguKoduElektriKulu())+" €"
    avg_hind.innerHTML = calculatesavings()+" €"
}

function getKoguKoduElektriKulu(){
    let kulu = 0;
    kodu_masinad.forEach(function(appliance){
        kulu += appliance.kulu;
    })
    return kulu;
}

// FULL USAGE MULTIPLIED BY THE PRICE
function getKoguKoduElektriHind(elektri_kulu){
    return Math.round(elektri_kulu * (borsiElektriHind / 1000));
}

kodu_masinad = LS.getAttributes('devices');
UI.updateDeviceList(kodu_masinad);
refreshData()

// SAVINGS
function calculatesavings(){
    var hind = getKoguKoduElektriHind(getKoguKoduElektriKulu())
    var vahe = (borsiElektriKeskmineHind-borsiElektriHind)
    return Math.round(vahe)
}