//////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
//////////////////////////////////////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

const {DATABASE_URL, SECRET, PORT} = process.env


// DATABASE CONNECTION
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log(`Connected to Mongoose`))
.on("close", () => console.log(`Disconnected to Mongoose`))
.on("error", (error) => console.log(error))


// Create App Object
const app = express()


//////////////////////////////////////////////////////////////////////////////////
// ROUTES
//////////////////////////////////////////////////////////////////////////////////
app.get("", (req, res) => {
    res.send("It's alive!")
})


//////////////////////////////////////////////////////////////////////////////////
// LISENTER
//////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})