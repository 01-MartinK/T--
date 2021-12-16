class UIManager {
    updateDeviceList(device_list = []){
        const device_cont = document.querySelector("#device-container")
        device_cont.innerHTML = "";

        device_list.forEach(function(device){
            const html = `
            <div class="device-slot" id="${device.name}">
                <h3>${device.name}</h3>
                <h4>${device.kulu}</h4>
            </div>
            `
            device_cont.innerHTML += html;
            ;
        })
        
    }
}