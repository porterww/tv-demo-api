const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1337

app.use(bodyParser.json())

app.get('/shows', (req, res) => res.send('get-Here is the show'))

app.post('/shows', (req, res) => {
    console.log(req.body)
    res.send(`post for ${req.body.name}`)})

app.put('/shows', (req, res) => {
    console.log(req.body)
    res.send(`put for ${req.body.name}`)})

app.delete('/shows', (req, res) => res.send(`delete for ${req.query.name}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))