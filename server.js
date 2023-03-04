// setup server
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var babelpolyfill = require('babel-polyfill')
// import{noteRoute }from './route/noteRoute.js';
var bookRoute = require('./route/bookRoute')
var storeRoute = require('./route/storeRoute')
const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/v1", bookRoute)
app.use("/api/v1", storeRoute)

app.get('/', (req, res) => {
    res.send('Express Hello World')
})

app.listen(3000, () => {
    console.log("server start")
})
