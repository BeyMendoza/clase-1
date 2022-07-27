const express = require('express');
const appConfigs = require('./configs');

const {join} = require('path');
const indexRouter = require('./routers');


const app = express();


app.set("views", join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use("/", indexRouter)




app.listen(appConfigs.server.PORT, () => {
    console.log(`App running at http://localhost:${appConfigs.server.PORT}`);
})