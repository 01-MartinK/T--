if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("src/workers/sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error)
    });
}

const doc = document;
let borsiElektriHind = 300
let kodu_masinad = []
createNewDevice("ahi",120)

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

function createNewDevice(name="",kulu=0){
    const b = new Seade(name,kulu)
    kodu_masinad.push(b)
}

const kodu_elektri_text = doc.querySelector("#kodu-elektri-kulu")
const kodu_elektri_hind_text = doc.querySelector("#borsi-hinna-text")
const borsi_text = doc.querySelector("#kodu-elektri-hind")

kodu_elektri_text.innerHTML = getKoguKoduElektriKulu()+"KW"
kodu_elektri_hind_text.innerHTML = getKoguKoduElektriHind(getKoguKoduElektriKulu())+"€"
borsi_text.innerHTML = borsiElektriHind+"€"