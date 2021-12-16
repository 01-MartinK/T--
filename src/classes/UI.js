// UI functionality
class UIManager {

    // DELETES LAST LIST AND MAKES DEVICES WIA NEW LIST
    updateDeviceList(device_list = []){
        const device_cont = document.querySelector("#device-container")
        device_cont.innerHTML = "";

        // FOR EACH DEVICE IN LIST
        device_list.forEach(function(device){
            const html = `
            <div class="device-slot">
                <h3>${device.nimi}</h3>
                <h4>${device.kulu}</h4>
                <a onclick="deleteDevice(this);" id="${device.nimi}">X</a>
            </div>
            `
            device_cont.innerHTML += html;
            ;
        })
        
    }
}