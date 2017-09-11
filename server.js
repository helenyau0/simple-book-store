const app = require('express')()
const middleware = require('./src/server/middleware/middleware')
const routes = require('./src/server/routes')
const port = process.env.PORT || 3000

app.use(middleware)
app.use('/', routes)

app.set('view engine', 'pug')
app.set('views', (__dirname, 'src/views'));

app.listen(3000)
console.log('Listening on port: 3000');

module.exports = app
