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
const UI = new UIManager();

//EVENT LISTENERS
const device_creation_button = doc.querySelector("#submit-device-creation")
device_creation_button.addEventListener('click',CreateDevice)

let borsiElektriHind = 30
let kodu_masinad = []
AddDeviceToList("ahi",120)
AddDeviceToList("külmik",300)

function getKoguKoduElektriKulu(){
    let kulu = 0;
    kodu_masinad.forEach(function(appliance){
        kulu += appliance.kulu;
    })
    return kulu;
}

function getKoguKoduElektriHind(elektri_kulu){
    return elektri_kulu * borsiElektriHind;
}

function CreateDevice(){
    const name = doc.querySelector("#device-name-input").value
    const kulu = doc.querySelector("#device-cost-input").value

    if (name !== "" && kulu !== null){
        AddDeviceToList(name,kulu)
        UI.updateDeviceList(kodu_masinad)
    }else{
        console.log("error")
    }
    reshesh_data()
}

function AddDeviceToList(name,kulu=0){
    const b = new Seade(name,kulu)
    kodu_masinad.push(b)
}

const kodu_elektri_text = doc.querySelector("#kodu-elektri-kulu")
const kodu_elektri_hind_text = doc.querySelector("#borsi-hinna-text")
const borsi_text = doc.querySelector("#kodu-elektri-hind")
document.querySelector("#kellaaeg").innerHTML = getCurrentTime()

reshesh_data()
UI.updateDeviceList(kodu_masinad)

function reshesh_data(){
    kodu_elektri_text.innerHTML = getKoguKoduElektriKulu()+"KW"
    kodu_elektri_hind_text.innerHTML = getKoguKoduElektriHind(getKoguKoduElektriKulu())+"€"
    borsi_text.innerHTML = borsiElektriHind+"€"
}

function deleteShit(item){
    const device_cont = document.querySelector("#device-container")
    device_cont.removeChild(item.parentElement);
    kodu_masinad = arrayRemove(kodu_masinad, item.id);
    reshesh_data()
}