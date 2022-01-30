const {login, signup, logout} = require('./auth.controller')
const express = require('express')

const router = express.Router()

router.post('/login', login)
router.post('/signin', signup)
router.post('/logout', logout)

module.exports = router