const express = require("express")
const app_routes = express.Router()

const {addItem , getMasteritems} = require('../Controller/salesController')

app_routes.post("/items", addItem)
app_routes.get('/getMaster',getMasteritems)
module.exports =app_routes