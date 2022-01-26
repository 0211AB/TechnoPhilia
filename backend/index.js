const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')



require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

const patientRoutes = require('./routes/patient')

const URI = `mongodb+srv://admin:${process.env.DB_PASS}@cluster01.5gpna.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((e) => {
        console.log(e)
    })


app.use(bodyParser.json())
app.use(cors())

app.use(patientRoutes)

app.listen(port, () => {
    console.log("App is running on port ", port)
})