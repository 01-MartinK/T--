//Imports
const express = require('express')

//Setup and configure app
const app = express()
const port = 5000

//route request
app.use('/', (req, res) => {
    res.json("Hello from Node")
});

//Initialize app
app.listen(port, () => console.log(`Server listening on port ${port}!`))