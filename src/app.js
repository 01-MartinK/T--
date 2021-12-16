if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
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