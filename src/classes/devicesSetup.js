const UI = new UIManager();

let kodu_masinad = []
AddDeviceToList("ahi",120)
AddDeviceToList("külmik",300)

//const device_creation_button = document.querySelector("#submit-device-creation")
//device_creation_button.addEventListener('click',CreateDevice)

// CREATE DEVICE
function CreateDevice(){
    const name = document.querySelector("#device-name-input").value
    const kulu = document.querySelector("#device-cost-input").value

    if (name !== "" && kulu !== null){
        AddDeviceToList(name,kulu)
        UI.updateDeviceList(kodu_masinad)
    }else{
        console.log("error")
    }
    reshesh_data()
}

// DELETE DEVICE
function deleteDevice(item){
    const device_cont = document.querySelector("#device-container")
    device_cont.removeChild(item.parentElement);
    kodu_masinad = arrayRemove(kodu_masinad, item.id);
    reshesh_data()
}

// ADD DEVICE TO LIST
function AddDeviceToList(name,kulu=0){
    const b = new Seade(name,kulu)
    kodu_masinad.push(b)
}
