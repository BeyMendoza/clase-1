const express = require('express');
const appConfigs = require('./configs');




const app = express();



app.get("/", (req, res) => {
    res.send("Hello, world!");
})





app.listen(appConfigs.server.PORT, () => {
    console.log(`App running at http://localhost:${appConfigs.server.PORT}`);
})