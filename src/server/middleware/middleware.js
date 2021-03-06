const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride('_method'))

module.exports = router
