// OneSignal is defined as an array here and uses push calls to support OneSignalSDK.js being loaded async.
var OneSignal = OneSignal || [];

OneSignal.push(["init", {
  appId: "adacba74-9a39-441a-9c0a-952fbe336ec0",
  // Your other init settings
}]);

//Another way to initialize OneSignal
window.OneSignal = window.OneSignal || [];
  
OneSignal.push(function() {
  OneSignal.init({
    appId: "adacba74-9a39-441a-9c0a-952fbe336ec0",
    // Other init setting for future updates
  });
});