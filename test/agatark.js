const { exec } = require('child_process');
exec('node sample.js c604', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
})

Promise
.all([
    api.patch("/devices?id="+heaterId, {
        "setpoint": 25
    }),
])