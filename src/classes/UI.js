// UI functionality
class UIManager {

    // DELETES LAST LIST AND MAKES DEVICES WIA NEW LIST
    updateDeviceList(device_list = []){
        const device_cont = document.querySelector(".seadmed")
        device_cont.innerHTML = "";

        // FOR EACH DEVICE IN LIST
        device_list.forEach(function(device){
            const html = `
            <div class="seade col s2 offset-s1 center-align">
                <img class="seadme-pilt" id="${device.nimi}" onclick="deleteDevice(this)" src="disain/pics/gear.png">
                <div class="seadme-text"> ${device.nimi} </div>
                <p class="seadme-text l">${device.kulu}Wh</p>
            </div>
            `
            device_cont.innerHTML += html;
            ;
        })
        
    }
}