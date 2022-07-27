const indexRouter = require("express").Router();
const homeRouter = require("./home.js");



indexRouter.use("/", homeRouter)






module.exports = indexRouter;