const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')


router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

module.exports = router
