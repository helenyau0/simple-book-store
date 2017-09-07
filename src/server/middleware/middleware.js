const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(express.static('public'))

module.exports = router
