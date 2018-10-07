const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1337
const monk = require ('monk')
const db = monk ('mongodb://admin:HelioTrainingTvDemo123@ds041157.mlab.com:41157/tv-demo-database')
const TVShowsCollection = db.get('tvshows')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
   })

// let TVShowArr=[]

app.get('/shows', async (req, res) => {
  try{
  const TVShowArr = await TVShowsCollection.find({})
  res.send(TVShowArr)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

app.post('/shows',  async(req, res) => {
  try {
  const saveTvShow = await TVShowsCollection.insert(req.body)
  res.send(saveTvShow)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

app.put('/shows', (req, res) => {
  console.log(req.body)
  res.send(`put for ${req.body.name}`)
})

app.delete('/shows', (req, res) => res.send(`delete for ${req.query.name}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
