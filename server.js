const app = require('express')()
const routes = require('./src/server/routes')
const middleware = require('./src/server/middleware/middleware')
const pug = require('pug')

app.set('view engine', 'pug')
app.set('views', __dirname + '/src/views')

app.use(middleware)
app.use(routes)

const port = process.env.PORT || 3005
app.listen(port, () => console.log(`Running on ${port}`))
