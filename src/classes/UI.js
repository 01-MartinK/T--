// UI functionality
class UIManager {

    // DELETES LAST LIST AND MAKES DEVICES WIA NEW LIST
    updateDeviceList(device_list = []){
        const device_cont = document.querySelector(".seadmed")
        device_cont.innerHTML = "";

        // FOR EACH DEVICE IN LIST
        device_list.forEach(function(device){
            const html = `
            <div class="seade col s2 offset-s3 center-align">
                <img class="seadme-pilt" src="disain/pics/fan.png">
                <div class="seadme-text"> ${device.nimi} </div>
                <p class="seadme-text l">${device.kulu}KWh</p>
            </div>
            `
            device_cont.innerHTML += html;
            ;
        })
        
    }
}