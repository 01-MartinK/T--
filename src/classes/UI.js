class UIManager {
    updateDeviceList(device_list = []){
        const device_cont = document.querySelector("#device-container")
        device_cont.innerHTML = "";

        device_list.forEach(function(device){
            const html = `
            <div class="device-slot" id="${device.nimi}">
                <h3>${device.nimi}</h3>
                <h4>${device.kulu}</h4>
                <a onclick="deleteShit(this);">X</a>
            </div>
            `
            device_cont.innerHTML += html;
            ;
        })
        
    }
}