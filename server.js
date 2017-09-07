const express = require('express')
const app = express()
const routes = require('./src/server/routes')
const bodyParser = require('body-parser')
const pug = require('pug')

app.set('view engine', 'pug')
app.set('views', __dirname + '/src/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, reponse) => {
  reponse.send('root route')
})

app.use('/', routes)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Running on ${port}`))
