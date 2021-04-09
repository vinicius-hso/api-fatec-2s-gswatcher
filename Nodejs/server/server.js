const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('../models/database')

//Config
    // body-parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    
module.exports = app
