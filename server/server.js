const express = require("express")
const app= express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
require('dotenv').config()


app.use(express.json())
app.use(cors())
app.use("/", require('./Routes/salesRoutes'))


app.listen(PORT,()=>console.log(`Server On Connected Port NO:${PORT}`))
