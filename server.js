const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./src/server/routes')
const port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', (__dirname, 'src/views'));

app.use('/', routes)


app.listen(3000)
console.log('Listening on port: 3000');

module.exports = app
