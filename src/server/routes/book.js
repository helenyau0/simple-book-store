const router = require('express').Router()

router.get('/asdf', (request, response) => {
  response.send('working?')
})

module.exports = router
