const express = require('express')
const app = express()
const routes = require('./src/server/routes')

app.get('/', (request, reponse) => {
  reponse.send('hello der')
})

app.use('/', routes)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Running on ${port}`))
