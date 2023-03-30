// required packages
const express = require('express')
const fs = require('fs')

// app config
const app = express()
const PORT = 8000
app.set("view engine", "ejs")

// helper function to read the dino db
const readDinos = () => {
    // use the filesystem to read the dino json
    const dinosaurs = fs.readFileSync("./dinosaurs.json")
    // parse the raw json to js
    const dinoData = JSON.parse(dinosaurs)
    // return the dino data
    return dinoData
}

// readDinos()

// routes
// GET / -- index show route for the app
app.get('/', (req, res) => {
    res.render("index.ejs")
})

// GET /dinosaurs -- READ return an array of dinos
app.get('/dinosaurs', (req, res) => {
    const dinos = readDinos()
    res.render("dinos/index.ejs", {
        // equal to { dinos: dinos }
        dinos
    })
})

// GET /dinosuars/new -- show route for a form that posts to POST /dinosaurs
app.get('/dinosaurs/new', (req, res) => {
    res.send('show a form that will POST a new dino')
})

// POST /dinosaurs -- CREATE a new dino in the db
app.post('/dinosaurs', (req, res) => {
    res.send('CREATE a new dino!')
})

// GET /dinosaurs/:id -- READ a single dino @ :id
app.get('/dinosaurs/:id', (req, res) => {
    res.send('show details about dino id: ' + req.params.id)
})

// listen on a port
app.listen(PORT, () => {
    console.log(`is that RESTful dinos I hear? on port ${PORT} 🦕`)
})
